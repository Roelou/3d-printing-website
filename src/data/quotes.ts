// This file contains mock data for custom quotes.

const quotes = [
    {
        id: 1,
        projectTitle: "Fantasy Sword",
        description: "A detailed replica of a fantasy sword for cosplay.",
        intendedUse: "Cosplay",
        dimensions: "120 cm",
        quantity: 1,
        preferredMaterial: "PLA",
        preferredColour: "Metallic Silver",
        desiredFinish: "Glossy",
        deadline: "2023-12-01",
        estimatedPrice: {
            baseCost: 50,
            materialSurcharge: 10,
            detailSurcharge: 15,
            rushFee: 20,
            finishingFee: 5,
            total: 110
        },
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        projectTitle: "Custom Miniature",
        description: "A custom-designed miniature for tabletop gaming.",
        intendedUse: "Tabletop Gaming",
        dimensions: "5 cm",
        quantity: 10,
        preferredMaterial: "Resin",
        preferredColour: "Matte Black",
        desiredFinish: "Standard",
        deadline: "2023-11-15",
        estimatedPrice: {
            baseCost: 30,
            materialSurcharge: 5,
            detailSurcharge: 10,
            rushFee: 0,
            finishingFee: 0,
            total: 45
        },
        createdAt: new Date().toISOString()
    }
];

export default quotes;