import React from 'react';
import { Scissors } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Scissors className="w-6 h-6" />
      <span className="text-2xl font-serif">Diana Ahono</span>
    </div>
  );
};

export default Logo;