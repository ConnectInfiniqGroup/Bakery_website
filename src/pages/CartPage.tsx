import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="bg-white rounded-3xl p-12 max-w-2xl mx-auto shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-dark mb-4">Your Cart is Empty</h2>
          <p className="text-dark/70 mb-8">Looks like you haven't added any delicious baked goods to your cart yet.</p>
          <Link to="/products" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl font-serif font-bold text-dark mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm hidden md:grid grid-cols-12 gap-4 text-dark/60 text-sm font-bold uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col md:grid md:grid-cols-12 gap-6 items-center">
                
                {/* Product Info */}
                <div className="md:col-span-6 flex items-center gap-4 w-full">
                  <div className="w-24 h-24 bg-[#FAF5ED] rounded-xl flex items-center justify-center p-2 shrink-0">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-dark text-lg">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm flex items-center gap-1 hover:text-red-600 transition-colors mt-2"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>

                {/* Price (Hidden on mobile) */}
                <div className="md:col-span-2 text-center font-bold text-dark hidden md:block">
                  Rs. {item.price.toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="md:col-span-2 flex justify-center w-full">
                  <div className="flex items-center border-2 border-gray-100 rounded-full bg-gray-50 p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-dark hover:bg-white hover:shadow-sm rounded-full transition-all"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-dark hover:bg-white hover:shadow-sm rounded-full transition-all"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="md:col-span-2 text-right font-bold text-dark w-full md:w-auto flex justify-between md:block mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <span className="md:hidden text-dark/60">Subtotal:</span>
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6 text-dark/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-dark">Rs. {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-bold text-dark">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-dark text-lg">Total</span>
                  <span className="text-3xl font-bold text-primary">Rs. {getCartTotal().toFixed(2)}</span>
                </div>
                <p className="text-xs text-dark/50 text-right mt-1">Including all taxes</p>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
              
              <Link to="/products" className="block text-center mt-4 text-dark/70 hover:text-primary transition-colors font-medium">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
