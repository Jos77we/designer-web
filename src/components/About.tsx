import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif">About Diana Ahono</h2>
            <p className="text-gray-600 leading-relaxed">
              With a degree in Fashion and Textile Technology, I bring technical expertise
              and artistic vision to every piece I create. My journey in fashion design
              has been driven by a passion for innovative garment construction and a
              deep appreciation for the art of dressmaking.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each design is a celebration of elegance, crafted with meticulous
              attention to detail and a commitment to excellence. I believe in creating
              pieces that not only look beautiful but also make the wearer feel
              confident and extraordinary.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506795660198-e95c77602129?auto=format&fit=crop&q=80"
              alt="Diana Ahono"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;