import React from 'react';

const portfolioItems = [
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    category: 'Evening Wear',
    title: 'Silk Evening Gown'
  },
  {
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&q=80',
    category: 'Bridal',
    title: 'Custom Wedding Dress'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
    category: 'Casual Wear',
    title: 'Summer Collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
    category: 'Evening Wear',
    title: 'Cocktail Dress'
  },
  {
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&q=80',
    category: 'Casual Wear',
    title: 'Spring Collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
    category: 'Evening Wear',
    title: 'Formal Gown'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a collection of my finest creations, each piece telling its own
            unique story of elegance and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm uppercase tracking-wider mb-2">{item.category}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;