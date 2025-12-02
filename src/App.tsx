import React, { useState, useEffect } from 'react';
import { Camera, Play, Palette, Share2, ArrowRight, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">TWENTYSUM</div>
          <div className="nav-menu">
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">ELITE BRAND DEVELOPMENT</div>
            <h1>QUIET POWER.<br />AUTOMATED WEALTH.</h1>
            <p className="hero-subtitle">The elite don't work harder — they systemise, automate, and scale quietly.</p>
            <p className="hero-description">Welcome to Twentysum — your private partner in luxury AI automation, designed for founders, investors & high-performers who refuse to fall behind.</p>
            <div className="hero-buttons">
              <button className="btn-primary">PRIVATE INTELLIGENCE GUIDE — $149</button>
              <button className="btn-secondary">REQUEST PRIVATE AUDIT</button>
            </div>
            <p className="hero-note">📎 Strictly limited access | Discreet automation | Premium service</p>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" alt="Elite professional workspace" />
          </div>
        </div>
      </section>

      {/* Sub-Hero */}
      <section className="sub-hero">
        <div className="container">
          <div className="sub-hero-content">
            <h2>The wealthy fear one thing more than loss:<br />being left behind.</h2>
            <p className="sub-hero-main">AI isn't coming — it's here.</p>
            <div className="fear-grid">
              <div className="fear-item">
                <h3>Those who hesitate lose:</h3>
                <ul>
                  <li>Time</li>
                  <li>Opportunity</li>
                  <li>Status</li>
                  <li>Market dominance</li>
                </ul>
              </div>
              <div className="fear-conclusion">
                <p>Early adopters don't compete.<br />They own the room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="what-you-get">
        <div className="container">
          <h2>Private AI Intelligence + Execution Support</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>Elite automation strategy</h3>
            </div>
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>High-touch human support</h3>
            </div>
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>Systems built privately — no noise, no exposure</h3>
            </div>
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>AI appointment setting</h3>
            </div>
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>High-end lead automation</h3>
            </div>
            <div className="feature">
              <div className="feature-icon">✔</div>
              <h3>Personalised workflow design for elite lifestyles</h3>
            </div>
          </div>
          <p className="section-note">This is not mass-market automation.<br />This is precision execution for people who value discretion, speed & results.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <h2>OUR SERVICES</h2>
            <p>Luxury AI systems that deliver results</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="AI Strategy" />
              </div>
              <div className="service-content">
                <h3>AI STRATEGY</h3>
                <p>Custom automation blueprints for elite founders</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Implementation" />
              </div>
              <div className="service-content">
                <h3>IMPLEMENTATION</h3>
                <p>Done-for-you AI systems and workflows</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Optimization" />
              </div>
              <div className="service-content">
                <h3>OPTIMIZATION</h3>
                <p>Continuous improvement and scaling</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Support" />
              </div>
              <div className="service-content">
                <h3>ELITE SUPPORT</h3>
                <p>White-glove service for discerning clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offers */}
      <section className="core-offers">
        <div className="container">
          <h2>CORE OFFERS</h2>
          <div className="offers-grid">
            <div className="offer-card premium">
              <div className="offer-badge">🥇</div>
              <h3>The Private AI Wealth Guide</h3>
              <div className="price">$149</div>
              <p className="offer-description">Insider playbook for high-end client acquisition & automation.</p>
              <div className="offer-includes">
                <h4>Includes:</h4>
                <ul>
                  <li>AI luxury positioning systems</li>
                  <li>Quiet lead-gen automation</li>
                  <li>High-ticket appointment systems</li>
                  <li>Wealth-preservation automation mindset</li>
                  <li>Execution checklist</li>
                  <li>Discreet tools</li>
                </ul>
              </div>
              <p className="offer-note">Purchase to unlock consulting access.<br />Only buyers may request a call.</p>
              <button className="btn-offer">PURCHASE GUIDE</button>
            </div>

            <div className="offer-card elite">
              <div className="offer-badge">💼</div>
              <h3>AI Concierge Implementation</h3>
              <div className="price">$5,500 <span className="value">Value: $12,000+</span></div>
              <p className="offer-description">For founders & entrepreneurs who want it done for them.</p>
              <div className="offer-includes">
                <ul>
                  <li>Elite DM + appointment automation</li>
                  <li>High-end CRM workflow setup</li>
                  <li>Automated cold outreach flows</li>
                  <li>Luxury brand messaging AI-trained to your voice</li>
                  <li>Confidential build + aftercare support</li>
                </ul>
              </div>
              <button className="btn-offer">APPLY PRIVATELY</button>
            </div>

            <div className="offer-card audit">
              <div className="offer-badge">🤝</div>
              <h3>Private AI Audit</h3>
              <div className="price">$250</div>
              <p className="offer-description">30-minute confidential strategy call<br />Credited toward system if accepted</p>
              <p className="offer-note">Not everyone is accepted —<br />we work with clients who value privacy, long-term scale, and excellence.</p>
              <button className="btn-offer">REQUEST AUDIT</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">THE CREATIVE VISION BEHIND THE STUDIO</div>
              <h2>Because you don't chase trends.</h2>
              <p className="about-subtitle">You build unfair advantage quietly while the world screams for attention.</p>
              <div className="about-features">
                <div className="about-feature">Private</div>
                <div className="about-feature">Intelligent</div>
                <div className="about-feature">Elegant</div>
                <div className="about-feature">Discreet</div>
                <div className="about-feature">High-yield automation</div>
              </div>
              <p className="about-conclusion">This is luxury performance engineering.</p>
              <button className="btn-about">LEARN MORE</button>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" alt="Elite workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio">
        <div className="container">
          <div className="portfolio-header">
            <h2>PORTFOLIO</h2>
            <p>Elite results for discerning clients</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="AI Strategy" />
              <div className="portfolio-overlay">
                <h3>AI Strategy</h3>
                <p>Custom automation for Fortune 500 CEO</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Implementation" />
              <div className="portfolio-overlay">
                <h3>Implementation</h3>
                <p>$2M+ revenue automation system</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300" alt="Optimization" />
              <div className="portfolio-overlay">
                <h3>Optimization</h3>
                <p>300% efficiency increase for tech founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-content">
            <h2>Elite only. Quiet only. Results only.</h2>
            <div className="cta-buttons">
              <button className="btn-cta-primary">BUY THE GUIDE — $149</button>
              <button className="btn-cta-secondary">REQUEST PRIVATE AUDIT — $250</button>
            </div>
            <p className="cta-note">Required before consulting access</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>TWENTYSUM</h3>
              <p>Built for those who move differently.<br />Twentysum — Private AI for the powerful.</p>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <Phone size={16} />
                <span>+264 81 256 8924</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>ajarlandings@gmail.com</span>
              </div>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/twenty_sum" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://wa.me/264812568924" aria-label="WhatsApp"><Phone size={20} /></a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Twentysum. Private AI for the powerful.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;