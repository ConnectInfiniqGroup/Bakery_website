import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const outlets = [
  {
    id: 1,
    name: 'Colombo 05 Branch',
    address: '123, Bakery Street, Colombo 05',
    phone: '011 234 5678',
    hours: '7:00 AM - 9:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638743126!2d79.7738031388874!3d6.92183352721869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk'
  },
  {
    id: 2,
    name: 'Mount Lavinia Branch',
    address: '45, Galle Road, Mount Lavinia',
    phone: '011 234 5679',
    hours: '8:00 AM - 8:00 PM',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31688.330559132545!2d79.84964654519965!3d6.83788775630653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b2067d589d3%3A0x6b3017a599298371!2sMount%20Lavinia!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk'
  }
];

const OutletsPage = () => {
  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8 text-center">Our Outlets</h1>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto text-center mb-16">
          Find a The Bakery House near you! We have multiple branches ready to serve you fresh bakery items every day.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {outlets.map((outlet) => (
            <div key={outlet.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="p-8">
                <h3 className="text-2xl font-bold font-serif text-dark mb-6">{outlet.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Address</h4>
                      <p className="text-dark/70">{outlet.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-dark/70">{outlet.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-sm uppercase tracking-wider mb-1">Opening Hours</h4>
                      <p className="text-dark/70">{outlet.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map iframe */}
              <div className="h-64 bg-gray-100">
                <iframe 
                  src={outlet.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${outlet.name} Location`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OutletsPage;
