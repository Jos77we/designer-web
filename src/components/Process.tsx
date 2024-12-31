import React from 'react';
import { Pencil, Scissors, Ruler, Heart, Star, Check } from 'lucide-react';

const processes = [
  {
    icon: <Pencil size={24} />,
    title: 'Conceptualization',
    description: 'Understanding client needs and researching current trends'
  },
  {
    icon: <Star size={24} />,
    title: 'Sketching',
    description: 'Translating ideas into detailed design sketches'
  },
  {
    icon: <Heart size={24} />,
    title: 'Fabric Selection',
    description: 'Choosing the perfect materials for each unique design'
  },
  {
    icon: <Ruler size={24} />,
    title: 'Pattern Making',
    description: 'Creating precise patterns for perfect fit'
  },
  {
    icon: <Scissors size={24} />,
    title: 'Assembly',
    description: 'Careful construction with attention to detail'
  },
  {
    icon: <Check size={24} />,
    title: 'Final Touches',
    description: 'Adding embellishments and ensuring quality'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">The Creation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each piece is crafted through a meticulous process, ensuring the highest
            quality and attention to detail from concept to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-gray-800 mb-4">{process.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;