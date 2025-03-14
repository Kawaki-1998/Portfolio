import { ArrowUp } from 'lucide-react';
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../utils/ThemeContext";
import { useLanguage } from "../utils/LanguageContext";
import { gradientText } from "../utils/gradients";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  
  const navigateToHero = () => {
    // Dispatch custom event to activate hero
    window.dispatchEvent(new Event('activateHero'));
    // Show hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.display = '';
      heroSection.classList.remove('hidden');
    }
  };
  
  return (
    <AnimatedSection 
      id="about" 
      className={`pt-24 pb-20 ${isDarkMode ? 'bg-slate-900' : 'bg-white'} relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center gap-2 cursor-pointer group mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={navigateToHero}
        >
          <motion.div
            className={`p-2 rounded-full ${
              isDarkMode 
                ? 'bg-white/10 hover:bg-white/20' 
                : 'bg-slate-900/10 hover:bg-slate-900/20'
            } transition-colors`}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowUp className={`w-6 h-6 ${
              isDarkMode 
                ? 'text-white/70 group-hover:text-white' 
                : 'text-slate-900/70 group-hover:text-slate-900'
            } transition-colors`} />
          </motion.div>
          <motion.p
            className={`text-sm ${isDarkMode ? 'text-white/70' : 'text-slate-900/70'} group-hover:opacity-100 transition-opacity`}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Back to top
          </motion.p>
        </motion.div>

        <motion.h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            variants={fadeInUp}
          >
            <img
              src="/piyush.png"
              alt="Abhishek"
              className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-justify`} variants={fadeInUp}>
              Recent graduate with a Master's in Systems Science and Engineering, complemented by a specialized Microprogram in Artificial Intelligence. With over 2 years of hands-on experience in data analysis and IT operations, I bring a unique blend of academic excellence and practical expertise in machine learning, cybersecurity, and systems administration. My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications, while my professional experience has honed my ability to implement solutions in real-world scenarios.
            </motion.p>

            <motion.p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-justify`} variants={fadeInUp}>
              Passionate about leveraging AI/ML technologies for enhanced security solutions and data-driven insights. My diverse background spans from implementing machine learning models to conducting security assessments, making me adaptable to roles in data analysis, cybersecurity, and IT support. I excel in Python programming, SQL database management, and security tools like Splunk and Nessus. Currently pursuing advanced certifications in both ML and cybersecurity to further strengthen my expertise, with a particular focus on the OSCP certification to enhance my penetration testing capabilities.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className={`p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <h3 className={`font-bold text-2xl ${gradientText}`}>2+</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-1`}>Years Experience</p>
              </div>
              <div className={`p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <h3 className={`font-bold text-2xl ${gradientText}`}>15+</h3>
                <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} mt-1`}>Projects Completed</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
