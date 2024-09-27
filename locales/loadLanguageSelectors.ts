import * as fs from 'fs';
import * as path from 'path';

interface Selectors {
  [key: string]: string;
}

function loadLanguageSelectors(language: string): Selectors {
  const filePath: string = path.join(__dirname, `${language}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Language file ${language}.json not found.`);
  }

  const fileContent: string = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent) as Selectors;
}

export default loadLanguageSelectors;
