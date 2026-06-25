import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Filter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { categories, products } from '../data/products';
import { useCart } from '../context/CartContext';
import SkeletonCard from '../components/SkeletonCard';
import QuickViewModal from '../components/QuickViewModal';

const ProductsPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState('All Products');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  
  // Filters
  const [sortBy, setSortBy] = useState('featured');
  const [dietaryFilter, setDietaryFilter] = useState('all');

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory, sortBy, dietaryFilter, searchQuery]);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All Products' || p.category === activeCategory;
    const matchesDietary = 
      dietaryFilter === 'all' ? true :
      dietaryFilter === 'vegetarian' ? p.isVegetarian :
      dietaryFilter === 'no-nuts' ? !p.containsNuts : true;
    
    return matchesSearch && matchesCategory && matchesDietary;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0; // featured
  });

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  };

  const handleQuickView = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  return (
    <div className="bg-secondary min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-white py-16 mb-8 md:mb-12 shadow-sm">
        <div className="container mx-auto px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
          </h1>
          <p className="text-dark/70 text-lg max-w-2xl">
            Made Fresh, Just for You. Discover our whole collection of freshly baked goods made with love.
          </p>
        </div>
      </div>

      {/* Main Content: Categories on left ALWAYS */}
      <div className="container mx-auto px-4 md:px-12 flex flex-row gap-4 md:gap-12 items-start">
        {/* Sidebar Categories */}
        <div className="w-1/3 md:w-64 shrink-0 sticky top-24 md:top-32 max-h-[80vh] overflow-y-auto no-scrollbar pb-4">
          <h3 className="text-lg md:text-xl font-bold font-serif text-dark mb-4 md:mb-6">Categories</h3>
          <ul className="space-y-1 md:space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl transition-all font-medium text-sm md:text-base ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'text-dark/70 hover:bg-white hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Area */}
        <div className="flex-grow w-2/3">
          
          <div className="flex flex-col md:flex-row justify-end items-end md:items-center mb-6 gap-2 md:gap-4">
            <div className="flex flex-wrap gap-2 md:gap-4 items-center bg-white p-2 rounded-xl border border-gray-100 shadow-sm w-full md:w-auto">
              <Filter size={16} className="text-dark/50 ml-1 md:ml-2" />
              <select 
                value={dietaryFilter}
                onChange={(e) => setDietaryFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-dark/80 text-xs md:text-sm font-medium cursor-pointer py-1"
              >
                <option value="all">All Dietary</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="no-nuts">Nut-Free</option>
              </select>
              <div className="w-px h-6 bg-gray-200 hidden md:block"></div>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-dark/80 text-xs md:text-sm font-medium cursor-pointer py-1 pr-1 md:pr-2"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            <AnimatePresence mode="popLayout">
              {isLoading ? (
                Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={`skeleton-${i}`} />
                ))
              ) : filteredProducts.length === 0 ? (
                <div className="col-span-full py-12 text-center text-dark/50">
                  <p className="text-xl">No products found matching your criteria.</p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={product.id}
                    className="bg-white p-3 md:p-6 rounded-2xl md:rounded-3xl flex flex-col transition-all hover:shadow-xl border border-transparent hover:border-primary/20 group relative"
                  >
                    <div 
                      className="h-24 md:h-48 flex items-center justify-center mb-3 md:mb-6 relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer bg-[#FAF5ED]"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover rounded-xl md:rounded-2xl hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Quick View Button overlay */}
                      <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button 
                          onClick={(e) => handleQuickView(e, product)}
                          className="bg-white text-dark hover:bg-primary hover:text-white px-2 md:px-4 py-1.5 md:py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-1 md:gap-2 text-[10px] md:text-base"
                        >
                          <Eye size={14} className="md:w-4 md:h-4" /> <span className="hidden md:inline">Quick View</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 md:gap-2 cursor-pointer flex-grow" onClick={() => navigate(`/products/${product.id}`)}>
                      <span className="text-[9px] md:text-xs font-bold text-primary tracking-wider uppercase">{product.category}</span>
                      <h3 className="text-xs md:text-xl font-bold font-serif text-dark line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                      
                      <div className="flex items-center justify-between mt-auto pt-2">
                        <span className="text-xs md:text-xl font-bold text-dark">Rs. {product.price.toFixed(2)}</span>
                        <button 
                          onClick={(e) => handleAddToCart(e, product)}
                          className="bg-secondary hover:bg-primary text-dark hover:text-white p-2 md:p-3 rounded-full shadow-sm transition-colors group/btn relative z-20"
                        >
                          <ShoppingCart size={14} className="md:w-5 md:h-5 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>  
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default ProductsPage;
