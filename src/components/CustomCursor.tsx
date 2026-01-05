'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

    if (checkTouchDevice()) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: mousePosition.x,
        y: mousePosition.y,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0 }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-70"
      >
        {/* The Ball */}
        <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="1.2" />
        
        {/* Horizontal Seam */}
        <path d="M 1 12 H 23" stroke="black" strokeWidth="1" />
        
        {/* Vertical Seam */}
        <path d="M 12 1 V 23" stroke="black" strokeWidth="1" />
        
        {/* Left Curve */}
        <path 
          d="M 5 4.5 C 9 8, 9 16, 5 19.5" 
          stroke="black" 
          strokeWidth="1" 
          strokeLinecap="round" 
        />
        
        {/* Right Curve */}
        <path 
          d="M 19 4.5 C 15 8, 15 16, 19 19.5" 
          stroke="black" 
          strokeWidth="1" 
          strokeLinecap="round" 
        />
      </svg>
    </motion.div>
  );
}

