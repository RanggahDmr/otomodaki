"use client"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-14">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Links */}
        <div className="flex flex-col items-center md:items-start">
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition">
                Help & FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition">
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Social & Contact */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end gap-10">
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-3">Connect Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Image
                  src="/linkedin_icon.png"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-white mb-3">Contact Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="#" aria-label="WhatsApp">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
              <Link href="mailto:otomodaki@gmail.com" aria-label="Email">
                <Image
                  src="/gmail.png"
                  alt="Email"
                  width={28}
                  height={28}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-white">Otomodaki</span>. All rights reserved.
      </div>
    </footer>
  )
}
