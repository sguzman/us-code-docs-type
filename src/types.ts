// Type information for US Code XML file
export type Doc = {
 "?xml": string | undefined;
 "?xml-stylesheet": string | undefined;
 uscCode: UscDoc;
}

type UscDoc = {
 meta: Meta;
 main: any;
}

type Meta = {
 "dc:title": any;
 "dc:type": any;
 docNumber: any;
 docPublicationName: any;
 property: any;
 "dc:publisher": any;
 "dcterms:created": any;
 "dc:creator": any;
}

export default Doc;