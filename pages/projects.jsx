import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'RetrievalDocBot — RAG PDF Chatbot',
    desc: 'Uses LangChain, OpenAI, FAISS, and Streamlit for intelligent Q&A from uploaded PDFs with semantic search.',
    tech: ['Python', 'LangChain', 'OpenAI', 'FAISS', 'Streamlit']
  },
  {
    title: 'Sentinel-Vision — Defect Detection',
    desc: 'Uses EfficientNet-V2, Vision Transformers, and Grad-CAM for autonomous manufacturing defect detection with MLOps.',
    tech: ['Python', 'PyTorch', 'Django', 'Docker', 'FastAPI', 'Kubernetes']
  },
  {
    title: 'AI Resume Analyzer Pro',
    desc: 'Uses spaCy, sentence-transformers, and FAISS for ATS scoring, skill-gap detection, and AI rewrite suggestions.',
    tech: ['Python', 'Streamlit', 'NLP', 'FAISS', 'spaCy']
  },
  {
    title: 'Offline AI Summarizer',
    desc: 'Uses BART-Large-CNN on Django for text, PDF/DOCX, and YouTube summarization running entirely offline.',
    tech: ['Python', 'Django', 'Hugging Face', 'BART-Large-CNN']
  },
  {
    title: 'Crime Detection using YOLOv8',
    desc: 'Uses Flask, OpenCV, and YOLOv8 for real-time violence detection and facial recognition with auto alerts.',
    tech: ['Python', 'Flask', 'OpenCV', 'YOLOv8', 'MongoDB', 'Docker']
  },
  {
    title: 'Movie Genre Predictor',
    desc: 'Uses NLP and ML on Django for predicting movie genres from plot descriptions with confidence scores.',
    tech: ['Python', 'Django', 'scikit-learn', 'NLP', 'TF-IDF']
  },
  {
    title: 'CyberGuard — Spam Detection',
    desc: 'Uses TF-IDF + Logistic Regression on Django 5.x for real-time spam analysis with cybersecurity-themed UI.',
    tech: ['Python', 'Django', 'scikit-learn', 'Logistic Regression', 'TF-IDF']
  },
  {
    title: 'Real Time Image Animation',
    desc: 'Uses Stable Diffusion img2img with AnimeGAN fallback for styled image generation and animated GIF creation.',
    tech: ['Python', 'Django', 'PyTorch', 'Stable Diffusion', 'GANs']
  },
  {
    title: 'Advanced Weather Forecasting',
    desc: 'Uses LSTM/GRU and ensemble methods on massive datasets for long-range weather prediction with REST API.',
    tech: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Pandas', 'NumPy']
  },
  {
    title: 'Insight Mail — Email Sentiment Analysis',
    desc: 'Uses ML models for automated email sentiment analysis with privacy-first classification and priority scoring.',
    tech: ['Python', 'ML', 'NLP', 'Classification']
  },
  {
    title: 'Smart3DS — Interactive Education',
    desc: 'Uses AI chatbot and quizzes for interactive education with Docker-based deployment.',
    tech: ['HTML', 'CSS', 'Docker', 'AI']
  }
]

export default function Projects(){
  return (
    <div className="py-8">
      <h1 className="section-title mb-12">Projects</h1>
      
      <div className="mb-12 glass-card p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">AI & ML Projects Showcase</h2>
            <p className="text-gray-300 mb-6">
              Here are some of the key projects I've worked on, showcasing my skills in machine learning, data science, and full-stack development. Each project demonstrates my ability to solve real-world problems using cutting-edge technologies.
            </p>
            <div className="flex items-center text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>11 AI/ML Projects Completed</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-3xl absolute -top-5 -left-5"></div>
              <div className="glass-card p-6 backdrop-blur-xl rounded-2xl border-cyan-400/30 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Project Dashboard</h3>
                  <p className="text-cyan-400 text-sm">AI Model Performance</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-cyan-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p,i)=> <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  )
}