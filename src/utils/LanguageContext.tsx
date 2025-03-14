import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.language': 'FR',

    // Hero
    'hero.title.line1': 'Building the Future',
    'hero.title.line2': 'One Line of Code',
    'hero.title.line3': 'at a Time',
    'hero.subtitle': 'Full Stack Developer | UI/UX Enthusiast | Problem Solver',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Contact Me',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.title': 'About Me',
    'about.description1': "Hi, I'm Abhishek, a passionate Full Stack Developer with a keen eye for creating elegant solutions. I specialize in building robust and scalable web applications that deliver exceptional user experiences.",
    'about.description2': "With a strong foundation in both frontend and backend development, I help businesses transform their ideas into reality. I'm dedicated to writing clean, efficient code and implementing best practices in software development.",
    'about.stats.years': 'Years Experience',
    'about.stats.projects': 'Projects Completed',

    // Skills
    'skills.title': 'Skills & Expertise',

    // Timeline
    'timeline.title': 'Experience & Education',
    'timeline.experience': 'Experience',
    'timeline.education': 'Education',

    // Timeline Items
    'timeline.experience1.title': 'Full Stack Developer',
    'timeline.experience1.company': 'Freelance',
    'timeline.experience1.description': 'Building modern web applications and providing technical solutions',
    
    'timeline.experience2.title': 'Software Engineer',
    'timeline.experience2.company': 'Cars24',
    'timeline.experience2.description': 'Full Stack Development with React, Node.js, and AWS',
    
    'timeline.experience3.title': 'Frontend Developer',
    'timeline.experience3.company': 'Incredible.dev',
    'timeline.experience3.description': 'Building modern web applications with React and TypeScript',
    
    'timeline.experience4.title': 'DevOps Engineer',
    'timeline.experience4.company': 'BNP Paribas',
    'timeline.experience4.description': 'Managing cloud infrastructure and CI/CD pipelines',
    
    'timeline.education1.title': 'Master of Computer Applications',
    'timeline.education1.company': 'VIT Vellore',
    'timeline.education1.description': 'Focused on advanced computing and software development',
    
    'timeline.education2.title': 'Bachelor of Computer Applications',
    'timeline.education2.company': 'VSICS',
    'timeline.education2.description': 'Foundation in computer science and programming',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.code': 'Code',
    'projects.demo': 'Live Demo',

    // Project Details
    'projects.hirrd.title': 'Hirrd',
    'projects.hirrd.description': 'A modern job portal application connecting talent with opportunities',
    'projects.hirrd.problem': 'Traditional job boards lack modern features and user experience',
    'projects.hirrd.solution': 'Built a streamlined job portal with real-time updates and intelligent matching',
    'projects.hirrd.features.1': 'Real-time job notifications',
    'projects.hirrd.features.2': 'AI-powered job matching',
    'projects.hirrd.features.3': 'Advanced search filters',
    'projects.hirrd.features.4': 'Application tracking system',
    'projects.hirrd.impact': 'Helping thousands of job seekers find their dream positions',

    'projects.schedulrr.title': 'Schedulrr',
    'projects.schedulrr.description': 'A Calendly clone for seamless meeting scheduling',
    'projects.schedulrr.problem': 'Complex meeting scheduling across time zones',
    'projects.schedulrr.solution': 'Created an intuitive scheduling platform with automated time zone handling',
    'projects.schedulrr.features.1': 'Multiple calendar integration',
    'projects.schedulrr.features.2': 'Custom availability rules',
    'projects.schedulrr.features.3': 'Automated reminders',
    'projects.schedulrr.features.4': 'Team scheduling',
    'projects.schedulrr.impact': 'Reduced meeting scheduling time by 80% for users',

    'projects.zcrum.title': 'Zcrum',
    'projects.zcrum.description': 'A Jira-inspired project management solution',
    'projects.zcrum.problem': 'Need for a simplified project management tool for small teams',
    'projects.zcrum.solution': 'Developed a streamlined alternative to complex enterprise tools',
    'projects.zcrum.features.1': 'Kanban and Scrum boards',
    'projects.zcrum.features.2': 'Sprint planning',
    'projects.zcrum.features.3': 'Time tracking',
    'projects.zcrum.features.4': 'Performance analytics',
    'projects.zcrum.impact': 'Helping teams increase productivity by 40%',

    'projects.reflct.title': 'Reflct',
    'projects.reflct.description': 'A minimalist journaling application',
    'projects.reflct.problem': 'Digital journaling apps are often cluttered and complex',
    'projects.reflct.solution': 'Created a clean, focused writing experience with powerful features',
    'projects.reflct.features.1': 'Markdown support',
    'projects.reflct.features.2': 'Daily prompts',
    'projects.reflct.features.3': 'Mood tracking',
    'projects.reflct.features.4': 'Privacy-focused design',
    'projects.reflct.impact': 'Helping users maintain consistent journaling habits',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's talk about everything!",
    'contact.description': 'Feel free to reach out for collaborations, opportunities, or just a friendly chat.',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Failed to send message. Please try again.',

    // Footer
    'footer.title': "Let's Build Something Amazing Together",
    'footer.description': "Thank you for exploring my portfolio. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    'footer.madeWith': 'Made with',
    'footer.by': 'by Abhishek',
    'footer.copyright': 'All rights reserved.',

    // Tech Stack
    'projects.tech.react': 'React',
    'projects.tech.nodejs': 'Node.js',
    'projects.tech.mongodb': 'MongoDB',
    'projects.tech.express': 'Express',
    'projects.tech.nextjs': 'Next.js',
    'projects.tech.typescript': 'TypeScript',
    'projects.tech.prisma': 'Prisma',
    'projects.tech.trpc': 'tRPC',
    'projects.tech.redux': 'Redux',
    'projects.tech.postgresql': 'PostgreSQL',
    'projects.tech.tailwind': 'Tailwind CSS',
    'projects.tech.supabase': 'Supabase',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.language': 'EN',

    // Hero
    'hero.title.line1': 'Construire le Futur',
    'hero.title.line2': 'Une Ligne de Code',
    'hero.title.line3': 'à la Fois',
    'hero.subtitle': 'Développeur Full Stack | Passionné UI/UX | Résolveur de Problèmes',
    'hero.cta.work': 'Voir Mes Projets',
    'hero.cta.contact': 'Me Contacter',
    'hero.scroll': 'Défiler pour explorer',

    // About
    'about.title': 'À Propos de Moi',
    'about.description1': "Bonjour, je suis Abhishek, un développeur Full Stack passionné avec un œil attentif pour créer des solutions élégantes. Je me spécialise dans la construction d'applications web robustes et évolutives qui offrent des expériences utilisateur exceptionnelles.",
    'about.description2': "Avec une solide base en développement frontend et backend, j'aide les entreprises à transformer leurs idées en réalité. Je me consacre à l'écriture de code propre et efficace et à la mise en œuvre des meilleures pratiques en développement logiciel.",
    'about.stats.years': "Années d'Expérience",
    'about.stats.projects': 'Projets Réalisés',

    // Skills
    'skills.title': 'Compétences & Expertise',

    // Timeline
    'timeline.title': 'Expérience & Formation',
    'timeline.experience': 'Expérience',
    'timeline.education': 'Formation',

    // Timeline Items
    'timeline.experience1.title': 'Développeur Full Stack',
    'timeline.experience1.company': 'Freelance',
    'timeline.experience1.description': 'Création d\'applications web modernes et fourniture de solutions techniques',
    
    'timeline.experience2.title': 'Ingénieur Logiciel',
    'timeline.experience2.company': 'Cars24',
    'timeline.experience2.description': 'Développement Full Stack avec React, Node.js et AWS',
    
    'timeline.experience3.title': 'Développeur Frontend',
    'timeline.experience3.company': 'Incredible.dev',
    'timeline.experience3.description': 'Création d\'applications web modernes avec React et TypeScript',
    
    'timeline.experience4.title': 'Ingénieur DevOps',
    'timeline.experience4.company': 'BNP Paribas',
    'timeline.experience4.description': 'Gestion de l\'infrastructure cloud et des pipelines CI/CD',
    
    'timeline.education1.title': 'Master en Applications Informatiques',
    'timeline.education1.company': 'VIT Vellore',
    'timeline.education1.description': 'Spécialisation en informatique avancée et développement logiciel',
    
    'timeline.education2.title': 'Licence en Applications Informatiques',
    'timeline.education2.company': 'VSICS',
    'timeline.education2.description': 'Formation en informatique et programmation',

    // Projects
    'projects.title': 'Projets en Vedette',
    'projects.code': 'Code',
    'projects.demo': 'Démo Live',

    // Project Details
    'projects.hirrd.title': 'Hirrd',
    'projects.hirrd.description': 'Une application moderne de portail d\'emploi connectant les talents aux opportunités',
    'projects.hirrd.problem': 'Les sites d\'emploi traditionnels manquent de fonctionnalités modernes et d\'expérience utilisateur',
    'projects.hirrd.solution': 'Création d\'un portail d\'emploi optimisé avec mises à jour en temps réel et correspondance intelligente',
    'projects.hirrd.features.1': 'Notifications d\'emploi en temps réel',
    'projects.hirrd.features.2': 'Correspondance d\'emploi alimentée par l\'IA',
    'projects.hirrd.features.3': 'Filtres de recherche avancés',
    'projects.hirrd.features.4': 'Système de suivi des candidatures',
    'projects.hirrd.impact': 'Aide des milliers de chercheurs d\'emploi à trouver leur poste de rêve',

    'projects.schedulrr.title': 'Schedulrr',
    'projects.schedulrr.description': 'Un clone de Calendly pour la planification fluide de réunions',
    'projects.schedulrr.problem': 'Planification complexe de réunions à travers les fuseaux horaires',
    'projects.schedulrr.solution': 'Création d\'une plateforme intuitive de planification avec gestion automatisée des fuseaux horaires',
    'projects.schedulrr.features.1': 'Intégration de plusieurs calendriers',
    'projects.schedulrr.features.2': 'Règles de disponibilité personnalisées',
    'projects.schedulrr.features.3': 'Rappels automatisés',
    'projects.schedulrr.features.4': 'Planification d\'équipe',
    'projects.schedulrr.impact': 'Réduction de 80% du temps de planification des réunions pour les utilisateurs',

    'projects.zcrum.title': 'Zcrum',
    'projects.zcrum.description': 'Une solution de gestion de projet inspirée de Jira',
    'projects.zcrum.problem': 'Besoin d\'un outil de gestion de projet simplifié pour les petites équipes',
    'projects.zcrum.solution': 'Développement d\'une alternative simplifiée aux outils d\'entreprise complexes',
    'projects.zcrum.features.1': 'Tableaux Kanban et Scrum',
    'projects.zcrum.features.2': 'Planification de sprint',
    'projects.zcrum.features.3': 'Suivi du temps',
    'projects.zcrum.features.4': 'Analyses de performance',
    'projects.zcrum.impact': 'Aide les équipes à augmenter leur productivité de 40%',

    'projects.reflct.title': 'Reflct',
    'projects.reflct.description': 'Une application de journal minimaliste',
    'projects.reflct.problem': 'Les applications de journal numérique sont souvent encombrées et complexes',
    'projects.reflct.solution': 'Création d\'une expérience d\'écriture épurée et ciblée avec des fonctionnalités puissantes',
    'projects.reflct.features.1': 'Support Markdown',
    'projects.reflct.features.2': 'Suggestions quotidiennes',
    'projects.reflct.features.3': 'Suivi de l\'humeur',
    'projects.reflct.features.4': 'Design axé sur la confidentialité',
    'projects.reflct.impact': 'Aide les utilisateurs à maintenir des habitudes d\'écriture constantes',

    // Contact
    'contact.title': 'Me Contacter',
    'contact.subtitle': 'Parlons de tout!',
    'contact.description': 'N\'hésitez pas à me contacter pour des collaborations, des opportunités ou simplement une discussion amicale.',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message envoyé avec succès !',
    'contact.form.error': 'Échec de l\'envoi du message. Veuillez réessayer.',

    // Footer
    'footer.title': 'Construisons Quelque Chose d\'Incroyable Ensemble',
    'footer.description': 'Merci d\'avoir exploré mon portfolio. Je suis toujours ouvert à la discussion de nouveaux projets, d\'idées créatives ou d\'opportunités de faire partie de vos visions.',
    'footer.madeWith': 'Fait avec',
    'footer.by': 'par Abhishek',
    'footer.copyright': 'Tous droits réservés.',

    // Tech Stack
    'projects.tech.react': 'React',
    'projects.tech.nodejs': 'Node.js',
    'projects.tech.mongodb': 'MongoDB',
    'projects.tech.express': 'Express',
    'projects.tech.nextjs': 'Next.js',
    'projects.tech.typescript': 'TypeScript',
    'projects.tech.prisma': 'Prisma',
    'projects.tech.trpc': 'tRPC',
    'projects.tech.redux': 'Redux',
    'projects.tech.postgresql': 'PostgreSQL',
    'projects.tech.tailwind': 'Tailwind CSS',
    'projects.tech.supabase': 'Supabase',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 