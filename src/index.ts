// Path: src/index.ts
// Import fast-xml-parser
import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';
import { Doc } from './types';


console.log('hi :)');

const p: XMLParser = new XMLParser();
// Load US Code XML file Title 20
const xml: string = fs.readFileSync('./us-code-stash/data/zip/usc09.xml', 'utf8');
// Parse XML
const json: Doc = p.parse(xml) as Doc;
console.log(Object.keys(json));

console.log('bye :(');