import React from 'react';
import { type Feature } from '../types';
import { FuelCanIcon, WrenchScrewdriverIcon, MapPinIcon, ShieldCheckIcon, ClockIcon } from './Icons';

const features: Feature[] = [
  {
    icon: <ClockIcon className="w-8 h-8 text-white" />,
    title: '24/7 Service',
    description: 'Day or night, rain or shine, our network is always available to assist you.',
  },
  {
    icon: <FuelCanIcon className="w-8 h-8 text-white" />,
    title: 'On-Demand Petrol',
    description: 'Choose your fuel type and amount, and we’ll deliver it directly to your location.',
  },
  {
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
    title: 'Nearby Mechanics',
    description: 'Connect with vetted, professional mechanics for quick diagnostics and repairs.',
  },
  {
    icon: <MapPinIcon className="w-8 h-8 text-white" />,
    title: 'Real-Time Tracking',
    description: 'Watch your service provider’s approach on the map, so you know exactly when they’ll arrive.',
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    title: 'Secure Payments',
    description: 'Pay for services safely and securely right through the app with no hidden fees.',
  },
];

const FeatureCard: React.FC<{ feature: Feature, index: number }> = ({ feature, index }) => (
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl mb-6 shadow-lg">
            {feature.icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-brand-dark">{feature.title}</h3>
        <p className="text-slate-500 leading-relaxed">{feature.description}</p>
    </div>
);


const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need, All in One App</h2>
            <p className="text-lg text-slate-600">
                We've packed FuelNFill with features designed for your peace of mind on the road.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;