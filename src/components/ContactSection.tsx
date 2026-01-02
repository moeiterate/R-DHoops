'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      // This will be the Google Apps Script URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDfpcrv-0DBTVq5ADupKAAo4mDX65gChMt37GiQh-wnZZBaXIuEDmI-o8Y1m1jgaRM/exec';
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
      });
      setStatus('success');
      e.target.reset();
    } catch (error) {
      setStatus('error');
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
            <span className="block">GET IN</span>
            <span className="block">CONTACT</span>
            </motion.h2>
            
            <motion.a 
              variants={fadeInUp}
              href="mailto:yusufsahs14@gmail.com" 
              className="hidden lg:flex items-center gap-2 text-xl font-medium hover:underline mt-auto"
            >
                yusufsahs14@gmail.com
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </motion.a>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-4"
        >
            <motion.input 
                variants={fadeInUp}
                required
                name="name"
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
            />
            <motion.input 
                variants={fadeInUp}
                required
                name="email"
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
            />
            <motion.select
                variants={fadeInUp}
                required
                name="reason"
                defaultValue=""
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black text-gray-700 appearance-none cursor-pointer"
            >
                <option value="" disabled>Reason for Inquiry</option>
                <option value="Training Session">Schedule a Session</option>
                <option value="Elite Consulting">Elite Consulting</option>
                <option value="Media/Collab">Media & Collaboration</option>
                <option value="Other">Other</option>
            </motion.select>
            <motion.textarea 
                variants={fadeInUp}
                required
                name="message"
                placeholder="Tell me more..." 
                rows={4}
                className="w-full bg-gray-50 p-6 text-lg outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 resize-none"
            ></motion.textarea>
            
            <motion.button 
              variants={fadeInUp}
              disabled={status === 'sending'}
              className="w-full bg-black text-white py-6 text-lg font-medium hover:opacity-90 transition-opacity uppercase flex items-center justify-center gap-3 disabled:bg-gray-400"
            >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send It!'}
            </motion.button>
            {status === 'success' && (
              <p className="text-green-600 font-medium text-center">Inquiry received. We'll be in touch soon.</p>
            )}
        </motion.form>
        
        <motion.a 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          href="mailto:yusufsahs14@gmail.com" 
          className="flex lg:hidden items-center gap-2 text-xl font-medium hover:underline mt-8"
        >
            yusufsahs14@gmail.com
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
        </motion.a>
      </div>
    </section>
  )
}

