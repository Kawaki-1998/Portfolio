import { Mail, MapPin, Send, Loader } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import AnimatedSection from './AnimatedSection';
import { gradientText } from '../utils/gradients';

// Initialize EmailJS with your public key
emailjs.init("kUZYT5znk4jWx37mt");

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      const loadingToast = toast.loading('Sending message...');
      
      const result = await emailjs.sendForm(
        'service_xtztpgj',
        'template_2n6wdrq',
        formRef.current,
        'kUZYT5znk4jWx37mt'
      );

      toast.dismiss(loadingToast);

      if (result.text === 'OK') {
        toast.success(t('contact.form.success') || 'Message sent successfully!', {
          duration: 5000
        });
        formRef.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email error:', error);
      toast.error(t('contact.form.error') || 'Failed to send message. Please try again.', {
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection 
      id="contact" 
      className={`py-20 bg-gradient-to-b ${isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-white'}`}
    >
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-16 ${gradientText}`}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {t('contact.subtitle')}
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('contact.description')}
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'} rounded-full flex items-center justify-center`}>
                  <Mail className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('contact.email')}
                  </p>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    abhishekashokhippargi@gmail.com
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'} rounded-full flex items-center justify-center`}>
                  <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                <div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t('contact.location')}
                  </p>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Ottawa, Canada
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeInUp}
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                }`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                }`}
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`mt-1 block w-full rounded-md shadow-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500' 
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                }`}
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 px-8 py-3 text-white rounded-md transition-colors disabled:opacity-50 ${
                isDarkMode 
                  ? 'bg-indigo-500 hover:bg-indigo-600' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  {t('contact.form.send')}
                  <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}