import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Check, Zap, Users, Shield, ArrowRight } from 'lucide-react';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState('initial');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatResponse = (response: string) => {
    if (response === 'learn') {
      setChatStep('guide');
    } else if (response === 'implement') {
      setChatStep('implement');
    } else if (response === 'core' || response === 'elite') {
      window.open('https://wa.me/264812568924', '_blank');
    } else {
      window.open('https://calendly.com/twentysum/private-consultation', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-wide">TWENTYSUM</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#guide" className="text-gray-600 hover:text-gray-900 transition-colors">Guide</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8 tracking-tight">
            AI systems that capture, qualify, and convert — without human bottlenecks.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We help founders and agencies automate conversations, leads, and operations using intelligent AI systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get the Elite AI Playbook
            </button>
            <a 
              href="#services" 
              className="text-gray-600 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
            >
              View Private Services
            </a>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium mb-6">The Problem</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Most AI automation advice is surface-level. You need systems that actually work at scale, 
                handle edge cases, and integrate with real business operations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-6">The Transformation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deploy AI systems that handle 80% of your conversations, qualify leads automatically, 
                and free your team to focus on high-value work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Product Section */}
      <section id="guide" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">The Elite AI Advantage</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A confidential guide built for serious operators. Not beginner fluff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Core Guide */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Core Guide</h3>
                <div className="text-4xl font-light mb-4">$149</div>
                <p className="text-gray-600">PDF guide with foundational AI automation frameworks</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">47-page implementation guide</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Conversation flow templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">ROI calculation framework</span>
                </li>
              </ul>
              <button 
                onClick={() => handleChatResponse('core')}
                className="w-full border border-black text-black py-3 hover:bg-black hover:text-white transition-colors"
              >
                Get Core Guide
              </button>
            </div>

            {/* Elite Bundle - Featured */}
            <div className="border-2 border-black p-8 bg-white relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Elite Bundle</h3>
                <div className="text-4xl font-light mb-4">$497</div>
                <p className="text-gray-600">Complete system with templates and roadmap</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Everything in Core Guide</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">12 automation templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">90-day implementation roadmap</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Private operator community</span>
                </li>
              </ul>
              <button 
                onClick={() => handleChatResponse('elite')}
                className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
              >
                Get Elite Bundle
              </button>
            </div>

            {/* Private Operator */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium mb-4">Private Operator</h3>
                <div className="text-4xl font-light mb-4">$1,497</div>
                <p className="text-gray-600">Everything above plus direct access</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Everything in Elite Bundle</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Private 1:1 strategy call</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Direct chatbot access</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-black mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Application required</span>
                </li>
              </ul>
              <button 
                onClick={() => handleChatResponse('apply')}
                className="w-full border border-black text-black py-3 hover:bg-black hover:text-white transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* High-Ticket Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Private AI Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom automation systems for operators who need results, not experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4">AI Automation Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                End-to-end automation that handles lead capture, qualification, and nurturing without human intervention.
              </p>
              <div className="text-sm font-medium text-black">
                Outcome: 3-5x lead conversion with 80% less manual work
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4">AI Agents for Lead Handling</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Intelligent agents that engage prospects, answer questions, and book qualified meetings automatically.
              </p>
              <div className="text-sm font-medium text-black">
                Outcome: 24/7 lead engagement with human-level conversations
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-12 h-12 text-black" />
              </div>
              <h3 className="text-2xl font-medium mb-4">AI Websites (Bolt-powered)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High-converting websites with integrated AI systems that qualify visitors and drive conversions.
              </p>
              <div className="text-sm font-medium text-black">
                Outcome: Websites that sell while you sleep
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => handleChatResponse('implement')}
              className="bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors mb-4"
            >
              Request Private Setup
            </button>
            <p className="text-gray-600">Limited availability. Serious inquiries only.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-16">Built for operators in real estate, services, and agencies</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Conversation Framework</h3>
              <p className="text-gray-600">Battle-tested across 50+ industries</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Implementation Roadmap</h3>
              <p className="text-gray-600">90-day system deployment process</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">ROI Tracking</h3>
              <p className="text-gray-600">Measure automation impact on revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">TWENTYSUM</h3>
              <p className="text-gray-400">AI systems for serious operators</p>
            </div>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 italic">This is not for everyone — but if you know, you know.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-white border border-gray-200 shadow-2xl w-80 max-w-[calc(100vw-3rem)]">
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <span className="font-medium">Twentysum AI</span>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {chatStep === 'initial' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Are you here to learn or to implement?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('learn')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Learn
                    </button>
                    <button 
                      onClick={() => handleChatResponse('implement')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Implement
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'guide' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Perfect. The Elite AI Advantage guide is designed for operators ready to understand how AI systems create competitive advantages. Would you like to start with the Core Guide or jump to the Elite Bundle?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('core')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Core Guide
                    </button>
                    <button 
                      onClick={() => handleChatResponse('elite')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Elite Bundle
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'implement' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Excellent. Our private AI automation services are built for serious operators. What's your primary bottleneck: lead qualification, conversation handling, or operational workflows?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('leads')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Lead Qualification
                    </button>
                    <button 
                      onClick={() => handleChatResponse('conversations')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Conversations
                    </button>
                    <button 
                      onClick={() => handleChatResponse('operations')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Operations
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;