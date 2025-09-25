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
            <h1>SMART SUPPORT FOR<br />MODERN BUSINESSES</h1>
            <p>Executive-level business support blending traditional assistant skills with modern digital expertise. Marketing, CRM, content management, and digital systems support.</p>
            <button className="btn-primary">BOOK A CONSULTATION</button>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Professional woman in black working on laptop" />
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
              <h3>INSTAGRAM<br />MANAGEMENT</h3>
              <p>Strategic content creation, engagement management, and growth optimization for your Instagram presence. We craft compelling posts that resonate with your audience and drive meaningful interactions.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman in black with laptop and coffee" />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-content">
            <div className="service-number">2</div>
            <div className="service-text">
              <h3>FACEBOOK<br />ADVERTISING</h3>
              <p>Targeted ad campaigns designed to reach your ideal customers and drive conversions. From audience research to campaign optimization, we handle every aspect of your Facebook marketing strategy.</p>
              <button className="btn-secondary">LEARN MORE</button>
            </div>
          </div>
          <div className="service-image">
            <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman in black using mobile phone" />
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
              <h3>Instagram Management</h3>
              <div className="package-price">$400/mo</div>
              <ul>
                <li>Daily content creation and posting schedule</li>
                <li>Strategic hashtag research and implementation</li>
                <li>Community engagement and follower interaction</li>
                <li>Monthly analytics and performance reporting</li>
                <li>Story highlights and IGTV content optimization</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional woman in black with phone" />
          </div>
        </div>

        <div className="package-item reverse dark">
          <div className="package-content">
            <div className="package-number">2</div>
            <div className="package-text">
              <h3>Facebook Advertising</h3>
              <div className="package-price">$350/campaign</div>
              <ul>
                <li>Comprehensive audience research and targeting setup</li>
                <li>Creative ad design and compelling copy creation</li>
                <li>Campaign launch, monitoring, and optimization</li>
                <li>A/B testing for maximum performance and ROI</li>
                <li>Detailed reporting and insights for future campaigns</li>
              </ul>
              <button className="btn-tertiary">GET STARTED</button>
            </div>
          </div>
          <div className="package-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Professional workspace with mobile phone" />
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="why-work">
        <div className="why-work-content">
          <h2 className="script-heading">Your time is best spent on what you do best</h2>
          <p>Let us take care of your business marketing and social media needs.</p>
          
          <div className="benefits">
            <div className="benefit">
              <h3>Professional Excellence</h3>
              <p>Detail-oriented marketing support tailored specifically for busy entrepreneurs who demand quality and precision in every campaign.</p>
            </div>
            <div className="benefit">
              <h3>Strategic Approach</h3>
              <p>Data-driven social media strategies that combine creativity with analytics to deliver measurable results for your business growth.</p>
            </div>
            <div className="benefit">
              <h3>Elegant Solutions</h3>
              <p>Sophisticated marketing approaches designed to elevate your brand presence while maintaining the highest standards of professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2>Let's elevate your <span className="script">digital presence</span></h2>
          <p>Partner with Auvra.tech for smart, strategic social media marketing.</p>
          <div className="cta-buttons">
            <button className="btn-primary">BOOK A CONSULTATION</button>
            <a href="https://wa.me/264812568924" className="btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
          <p className="cta-subtext">Ready to transform your social media presence? Let's discuss your goals.</p>
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
            <p>© 2025 Auvra.tech. Elevating business operations with intelligent marketing support.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;