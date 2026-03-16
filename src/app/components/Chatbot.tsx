import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! Welcome to our tailoring shop 👋 How can we help you?',
      showButtons: true,
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    { label: 'Stitching Services', response: 'We offer Blouse Stitching, Kurti Stitching, Bridal Blouse, Alterations, and Kids Dresses. Would you like to know the pricing?' },
    { label: 'Price Enquiry', response: 'Our pricing starts from ₹300 for blouse stitching, ₹500 for kurti, ₹1500 for bridal blouse, ₹200 for alterations, and ₹400 for kids dresses. Prices may vary based on design complexity.' },
    { label: 'Shop Location', response: 'We are located at G.S complex, Sendurai Rd, Alagappa Nagar, Vila Ngara, Ariyalur, Tamil Nadu 621704. You can find us on Google Maps or call us at +91 99947 96074.' },
    { label: 'Contact Tailor', response: 'You can reach us at +91 99947 96074 or WhatsApp us directly. We are open Monday to Saturday, 10 AM - 7 PM.' },
  ];

  const handleQuickReply = (response: string) => {
    setMessages([...messages, 
      { type: 'bot', text: response, showButtons: false }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages([...messages,
      { type: 'user', text: inputValue, showButtons: false },
      { type: 'bot', text: 'Thank you for your message! For immediate assistance, please call us at +91 99947 96074 or WhatsApp us.', showButtons: false }
    ]);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-50"
          style={{ backgroundColor: '#7A1F2B' }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 w-96 rounded-2xl shadow-2xl overflow-hidden z-50"
          style={{ backgroundColor: '#F5E9DA', maxHeight: '600px' }}
        >
          {/* Header */}
          <div className="p-4 flex items-center justify-between" style={{ backgroundColor: '#7A1F2B' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C8A96A' }}>
                <MessageCircle className="w-5 h-5" style={{ color: '#7A1F2B' }} />
              </div>
              <div>
                <div className="font-medium text-white">New Glamour Tailor</div>
                <div className="text-xs" style={{ color: '#F5E9DA' }}>Online Now</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:opacity-80 transition-opacity"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-4 overflow-y-auto" style={{ height: '400px' }}>
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'bot' ? 'bg-white' : 'ml-auto'
                  }`}
                  style={message.type === 'user' ? { backgroundColor: '#7A1F2B', color: 'white' } : {}}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                
                {message.showButtons && (
                  <div className="mt-3 space-y-2">
                    {quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply.response)}
                        className="w-full text-left p-2 rounded-lg text-sm transition-colors hover:opacity-80"
                        style={{ backgroundColor: 'white', color: '#7A1F2B', border: '1px solid #C8A96A' }}
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t" style={{ borderColor: '#C8A96A' }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg border outline-none"
                style={{ borderColor: '#C8A96A', backgroundColor: '#F5E9DA' }}
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#7A1F2B' }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}