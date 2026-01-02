'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md z-50"
    >
      <Link href="/" className="flex items-center group">
        <Image
          src="/273DD7C4-67B0-4078-9F89-E58ABE5DEC18.PNG"
          alt="R&D Hoops Logo"
          width={100}
          height={50}
          className="h-auto w-auto object-contain"
          priority
        />
      </Link>
      
      <div className="flex items-center gap-8">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
              className="flex gap-8 text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
              <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
              <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 hover:opacity-50 transition-opacity relative group" 
          aria-label="Menu"
        >
            <motion.div 
              animate={!isOpen ? { rotate: 90 } : { rotate: 0 }}
              className="grid grid-cols-2 gap-[3px] w-4 h-4"
            >
                <motion.div 
                  animate={!isOpen ? { borderRadius: "50%", scale: 0.8 } : { borderRadius: "1px", scale: 1 }}
                  className="bg-black"
                ></motion.div>
                <motion.div 
                  animate={!isOpen ? { borderRadius: "50%", scale: 0.8 } : { borderRadius: "1px", scale: 1 }}
                  className="bg-black"
                ></motion.div>
                <motion.div 
                  animate={!isOpen ? { borderRadius: "50%", scale: 0.8 } : { borderRadius: "1px", scale: 1 }}
                  className="bg-black"
                ></motion.div>
                <motion.div 
                  animate={!isOpen ? { borderRadius: "50%", scale: 0.8 } : { borderRadius: "1px", scale: 1 }}
                  className="bg-black"
                ></motion.div>
            </motion.div>
        </button>
      </div>
    </motion.nav>
  )
}

