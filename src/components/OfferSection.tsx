'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OfferSection() {
  const offers = [
    { title: "Sharp Shooter", image: "/Screenshot 2025-12-31 at 11.36.37 AM.png" },
    { title: "Handles", image: "/Screenshot 2025-12-31 at 11.27.44 AM.png" },
    { title: "Defense", image: "/Screenshot 2025-12-31 at 11.28.46 AM.png" },
    { title: "Touch", image: "/Screenshot 2025-12-31 at 11.39.43 AM.png" },
  ];

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
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* What We Offer Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex justify-between items-center mb-16 border-t pt-8 border-gray-200"
      >
        <h2 className="text-[40px] md:text-[48px] font-medium tracking-tight uppercase">what we offer</h2>
        <button className="px-6 py-2 bg-gray-100 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors uppercase">
          Book Now
        </button>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mb-24"
      >
        <p className="text-[28px] md:text-[32px] leading-[1.4] font-normal tracking-normal max-w-6xl">
          I offer structured training programs designed for players at every level, 
          from youth development to elite competition. Each session combines systematic 
          skill building with game-application drills that translate directly to court performance.
        </p>
      </motion.div>

      {/* Image and Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative aspect-square bg-gray-100 max-w-[400px]"
        >
          <Image
            src="/Screenshot 2025-12-31 at 2.04.26 PM.png"
            alt="Training session"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6 md:col-span-2"
        >
          {[
            { tag: "1:1 SKILLS INTENSIVE", text: "60-minute focused sessions targeting specific skill gaps. Film breakdown, corrective work, and measurable progress tracking." },
            { tag: "EXTENDED DEVELOPMENT", text: "90-minute sessions combining technical work with live-play scenarios. Advanced reads, decision-making under pressure." },
            { tag: "SYSTEMATIC PROGRESSION", text: "4-session packages with structured curriculum. Build foundational habits, then layer complexity. Includes take-home development notes." }
          ].map((item, i) => (
            <motion.p key={i} variants={fadeInUp} className="text-base leading-relaxed text-gray-600">
              <strong className="font-bold text-black">{item.tag} </strong>
              {item.text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Results Won't Vary Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex justify-between items-center mb-16"
      >
        <h2 className="text-[40px] md:text-[48px] font-medium tracking-tight uppercase">results won't vary</h2>
        <button className="px-6 py-2 bg-gray-100 text-sm font-bold tracking-wide hover:bg-gray-200 transition-colors uppercase">
          Book Now
        </button>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {offers.map((offer, index) => (
          <motion.div 
            key={index} 
            variants={fadeInUp}
            className="relative aspect-[3/4] group overflow-hidden bg-gray-100"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-end p-4">
               <span className="text-white text-xl md:text-2xl font-bold tracking-tighter drop-shadow-md z-10 uppercase">
                 {offer.title}
               </span>
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
