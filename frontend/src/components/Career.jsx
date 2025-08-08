import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

const Career = () => {
  // Background images for hero section
  const heroImages = [
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Team collaboration
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Professional meeting
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Modern office
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', // Team workspace
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState('openings')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null
  })
  const formRef = useRef()
  const fileInputRef = useRef()

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      // Check file type
      const allowedTypes = ['.pdf', '.doc', '.docx']
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
      if (!allowedTypes.includes(fileExtension)) {
        alert('Please upload only PDF, DOC, or DOCX files')
        return
      }
      setFormData(prev => ({
        ...prev,
        resume: file
      }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('coverLetter', formData.coverLetter)
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      // Convert file to base64 for EmailJS
      let resumeBase64 = ''
      if (formData.resume) {
        const reader = new FileReader()
        resumeBase64 = await new Promise((resolve) => {
          reader.onload = (e) => resolve(e.target.result.split(',')[1])
          reader.readAsDataURL(formData.resume)
        })
      }

      // Send email using EmailJS
      const templateParams = {
        to_email: 'careers@nesterautomation.com',
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        cover_letter: formData.coverLetter,
        resume_name: formData.resume ? formData.resume.name : 'No resume attached',
        resume_content: resumeBase64,
        subject: `Job Application for ${formData.position} - ${formData.fullName}`
      }

      // Note: You'll need to configure EmailJS with your service ID, template ID, and public key
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      })
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Error sending application:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Automation Engineer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead the design and implementation of complex automation systems for manufacturing industries. Work with cutting-edge PLC programming, SCADA systems, and industrial robotics.',
      responsibilities: [
        'Design and develop automation solutions for industrial processes',
        'Program PLCs (Siemens, Allen Bradley, Schneider) and HMI systems',
        'Lead project teams and coordinate with cross-functional departments',
        'Troubleshoot and optimize existing automation systems',
        'Mentor junior engineers and provide technical guidance'
      ],
      requirements: [
        'Bachelor\'s degree in Electrical/Electronics Engineering',
        '5-8 years of experience in industrial automation',
        'Expert in PLC programming and SCADA systems',
        'Knowledge of robotics and motion control systems',
        'Strong project management skills'
      ],
      skills: ['PLC Programming', 'SCADA', 'HMI Design', 'Robotics', 'Project Management']
    },
    {
      id: 2,
      title: 'Robotics Integration Specialist',
      department: 'Robotics',
      location: 'Pune, India',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Specialize in integrating robotic systems into manufacturing processes. Work with industrial robots, vision systems, and collaborative robotics solutions.',
      responsibilities: [
        'Design and implement robotic automation solutions',
        'Program industrial robots (ABB, KUKA, Fanuc, Universal Robots)',
        'Integrate vision systems and sensors with robotic applications',
        'Develop safety protocols for robotic workcells',
        'Provide technical support during installation and commissioning'
      ],
      requirements: [
        'Bachelor\'s degree in Robotics/Mechanical/Electrical Engineering',
        '3-6 years of experience in robotics integration',
        'Proficiency in robot programming languages',
        'Experience with vision systems and sensors',
        'Knowledge of industrial safety standards'
      ],
      skills: ['Robot Programming', 'Vision Systems', 'Safety Systems', 'CAD Design', 'Troubleshooting']
    },
    {
      id: 3,
      title: 'Control Panel Design Engineer',
      department: 'Design',
      location: 'Chennai, India',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Design and develop electrical control panels for automation systems. Ensure compliance with industry standards and optimize designs for manufacturing efficiency.',
      responsibilities: [
        'Design electrical control panels using AutoCAD Electrical',
        'Select appropriate components and create BOMs',
        'Ensure designs comply with IEC and local standards',
        'Coordinate with manufacturing team for panel assembly',
        'Support field installation and testing activities'
      ],
      requirements: [
        'Diploma/Bachelor\'s degree in Electrical Engineering',
        '2-5 years of experience in control panel design',
        'Proficiency in AutoCAD Electrical or EPLAN',
        'Knowledge of electrical standards and regulations',
        'Strong attention to detail and accuracy'
      ],
      skills: ['AutoCAD Electrical', 'EPLAN', 'Electrical Standards', 'Component Selection', 'Documentation']
    },
    {
      id: 4,
      title: 'Project Manager - Automation',
      department: 'Project Management',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '6-10 years',
      description: 'Lead automation projects from conception to completion. Manage project timelines, resources, and stakeholder communications while ensuring quality deliverables.',
      responsibilities: [
        'Plan and execute automation projects within scope, time, and budget',
        'Coordinate with engineering, manufacturing, and installation teams',
        'Manage client relationships and communications',
        'Risk assessment and mitigation planning',
        'Ensure project deliverables meet quality standards'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering with MBA preferred',
        '6-10 years of project management experience',
        'PMP certification is a plus',
        'Experience in automation or manufacturing industry',
        'Strong leadership and communication skills'
      ],
      skills: ['Project Management', 'Leadership', 'Client Relations', 'Risk Management', 'Quality Assurance']
    },
    {
      id: 5,
      title: 'Field Service Technician',
      department: 'Service',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-4 years',
      description: 'Provide on-site technical support for automation systems installation, commissioning, and maintenance. Travel to customer sites across India.',
      responsibilities: [
        'Install and commission automation systems at customer sites',
        'Troubleshoot technical issues and perform repairs',
        'Conduct preventive maintenance activities',
        'Train customer personnel on system operation',
        'Document service activities and maintain reports'
      ],
      requirements: [
        'Diploma in Electrical/Electronics/Mechanical Engineering',
        '1-4 years of field service experience',
        'Willingness to travel extensively (70-80%)',
        'Strong problem-solving and communication skills',
        'Valid driving license'
      ],
      skills: ['Troubleshooting', 'System Installation', 'Customer Service', 'Documentation', 'Travel Flexibility']
    },
    {
      id: 6,
      title: 'Sales Engineer - Industrial Automation',
      department: 'Sales',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '3-7 years',
      description: 'Drive sales of automation solutions by understanding customer requirements and proposing technical solutions. Build and maintain customer relationships.',
      responsibilities: [
        'Identify and develop new business opportunities',
        'Prepare technical proposals and quotations',
        'Conduct product demonstrations and presentations',
        'Maintain relationships with existing customers',
        'Collaborate with engineering team on solution design'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering',
        '3-7 years of technical sales experience',
        'Knowledge of automation technologies',
        'Excellent communication and presentation skills',
        'Proven track record in B2B sales'
      ],
      skills: ['Technical Sales', 'Proposal Writing', 'Customer Relations', 'Presentation', 'Market Analysis']
    },
    {
      id: 7,
      title: 'Mechanical Engineer',
      department: 'Engineering',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Design and develop mechanical systems for automation equipment. Work on machine design, fabrication drawings, and mechanical integration projects.',
      responsibilities: [
        'Design mechanical systems and components for automation equipment',
        'Create detailed engineering drawings and specifications',
        'Collaborate with electrical and software teams for system integration',
        'Conduct stress analysis and material selection',
        'Support manufacturing and assembly operations'
      ],
      requirements: [
        'Bachelor\'s degree in Mechanical Engineering',
        '2-5 years of experience in mechanical design',
        'Proficiency in CAD software (SolidWorks, AutoCAD)',
        'Knowledge of manufacturing processes and materials',
        'Strong analytical and problem-solving skills'
      ],
      skills: ['Mechanical Design', 'CAD', 'Manufacturing', 'Material Selection', 'Analysis']
    },
    {
      id: 8,
      title: 'PLC Programmer',
      department: 'Engineering',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-4 years',
      description: 'Develop and implement PLC programs for automation systems. Work with various PLC platforms and HMI systems for industrial applications.',
      responsibilities: [
        'Develop PLC programs for automation systems',
        'Create and configure HMI interfaces',
        'Test and debug automation programs',
        'Provide technical support during commissioning',
        'Document programming standards and procedures'
      ],
      requirements: [
        'Diploma/Bachelor in Electrical or Electronics Engineering',
        '1-4 years of PLC programming experience',
        'Experience with Siemens, Allen Bradley, or Schneider PLCs',
        'Knowledge of industrial communication protocols',
        'Strong troubleshooting skills'
      ],
      skills: ['PLC Programming', 'HMI Development', 'Industrial Protocols', 'Troubleshooting', 'Documentation']
    },
    {
      id: 9,
      title: 'Electrical Installation Engineer',
      department: 'Installation',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Handle electrical installation and service activities for automation systems. Provide on-site installation, commissioning, and maintenance services.',
      responsibilities: [
        'Install electrical systems and control panels',
        'Perform system commissioning and testing',
        'Troubleshoot electrical issues and provide solutions',
        'Conduct preventive maintenance activities',
        'Prepare installation and service reports'
      ],
      requirements: [
        'Diploma/B.Tech in Electrical Engineering',
        '1-3 years of electrical installation experience',
        'Knowledge of electrical standards and safety protocols',
        'Ability to read electrical drawings and schematics',
        'Willingness to travel for site work'
      ],
      skills: ['Electrical Installation', 'Commissioning', 'Troubleshooting', 'Safety Standards', 'Site Work']
    },
    {
      id: 10,
      title: 'SolidWorks Designer (Trainee)',
      department: 'Design',
      location: 'Main Office',
      type: 'Full-time',
      experience: '0-1 years',
      description: 'Entry-level position for mechanical design using SolidWorks. Learn and develop skills in 3D modeling, assembly design, and engineering drawings.',
      responsibilities: [
        'Create 3D models and assemblies using SolidWorks',
        'Generate engineering drawings and documentation',
        'Assist senior designers in product development',
        'Learn design standards and best practices',
        'Support design verification and testing activities'
      ],
      requirements: [
        'B.Tech in Mechanical Engineering',
        'Fresh graduate or 0-1 year experience',
        'Basic knowledge of SolidWorks or similar CAD software',
        'Strong learning attitude and attention to detail',
        'Good communication and teamwork skills'
      ],
      skills: ['SolidWorks', '3D Modeling', 'Engineering Drawings', 'Design Standards', 'Teamwork']
    },
    {
      id: 11,
      title: 'Welder',
      department: 'Manufacturing',
      location: 'Workshop',
      type: 'Part-time',
      experience: '2-5 years',
      description: 'Part-time welding position available on request. Perform welding operations for automation equipment fabrication and repair work.',
      responsibilities: [
        'Perform arc welding, MIG/TIG welding operations',
        'Weld structural components and equipment frames',
        'Ensure weld quality meets specifications',
        'Follow safety protocols and procedures',
        'Maintain welding equipment and tools'
      ],
      requirements: [
        'ITI in Welding or equivalent certification',
        '2-5 years of welding experience',
        'Proficiency in various welding techniques',
        'Ability to read welding symbols and drawings',
        'Strong attention to quality and safety'
      ],
      skills: ['Arc Welding', 'MIG/TIG Welding', 'Quality Control', 'Safety Procedures', 'Equipment Maintenance']
    },
    {
      id: 12,
      title: 'Electromechanical Technician',
      department: 'Technical',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Support electromechanical systems installation, maintenance, and repair. Work with both electrical and mechanical components of automation systems.',
      responsibilities: [
        'Install and maintain electromechanical systems',
        'Perform routine inspections and preventive maintenance',
        'Troubleshoot and repair equipment malfunctions',
        'Assist in system testing and commissioning',
        'Maintain technical documentation and records'
      ],
      requirements: [
        'ITI/Diploma in Electrical Engineering',
        '1-3 years of electromechanical experience',
        'Knowledge of electrical and mechanical systems',
        'Basic troubleshooting and repair skills',
        'Ability to work with hand tools and testing equipment'
      ],
      skills: ['Electromechanical Systems', 'Maintenance', 'Troubleshooting', 'Testing', 'Documentation']
    },
    {
      id: 13,
      title: 'Assembler (Trainee)',
      department: 'Manufacturing',
      location: 'Workshop',
      type: 'Full-time',
      experience: '0-1 years',
      description: 'Entry-level position for equipment assembly and manufacturing support. Learn assembly processes and quality standards.',
      responsibilities: [
        'Assemble automation equipment and components',
        'Follow assembly drawings and work instructions',
        'Perform quality checks during assembly process',
        'Maintain clean and organized work area',
        'Learn and follow safety procedures'
      ],
      requirements: [
        'ITI Fitter or equivalent qualification',
        'Fresh graduate or 0-1 year experience',
        'Basic mechanical aptitude and hand tool skills',
        'Attention to detail and quality',
        'Willingness to learn and follow instructions'
      ],
      skills: ['Assembly', 'Hand Tools', 'Quality Control', 'Safety Procedures', 'Following Instructions']
    },
    {
      id: 14,
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Develop new business opportunities and maintain customer relationships. Promote automation solutions and support sales activities.',
      responsibilities: [
        'Identify and develop new sales opportunities',
        'Maintain relationships with existing customers',
        'Prepare sales presentations and proposals',
        'Coordinate with technical team for customer support',
        'Achieve sales targets and report on activities'
      ],
      requirements: [
        'Graduate in any stream',
        'Minimum 1 year sales experience',
        'Good communication and interpersonal skills',
        'Basic understanding of technical products',
        'Willingness to travel for customer meetings'
      ],
      skills: ['Sales', 'Customer Relations', 'Communication', 'Presentation', 'Business Development']
    }
  ]

  const positions = jobOpenings.map(job => job.title).concat(['Other'])

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family',
      icon: '🏥',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Professional Development',
      description: 'Training programs, certifications, and conference attendance',
      icon: '📚',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and generous leave policy',
      icon: '⚖️',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Performance Bonuses',
      description: 'Annual performance bonuses and project completion incentives',
      icon: '💰',
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      title: 'Career Growth',
      description: 'Clear promotion pathways and leadership development programs',
      icon: '📈',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      title: 'Team Activities',
      description: 'Regular team outings, sports events, and celebration parties',
      icon: '🎉',
      color: 'bg-pink-50 border-pink-200'
    }
  ]

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and cutting-edge solutions',
      icon: '💡'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success',
      icon: '🤝'
    },
    {
      title: 'Growth Mindset',
      description: 'We invest in continuous learning and development',
      icon: '🌱'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5 }}
            />
          </AnimatePresence>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Join Our <span className="text-yellow-400">Team</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Build your career with industry leaders in automation technology. 
            Join us in shaping the future of industrial automation and robotics.
          </motion.p>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Nester Automation, we foster a culture of innovation, excellence, and growth. 
              Join a team that's passionate about technology and making a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Spontaneous Application
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                If you have an interest in joining an outstanding team, please send us your resume. 
                Our growing needs lead us to be constantly on the lookout for new talent.
              </p>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Apply</h3>
                <p className="text-gray-700 mb-4">
                  Don't see a position that matches your skills? We're always interested in meeting talented individuals. 
                  Send us your resume and let us know how you can contribute to our team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a 
                    href="mailto:careers@nesterautomation.com?subject=Spontaneous Application&body=Dear HR Team,%0D%0A%0D%0AI am interested in joining your outstanding team at Nester Automation. Please find my resume attached for your consideration.%0D%0A%0D%0ABest regards"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Resume
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      setActiveTab('application')
                      setFormData(prev => ({ ...prev, position: 'Other' }))
                    }}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Fill Application Form
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab('openings')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'openings'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Job Openings ({jobOpenings.length})
              </button>
              <button
                onClick={() => setActiveTab('application')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'application'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'openings' && (
              <motion.div
                key="openings"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Job Openings Content */}
                <motion.div 
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Current Job Openings
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore exciting career opportunities across different departments. 
                    Join our growing team and be part of innovative automation projects.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {jobOpenings.map((job, index) => (
                    <motion.div
                      key={job.id}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Job Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 text-sm">
                              <span className="bg-white/20 px-3 py-1 rounded-full">{job.department}</span>
                              <span className="bg-white/20 px-3 py-1 rounded-full">{job.location}</span>
                              <span className="bg-white/20 px-3 py-1 rounded-full">{job.type}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                              {job.experience}
                            </div>
                          </div>
                        </div>
                        <p className="text-blue-100">{job.description}</p>
                      </div>

                      {/* Job Details */}
                      <div className="p-6">
                        {/* Key Responsibilities */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.slice(0, 3).map((responsibility, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{responsibility}</span>
                              </li>
                            ))}
                            {job.responsibilities.length > 3 && (
                              <li className="text-gray-500 text-sm ml-5">
                                +{job.responsibilities.length - 3} more responsibilities...
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.slice(0, 3).map((requirement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-sm">{requirement}</span>
                              </li>
                            ))}
                            {job.requirements.length > 3 && (
                              <li className="text-gray-500 text-sm ml-5">
                                +{job.requirements.length - 3} more requirements...
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Apply Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <motion.button
                            onClick={() => {
                              setFormData(prev => ({ ...prev, position: job.title }))
                              setActiveTab('application')
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Apply for this Position
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'application' && (
              <motion.div
                key="application"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Application Form Content */}
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Apply for a Position
                    </h2>
                    <p className="text-lg text-gray-600">
                      Ready to join our team? Fill out the application form below and we'll get back to you soon.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                            Position Applied For *
                          </label>
                          <select
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          >
                            <option value="">Select a position</option>
                            {positions.map((pos, index) => (
                              <option key={index} value={pos}>{pos}</option>
                            ))}
                          </select>
                          {formData.position && formData.position !== 'Other' && (
                            <div className="mt-2 text-sm text-blue-600">
                              ✓ Position selected from our current openings
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Select experience level</option>
                          <option value="0-1 years">0-1 years</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5-8 years">5-8 years</option>
                          <option value="8-10 years">8-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                          Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            accept=".pdf,.doc,.docx"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                          />
                          {formData.resume && (
                            <div className="mt-2 text-sm text-green-600 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {formData.resume.name} ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Cover Letter */}
                      <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter / Message
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="text-center">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                            isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                          } text-white`}
                          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting Application...
                            </div>
                          ) : (
                            'Submit Application'
                          )}
                        </motion.button>
                      </div>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <motion.div
                          className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-green-800 font-medium">
                              Application submitted successfully! We'll review your application and get back to you soon.
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          className="bg-red-50 border border-red-200 rounded-lg p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-red-800 font-medium">
                              There was an error submitting your application. Please try again or contact us directly at careers@nesterautomation.com
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </form>

                    {/* Alternative Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                      <p className="text-gray-600 mb-2">
                        Having trouble with the form? Send your application directly to:
                      </p>
                      <a 
                        href="mailto:careers@nesterautomation.com" 
                        className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                      >
                        careers@nesterautomation.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-gray-600">
              We believe in taking care of our team with comprehensive benefits and perks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={`rounded-lg p-6 border-2 ${benefit.color} hover:shadow-lg transition-shadow duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-800/90 to-purple-700/90" />
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rotate-45"
            animate={{ rotate: 405, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-400/20 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our team of innovators and help shape the future of industrial automation. 
              Send us your resume and let's discuss your career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="mailto:careers@nesterautomation.com?subject=Resume Submission&body=Dear Hiring Team,%0D%0A%0D%0APlease find my resume attached for your consideration.%0D%0A%0D%0ABest regards"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Resume
              </motion.a>
              <motion.a 
                href="mailto:hr@nesterautomation.com?subject=HR Inquiry&body=Dear HR Team,%0D%0A%0D%0AI would like to inquire about career opportunities at Nester Automation.%0D%0A%0D%0ABest regards"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact HR
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Career
