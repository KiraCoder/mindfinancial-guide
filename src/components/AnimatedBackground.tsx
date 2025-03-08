
import { useEffect, useState, useRef } from 'react';

interface GradientBlur {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
  direction: { x: number; y: number };
}

const AnimatedBackground = () => {
  const [gradients, setGradients] = useState<GradientBlur[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = [
      'rgba(59, 130, 246, 0.5)', // blue
      'rgba(99, 102, 241, 0.4)', // indigo
      'rgba(168, 85, 247, 0.3)', // purple
      'rgba(236, 72, 153, 0.2)', // pink
    ];
    
    const createGradients = () => {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      const newGradients: GradientBlur[] = [];
      
      for (let i = 0; i < 5; i++) {
        newGradients.push({
          id: i,
          x: Math.random() * containerWidth,
          y: Math.random() * containerHeight,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 100 + Math.random() * 150,
          speed: 0.2 + Math.random() * 0.3,
          direction: {
            x: Math.random() > 0.5 ? 1 : -1,
            y: Math.random() > 0.5 ? 1 : -1,
          },
        });
      }
      
      setGradients(newGradients);
    };
    
    createGradients();
    
    const handleResize = () => {
      createGradients();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!containerRef.current || gradients.length === 0) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const animate = () => {
      setGradients(prevGradients => {
        return prevGradients.map(gradient => {
          let newX = gradient.x + gradient.speed * gradient.direction.x;
          let newY = gradient.y + gradient.speed * gradient.direction.y;
          
          // Bounce off edges
          if (newX <= 0 || newX >= containerWidth - gradient.size) {
            gradient.direction.x *= -1;
            newX = Math.max(0, Math.min(newX, containerWidth - gradient.size));
          }
          
          if (newY <= 0 || newY >= containerHeight - gradient.size) {
            gradient.direction.y *= -1;
            newY = Math.max(0, Math.min(newY, containerHeight - gradient.size));
          }
          
          return {
            ...gradient,
            x: newX,
            y: newY,
          };
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gradients]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
      <div className="absolute inset-0 bg-grid opacity-70"></div>
      {gradients.map(gradient => (
        <div
          key={gradient.id}
          className="gradient-blur"
          style={{
            left: `${gradient.x}px`,
            top: `${gradient.y}px`,
            width: `${gradient.size}px`,
            height: `${gradient.size}px`,
            background: gradient.color,
            transition: 'left 4s ease-out, top 4s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
