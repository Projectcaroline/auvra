import React from 'react';

interface ServicePageProps {
  onBack: () => void;
  serviceType: 'tech' | 'creative' | 'admin';
}

export default function ServicePages({ onBack, serviceType }: ServicePageProps) {
  const getServiceContent = () => {
    switch (serviceType) {
      case 'tech':
        return {
          title: 'TECH SERVICES',
          subtitle: 'Advanced technical solutions to streamline your business operations',
          services: [
            {
              name: 'Website Management',
              description: 'Keep your website running smoothly with regular updates, maintenance, and optimization for performance and security.',
              includes: [
                'Regular website updates and maintenance',
                'Content management and updates',
                'SEO optimization',
                'Performance monitoring',
                'Security updates and backups',
                'Plugin and theme management'
              ]
            },
            {
              name: 'Email Automation',
              description: 'Automated email marketing campaigns that nurture leads and convert prospects into paying customers.',
              includes: [
                'Email campaign setup and design',
                'Automated drip sequences',
                'List segmentation and targeting',
                'Performance tracking and optimization',
                'Integration with marketing tools',
                'A/B testing for better results'
              ]
            },
            {
              name: 'CRM Management',
              description: 'Organize and manage your customer relationships with proper CRM setup, data entry, and workflow automation.',
              includes: [
                'CRM setup and configuration',
                'Contact database management',
                'Sales pipeline organization',
                'Automated workflow creation',
                'Data entry and cleanup',
                'Reporting and analytics'
              ]
            }
          ]
        };
      case 'creative':
        return {
          title: 'CREATIVE SERVICES',
          subtitle: 'Professional creative solutions to enhance your brand presence',
          services: [
            {
              name: 'Social Media Content',
              description: 'Engaging social media content creation and management to build your brand and connect with your audience.',
              includes: [
                'Content creation and curation',
                'Social media post design',
                'Caption writing and hashtag research',
                'Content calendar planning',
                'Community management',
                'Performance analytics and reporting'
              ]
            },
            {
              name: 'Basic Graphic Design',
              description: 'Professional graphic design for your marketing materials, social media, and business needs.',
              includes: [
                'Logo design and branding',
                'Social media graphics',
                'Marketing materials design',
                'Presentation templates',
                'Business card and stationery design',
                'Web graphics and banners'
              ]
            },
            {
              name: 'Blog Management',
              description: 'Complete blog management including content creation, SEO optimization, and publishing schedules.',
              includes: [
                'Blog post writing and editing',
                'SEO optimization',
                'Content planning and scheduling',
                'Image sourcing and editing',
                'WordPress management',
                'Analytics and performance tracking'
              ]
            }
          ]
        };
      case 'admin':
        return {
          title: 'ADMIN SERVICES',
          subtitle: 'Professional administrative support to keep your business running smoothly',
          services: [
            {
              name: 'Executive Assistant',
              description: 'Comprehensive executive support including calendar management, email handling, and administrative tasks.',
              includes: [
                'Calendar management and scheduling',
                'Email management and responses',
                'Travel planning and booking',
                'Meeting preparation and notes',
                'Document preparation and filing',
                'Personal task management'
              ]
            },
            {
              name: 'Project Management',
              description: 'End-to-end project management to ensure your initiatives are completed on time and within budget.',
              includes: [
                'Project planning and timeline creation',
                'Team coordination and communication',
                'Progress tracking and reporting',
                'Resource allocation and management',
                'Risk assessment and mitigation',
                'Quality assurance and delivery'
              ]
            },
            {
              name: 'Customer Service',
              description: 'Professional customer service support to maintain excellent client relationships and satisfaction.',
              includes: [
                'Live chat and email support',
                'Customer inquiry handling',
                'Order processing and tracking',
                'Complaint resolution',
                'Customer database management',
                'Support ticket management'
              ]
            },
            {
              name: 'Bookkeeping',
              description: 'Accurate bookkeeping and financial record management to keep your business finances organized.',
              includes: [
                'Transaction recording and categorization',
                'Invoice creation and management',
                'Expense tracking and reporting',
                'Bank reconciliation',
                'Financial report preparation',
                'Tax preparation support'
              ]
            }
          ]
        };
      default:
        return { title: '', subtitle: '', services: [] };
    }
  };

  const content = getServiceContent();

  return (
    <div className="service-page">
      <div className="service-page-header">
        <button onClick={onBack} className="back-button">← Back to Services</button>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>
      
      <div className="service-details-grid">
        {content.services.map((service, index) => (
          <div key={index} className="service-detail-card">
            <div className="service-detail-header">
              <h3>{service.name}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-includes">
              <h4>What's Included:</h4>
              <ul>
                {service.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="service-actions">
              <a 
                href={`https://wa.me/264812568924?text=Hi! I'm interested in ${service.name} services. Can we discuss pricing and my specific needs?`}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
              <a 
                href={`mailto:ajarlandings@gmail.com?subject=${service.name} Service Inquiry&body=Hi! I'd like to learn more about your ${service.name} services. Can we schedule a consultation to discuss pricing and availability?`}
                className="btn-secondary"
              >
                Email Me
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}