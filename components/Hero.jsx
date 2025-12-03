import Link from 'next/link'

export default function Hero(){
  return (
    <section className="hero-gradient py-20 rounded-3xl mb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI & Data Science Engineer
              </span>
              <br />
              <span className="text-white">Machine Learning Developer</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Building intelligent systems, scalable cloud solutions, and real-world ML applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/resume.pdf" download className="btn-primary">
                Download Resume
              </a>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
              <Link href="/freelance" className="btn-secondary">
                Hire Me
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-3xl absolute -top-10 -left-10"></div>
              <div className="glass-card p-8 backdrop-blur-xl rounded-2xl border-cyan-400/30 relative z-10 float-animation">
                <div className="flex justify-center mb-6">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Sumit Badake" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-white">SUMIT BADAKE</h3>
                <p className="text-cyan-400 text-center">AI/ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}