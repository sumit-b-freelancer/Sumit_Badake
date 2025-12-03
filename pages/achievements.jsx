import Timeline from '../components/Timeline'

const achievements = [
  {
    date: '2024',
    title: 'First Prize - Bug Buster',
    description: 'Won first prize in bug bounty competition organized by ADVITIYA-2K24, KLEIT Hubballi'
  },
  {
    date: '2024',
    title: 'Second Prize - PosterNova',
    description: 'Won second prize in the PosterNova competition organized by AI-QUESTA, Chikodi'
  },
  {
    date: '2024',
    title: 'Paper Presentation Competition',
    description: 'Participated in Paper Presentation Competition conducted as a part of Praxis 2K24 at KLECET, Chikodi'
  },
  {
    date: '2022-Present',
    title: 'President',
    description: 'AI-QUESTA (AI Club) at KLE College of Engineering and Technology, Chikodi'
  },
  {
    date: 'Various Dates',
    title: 'Volunteer',
    description: 'Served as volunteer for Faculty Development Program and PRAXIS-2K24 at KLECET, Chikodi'
  }
]

export default function Achievements() {
  return (
    <div className="py-8">
      <h1 className="section-title mb-12">Achievements</h1>
      
      <div className="glass-card p-8 mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-white">Recognitions & Leadership</h2>
            <p className="text-gray-300 mb-6">
              Throughout my academic and professional journey, I've been recognized for my technical skills, leadership abilities, and contributions to the community. These achievements reflect my dedication to excellence and continuous growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2</div>
                <div className="text-gray-400 text-sm">Awards</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold text-cyan-400 mb-1">3+</div>
                <div className="text-gray-400 text-sm">Competitions</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold text-cyan-400 mb-1">1</div>
                <div className="text-gray-400 text-sm">Leadership Role</div>
              </div>
              <div className="text-center p-4 glass-card">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2+</div>
                <div className="text-gray-400 text-sm">Volunteer Events</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-3xl absolute -top-5 -left-5"></div>
              <div className="glass-card p-6 backdrop-blur-xl rounded-2xl border-cyan-400/30 relative z-10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">Achievements</h3>
                  <p className="text-cyan-400 text-sm">5+ Recognitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Timeline items={achievements} />
    </div>
  )
}