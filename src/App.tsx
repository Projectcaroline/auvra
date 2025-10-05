import React from 'react';
import { useState } from 'react';
import './App.css';
import ServicePages from './components/ServicePages';
import LegalPages from './components/LegalPages';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'tech' | 'creative' | 'admin' | 'privacy' | 'terms' | 'refund'>('home');

  if (currentPage === 'tech' || currentPage === 'creative' || currentPage === 'admin') {
    return <ServicePages onBack={() => setCurrentPage('home')} serviceType={currentPage} />;
  }
  
  if (currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'refund') {
    return <LegalPages onBack={() => setCurrentPage('home')} pageType={currentPage} />;
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">TWENTYSUM</div>
        <div className="nav-menu">
          <a href="https://wa.me/264812568924" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:ajarlandings@gmail.com">Email</a>
          <a href="https://www.instagram.com/twenty_sum?utm_source=qr&igsh=MXQyaGw4cmpuODB2eQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://calendly.com/mskondjara/ai-booking-demo" className="btn-cta" target="_blank" rel="noopener noreferrer">📅 Book Free Call</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>YOUR DEDICATED<br />VIRTUAL ASSISTANT</h1>
            <p className="hero-slogan">"Buy back your time by Dan Martel"</p>
            <p>Virtual assistant services across tech, creative, and admin specialties. Professional support that scales with your business needs so you can focus on what matters most.</p>
            <div className="hero-buttons">
              <a href="https://calendly.com/mskondjara/ai-booking-demo" className="btn-primary" target="_blank" rel="noopener noreferrer">📅 BOOK FREE CONSULTATION</a>
              <a href="https://wa.me/264812568924?text=Hi! I'm interested in your virtual assistant services. Can we discuss my needs?" className="btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Me Now</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" 
              srcSet="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=300 400w,
                      https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600 800w,
                      https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900 1200w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Professional woman working as virtual assistant" 
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="script-heading">let me guess</h2>
          <h3>YOU'RE OVERWHELMED WITH<br />DAILY BUSINESS TASKS</h3>
          <p>You're spending too much time on administrative work instead of focusing on what you do best...</p>
          <p>Or you're struggling with managing emails, scheduling, social media, and keeping up with technology while trying to grow your business.</p>
          <p className="bold">If you're ready to delegate and scale, I'm here to help!</p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="value-content">
          <h2>Save 20+ Hours Weekly with Professional Virtual Assistant Services</h2>
          <div className="value-grid">
            <div className="value-item">
              <h3>🎯 What I Do</h3>
              <p>Handle your admin tasks, web design, outreach campaigns, and AI automation so you can focus on growing your business</p>
            </div>
            <div className="value-item">
              <h3>💰 Why It Matters</h3>
              <p>Startup-friendly rates while you get back your most valuable asset - time to work ON your business, not IN it</p>
            </div>
            <div className="value-item">
              <h3>🚀 The Result</h3>
              <p>Scale faster with professional support that grows with you, without the overhead of hiring full-time staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h2>SERVICES</h2>
        </div>
        
        <div className="service-item">
          <div className="service-content">
            <div className="service-number">1</div>
            <div className="service-text">
              <h3>VIRTUAL ASSISTANT<br />SERVICES</h3>
              <p>Virtual assistant services across tech, creative, and admin specialties. Professional support that scales with your business needs.</p>
              <button onClick={() => setCurrentPage('admin')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w,
                      https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900&h=600 900w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Professional woman managing virtual assistant tasks" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">2</div>
            <div className="service-text">
              <h3>WEB DESIGN &<br />DEVELOPMENT</h3>
              <p>Modern, responsive websites that convert visitors into customers. From landing pages to full business websites, I create professional online presences that reflect your brand perfectly.</p>
              <button onClick={() => setCurrentPage('tech')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w,
                      https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=900&h=600 900w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Professional woman working on web design" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="service-item">
          <div className="service-content">
            <div className="service-number">3</div>
            <div className="service-text">
              <h3>OUTREACH &<br />LEAD GENERATION</h3>
              <p>Strategic outreach campaigns to connect with potential clients and partners. I handle cold emails, LinkedIn outreach, and follow-up sequences to generate quality leads for your business.</p>
              <button onClick={() => setCurrentPage('creative')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w,
                      https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=900&h=600 900w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Professional woman conducting outreach" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">4</div>
            <div className="service-text">
              <h3>AI INTEGRATIONS &<br />AUTOMATION</h3>
              <p>Streamline your workflows with AI-powered solutions and automation tools. From chatbots to automated email sequences, I help you leverage technology to work smarter, not harder.</p>
              <button onClick={() => setCurrentPage('tech')} className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img 
              src="https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w,
                      https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=900&h=600 900w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="AI integration and automation setup" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages">
        <div className="packages-header">
          <h2>PACKAGES</h2>
          <p className="packages-subtitle">Flexible packages tailored to your business needs</p>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">1</div>
            <div className="package-text">
              <h3>Virtual Assistant Essentials</h3>
              <ul>
                <li>Email management and organization</li>
                <li>Calendar scheduling and appointment setting</li>
                <li>Basic customer service and chat support</li>
                <li>Data entry and document management</li>
                <li>Up to 20 hours of support per month</li>
              </ul>
              <a href="https://wa.me/264812568924?text=Hi! I'm interested in the Virtual Assistant Essentials package. Can we discuss pricing and details?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">GET STARTED</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Virtual assistant working professionally" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">2</div>
            <div className="package-text">
              <h3>Web Design Package</h3>
              <ul>
                <li>Custom responsive website design</li>
                <li>Up to 5 pages with professional content</li>
                <li>Mobile optimization and fast loading</li>
                <li>Basic SEO setup and Google Analytics</li>
                <li>2 rounds of revisions included</li>
              </ul>
              <a href="https://wa.me/264812568924?text=Hi! I'm interested in the Web Design Package. Can we discuss pricing and details?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">GET STARTED</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Web design project in progress" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">3</div>
            <div className="package-text">
              <h3>Outreach Campaign</h3>
              <ul>
                <li>Target audience research and list building</li>
                <li>Personalized outreach message creation</li>
                <li>Email and LinkedIn campaign management</li>
                <li>Follow-up sequence automation</li>
                <li>Weekly progress reports and analytics</li>
              </ul>
              <a href="https://wa.me/264812568924?text=Hi! I'm interested in the Outreach Campaign. Can we discuss pricing and details?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">GET STARTED</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Outreach campaign management" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">4</div>
            <div className="package-text">
              <h3>AI Integration Setup</h3>
              <ul>
                <li>Custom AI chatbot implementation</li>
                <li>Workflow automation setup</li>
                <li>Integration with existing tools</li>
                <li>Training and documentation provided</li>
                <li>30 days of support and optimization</li>
              </ul>
              <a href="https://wa.me/264812568924?text=Hi! I'm interested in the AI Integration Setup. Can we discuss pricing and details?" className="btn-tertiary" target="_blank" rel="noopener noreferrer">GET STARTED</a>
            </div>
          </div>
          <div className="package-image">
            <img 
              src="https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" 
              srcSet="https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=300&h=200 300w,
                      https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400 600w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="AI integration and automation" 
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-work">
        <div className="why-work-content">
          <h2 className="script-heading">Why choose me as your virtual assistant?</h2>
          <p>Quality service at startup-friendly rates while you focus on what matters most.</p>
          
          <div className="benefits">
            <div className="benefit">
              <h3>Affordable Excellence</h3>
              <p>Professional virtual assistant services at competitive startup rates. Get premium support without the premium price tag as I build my portfolio.</p>
            </div>
            <div className="benefit">
              <h3>Tech-Savvy Support</h3>
              <p>Beyond traditional VA tasks, I offer modern solutions like web design, AI integrations, and automation to help your business stay ahead.</p>
            </div>
            <div className="benefit">
              <h3>Dedicated Partnership</h3>
              <p>As a growing VA, I'm invested in your success. You get personalized attention and a partner who truly cares about your business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to <span className="script">get your time back?</span></h2>
          <p>Book a free 15-minute consultation to discuss your needs. No commitment, just clarity on how I can help you scale.</p>
          <div className="cta-buttons">
            <a href="https://calendly.com/mskondjara/ai-booking-demo" className="btn-primary" target="_blank" rel="noopener noreferrer">📅 BOOK FREE CONSULTATION</a>
            <a href="https://wa.me/264812568924" className="btn-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp Me</a>
          </div>
          <p className="cta-subtext">✅ Free consultation ✅ No commitment ✅ Get clarity on your next steps</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>TWENTYSUM</h3>
            <p>"Buy back your time by Dan Martel"</p>
          </div>
          <div className="footer-links">
            <a href="https://wa.me/264812568924" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp: +264 81 256 8924
            </a>
            <a href="https://www.instagram.com/twenty_sum?utm_source=qr&igsh=MXQyaGw4cmpuODB2eQ==" target="_blank" rel="noopener noreferrer">
              📸 @twenty_sum
            </a>
            <a href="mailto:ajarlandings@gmail.com">
              ✉️ ajarlandings@gmail.com
            </a>
          </div>
          <div className="footer-legal">
            <button onClick={() => setCurrentPage('privacy')} className="legal-link">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="legal-link">Terms of Service</button>
            <button onClick={() => setCurrentPage('refund')} className="legal-link">Refund Policy</button>
          </div>
          <div className="footer-bottom">
            <p>© 2025 TwentySum. Virtual assistant services - "Buy back your time by Dan Martel"</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;