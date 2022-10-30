import { Doc } from './types';

export function printDoc(json: Doc) {
 console.log(Object.keys(json));
 console.log(Object.keys(json.uscDoc));
 console.log(Object.keys(json.uscDoc.meta));
 console.log(Object.keys(json.uscDoc.meta['dc:title']));
}