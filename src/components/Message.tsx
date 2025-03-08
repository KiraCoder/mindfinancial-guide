
import { useState, useEffect } from 'react';

export interface MessageProps {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Message = ({ content, isUser, timestamp }: MessageProps) => {
  const [displayContent, setDisplayContent] = useState('');
  const [isTyping, setIsTyping] = useState(!isUser);
  
  // Simulate typing effect for bot messages
  useEffect(() => {
    if (isUser) {
      setDisplayContent(content);
      return;
    }
    
    let index = 0;
    const typingSpeed = 15; // milliseconds per character
    
    setIsTyping(true);
    setDisplayContent('');
    
    const typingInterval = setInterval(() => {
      if (index < content.length) {
        setDisplayContent(prev => prev + content.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [content, isUser]);
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={isUser ? 'message-user' : 'message-bot'}>
        <div className="text-sm">
          {displayContent}
          {isTyping && (
            <div className="typing-indicator mt-1">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default Message;
