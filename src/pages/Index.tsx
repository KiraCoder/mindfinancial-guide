
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
      
      <main className="py-48 pb-20">
        {/* Hero Section */}
        <section className="w-full px-6 mx-auto max-w-7xl text-center mb-24 py-10">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="relative">
                Expert AI advisors for mental health and finance
                <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-5 blur-3xl -z-10"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Specialized AI chatbots with deep knowledge in financial planning and mental wellness to help you grow wiser.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/chatbot/financial-expert" 
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Find Your Advisor
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
        
        {/* Problem Section - New Addition */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Addressing Critical Challenges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hong Kong's youth face unprecedented financial and mental health challenges that require innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            {/* Financial Literacy Crisis */}
            <div className="bg-secondary/50 rounded-xl p-8 backdrop-blur-sm border border-border/50 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-primary">Financial Literacy Crisis</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">33% of students struggled with expenses in 2022 (up from 16% in 2021), with 22% borrowing to make ends meet.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">Financial satisfaction among students plummeted from 37% to just 13% in a single year.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">Only 43% of Hong Kong residents can answer basic financial questions (HKICPA study).</p>
                </li>
              </ul>
            </div>
            
            {/* Mental Health Crisis */}
            <div className="bg-secondary/50 rounded-xl p-8 backdrop-blur-sm border border-border/50 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-primary">Mental Health Crisis</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">24.4% of children and adolescents (6-17) experienced mental health issues in the past year.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">51.5% of secondary school pupils show depressive symptoms; 25% exhibit high anxiety levels.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <p className="text-sm">Less than half of caregivers seek professional help for their children's mental health issues.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Experts Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our AI Advisors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each AI assistant is specialized in either mental health or financial advisory, trained on the latest research and best practices.
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
        
        {/* School Subscription Plans - New Addition */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Institution Subscription Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empower your educational institution with AI-powered mental health and financial literacy resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border animate-on-scroll hover-lift">
              <div className="bg-primary/10 p-6">
                <h3 className="text-xl font-bold">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$500</span>
                  <span className="ml-2 text-sm text-muted-foreground">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Up to 1,000 student accounts</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic financial literacy modules</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Student-focused mental health support</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly usage reports</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block w-full py-2 px-4 bg-secondary hover:bg-secondary/80 text-center rounded-md font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Standard Plan */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-primary animate-on-scroll hover-lift relative">
              <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                Most Popular
              </div>
              <div className="bg-primary p-6 text-white">
                <h3 className="text-xl font-bold">Standard</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$1,000</span>
                  <span className="ml-2 text-sm text-white/70">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1,000 students + 100 teacher accounts</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced financial curriculum</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Teacher training for mental health support</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly usage analytics</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quarterly consultation sessions</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white text-center rounded-md font-medium transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border animate-on-scroll hover-lift">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="ml-2 text-sm text-muted-foreground">pricing</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited student and staff accounts</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customized financial and mental health solutions</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>School-specific advisory services</span>
                  </li>
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support and consultation</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="block w-full py-2 px-4 bg-secondary hover:bg-secondary/80 text-center rounded-md font-medium transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
              <div className="animate-on-scroll">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">Each AI advisor is trained on specialized data relevant to mental health or financial wellness.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to grow wiser?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Choose from our selection of AI advisors and get personalized guidance for your mental health and financial questions.
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
              <img src="/lovable-uploads/7848833e-f764-4a2e-8ff8-9c6a213e6aff.png" alt="GrowWise Logo" className="w-8 h-8" />
              <span className="text-lg font-medium">GrowWise</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GrowWise. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
