"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Paul Esthappan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-400 mt-4"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-neutral-300"
        >
          I build scalable web applications using React.js, Next.js, TypeScript,
          Node.js and MongoDB.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Resume
          </a>

          <a
            href="#projects"
            className="border border-neutral-700 px-6 py-3 rounded-lg"
          >
            Projects
          </a>
        </div>

      </div>
    </section>
  )
}