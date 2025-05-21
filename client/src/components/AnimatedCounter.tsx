import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '',
  className = 'text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4'
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Handle animation using requestAnimationFrame for smooth counting
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    
    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        // Calculate current count based on progress
        const progressRatio = Math.min(progress / duration, 1);
        // Use easeOutCubic easing function for smoother counter animation
        const easing = 1 - Math.pow(1 - progressRatio, 3);
        const currentCount = Math.floor(easing * end);
        
        // Update state only if value has changed
        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }
        
        // Continue animation until completion
        if (progress < duration) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Ensure we end on the exact target value
          if (countRef.current !== end) {
            countRef.current = end;
            setCount(end);
          }
        }
      };
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, end, duration]);
  
  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};

export default AnimatedCounter; 