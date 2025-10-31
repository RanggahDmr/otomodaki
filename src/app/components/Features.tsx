"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: "/thunder.svg",
      text: "give recommendation workshop with your Location",
    },
    {
      icon: "/chat.svg",
      text: "directly connected with the workshop owner",
    },
    {
      icon: "/date.svg",
      text: "provide vehicle maintenance reminders",
    },
  ]

  return (
    <section
      id="features"
      className="relative bg-[url('/bg2.jpg')] bg-cover bg-center py-40 text-white"
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl font-semibold mb-10 inline-block relative"
        >
          Features
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white"></span>
        </motion.h2>

        {/* Grid features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-25">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 p-10 rounded-lg flex flex-col items-center text-center transition"
            >
              <Image
                src={f.icon}
                alt={f.text}
                width={50}
                height={50}
                className="mb-4"
              />
              <p className="text-sm md:text-base text-gray-200">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
