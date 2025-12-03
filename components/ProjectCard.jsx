export default function ProjectCard({project}) {
  // Map project titles to GitHub repository URLs
  const projectLinks = {
    'Offline AI Summarizer': 'https://github.com/sumit-b-freelancer/AI_summrization-using-Django-framework',
    'Advanced Weather Forecasting': 'https://github.com/sumit-b-freelancer/Advanced-weather-forecasting1',
    'Movie Genre Prediction': 'https://github.com/sumit-b-freelancer/Movie_genre_predctors',
    'Spam Mail Detection': 'https://github.com/sumit-b-freelancer/spam_mail_detection_using_ML_models',
    'Online Voting Management System': '#',
    'Real Time Image Animation': 'https://github.com/sumit-b-freelancer/Realtime-image-animation-using-deep-learing'
  };

  const githubUrl = projectLinks[project.title] || '#';

  return (
    <div className="project-card group">
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4 text-sm">
        {project.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t,idx) => 
          <span key={idx} className="skill-chip">
            {t}
          </span>
        )}
      </div>
      <div className="mt-4">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group">
          View on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}