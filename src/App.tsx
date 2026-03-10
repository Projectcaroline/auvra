import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Check, Zap, Users, Shield, ArrowRight, Star, Calendar, TrendingUp } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-charcoal font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-playfair font-semibold text-maroon tracking-wide">TWENTYSUM</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Services</a>
            <a href="#how-it-works" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">How It Works</a>
            <a href="#results" className="text-charcoal/70 hover:text-maroon transition-colors font-medium">Results</a>
            <a 
              href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20Airbnb%20co-hosting%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-maroon transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-playfair font-light leading-tight mb-8 text-charcoal">
              Airbnb Co-Hosting for Namibia
              <div className="w-32 h-1 bg-maroon mx-auto mt-6"></div>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Premium properties. Maximum revenue. Zero hassle.
            </p>
            <div className="mb-8">
              <button 
                onClick={() => window.open('https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20request%20co-host%20access%20for%20my%20Airbnb%20property', '_blank')}
                className="bg-maroon text-white px-12 py-4 text-lg font-medium hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Request Co-Host Access
              </button>
            </div>
            <div className="inline-flex items-center space-x-4 text-charcoal/60 text-lg">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                12 Properties
              </span>
              <span>•</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                85% Avg Occupancy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-24 bg-subtle-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">20-30% Revenue Increase</h3>
              <p className="text-lg text-charcoal/70 leading-relaxed">Dynamic pricing captures peak demand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">24/7 Guest Management</h3>
              <p className="text-lg text-charcoal/70 leading-relaxed">Instant responses, 95%+ acceptance rate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-maroon" />
              </div>
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">You Stay In Control</h3>
              <p className="text-lg text-charcoal/70 leading-relaxed">Approve bookings, collect higher revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-subtle-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">Most Airbnb Hosts Are Leaving Money on the Table</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-3">Response delays = lost bookings to faster hosts</h3>
              <p className="text-charcoal/70">Every hour you wait costs you 15-20% chance of conversion</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-3">Flat pricing = missed weekend revenue</h3>
              <p className="text-charcoal/70">Same rate Friday-Sunday leaves $200-400/month on table</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-3">Calendar gaps = 15-20% occupancy loss</h3>
              <p className="text-charcoal/70">3-4 day openings between bookings never fill at standard rates</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-3">Generic photos = low click-through</h3>
              <p className="text-charcoal/70">Wrong primary image costs you 30-40% of potential views</p>
            </div>
          </div>
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-charcoal mb-4">You're not lazy. You're busy.</p>
              <p className="text-lg text-charcoal/80">But hosts who optimize daily are outearning you by 25-40%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">Results That Speak</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-1 bg-maroon mb-6"></div>
              <div className="text-4xl font-playfair font-medium text-gold mb-4">15 reviews</div>
              <div className="text-lg text-charcoal/80 mb-2">in 45 days</div>
              <p className="text-charcoal/60">New listing launch</p>
              <p className="text-sm text-charcoal/50 mt-3">New hosts typically take 4-6 months to reach this</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-1 bg-maroon mb-6"></div>
              <div className="text-4xl font-playfair font-medium text-gold mb-4">35%</div>
              <div className="text-lg text-charcoal/80 mb-2">revenue increase</div>
              <p className="text-charcoal/60">Beachfront optimization</p>
              <p className="text-sm text-charcoal/50 mt-3">From $1,200/month to $1,620/month in 60 days</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-full h-1 bg-maroon mb-6"></div>
              <div className="text-4xl font-playfair font-medium text-gold mb-4">70% → 98%</div>
              <div className="text-lg text-charcoal/80 mb-2">response rate</div>
              <p className="text-charcoal/60">Guesthouse turnaround</p>
              <p className="text-sm text-charcoal/50 mt-3">Bookings doubled within 30 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">How It Works</h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-maroon transform -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "Send Invite", desc: "Add me as co-host to your listing" },
                { step: "2", title: "Optimize", desc: "48hrs to perfect pricing & photos" },
                { step: "3", title: "Handle Guests", desc: "24/7 communication & management" },
                { step: "4", title: "Collect Revenue", desc: "Watch bookings & income increase" }
              ].map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-playfair font-medium text-charcoal relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-playfair font-medium text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">Co-Hosting Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">Full Airbnb Co-Hosting</h3>
              <p className="text-charcoal/70 mb-6">Everything handled. You approve bookings.</p>
              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>24/7 guest communication (95%+ response rate)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Dynamic pricing (weekend rates 20-30% higher)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Calendar gap optimization (fill empty dates)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Photo sequencing & listing improvements</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Review generation strategy</span>
                </li>
              </ul>
              <p className="text-sm text-charcoal/60 italic">Best for: Established properties, beachfront units, busy owners</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">New Listing Launch (First 60 Days)</h3>
              <p className="text-charcoal/70 mb-6">Capture Airbnb's ranking boost before it expires.</p>
              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Pricing structure setup (competitive positioning)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Photo optimization (maximize clicks)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Review velocity strategy (10+ reviews in 45 days)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Guest communication templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Algorithm advantage maximization</span>
                </li>
              </ul>
              <p className="text-sm text-charcoal/60 italic">Best for: Hosts launching their first property or relaunching underperformers</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-playfair font-medium text-charcoal mb-4">Multi-Property Portfolio</h3>
              <p className="text-charcoal/70 mb-6">Standardized operations across 3+ listings.</p>
              <ul className="space-y-3 text-charcoal/70 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Unified pricing strategy</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Centralized guest communication</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Performance reporting & benchmarking</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-maroon mt-1 mr-3 flex-shrink-0" />
                  <span>Cross-property optimization</span>
                </li>
              </ul>
              <p className="text-sm text-charcoal/60 italic">Best for: Hosts managing multiple Airbnb units</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-charcoal/80">All packages: 15% of completed bookings. No monthly retainer.</p>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-24 bg-subtle-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">Why Hosts Choose Twentysum</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">Local Market Expertise</h3>
              <p className="text-charcoal/70">I track Windhoek and Swakopmund booking patterns daily. I know when demand spikes, what tourists search for, and how to price competitively in Namibia's unique STR market.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">Data-Driven Optimization</h3>
              <p className="text-charcoal/70">Your property gets daily pricing adjustments based on competitor moves, local events & holidays, seasonal demand shifts, and booking velocity trends.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">Instant Response Advantage</h3>
              <p className="text-charcoal/70">Airbnb's algorithm prioritizes hosts who respond within minutes. I handle inquiries 24/7 so you never lose a booking to response delay.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">You Stay in Control</h3>
              <p className="text-charcoal/70">You approve all bookings from your phone. I handle pricing, calendar, and guests. You collect higher revenue without extra work.</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-charcoal/80">Currently managing 12 properties with 85% average occupancy.</p>
            <p className="text-lg text-charcoal/80">Most hosts see results within 7 days.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-light mb-6 text-charcoal">Common Questions</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-subtle-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">Do I lose control of my listing?</h3>
              <p className="text-charcoal/70">No. You stay listed as host and approve all bookings. I only access pricing, calendar, and messaging.</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">What if I already have bookings?</h3>
              <p className="text-charcoal/70">Perfect. I optimize around existing reservations and fill the gaps between them.</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">How fast will I see results?</h3>
              <p className="text-charcoal/70">Most hosts see booking velocity increase within 5-7 days after optimization begins.</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">What areas do you cover?</h3>
              <p className="text-charcoal/70">Windhoek, Swakopmund, Langstrand, and Walvis Bay corridor.</p>
            </div>
            <div className="bg-subtle-gray p-8 rounded-lg">
              <h3 className="text-xl font-playfair font-medium text-charcoal mb-4">Can I cancel anytime?</h3>
              <p className="text-charcoal/70">Yes. No long-term contracts. Remove my co-host access whenever you want.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-playfair font-light mb-8 text-charcoal">Transparent Pricing</h2>
          <div className="bg-subtle-gray p-12 rounded-lg">
            <div className="text-6xl font-playfair font-light text-gold mb-4">15%</div>
            <div className="text-2xl text-charcoal mb-6">of bookings. No upfront cost.</div>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              You only pay when you earn. Our success is directly tied to your revenue growth.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-maroon text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-playfair font-light mb-8">Ready to Stop Losing Peak Season Revenue?</h2>
          <div className="mb-12">
            <p className="text-xl mb-4 opacity-90">March is the last high-demand month before coastal tourism slows.</p>
            <p className="text-lg mb-4 opacity-80">Every day without optimization costs you $100-200 in potential bookings.</p>
            <p className="text-xl opacity-90">15% of bookings. No upfront cost. Results in 7 days.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => window.open('https://calendly.com/twentysum/property-consultation', '_blank')}
              className="bg-gold text-charcoal px-12 py-4 text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Schedule Consultation
            </button>
            <a 
              href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20Airbnb%20co-hosting%20services" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal px-12 py-4 text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              WhatsApp Now
            </a>
          </div>
          <p className="text-sm text-white/60 mt-6">No long-term contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-subtle-gray">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-lg text-charcoal/80 mb-6">Currently Managing</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-charcoal/60">
            <span className="flex items-center text-lg">
              <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
              12 Properties Managed
            </span>
            <span className="flex items-center text-lg">
              <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
              85% Average Occupancy
            </span>
            <span className="flex items-center text-lg">
              <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
              Windhoek • Swakopmund • Langstrand
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-2 tracking-wide">TWENTYSUM</h3>
              <p className="text-white/60">Premium Airbnb co-hosting for coastal Namibia properties.</p>
            </div>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="/privacy.html" className="text-white/60 hover:text-white transition-colors">Privacy</a>
              <a href="/terms.html" className="text-white/60 hover:text-white transition-colors">Terms</a>
              <a href="https://www.instagram.com/twenty_sum" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Instagram</a>
              <a href="mailto:ajarlandings@gmail.com" className="text-white/60 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">AI systems for serious operators</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-white border border-gray-200 shadow-2xl w-80 max-w-[calc(100vw-3rem)] rounded-lg overflow-hidden">
            <div className="bg-maroon text-white p-4 flex justify-between items-center">
              <span className="font-medium">Twentysum AI</span>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gold transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {chatStep === 'initial' && (
                <>
                  <div className="mb-6">
                    <p className="text-charcoal mb-4">Hi! I'm the Twentysum Co-Hosting Assistant. I help Airbnb hosts in Namibia optimize their listings and increase revenue. How can I assist you today?</p>
                  </div>
                  <div className="space-y-3">
                    <a 
                     href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20request%20co-host%20access%20for%20my%20Airbnb%20property"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="block w-full text-left p-3 border border-gray-200 hover:border-maroon hover:bg-subtle-gray transition-colors rounded"
                    >
                     Request Co-Host Access
                    </a>
                    <a 
                     href="https://wa.me/264812568924?text=Hi%2C%20I%27d%20like%20to%20learn%20about%20your%20Airbnb%20co-hosting%20services"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="block w-full text-left p-3 border border-gray-200 hover:border-maroon hover:bg-subtle-gray transition-colors rounded"
                    >
                      WhatsApp Us
                    </a>
                    <a 
                     href="mailto:ajarlandings@gmail.com?subject=Airbnb%20Co-Hosting%20Inquiry"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="block w-full text-left p-3 border border-gray-200 hover:border-maroon hover:bg-subtle-gray transition-colors rounded"
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
            className="bg-maroon text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gold hover:text-charcoal transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;