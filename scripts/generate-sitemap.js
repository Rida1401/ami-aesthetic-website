import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Configuration
const BASE_URL = 'https://amiaesthetic.com';
const STATIC_PAGES = [
  '',
  '/products',
  '/insights',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions'
];

// 2. Get Product IDs
// Since we can't easily import ESM with images in Node, we parse the IDs from the file as text
const productsFilePath = path.resolve(__dirname, '../src/data/products.js');
const fileContent = fs.readFileSync(productsFilePath, 'utf8');
const idMatches = fileContent.match(/id:\s*(\d+)/g) || [];
const productIds = idMatches.map(m => m.match(/\d+/)[0]);

// 3. Generate XML entries
const generateEntry = (url, priority = '0.7', changefreq = 'weekly') => `
  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${STATIC_PAGES.map(page => {
    const priority = page === '' ? '1.0' : '0.8';
    return generateEntry(page, priority, page === '' ? 'daily' : 'weekly');
  }).join('')}
  ${productIds.map(id => generateEntry(`/products/${id}`, '0.9', 'monthly')).join('')}
</urlset>`;

// 4. Write to public and dist (if exists)
const publicPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicPath, sitemapContent.trim());
console.log('✅ Sitemap updated in /public');

const distPath = path.resolve(__dirname, '../dist/sitemap.xml');
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  fs.writeFileSync(distPath, sitemapContent.trim());
  console.log('✅ Sitemap updated in /dist');
}