'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    { question: "QUESTION", answer: "Answer goes here." },
    { question: "QUESTION", answer: "Answer goes here." },
    { question: "QUESTION", answer: "Answer goes here." },
    { question: "QUESTION", answer: "Answer goes here." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-xl font-medium tracking-tight mb-16 uppercase"
      >
        FAQs.
      </motion.h2>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col border-t border-gray-100"
      >
        {faqs.map((faq, index) => (
            <motion.div key={index} variants={fadeInUp} className="border-b border-gray-100">
                <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors px-4"
                >
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{faq.question}</span>
                    <motion.span 
                      animate={{ rotate: openIndex === index ? 135 : 0 }}
                      className="text-xl font-light"
                    >
                      +
                    </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 px-4 text-lg text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                  )}
                </AnimatePresence>
            </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

