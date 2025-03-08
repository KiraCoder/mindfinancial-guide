
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import { getChatbotById } from '../data/chatbots';
import { useAnimateOnScroll } from '../utils/animations';

const ChatbotDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const chatbot = getChatbotById(id || '');
  
  useAnimateOnScroll();
  
  useEffect(() => {
    if (!chatbot) {
      navigate('/');
    }
  }, [chatbot, navigate]);
  
  if (!chatbot) return null;
  
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="w-full px-6 mx-auto max-w-4xl">
          <Link 
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 animate-on-scroll"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experts
          </Link>
          
          <div className="bg-card rounded-3xl overflow-hidden border shadow-lg animate-on-scroll glass-card">
            <div className={`bg-gradient-to-r ${chatbot.color} h-40 relative`}>
              <div className="absolute left-6 -bottom-12 w-24 h-24 rounded-2xl overflow-hidden border-4 border-card shadow-lg">
                <img 
                  src={chatbot.avatar} 
                  alt={chatbot.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="pt-16 px-6 pb-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold">{chatbot.name}</h1>
                  <p className="text-muted-foreground">{chatbot.title}</p>
                </div>
                
                <Link 
                  to={`/chat/${chatbot.id}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Start Chat
                </Link>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg font-semibold mb-2">About</h2>
                  <p className="text-card-foreground/90">{chatbot.description}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-2">Background</h2>
                  <p className="text-card-foreground/90">{chatbot.background}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-3">Areas of Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {chatbot.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link 
                    to={`/chat/${chatbot.id}`}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-primary p-4 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Start Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatbotDetail;
