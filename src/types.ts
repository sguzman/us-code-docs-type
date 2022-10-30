// Type information for US Code XML file
export type Doc = {
 "?xml": string | undefined;
 "?xml-stylesheet": string | undefined;
 uscCode: UscDoc;
}

type UscDoc = {
 meta: Meta;
 main: Main;
}

type Meta = {
 "dc:title": string;
 "dc:type": string;
 docNumber: number;
 docPublicationName: string;
 property: string;
 "dc:publisher": string;
 "dcterms:created": string;
 "dc:creator": string;
}

type Main = {
 title: any;
}

type Title = {
 "num": string;
 "heading": string;
 "note": Note[];
 "toc": any;
 "notes": any;
 "chapter": any;
}

type Note = {
 p: PElement;
}

type PElement = {
 ref: string[];
 "#text": string;
}

export default Doc;