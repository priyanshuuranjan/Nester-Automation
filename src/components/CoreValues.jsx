import React from 'react'

const CoreValues = () => {
  const values = [
    {
      title: 'Accountability',
      description: "At Nester, we're dedicated to meeting our customers' needs. We take full responsibility for our tasks and projects, from start to finish.",
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '📊'
    },
    {
      title: 'Integrity',
      description: 'We dedicate significant thought, focus, and effort to our commitments, going above and beyond to honour our promises to customers and colleagues.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '🤝'
    },
    {
      title: 'Teamwork',
      description: 'We believe in working together as a team, taking responsibility both collectively and individually',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '👥'
    },
    {
      title: 'Leadership',
      description: 'We uphold high standards in tooling, automation design, process planning, efficiency, and execution consistently delivering on time.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '🎯'
    },
    {
      title: 'Respect',
      description: 'We treat everyone with courtesy and professionalism, respecting our customers, suppliers, and ourselves alike.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      icon: '⭐'
    }
  ]

  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Nester Automation utilizes world-class automotive body welding design and
            engineering capabilities, coupled with proven hands-on expertise and advanced weld
            assembly line automation solutions. We collaborate closely with clients to design
            and optimize processes, consistently delivering high-quality execution to meet
            your launch goals reliably and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group">
              <div className="relative">
                <img 
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
