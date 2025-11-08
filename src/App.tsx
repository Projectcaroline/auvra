import React, { useState, useEffect } from 'react';
import { Camera, Play, Palette, Share2, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
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
          <div className="nav-brand">TWENTYSUM.CO</div>
          <div className="nav-menu">
            <a href="#about">ABOUT STUDIO</a>
            <a href="#services">SERVICES</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>QUIET POWER.<br />AUTOMATED WEALTH.</h1>
            <p className="hero-subtitle">The elite don't work harder — they systemise, automate, and scale quietly.</p>
            <p className="hero-description">Welcome to Twentysum — your private partner in luxury AI automation, designed for founders, investors & high-performers who refuse to fall behind.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Private Intelligence Guide — $149</button>
              <button className="btn-secondary">Request Private Audit</button>
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
              <button className="btn-offer">Purchase Guide</button>
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
              <button className="btn-offer">Apply Privately</button>
            </div>

            <div className="offer-card audit">
              <div className="offer-badge">🤝</div>
              <h3>Private AI Audit</h3>
              <div className="price">$250</div>
              <p className="offer-description">30-minute confidential strategy call<br />Credited toward system if accepted</p>
              <p className="offer-note">Not everyone is accepted —<br />we work with clients who value privacy, long-term scale, and excellence.</p>
              <button className="btn-offer">Request Audit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Twentysum */}
      <section className="why-work">
        <div className="container">
          <div className="why-content">
            <h2>Because you don't chase trends.</h2>
            <p className="why-subtitle">You build unfair advantage quietly<br />while the world screams for attention.</p>
            <div className="why-features">
              <div className="why-feature">Private</div>
              <div className="why-feature">Intelligent</div>
              <div className="why-feature">Elegant</div>
              <div className="why-feature">Discreet</div>
              <div className="why-feature">High-yield automation</div>
            </div>
            <p className="why-conclusion">This is luxury performance engineering.</p>
          </div>
          <div className="why-image">
            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" alt="Elite workspace" />
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-block">
        <div className="container">
          <div className="cta-content">
            <h2>Elite only. Quiet only. Results only.</h2>
            <div className="cta-buttons">
              <button className="btn-cta-primary">Buy The Guide — $149</button>
              <button className="btn-cta-secondary">Request Private Audit — $250</button>
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
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
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