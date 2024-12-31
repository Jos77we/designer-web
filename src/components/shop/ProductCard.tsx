import React from 'react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-96">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="space-x-2">
            {product.sizes.map((size) => (
              <span key={size} className="px-2 py-1 text-sm border rounded">
                {size}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;