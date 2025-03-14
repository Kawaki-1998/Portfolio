import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { gradientText, gradientBg, gradientHover, glowEffect } from '../utils/gradients';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import AnimatedSection from './AnimatedSection';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [isHeroActive, setIsHeroActive] = useState(true);
  
  const navigateToNext = () => {
    setIsHeroActive(false);
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'instant' });
    }
  };

  // Listen for a custom event to reactivate hero
  useEffect(() => {
    const handleHeroActivation = () => {
      setIsHeroActive(true);
    };

    window.addEventListener('activateHero', handleHeroActivation);
    return () => {
      window.removeEventListener('activateHero', handleHeroActivation);
    };
  }, []);

  useEffect(() => {
    if (isHeroActive) {
      document.body.style.overflow = 'hidden';
      // Hide all sections except hero and the footer
      const elementsToHide = document.querySelectorAll('section:not(#hero), footer');
      elementsToHide.forEach(element => {
        (element as HTMLElement).style.display = 'none';
      });
    } else {
      document.body.style.overflow = '';
      // Show all sections and footer
      const elementsToShow = document.querySelectorAll('section:not(#hero), footer');
      elementsToShow.forEach(element => {
        (element as HTMLElement).style.display = '';
      });
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isHeroActive]);

  return (
    <AnimatedSection 
      id="hero" 
      className={`fixed inset-0 w-full h-screen flex flex-col z-50 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'} ${!isHeroActive ? 'hidden' : ''}`}
    >
      <Navbar />
      {/* Gradient Orbs */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={`absolute -top-48 -left-48 w-96 h-96 ${isDarkMode ? 'bg-violet-500/20' : 'bg-violet-500/10'} rounded-full blur-3xl`}
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute -bottom-48 -right-48 w-96 h-96 ${isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-500/10'} rounded-full blur-3xl`}
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="space-y-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              variants={fadeInUp}
            >
              <motion.span 
                className={`block ${isDarkMode ? 'text-white opacity-90' : 'text-slate-900'}`}
                variants={fadeInUp}
              >
                Hi, I'm Abhishek
              </motion.span>
              <motion.span 
                className={`block ${gradientText}`}
                variants={fadeInUp}
              >
                Data & Security
              </motion.span>
              <motion.span 
                className={`block ${isDarkMode ? 'text-white opacity-90' : 'text-slate-900'}`}
                variants={fadeInUp}
              >
                Professional
              </motion.span>
            </motion.h1>

            <motion.p 
              className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto`}
              variants={fadeInUp}
            >
              Transforming Data into Insights, Securing Digital Futures
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={fadeInUp}
            >
              <motion.button
                onClick={navigateToNext}
                className={`px-8 py-3 rounded-full text-white ${gradientBg} ${gradientHover} transition-all duration-300 ${glowEffect}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.work')}
              </motion.button>
              <motion.button
                onClick={navigateToNext}
                className={`px-8 py-3 rounded-full ${
                  isDarkMode 
                    ? 'text-white border-white/20 hover:bg-white/10' 
                    : 'text-slate-900 border-slate-900/20 hover:bg-slate-900/10'
                } border-2 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.contact')}
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={navigateToNext}
          >
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
              {t('hero.scroll')}
            </motion.p>
            
            <motion.div
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-slate-900/10 hover:bg-slate-900/20'
              } transition-colors`}
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowDown className={`w-6 h-6 ${
                isDarkMode 
                  ? 'text-white/70 group-hover:text-white' 
                  : 'text-slate-900/70 group-hover:text-slate-900'
              } transition-colors`} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-transparent to-slate-900/50' : 'from-transparent to-slate-50/50'}`} />
    </AnimatedSection>
  );
}