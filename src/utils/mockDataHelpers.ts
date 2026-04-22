// This file contains helper functions for generating mock data for products, materials, and quotes.

import { Product } from '../types/product';
import { Material } from '../types/material';
import { Quote } from '../types/quote';

// Function to generate mock products
export const generateMockProducts = (): Product[] => {
    return [
        {
            id: '1',
            slug: 'dragon-statue',
            name: 'Dragon Statue',
            category: 'Collectibles',
            description: 'A majestic dragon statue, perfect for any fantasy lover.',
            longDescription: 'This intricately designed dragon statue is crafted with attention to detail, making it a stunning addition to your collection.',
            price: 49.99,
            images: ['/images/placeholders/dragon-statue.png'],
            material: 'PLA',
            availableColours: ['Red', 'Green', 'Blue'],
            size: '15cm',
            stockStatus: 'In Stock',
            featured: true,
            tags: ['dragon', 'statue', 'collectible'],
        },
        {
            id: '2',
            slug: 'fantasy-sword',
            name: 'Fantasy Sword',
            category: 'Props',
            description: 'A beautifully crafted fantasy sword for cosplay or display.',
            longDescription: 'This sword is designed for both display and cosplay, featuring a stunning design that captures the essence of fantasy.',
            price: 89.99,
            images: ['/images/placeholders/fantasy-sword.png'],
            material: 'ABS',
            availableColours: ['Silver', 'Black'],
            size: '100cm',
            stockStatus: 'In Stock',
            featured: true,
            tags: ['sword', 'cosplay', 'fantasy'],
        },
        // Add more mock products as needed
    ];
};

// Function to generate mock materials
export const generateMockMaterials = (): Material[] => {
    return [
        {
            id: '1',
            name: 'PLA',
            type: 'filament',
            image: '/images/placeholders/pla.png',
            description: 'A biodegradable plastic made from renewable resources.',
            strengths: 'Easy to print, good detail, low warping.',
            weaknesses: 'Not very heat resistant.',
            bestUses: 'Prototyping, models, and decorative items.',
            detailLevel: 'High',
            durability: 'Medium',
            flexibility: 'Low',
            heatResistance: 'Low',
            finish: 'Matte',
            beginnerFriendly: true,
        },
        {
            id: '2',
            name: 'ABS',
            type: 'filament',
            image: '/images/placeholders/abs.png',
            description: 'A strong and durable plastic, ideal for functional parts.',
            strengths: 'High strength, good heat resistance.',
            weaknesses: 'Can warp, requires a heated bed.',
            bestUses: 'Functional parts, toys, and automotive components.',
            detailLevel: 'Medium',
            durability: 'High',
            flexibility: 'Medium',
            heatResistance: 'High',
            finish: 'Glossy',
            beginnerFriendly: false,
        },
        // Add more mock materials as needed
    ];
};

// Function to generate mock quotes
export const generateMockQuotes = (): Quote[] => {
    return [
        {
            customerInfo: {
                fullName: 'John Doe',
                email: 'john@example.com',
                phoneNumber: '123-456-7890',
            },
            projectSpecs: {
                title: 'Custom Dragon Model',
                description: 'A detailed dragon model for a tabletop game.',
                dimensions: '30cm x 20cm x 15cm',
                quantity: 1,
                preferredMaterial: 'PLA',
                preferredColour: 'Green',
                desiredFinish: 'High',
                deadline: '2023-12-01',
            },
            estimatedPriceBreakdown: {
                basePrintCost: 50,
                materialSurcharge: 10,
                detailSurcharge: 15,
                rushFee: 20,
                finishingFee: 5,
                quantityMultiplier: 1,
            },
            status: 'Pending',
            createdAt: new Date().toISOString(),
        },
        // Add more mock quotes as needed
    ];
};