import React, { useState } from 'react';

const QuoteRequestForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        projectTitle: '',
        description: '',
        intendedUse: '',
        dimensions: '',
        quantity: '',
        preferredMaterial: '',
        preferredColour: '',
        desiredFinish: '',
        deadline: '',
        additionalNotes: '',
        fileUpload: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({ ...formData, fileUpload: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="quote-request-form">
            <h2 className="text-2xl font-bold mb-4">Request a Custom Quote</h2>
            <div className="mb-4">
                <label htmlFor="fullName" className="block mb-1">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="projectTitle" className="block mb-1">Project Title</label>
                <input type="text" name="projectTitle" value={formData.projectTitle} onChange={handleChange} required className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block mb-1">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required className="textarea"></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="intendedUse" className="block mb-1">Intended Use</label>
                <input type="text" name="intendedUse" value={formData.intendedUse} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="dimensions" className="block mb-1">Dimensions (L x W x H)</label>
                <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="block mb-1">Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="preferredMaterial" className="block mb-1">Preferred Material</label>
                <input type="text" name="preferredMaterial" value={formData.preferredMaterial} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="preferredColour" className="block mb-1">Preferred Colour</label>
                <input type="text" name="preferredColour" value={formData.preferredColour} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="desiredFinish" className="block mb-1">Desired Finish Quality</label>
                <input type="text" name="desiredFinish" value={formData.desiredFinish} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="deadline" className="block mb-1">Deadline</label>
                <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="fileUpload" className="block mb-1">Upload File (STL/OBJ/3MF)</label>
                <input type="file" name="fileUpload" onChange={handleFileChange} className="input" />
            </div>
            <div className="mb-4">
                <label htmlFor="additionalNotes" className="block mb-1">Additional Notes</label>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} className="textarea"></textarea>
            </div>
            <button type="submit" className="btn">Submit Request</button>
        </form>
    );
};

export default QuoteRequestForm;