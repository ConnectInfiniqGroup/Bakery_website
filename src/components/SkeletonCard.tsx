import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-50 p-4 md:p-6 rounded-3xl flex flex-col w-full"
    >
      <div className="h-32 md:h-48 w-full bg-gray-200 animate-pulse rounded-2xl mb-4 md:mb-6"></div>
      
      <div className="flex flex-col gap-3 flex-grow">
        <div className="h-3 md:h-4 w-16 md:w-24 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="h-4 md:h-6 w-3/4 bg-gray-200 animate-pulse rounded-md"></div>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="h-4 md:h-6 w-16 md:w-20 bg-gray-200 animate-pulse rounded-md"></div>
          <div className="h-8 w-8 md:h-10 md:w-10 bg-gray-200 animate-pulse rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkeletonCard;
