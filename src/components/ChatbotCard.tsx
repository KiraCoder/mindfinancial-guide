
import { Link } from 'react-router-dom';
import { Chatbot } from '../data/chatbots';

interface ChatbotCardProps {
  chatbot: Chatbot;
  delay?: string;
}

const ChatbotCard = ({ chatbot, delay = '0ms' }: ChatbotCardProps) => {
  return (
    <Link 
      to={`/chatbot/${chatbot.id}`}
      className="block animate-on-scroll group"
      style={{ animationDelay: delay }}
    >
      <div className="relative overflow-hidden rounded-2xl border bg-card hover-lift group glass-card">
        <div className={`absolute inset-0 bg-gradient-to-br ${chatbot.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
              <img 
                src={chatbot.avatar} 
                alt={chatbot.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground">{chatbot.name}</h3>
              <p className="text-sm text-muted-foreground">{chatbot.title}</p>
            </div>
          </div>
          
          <p className="text-sm text-card-foreground/90 mb-6 line-clamp-2">
            {chatbot.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {chatbot.expertise.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-foreground/80"
              >
                {skill}
              </span>
            ))}
            {chatbot.expertise.length > 3 && (
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                +{chatbot.expertise.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-primary">View Profile</div>
            <div 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChatbotCard;
