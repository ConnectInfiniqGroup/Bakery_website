import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yMascot = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#FAF7F2] pt-24 lg:pt-32">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 opacity-30"
      >
        <img src="/assets/hero_background_1782077534710.png" alt="Bakery Background" className="w-full h-full object-cover" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pb-24 lg:pb-0">
        
        {/* Text Content */}
        <div className="pt-10 lg:pt-0 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-[#FFEAD0] text-primary font-bold px-5 py-1.5 rounded-full mb-8 text-sm"
          >
            Freshly Baked Every Day
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-serif text-dark"
          >
            Your Favourite<br/>
            Baker Since <span className="text-primary">1982</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark/70 mb-10 max-w-md leading-relaxed"
          >
            Experience the finest artisanal breads, decadent cakes, and delightful pastries made with premium ingredients and decades of passion.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/products" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
              Shop Now
            </Link>
            <Link to="/outlets" className="flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-gray-50 px-8 py-3.5 rounded-full font-medium transition-all shadow-sm inline-block">
              Our Outlets <MapPin className="inline ml-1" size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 3D Elements container */}
        <div className="relative mt-12 lg:mt-0 w-full max-w-[500px] lg:max-w-[600px] mx-auto lg:ml-auto">
          <div className="relative pb-[100%] w-full">
            {/* Chef Mascot - Floating */}
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -15, 0] // Floating animation
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ y: yMascot }}
              src="/assets/chef_mascot_transparent.png" 
              alt="Chef Mascot" 
              className="absolute z-10 w-[75%] top-[-10%] right-[-5%] drop-shadow-2xl"
            />

            {/* Bread Basket */}
            <motion.img 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="/assets/bread_basket_transparent.png" 
              alt="Fresh Bread Basket" 
              className="absolute z-20 w-[95%] bottom-[-5%] left-[-10%] drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0] z-20 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] lg:h-[120px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
