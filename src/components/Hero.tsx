import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
            alt="Fashion Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-serif">Where Elegance Meets Innovation</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Crafting timeless pieces that celebrate individuality and sophistication
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;