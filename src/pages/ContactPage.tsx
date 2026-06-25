import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8 text-center">Contact Us</h1>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto text-center mb-16">
          We would love to hear from you! Whether you have a question about our products, special orders, or just want to say hello.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-dark mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-dark/70">011 234 5678</p>
                    <p className="text-dark/70">077 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-dark/70">info@thebakeryhouse.lk</p>
                    <p className="text-dark/70">orders@thebakeryhouse.lk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Main Office</h4>
                    <p className="text-dark/70">123, Bakery Street,</p>
                    <p className="text-dark/70">Colombo 05, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-2xl font-bold font-serif mb-4 relative z-10">Special Orders</h3>
              <p className="text-white/80 mb-6 relative z-10">Planning a party or corporate event? Contact us for custom cakes and bulk pastry orders.</p>
              <button className="bg-white text-primary px-6 py-2 rounded-full font-bold shadow-md hover:bg-gray-50 transition-colors relative z-10">
                Call Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-dark mb-8">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark/70 font-medium mb-2">Your Name</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-gray-50/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-dark/70 font-medium mb-2">Email Address</label>
                    <input type="email" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-gray-50/50" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-dark/70 font-medium mb-2">Subject</label>
                  <input type="text" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors bg-gray-50/50" placeholder="How can we help?" />
                </div>
                
                <div>
                  <label className="block text-dark/70 font-medium mb-2">Message</label>
                  <textarea className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors h-40 resize-none bg-gray-50/50" placeholder="Your message here..."></textarea>
                </div>
                
                <button type="button" className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
