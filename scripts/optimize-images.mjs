import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public/Images");

const qualityByName = new Map([
  ["logo.png", 90],
  ["meta.jpg", 84],
]);

async function collectConvertibleFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectConvertibleFiles(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
      files.push(fullPath);
    }
  }

  return files;
}

async function getSize(file) {
  const stat = await fs.stat(file);
  return stat.size;
}

function toRelative(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

function getWebpPath(file) {
  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));
  return path.join(dir, `${base}.webp`);
}

async function convertToWebp(file) {
  const output = getWebpPath(file);
  const before = await getSize(file);
  const quality = qualityByName.get(path.basename(file).toLowerCase()) ?? 82;

  await fs.rm(output, { force: true });
  await sharp(file)
    .rotate()
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(output);

  const after = await getSize(output);
  const deletedInput = await removeWithRetries(file);

  return {
    input: toRelative(file),
    output: toRelative(output),
    before,
    after,
    deletedInput,
  };
}

async function removeWithRetries(file, attempts = 8) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      await fs.unlink(file);
      return true;
    } catch (error) {
      if (error.code !== "EBUSY" && error.code !== "EPERM") {
        throw error;
      }

      if (attempt === attempts - 1) {
        return false;
      }

      await delay(250 * (attempt + 1));
    }
  }

  return false;
}

function formatReport({ input, output, before, after, deletedInput }) {
  const saved = before - after;
  const percent = before === 0 ? 0 : ((saved / before) * 100).toFixed(1);
  const deleteStatus = deletedInput ? "deleted source" : "kept source (locked)";
  return `${input} -> ${output} | ${before}B -> ${after}B | saved ${saved}B (${percent}%) | ${deleteStatus}`;
}

async function main() {
  const files = await collectConvertibleFiles(imagesDir);

  if (files.length === 0) {
    console.log("No PNG/JPG images found in public/Images.");
    return;
  }

  const results = [];
  for (const file of files) {
    results.push(await convertToWebp(file));
  }

  for (const result of results) {
    console.log(formatReport(result));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
