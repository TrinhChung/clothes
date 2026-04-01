import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const webpJobs = [
  {
    input: "public/Images/dongphucongso.png",
    output: "public/Images/dongphucongso.webp",
    width: 1400,
    quality: 78,
    deleteInput: true,
  },
  {
    input: "public/Images/thoitrangxuatkhau.png",
    output: "public/Images/thoitrangxuatkhau.webp",
    width: 1400,
    quality: 78,
    deleteInput: true,
  },
];

const jpgJobs = [
  {
    input: "public/Images/meta.jpg",
    width: 1200,
    quality: 82,
  },
];

async function getSize(file) {
  const stat = await fs.stat(file);
  return stat.size;
}

async function ensureDir(file) {
  await fs.mkdir(path.dirname(file), { recursive: true });
}

async function optimizeWebp({ input, output, width, quality, deleteInput }) {
  const absInput = path.join(root, input);
  const absOutput = path.join(root, output);
  await ensureDir(absOutput);

  const before = await getSize(absInput);
  await sharp(absInput)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true })
    .toFile(absOutput);

  const after = await getSize(absOutput);
  if (deleteInput) {
    await fs.unlink(absInput);
  }

  return { input, output, before, after };
}

async function optimizeJpg({ input, width, quality }) {
  const absInput = path.join(root, input);
  const before = await getSize(absInput);
  const tempOutput = `${absInput}.tmp`;

  await sharp(absInput)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tempOutput);

  const after = await getSize(tempOutput);
  await fs.rename(tempOutput, absInput);
  return { input, output: input, before, after };
}

async function optimizeGoogleDirectory() {
  const dir = path.join(root, "public/Images/google");
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const jobs = entries
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".png")
    .map((entry) => ({
      input: path.join("public/Images/google", entry.name),
      output: path.join(
        "public/Images/google",
        `${path.basename(entry.name, ".png")}.webp`,
      ),
      width: 512,
      quality: 80,
      deleteInput: true,
    }));

  return Promise.all(jobs.map(optimizeWebp));
}

function formatReport({ input, output, before, after }) {
  const saved = before - after;
  const percent = before === 0 ? 0 : ((saved / before) * 100).toFixed(1);
  return `${input} -> ${output} | ${before}B -> ${after}B | saved ${saved}B (${percent}%)`;
}

async function main() {
  const results = [];
  results.push(...(await Promise.all(webpJobs.map(optimizeWebp))));
  results.push(...(await optimizeGoogleDirectory()));
  results.push(...(await Promise.all(jpgJobs.map(optimizeJpg))));

  for (const result of results) {
    console.log(formatReport(result));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
