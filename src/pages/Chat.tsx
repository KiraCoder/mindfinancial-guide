
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import ChatInterface from '../components/ChatInterface';
import { getChatbotById } from '../data/chatbots';

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chatbot = getChatbotById(id || '');
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  
  useEffect(() => {
    if (!chatbot) {
      navigate('/');
    }
  }, [chatbot, navigate]);
  
  if (!chatbot) return null;
  
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      
      <main className="pt-24 pb-6 px-4 h-[calc(100vh-80px)]">
        <div className="w-full h-full mx-auto max-w-6xl flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Link
                to={`/chatbot/${chatbot.id}`}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mr-4"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back
              </Link>
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border">
                  <img 
                    src={chatbot.avatar} 
                    alt={chatbot.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{chatbot.name}</div>
                  <div className="text-xs text-muted-foreground">{chatbot.title}</div>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsInfoVisible(!isInfoVisible)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Chatbot information"
            >
              <Info size={16} />
            </button>
          </div>
          
          <div className="flex-grow relative">
            {isInfoVisible && (
              <div className="absolute top-0 right-0 w-72 bg-card rounded-xl border shadow-lg p-4 z-10 animate-fade-in glass-card">
                <h3 className="text-sm font-semibold mb-2">About {chatbot.name}</h3>
                <p className="text-xs text-card-foreground/90 mb-3">{chatbot.description}</p>
                <h4 className="text-xs font-semibold mb-1">Expertise</h4>
                <div className="flex flex-wrap gap-1 mb-3">
                  {chatbot.expertise.slice(0, 4).map((skill, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setIsInfoVisible(false)}
                  className="text-xs text-primary hover:text-primary/80"
                >
                  Close
                </button>
              </div>
            )}
            
            <ChatInterface chatbot={chatbot} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
