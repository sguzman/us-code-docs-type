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
 "dc:title": string[];
 "dc:type": string[];
 docNumber: string[];
 docPublicationName: string[];
 property: string[];
 "dc:publisher": string[];
 "dcterms:created": string[];
 "dc:creator": string[];
}

type Main = {
 title: any;
}

export default Doc;