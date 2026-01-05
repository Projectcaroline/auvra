import React, { useState, useEffect } from 'react';
import { Camera, Play, Palette, Share2, ArrowRight, Instagram, Phone, Mail, MapPin, User, Award, Target, Shield, Zap, Crown } from 'lucide-react';
import './App.css';

export default function App() {
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
            <a href="#offers">OFFERS</a>
            <a href="#about">ABOUT</a>
            <a href="#audit">AUDIT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">PRIVATE AI FOR THE POWERFUL</div>
            <h1>QUIET POWER.<br />AUTOMATED WEALTH.</h1>
            <p className="hero-description">The elite don't work harder — they systemise, automate, and scale quietly.</p>
            <p className="hero-description">Welcome to Twentysum — your private partner in luxury AI automation, designed for founders, investors & high-performers who refuse to fall behind.</p>
            <div className="hero-offer">
              <h3>Private Intelligence Guide — $149</h3>
              <p>The AI systems the wealthy use to scale quietly.</p>
              <p className="hero-features">📎 Strictly limited access | Discreet automation | Premium service</p>
            </div>
            <div className="hero-buttons">
              <button className="btn-primary">BUY THE PRIVATE GUIDE</button>
              <button className="btn-secondary">REQUEST PRIVATE AUDIT</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=500" alt="Elite AI automation workspace" />
          </div>
        </div>
      </section>

      {/* Sub-Hero Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">THE REALITY CHECK</div>
              <h2>The wealthy fear one thing<br />more than loss:<br />being left behind.</h2>
              <p><strong>AI isn't coming — it's here.</strong></p>
              <p>Those who hesitate lose:</p>
              <ul className="loss-list">
                <li>Time</li>
                <li>Opportunity</li>
                <li>Status</li>
                <li>Market dominance</li>
              </ul>
              <p><strong>Early adopters don't compete. They own the room.</strong></p>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" alt="Elite AI automation" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-image">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" alt="Private AI Intelligence" />
            </div>
            <div className="vision-text">
              <div className="vision-badge">WHAT YOU GET</div>
              <h2>PRIVATE AI INTELLIGENCE<br />+ EXECUTION SUPPORT</h2>
              <div className="features-list">
                <p>✔ Elite automation strategy</p>
                <p>✔ High-touch human support</p>
                <p>✔ Systems built privately — no noise, no exposure</p>
                <p>✔ AI appointment setting</p>
                <p>✔ High-end lead automation</p>
                <p>✔ Personalised workflow design for elite lifestyles</p>
              </div>
              <p><strong>This is not mass-market automation.</strong></p>
              <p>This is precision execution for people who value discretion, speed & results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offers Section */}
      <section className="services-section" id="offers">
        <div className="container">
          <div className="services-header">
            <div className="services-badge">CORE OFFERS</div>
            <h2>PRIVATE AI INTELLIGENCE + EXECUTION SUPPORT</h2>
          </div>
          <div className="services-grid">
            <div className="service-card large">
              <div className="service-content">
                <div className="service-number">🥇</div>
                <h3>THE PRIVATE AI WEALTH GUIDE</h3>
                <div className="price">$149</div>
                <p>Insider playbook for high-end client acquisition & automation.</p>
                <div className="includes">
                  <p>Includes:</p>
                  <ul>
                    <li>AI luxury positioning systems</li>
                    <li>Quiet lead-gen automation</li>
                    <li>High-ticket appointment systems</li>
                    <li>Wealth-preservation automation mindset</li>
                    <li>Execution checklist</li>
                    <li>Discreet tools</li>
                  </ul>
                  <p><strong>Purchase to unlock consulting access. Only buyers may request a call.</strong></p>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">💼</div>
                <h3>AI CONCIERGE IMPLEMENTATION</h3>
                <div className="price">$5,500</div>
                <div className="value">Value: $12,000+</div>
                <p>For founders & entrepreneurs who want it done for them.</p>
                <ul>
                  <li>Elite DM + appointment automation</li>
                  <li>High-end CRM workflow setup</li>
                  <li>Automated cold outreach flows</li>
                  <li>Luxury brand messaging AI-trained to your voice</li>
                  <li>Confidential build + aftercare support</li>
                </ul>
                <p><strong>Apply privately</strong></p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">🤝</div>
                <h3>PRIVATE AI AUDIT</h3>
                <div className="price">$250</div>
                <p>30-minute confidential strategy call</p>
                <p>Credited toward system if accepted</p>
                <p><strong>Not everyone is accepted — we work with clients who value privacy, long-term scale, and excellence.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Twentysum Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>WHY WORK WITH TWENTYSUM</h2>
            <p>Because you don't chase trends.</p>
            <p>You build unfair advantage quietly while the world screams for attention.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Shield size={40} />
              </div>
              <h4>Private</h4>
              <p>Discreet automation systems built away from public scrutiny. Your competitive advantage stays hidden.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Zap size={40} />
              </div>
              <h4>Intelligent</h4>
              <p>AI systems designed for sophisticated operations. Not basic automation — strategic intelligence.</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Crown size={40} />
              </div>
              <h4>Elite</h4>
              <p>Luxury performance engineering for those who demand excellence in every detail.</p>
            </div>
          </div>
          <div className="luxury-statement">
            <h3>This is luxury performance engineering.</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>ELITE ONLY. QUIET ONLY.<br />RESULTS ONLY.</h2>
            <div className="cta-buttons">
              <button className="btn-cta">BUY THE GUIDE — $149</button>
              <p className="cta-note">Required before consulting access</p>
              <button className="btn-cta-secondary">REQUEST PRIVATE AUDIT — $250</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>BUILT FOR THOSE WHO MOVE DIFFERENTLY</h3>
              <div className="footer-badge">TWENTYSUM</div>
              <p>Private AI for the powerful.</p>
              <p>Quiet power. Automated wealth. Discreet automation for elite founders, investors & high-performers who refuse to fall behind.</p>
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
            </div>
            <div className="footer-right">
              <div className="footer-services">
                <h4>PRIVATE SERVICES</h4>
                <ul>
                  <li>Private AI Wealth Guide — $149</li>
                  <li>AI Concierge Implementation — $5,500</li>
                  <li>Private AI Audit — $250</li>
                  <li>Elite Automation Systems</li>
                </ul>
              </div>
              <div className="footer-social">
                <a href="https://www.instagram.com/twenty_sum" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://wa.me/264812568924" aria-label="WhatsApp"><Phone size={20} /></a>
              </div>
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