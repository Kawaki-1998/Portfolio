import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../utils/ThemeContext';
import { gradientText } from '../utils/gradients';
import AnimatedSection from './AnimatedSection';
import { ExternalLink } from 'lucide-react';

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
  linkedinUrl?: string;
}

const experiences: ExperienceData[] = [
  {
    company: 'Vosyn',
    role: 'Cyber Security Analyst',
    duration: 'October 2024 - Present',
    location: 'Greater Toronto Area, Canada',
    details: [
      'Working in a Cloud SecOps team utilizing Google Cloud Platform (GCP) to strengthen security operations.',
      'Managing threat detection and response through SIEM tools to ensure the security and compliance of cloud infrastructure.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhishek19121998/'
  },
  {
    company: 'Icanbewell.ca',
    role: 'Data Analyst',
    duration: 'May 2023 - September 2023',
    location: 'Ottawa, Ontario, Canada',
    details: [
      'Developed dynamic Power BI dashboards to display engagement metrics and track monthly usage trends.',
      'Utilized Power BI and Google Analytics to analyze data and derive actionable insights.',
      'Oversaw database management through Google Firebase and optimized CI/CD workflows.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhishek19121998/'
  },
  {
    company: 'PES University',
    role: 'Research Associate',
    duration: 'December 2021 - August 2022',
    location: 'Bengaluru, Karnataka, India',
    details: [
      'Collaborated with ISRO to develop ML/GAN fire detection system achieving 100% accuracy.',
      'Engineered secure prototypes using ESP32 and Raspberry Pi 4 with C and Python.',
      'Presented findings at the 2022 IEEE International Conference on space safety technology.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhishek19121998/'
  },
  {
    company: 'DRDO',
    role: 'Electronic Engineer',
    duration: 'April 2021 - June 2021',
    location: 'Bengaluru, Karnataka, India',
    details: [
      'Worked on frequency-modulated continuous-wave (FMCW) radars for foreign object detection.',
      'Implemented experiments using VHDL, Python, Verilog, and MATLAB.',
      'Extended FMCW radar signal range through various configurations and ROS framework.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhishek19121998/'
  }
];

export default function Experience() {
  const { isDarkMode } = useTheme();
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  return (
    <AnimatedSection 
      id="experience" 
      className={`pt-24 pb-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div 
                className={`p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setSelectedExp(selectedExp === index ? null : index)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mt-1`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm`}>
                      {exp.duration}
                    </p>
                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mt-1`}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {selectedExp === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className={`border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'} pt-4`}>
                      <ul className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} space-y-2 text-justify`}>
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                      {exp.linkedinUrl && (
                        <a
                          href={exp.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center mt-4 ${isDarkMode ? 'text-violet-400 hover:text-violet-300' : 'text-violet-600 hover:text-violet-700'}`}
                        >
                          More Info <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 