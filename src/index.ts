import { marked } from 'marked';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';

export interface ConversionOptions {
  style?: string;
  margins?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  format?: 'A4' | 'Letter' | 'Legal';
}

const defaultOptions: ConversionOptions = {
  style: `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      padding: 2em;
    }
    code {
      background-color: #f6f8fa;
      padding: 0.2em 0.4em;
      border-radius: 3px;
    }
    pre code {
      display: block;
      padding: 1em;
      overflow-x: auto;
    }
  `,
  margins: {
    top: '1in',
    right: '1in',
    bottom: '1in',
    left: '1in'
  },
  format: 'A4'
};

/**
 * Convert markdown string to PDF
 */
export async function convert(markdown: string, options: ConversionOptions = {}): Promise<Buffer> {
  const mergedOptions = { ...defaultOptions, ...options };
  const html = marked(markdown);
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>${mergedOptions.style}</style>
      </head>
      <body>${html}</body>
    </html>
  `);

  const pdf = await page.pdf({
    format: mergedOptions.format,
    margin: mergedOptions.margins
  });

  await browser.close();
  return pdf;
}

/**
 * Convert markdown file to PDF file
 */
export async function convertFile(
  inputPath: string,
  outputPath: string,
  options: ConversionOptions = {}
): Promise<void> {
  const markdown = await fs.readFile(inputPath, 'utf-8');
  const pdf = await convert(markdown, options);
  await fs.writeFile(outputPath, pdf);
}

export default {
  convert,
  convertFile
}; 