
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Message, { MessageProps } from './Message';
import { Chatbot } from '../data/chatbots';
import { OpenAI } from 'openai';

// Initialize OpenRouter client
const openai = new OpenAI({
  apiKey: "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",
  baseURL: "https://openrouter.ai/api/v1/",
  dangerouslyAllowBrowser: true, // Allow API key usage in browser
});

interface ChatInterfaceProps {
  chatbot: Chatbot;
}

const ChatInterface = ({ chatbot }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize conversation with welcome message
  useEffect(() => {
    setMessages([
      {
        content: `Hi there! I'm ${chatbot.name}, your ${chatbot.title.toLowerCase()}. How can I help you today?`,
        isUser: false,
        timestamp: new Date()
      }
    ]);
  }, [chatbot]);
  
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
    
    try {
      // Prepare conversation history for API
      const conversationHistory = messages.map(msg => ({
        role: msg.isUser ? "user" as const : "assistant" as const,
        content: msg.content
      }));
      
      // Add system message with GrowWise chatbot context
      const systemMessage = {
        role: "system" as const,
        content: `You are ${chatbot.name}, a ${chatbot.title} for GrowWise, an educational platform focused on improving financial literacy and mental health support for students.
        
        Your expertise includes: ${chatbot.expertise.join(', ')}. 
        
        Background: ${chatbot.background}
        
        As a GrowWise advisor, your goal is to provide personalized, practical advice to help students develop essential life skills. Offer specific, actionable recommendations rather than generic advice. When responding, maintain a supportive, empathetic tone while providing evidence-based information. Use relatable examples for young adults when possible.
        
        Important: If asked about sensitive topics beyond your expertise, acknowledge the importance of the issue and suggest speaking with a qualified professional.`
      };
      
      // Add latest user message
      conversationHistory.push({
        role: "user" as const,
        content: inputValue
      });
      
      // Call OpenRouter API
      const completion = await openai.chat.completions.create({
        model: "nousresearch/hermes-3-llama-3.1-405b", // High-quality open model
        messages: [systemMessage, ...conversationHistory],
        temperature: 0.7,
        max_tokens: 800,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
      });
      
      // Get AI response
      const botResponse = completion.choices[0].message.content || "Sorry, I couldn't process that request.";
      
      // Add AI response to messages
      const botMessage: MessageProps = {
        content: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling AI API:', error);
      
      // Add error message
      const errorMessage: MessageProps = {
        content: "I'm having trouble connecting right now. Please try again in a moment.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      // Show toast notification
      toast({
        title: "Connection Error",
        description: "Could not connect to AI service. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
