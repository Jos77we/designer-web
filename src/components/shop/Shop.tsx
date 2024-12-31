import React, { useState } from 'react';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import ShoppingCart from './ShoppingCart';

const Shop = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Shop Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our ready-to-wear collection, featuring elegant pieces for every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        <ShoppingCart
          cart={cart}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
        />

        {/* Cart Toggle Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          Cart ({cart.length})
        </button>
      </div>
    </section>
  );
};

export default Shop;