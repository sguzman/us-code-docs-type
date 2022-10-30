import { Doc } from './types';

export function printDoc(json: Doc) {
 console.log(Object.keys(json));
 console.log(Object.keys(json.uscDoc));
 console.log(Object.keys(json.uscDoc.main));
 console.log(Object.keys(json.uscDoc.main.title));
}