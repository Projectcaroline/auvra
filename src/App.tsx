import React, { useState } from 'react';
import { MessageCircle, X, Check, ArrowRight, Users, Zap, Shield } from 'lucide-react';
import './App.css';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState('initial');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Are you here to learn or to implement?' }
  ]);

  const handleChatResponse = (response: string) => {
    setChatMessages(prev => [...prev, { type: 'user', text: response }]);
    
    if (response === 'learn') {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Perfect. The Elite AI Advantage guide is designed for operators ready to understand how AI systems create competitive advantages. Would you like to start with the Core Guide or jump to the Elite Bundle?' 
      }]);
      setChatStep('guide');
    } else {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Excellent. Our private AI automation services are built for serious operators. What\'s your primary bottleneck: lead qualification, conversation handling, or operational workflows?' 
      }]);
      setChatStep('implement');
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>AI systems that capture, qualify, and convert — without human bottlenecks.</h1>
          <p className="hero-subtitle">
            We help founders and agencies automate conversations, leads, and operations using intelligent AI systems.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary">Get the Elite AI Playbook</button>
            <a href="#services" className="btn-secondary">View Private Services</a>
          </div>
        </div>
      </section>

      {/* Digital Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="section-header">
            <h2>The Elite AI Advantage</h2>
            <p>A confidential guide built for serious operators. Not beginner fluff.</p>
          </div>

          <div className="problem-solution">
            <div className="problem">
              <h3>The Problem</h3>
              <p>Most AI automation advice is surface-level. You need systems that actually work at scale, handle edge cases, and integrate with real business operations.</p>
            </div>
            <div className="solution">
              <h3>The Transformation</h3>
              <p>Deploy AI systems that handle 80% of your conversations, qualify leads automatically, and free your team to focus on high-value work.</p>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Core Guide</h3>
              <div className="price">$149</div>
              <p>PDF guide with foundational AI automation frameworks</p>
              <ul>
                <li><Check size={16} /> 47-page implementation guide</li>
                <li><Check size={16} /> Conversation flow templates</li>
                <li><Check size={16} /> ROI calculation framework</li>
              </ul>
              <button className="btn-outline">Get Core Guide</button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Elite Bundle</h3>
              <div className="price">$497</div>
              <p>Complete system with templates and roadmap</p>
              <ul>
                <li><Check size={16} /> Everything in Core Guide</li>
                <li><Check size={16} /> 12 automation templates</li>
                <li><Check size={16} /> 90-day implementation roadmap</li>
                <li><Check size={16} /> Private operator community</li>
              </ul>
              <button className="btn-primary">Get Elite Bundle</button>
            </div>

            <div className="pricing-card">
              <h3>Private Operator</h3>
              <div className="price">$1,497</div>
              <p>Everything above plus direct access</p>
              <ul>
                <li><Check size={16} /> Everything in Elite Bundle</li>
                <li><Check size={16} /> Private 1:1 strategy call</li>
                <li><Check size={16} /> Direct chatbot access</li>
                <li><Check size={16} /> Application required</li>
              </ul>
              <button className="btn-outline">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* High-Ticket Services */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Private AI Services</h2>
            <p>Custom automation systems for operators who need results, not experiments.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <Zap className="service-icon" />
              <h3>AI Automation Systems</h3>
              <p>End-to-end automation that handles lead capture, qualification, and nurturing without human intervention.</p>
              <div className="service-outcome">Outcome: 3-5x lead conversion with 80% less manual work</div>
            </div>

            <div className="service-card">
              <Users className="service-icon" />
              <h3>AI Agents for Lead Handling</h3>
              <p>Intelligent agents that engage prospects, answer questions, and book qualified meetings automatically.</p>
              <div className="service-outcome">Outcome: 24/7 lead engagement with human-level conversations</div>
            </div>

            <div className="service-card">
              <Shield className="service-icon" />
              <h3>AI Websites (Bolt-powered)</h3>
              <p>High-converting websites with integrated AI systems that qualify visitors and drive conversions.</p>
              <div className="service-outcome">Outcome: Websites that sell while you sleep</div>
            </div>
          </div>

          <div className="services-cta">
            <button className="btn-primary">Request Private Setup</button>
            <p className="services-note">Limited availability. Serious inquiries only.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <h2>Built for operators in real estate, services, and agencies</h2>
          <div className="proof-grid">
            <div className="proof-item">
              <h3>Conversation Framework</h3>
              <p>Battle-tested across 50+ industries</p>
            </div>
            <div className="proof-item">
              <h3>Implementation Roadmap</h3>
              <p>90-day system deployment process</p>
            </div>
            <div className="proof-item">
              <h3>ROI Tracking</h3>
              <p>Measure automation impact on revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Twentysum</h3>
              <p>AI systems for serious operators</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>This is not for everyone — but if you know, you know.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        {isChatOpen ? (
          <div className="chat-window">
            <div className="chat-header">
              <span>Twentysum AI</span>
              <button onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="chat-messages">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            {chatStep === 'initial' && (
              <div className="chat-options">
                <button onClick={() => handleChatResponse('learn')}>Learn</button>
                <button onClick={() => handleChatResponse('implement')}>Implement</button>
              </div>
            )}
            {chatStep === 'guide' && (
              <div className="chat-options">
                <button onClick={() => handleChatResponse('core')}>Core Guide</button>
                <button onClick={() => handleChatResponse('elite')}>Elite Bundle</button>
              </div>
            )}
            {chatStep === 'implement' && (
              <div className="chat-options">
                <button onClick={() => handleChatResponse('leads')}>Lead Qualification</button>
                <button onClick={() => handleChatResponse('conversations')}>Conversations</button>
                <button onClick={() => handleChatResponse('operations')}>Operations</button>
              </div>
            )}
          </div>
        ) : (
          <button className="chat-trigger" onClick={() => setIsChatOpen(true)}>
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;