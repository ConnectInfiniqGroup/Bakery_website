import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const outlets = [
  { id: 1, name: 'Colombo Outlet', address: '123, Bakery Street, Colombo 05', phone: '011 234 5678' },
  { id: 2, name: 'Kandy Outlet', address: '45, Peradeniya Road, Kandy', phone: '081 234 5678' },
  { id: 3, name: 'Negombo Outlet', address: '78, Main Street, Negombo', phone: '031 234 5678' },
];

const Outlets = () => {
  return (
    <section id="outlets" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-dark">
            Our Outlets
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Location Cards */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {outlets.map((outlet, index) => (
              <motion.div 
                key={outlet.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF5ED] p-6 rounded-2xl hover:shadow-md transition-shadow border border-transparent hover:border-primary/20 cursor-pointer group"
              >
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-hover transition-colors">{outlet.name}</h3>
                <div className="flex items-start gap-3 mb-2 text-dark/70">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p>{outlet.address}</p>
                </div>
                <div className="flex items-center gap-3 text-dark/70">
                  <Phone size={18} className="flex-shrink-0" />
                  <p>{outlet.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 bg-gray-200 rounded-3xl overflow-hidden relative min-h-[400px]"
          >
            {/* Simple Map Visualization pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#E98B10 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-4 drop-shadow-md animate-bounce" />
                <p className="text-dark/50 font-medium text-lg">Interactive Map Coming Soon</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Outlets;
