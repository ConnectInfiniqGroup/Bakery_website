import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-dark mb-4">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="text-primary hover:underline">
          Return to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image
    });
    // Optional: show a toast or feedback here
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-dark/70 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-[#FAF5ED] rounded-2xl p-8 flex justify-center items-center h-[400px]">
            <img src={product.image} alt={product.name} className="max-h-full object-contain hover:scale-105 transition-transform duration-500" />
          </div>
          
          <div>
            <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-dark mb-6">Rs. {product.price.toFixed(2)}</p>
            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex items-center border-2 border-gray-200 rounded-full bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-dark hover:text-primary transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-dark hover:text-primary transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <ShoppingCart size={22} /> Add to Cart
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-serif font-bold text-dark mb-8">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(rp => (
                <div key={rp.id} onClick={() => navigate(`/products/${rp.id}`)} className="bg-white p-4 rounded-2xl cursor-pointer group hover:shadow-md transition-all">
                  <div className="bg-[#FAF5ED] rounded-xl h-40 flex items-center justify-center mb-4 overflow-hidden">
                    <img src={rp.image} alt={rp.name} className="h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold font-serif text-dark group-hover:text-primary transition-colors">{rp.name}</h4>
                  <p className="font-bold text-dark">Rs. {rp.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
