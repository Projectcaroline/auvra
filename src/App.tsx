import React, { useState, useEffect } from 'react';
import { Camera, Play, Palette, Share2, ArrowRight, Instagram, Phone, Mail, MapPin, User, Award, Target } from 'lucide-react';
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
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">ELITE BRAND DEVELOPMENT</div>
            <h1>CREATIVE SERVICES THAT<br />ELEVATE YOUR BRAND VISUALS<br />ONLINE AND BEYOND!</h1>
            <p className="hero-description">Photography that captures more than just a moment - we create visuals that communicate your value, build trust, and spark connection.</p>
            <div className="hero-buttons">
              <button className="btn-primary">VIEW OUR WORK</button>
              <button className="btn-secondary">GET STARTED</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=500" alt="Elite professional workspace" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">CREATIVE BRAND DEVELOPMENT</div>
              <h2>Photography That<br />Captures More Than<br />Just a Moment</h2>
              <p>At NPERFECTSTUDIO, we create visuals that do more than look good; they communicate your value, build trust, and spark connection.</p>
              <p>Our approach combines technical excellence with creative vision to deliver images that not only showcase your brand but tell your story in a way that resonates with your audience.</p>
              <button className="btn-learn-more">LEARN MORE</button>
            </div>
            <div className="about-image">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" alt="Elite creative professional" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-image">
              <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500&h=600" alt="Luxury creative studio" />
            </div>
            <div className="vision-text">
              <div className="vision-badge">THE CREATIVE VISION BEHIND THE STUDIO</div>
              <h2>THE CREATIVE VISION<br />BEHIND THE STUDIO</h2>
              <p>We believe that every brand has a unique story to tell, and our mission is to help you tell yours through compelling visuals that capture attention and drive engagement.</p>
              <p>Our team combines years of experience with cutting-edge techniques to deliver results that exceed expectations and help your brand stand out in today's competitive marketplace.</p>
              <button className="btn-vision">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <div className="services-badge">WE'RE ALWAYS BUILDING</div>
            <h2>OUR SERVICES</h2>
          </div>
          <div className="services-grid">
            <div className="service-card large">
              <div className="service-image">
                <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600&h=400" alt="Elite photography service" />
              </div>
              <div className="service-content">
                <div className="service-number">01</div>
                <h3>PHOTOGRAPHY</h3>
                <p>Professional photography services that capture your brand's essence and create lasting impressions.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">02</div>
                <h3>VIDEOGRAPHY</h3>
                <p>Dynamic video content that tells your story and engages your audience across all platforms.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">03</div>
                <h3>GRAPHIC DESIGN</h3>
                <p>Creative design solutions that communicate your message with visual impact and professional polish.</p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-content">
                <div className="service-number">04</div>
                <h3>SOCIAL MEDIA MARKETING</h3>
                <p>Strategic social media campaigns that build your brand presence and drive meaningful engagement.</p>
              </div>
            </div>
          </div>
          <div className="services-cta">
            <button className="btn-services">VIEW OUR SERVICES</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>OUR TESTIMONIALS</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Elite client testimonial" />
              </div>
              <h4>Clara King</h4>
              <p>"Working with this team transformed our brand presence. Their attention to detail and creative vision exceeded all our expectations."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Elite client testimonial" />
              </div>
              <h4>Clara King</h4>
              <p>"The photography work was exceptional. Every shot captured exactly what we envisioned for our brand story."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="Elite client testimonial" />
              </div>
              <h4>Clara King</h4>
              <p>"Professional, creative, and results-driven. This team delivers quality work that makes a real difference."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>LET'S CREATE THE VISUALS<br />YOUR BRAND DESERVES</h2>
            <p>Ready to elevate your brand with professional photography and creative services? Let's discuss your project and bring your vision to life.</p>
            <button className="btn-cta">VIEW OUR WORK</button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-header">
            <h2>PORTFOLIO</h2>
            <p>A curated selection of our finest work showcasing the breadth and depth of our creative capabilities across various industries and project types.</p>
          </div>
          <div className="portfolio-categories">
            <div className="category-tabs">
              <span className="tab active">INSTAGRAM</span>
              <span className="tab">FACEBOOK</span>
              <span className="tab">THIS ADS</span>
            </div>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
            <div className="portfolio-item">
              <img src="https://images.pexels.com/photos/1181775/pexels-photo-1181775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" alt="Elite portfolio work" />
            </div>
          </div>
          <div className="portfolio-categories-bottom">
            <div className="category-item">
              <h4>Photography</h4>
            </div>
            <div className="category-item">
              <h4>Videography</h4>
            </div>
            <div className="category-item">
              <h4>Graphics and Socials</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3>LET'S CONNECT!</h3>
              <div className="footer-badge">NPERFECTSTUDIO</div>
              <p>Ready to elevate your brand with stunning visuals? Get in touch and let's create something amazing together.</p>
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
                <h4>OUR SERVICES</h4>
                <ul>
                  <li>Photography</li>
                  <li>Videography</li>
                  <li>Graphic Design</li>
                  <li>Social Media Marketing</li>
                </ul>
              </div>
              <div className="footer-social">
                <a href="https://www.instagram.com/twenty_sum" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="https://wa.me/264812568924" aria-label="WhatsApp"><Phone size={20} /></a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Twentysum. Elite creative services for discerning brands.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}