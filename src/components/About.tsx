import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#FAF5ED] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/assets/blog_image_1_1782077550281.png" alt="Baker working" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-serif italic text-xl mb-2">"Baking is love made visible."</p>
                  <p className="text-sm opacity-80">- Our Founder</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-primary/20 rounded-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-dark mb-6">
              Our Story
            </h2>
            <p className="text-dark/70 text-lg leading-relaxed mb-6">
              Founded in 1982, The Bakery House began as a small bakery with a big dream – to bring happiness through freshly baked goods.
            </p>
            <p className="text-dark/70 text-lg leading-relaxed mb-10">
              Today, we are proud to be your favourite baker, known for quality, taste, and trust. Our secret ingredient has always been the passion we pour into every single recipe, handed down through generations.
            </p>
            
            {/* Timeline / Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">40+</div>
                <div className="text-xs text-dark/60 uppercase font-medium">Years</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-xs text-dark/60 uppercase font-medium">Products</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-dark/60 uppercase font-medium">Outlets</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-dark/60 uppercase font-medium">Satisfaction</div>
              </div>
            </div>
            
            <div className="mt-10">
              <img src="/assets/chef_mascot_1782077384032.png" alt="Signature" className="h-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
