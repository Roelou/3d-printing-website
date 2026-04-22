import React from 'react';
import { Material } from '../../types/material';

interface MaterialCardProps {
  material: Material;
}

const MaterialCard: React.FC<MaterialCardProps> = ({ material }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={material.image} alt={material.name} className="w-full h-32 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold mt-2">{material.name}</h3>
      <p className="mt-1">{material.description}</p>
      <div className="mt-2">
        <h4 className="font-semibold">Strengths:</h4>
        <ul className="list-disc list-inside">
          {material.strengths.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h4 className="font-semibold">Weaknesses:</h4>
        <ul className="list-disc list-inside">
          {material.weaknesses.map((weakness, index) => (
            <li key={index}>{weakness}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h4 className="font-semibold">Best Uses:</h4>
        <p>{material.bestUses.join(', ')}</p>
      </div>
    </div>
  );
};

export default MaterialCard;