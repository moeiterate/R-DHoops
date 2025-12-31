'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-40"
      >
        <circle
          cx="12"
          cy="12"
          r="10.5"
          stroke="black"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M12 2 C8 2, 5.5 5, 5.5 8.5 C5.5 12, 8 14.5, 12 14.5 C16 14.5, 18.5 12, 18.5 8.5 C18.5 5, 16 2, 12 2 Z"
          stroke="black"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 2 C8 2, 5.5 5, 5.5 8.5 C5.5 12, 8 14.5, 12 14.5 C16 14.5, 18.5 12, 18.5 8.5 C18.5 5, 16 2, 12 2 Z"
          stroke="black"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(120 12 12)"
        />
        <path
          d="M12 2 C8 2, 5.5 5, 5.5 8.5 C5.5 12, 8 14.5, 12 14.5 C16 14.5, 18.5 12, 18.5 8.5 C18.5 5, 16 2, 12 2 Z"
          stroke="black"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(240 12 12)"
        />
      </svg>
    </motion.div>
  );
}

