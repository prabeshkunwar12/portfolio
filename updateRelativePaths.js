import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Import the 'fileURLToPath' function to convert URL to file path

// Get the directory path of the current module
const currentFilePath = fileURLToPath(import.meta.url);
const distDirectory = path.join(path.dirname(currentFilePath), 'dist');

const baseURL = '/'; // Replace with the base URL of your website (e.g., '/my-app/' if hosted at 'https://example.com/my-app/')

// Process the HTML files in the dist directory
fs.readdirSync(distDirectory).forEach((file) => {
  if (file.endsWith('.html')) {
    const filePath = path.join(distDirectory, file);
    const html = fs.readFileSync(filePath, 'utf-8');

    // Replace absolute URLs with relative URLs
    const updatedHTML = html.replace(new RegExp(baseURL, 'g'), './');

    fs.writeFileSync(filePath, updatedHTML, 'utf-8');
    console.log(`Updated relative paths in ${filePath}`);
  }
});

console.log('All HTML files in the dist folder have been updated with relative paths.');
