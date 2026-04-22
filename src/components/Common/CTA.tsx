import React from 'react';

const CTA: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-purple-700 to-blue-800 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Unleash Your Imagination</h2>
            <p className="mb-4">Crafted for collectors, creators, and adventurers. Bring your design into the physical world.</p>
            <a href="/shop" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold py-2 px-4 rounded transition duration-300">
                Shop Pre-Made Prints
            </a>
            <a href="/custom-orders" className="ml-4 bg-gold-500 hover:bg-gold-600 text-black font-semibold py-2 px-4 rounded transition duration-300">
                Request a Custom Print
            </a>
        </div>
    );
};

export default CTA;