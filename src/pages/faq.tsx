import React from 'react';
import FAQAccordion from '../components/Common/FAQAccordion';
import SectionHeader from '../components/Common/SectionHeader';

const FAQPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionHeader title="Frequently Asked Questions" />
            <FAQAccordion />
        </div>
    );
};

export default FAQPage;