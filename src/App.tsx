import React from 'react';
import { useState } from 'react';
import './App.css';
import ShareButton from './components/ShareButton';
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
            <h1>Professional Virtual Assistant Services for Busy Entrepreneurs</h1>
            <p className="hero-slogan">"Buy back your time by Dan Martel"</p>
            <p>Save 20+ hours weekly with professional virtual assistant services. Get admin support, web design, outreach campaigns, and AI automation at startup-friendly rates.</p>
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
          <h2 className="script-heading">Are you drowning in daily tasks?</h2>
          <h3>Stop Wasting Time on Admin Work That Doesn't Grow Your Business</h3>
          <p>As an entrepreneur, you're spending 60% of your time on administrative tasks instead of focusing on revenue-generating activities...</p>
          <p>Email management, calendar scheduling, social media posting, data entry - these essential but time-consuming tasks are keeping you from scaling your business.</p>
          <p className="bold">If you're ready to delegate and scale, I'm here to help!</p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="value-content">
          <h2>How Virtual Assistant Services Transform Your Business</h2>
          <div className="value-grid">
            <div className="value-item">
              <h3>🎯 What You Get</h3>
              <p>Professional admin support, custom web design, targeted outreach campaigns, and AI automation - all handled by an experienced virtual assistant</p>
            </div>
            <div className="value-item">
              <h3>💰 Why Choose Virtual Assistant Services</h3>
              <p>Get professional support at 70% less cost than hiring full-time staff. No benefits, no office space, no management overhead - just results</p>
            </div>
            <div className="value-item">
              <h3>🚀 Your Business Transformation</h3>
              <p>Reclaim 20+ hours weekly to focus on strategy, sales, and growth. Scale faster with reliable virtual assistant support that adapts to your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-header">
          <h2>Virtual Assistant Services</h2>
        </div>
        
        <div className="service-item">
          <div className="service-content">
            <div className="service-number">1</div>
            <div className="service-text">
              <h3>Administrative<br />Virtual Assistant</h3>
              <p>Complete admin support including email management, calendar scheduling, customer service, and bookkeeping. Free up your time for high-value activities.</p>
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
              <h3>Web Design &<br />Development Services</h3>
              <p>Professional websites that convert visitors into customers. Custom responsive design, SEO optimization, and ongoing website management to grow your online presence.</p>
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
              <h3>Lead Generation &<br />Outreach Campaigns</h3>
              <p>Targeted outreach campaigns that generate qualified leads. Cold email sequences, LinkedIn outreach, and follow-up automation to fill your sales pipeline consistently.</p>
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
              <h3>AI Automation &<br />Integration Services</h3>
              <p>Streamline operations with AI-powered automation. Custom chatbots, workflow automation, and AI tool integration to reduce manual work and increase efficiency.</p>
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
          <h2>Virtual Assistant Service Packages</h2>
          <p className="packages-subtitle">Choose the perfect virtual assistant package for your business needs and budget</p>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">1</div>
            <div className="package-text">
              <h3>Essential Virtual Assistant Package</h3>
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
              <h3>Professional Web Design Package</h3>
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
              <h3>Lead Generation Campaign Package</h3>
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
              <h3>AI Automation Setup Package</h3>
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
          <h2 className="script-heading">Why Choose TwentySum Virtual Assistant Services?</h2>
          <p>Professional virtual assistant support designed specifically for growing businesses and entrepreneurs.</p>
          
          <div className="benefits">
            <div className="benefit">
              <h3>Startup-Friendly Virtual Assistant Rates</h3>
              <p>Get professional virtual assistant services at rates 70% lower than hiring full-time staff. Premium support without the premium price tag.</p>
            </div>
            <div className="benefit">
              <h3>Tech-Savvy Virtual Assistant</h3>
              <p>Beyond traditional VA tasks, get modern solutions like web design, AI integrations, and automation to keep your business competitive.</p>
            </div>
            <div className="benefit">
              <h3>Dedicated Virtual Assistant Partnership</h3>
              <p>Get personalized attention from a virtual assistant who's invested in your success. Reliable support that grows with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Ready to <span className="script">hire your virtual assistant?</span></h2>
          <p>Book a free 15-minute consultation to discuss your virtual assistant needs. No commitment, just clarity on how we can help you scale.</p>
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
            <p>Professional Virtual Assistant Services - "Buy back your time by Dan Martel"</p>
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
            <p>© 2025 TwentySum Virtual Assistant Services. Professional support for entrepreneurs and small businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;