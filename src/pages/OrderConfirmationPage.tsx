const OrderConfirmationPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-serif font-bold text-primary mb-6">Thank You!</h1>
      <h2 className="text-2xl font-serif text-dark mb-4">Your order has been placed successfully.</h2>
      <p className="text-dark/70 mb-8 max-w-md mx-auto">We'll send you an email confirmation with your order details shortly.</p>
    </div>
  );
};

export default OrderConfirmationPage;
