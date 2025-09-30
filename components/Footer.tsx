import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} FuelNFill. All Rights Reserved.</p>
        <p className="text-sm mt-2">Your reliable partner on the road.</p>
      </div>
    </footer>
  );
};

export default Footer;