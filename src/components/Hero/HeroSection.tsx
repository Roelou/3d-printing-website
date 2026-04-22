import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-gray-900 text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold mb-4 glow">Welcome to the Realm of 3D Printing</h1>
                <p className="text-lg mb-8">Crafted for collectors, creators, and adventurers alike.</p>
                <div className="flex justify-center space-x-4">
                    <a href="/shop" className="bg-crimson-600 hover:bg-crimson-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Shop Pre-Made Prints
                    </a>
                    <a href="/custom-orders" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                        Request a Custom Print
                    </a>
                </div>
            </div>
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/placeholders/hero-background.jpg)' }} />
        </section>
    );
};

export default HeroSection;