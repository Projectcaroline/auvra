import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-light mb-8">About Twentysum</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            I'm Caroline, an Airbnb co-host specializing in coastal Namibia properties.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            I've been managing short-term rentals in Windhoek and Swakopmund since 2024, helping individual hosts maximize revenue during peak tourism seasons without the daily management headache.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            My approach is data-driven and operator-focused:
          </p>
          
          <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
            <li>I track local booking patterns and competitor pricing daily</li>
            <li>I respond to guest inquiries within minutes to capture algorithm advantage</li>
            <li>I optimize for Namibia's unique tourism cycles (Feb-March coastal peak, year-round business travel in Windhoek)</li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-6">
            Currently managing a few properties with an average occupancy rate of 85%.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            Most hosts I work with see 25-40% revenue increase in the first 60 days because we don't waste time—we optimize immediately and adjust daily.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            If you're serious about maximizing your Airbnb revenue, let's talk.
          </p>
          
          <div className="text-center">
            <button 
              onClick={() => window.open('https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20request%20co-host%20access%20for%20my%20Airbnb%20property', '_blank')}
              className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Request Co-Host Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;