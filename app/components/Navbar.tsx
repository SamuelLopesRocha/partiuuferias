"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu } from "react-icons/fi"

const NAV_LINKS = [
  { label: "Início", href: "#home" },
  { label: "Viagens", href: "#viagens" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Barra dourada */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60]
        bg-gradient-to-r from-[#0F1F4B] via-amber-500 to-[#0F1F4B]" />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full z-50 select-none"
      >
        <div
          className={`transition-all duration-500 ${scrolled
            ? "bg-[#0F1F4B]/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30"
            : "bg-[#0F1F4B]/80 backdrop-blur-md border-b border-white/10"
            }`}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-[70px] text-white">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-lg">
                ✈️
              </div>

              <div className="leading-tight">
                <p className="text-[17px] font-bold tracking-wide">
                  Partiuuferias
                </p>
                <span className="text-[10px] text-amber-400 uppercase tracking-[2px] font-semibold">
                  Consultor de Viagens
                </span>
              </div>
            </a>

            {/* DESKTOP */}
            <nav className="hidden md:flex items-center gap-2">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold
                  text-white/80 hover:text-white
                  hover:bg-white/10 transition"
                >
                  {link.label}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contato"
                className="ml-2 px-5 py-2.5 rounded-lg text-sm font-bold
                bg-amber-500 text-[#0F1F4B]
                hover:bg-amber-400 hover:-translate-y-0.5
                shadow-md shadow-amber-500/30
                transition-all"
              >
                Fale Comigo
              </a>
            </nav>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center
              rounded-lg hover:bg-white/20 transition"
            >
              <div className="relative w-5 h-5">
                <FiMenu size={28} />
              </div>
            </button>

          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 right-0 z-40
            bg-[#0F1F4B] border-t border-white/10
            flex flex-col px-6 py-4 gap-2 md:hidden"
          >
            {NAV_LINKS.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-white/80 font-semibold
                hover:text-white hover:bg-white/10 transition"
              >
                {link.label}
              </a>
            ))}

            {/* CTA MOBILE */}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-center font-bold
              bg-amber-500 text-[#0F1F4B]
              hover:bg-amber-400 transition"
            >
              ✈ Fale Comigo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}