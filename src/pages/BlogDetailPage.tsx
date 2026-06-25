import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="bg-secondary min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif font-bold text-dark mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary min-h-screen pb-24 pt-8">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        <Link to="/blog" className="text-primary font-medium hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          <div className="h-[400px] overflow-hidden relative">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-dark/50 text-sm font-medium uppercase tracking-widest">
                {blog.date}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-dark mb-8 leading-tight">
              {blog.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-dark/80 whitespace-pre-line">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
