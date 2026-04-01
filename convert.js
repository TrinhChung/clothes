const fs = require('fs');
const http = require('https');
const path = require('path');

const urls = {
  about: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY2ODFkOTU3MWI1YTQ2NWFiMjJhOTJmYzc5MjI4N2YxEgsSBxCo2eeM6QwYAZIBIwoKcHJvamVjdF9pZBIVQhM2Mzg3ODkxODQ1MjU2Mjg4MDYy&filename=&opi=89354086",
  services: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzUzZmUwMzAzNjQ0YzRjZDJiZjA0NDRjNTVlYWFjODJjEgsSBxCo2eeM6QwYAZIBIwoKcHJvamVjdF9pZBIVQhM2Mzg3ODkxODQ1MjU2Mjg4MDYy&filename=&opi=89354086",
  serviceDetail: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzJlODdhYWE3MWQ2ZjQ1YzdhOTQzNDUyYTc2NjIxMjJjEgsSBxCo2eeM6QwYAZIBIwoKcHJvamVjdF9pZBIVQhM2Mzg3ODkxODQ1MjU2Mjg4MDYy&filename=&opi=89354086",
  products: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzg1OWY0NDAzZmMzOTRhMzliYmEyMmYxZWJjOGVlZjc5EgsSBxCo2eeM6QwYAZIBIwoKcHJvamVjdF9pZBIVQhM2Mzg3ODkxODQ1MjU2Mjg4MDYy&filename=&opi=89354086",
  home: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzZhZmYxYTkyOGVmNjRiMzdiZmFiNDQyNzJkOGI4N2ZiEgsSBxCo2eeM6QwYAZIBIwoKcHJvamVjdF9pZBIVQhM2Mzg3ODkxODQ1MjU2Mjg4MDYy&filename=&opi=89354086"
};

const fetchUrl = (url) => new Promise((resolve, reject) => {
  http.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  }).on('error', err => reject(err));
});

const convertHtmlToJSX = (html) => {
  // Extract main content between </nav> and <footer
  const mainMatch = html.match(/<\/nav>([\s\S]*?)<footer/i);
  if (!mainMatch) return null;
  
  let jsx = mainMatch[1];
  
  // Basic conversions
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Enclose self-closing tags
  jsx = jsx.replace(/<img([^>]*)>/g, (match, attrs) => {
    // if it already closes properly via regex lazy
    if (attrs.trim().endsWith('/')) return match;
    return '<img' + attrs + ' />';
  });
  jsx = jsx.replace(/<input([^>]*)>/g, (match, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return '<input' + attrs + ' />';
  });
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  
  jsx = jsx.replace(/style="([^"]*)"/g, (match, css) => {
      if (css.includes('background-image')) {
          const urlMatch = css.match(/url\(['"]?(.*?)['"]?\)/);
          if (urlMatch) {
              return `style={{ backgroundImage: "url('${urlMatch[1]}')" }}`;
          }
      }
      if (css.includes('background-color')) {
          const colorMatch = css.match(/background-color:\s*(.*?);/);
          if (colorMatch) {
              return `style={{ backgroundColor: "${colorMatch[1]}" }}`;
          }
      }
      if (css.includes('font-variation-settings')) {
          return `style={{ fontVariationSettings: "'FILL' 1" }}`; // Fallback for the icons
      }
      return `style={{}}`; 
  });

  return jsx;
};

const createPage = async (key, url) => {
  console.log(`Processing ${key}...`);
  const html = await fetchUrl(url);
  let mainJsx = convertHtmlToJSX(html);
  
  if (!mainJsx) {
    console.error(`Failed to find <main> in ${key}`);
    return;
  }
  
  // Home page is special (remove hero banner from mainJsx since Banner.js is already doing it)
  if (key === 'home') {
     mainJsx = mainJsx.replace(/<section className="relative h-\[870px\][^>]*>[\s\S]*?<\/section>/, '');
  }

  const componentContent = `"use client";\n\nexport default function ${key.charAt(0).toUpperCase() + key.slice(1)}Page() {\n  return (\n    <>\n      ${mainJsx}\n    </>\n  );\n}\n`;
  
  let outDir;
  if(key === 'home') {
     outDir = path.join(__dirname, 'src/app');
  } else if (key === 'serviceDetail') {
     outDir = path.join(__dirname, `src/app/services/[id]`);
  } else {
     outDir = path.join(__dirname, `src/app/${key}`);
  }
  
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.js'), componentContent, 'utf8');
  console.log(`Saved ${key} to ${outDir}/page.js`);
};

const main = async () => {
  for (const [key, url] of Object.entries(urls)) {
    await createPage(key, url);
  }
  console.log('All pages generated.');
};

main();
