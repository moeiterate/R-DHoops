'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section className="pt-48 md:pt-52 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <motion.div 
        className="relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
          <div className="flex-1">
            <div className="flex flex-col">
              <motion.h2 
                variants={itemVariants}
                className="text-[70px] md:text-[100px] leading-[0.9] font-[700] tracking-[-0.06em] uppercase text-black"
              >
                WELCOME TO
              </motion.h2>
              <motion.h1 
                variants={itemVariants}
                className="text-[160px] md:text-[220px] leading-[0.95] font-[700] tracking-[-0.09em] uppercase text-black mb-0"
              >
                R&D HOOPS
              </motion.h1>
            </div>
            
            {/* Integrated email and description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.42, 0, 0.58, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-12"
            >
              <div className="md:col-span-4">
                <a href="mailto:yusuf@R&D.com" className="flex items-center gap-2 text-sm font-mono uppercase tracking-tighter hover:opacity-50 transition-opacity">
                  yusuf@R&D.com
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </a>
              </div>
              <div className="md:col-span-8">
                <p className="text-[20px] md:text-[24px] leading-[1.3] font-normal tracking-tight max-w-[500px] text-balance">
                  Welcome to the Lab. International professional experience meets cutting-edge development. 
                  Yusuf Shehata brings elite-level detail to players of all levels. Game-real reps. 
                  Repeatable habits. Measurable results.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Image positioned to wrap with text */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 md:mt-0 md:w-[262px] md:flex-shrink-0"
          >
            <div className="relative w-[262px] h-[262px] overflow-hidden rounded-[140px]">
              <Image
                src="/hero-image.png"
                alt="Yusuf Shehata"
                fill
                className="object-cover object-top"
                unoptimized
                sizes="(max-width: 768px) 100vw, 262px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

