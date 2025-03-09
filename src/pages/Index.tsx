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
        
        {/* Problem Section */}
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
        
        {/* Solution Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Innovative Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              GrowWise combines AI technology with expert guidance to address both financial literacy and mental wellness challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
            {/* Financial Literacy Solutions */}
            <div className="bg-secondary/50 rounded-xl p-8 backdrop-blur-sm border border-border/50 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-primary">AI-Driven Financial Education</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Interactive lessons on saving, budgeting, investing, and managing debt, tailored to Hong Kong's financial landscape.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Life-scenario simulations that let students practice real-world financial decisions with adaptive feedback.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Personalized recommendations for local bank accounts, scholarships, and investment tools.</p>
                </li>
              </ul>
            </div>
            
            {/* Mental Health Solutions */}
            <div className="bg-secondary/50 rounded-xl p-8 backdrop-blur-sm border border-border/50 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-primary">Mental Wellness Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">AI-driven stress monitoring with personalized coping strategies and mindfulness exercises.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Adaptive learning paths that identify knowledge gaps and suggest targeted resources.</p>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm">Gamified learning experience with rewards and avatars that evolve with student achievements.</p>
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
        
        {/* How Our AI Advisors Are Trained */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold tracking-tight mb-4">How Our AI Advisors Are Trained</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AI advisors combine advanced technology with human expertise to deliver guidance you can trust.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert-Curated Content</h3>
                <p className="text-muted-foreground">
                  Our AI is trained on content developed by certified financial advisors and mental health professionals with years of experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Human Oversight</h3>
                <p className="text-muted-foreground">
                  Our team of experts regularly reviews AI interactions and provides additional guidance for complex cases that require human intuition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M4.93 4.93l2.83 2.83"></path>
                    <path d="M16.24 16.24l2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="M4.93 19.07l2.83-2.83"></path>
                    <path d="M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Our AI systems continuously improve based on user interactions, staying updated with the latest financial regulations and mental health research.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certification Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-on-scroll">
            <div>
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">GrowWise Certification</h3>
                <p className="mb-4">After completing training sessions with our AI advisors, students receive the official GrowWise Certificate, demonstrating their competency in financial literacy and mental wellness.</p>
                <p className="mb-4">This certification serves as proof of practical knowledge and skills that students can include in their portfolios or resumes.</p>
                <div className="flex mt-6">
                  <Link 
                    to="/chat/financial-expert" 
                    className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
                  >
                    Start Learning Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-40"></div>
                <div className="relative bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <img 
                        src="/lovable-uploads/7848833e-f764-4a2e-8ff8-9c6a213e6aff.png" 
                        alt="GrowWise Logo" 
                        className="w-16 h-16" 
                      />
                    </div>
                    <h4 className="text-xl font-bold uppercase">Certificate of Completion</h4>
                    <p className="text-sm text-muted-foreground mb-4">This certifies that</p>
                    <p className="text-xl font-semibold mb-2">Student Name</p>
                    <p className="text-sm text-muted-foreground mb-6">has successfully completed the</p>
                    <p className="text-lg font-bold mb-1">Financial Literacy & Mental Wellness</p>
                    <p className="text-lg font-bold mb-6">Training Program</p>
                    <div className="text-sm text-muted-foreground">
                      <p>Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* School Subscription Plans */}
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
        
        {/* Book a Demo Section */}
        <section className="w-full px-6 mx-auto max-w-7xl mb-20">
          <div className="bg-secondary/80 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Reserve Your School's Spot</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to bring GrowWise to your school? Fill out this form to reserve your spot and schedule a personalized demo with our team.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="schoolName" className="block text-sm font-medium mb-1">
                      School Name
                    </label>
                    <input
                      id="schoolName"
                      type="text"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Enter your school name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-1">
                      Contact Person
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-1">
                      Position
                    </label>
                    <input
                      id="position"
                      type="text"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="e.g., Principal, IT Director, Teacher"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="studentCount" className="block text-sm font-medium mb-1">
                      Number of Students
                    </label>
                    <select
                      id="studentCount"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select student count</option>
                      <option value="<500">Less than 500</option>
                      <option value="500-1000">500 - 1,000</option>
                      <option value="1000-2000">1,000 - 2,000</option>
                      <option value=">2000">More than 2,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm min-h-[100px]"
                      placeholder="Tell us about your school's specific needs or questions"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Request a Demo
                  </button>
                </form>
              </div>
              
              <div className="bg-gradient-to-r from-primary to-blue-600 p-8 md:p-12 flex items-center justify-center">
                <div className="text-white max-w-md">
                  <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>A personalized demo of GrowWise tailored to your school's needs</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Detailed information about our subscription packages</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Answers to your questions about implementation and training</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Option to schedule a free pilot program for your school</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-4 bg-white/10 rounded-lg">
                    <p className="italic text-white/90">
                      "GrowWise has transformed how we teach financial literacy and support student mental health. The AI advisors provide personalized guidance that our students truly connect with."
                    </p>
                    <p className="mt-2 font-semibold">— School Principal, Hong Kong</p>
                  </div>
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
