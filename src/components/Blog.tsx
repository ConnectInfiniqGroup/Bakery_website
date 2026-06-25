import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { blogs } from '../data/blogs';

const Blog = () => {
  return (
    <section id="blog" className="pt-24 pb-12 bg-[#FAF5ED] relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-dark mb-4">
            Our Blog
          </h2>
          <p className="text-dark/70 text-lg max-w-2xl mx-auto">
            Baking Stories & More. Discover recipes, tips, and the latest news from our bakery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-white/80 text-sm font-medium uppercase tracking-widest">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2 leading-tight">
                  {blog.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
