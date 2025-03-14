import { Heart } from 'lucide-react';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-16 relative`}>
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t('footer.title')}
          </h3>
          
          <p className={`max-w-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
            {t('footer.description')}
          </p>

          <motion.div 
            className="flex items-center space-x-2 text-base"
            whileHover={{ scale: 1.05 }}
          >
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t('footer.madeWith')}</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{t('footer.by')}</span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={`mt-12 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm">© {new Date().getFullYear()} Abhishek Ashok Hippargi. {t('footer.copyright')}</p>
        </motion.div>
      </div>
    </footer>
  );
}