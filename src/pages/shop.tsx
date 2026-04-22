import React from 'react';
import ProductGallery from '../components/Products/ProductGallery';
import ProductFilterBar from '../components/Products/ProductFilterBar';
import { mockProducts } from '../data/mockProducts';

const ShopPage: React.FC = () => {
    return (
        <div className="shop-page">
            <h1 className="text-4xl font-bold text-center my-8">Explore Our Collection</h1>
            <ProductFilterBar products={mockProducts} />
            <ProductGallery products={mockProducts} />
        </div>
    );
};

export default ShopPage;