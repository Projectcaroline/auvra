import React from 'react';
import { useState } from 'react';
import './App.css';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Private AI Systems for Elite Founders</h1>
            <p className="hero-slogan">Transform your business with custom AI automation that saves 20+ hours weekly</p>
            <p>Stop wasting time on repetitive tasks. Get a private AI system built specifically for your business that handles operations, customer service, and growth - while you focus on what only you can do.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems. Can we schedule a consultation?" className="btn-primary" target="_blank" rel="noopener noreferrer">🚀 APPLY NOW (EXCLUSIVE)</a>
              <button onClick={() => setCurrentPage('services')} className="btn-secondary">View AI Systems</button>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#8b6f47', marginTop: '1rem', fontStyle: 'italic' }}>
              ✅ Application-only • ✅ 12 clients maximum • ✅ Elite founders only
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
              alt="AI automation dashboard" 
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="services">
        <div className="services-header">
          <h2>Private AI Systems</h2>
        </div>
        
        <div className="service-item">
          <div className="service-content">
            <div className="service-number">1</div>
            <div className="service-text">
              <h3>Business Intelligence AI<br /><span style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#e6d7c3' }}>Your 24/7 Business Brain</span></h3>
              <p>Custom AI that analyzes your data, predicts trends, and provides actionable insights. Make faster, smarter decisions with AI that knows your business inside and out.</p>
              <button onClick={() => setCurrentPage('services')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Business intelligence dashboard" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">2</div>
            <div className="service-text">
              <h3>Customer Experience AI<br /><span style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#e6d7c3' }}>Never Miss a Customer Again</span></h3>
              <p>AI-powered customer service that handles inquiries, processes orders, and nurtures leads 24/7. Your customers get instant, personalized responses while you sleep.</p>
              <button onClick={() => setCurrentPage('services')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Customer service AI interface" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="service-item">
          <div className="service-content">
            <div className="service-number">3</div>
            <div className="service-text">
              <h3>Operations Automation AI<br /><span style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#e6d7c3' }}>Run Your Business on Autopilot</span></h3>
              <p>Complete workflow automation that handles everything from lead qualification to project management. Your business runs smoothly even when you're not there.</p>
              <button onClick={() => setCurrentPage('services')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Operations automation workflow" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="why-work">
        <div className="why-work-content">
          <h2 className="script-heading">Why Elite Founders Choose Twentysum</h2>
          <p>We don't just build AI tools - we create private AI ecosystems that transform how you operate.</p>
          
          <div className="benefits">
            <div className="benefit">
              <h3>🎯 Exclusive Access</h3>
              <p>Limited to 12 elite clients. No crowded platforms, no generic solutions. You get our full attention and custom-built systems designed specifically for your business.</p>
            </div>
            <div className="benefit">
              <h3>⚡ Rapid Implementation</h3>
              <p>Most systems are live within 2-4 weeks. We move fast because your time is valuable. See results immediately, not months later.</p>
            </div>
            <div className="benefit">
              <h3>🚀 Exponential ROI</h3>
              <p>Our clients typically save 20+ hours weekly and see 3x faster business growth. The investment pays for itself within 30-60 days through pure efficiency gains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="value-prop">
        <div className="value-content">
          <h2>Real Results from Elite Clients</h2>
          <div className="value-grid">
            <div className="value-item">
              <h3>📈 SaaS Founder</h3>
              <p><strong>25 hours saved weekly</strong> through automated customer onboarding and support. Scaled from $50K to $200K MRR in 6 months with the same team size.</p>
            </div>
            <div className="value-item">
              <h3>🏢 Agency Owner</h3>
              <p><strong>40% faster project delivery</strong> with AI-powered project management and client communication. Increased profit margins by 60% through efficiency gains.</p>
            </div>
            <div className="value-item">
              <h3>💼 E-commerce CEO</h3>
              <p><strong>3x conversion rate increase</strong> with personalized AI customer experiences. Automated 80% of customer service while improving satisfaction scores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to <span className="script">Join the Elite?</span></h2>
          <p>Applications are reviewed personally. We only accept founders who are serious about transformation and ready to invest in world-class AI systems.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems. Can we schedule a consultation?" className="btn-primary" target="_blank" rel="noopener noreferrer">🚀 APPLY NOW</a>
            <button onClick={() => setCurrentPage('contact')} className="btn-outline">View Application Process</button>
          </div>
          <p className="cta-subtext">⚡ Limited to 12 clients • 🎯 Elite founders only • 🚀 Results guaranteed</p>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div style={{ paddingTop: '6rem' }}>
      <section className="about">
        <div className="about-content">
          <h1 className="script-heading">The Philosophy Behind Twentysum</h1>
          <h3>We believe every elite founder deserves a private AI system that works as hard as they do</h3>
          
          <p>Most entrepreneurs are drowning in operational tasks that don't move the needle. You didn't start your business to manage emails, chase leads, or handle customer service tickets.</p>
          
          <p>You started it to create impact, build wealth, and change the world.</p>
          
          <p className="bold">That's where we come in.</p>
          
          <p>Twentysum builds private AI systems exclusively for elite founders who understand that time is their most valuable asset. We don't work with everyone - we work with the best.</p>

          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#3d2914' }}>Our Mission & Values</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>🎯 Excellence Over Volume</h3>
                <p>We limit ourselves to 12 clients because exceptional results require exceptional attention. Quality over quantity, always.</p>
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>⚡ Speed of Implementation</h3>
                <p>Elite founders move fast. Our AI systems are deployed in weeks, not months. Time is money, and we respect both.</p>
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>🚀 Exponential Results</h3>
                <p>We don't just automate tasks - we transform businesses. Our clients see 3x growth because they can finally focus on what matters.</p>
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>🔒 Privacy & Exclusivity</h3>
                <p>Your business data stays private. Your competitive advantages stay secret. Your AI system is yours alone.</p>
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>💎 Elite Standards</h3>
                <p>We only work with founders who demand the best. If you're looking for cheap solutions, we're not for you.</p>
              </div>
              
              <div style={{ padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '15px' }}>
                <h3>🎪 Partnership Approach</h3>
                <p>We're not just vendors - we're partners in your success. Your wins are our wins. Your growth is our mission.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p className="bold" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Ready to join the elite?</p>
            <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems. Can we schedule a consultation?" className="btn-primary" target="_blank" rel="noopener noreferrer">🚀 APPLY NOW</a>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div style={{ paddingTop: '6rem' }}>
      <section className="packages">
        <div className="packages-header">
          <h2>Private AI Systems</h2>
          <p className="packages-subtitle">Custom AI solutions built exclusively for elite founders</p>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">1</div>
            <div className="package-text">
              <h3>Business Intelligence AI</h3>
              <p><strong>Outcome:</strong> Make data-driven decisions 10x faster with AI that analyzes your business metrics, predicts trends, and provides actionable insights in real-time.</p>
              <ul>
                <li>Custom dashboard with real-time analytics</li>
                <li>Predictive modeling for revenue forecasting</li>
                <li>Automated reporting and insights</li>
                <li>Integration with all your business tools</li>
                <li>24/7 monitoring and alerts</li>
              </ul>
              <p style={{ fontSize: '1.1rem', color: '#8b6f47', fontWeight: '500', marginTop: '1rem' }}>Investment: Custom pricing based on complexity</p>
              <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for Business Intelligence AI. Can we discuss my specific needs?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">APPLY FOR THIS SYSTEM</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Business intelligence AI dashboard" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">2</div>
            <div className="package-text">
              <h3>Customer Experience AI</h3>
              <p><strong>Outcome:</strong> Never lose a customer again. AI handles all customer interactions, processes orders, and nurtures leads 24/7 while maintaining your brand voice.</p>
              <ul>
                <li>Intelligent chatbot with natural conversations</li>
                <li>Automated lead qualification and nurturing</li>
                <li>Order processing and customer support</li>
                <li>Personalized customer journeys</li>
                <li>Integration with CRM and sales tools</li>
              </ul>
              <p style={{ fontSize: '1.1rem', color: '#e6d7c3', fontWeight: '500', marginTop: '1rem' }}>Investment: Custom pricing based on volume</p>
              <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for Customer Experience AI. Can we discuss my specific needs?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">APPLY FOR THIS SYSTEM</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Customer experience AI interface" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">3</div>
            <div className="package-text">
              <h3>Operations Automation AI</h3>
              <p><strong>Outcome:</strong> Run your business on autopilot. AI handles workflows, project management, team coordination, and operational tasks so you can focus on strategy.</p>
              <ul>
                <li>Complete workflow automation</li>
                <li>AI project manager and task coordinator</li>
                <li>Automated team communication</li>
                <li>Process optimization and monitoring</li>
                <li>Integration with all business systems</li>
              </ul>
              <p style={{ fontSize: '1.1rem', color: '#8b6f47', fontWeight: '500', marginTop: '1rem' }}>Investment: Custom pricing based on scope</p>
              <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for Operations Automation AI. Can we discuss my specific needs?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">APPLY FOR THIS SYSTEM</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              alt="Operations automation workflow" 
              loading="lazy"
            />
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'rgba(139, 111, 71, 0.1)', borderRadius: '15px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3d2914' }}>Why Custom Pricing?</h3>
          <p style={{ fontSize: '1.1rem', color: '#6b5139', marginBottom: '2rem' }}>Every elite founder has unique needs. We build systems specifically for your business, not one-size-fits-all solutions. Investment typically ranges from $15,000-$50,000 depending on complexity and scope.</p>
          <a href="https://wa.me/264812568924?text=Hi! I'd like to discuss custom AI systems for my business. Can we schedule a consultation?" className="btn-primary" target="_blank" rel="noopener noreferrer">🚀 APPLY FOR CONSULTATION</a>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div style={{ paddingTop: '6rem' }}>
      <section className="final-cta">
        <div className="cta-content">
          <h2>Private Applications Only</h2>
          <p>We don't take on every client. Our application process ensures we're the perfect fit for your business transformation needs.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', margin: '4rem 0', textAlign: 'left' }}>
            <div style={{ background: 'rgba(247, 243, 237, 0.8)', padding: '2.5rem', borderRadius: '15px' }}>
              <h3 style={{ color: '#3d2914', marginBottom: '1.5rem' }}>📱 WhatsApp Application</h3>
              <p style={{ color: '#6b5139', marginBottom: '2rem' }}>Send us a message with your business details and we'll schedule a private consultation within 24 hours.</p>
              <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems. Here's my business info: [Tell us about your business, current challenges, and goals]" className="btn-primary" target="_blank" rel="noopener noreferrer">Apply via WhatsApp</a>
            </div>
            
            <div style={{ background: 'rgba(247, 243, 237, 0.8)', padding: '2.5rem', borderRadius: '15px' }}>
              <h3 style={{ color: '#3d2914', marginBottom: '1.5rem' }}>📸 Instagram DM</h3>
              <p style={{ color: '#6b5139', marginBottom: '2rem' }}>Follow us and send a DM with your application. We review all messages personally.</p>
              <a href="https://www.instagram.com/twenty_sum" className="btn-secondary" target="_blank" rel="noopener noreferrer">Apply via Instagram</a>
            </div>
          </div>

          <div style={{ background: 'rgba(139, 111, 71, 0.1)', padding: '3rem', borderRadius: '15px', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#3d2914' }}>🔍 Free Business AI Audit</h3>
            <p style={{ fontSize: '1.1rem', color: '#6b5139', marginBottom: '2rem' }}>Before we build your AI system, we'll audit your current processes and identify the biggest opportunities for automation. This audit alone is worth $5,000 - but it's free for qualified applicants.</p>
            
            <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
              <h4 style={{ color: '#3d2914', marginBottom: '1rem' }}>What you'll get in your audit:</h4>
              <ul style={{ color: '#6b5139', lineHeight: '1.8' }}>
                <li>✅ Complete analysis of your current workflows</li>
                <li>✅ Identification of automation opportunities</li>
                <li>✅ ROI projections for AI implementation</li>
                <li>✅ Custom AI system recommendations</li>
                <li>✅ 30-minute strategy session</li>
              </ul>
            </div>
            
            <a href="https://wa.me/264812568924?text=Hi! I'd like to request a free Business AI Audit. Here are my business details: [Industry, team size, main challenges]" className="btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: '2rem' }}>🚀 REQUEST FREE AUDIT</a>
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(230, 215, 195, 0.3)', borderRadius: '10px' }}>
            <h4 style={{ color: '#3d2914', marginBottom: '1rem' }}>Application Requirements:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', textAlign: 'left' }}>
              <p style={{ color: '#6b5139' }}>💼 Established business (6+ months)</p>
              <p style={{ color: '#6b5139' }}>📈 Minimum $10K monthly revenue</p>
              <p style={{ color: '#6b5139' }}>⚡ Ready to implement within 30 days</p>
              <p style={{ color: '#6b5139' }}>🎯 Serious about transformation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">TWENTYSUM</div>
        <div className="nav-menu">
          <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#f7f3ed', cursor: 'pointer' }}>Home</button>
          <button onClick={() => setCurrentPage('about')} style={{ background: 'none', border: 'none', color: '#f7f3ed', cursor: 'pointer' }}>About</button>
          <button onClick={() => setCurrentPage('services')} style={{ background: 'none', border: 'none', color: '#f7f3ed', cursor: 'pointer' }}>AI Systems</button>
          <button onClick={() => setCurrentPage('contact')} style={{ background: 'none', border: 'none', color: '#f7f3ed', cursor: 'pointer' }}>Apply</button>
          <a href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems." className="btn-cta" target="_blank" rel="noopener noreferrer">🚀 Apply Now</a>
        </div>
      </nav>

      {renderPage()}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>TWENTYSUM</h3>
            <p>Private AI Systems for Elite Founders</p>
          </div>
          <div className="footer-links">
            <a href="https://wa.me/264812568924" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp: +264 81 256 8924
            </a>
            <a href="https://www.instagram.com/twenty_sum" target="_blank" rel="noopener noreferrer">
              📸 @twenty_sum
            </a>
            <a href="mailto:ajarlandings@gmail.com">
              ✉️ ajarlandings@gmail.com
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Twentysum. Elite AI systems for elite founders.</p>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;