import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Problem */}
          <div className="animate-fade-in-up">
            <img src="https://picsum.photos/seed/car-problem/600/400" alt="Car broken down on the side of the road" className="rounded-2xl shadow-xl w-full" />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Stranded? We've all been there.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              An empty fuel tank or a sudden engine issue can turn a perfect day into a stressful ordeal. Finding a nearby petrol station or a trusted mechanic, especially in an unfamiliar area, is a challenge that wastes time and causes anxiety.
            </p>
          </div>

          {/* Solution */}
           <div className="md:order-last animate-fade-in-up aspect-video" style={{ animationDelay: '0.4s' }}>
            <iframe
                className="w-full h-full rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/vpzXA8m954k"
                title="FuelNFill App Explainer Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
          <div className="md:order-first animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Your Roadside Lifeline.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              FuelNFill is your on-demand solution. With just a few taps, our app instantly connects you to a network of reliable petrol delivery services and professional mechanics nearby. We turn your breakdown into a brief pit stop.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;