import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const domain = 'https://amiaesthetic.com'; // Replace with your actual domain

const pages = [
  '/',
  '/about',
  '/contact',
  '/products',
  '/treatments',
  '/insights',
  '/privacy-policy',
  '/terms-and-conditions'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${domain}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap generated successfully!');