import React from 'react';
import Footer from '../components/Common/Footer';
import Navbar from '../components/Common/Navbar';

const ContactPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
                <p className="text-lg text-center mb-4">
                    We would love to hear from you! Whether you have a question about our products, need assistance with an order, or want to discuss a custom project, feel free to reach out.
                </p>
                <form className="bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-600 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-600 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea id="message" rows="4" className="mt-1 block w-full p-2 border border-gray-600 rounded-md" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-crimson-600 text-white font-bold py-2 rounded-md hover:bg-crimson-700 transition duration-200">
                        Send Message
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;