import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8 text-center">About Us</h1>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img src="/assets/chef_mascot_1782077384032.png" alt="Our Chef" className="w-full rounded-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-dark mb-6">Our Story Begins in 1982</h2>
              <p className="text-dark/70 text-lg mb-4 leading-relaxed">
                Thinesh Bake House started as a small, humble bakery in the heart of Colombo. For over 40 years, we have been dedicated to bringing you the finest baked goods, crafted with love, passion, and the highest quality ingredients.
              </p>
              <p className="text-dark/70 text-lg leading-relaxed">
                Our recipes have been passed down through generations, ensuring that every bite you take is a taste of our rich heritage. We believe in the magic of freshly baked bread and the joy of sharing sweet moments with loved ones.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-12">
            <h2 className="text-3xl font-serif font-bold text-dark mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#FAF5ED] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-dark mb-2">Quality Ingredients</h3>
                <p className="text-dark/70">We source only the finest, freshest ingredients to ensure premium taste in every bite.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FAF5ED] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-dark mb-2">Baked with Love</h3>
                <p className="text-dark/70">Every product is crafted with care and passion by our experienced artisan bakers.</p>
              </div>
              <div className="text-center">
                <div className="bg-[#FAF5ED] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold font-serif text-dark mb-2">Community First</h3>
                <p className="text-dark/70">We've been serving our local community for 40 years and treat our customers like family.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
