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
    if (response === 'playbook') {
      setChatStep('playbook');
    } else if (response === 'review') {
      window.open('https://calendly.com/twentysum/private-consultation', '_blank');
    } else if (response === 'leads') {
      setChatStep('leads');
    } else if (response === 'yes-system') {
      setChatStep('hasSystem');
    } else if (response === 'no-system') {
      setChatStep('noSystem');
    } else if (response === 'yes-missed') {
      setChatStep('needsHelp');
    } else if (response === 'no-missed') {
      setChatStep('noHelp');
    } else if (response === 'get-playbook') {
      setChatStep('emailCapture');
    } else if (response === 'get-review') {
      setChatStep('reviewCapture');
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
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8 tracking-tight text-gray-900">
            Property Management, Optimized for Maximum Revenue & Minimum Hassle
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help property owners and managers streamline operations, automate workflows, and scale short-term and vacation rentals into high-performing portfolios—without the headache of day-to-day management.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.open('https://calendly.com/twentysum/property-consultation', '_blank')}
              className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Schedule Your Free Ops Consultation
            </button>
            <a 
              href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20property%20management%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-gray-600 mt-6 text-lg">
            From single properties to full portfolios—we handle the operations so you can focus on growth.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Managing Properties Is Hard. Most Owners Are Overwhelmed.</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
                <div className="space-y-6 text-left max-w-2xl mx-auto">
                  <p className="text-lg">Missed bookings, messy spreadsheets, and slow maintenance approvals cost time and money.</p>
                  <p className="text-lg">Trying to manage short-term rentals manually leads to lost revenue and frustrated tenants or guests.</p>
                  <p className="text-lg">Most property managers are stuck in outdated, manual processes that don't scale.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Turn Your Property Portfolio Into a High-Performing Asset</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">We offer high-touch property management operations services tailored for short-term and vacation rentals:</p>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mt-8">
                <ul className="space-y-4 text-left max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Short-Term Rental Management Packages:</strong> Full-service co-hosting and operations for property owners.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Workflow Automation & Reporting:</strong> Automate maintenance, guest communications, and occupancy reporting.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Luxury & Vacation Property Focus:</strong> High-ticket retention with premium properties that maximize ROI.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Scalable Long-Term Rental Integration:</strong> Expand your portfolio with fully managed long-term rental workflows.</span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => window.open('https://calendly.com/twentysum/property-consultation', '_blank')}
                    className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    Discover How We Can Automate Your Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Why Twentysum?</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Save Time & Reduce Stress</h3>
                <p className="text-gray-700 text-lg">We handle the daily operations so you don't have to.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Increase Revenue</h3>
                <p className="text-gray-700 text-lg">From $500–$2k per property to $3k–$10k per client with smart scaling.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Data-Driven Decisions</h3>
                <p className="text-gray-700 text-lg">Reporting dashboards and actionable insights for every property.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium mb-4 text-gray-900">Flexible Services</h3>
                <p className="text-gray-700 text-lg">Packages that grow with your portfolio, from a single property to dozens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Twentysum Services - B2B Property Management Operations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Service 1 */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Short-Term & Vacation Rental Operations</h3>
                <p className="text-gray-600 mb-6">For property management companies or vacation rental portfolio owners:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Full operational management of short-term rental units</li>
                  <li>• Guest communication handled professionally</li>
                  <li>• Coordination of cleaning, maintenance, and inspections</li>
                  <li>• Booking management and calendar optimization</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Value:</p>
                  <p className="text-gray-700">Turn a portfolio of properties into a smoothly running, revenue-maximizing system without manual oversight.</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border-2 border-gray-900 p-8 bg-white relative">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Workflow Automation & Reporting</h3>
                <p className="text-gray-600 mb-6">For PM companies or operators with multiple properties:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Automating repetitive admin and operational tasks</li>
                  <li>• Integrated dashboards for occupancy, revenue, and maintenance KPIs</li>
                  <li>• Alerts and reporting for operational bottlenecks</li>
                  <li>• Maintenance requests and guest messaging automation</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Value:</p>
                  <p className="text-gray-700">Reduce errors, speed up response times, and give management a real-time view of all properties.</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Portfolio Optimization for Luxury Rentals</h3>
                <p className="text-gray-600 mb-6">For managers handling vacation homes, luxury villas, or corporate housing:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Revenue maximization strategies (dynamic pricing, occupancy optimization)</li>
                  <li>• Operational scaling for high-value units</li>
                  <li>• Vendor and concierge service integration</li>
                  <li>• Premium service standards maintenance</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Value:</p>
                  <p className="text-gray-700">Increase revenue per property and maintain premium service standards, without expanding headcount.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Ready to Turn Your Properties Into High-Performing Assets?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation today and see how Twentysum can automate operations, increase revenue, and scale your portfolio—without adding more headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => window.open('https://calendly.com/twentysum/property-consultation', '_blank')}
                className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book Your Free Consultation
              </button>
              <a 
                href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20property%20management%20services" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operation Flow Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Trusted by Property Owners & Managers Who Demand Results</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-xl text-gray-700 mb-6">
                "Managed 50+ properties with 95% occupancy rates through Twentysum's automated operations system."
              </p>
              <p className="text-lg text-gray-700">
                Keep it concise and results-focused - showcase client testimonials or metrics that demonstrate operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Optional Add-On Services</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                  <p className="font-medium text-gray-900">Technology & automation consulting for PM workflows</p>
                  <p className="font-medium text-gray-900">SOP development for maintenance, cleaning, and guest operations</p>
                  <p className="font-medium text-gray-900">Reporting dashboards and KPI tracking for multi-property portfolios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Repeat */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12">Ready to stop losing leads?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={() => handleChatResponse('playbook')}
              className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              👉 Get the AI Playbook
            </button>
            <button 
              onClick={() => handleChatResponse('review')}
              className="border border-gray-900 text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              👉 Request a System Review
            </button>
          </div>
          <p className="text-xl text-gray-700">Your business, but better.</p>
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
              <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms.html" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="https://www.instagram.com/twenty_sum" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="mailto:ajarlandings@gmail.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
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
                    <p className="text-gray-900 mb-4">Hi! I'm the Twentysum Operations Assistant. I help property management companies optimize their operations and scale their portfolios. How can I assist you today?</p>
                  </div>
                  <div className="space-y-3">
                    <a 
                     href="https://calendly.com/twentysum/property-consultation"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                     Book Operations Consultation
                    </a>
                    <a 
                     href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20B2B%20property%20management%20operations%20services"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                    <a 
                     href="mailto:ajarlandings@gmail.com?subject=B2B%20Property%20Management%20Operations%20Inquiry"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Email Us
                    </a>
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