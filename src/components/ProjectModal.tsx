import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types';
import { useTheme } from '../utils/ThemeContext';

interface ProjectModalProps {
  project: ProjectItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { isDarkMode } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative`}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-100 hover:bg-gray-200'
              } transition-colors`}
            >
              <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            <div className="aspect-video w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>

            <div className="p-6">
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${
                      isDarkMode 
                        ? 'bg-indigo-900/50 text-indigo-300' 
                        : 'bg-indigo-100 text-indigo-800'
                    } rounded-full text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.details && (
                <div className="space-y-6">
                  {project.details.problem && (
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem</h4>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{project.details.problem}</p>
                    </div>
                  )}

                  {project.details.solution && (
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solution</h4>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{project.details.solution}</p>
                    </div>
                  )}

                  {project.details.features && (
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Features</h4>
                      <ul className={`list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {project.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.details.impact && (
                    <div>
                      <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Impact</h4>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{project.details.impact}</p>
                    </div>
                  )}
                </div>
              )}

              <div className={`flex gap-4 mt-6 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'bg-indigo-500 hover:bg-indigo-600' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}