import React from 'react';
import { Product } from '../../types/product';

interface CartItemProps {
  item: Product;
  quantity: number;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, quantity, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(event.target.value);
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center">
        <img src={item.images[0]} alt={item.name} className="w-16 h-16 mr-4" />
        <div>
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <p className="text-gray-400">{item.description}</p>
          <p className="text-white">Price: ${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <select value={quantity} onChange={handleQuantityChange} className="bg-gray-800 text-white border border-gray-600 rounded p-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <button onClick={() => onRemove(item.id)} className="ml-4 text-red-500 hover:text-red-400">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;