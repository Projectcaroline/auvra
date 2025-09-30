import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">AUVRA</div>
        <div className="nav-menu">
          <a href="https://wa.me/264812568924" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:ajarlandings@gmail.com">Email</a>
          <a href="https://instagram.com/auvra_tech" target="_blank" rel="noopener noreferrer">Instagram</a>
          <button className="btn-cta">Book Consultation</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>YOUR DEDICATED<br />VIRTUAL ASSISTANT</h1>
            <p>Professional virtual assistant services to streamline your business operations. From administrative tasks to web design and AI integrations - I handle it all so you can focus on growing your business.</p>
            <button className="btn-primary">GET STARTED TODAY</button>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional virtual assistant working on laptop" />
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
              <p>High-paying virtual assistant services across tech, creative, and admin specialties. Professional support that scales with your business needs.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman managing virtual assistant tasks" />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">2</div>
            <div className="service-text">
              <h3>WEB DESIGN &<br />DEVELOPMENT</h3>
              <p>Modern, responsive websites that convert visitors into customers. From landing pages to full business websites, I create professional online presences that reflect your brand perfectly.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman working on web design" />
          </div>
        </div>

        <div className="service-item">
          <div className="service-content">
            <div className="service-number">3</div>
            <div className="service-text">
              <h3>OUTREACH &<br />LEAD GENERATION</h3>
              <p>Strategic outreach campaigns to connect with potential clients and partners. I handle cold emails, LinkedIn outreach, and follow-up sequences to generate quality leads for your business.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman conducting outreach" />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">4</div>
            <div className="service-text">
              <h3>AI INTEGRATIONS &<br />AUTOMATION</h3>
              <p>Streamline your workflows with AI-powered solutions and automation tools. From chatbots to automated email sequences, I help you leverage technology to work smarter, not harder.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="AI integration and automation setup" />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages">
        <div className="packages-header">
          <h2>PACKAGES</h2>
          <p className="packages-subtitle">Competitive startup rates - Quality service without breaking the bank</p>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">1</div>
            <div className="package-text">
              <h3>Virtual Assistant Essentials</h3>
              <div className="package-price">$250/mo</div>
              <ul>
                <li>Email management and organization</li>
                <li>Calendar scheduling and appointment setting</li>
                <li>Basic customer service and chat support</li>
                <li>Data entry and document management</li>
                <li>Up to 20 hours of support per month</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Virtual assistant working professionally" />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">2</div>
            <div className="package-text">
              <h3>Web Design Package</h3>
              <div className="package-price">$400/project</div>
              <ul>
                <li>Custom responsive website design</li>
                <li>Up to 5 pages with professional content</li>
                <li>Mobile optimization and fast loading</li>
                <li>Basic SEO setup and Google Analytics</li>
                <li>2 rounds of revisions included</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Web design project in progress" />
          </div>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">3</div>
            <div className="package-text">
              <h3>Outreach Campaign</h3>
              <div className="package-price">$200/campaign</div>
              <ul>
                <li>Target audience research and list building</li>
                <li>Personalized outreach message creation</li>
                <li>Email and LinkedIn campaign management</li>
                <li>Follow-up sequence automation</li>
                <li>Weekly progress reports and analytics</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Outreach campaign management" />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">4</div>
            <div className="package-text">
              <h3>AI Integration Setup</h3>
              <div className="package-price">$300/setup</div>
              <ul>
                <li>Custom AI chatbot implementation</li>
                <li>Workflow automation setup</li>
                <li>Integration with existing tools</li>
                <li>Training and documentation provided</li>
                <li>30 days of support and optimization</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="AI integration and automation" />
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
          <h2>Ready to <span className="script">delegate and scale?</span></h2>
          <p>Let's discuss how I can support your business growth as your dedicated virtual assistant.</p>
          <div className="cta-buttons">
            <button className="btn-primary">BOOK A CONSULTATION</button>
            <a href="https://wa.me/264812568924" className="btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Me</a>
          </div>
          <p className="cta-subtext">Free consultation to discuss your needs and how I can help streamline your operations.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AUVRA.TECH</h3>
            <p>Your Dedicated Virtual Assistant</p>
          </div>
          <div className="footer-links">
            <a href="https://wa.me/264812568924" target="_blank" rel="noopener noreferrer">
              📱 WhatsApp: +264 81 256 8924
            </a>
            <a href="https://instagram.com/auvra_tech" target="_blank" rel="noopener noreferrer">
              📸 @auvra_tech
            </a>
            <a href="mailto:ajarlandings@gmail.com">
              ✉️ ajarlandings@gmail.com
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Auvra.tech. Professional virtual assistant services to streamline your business operations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;