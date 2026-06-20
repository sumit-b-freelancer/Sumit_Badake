import Link from 'next/link'

export default function Freelance() {
  const projectPackages = [
    {
      title: "Basic College Project",
      price: "₹3,000 - ₹5,000",
      delivery: "1-2 weeks",
      features: [
        "Simple machine learning model",
        "Data preprocessing and analysis",
        "Basic visualization",
        "Code documentation",
        "1 week support"
      ],
      popular: false
    },
    {
      title: "Standard College Project",
      price: "₹7,000 - ₹10,000",
      delivery: "2-3 weeks",
      features: [
        "Advanced ML model development",
        "Data preprocessing and cleaning",
        "Interactive dashboards",
        "Model deployment guidance",
        "Complete documentation",
        "2 weeks support"
      ],
      popular: true
    },
    {
      title: "Premium College Project",
      price: "₹12,000 - ₹15,000",
      delivery: "3-4 weeks",
      features: [
        "Custom AI solution development",
        "End-to-end implementation",
        "Cloud deployment",
        "Performance optimization",
        "Full documentation and training",
        "API integration support",
        "1 month support"
      ],
      popular: false
    }
  ]

  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "TensorFlow", icon: "🤖" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "⚙️" },
    { name: "NLP", icon: "💬" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Data Analysis", icon: "📊" },
    { name: "Cloud Deployment", icon: "☁️" }
  ]

  return (
    <div className="py-8">
      <h1 className="section-title mb-12">Freelance College Projects</h1>
      
      <div className="glass-card p-8 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Professional College Project Solutions</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I specialize in creating high-quality AI, Machine Learning, and Data Science projects for college students. 
            Whether you need a simple project or a complex AI solution, I can deliver professional work that meets academic standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectPackages.map((packageItem, index) => (
            <div key={index} className={`glass-card p-6 rounded-xl relative ${packageItem.popular ? 'border-2 border-cyan-400' : ''}`}>
              {packageItem.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 text-white">{packageItem.title}</h3>
              <div className="mb-4">
                <span className="text-2xl font-bold text-cyan-400">{packageItem.price}</span>
                <p className="text-gray-400 text-sm">Delivery in {packageItem.delivery}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {packageItem.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/project-inquiry" className="btn-primary w-full text-center block">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Technologies I Work With</h2>
          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card p-4 flex items-center">
                <span className="text-2xl mr-3">{tech.icon}</span>
                <span className="text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Why Choose My Services?</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Academic Quality</h3>
                <p className="text-gray-400">Projects designed to meet college standards and requirements</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Timely Delivery</h3>
                <p className="text-gray-400">Guaranteed on-time delivery for your project deadlines</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Well Documented</h3>
                <p className="text-gray-400">Complete documentation and code explanations included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Contact me today to discuss your college project requirements. I'll provide a customized solution 
          that fits your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/project-inquiry" className="btn-primary">
            Start Your Project
          </Link>
          <Link href="/resume.pdf" download className="btn-secondary">
            View My Resume
          </Link>
        </div>
      </div>
    </div>
  )
}