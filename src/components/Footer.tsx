export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">

        {/* Left side */}
        <p>
          © {new Date().getFullYear()} Paul Esthappan
        </p>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">

          <a
            href="https://github.com/Paul-Esthappan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/paul-esthappan-706b44141"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:paulesthappan@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  )
}