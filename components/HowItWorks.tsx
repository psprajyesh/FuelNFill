
import React from 'react';
import { ChevronRightIcon } from './Icons';

const StepCard: React.FC<{ number: string; title: string; description: string; delay: string; }> = ({ number, title, description, delay }) => (
    <div className="relative flex-1 p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: delay }}>
        <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-lg">
            {number}
        </div>
        <h3 className="text-xl font-bold mb-3 mt-5 text-brand-dark">{title}</h3>
        <p className="text-slate-500">{description}</p>
    </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Back on the Road</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">In just three simple steps, help is on the way.</p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            <StepCard number="1" title="Post Your Problem" description="Open the app, select your issue (fuel or repair), and pinpoint your location." delay="0.2s" />
            <div className="text-slate-300 hidden md:block mx-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <ChevronRightIcon className="w-12 h-12" />
            </div>
             <StepCard number="2" title="Get Connected" description="We instantly broadcast your request to the nearest available service providers." delay="0.6s" />
             <div className="text-slate-300 hidden md:block mx-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <ChevronRightIcon className="w-12 h-12" />
            </div>
            <StepCard number="3" title="Get Help Delivered" description="Track your service provider in real-time as they come to your rescue." delay="1s" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
