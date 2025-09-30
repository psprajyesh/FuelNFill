import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-teal-400 via-cyan-500 to-sky-600 text-white relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full filter blur-xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Ready to Drive with Peace of Mind?</h2>
        <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Download FuelNFill today and join thousands of drivers who are prepared for anything the road throws their way.
        </p>
        <a
          href="#"
          className="inline-block px-10 py-5 bg-white text-brand-blue font-bold rounded-full shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Download the App
        </a>
      </div>
    </section>
  );
};

export default CTA;