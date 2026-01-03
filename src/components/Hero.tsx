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
        ease: "easeOut",
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-8">
            <div className="flex flex-col">
              <motion.h2 
                variants={itemVariants}
                className="text-[90px] md:text-[120px] leading-[0.85] font-[700] tracking-[-0.05em] uppercase text-black mb-2"
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
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="mt-20 max-w-[800px]"
            >
              <div className="mb-6">
                <a href="mailto:yusufsahs14@gmail.com" className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">
                  yusufsahs14@gmail.com
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </a>
              </div>
              <div>
                <p className="text-[32px] md:text-[44px] leading-[1.1] font-medium tracking-[-0.04em] text-balance">
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
            className="mt-12 md:mt-0 md:col-span-4 flex justify-end"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-[140px]">
              <Image
                src="/hero-image.png"
                alt="Yusuf Shehata"
                fill
                className="object-cover object-top"
                unoptimized
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

