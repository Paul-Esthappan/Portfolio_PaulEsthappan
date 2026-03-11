"use client"

import { motion } from "framer-motion"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => window.open(project.url, "_blank")}
            className="glass card-hover p-6 rounded-xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-neutral-400">
              {project.description}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  )
}