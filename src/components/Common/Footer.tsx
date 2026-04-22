import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Join the Adventure</h2>
                    <p className="text-sm">Stay updated with our latest creations and offers.</p>
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="/about" className="hover:text-gold">About Us</a>
                    <a href="/faq" className="hover:text-gold">FAQ</a>
                    <a href="/contact" className="hover:text-gold">Contact</a>
                    <a href="/custom-orders" className="hover:text-gold">Custom Orders</a>
                </div>
                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} 3D Printing Fantasy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;