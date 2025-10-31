"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="bg-[#5f0a0a] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/cards.jpg" 
            alt="Otomodaki Workshop"
            width={550}
            height={350}
            className="rounded-lg object-cover shadow-lg"
          />
        </motion.div>

        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 relative inline-block">
            About Us
            <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-white"></span>
          </h2>

          <p className="text-gray-200 leading-relaxed text-sm md:text-base">
            Otomodaki is an innovative platform that helps users easily find
            trusted car repair shops quickly and conveniently. Through
            Otomodaki, customers can search for nearby workshops based on their
            real-time location. Every listed workshop has been verified to
            ensure quality and reliability. In addition, Otomodaki provides
            transparent service pricing, allowing users to compare and choose
            wisely. <span className="block mt-2">
            Otomodaki is the best solution for all your car maintenance and
            repair needs.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
