'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="contact" className="pt-48 md:pt-52 pb-32 px-4 md:px-8 max-w-[1400px] mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col justify-between"
        >
            <motion.h2 variants={fadeInUp} className="text-[12.5vw] lg:text-[7vw] leading-[0.8] font-[600] tracking-[-0.04em] uppercase mb-12">
            <span className="block">SCHEDULE</span>
            <span className="block">A SESSION</span>
            </motion.h2>
            
            <motion.a 
              variants={fadeInUp}
              href="mailto:yusuf@r&d.com" 
              className="hidden lg:flex items-center gap-2 text-xl font-medium hover:underline mt-auto"
            >
                yusuf@r&d.com
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </motion.a>
        </motion.div>

        <motion.form 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
            <motion.input 
                variants={fadeInUp}
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
            />
            <motion.input 
                variants={fadeInUp}
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
            />
            <motion.textarea 
                variants={fadeInUp}
                placeholder="Tell me about yourself" 
                rows={6}
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 resize-none"
            ></motion.textarea>
            
            <motion.button 
              variants={fadeInUp}
              className="w-full bg-black text-white py-6 text-lg font-medium hover:opacity-90 transition-opacity uppercase"
            >
                Send It!
            </motion.button>
        </motion.form>
        
        <motion.a 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          href="mailto:yusuf@r&d.com" 
          className="flex lg:hidden items-center gap-2 text-xl font-medium hover:underline mt-8"
        >
            yusuf@r&d.com
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        </motion.a>
      </div>
    </section>
  )
}

