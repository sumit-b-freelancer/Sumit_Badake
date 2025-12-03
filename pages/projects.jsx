import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Offline AI Summarizer',
    desc: 'A Django web application that summarizes text, documents, and YouTube videos using AI models running locally (offline). Features offline operation, multiple input methods (plain text, PDF/DOCX documents, YouTube URLs), and optimized performance for limited hardware.',
    tech: ['Python', 'Django', 'PyTorch', 'Hugging Face', 'BART-Large-CNN']
  },
  {
    title: 'Movie Genre Prediction',
    desc: 'Developed a machine learning model to predict movie genres based on plot summaries, using natural language processing techniques (TF-IDF, word embeddings) and classification algorithms such as Naive Bayes, Logistic Regression, and SVM.',
    tech: ['Python', 'scikit-learn', 'NLP', 'TF-IDF']
  },
  {
    title: 'Spam Mail Detection',
    desc: 'Built a spam detection model using Logistic Regression and TF-IDF vectorization to classify emails as spam or not. Achieved significant accuracy improvement through feature engineering and hyperparameter tuning.',
    tech: ['Python', 'scikit-learn', 'Logistic Regression', 'TF-IDF']
  },
  {
    title: 'Online Voting Management System',
    desc: 'A comprehensive Full-Stack Online Voting Management System designed to facilitate secure, transparent, and efficient elections for organizations, institutions, or small-scale public polls. Leveraging a full-stack architecture, it ensures a robust and seamless experience across all stages.',
    tech: ['Full-Stack', 'HTML5', 'PHP', 'SQL']
  },
  {
    title: 'Real Time Image Animation',
    desc: 'Built a model using GANs and VAEs to animate images in different formats used for animation. Used sketch book, 90s anime, cyberpunk anime, chibi anime by training machine learning tools.',
    tech: ['Python', 'PyTorch', 'GANs', 'VAEs']
  },
  {
    title: 'Advanced Weather Forecasting',
    desc: 'A machine learning-based weather forecasting system that provides highly accurate, long-range predictions using advanced atmospheric physics, sensor fusion, and predictive analytics. It forecasts temperature, precipitation, air quality, localized wind shear, and agricultural indices.',
    tech: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Pandas', 'NumPy', 'Flask', 'Plotly']
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
              <span>20+ AI/ML Projects Completed</span>
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