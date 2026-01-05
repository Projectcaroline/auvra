import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Shield, Zap, Target, MessageCircle, X } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ChatBot = () => {
    const chatSteps = [
      {
        message: "Are you here to learn or to implement?",
        options: [
          { text: "Learn first", next: 1 },
          { text: "Ready to implement", next: 2 }
        ]
      },
      {
        message: "Perfect. The Elite AI Advantage guide is designed for operators who want proven systems without the fluff.",
        options: [
          { text: "Get the guide", action: "guide" },
          { text: "Tell me more", next: 3 }
        ]
      },
      {
        message: "Excellent. Our private services are for serious operators ready to scale. We'll need to qualify the fit first.",
        options: [
          { text: "Request private setup", action: "services" },
          { text: "See the guide first", action: "guide" }
        ]
      },
      {
        message: "The guide covers AI lead qualification, conversation automation, and operational systems. Built from real implementations, not theory.",
        options: [
          { text: "Get the guide", action: "guide" }
        ]
      }
    ];

    const handleChatAction = (action) => {
      if (action === 'guide') {
        document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
        setChatOpen(false);
      } else if (action === 'services') {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        setChatOpen(false);
      }
    };

    const handleOptionClick = (option) => {
      if (option.action) {
        handleChatAction(option.action);
      } else if (option.next !== undefined) {
        setChatStep(option.next);
      }
    };

    return (
      <div className={`chatbot ${chatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <span>Twentysum Assistant</span>
          <button onClick={() => setChatOpen(false)}>
            <X size={16} />
          </button>
        </div>
        <div className="chatbot-content">
          <div className="chat-message">
            {chatSteps[chatStep].message}
          </div>
          <div className="chat-options">
            {chatSteps[chatStep].options.map((option, index) => (
              <button
                key={index}
                className="chat-option"
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">TWENTYSUM</div>
          <div className="nav-menu">
            <a href="#product">Guide</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>AI systems that capture, qualify, and convert — without human bottlenecks.</h1>
            <p className="hero-subtitle">
              We help founders and agencies automate conversations, leads, and operations using intelligent AI systems.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}>
                Get the Elite AI Playbook
              </button>
              <a href="#services" className="link-secondary">View Private Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Product Section */}
      <section className="product-section" id="product">
        <div className="container">
          <div className="section-header">
            <h2>The Elite AI Advantage</h2>
            <p>A confidential guide built for serious operators. Not beginner fluff.</p>
          </div>
          
          <div className="product-grid">
            <div className="product-card">
              <div className="product-header">
                <h3>Core Guide</h3>
                <div className="price">$149</div>
              </div>
              <div className="product-content">
                <p>Essential AI systems framework</p>
                <ul>
                  <li>PDF guide (47 pages)</li>
                  <li>Core automation principles</li>
                  <li>Implementation checklist</li>
                </ul>
                <button className="btn-product">Get Core Guide</button>
              </div>
            </div>

            <div className="product-card featured">
              <div className="product-badge">Most Popular</div>
              <div className="product-header">
                <h3>Elite Bundle</h3>
                <div className="price">$497</div>
              </div>
              <div className="product-content">
                <p>Complete AI automation system</p>
                <ul>
                  <li>Complete PDF guide</li>
                  <li>Ready-to-use templates</li>
                  <li>90-day automation roadmap</li>
                  <li>Implementation worksheets</li>
                </ul>
                <button className="btn-product">Get Elite Bundle</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-header">
                <h3>Private Operator</h3>
                <div className="price">$1,497</div>
              </div>
              <div className="product-content">
                <p>Everything + direct access</p>
                <ul>
                  <li>Everything in Elite Bundle</li>
                  <li>Private strategy call</li>
                  <li>Direct chat access (30 days)</li>
                  <li>Application required</li>
                </ul>
                <button className="btn-product">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="product-details">
            <div className="detail-grid">
              <div className="detail-item">
                <h4>What Problem It Solves</h4>
                <p>Eliminates manual lead qualification, reduces response time from hours to seconds, and scales conversations without hiring.</p>
              </div>
              <div className="detail-item">
                <h4>Who It's For</h4>
                <p>Founders, agency owners, and operators managing 50+ leads monthly who value systems over shortcuts.</p>
              </div>
              <div className="detail-item">
                <h4>Transformation Delivered</h4>
                <p>From reactive manual processes to proactive AI systems that work while you focus on high-value decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Ticket Services */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <h2>Private Services</h2>
            <p>For operators ready to implement at scale.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Target size={32} />
              </div>
              <h3>AI Automation Systems</h3>
              <p>End-to-end automation that handles lead capture through conversion. Built specifically for your operations.</p>
              <div className="service-outcomes">
                <span>• 80% reduction in manual tasks</span>
                <span>• 24/7 lead qualification</span>
                <span>• Seamless CRM integration</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <MessageCircle size={32} />
              </div>
              <h3>AI Agents for Lead Handling</h3>
              <p>Intelligent agents that qualify, nurture, and schedule high-intent prospects automatically.</p>
              <div className="service-outcomes">
                <span>• Instant response to inquiries</span>
                <span>• Qualified appointments only</span>
                <span>• Natural conversation flow</span>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Zap size={32} />
              </div>
              <h3>AI Websites</h3>
              <p>Conversion-optimized websites with built-in AI systems. Powered by modern technology, designed for results.</p>
              <div className="service-outcomes">
                <span>• Integrated lead capture</span>
                <span>• Real-time visitor engagement</span>
                <span>• Performance analytics</span>
              </div>
            </div>
          </div>

          <div className="services-cta">
            <button className="btn-services">Request Private Setup</button>
            <p className="services-note">Applications reviewed within 48 hours</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="proof-section">
        <div className="container">
          <div className="proof-content">
            <h3>Built for operators in real estate, professional services, and agencies</h3>
            <div className="proof-grid">
              <div className="proof-item">
                <h4>Proven Frameworks</h4>
                <p>Systems tested across multiple industries and business models</p>
              </div>
              <div className="proof-item">
                <h4>Real Implementations</h4>
                <p>Not theory — actual automation systems running in live businesses</p>
              </div>
              <div className="proof-item">
                <h4>Operator-Focused</h4>
                <p>Designed by operators who understand the reality of scaling operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>TWENTYSUM</h3>
              <p>AI systems for serious operators.</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="mailto:hello@twentysum.com">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>This is not for everyone — but if you know, you know.</p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <button 
        className="chat-button"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle size={20} />
      </button>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}