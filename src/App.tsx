import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-brand">AUVRA</div>
        <div className="nav-menu">
          <a href="tel:+1234567890">📞 Call Now</a>
          <a href="mailto:mskondjara@gmail.com">✉️ Email</a>
          <button className="btn-secondary">📅 Book Consultation</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>SMART SUPPORT FOR<br />MODERN BUSINESSES</h1>
            <p>Executive-level assistance with a modern edge — from marketing support and content management to email systems and client coordination.</p>
            <button className="btn-primary">📅 BOOK A CONSULTATION</button>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional woman working on laptop" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="script-heading">let me guess</h2>
          <h3>YOU'RE READY TO ELEVATE<br />YOUR BUSINESS OPERATIONS</h3>
          <p>But chances are there's something stopping you from getting there...</p>
          <p>Or you are struggling with managing communications, coordinating projects, or streamlining your email and client systems while trying to focus on growth.</p>
          <p className="bold">If you are ready for a solution, we can help!</p>
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
              <h3>MARKETING &<br />ADMINISTRATIVE SUPPORT</h3>
              <p>Organized scheduling, inbox management, and professional client communication that keeps your business running seamlessly. From coordinating meetings to managing correspondence, we ensure nothing falls through the cracks.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional workspace" />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">2</div>
            <div className="service-text">
              <h3>CONTENT & OUTREACH<br />MANAGEMENT</h3>
              <p>Email campaigns, branded communications, and client outreach strategies designed to strengthen visibility and engagement. We craft compelling content that resonates with your audience.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Content creation workspace" />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages">
        <div className="packages-header">
          <h2>PACKAGES</h2>
        </div>

        <div className="package-item">
          <div className="package-content">
            <div className="package-number">1</div>
            <div className="package-text">
              <h3>CRM & Data Systems</h3>
              <div className="package-price">Starting at $800/mo</div>
              <ul>
                <li>Efficient management of client information, pipeline tracking, and streamlined follow-up processes</li>
                <li>Database organization and maintenance to ensure accurate client records</li>
                <li>Automated workflow setup for consistent client communication and follow-ups</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman with phone" />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">2</div>
            <div className="package-text">
              <h3>Digital & Technical Support</h3>
              <div className="package-price">$650/campaign</div>
              <ul>
                <li>Workflow automation, website assistance, and email tech support</li>
                <li>System integration and optimization to ensure your tools work smarter, not harder</li>
                <li>Technical troubleshooting and ongoing digital system maintenance</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mobile phone and workspace" />
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-work">
        <div className="why-work-content">
          <h2 className="script-heading">Your time is best spent on what you do best</h2>
          <p>Let us take care of your business operations and support needs.</p>
          
          <div className="benefits">
            <div className="benefit">
              <h3>Professional Excellence</h3>
              <p>Detail-oriented support tailored specifically for busy entrepreneurs who demand quality and precision in every interaction.</p>
            </div>
            <div className="benefit">
              <h3>Unique Expertise</h3>
              <p>A distinctive blend of administration, marketing, and digital systems knowledge that sets us apart from traditional support services.</p>
            </div>
            <div className="benefit">
              <h3>Elegant Solutions</h3>
              <p>Reliable, sophisticated approaches designed to save time and elevate your brand while maintaining the highest standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Let's simplify your <span className="script">workload</span></h2>
          <p>Partner with Auvra.tech for smart, executive-level business support.</p>
          <div className="cta-buttons">
            <button className="btn-primary">📅 BOOK A CONSULTATION</button>
            <button className="btn-outline">✉️ CONTACT ME</button>
          </div>
          <p className="cta-subtext">Ready to transform how your business operates? Let's discuss your needs.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AUVRA.TECH</h3>
            <p>Smart Support for Modern Businesses</p>
          </div>
          <div className="footer-links">
            <a href="https://www.auvra.tech" target="_blank" rel="noopener noreferrer">
              🌐 www.auvra.tech
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn Profile
            </a>
            <a href="mailto:mskondjara@gmail.com">
              ✉️ mskondjara@gmail.com
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Auvra.tech. Elevating business operations with intelligent support.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;