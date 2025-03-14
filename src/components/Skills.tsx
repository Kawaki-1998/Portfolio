import { Code, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import { gradientText } from '../utils/gradients';
import AnimatedSection from './AnimatedSection';

const skills = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    category: 'DevOps',
    icon: Terminal,
    skills: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
  },
  {
    category: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Design',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'],
  },
];

export default function Skills() {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <AnimatedSection 
      id="skills" 
      className={`py-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className={`${isDarkMode ? 'bg-slate-800' : 'bg-white'} p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`w-14 h-14 ${isDarkMode ? 'bg-violet-500/10' : 'bg-violet-50'} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`w-7 h-7 ${isDarkMode ? 'text-violet-400' : 'text-violet-600'}`} />
                </motion.div>
                
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`px-3 py-1.5 ${
                        isDarkMode 
                          ? 'bg-violet-500/10 text-violet-300' 
                          : 'bg-violet-50 text-violet-700'
                      } rounded-lg text-sm font-medium`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}