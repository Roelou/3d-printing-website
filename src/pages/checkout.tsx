import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CartItem from '../components/Cart/CartItem';
import { formatPrice } from '../utils/formatPrice';

const CheckoutPage = () => {
    const router = useRouter();
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const [cartItems, setCartItems] = useState([]); // This should be populated from the cart context or localStorage
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails({
            ...customerDetails,
            [name]: value,
        });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Placeholder for checkout logic
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Redirect to confirmation page
            router.push('/confirmation');
        } catch (err) {
            setError('An error occurred during checkout. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="checkout-page">
            <h1 className="text-3xl font-bold">Checkout</h1>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleCheckout} className="checkout-form">
                <h2 className="text-2xl">Customer Details</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customerDetails.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={customerDetails.email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={customerDetails.address}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={customerDetails.city}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={customerDetails.postalCode}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={customerDetails.country}
                    onChange={handleInputChange}
                    required
                />
                <h2 className="text-2xl">Order Summary</h2>
                <div className="order-summary">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <p className="font-bold">Total: {formatPrice(calculateTotal())}</p>
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Processing...' : 'Complete Purchase'}
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;