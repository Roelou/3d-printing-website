import React from 'react';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-xl font-bold text-white mt-2">{product.name}</h3>
      <p className="text-gray-400">{product.description}</p>
      <p className="text-lg font-semibold text-yellow-500">{formatPrice(product.price)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-crimson-600 text-white py-2 px-4 rounded hover:bg-crimson-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;