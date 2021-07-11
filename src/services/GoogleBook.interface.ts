export interface GoogleBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
}

interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Epub;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

interface Epub {
    isAvailable: boolean;
}

interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
}

interface VolumeInfo {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface IndustryIdentifier {
    type: string;
    identifier: string;
}

interface ReadingModes {
    text: boolean;
    image: boolean;
}
