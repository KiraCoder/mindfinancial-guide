
import { useEffect, useState } from 'react';

// Animate on scroll
export const useAnimateOnScroll = (
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px"
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin]);
};

// Staggered animation for lists
export const useStaggeredAnimation = (
  itemCount: number,
  baseDelay = 100,
  staggerDelay = 50
) => {
  return Array.from({ length: itemCount }).map(
    (_, index) => `${baseDelay + index * staggerDelay}ms`
  );
};

// Transition between pages
export const usePageTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const startTransition = () => {
    setIsAnimating(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsAnimating(false);
        resolve();
      }, 500);
    });
  };

  return { isAnimating, startTransition };
};
