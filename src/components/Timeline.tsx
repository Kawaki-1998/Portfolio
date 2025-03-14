import { Briefcase, GraduationCap, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, educationData } from '../data/timeline';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import { TimelineItem } from '../types';
import AnimatedSection from './AnimatedSection';
import { gradientText } from '../utils/gradients';
import { useState } from 'react';

interface ModalProps {
  item: TimelineItem;
  onClose: () => void;
  isDarkMode: boolean;
}

const DescriptionModal = ({ item, onClose, isDarkMode }: ModalProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-xl max-w-lg w-full relative`}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
      >
        <X className="w-6 h-6" />
      </button>

      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {item.titleKey}
      </h3>
      <p className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} font-medium`}>
        {item.companyKey}
      </p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mt-1`}>
        {item.location}
      </p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
        {item.year}
      </p>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-4 text-justify`}>
        {item.descriptionKey}
      </p>
      <a
        href="https://www.linkedin.com/in/abhishek19121998"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center mt-6 ${
          isDarkMode 
            ? 'text-indigo-400 hover:text-indigo-300' 
            : 'text-indigo-600 hover:text-indigo-700'
        }`}
      >
        More Info <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    </motion.div>
  </motion.div>
);

const TimelineSection = ({ items, title, icon: Icon }: { items: TimelineItem[], title: string, icon: any }) => {
  const { isDarkMode } = useTheme();
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  
  return (
    <motion.div 
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex items-center justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Icon className={`w-8 h-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
        <h3 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />

        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content */}
              <div className="w-1/2 pr-8 pl-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  } cursor-pointer`}
                  onClick={() => setSelectedItem(item)}
                >
                  <span className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-800'} rounded-full text-sm font-medium mb-2`}>
                    {item.year}
                  </span>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.titleKey}</h3>
                  <p className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} font-medium`}>{item.companyKey}</p>
                  {item.location && (
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mt-1`}>{item.location}</p>
                  )}
                </motion.div>
              </div>

              {/* Center Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${
                  isDarkMode ? 'bg-indigo-500' : 'bg-indigo-600'
                } rounded-full flex items-center justify-center z-10`}
              >
                {item.icon === 'work' ? (
                  <Briefcase className="w-6 h-6 text-white" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-white" />
                )}
              </motion.div>

              {/* Empty space for the other side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <DescriptionModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
            isDarkMode={isDarkMode}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Timeline() {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <AnimatedSection 
      id="timeline" 
      className={`py-20 bg-gradient-to-b ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('timeline.title')}
        </motion.h2>
        
        <TimelineSection 
          items={experienceData} 
          title={t('timeline.experience')} 
          icon={Briefcase}
        />
        
        <TimelineSection 
          items={educationData} 
          title={t('timeline.education')} 
          icon={GraduationCap}
        />
      </div>
    </AnimatedSection>
  );
}