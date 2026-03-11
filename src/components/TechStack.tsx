export default function TechStack() {
  const stack = [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Docker",
    "Cloudflare"
  ]

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {stack.map((tech) => (
          <div
            key={tech}
            className="border border-neutral-800 px-4 py-2 rounded-lg"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  )
}