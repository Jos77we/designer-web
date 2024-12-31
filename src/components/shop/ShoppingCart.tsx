import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/product';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

interface ShoppingCartProps {
  cart: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (productId: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cart,
  isOpen,
  onClose,
  onRemoveItem,
}) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Here you would typically make a call to your backend to create a Stripe session
    // For demo purposes, we'll just show an alert
    alert('Checkout functionality would be integrated with Stripe here');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold">Shopping Cart</h3>
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${total}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;