"use client"
import { motion } from "framer-motion"

export default function Workflow() {
  const userSteps = [
    "Open Otomodaki with your browser",
    "Find workshop in your location",
    "Make a deal with owner",
    "Done",
  ]

  const ownerSteps = [
    "Open Otomodaki with your browser",
    "Scroll down the landing page",
    "Register your workshop",
    "Done",
  ]

  return (
    <section id="workflow" className="bg-black text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-semibold mb-12 relative inline-block"
        >
          Workflow
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-white"></span>
        </motion.h2>

        {/* Label kolom */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 md:gap-24">
          {/* USER FLOW */}
          <div>
            <h3 className="text-lg font-semibold text-red-500 mb-6">For Users</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              {userSteps.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex flex-col items-center max-w-[180px]"
                >
                  {/* Lingkaran nomor */}
                  <div className="bg-[#6e0b0b] w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-[0_0_10px_rgba(255,0,0,0.5)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* OWNER FLOW */}
          <div>
            <h3 className="text-lg font-semibold text-green-500 mb-6">For Owners</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
              {ownerSteps.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative flex flex-col items-center max-w-[180px]"
                >
                  {/* Lingkaran nomor */}
                  <div className="bg-[#058805] w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-[0_0_10px_rgba(5,136,5,0.6)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                 
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
