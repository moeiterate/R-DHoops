'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-6 bg-white z-50"
    >
      <Link href="/" className="flex flex-col items-start leading-[0.8] group">
        <span className="font-[700] text-[32px] tracking-tighter uppercase">R&D</span>
        <div className="flex items-center">
            <span className="font-[700] text-[28px] tracking-tighter uppercase">HOOPS</span>
        </div>
      </Link>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
          <Link href="#book" className="hover:opacity-50 transition-opacity">Book</Link>
          <Link href="#about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
        </div>
        <button className="p-1 hover:opacity-50 transition-opacity" aria-label="Menu">
            <div className="grid grid-cols-2 gap-[3px] w-5 h-5">
                <div className="bg-black rounded-[1px]"></div>
                <div className="bg-black rounded-[1px]"></div>
                <div className="bg-black rounded-[1px]"></div>
                <div className="bg-black rounded-[1px]"></div>
            </div>
        </button>
      </div>
    </motion.nav>
  )
}

