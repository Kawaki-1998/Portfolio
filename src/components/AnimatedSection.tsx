import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function AnimatedSection({ children, id, className = '' }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ 
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      exit={{ opacity: 0 }}
      viewport={{ 
        once: false,
        amount: 0.3 // Controls how much of the section needs to be in view to trigger the animation
      }}
    >
      {children}
    </motion.section>
  );
} 