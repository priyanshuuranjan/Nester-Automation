import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Nester Automation website and services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use our services or access our website.",
        "These terms apply to all visitors, users, and others who access or use our services.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on Nester Automation's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials",
        "This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time."
      ]
    },
    {
      title: "Services Description",
      content: [
        "Nester Automation provides industrial automation solutions, including but not limited to:",
        "• PLC programming and automation system design",
        "• Robotic integration and manufacturing automation",
        "• Control panel design and manufacturing",
        "• Mechanical design and engineering services",
        "• Installation, commissioning, and maintenance services",
        "All services are subject to separate agreements and specifications that will be provided upon engagement."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account information and password.",
        "You agree to accept responsibility for all activities that occur under your account or password.",
        "You must not use our services for any unlawful purpose or to solicit the performance of unlawful acts.",
        "You agree not to transmit any viruses, malware, or other harmful computer code through our systems.",
        "You must not attempt to gain unauthorized access to our systems or networks.",
        "You are responsible for ensuring that your use of our services complies with applicable laws and regulations."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "The service and its original content, features, and functionality are and will remain the exclusive property of Nester Automation and its licensors.",
        "The service is protected by copyright, trademark, and other laws.",
        "Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.",
        "All designs, specifications, and technical documentation remain the property of Nester Automation unless otherwise agreed in writing.",
        "You retain ownership of any content you submit, but grant us a license to use it as necessary to provide our services."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.",
        "We collect and use information in accordance with our Privacy Policy.",
        "You consent to the collection, use, and sharing of your information as described in our Privacy Policy.",
        "We implement appropriate security measures to protect your personal information.",
        "You have certain rights regarding your personal data as outlined in our Privacy Policy."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Payment terms for services will be specified in individual service agreements or quotations.",
        "All payments are due within the timeframe specified in the applicable agreement.",
        "Late payments may be subject to interest charges as specified in the service agreement.",
        "We reserve the right to suspend services for non-payment.",
        "All prices are subject to applicable taxes unless otherwise specified.",
        "Refund policies will be outlined in individual service agreements."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "In no event shall Nester Automation or its suppliers be liable for any damages arising out of the use or inability to use our services.",
        "This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.",
        "Our total liability for any claim arising from or relating to our services shall not exceed the amount paid by you for the specific service giving rise to the claim.",
        "Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability, so some of the above limitations may not apply to you.",
        "Nothing in these terms shall limit our liability for death or personal injury caused by our negligence."
      ]
    },
    {
      title: "Disclaimers",
      content: [
        "The information on this website is provided on an 'as is' basis without any warranties, express or implied.",
        "We do not warrant that the service will be uninterrupted, timely, secure, or error-free.",
        "We do not warrant that the results obtained from the use of the service will be accurate or reliable.",
        "You understand that any material downloaded or obtained through the use of the service is done at your own discretion and risk.",
        "We disclaim all warranties of any kind, whether express or implied, including merchantability and fitness for a particular purpose."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless Nester Automation from and against any claims, actions, or demands.",
        "This includes any liabilities, damages, costs, and expenses (including reasonable attorney's fees) arising from your use of our services.",
        "This indemnification obligation includes claims arising from your violation of these terms or applicable laws.",
        "We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.",
        "You agree to cooperate with our defense of any such claims."
      ]
    },
    {
      title: "Termination",
      content: [
        "We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever.",
        "This includes if you breach these Terms of Use.",
        "Upon termination, your right to use the service will cease immediately.",
        "All provisions of the Terms which by their nature should survive termination shall survive termination.",
        "This includes ownership provisions, warranty disclaimers, indemnity, and limitations of liability."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be interpreted and governed by the laws of India.",
        "Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.",
        "If any provision of these Terms is found to be unenforceable, the remainder shall continue in full force and effect.",
        "Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
      ]
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to modify or replace these Terms at any time at our sole discretion.",
        "If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.",
        "What constitutes a material change will be determined at our sole discretion.",
        "By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.",
        "If you do not agree to the new terms, please stop using the service."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions about these Terms of Use, please contact us at:",
        "Email: legal@nesterautomation.com",
        "Address: Nester Automation, Mumbai, Maharashtra, India",
        "We will respond to inquiries within 5-7 business days.",
        "For urgent legal matters, please mark your communication as 'URGENT' in the subject line."
      ]
    }
  ];

  const keyPoints = [
    {
      icon: "⚖️",
      title: "Legal Compliance",
      description: "All users must comply with applicable laws and regulations when using our services."
    },
    {
      icon: "🔒",
      title: "Data Security",
      description: "We implement robust security measures to protect your information and our systems."
    },
    {
      icon: "💼",
      title: "Professional Use",
      description: "Our services are designed for professional and commercial applications in industrial automation."
    },
    {
      icon: "🤝",
      title: "Partnership",
      description: "We work collaboratively with clients while maintaining clear terms and responsibilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Terms of <span className="text-yellow-400">Use</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Please read these terms carefully before using our website and services.
          </motion.p>
          <motion.div
            className="text-lg text-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>Last Updated: August 8, 2025</p>
            <p className="mt-2">Effective Date: August 8, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav 
            className="flex items-center space-x-2 text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">Terms of Use</span>
          </motion.nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Use ("Terms") govern your access to and use of the Nester Automation website, 
                services, and any related applications or platforms. By accessing our website or using our services, 
                you agree to be bound by these terms. Please read them carefully and ensure you understand all provisions 
                before proceeding.
              </p>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{point.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                </div>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        {item.startsWith('•') ? (
                          <p className="text-gray-700 leading-relaxed ml-4">{item}</p>
                        ) : (
                          <>
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700 leading-relaxed">{item}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">⚠️</span>
              <h3 className="text-2xl font-bold text-gray-900">Important Notice</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Legal Binding Agreement:</strong> These terms constitute a legally binding agreement between you and Nester Automation. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
              <p>
                <strong>Professional Services:</strong> Our services are designed for professional and commercial use. 
                If you are using our services for personal projects, these terms still apply in full.
              </p>
              <p>
                <strong>Regular Updates:</strong> We may update these terms periodically. Continued use of our services 
                after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact and Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions About These Terms?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Legal Inquiries</h4>
                <p className="text-gray-600 mb-3">
                  For questions about these terms or legal matters:
                </p>
                <a 
                  href="mailto:legal@nesterautomation.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  legal@nesterautomation.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">General Support</h4>
                <p className="text-gray-600 mb-3">
                  For general questions and support:
                </p>
                <a 
                  href="mailto:info@nesterautomation.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  info@nesterautomation.com
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Related Documents</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/privacy-policy" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
