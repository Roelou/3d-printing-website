import React from 'react';
import { useCart } from '../../hooks/useCart'; // Custom hook to manage cart state
import CartItem from './CartItem';

const CartDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const { cartItems, totalAmount } = useCart();

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed right-0 top-0 w-80 bg-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <h2 className="text-xl font-bold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                        <div className="mt-4">
                            <h3 className="font-semibold">Total: ${totalAmount.toFixed(2)}</h3>
                        </div>
                    </div>
                )}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
                    Proceed to Checkout
                </button>
                <button className="mt-2 text-gray-500" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default CartDrawer;