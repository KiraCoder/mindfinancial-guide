
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import ChatbotCard from '../components/ChatbotCard';
import { chatbots } from '../data/chatbots';
import { useStaggeredAnimation, useAnimateOnScroll } from '../utils/animations';

const Index = () => {
  useAnimateOnScroll();
  const delays = useStaggeredAnimation(chatbots.length);
  
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="w-full px-6 mx-auto max-w-7xl text-center mb-24">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="relative">
                Expert AI assistants for every need
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5 blur-3xl -z-10"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Specialized AI chatbots with deep knowledge in finance, career, mental health, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/chatbot/financial-expert" 
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Find Your Expert
              </Link>
              <Link 
                to="/about" 
                className="inline-flex h-11 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-1"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        
        {/* Experts Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our AI Experts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each AI assistant is specialized in their field, trained on the latest research and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbots.map((chatbot, index) => (
              <ChatbotCard 
                key={chatbot.id} 
                chatbot={chatbot} 
                delay={delays[index]}
              />
            ))}
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
              <div className="animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Specialized Knowledge</h3>
                <p className="text-muted-foreground">Each AI expert is trained on specialized data relevant to their field of expertise.</p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M3 5v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"></path>
                    <path d="M16 12h.01"></path>
                    <path d="M8 12h.01"></path>
                    <path d="M12 16c1.5 0 3-1.5 3-3"></path>
                    <path d="M9 16c-1.5 0-3-1.5-3-3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p className="text-muted-foreground">Get expert advice anytime, anywhere without scheduling appointments.</p>
              </div>
              
              <div className="animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
                <p className="text-muted-foreground">Your conversations are secure and private. We prioritize your data security.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="w-full px-6 mx-auto max-w-7xl animate-on-scroll">
          <div className="relative overflow-hidden rounded-3xl bg-primary">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="relative px-8 py-12 md:px-12 md:py-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to chat with an expert?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Choose from our selection of AI experts and get personalized guidance for your questions.
              </p>
              <Link 
                to="/chatbot/financial-expert" 
                className="inline-flex h-11 items-center justify-center rounded-full bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Start Chatting Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2 text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span className="text-lg font-medium">ExpertChat</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ExpertChat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
