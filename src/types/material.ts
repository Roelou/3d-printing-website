interface Material {
  id: string;
  name: string;
  type: 'filament' | 'resin';
  image: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestUses: string[];
  detailLevel: string;
  durability: string;
  flexibility: string;
  heatResistance: string;
  finish: string;
  beginnerFriendly: boolean;
}

export default Material;