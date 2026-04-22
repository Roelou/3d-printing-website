// This file defines the TypeScript interface for product data.

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    price: number;
    images: string[];
    material: string;
    availableColours: string[];
    size: string;
    stockStatus: string;
    featured: boolean;
    tags: string[];
}