const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-16 pb-10 relative overflow-hidden mt-0">
      {/* Decorative top shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.9,122.9,190.5,107.5C236.4,96.3,279.7,78.2,321.39,56.44Z" className="fill-[#FAF5ED]"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Newsletter */}
        <div className="bg-primary/10 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between border border-primary/20">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl font-serif font-bold mb-2">Stay Updated with<br/>Thinesh Bake House</h3>
            <p className="text-white/70">Subscribe to get the latest offers, new arrivals, and baking tips.</p>
          </div>
          <div className="md:w-1/2 w-full max-w-md">
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed successfully!"); }} className="relative">
              <input 
                type="email" 
                required
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 text-white rounded-full py-4 pl-6 pr-32 focus:outline-none focus:border-primary focus:bg-white/20 transition-all placeholder-white/50"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-hover text-white px-6 rounded-full font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <img src="/assets/TBH-Logo-1024x1024-1.png" alt="Thinesh Bake House Logo" className="h-28 w-auto mb-4 drop-shadow-lg" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your Favourite Baker Since 1982. Bringing you the best in baked goods made with love and premium ingredients.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#outlets" className="hover:text-primary transition-colors">Our Outlets</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">My Account</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>123, Bakery Street, Colombo 05</li>
              <li>011 234 5678</li>
              <li>info@thineshbakehouse.lk</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Thinesh Bake House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
