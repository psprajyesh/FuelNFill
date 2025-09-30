import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-400 via-cyan-500 to-sky-600 text-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
       <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full filter blur-xl opacity-70"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full filter blur-2xl opacity-50"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                FuelNFill Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-sky-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Instant petrol delivery and expert roadside repair, right at your fingertips. Never get stranded again.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a
                href="#cta"
                className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full shadow-2xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                Get Help Now
                </a>
                <a
                href="#how-it-works"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
                >
                Learn More
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;