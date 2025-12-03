import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

const projects = [
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
    title: 'Real Time Image Animation',
    desc: 'Built a model using GANs and VAEs to animate images in different formats used for animation. Used sketch book, 90s anime, cyberpunk anime, chibi anime by training machine learning tools.',
    tech: ['Python', 'PyTorch', 'GANs', 'VAEs']
  }
]

export default function Home(){
  return (
    <div>
      <Hero />
      
      <section className="py-16">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Highlighted Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore my latest AI and machine learning projects that showcase my skills in data science, 
            deep learning, and cloud computing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p,i)=> <ProjectCard key={i} project={p} />)}
        </div>
        
        <div className="text-center mt-12">
          <a href="/projects" className="btn-secondary inline-flex items-center">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
      
      <section className="py-16 glass-card p-8 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">AI & ML Expertise</h2>
            <p className="text-gray-300 mb-8">
              With a strong foundation in artificial intelligence and machine learning, I specialize in 
              developing intelligent systems that solve real-world problems. My expertise spans across 
              deep learning, natural language processing, computer vision, and cloud-based AI solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Deep Learning</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">NLP & Transformers</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Computer Vision</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Cloud AI Services</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              <span className="text-cyan-400">92% Average</span>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Python & ML Libraries</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Deep Learning Frameworks</span>
                  <span className="text-cyan-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Cloud Platforms</span>
                  <span className="text-cyan-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Data Engineering</span>
                  <span className="text-cyan-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}