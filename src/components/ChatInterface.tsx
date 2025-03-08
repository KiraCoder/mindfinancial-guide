
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';
import Message, { MessageProps } from './Message';
import { Chatbot } from '../data/chatbots';

interface ChatInterfaceProps {
  chatbot: Chatbot;
}

const ChatInterface = ({ chatbot }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      content: `Hi there! I'm ${chatbot.name}, your ${chatbot.title.toLowerCase()}. How can I help you today?`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: MessageProps = {
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let botResponse = '';
      
      // Response logic based on chatbot type
      if (chatbot.id.includes('financial')) {
        botResponse = "That's an important financial question. I understand that money matters can impact your overall wellbeing. Based on current financial best practices, I'd be happy to provide some insights that can help reduce financial stress and build greater security.";
      } else if (chatbot.id.includes('mental')) {
        botResponse = "Thank you for sharing that with me. Your mental wellbeing is important, and I appreciate your openness. I can suggest some evidence-based strategies that might help, while recognizing that everyone's journey is unique.";
      } else {
        botResponse = "Thank you for your message. I'm here to support your mental and financial wellbeing with personalized guidance based on your specific situation.";
      }
      
      const botMessage: MessageProps = {
        content: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-full glass-panel rounded-2xl overflow-hidden">
      <div className="flex-grow overflow-y-auto p-6" style={{ scrollBehavior: 'smooth' }}>
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message.content}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="message-bot flex items-center justify-center p-4 min-h-[44px] min-w-[60px]">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messageEndRef} />
      </div>
      
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Attach files"
          >
            <Paperclip size={18} />
          </button>
          
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full h-10 px-4 rounded-full bg-secondary border-0 focus:ring-2 focus:ring-primary focus-visible:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
          </div>
          
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            aria-label="Voice input"
          >
            <Mic size={18} />
          </button>
          
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
