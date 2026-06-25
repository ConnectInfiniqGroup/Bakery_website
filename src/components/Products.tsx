import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Eye, Filter } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { categories, products } from '../data/products';
import { useCart } from '../context/CartContext';
import SkeletonCard from './SkeletonCard';
import QuickViewModal from './QuickViewModal';

const Products = () => {
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
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-dark mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Bestsellers'}
            </h2>
            <p className="text-dark/70 text-lg">
              Loved by many, baked to perfection. Discover our most popular treats.
            </p>
          </div>
          
          <div className="flex gap-4 items-center bg-gray-50 p-2 rounded-xl border border-gray-100">
            <Filter size={18} className="text-dark/50 ml-2" />
            <select 
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-dark/80 text-sm font-medium cursor-pointer py-1"
            >
              <option value="all">All Dietary</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="no-nuts">Nut-Free</option>
            </select>
            <div className="w-px h-6 bg-gray-200"></div>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-dark/80 text-sm font-medium cursor-pointer py-1 pr-2"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-4 no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all font-medium border-2 ${
                activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-md' 
                  : 'border-gray-200 text-dark/70 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, i) => (
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
                  className="group relative bg-gray-50 p-4 md:p-6 rounded-3xl flex flex-col transition-all hover:shadow-xl hover:shadow-primary/5"
                >
                  <div 
                    className="h-32 md:h-48 flex items-center justify-center mb-4 md:mb-6 relative overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Quick View Button overlay */}
                    <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={(e) => handleQuickView(e, product)}
                        className="bg-white text-dark hover:bg-primary hover:text-white px-3 md:px-4 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2 text-xs md:text-base"
                      >
                        <Eye size={16} /> <span className="hidden md:inline">Quick View</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 cursor-pointer flex-grow" onClick={() => navigate(`/products/${product.id}`)}>
                    <span className="text-[10px] md:text-xs font-bold text-primary tracking-wider uppercase">{product.category}</span>
                    <h3 className="text-sm md:text-xl font-bold font-serif text-dark line-clamp-2 hover:text-primary transition-colors">{product.name}</h3>
                    
                    <div className="flex items-center justify-between mt-auto pt-2">
                      <span className="text-sm md:text-xl font-bold text-dark">Rs. {product.price.toFixed(2)}</span>
                      <button 
                        onClick={(e) => handleAddToCart(e, product)}
                        className="bg-white hover:bg-primary text-dark hover:text-white p-2 md:p-3 rounded-full shadow-sm transition-colors group/btn relative z-20"
                      >
                        <ShoppingCart size={16} className="md:w-5 md:h-5 group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>  
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {!isLoading && filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Link to="/products" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
              View All Products
            </Link>
          </div>
        )}
      </div>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default Products;
