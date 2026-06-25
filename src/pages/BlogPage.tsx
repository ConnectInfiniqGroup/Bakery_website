import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8 text-center">Our Blog</h1>
        <p className="text-dark/70 text-lg max-w-2xl mx-auto text-center mb-16">
          Stories, recipes, and updates from the The Bakery House family. Read about our passion for baking.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-dark/50 text-sm font-medium uppercase tracking-widest">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-dark/70 mt-auto pt-4 border-t border-gray-100 flex items-center justify-between font-bold text-sm">
                  Read Article <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
