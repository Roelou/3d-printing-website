import React from 'react';

interface ColourSwatchCardProps {
    colourName: string;
    colourHex: string;
    onSelect: (colour: string) => void;
}

const ColourSwatchCard: React.FC<ColourSwatchCardProps> = ({ colourName, colourHex, onSelect }) => {
    return (
        <div 
            className="flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
            onClick={() => onSelect(colourName)}
            style={{ backgroundColor: colourHex }}
        >
            <div className="w-16 h-16 rounded-full border-2 border-gray-800" />
            <span className="mt-2 text-white font-semibold">{colourName}</span>
        </div>
    );
};

export default ColourSwatchCard;