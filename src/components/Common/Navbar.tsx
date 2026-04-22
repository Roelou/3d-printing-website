import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">3D Forge</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/shop" className="hover:text-gold">Shop</Link>
                    </li>
                    <li>
                        <Link to="/custom-orders" className="hover:text-gold">Custom Orders</Link>
                    </li>
                    <li>
                        <Link to="/materials" className="hover:text-gold">Materials</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gold">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gold">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;