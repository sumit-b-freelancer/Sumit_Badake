import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ProjectInquiry() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  })
  
  const [status, setStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      // Send data to the contact API endpoint (now handles both contact and project inquiries)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setStatus('success')
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            projectType: '',
            description: '',
            budget: '',
            timeline: ''
          })
          setStatus(null)
        }, 3000)
      } else {
        setStatus('error')
        console.error('Error submitting form:', result.error)
      }
    } catch (error) {
      setStatus('error')
      console.error('Network error:', error)
    }
  }
  
  const projectTypes = [
    'Data Science Projects',
    'Deep Learning Projects',
    'NLP Projects',
    'LLM Projects',
    'Agentic AI',
    'Chatbots',
    'Web Development',
    'Scripting/Automation',
    'Bug Fixing',
    'Other'
  ]
  
  const budgetOptions = [
    'Less than ₹5,000',
    '₹5,000 - ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹100,000',
    'More than ₹100,000',
    'Not sure yet'
  ]
  
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="section-title mb-4">Project Inquiry</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tell me about your project and I'll get back to you with a proposal and timeline.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="projectType" className="block text-gray-300 mb-2">Project Type *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-gray-300 mb-2">Project Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Briefly describe what you want to build. What is the main problem you are solving?"
              ></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-gray-300 mb-2">Estimated Budget *</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select your budget range</option>
                  {budgetOptions.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                  ))}
                </select>
                <p className="text-gray-500 text-sm mt-1">This helps us determine if the project is a good fit for both parties.</p>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-gray-300 mb-2">Timeline / Deadline *</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="e.g., 2 weeks, by Dec 15th, flexible"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-4 text-lg font-medium"
              >
                {status === 'sending' ? 'Sending...' : 'Submit Project Inquiry'}
              </button>
              
              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-center">
                  <p className="text-green-300">Thank you! Your project inquiry has been submitted. I'll get back to you soon.</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-center">
                  <p className="text-red-300">Something went wrong. Please try again.</p>
                </div>
              )}
            </div>
          </form>
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => router.back()}
            className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center mx-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Freelance Services
          </button>
        </div>
      </div>
    </div>
  )
}