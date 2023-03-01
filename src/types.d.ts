export interface Category {
    id: number;
    name: string;
    icon: string;
    description?: string;
    isHideable?: boolean;
}

export interface Product {
    id: number;
    categoryId: number;
    name: string;
    thumbnailPath: string;
    description?: string;
}

export interface VariantSet {
    id: number;
    name: string;
    productId: number;
    variantSet: string;
    thumbnailPath?: string;
    description?: string;
    tabGroup: string;
    variants: number[];
}

export interface Variant {
    id: number;
    name: string;
    variant: string;
    thumbnailPath?: string;
    description?: string;
}

declare global {
    interface Window {
        Vagon: Vagon;
    }
}

export interface Vagon {
    isConnected: boolean;
    sendApplicationMessage(data: string): void;
    onApplicationMessage(event: any): void;
}

// DO BE DELETED
export interface VariantSetBis {
    variantSetName: string;
    thumbnail: string;
    variants: VariantOld[];
}

export interface VariantOld {
    variantName: string;
    isActive: boolean;
    thumbnail: string;
}
