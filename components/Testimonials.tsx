import React from 'react';
import { type Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "I ran out of petrol on a busy highway. FuelNFill had someone there in 15 minutes. It was an absolute lifesaver!",
    name: 'Sarah J.',
    role: 'Commuter',
    avatarUrl: 'https://picsum.photos/seed/woman1/100/100',
  },
  {
    quote: "My car's battery died late at night. The app connected me to a mechanic who was professional and fixed it quickly. Highly recommend!",
    name: 'Mike R.',
    role: 'Road Tripper',
    avatarUrl: 'https://picsum.photos/seed/man1/100/100',
  },
  {
    quote: "The payment process was so easy and transparent. No haggling, no stress. Just fast, reliable service when I needed it most.",
    name: 'Emily Chen',
    role: 'Busy Parent',
    avatarUrl: 'https://picsum.photos/seed/woman2/100/100',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial, index: number }> = ({ testimonial, index }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
        <p className="text-slate-600 mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-brand-dark">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Drivers Like You</h2>
            <p className="text-lg text-slate-600">
                Don't just take our word for it. Here's what our users are saying about FuelNFill.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;