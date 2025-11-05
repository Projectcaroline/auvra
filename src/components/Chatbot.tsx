import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to help you understand how Twentysum can transform your business with private AI systems. What would you like to know?"
    }
  ]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: 'pricing',
      text: 'What does this cost?',
      response: "Our private AI systems start at $5,000/month for basic automation, with enterprise solutions ranging $15,000-50,000/month. The ROI typically pays for itself within 30-60 days through time savings and increased efficiency. Would you like to schedule a private consultation to discuss your specific needs?"
    },
    {
      id: 'results',
      text: 'What results can I expect?',
      response: "Our elite clients typically see: 20+ hours saved weekly, 40% faster decision-making, 60% reduction in manual tasks, and 3x faster business growth. For example, one client automated their entire customer onboarding process, saving 25 hours per week. Ready to see what's possible for your business?"
    },
    {
      id: 'timeline',
      text: 'How quickly can this be implemented?',
      response: "Most AI systems are deployed within 2-4 weeks, with basic automation live in the first week. We work exclusively with serious entrepreneurs who value speed and results. The application process ensures we're the right fit before we begin. Interested in starting your application?"
    },
    {
      id: 'exclusive',
      text: 'Why is this application-only?',
      response: "We only work with 12 elite clients at a time to ensure exceptional results. This isn't for everyone - it's for founders who understand that time is their most valuable asset and are ready to invest in world-class AI systems. Our clients value exclusivity and premium service. Does this sound like you?"
    },
    {
      id: 'different',
      text: 'How is this different from other AI services?',
      response: "Unlike generic AI tools, we build private, custom systems tailored to your exact business needs. No monthly subscriptions to multiple tools - just one comprehensive AI ecosystem that grows with you. Plus, you get direct access to me and my team, not a support ticket system. Ready to experience the difference?"
    }
  ];

  const handleOptionClick = (option: any) => {
    setMessages(prev => [
      ...prev,
      { type: 'user', text: option.text },
      { type: 'bot', text: option.response }
    ]);
    setSelectedOption(option.id);
  };

  const resetChat = () => {
    setMessages([
      {
        type: 'bot',
        text: "Hi! I'm here to help you understand how Twentysum can transform your business with private AI systems. What would you like to know?"
      }
    ]);
    setSelectedOption(null);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl border border-amber-200 z-50 max-h-96 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Twentysum AI Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about our private AI systems</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options */}
          <div className="p-4 border-t border-gray-200">
            {!selectedOption ? (
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-amber-50 rounded border hover:border-amber-200 transition-colors"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={resetChat}
                  className="w-full p-2 text-sm bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
                >
                  Ask Another Question
                </button>
                <a
                  href="https://wa.me/264812568924?text=Hi! I'd like to apply for your private AI systems. Can we schedule a consultation?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-center block"
                >
                  Apply via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}