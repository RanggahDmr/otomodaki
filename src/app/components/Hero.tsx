"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const handleOnclick = () => {
    window.open("https://t.me/OtomodakiBot", "_blank")
  }
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center justify-start bg-[url('/bg.jpg')] bg-cover bg-center text-white overflow-hidden"
    >
      {/* Overlay gelap */}
      <div className=" absolute inset-0 bg-black/60" />

      {/* Cahaya merah lembut */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-red-600/40 blur-[120px] rounded-full"
      />

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl px-8"
      >
        {/* Gambar title Otomodaki */}
        <div className="w-[280px] md:w-[380px] mb-6 ml-5">
          <Image
            src="/otomodaki.png" 
            alt="Otomodaki Title"
            width={380}
            height={120}
            className="object-contain"
            priority
          />
        </div>

        {/* Subteks dan tombol */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed pl-10"
        >
          Easy Service. Honest Price. Trusted. <br />
          Find the Nearest Workshop for your Car.
        </motion.p>

        <motion.button
          onClick={handleOnclick}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255,0,0,0.7)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 ml-10 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_10px_rgba(255,0,0,0.5)]"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  )
}
