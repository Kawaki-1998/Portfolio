import { Menu, X, Github, Linkedin, Mail, Moon, Sun, Languages } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t('nav.about')}</a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t('nav.skills')}</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t('nav.projects')}</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">{t('nav.contact')}</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Kawaki-1998" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhishek19121998/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Abhishek Ashok Hippargi <abhishekashokhippargi@gmail.com>" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                <Mail className="w-5 h-5" />
              </a>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors flex items-center gap-1"
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-medium">{t('nav.language')}</span>
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400" onClick={() => setIsOpen(false)}>{t('nav.skills')}</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400" onClick={() => setIsOpen(false)}>{t('nav.projects')}</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
              <div className="flex space-x-4 py-2">
                <a href="https://github.com/Kawaki-1998" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/abhishek19121998/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:Abhishek Ashok Hippargi <abhishekashokhippargi@gmail.com>" className="text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}