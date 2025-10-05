import React from 'react';

interface LegalPagesProps {
  onBack: () => void;
  pageType: 'privacy' | 'terms' | 'refund';
}

export default function LegalPages({ onBack, pageType }: LegalPagesProps) {
  const getPageContent = () => {
    switch (pageType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div>
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you contact us for services, book consultations, or communicate with us via email or WhatsApp.</p>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our virtual assistant services, communicate with you, and respond to your inquiries.</p>
              
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at ajarlandings@gmail.com or via WhatsApp at +264 81 256 8924.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div>
              <h2>Service Agreement</h2>
              <p>By engaging our virtual assistant services, you agree to these terms and conditions. Our services include administrative support, web design, outreach campaigns, and AI integrations.</p>
              
              <h2>Payment Terms</h2>
              <p>Payment terms will be agreed upon before service commencement. We accept various payment methods and require payment according to the agreed schedule.</p>
              
              <h2>Service Delivery</h2>
              <p>We commit to delivering services within agreed timeframes. Any delays will be communicated promptly with revised timelines.</p>
              
              <h2>Intellectual Property</h2>
              <p>All work products created for you become your property upon full payment. We retain the right to use general methodologies and non-confidential techniques.</p>
              
              <h2>Limitation of Liability</h2>
              <p>Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>
              
              <h2>Termination</h2>
              <p>Either party may terminate services with reasonable notice. Outstanding payments remain due upon termination.</p>
            </div>
          )
        };
      case 'refund':
        return {
          title: 'Refund Policy',
          content: (
            <div>
              <h2>Satisfaction Guarantee</h2>
              <p>We stand behind the quality of our work. If you're not satisfied with our services, we'll work with you to make it right.</p>
              
              <h2>Refund Eligibility</h2>
              <p>Refunds may be considered for services not delivered as agreed or if there are significant quality issues that cannot be resolved.</p>
              
              <h2>Refund Process</h2>
              <p>To request a refund, contact us within 7 days of service completion. We'll review your request and respond within 3 business days.</p>
              
              <h2>Partial Refunds</h2>
              <p>For partially completed work, refunds will be calculated based on the work completed and delivered.</p>
              
              <h2>Non-Refundable Items</h2>
              <p>Consultation fees, completed deliverables that meet agreed specifications, and third-party costs are generally non-refundable.</p>
              
              <h2>Contact for Refunds</h2>
              <p>For refund requests, email us at ajarlandings@gmail.com with your project details and reason for the refund request.</p>
            </div>
          )
        };
      default:
        return { title: '', content: <div></div> };
    }
  };

  const { title, content } = getPageContent();

  return (
    <div className="legal-page">
      <div className="legal-content">
        <button onClick={onBack} className="back-button">← Back to Home</button>
        <h1>{title}</h1>
        {content}
        <div className="legal-contact">
          <h3>Contact Information</h3>
          <p>Email: ajarlandings@gmail.com</p>
          <p>WhatsApp: +264 81 256 8924</p>
          <p>Instagram: @twenty_sum</p>
        </div>
      </div>
    </div>
  );
}