import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null)

  const leadership = [
    {
      id: 'director',
      name: 'Mr. TARA CHAND',
      position: 'Director',
      image: '/src/gallery/Director.png',
      bio: 'Visionary leader with over 25 years of experience in industrial automation. Under his guidance, the company has achieved remarkable growth and innovation in automation solutions.',
      expertise: ['Strategic Planning', 'Business Development', 'Industry Relations', 'Innovation Leadership'],
      achievements: ['Founded Nester Automation', 'Led 500+ successful projects', 'Industry recognition awards', 'Pioneered automation solutions']
    },
    {
      id: 'managing-director',
      name: 'Mr. JAGDISH BURDAK',
      position: 'Managing Director',
      image: '/src/gallery/Managing Director.png',
      bio: 'Strategic leader overseeing company operations and driving growth initiatives. Expert in operational excellence and team management with proven track record.',
      expertise: ['Operations Management', 'Team Leadership', 'Process Optimization', 'Quality Assurance'],
      achievements: ['Streamlined operations', 'Built high-performance teams', 'Implemented quality systems', 'Expanded market presence']
    }
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Engineering Team Lead',
      position: 'Senior Design Engineer',
      image: '/src/gallery/9.png',
      department: 'Engineering',
      expertise: ['Automation Design', 'CAD/CAM', 'Project Management'],
      experience: '8+ years'
    },
    {
      id: 2,
      name: 'Production Manager',
      position: 'Manufacturing Head',
      image: '/src/gallery/10.png',
      department: 'Production',
      expertise: ['Manufacturing Processes', 'Quality Control', 'Team Management'],
      experience: '12+ years'
    },
    {
      id: 3,
      name: 'Software Engineer',
      position: 'Automation Programmer',
      image: '/src/gallery/11.png',
      department: 'Software',
      expertise: ['PLC Programming', 'HMI Development', 'SCADA Systems'],
      experience: '6+ years'
    },
    {
      id: 4,
      name: 'Quality Manager',
      position: 'QA/QC Head',
      image: '/src/gallery/12.png',
      department: 'Quality',
      expertise: ['Quality Systems', 'Testing Protocols', 'Compliance'],
      experience: '10+ years'
    },
    {
      id: 5,
      name: 'Sales Manager',
      position: 'Business Development',
      image: '/src/gallery/13.png',
      department: 'Sales',
      expertise: ['Client Relations', 'Market Analysis', 'Business Strategy'],
      experience: '7+ years'
    },
    {
      id: 6,
      name: 'Technical Specialist',
      position: 'Automation Expert',
      image: '/src/gallery/14.png',
      department: 'Technical',
      expertise: ['System Integration', 'Troubleshooting', 'Training'],
      experience: '9+ years'
    },
    {
      id: 7,
      name: 'Project Coordinator',
      position: 'Project Manager',
      image: '/src/gallery/15.png',
      department: 'Projects',
      expertise: ['Project Planning', 'Resource Management', 'Client Communication'],
      experience: '5+ years'
    },
    {
      id: 8,
      name: 'R&D Engineer',
      position: 'Research Specialist',
      image: '/src/gallery/16.png',
      department: 'Research',
      expertise: ['Innovation', 'Product Development', 'Technology Research'],
      experience: '6+ years'
    }
  ]

  const departments = [
    { name: 'Engineering', count: teamMembers.filter(m => m.department === 'Engineering').length, color: 'bg-blue-500' },
    { name: 'Production', count: teamMembers.filter(m => m.department === 'Production').length, color: 'bg-red-500' },
    { name: 'Software', count: teamMembers.filter(m => m.department === 'Software').length, color: 'bg-green-500' },
    { name: 'Quality', count: teamMembers.filter(m => m.department === 'Quality').length, color: 'bg-purple-500' },
    { name: 'Sales', count: teamMembers.filter(m => m.department === 'Sales').length, color: 'bg-orange-500' },
    { name: 'Technical', count: teamMembers.filter(m => m.department === 'Technical').length, color: 'bg-indigo-500' },
    { name: 'Projects', count: teamMembers.filter(m => m.department === 'Projects').length, color: 'bg-pink-500' },
    { name: 'Research', count: teamMembers.filter(m => m.department === 'Research').length, color: 'bg-teal-500' }
  ]

  const openModal = (member) => {
    setSelectedMember(member)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedMember(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our <span className="text-yellow-400">Team</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Meet the dedicated professionals who drive our success in industrial automation. 
            Our team combines expertise, innovation, and passion to deliver excellence.
          </motion.p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our visionary leaders who guide the company towards innovation and excellence in automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -10 }}
                onClick={() => openModal(leader)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(leader.name)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                    <p className="text-lg text-yellow-300 mb-3">{leader.position}</p>
                    <p className="text-sm text-gray-200 line-clamp-2">{leader.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Expertise:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {leader.expertise.slice(0, 4).map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-sm text-blue-600">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Departments</h2>
            <p className="text-lg text-gray-600">Specialized teams working together to deliver excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 ${dept.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{dept.count}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600">Team Members</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Team Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled professionals dedicated to delivering innovative automation solutions and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => openModal(member)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300/DC2626/FFFFFF?text=${encodeURIComponent(member.name)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{member.experience} experience</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2 text-sm">{member.position}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className={`px-2 py-1 rounded-full ${departments.find(d => d.name === member.department)?.color} text-white`}>
                      {member.department}
                    </span>
                    <span>{member.experience}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12">Team Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "50+", label: "Team Members", icon: "👥" },
                { number: "200+", label: "Years Combined Experience", icon: "🎯" },
                { number: "8", label: "Specialized Departments", icon: "🏢" },
                { number: "100%", label: "Commitment to Quality", icon: "⭐" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-64 md:h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/4F46E5/FFFFFF?text=${encodeURIComponent(selectedMember.name)}`
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                  <p className="text-lg text-blue-600 mb-4">{selectedMember.position}</p>
                  
                  {selectedMember.bio && (
                    <div className="mb-4">
                      <p className="text-gray-600">{selectedMember.bio}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {selectedMember.expertise ? 'Expertise:' : 'Skills:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(selectedMember.expertise || selectedMember.expertise || []).map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedMember.achievements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {selectedMember.department && (
                      <span className={`px-3 py-1 rounded-full text-white ${departments.find(d => d.name === selectedMember.department)?.color}`}>
                        {selectedMember.department}
                      </span>
                    )}
                    {selectedMember.experience && (
                      <span>{selectedMember.experience} experience</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OurTeam
