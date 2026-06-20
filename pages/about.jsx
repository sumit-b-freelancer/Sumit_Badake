import Image from 'next/image'
import SkillPill from '../components/SkillPill'

export default function About(){
  const skills = [
    { category: 'AI/ML', items: ['Deep Learning', 'NLP', 'Computer Vision', 'Transformers', 'LLMs', 'TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenAI', 'YOLOv8', 'Stable Diffusion', 'FAISS'] },
    { category: 'Data Engineering', items: ['Pandas', 'NumPy', 'Matplotlib', 'MLflow', 'Dask', 'Apache Spark', 'Feature Engineering', 'ETL'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'FastAPI'] },
    { category: 'Web & Databases', items: ['Python', 'Java', 'Django', 'Flask', 'Streamlit', 'MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'HTML5', 'React'] }
  ]
  
  const education = [
    {
      degree: 'B.E (AI & DS)',
      institution: 'KLE College of Engineering and Technology, Chikodi',
      year: '2022-2026',
      score: '8.2 CGPA'
    },
    {
      degree: 'PUC (Science)',
      institution: 'KLE INDEPENDENT PU COLLAGE, CHIKODI',
      year: '2020-2022',
      score: '64.3%'
    },
    {
      degree: 'High School',
      institution: 'GELEYAR BALAG SHIKSHANA SAMITHI, EXAMBA',
      year: '2020',
      score: '86.4%'
    }
  ]

  return (
    <div className="py-8">
      <h1 className="section-title mb-12">About Me</h1>
      
      <div className="glass-card p-8 mb-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-white">AI & Data Science Professional</h2>
            <p className="text-gray-300 mb-6">
              Passionate Machine Learning and Data Science enthusiast with experience in building and deploying machine learning models and natural language processing solutions. Adept at utilizing tools such as Python, TensorFlow, Keras, and MongoDB to drive impactful results in predictive modeling, classification, and data analysis. Strong foundation in statistical analysis, feature engineering, and model evaluation, with a focus on delivering data-driven solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-cyan-400 mb-1">11</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-cyan-400 mb-1">30+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-cyan-400 mb-1">6+</div>
                <div className="text-gray-400 text-sm">Skills</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-3xl font-bold text-cyan-400 mb-1">2</div>
                <div className="text-gray-400 text-sm">Years Exp</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-3xl absolute -top-5 -left-5"></div>
              <div className="glass-card p-6 backdrop-blur-xl rounded-2xl border-cyan-400/30 relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/50">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sumit Badake"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white text-center">SUMIT BADAKE</h3>
                <p className="text-cyan-400 text-center text-sm">AI/ML Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <SkillPill key={idx} text={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Education</h2>
        <div className="space-y-6">
          {education.map((edu, i) => (
            <div key={i} className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <span className="text-cyan-400 text-sm mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400">{edu.score}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Interpersonal Skills</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Teamwork and Patience</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Responsibility</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Time management</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">Languages</h2>
          <p className="text-gray-300 mb-6">English, Marathi, Hindi, Kannada</p>
          
          <h2 className="text-2xl font-bold mb-6 text-white">Interests & Hobbies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="skill-chip">Volleyball</span>
            <span className="skill-chip">Cooking</span>
            <span className="skill-chip">Swimming</span>
            <span className="skill-chip">Running</span>
          </div>
        </div>
      </div>
    </div>
  )
}
