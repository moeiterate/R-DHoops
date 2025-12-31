'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlayerDevelopment from "@/components/PlayerDevelopment";
import OfferSection from "@/components/OfferSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <PlayerDevelopment />
      <OfferSection />
      <Testimonials />
      <ContactSection />
      
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
