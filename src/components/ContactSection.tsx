'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailCopy from '@/components/EmailCopy';

export default function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
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
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxlqUyB31kL8TIm_V3IbDHGSMwgk7ajriXInkAX3eOKqUf7nZoBFC5wnvnvKY-oZVJ/exec';
      
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
            <motion.h2 variants={fadeInUp} className="text-[48px] sm:text-[64px] md:text-[12.5vw] lg:text-[7vw] leading-[0.8] font-[600] tracking-[-0.04em] uppercase mb-12 break-words">
            <span className="block">GET IN</span>
            <span className="block">CONTACT</span>
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="hidden lg:flex mt-auto"
            >
                <EmailCopy 
                  email="yusufsahs14@gmail.com" 
                  className="text-xl font-medium hover:underline"
                  iconSize={20}
                />
            </motion.div>
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
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex lg:hidden mt-8"
        >
            <EmailCopy 
              email="yusufsahs14@gmail.com" 
              className="text-xl font-medium hover:underline"
              iconSize={20}
            />
        </motion.div>
      </div>
    </section>
  )
}

