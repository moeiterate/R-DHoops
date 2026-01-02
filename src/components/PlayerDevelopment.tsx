'use client';

import { motion } from 'framer-motion';

export default function PlayerDevelopment() {
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto border-t border-black/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mb-20 pt-12"
      >
        <h2 className="text-[40px] md:text-[48px] font-medium tracking-tight uppercase">
          player development
        </h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-5xl"
      >
        <div className="space-y-12">
          <motion.p 
            variants={fadeInUp}
            className="text-[32px] md:text-[48px] leading-[1.1] font-medium tracking-[-0.04em]"
          >
            Player development isn't about doing more drills. It's about doing the right work, the right way.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.p 
              variants={fadeInUp}
              className="text-[18px] md:text-[20px] leading-[1.5] text-gray-600"
            >
              My approach to development is built on years of high-level playing experience and understanding what actually translates to real games. Every session is intentional, focusing on skill development, basketball IQ, confidence, and decision-making under pressure.
            </motion.p>

            <div className="space-y-8">
              <motion.p 
                variants={fadeInUp}
                className="text-[18px] md:text-[20px] leading-[1.5] text-gray-600"
              >
                I train players to move with purpose, read the game, and trust their work when it matters most. We build habits that carry over from training to competition, not just highlight moves.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-[18px] md:text-[20px] leading-[1.5] text-gray-600"
              >
                Development takes time, consistency, and accountability. I'm committed to helping players improve step by step, with a focus on long-term growth and real results.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

