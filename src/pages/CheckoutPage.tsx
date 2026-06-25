import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-serif font-bold text-dark mb-4">Your Cart is Empty</h2>
        <Link to="/products" className="text-primary hover:underline">Return to Products</Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl font-serif font-bold text-dark mb-8">Checkout</h1>
        
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Billing Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6 border-b border-gray-100 pb-4">Billing Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark/70 font-medium mb-2">First Name</label>
                  <input required type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-dark/70 font-medium mb-2">Last Name</label>
                  <input required type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-dark/70 font-medium mb-2">Street Address</label>
                <input required type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="House number and street name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-dark/70 font-medium mb-2">Town / City</label>
                  <input required type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Colombo" />
                </div>
                <div>
                  <label className="block text-dark/70 font-medium mb-2">Phone</label>
                  <input required type="tel" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="077 123 4567" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-dark/70 font-medium mb-2">Email Address</label>
                <input required type="email" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-dark/70 font-medium mb-2">Order Notes (Optional)</label>
                <textarea className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors h-32 resize-none" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
              </div>
            </div>
          </div>

          {/* Your Order */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
              <h3 className="text-2xl font-serif font-bold text-dark mb-6 border-b border-gray-100 pb-4">Your Order</h3>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-dark/80 items-center">
                    <span className="flex-grow">{item.name} <span className="text-dark/50 font-bold">x {item.quantity}</span></span>
                    <span className="font-bold text-dark">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 mb-6 space-y-4">
                <div className="flex justify-between text-dark/80">
                  <span>Subtotal</span>
                  <span className="font-bold text-dark">Rs. {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-dark/80">
                  <span>Delivery</span>
                  <span className="font-bold text-dark">Rs. 300.00</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-dark text-lg">Total</span>
                  <span className="text-3xl font-bold text-primary">Rs. {(getCartTotal() + 300).toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-8 space-y-4">
                <h4 className="font-bold text-dark mb-4">Payment Method</h4>
                <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-4 h-4 text-primary" />
                  <span className="font-medium text-dark">Cash on Delivery</span>
                </label>
                <label className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-100'}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-4 h-4 text-primary" />
                  <span className="font-medium text-dark">Credit / Debit Card</span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Place Order <CheckCircle size={20} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
