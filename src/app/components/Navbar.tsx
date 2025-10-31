"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Workflow", href: "#workflow" },
    { name: "Owner", href: "#owner" },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm text-white shadow-lg z-50"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-widest">
          Otomodaki
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="hover:text-red-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black border-t border-white/10 flex flex-col items-center gap-4 py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="hover:text-red-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
