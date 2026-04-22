import React, { useState } from 'react';

const QuoteEstimator = () => {
    const [material, setMaterial] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [detailLevel, setDetailLevel] = useState('');
    const [finishQuality, setFinishQuality] = useState('');
    const [urgency, setUrgency] = useState('');
    const [estimatedPrice, setEstimatedPrice] = useState(null);

    const handleEstimate = () => {
        // Basic estimation logic (to be refined)
        let baseCost = 0;
        if (material === 'PLA') baseCost = 10;
        else if (material === 'ABS') baseCost = 15;
        else if (material === 'PETG') baseCost = 12;

        const sizeCost = size ? parseInt(size) * 2 : 0;
        const quantityCost = (quantity - 1) * 5; // Additional cost per item
        const detailCost = detailLevel === 'high' ? 10 : 0;
        const finishCost = finishQuality === 'premium' ? 15 : 0;
        const urgencyCost = urgency === 'rush' ? 20 : 0;

        const totalCost = baseCost + sizeCost + quantityCost + detailCost + finishCost + urgencyCost;
        setEstimatedPrice(totalCost);
    };

    return (
        <div className="quote-estimator">
            <h2 className="text-2xl font-bold">Custom Quote Estimator</h2>
            <div className="form-group">
                <label htmlFor="material">Material:</label>
                <select id="material" value={material} onChange={(e) => setMaterial(e.target.value)}>
                    <option value="">Select Material</option>
                    <option value="PLA">PLA</option>
                    <option value="ABS">ABS</option>
                    <option value="PETG">PETG</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="size">Size (in cm):</label>
                <input
                    type="number"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                />
            </div>
            <div className="form-group">
                <label htmlFor="detailLevel">Detail Level:</label>
                <select id="detailLevel" value={detailLevel} onChange={(e) => setDetailLevel(e.target.value)}>
                    <option value="">Select Detail Level</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="finishQuality">Finish Quality:</label>
                <select id="finishQuality" value={finishQuality} onChange={(e) => setFinishQuality(e.target.value)}>
                    <option value="">Select Finish Quality</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="urgency">Urgency:</label>
                <select id="urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                    <option value="">Select Urgency</option>
                    <option value="standard">Standard</option>
                    <option value="rush">Rush</option>
                </select>
            </div>
            <button onClick={handleEstimate} className="mt-4 bg-blue-500 text-white p-2 rounded">
                Estimate Price
            </button>
            {estimatedPrice !== null && (
                <div className="mt-4">
                    <h3 className="text-xl">Estimated Price: ${estimatedPrice}</h3>
                    <p>This is an estimated quote only. Final pricing will depend on review.</p>
                </div>
            )}
        </div>
    );
};

export default QuoteEstimator;