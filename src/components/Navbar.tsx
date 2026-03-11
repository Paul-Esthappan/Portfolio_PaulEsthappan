"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur border-b border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">

        {/* Logo */}
              <h1 className="font-semibold text-lg tracking-wide">
          Paul Esthappan
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

          <a
            href="https://github.com/Paul-Esthappan"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

        </div>

        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm">

            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>

            <a
              href="https://github.com/Paul-Esthappan"
              target="_blank"
            >
              GitHub
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}