import React from 'react';
import QuoteEstimator from '../components/CustomQuote/QuoteEstimator';
import QuoteRequestForm from '../components/CustomQuote/QuoteRequestForm';
import SectionHeader from '../components/Common/SectionHeader';

const CustomOrdersPage = () => {
    return (
        <div className="custom-orders-page">
            <SectionHeader title="Request a Custom Print" />
            <QuoteEstimator />
            <QuoteRequestForm />
        </div>
    );
};

export default CustomOrdersPage;