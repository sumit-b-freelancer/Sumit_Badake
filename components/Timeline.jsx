export default function Timeline({ items }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30 timeline-item">
          <div className="mb-2 text-sm font-medium text-cyan-400">{item.date}</div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-300 mb-3">{item.description}</p>
          {item.details && (
            <ul className="mt-2 space-y-1">
              {item.details.map((detail, idx) => (
                <li key={idx} className="text-gray-400 flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}