import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="border-b border-cyan-400/20 backdrop-blur-md bg-black/30 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          SUMIT BADAKE
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</Link>
          <Link href="/freelance" className="text-gray-300 hover:text-cyan-400 transition-colors">Freelance</Link>
          <Link href="/achievements" className="text-gray-300 hover:text-cyan-400 transition-colors">Achievements</Link>
          <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
          <a href="/resume.pdf" download className="btn-secondary">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}