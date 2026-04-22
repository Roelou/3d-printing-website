import React from 'react';
import { useCart } from '../hooks/useCart'; // Custom hook to manage cart state
import CartItem from '../components/Cart/CartItem';
import { formatPrice } from '../utils/formatPrice';

const CartPage = () => {
    const { cartItems, total, removeItem, updateQuantity } = useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is currently empty.</p>
            ) : (
                <div>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeItem={removeItem}
                                updateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                    <div className="mt-6">
                        <h2 className="text-2xl font-semibold">Total: {formatPrice(total)}</h2>
                        <button className="mt-4 bg-crimson-600 text-white py-2 px-4 rounded">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;