
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="mx-auto content-transition py-4 bg-white dark:bg-black border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-foreground hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/7848833e-f764-4a2e-8ff8-9c6a213e6aff.png" 
              alt="GrowWise Logo" 
              className="w-8 h-8" 
            />
            <span className="text-xl font-medium">GrowWise</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-foreground/80 hover:text-foreground hover:underline underline-offset-4 transition-all">
              Home
            </Link>
            <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground hover:underline underline-offset-4 transition-all">
              About
            </Link>
          </nav>
          
          <div>
            <Link 
              to="/chat/financial-expert"
              className="inline-flex items-center justify-center h-9 rounded-full px-4 py-2 text-sm font-medium bg-primary text-white shadow hover:bg-primary/90 transition-colors"
            >
              Try Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
