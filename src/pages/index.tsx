import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import ProductGallery from '../components/Products/ProductGallery';
import CTA from '../components/Common/CTA';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <ProductGallery />
            <CTA />
        </div>
    );
};

export default HomePage;