import React from 'react';
import { materialsData } from '../data/materials';
import MaterialCard from '../components/Materials/MaterialCard';
import SectionHeader from '../components/Common/SectionHeader';

const MaterialsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <SectionHeader title="Materials & Colours" />
            <p className="text-lg mb-4">
                Explore our range of high-quality materials, each crafted for unique applications in the world of 3D printing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {materialsData.map(material => (
                    <MaterialCard key={material.id} material={material} />
                ))}
            </div>
        </div>
    );
};

export default MaterialsPage;