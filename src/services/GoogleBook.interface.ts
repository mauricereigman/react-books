// @ts-nocheck
import {IsBoolean, IsInt, IsString} from "class-validator";

export class GoogleBook {
    @IsString()
    public readonly kind: string;
    @IsString()
    public readonly id: string;
    @IsString()
    public readonly etag: string;
    @IsString()
    public readonly selfLink: string;
    @IsObject()
    public readonly volumeInfo: VolumeInfo;
    @IsObject()
    public readonly saleInfo: SaleInfo;
    @IsObject()
    public readonly accessInfo: AccessInfo;
}

class AccessInfo {
    @IsString()
    public readonly country: string;
    @IsString()
    public readonly viewability: string;
    @IsBoolean()
    public readonly embeddable: boolean;
    @IsBoolean()
    public readonly publicDomain: boolean;
    @IsString()
    public readonly textToSpeechPermission: string;
    @IsObject()
    public readonly epub: Epub;
    @IsObject()
    public readonly pdf: Epub;
    @IsString()
    public readonly webReaderLink: string;
    @IsString()
    public readonly accessViewStatus: string;
    @IsBoolean()
    public readonly quoteSharingAllowed: boolean;
}

class Epub {
    @IsBoolean()
    public readonly isAvailable: boolean;
}

class SaleInfo {
    @IsString()
    public readonly country: string;
    @IsString()
    public readonly saleability: stri
    @IsBoolean()
    public readonly isEbook: boolean;
}

class VolumeInfo {
    @IsString()
    public readonly title: string;
    @IsObject()
    public readonly authors: string[];
    @IsString()
    public readonly publishedDate: string;
    @IsString()
    public readonly description: string;
    @IsObject()
    public readonly industryIdentifiers: IndustryIdentifier[];
    @IsObject()
    public readonly readingModes: ReadingModes;
    @IsInt()
    public readonly pageCount: number;
    @IsString()
    public readonly printType: string;
    @IsObject()
    public readonly categories: string[];
    @IsInt()
    public readonly averageRating: number;
    @IsInt()
    public readonly ratingsCount: number;
    @IsString()
    public readonly maturityRating: string;
    @IsBoolean()
    public readonly allowAnonLogging: boolean;
    @IsString()
    public readonly contentVersion: string;
    @IsObject()
    public readonly imageLinks: ImageLinks;
    @IsString()
    public readonly language: string;
    @IsString()
    public readonly previewLink: string;
    @IsString()
    public readonly infoLink: string;
    @IsString()
    public readonly canonicalVolumeLink: string;
}

class ImageLinks {
    @IsString()
    public readonly smallThumbnail: string;
    @IsString()
    public readonly thumbnail: string;
}

class IndustryIdentifier {
    @IsString()
    public readonly type: string;
    @IsString()
    public readonly identifier: string;
}

class ReadingModes {
    @IsBoolean()
    public readonly text: boolean;
    @IsBoolean()
    public readonly image: boolean;
}
