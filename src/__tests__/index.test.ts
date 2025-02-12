import { convert, convertFile } from '../index';
import fs from 'fs/promises';
import path from 'path';

jest.mock('fs/promises');
jest.mock('puppeteer');

describe('md-to-pdf', () => {
  describe('convert', () => {
    it('should convert markdown string to PDF buffer', async () => {
      const markdown = '# Hello World';
      const result = await convert(markdown);
      expect(result).toBeInstanceOf(Buffer);
    });

    it('should accept custom options', async () => {
      const markdown = '# Hello World';
      const options = {
        format: 'Letter' as const,
        margins: {
          top: '2in'
        }
      };
      const result = await convert(markdown, options);
      expect(result).toBeInstanceOf(Buffer);
    });
  });

  describe('convertFile', () => {
    it('should convert markdown file to PDF file', async () => {
      const inputPath = 'test.md';
      const outputPath = 'test.pdf';
      const mockMarkdown = '# Test';

      (fs.readFile as jest.Mock).mockResolvedValue(mockMarkdown);
      (fs.writeFile as jest.Mock).mockResolvedValue(undefined);

      await convertFile(inputPath, outputPath);

      expect(fs.readFile).toHaveBeenCalledWith(inputPath, 'utf-8');
      expect(fs.writeFile).toHaveBeenCalledWith(outputPath, expect.any(Buffer));
    });
  });
}); 