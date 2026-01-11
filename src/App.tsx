import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Check, Zap, Users, Shield, ArrowRight } from 'lucide-react';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatStep, setChatStep] = useState('initial');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChatResponse = (response: string) => {
    if (response === 'playbook') {
      setChatStep('playbook');
    } else if (response === 'review') {
      window.open('https://calendly.com/twentysum/private-consultation', '_blank');
    } else if (response === 'leads') {
      setChatStep('leads');
    } else if (response === 'yes-system') {
      setChatStep('hasSystem');
    } else if (response === 'no-system') {
      setChatStep('noSystem');
    } else if (response === 'yes-missed') {
      setChatStep('needsHelp');
    } else if (response === 'no-missed') {
      setChatStep('noHelp');
    } else if (response === 'get-playbook') {
      setChatStep('emailCapture');
    } else if (response === 'get-review') {
      setChatStep('reviewCapture');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold tracking-wide">TWENTYSUM</div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8 tracking-tight text-gray-900">
            Stop Losing Leads After They Arrive
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build systems that automatically respond to, qualify, and follow up with your inbound leads — so nothing slips through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => handleChatResponse('playbook')}
              className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              Get the AI Playbook
            </button>
            <a 
              href="#" 
              onClick={() => handleChatResponse('review')}
              className="text-gray-700 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
            >
              Request a System Review
            </a>
          </div>
          <p className="text-gray-600 mt-6 text-lg">
            No tools to choose. No learning. Just results.
          </p>
        </div>
      </section>

      {/* What We Solve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">You Don't Have a Lead Problem — You Have a Follow-Up Problem</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>Most businesses get traffic. Most businesses get inquiries.</p>
              <p>What most businesses don't get is consistent contact with every lead — instantly and reliably.</p>
              <p>Delayed replies, missed messages, and inconsistent follow-up cost you deals you'll never see on a report.</p>
              <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
                <h3 className="text-2xl font-medium mb-6 text-gray-900">We make sure:</h3>
                <ul className="space-y-4 text-left max-w-2xl mx-auto">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span>Every inbound lead gets a reply immediately</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span>Every promising contact is qualified</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span>Every opportunity is pursued until it converts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gray-900 mt-1 mr-3 flex-shrink-0" />
                    <span>Nothing gets lost in inboxes or forgotten</span>
                  </li>
                </ul>
                <p className="text-xl font-medium mt-8 text-gray-900">That's the difference between "interested" and "sold."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">How the System Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We build and deliver Done-For-You Lead Automation Systems that include:
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 text-left text-lg">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                  <span>Instant automatic response to new leads</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                  <span>Intelligent qualification so you talk to real opportunities</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                  <span>Routing to the right person or inbox</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                  <span>Follow-up sequences so no lead goes cold</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gray-900 mt-1 mr-4 flex-shrink-0" />
                  <span>System testing + handover</span>
                </li>
              </ul>
              <div className="mt-12 text-center">
                <p className="text-xl text-gray-700">No tool names.</p>
                <p className="text-xl text-gray-700">No tech jargon.</p>
                <p className="text-xl font-medium text-gray-900">Just fixed flow and real results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Services That Fix It — Not Just Explain It</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Service 1 */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Done-For-You Lead Response Fix</h3>
                <div className="text-3xl font-light mb-4">$149 – $249</div>
                <p className="text-gray-600 mb-6">What's included:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Instant response setup for leads</li>
                  <li>• Basic qualification logic</li>
                  <li>• Routing to your inbox</li>
                  <li>• Confirmation and expectations message</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Outcome:</p>
                  <p className="text-gray-700">No more slow replies or lost messages.</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border-2 border-gray-900 p-8 bg-white relative">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Lead Response + Follow-Up System</h3>
                <div className="text-3xl font-light mb-4">$499 – $750</div>
                <p className="text-gray-600 mb-6">What's included:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• All of the above</li>
                  <li>• Consistent follow-up sequence</li>
                  <li>• Routing and tracking</li>
                  <li>• Tested, ready-to-use system</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Outcome:</p>
                  <p className="text-gray-700">Every lead is responded to, qualified, and followed up automatically.</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="border border-gray-200 p-8 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4">Complete Automation System</h3>
                <div className="text-3xl font-light mb-4">$1,200 – $2,500</div>
                <p className="text-gray-600 mb-6">What's included:</p>
                <ul className="space-y-3 text-gray-700">
                  <li>• Full system implementation</li>
                  <li>• Multi-channel response & follow-up</li>
                  <li>• Advanced routing and lead persistence</li>
                  <li>• System testing, monitoring, handover</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <p className="font-medium text-gray-900">Outcome:</p>
                  <p className="text-gray-700">Leads move from first contact to sales-ready automatically.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Website Support Add-On */}
          <div className="max-w-2xl mx-auto text-center bg-white border border-gray-200 p-8 rounded-lg">
            <h3 className="text-2xl font-medium mb-4">Website Support (Optional Add-On)</h3>
            <div className="text-3xl font-light mb-4">$400 – $1,000</div>
            <p className="text-gray-600 mb-4">Use if: Your site is part of the lead problem</p>
            <p className="text-lg font-medium text-gray-900">"We fix the system and the place where leads enter."</p>
          </div>
        </div>
      </section>

      {/* Operation Flow Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">What Happens After A Lead Comes In</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Lead Captured</h3>
                  <p className="text-gray-700">Someone inquires via your site, WhatsApp, Instagram, or messaging.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Instant Response</h3>
                  <p className="text-gray-700">Our system replies immediately to acknowledge and warm the lead.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Qualification</h3>
                  <p className="text-gray-700">Logical questions ensure intent, interest, and fit.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Routing</h3>
                  <p className="text-gray-700">The lead is sent to the right person or location.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Follow-Up</h3>
                  <p className="text-gray-700">If no reply from the team, automated follow-up engages the lead.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mr-6 flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Human Handoff</h3>
                  <p className="text-gray-700">A person steps in once intent is clear.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-medium text-gray-900">This stops leaks — that's the whole point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">Why Manual Follow-Up No Longer Works</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>Humans are inconsistent, busy, and forgetful.</p>
              <p>Leads are time-sensitive, impatient, and fleeting.</p>
              <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
                <div className="space-y-4 text-xl">
                  <p className="font-medium text-gray-900">Speed beats persuasion.</p>
                  <p className="font-medium text-gray-900">Consistency beats availability.</p>
                  <p className="font-medium text-gray-900">Automation protects intent.</p>
                </div>
              </div>
              <p className="text-xl font-medium text-gray-900 mt-8">
                You can't afford to treat your leads like emails — you need a system that treats them like revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Repeat */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-12">Ready to stop losing leads?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button 
              onClick={() => handleChatResponse('playbook')}
              className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
            >
              👉 Get the AI Playbook
            </button>
            <button 
              onClick={() => handleChatResponse('review')}
              className="border border-gray-900 text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              👉 Request a System Review
            </button>
          </div>
          <p className="text-xl text-gray-700">Your business, but better.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">TWENTYSUM</h3>
              <p className="text-gray-400">AI systems for serious operators</p>
            </div>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="/privacy.html" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms.html" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="https://www.instagram.com/twenty_sum" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="mailto:ajarlandings@gmail.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 italic">This is not for everyone — but if you know, you know.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen ? (
          <div className="bg-white border border-gray-200 shadow-2xl w-80 max-w-[calc(100vw-3rem)]">
            <div className="bg-black text-white p-4 flex justify-between items-center">
              <span className="font-medium">Twentysum AI</span>
              <button onClick={() => setIsChatOpen(false)} className="text-white hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {chatStep === 'initial' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Hi! I'm the Twentysum Lead Assistant — I help you figure out how we can stop missed leads and automate your follow-ups. How can I assist you today?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('leads')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      I want help with leads
                    </button>
                    <button 
                      onClick={() => handleChatResponse('playbook')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Get the AI Playbook
                    </button>
                    <button 
                      onClick={() => handleChatResponse('review')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Request a System Review
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'leads' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Great! Are you currently using any system to respond to new inquiries instantly?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('yes-system')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => handleChatResponse('no-system')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      No
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'noSystem' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">No problem — would you like:</p>
                    <p className="text-gray-700 text-sm">A copy of the AI Playbook to understand how it works, or</p>
                    <p className="text-gray-700 text-sm">A direct Lead System Review with us?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('get-playbook')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Get Playbook
                    </button>
                    <button 
                      onClick={() => handleChatResponse('get-review')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Review
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'hasSystem' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Are you seeing missed leads because replies are slow or inconsistent?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('yes-missed')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => handleChatResponse('no-missed')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      No
                    </button>
                  </div>
                </>
              )}
              
              {chatStep === 'needsHelp' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">We can help fix that with a done-for-you system. Would you like a Free Review or a copy of the AI Playbook?</p>
                  </div>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleChatResponse('get-playbook')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Get Playbook
                    </button>
                    <button 
                      onClick={() => handleChatResponse('get-review')}
                      className="w-full text-left p-3 border border-gray-200 hover:border-black hover:bg-gray-50 transition-colors"
                    >
                      Get Review
                    </button>
                  </div>
                </>
              )}

              {chatStep === 'emailCapture' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Excellent! Enter your email and we'll send you the Playbook link.</p>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      className="w-full p-3 border border-gray-200 focus:border-black focus:outline-none"
                    />
                  </div>
                  <button 
                    onClick={() => setChatStep('playbookSent')}
                    className="w-full bg-black text-white p-3 hover:bg-gray-800 transition-colors"
                  >
                    Send Playbook
                  </button>
                </>
              )}

              {chatStep === 'playbookSent' && (
                <div className="text-center">
                  <p className="text-gray-900 mb-4">Check your inbox — and if you'd like a Private System Review after reading it, just let me know.</p>
                  <button 
                    onClick={() => setChatStep('initial')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    ← Back to start
                  </button>
                </div>
              )}

              {chatStep === 'reviewCapture' && (
                <>
                  <div className="mb-6">
                    <p className="text-gray-900 mb-4">Perfect — please enter your name and email, and we'll schedule a Private Lead System Review.</p>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Your name"
                        className="w-full p-3 border border-gray-200 focus:border-black focus:outline-none"
                      />
                      <input 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full p-3 border border-gray-200 focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => setChatStep('reviewScheduled')}
                    className="w-full bg-black text-white p-3 hover:bg-gray-800 transition-colors"
                  >
                    Schedule Review
                  </button>
                </>
              )}

              {chatStep === 'reviewScheduled' && (
                <div className="text-center">
                  <p className="text-gray-900 mb-4">Thanks! We'll contact you soon to arrange a time for your review.</p>
                  <button 
                    onClick={() => setChatStep('initial')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    ← Back to start
                  </button>
                </div>
              )}

              {chatStep === 'noHelp' && (
                <div className="text-center">
                  <p className="text-gray-900 mb-4">Great! Sounds like you have a solid system. If you ever need optimization or want to see what's possible, feel free to reach out.</p>
                  <button 
                    onClick={() => setChatStep('initial')}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    ← Back to start
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;