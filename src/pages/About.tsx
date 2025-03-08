
import Navbar from '../components/Navbar';
import AnimatedBackground from '../components/AnimatedBackground';
import { useAnimateOnScroll } from '../utils/animations';

const About = () => {
  useAnimateOnScroll();
  
  const team = [
    {
      name: "Rustam Azimov",
      role: "Chief Executive Officer",
      bio: "Secondary School Educator Specializing in ICT, STEM, and Entrepreneurship. Co-founder of CanToLearn. Bachelor of Science in Education (EduHK). Master of Education (HKU).",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Sherzodbek Sadiev",
      role: "Chief Financial Officer",
      bio: "Penultimate Finance and Data Analytics student at Hong Kong Baptist University.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Adnan Muhammed",
      role: "Chief Business Officer",
      bio: "Project Manager at SALAM Community. Project Manager at CDF (EEL). Co-founder of CanToLearn. Co-founder of Bridge Impact. Director at All Asia Tech Solutions. Bachelor's in English Language Education (EdUHK).",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Nuraaly Toktanazar Uulu",
      role: "Chief Technology Officer",
      bio: "CEO & Co-Founder of LangCube, OnHire, and Jobutify. Bachelor of Science in Computer Science, City University of Hong Kong.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Argyn Myssanov",
      role: "Chief Financial Officer",
      bio: "HSBC Risk and Compliance Intern. Reinsurance Group of America Internal Audit Intern (Automation). 3rd Year Finance student at Hong Kong Baptist University.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="w-full px-6 mx-auto max-w-5xl text-center mb-20">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About GrowWise
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are AI mental health and finance experts, dedicated to helping you grow wiser in your financial decisions and mental wellbeing.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="w-full px-6 mx-auto max-w-5xl mb-20">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg animate-on-scroll glass-card">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-card-foreground/90">
                  At GrowWise, we believe that mental wellbeing and financial stability are deeply interconnected. Our mission is to provide accessible, personalized AI-powered guidance that addresses both aspects of your life, helping you build a more balanced and secure future.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="w-full px-6 mx-auto max-w-5xl mb-20">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team combines expertise in mental health, finance, education, and technology to build AI assistants that truly understand your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="bg-card rounded-xl p-6 text-center shadow-md hover-lift transition-all duration-300 glass-card">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-card-foreground/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Values Section */}
        <section className="w-full px-6 mx-auto max-w-5xl mb-20">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 animate-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Empathy</h3>
                <p className="text-sm text-muted-foreground">
                  We approach every interaction with compassion and understanding, recognizing the unique challenges each person faces.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize privacy, security, and ethical guidelines in all our AI systems, ensuring your data and wellbeing are protected.
                </p>
              </div>
              
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></path>
                    <path d="M14 10V4a2 2 0 0 0-2-2H8a1 1 0 0 0-1 1v7"></path>
                    <path d="M21 22V7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v15"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in continuous improvement and life-long learning, for our AI systems and for the people we serve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
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

export default About;
