import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  description: string;
  isVegetarian?: boolean;
  containsNuts?: boolean;
}

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[80] flex items-center justify-center p-4 md:p-12"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Image Section */}
          <div className="md:w-1/2 bg-secondary/30 relative h-64 md:h-auto">
            <button 
              onClick={onClose}
              className="absolute top-4 left-4 md:hidden bg-white/80 p-2 rounded-full backdrop-blur z-10 text-dark/70"
            >
              <X size={20} />
            </button>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
            <button 
              onClick={onClose}
              className="hidden md:block absolute top-6 right-6 text-dark/50 hover:text-dark transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="mb-2 flex items-center gap-2 flex-wrap">
              <span className="text-primary font-bold text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                {product.category}
              </span>
              {product.isVegetarian && (
                <span className="text-green-600 font-bold text-xs uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
                  Veg
                </span>
              )}
              {product.containsNuts && (
                <span className="text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                  Contains Nuts
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">{product.name}</h2>
            <p className="text-2xl font-bold text-dark mb-6">Rs. {product.price.toFixed(2)}</p>
            
            <p className="text-dark/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mt-auto space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-medium text-dark/70">Quantity:</span>
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-100 p-1">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-dark/70 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-bold w-12 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-dark/70 hover:bg-white hover:shadow-sm transition-all"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold text-lg transition-transform hover:scale-[1.02] shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} /> Add to Cart - Rs. {(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
