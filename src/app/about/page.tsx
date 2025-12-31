'use client';

import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
    <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 md:pt-52 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-[174px] md:text-[220px] leading-[1] font-[600] tracking-[-0.09em] uppercase text-black text-center"
          >
            THE
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            className="text-[174px] md:text-[220px] leading-[1] font-[600] tracking-[-0.09em] uppercase text-black text-center"
          >
            JOURNEY
          </motion.h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex justify-between items-center mb-16 border-t pt-8 border-gray-200"
          >
            <h2 className="text-[30px] md:text-[48px] font-medium tracking-tight uppercase">about.</h2>
            <Link 
              href="/#contact"
              className="px-6 py-2 bg-gray-100 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors uppercase"
            >
              Book Now
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <p className="text-[28px] md:text-[32px] leading-[1.4] font-normal tracking-normal max-w-6xl mb-8">
              At R&D we teach the game the way it's meant to be played, through real experience at the highest levels.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16"
          >
            <div className="relative aspect-[2/3] bg-gray-100 overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="Yusuf Shehata"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <p className="text-[20px] md:text-[24px] leading-[1.5] font-normal tracking-normal text-gray-700">
                Yusuf played professionally in the Egypt Super League, competed in the Basketball Africa League and AfroBasket, and represented the Egyptian National Team against elite international competition. Over his career, he won multiple championships and developed a deep understanding of what it takes to perform, adapt, and stay consistent in demanding environments.
              </p>
              <p className="text-[20px] md:text-[24px] leading-[1.5] font-normal tracking-normal text-gray-700">
                That experience is the foundation of how we train.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 mb-24"
          >
            <p className="text-[20px] md:text-[24px] leading-[1.5] font-normal tracking-normal text-gray-700 max-w-5xl">
              We focus on skill development, basketball IQ, and confidence that translates directly to live competition. Every drill has a purpose. Every session is intentional. We teach players how to read the game, make the right decisions, and trust their work when it matters most.
            </p>
            <p className="text-[20px] md:text-[24px] leading-[1.5] font-normal tracking-normal text-gray-700 max-w-5xl">
              Our goal is simple: develop players the right way. No shortcuts. Just disciplined work and real growth.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[30px] md:text-[48px] font-medium tracking-tight mb-16 uppercase"
          >
            transition into high school, d3 to d1, etc.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="relative aspect-[1.14] bg-gray-100 overflow-hidden">
              <Image
                src="/Screenshot 2025-12-31 at 2.04.26 PM.png"
                alt="Training"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[1.03] bg-gray-100 overflow-hidden">
              <Image
                src="/Screenshot 2025-12-31 at 11.23.06 AM.png"
                alt="Training"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-12 text-center text-[10px] font-mono uppercase tracking-widest text-gray-400"
      >
        &copy; {new Date().getFullYear()} R&D Hoops — Built with Precision
      </motion.footer>
    </main>
  );
}

