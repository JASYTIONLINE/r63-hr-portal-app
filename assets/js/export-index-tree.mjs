/**
 * ==============================================================================
 * DigiPort Project Tree Exporter (ESM Version)
 * 
 * **What ESM is:**
ESM stands for *ECMAScript Modules*, the official modern standard for structuring and sharing JavaScript code. It uses `import` and `export` statements instead of the older `require` and `module.exports` syntax. 

ESM is designed to work natively in both browsers and modern versions of Node.js, allowing developers to write consistent, modular code across environments. It also enforces strict syntax and supports asynchronous module loading, making it cleaner, more secure, and easier to maintain for large-scale projects.

**Why we needed to modify this code:**
This project’s `package.json` includes `"type": "module"`, which tells Node.js to interpret all `.js` files as ESM instead of the older CommonJS format. The original script used `require()` and `module.exports`, which only work in CommonJS. 

Since ESM doesn’t recognize those functions, Node threw the “require is not defined” error. Updating the file to use `import` statements—or renaming it to `.mjs`—aligns it with your project’s module type and ensures Node loads it correctly under the ESM standard.

 * ==============================================================================
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine directory of current script (ESM doesn't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Project root is where the .bat file runs
const projectRoot = process.cwd();
const OUTPUT_PATH = path.join(projectRoot, 'assets', 'data', 'tree.json');

const CATEGORY_MAP = {
  '.html': 'markup',
  '.css': 'stylesheet',
  '.js': 'script',
  '.json': 'data',
  '.jpg': 'image',
  '.jpeg': 'image',
  '.png': 'image',
  '.gif': 'image',
  '.svg': 'image',
  '.ico': 'image',
  '.mp3': 'audio',
  '.wav': 'audio',
  '.mp4': 'video',
  '.txt': 'document',
  '.md': 'document',
  '.bat': 'script',
  '.sh': 'script'
};

const output = [];
let folderCount = 0;
let fileCount = 0;
let parseWarnings = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(projectRoot, fullPath).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      folderCount++;
      output.push({
        name: entry.name,
        path: relativePath,
        type: 'folder',
        ext: null,
        size: null,
        title: null,
        sitemap: null,
        category: null
      });
      walk(fullPath);
    } else {
      fileCount++;
      const ext = path.extname(entry.name).toLowerCase();
      const stats = fs.statSync(fullPath);
      const category = CATEGORY_MAP[ext] || 'unknown';

      let title = null;
      let sitemap = null;

      if (ext === '.html') {
        try {
          const contents = fs.readFileSync(fullPath, 'utf8');
          const titleMatch = contents.match(/<title>(.*?)<\/title>/i);
          const sitemapMatch = contents.match(/<meta\s+name=["']sitemap["']\s+content=["'](.*?)["']/i);
          if (titleMatch) title = titleMatch[1].trim();
          sitemap = sitemapMatch ? sitemapMatch[1].toLowerCase() : 'none';
        } catch {
          parseWarnings++;
          console.warn(`⚠️  Failed to parse HTML metadata in: ${relativePath}`);
        }
      }

      output.push({
        name: entry.name,
        path: relativePath,
        type: 'file',
        ext,
        size: stats.size,
        title,
        sitemap,
        category
      });
    }
  }
}

console.log(`🔍 Scanning project directory: ${projectRoot}`);
console.log('----------------------------------------');
walk(projectRoot);
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
console.log(`✅ JSON export complete.`);
console.log(`📦 Output written to: ${OUTPUT_PATH}`);
console.log('----------------------------------------');
console.log(`📁 Folders found: ${folderCount}`);
console.log(`📄 Files found:   ${fileCount}`);
console.log(`⚠️  Parse warnings: ${parseWarnings}`);
