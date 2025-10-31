"use client"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Owner() {
  return (
    <section id="owner" className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 text-center md:text-left">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl font-semibold mb-8 relative inline-block"
        >
          For Owner
          <span className="absolute -bottom-1 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-12 h-[2px] bg-white"></span>
        </motion.h2>

        {/* Konten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <p className="mb-4 text-gray-300">
            Here’s what you can expect when you join us.
          </p>

          <ul className="list-disc list-inside text-gray-200 space-y-1 mb-6">
            <li>Improve your workshop</li>
            <li>Increase new customer</li>
            <li>Increase popularity</li>
            <li>Make customer satisfied</li>
          </ul>

          <Link
            href="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Click this link if you interesting to join us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
