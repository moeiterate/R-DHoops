'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-6 bg-white z-50"
    >
      <Link href="/" className="flex items-center group">
        <Image
          src="/273DD7C4-67B0-4078-9F89-E58ABE5DEC18.PNG"
          alt="R&D Hoops Logo"
          width={120}
          height={60}
          className="h-auto w-auto object-contain"
          priority
        />
      </Link>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
          <Link href="/#contact" className="hover:opacity-50 transition-opacity">Book</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          <Link href="/#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
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

