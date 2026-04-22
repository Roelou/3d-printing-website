import React from 'react';
import SectionHeader from '../components/Common/SectionHeader';

const AboutPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionHeader title="Our Story" />
            <p className="text-lg text-gray-300">
                Welcome to our realm of 3D printing, where creativity meets craftsmanship. 
                Our journey began with a passion for bringing imaginative designs to life, 
                layer by layer. We are dedicated to providing high-quality prints for collectors, 
                creators, and adventurers alike.
            </p>
            <p className="text-lg text-gray-300 mt-4">
                At our print shop, we believe in the magic of transformation. 
                Each model is crafted with precision, using the finest materials to ensure 
                durability and detail. Whether you are seeking unique collectibles, 
                cosplay props, or functional parts, we are here to help you forge your vision 
                into reality.
            </p>
            <p className="text-lg text-gray-300 mt-4">
                Join us on this enchanting journey and discover the endless possibilities 
                of 3D printing. Together, we can create something extraordinary.
            </p>
        </div>
    );
};

export default AboutPage;