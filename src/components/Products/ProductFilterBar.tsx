import React from 'react';

const ProductFilterBar: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-xl text-gold font-bold mb-2 md:mb-0">Filter Products</h2>
            <div className="flex space-x-4">
                <select className="p-2 rounded-md bg-gray-700 text-white">
                    <option value="">Select Category</option>
                    <option value="all">All</option>
                    <option value="cosplay">Cosplay</option>
                    <option value="collectibles">Collectibles</option>
                    <option value="tabletop">Tabletop</option>
                </select>
                <select className="p-2 rounded-md bg-gray-700 text-white">
                    <option value="">Select Material</option>
                    <option value="pla">PLA</option>
                    <option value="abs">ABS</option>
                    <option value="resin">Resin</option>
                </select>
                <select className="p-2 rounded-md bg-gray-700 text-white">
                    <option value="">Sort By</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                </select>
            </div>
        </div>
    );
};

export default ProductFilterBar;