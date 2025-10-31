"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { supabase } from "../lib/supabaseClient"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    workshop: "",
    email: "",
    address: "",
    phone: "",
    mapLink: "",
    file: null as File | null,
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as any
    if (files) {
      setFormData({ ...formData, [name]: files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  // helper untuk ambil koordinat dari link Google Maps
  const extractCoordinates = (url: string) => {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/ // format @lat,lon
    const qRegex = /[?&]q=(-?\d+\.\d+),(-?\d+\.\d+)/ // format q=lat,lon
    const placeRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/ // format !3dLAT!4dLON
    let match = url.match(regex) || url.match(qRegex) || url.match(placeRegex)
    if (match) {
      const lat = parseFloat(match[1])
      const lon = parseFloat(match[2])
      return { lat, lon }
    }
    return { lat: null, lon: null }
  }

  // resolve short link maps.app.goo.gl → jadi link asli (dengan koordinat)
  const resolveShortLink = async (shortUrl: string) => {
    try {
      const res = await fetch(shortUrl, { method: "HEAD", redirect: "follow" })
      const finalUrl = res.url
      return finalUrl
    } catch (err) {
      console.error("Error resolving short link:", err)
      return null
    }
  }

  const validateForm = () => {
    const { workshop, email, address, phone, mapLink } = formData

    if (!workshop || !email || !address || !phone || !mapLink) {
      alert("⚠️ Please fill in all required fields.")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.")
      return false
    }

    const phoneRegex = /^[0-9+() -]{6,15}$/
    if (!phoneRegex.test(phone)) {
      alert("⚠️ Please enter a valid phone number.")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setLoading(true)

    try {
      // Upload foto
      let photoUrl = ""
      if (formData.file) {
        const { data, error } = await supabase.storage
          .from("workshop-photo")
          .upload(`photos/${Date.now()}_${formData.file.name}`, formData.file)

        if (error) throw error

        photoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/workshop-photo/${data.path}`
      }

      // Handle link maps
      let mapUrl = formData.mapLink.trim()
      if (mapUrl.includes("maps.app.goo.gl")) {
        const resolved = await resolveShortLink(mapUrl)
        if (resolved) mapUrl = resolved
        else throw new Error("Failed to resolve short Google Maps link.")
      }

      // Ambil koordinat
      const { lat, lon } = extractCoordinates(mapUrl)
      if (lat === null || lon === null)
        throw new Error(
          "Invalid Google Maps link. Please use 'Share → Copy link' format."
        )

      // Insert ke Supabase
      const { error } = await supabase.from("owners").insert([
        {
          workshop_name: formData.workshop,
          email: formData.email,
          address: formData.address,
          phone: formData.phone,
          photo_url: photoUrl,
          map_link: mapUrl,
          latitude: lat,
          longitude: lon,
        },
      ])

      if (error) throw error

      alert("✅ Workshop registered successfully!")
      setFormData({
        workshop: "",
        email: "",
        address: "",
        phone: "",
        mapLink: "",
        file: null,
      })
    } catch (err: any) {
      console.error("❌ Error:", err.message)
      alert(`❌ ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-[90%] max-w-md bg-black/60 backdrop-blur-md rounded-xl p-8 text-white shadow-[0_0_25px_rgba(255,0,0,0.3)]"
      >
        <Link href="/" aria-label="Close">
          <motion.span
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 12px rgba(255,0,0,0.8)",
              color: "#ff4444",
            }}
            className="absolute top-3 right-4 text-gray-300 text-2xl font-bold cursor-pointer select-none"
          >
            ×
          </motion.span>
        </Link>

        <h1 className="text-center text-xl font-bold text-red-500 mb-6 tracking-wide">
          REGISTER
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="workshop"
            placeholder="Workshop name"
            value={formData.workshop}
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
            required
          />

          {/* ✅ Input link Google Maps */}
          <input
            type="url"
            name="mapLink"
            placeholder="Google Maps Link (short or full)"
            value={formData.mapLink}
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 focus:ring-2 focus:ring-red-500 outline-none placeholder-gray-400"
            required
          />
{/* 
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleChange}
            className="px-4 py-2 rounded-full bg-gray-800/60 file:mr-4 file:rounded-full file:bg-red-600 file:text-white file:px-3 file:py-1 hover:file:bg-red-700"
          /> */}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255,0,0,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            type="submit"
            className={`mt-4 font-semibold rounded-full py-2 transition-all duration-300 ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {loading ? "Processing..." : "Register"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
