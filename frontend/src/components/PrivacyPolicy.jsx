import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, submit a contact form, request a quote, or communicate with us.",
        "Personal Information: This may include your name, email address, phone number, company name, job title, and any other information you choose to provide.",
        "Technical Information: We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, and usage data.",
        "Cookies and Similar Technologies: We use cookies and similar tracking technologies to collect information about your browsing activities."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and website functionality.",
        "To process and respond to your inquiries, requests for quotes, and customer service needs.",
        "To send you technical notices, updates, security alerts, and administrative messages.",
        "To communicate with you about products, services, offers, and events that may be of interest to you.",
        "To analyze usage patterns and trends to enhance user experience.",
        "To comply with legal obligations and protect our rights and interests."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.",
        "Service Providers: We may share information with trusted third-party service providers who assist us in operating our website and conducting business.",
        "Legal Requirements: We may disclose information if required by law or in response to valid legal requests.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.",
        "Protection of Rights: We may share information to protect our rights, property, or safety, or that of our users or others."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        "We use industry-standard encryption protocols for data transmission and storage.",
        "Access to personal information is restricted to authorized personnel who need the information to perform their job functions.",
        "We regularly review and update our security practices to ensure ongoing protection of your data.",
        "However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.",
        "When we no longer need your personal information, we will securely delete or anonymize it.",
        "Some information may be retained for longer periods for legal, regulatory, or legitimate business purposes."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You can request that we correct or update inaccurate or incomplete personal information.",
        "Deletion: You may request that we delete your personal information, subject to certain exceptions.",
        "Opt-out: You can opt out of receiving promotional communications from us by following the unsubscribe instructions in our emails.",
        "Cookies: You can control cookies through your browser settings, though some features of our website may not function properly if cookies are disabled."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "If you are located outside of India, please note that we may transfer your information to and process it in India and other countries.",
        "We ensure that such transfers are conducted in accordance with applicable data protection laws.",
        "By using our services, you consent to the transfer of your information to India and other countries that may have different data protection laws."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not intended for children under the age of 18.",
        "We do not knowingly collect personal information from children under 18.",
        "If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly."
      ]
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites or services that are not owned or controlled by us.",
        "We are not responsible for the privacy practices or content of these third-party sites.",
        "We encourage you to review the privacy policies of any third-party sites you visit."
      ]
    },
    {
      title: "Updates to This Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We will notify you of any material changes by posting the new privacy policy on our website and updating the 'Last Updated' date.",
        "Your continued use of our services after any changes constitutes acceptance of the updated privacy policy."
      ]
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
            Privacy <span className="text-yellow-400">Policy</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
          <motion.div
            className="text-lg text-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>Last Updated: August 8, 2025</p>
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
            <span className="text-gray-600 font-medium">Privacy Policy</span>
          </motion.nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Nester Automation</h2>
              <p className="text-gray-700 leading-relaxed">
                At Nester Automation, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our services, or interact with us in any way. Please read this policy carefully to understand our practices 
                regarding your personal data.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <ul className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us About Privacy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 mb-3">
                  If you have any questions about this Privacy Policy or our data practices:
                </p>
                <a 
                  href="mailto:privacy@nesterautomation.com" 
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                >
                  privacy@nesterautomation.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Mailing Address</h4>
                <p className="text-gray-600">
                  Nester Automation<br />
                  Privacy Officer<br />
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                We will respond to privacy-related inquiries within 30 days of receipt.
              </p>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/terms-of-use" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Terms of Use
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
