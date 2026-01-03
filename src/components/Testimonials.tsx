'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto bg-white">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-[40px] md:text-[48px] font-medium tracking-tight mb-16 uppercase"
      >
        Testimonials
      </motion.h2>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
      >
        {/* Testimonial 1 - Henrik Rodl */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <div className="aspect-square relative overflow-hidden mb-4 rounded-sm">
            <Image
              src="/88e1ea6d-0943-4a3b-bb75-97aac55cb5cb.jpeg.avif"
              alt="Henrik Rödl"
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
          <div>
            <h3 className="text-[56px] md:text-[64px] font-normal mb-4 leading-tight">Henrik Rödl</h3>
            <p className="text-[22px] md:text-[24px] leading-[1.3] font-normal tracking-normal text-gray-700">
              Few players I have been around ever worked as hard as him. Extra work he was there, professional attitude that is him. A great teammate but also very coachable and self motivated to excel in all aspects of the game! Yusuf Shehata is an absolute joy to be around and to work with! I wish him nothing but the best for his next steps in his career, knowing that he will do well no matter what he chooses to do.
            </p>
          </div>
        </motion.div>

        {/* Testimonial 2 - Image + Anas Osama */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
           <div className="aspect-square bg-gray-100 relative overflow-hidden mb-4 rounded-sm">
              <Image
                src="/IMG_3528.JPG"
                alt="Anas Osama"
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
           </div>
           <div>
            <h3 className="text-[56px] md:text-[64px] font-normal mb-4 leading-tight">Anas Osama</h3>
            <p className="text-[22px] md:text-[24px] leading-[1.3] font-normal tracking-normal text-gray-700">
              Shehata was one of the funniest, most motivated, and hardest-working teammates I've ever had. His talent on the court was only matched by how good of a person he is off it. I have no doubt he'll be an amazing trainer and inspire everyone.
            </p>
           </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

