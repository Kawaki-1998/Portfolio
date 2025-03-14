export interface TimelineItem {
  year: string;
  titleKey: string;
  companyKey: string;
  descriptionKey: string;
  icon: 'work' | 'education';
  location?: string;
}

export interface ProjectItem {
  titleKey: string;
  descriptionKey: string;
  image: string;
  techKeys: string[];
  github: string;
  live: string;
  details?: {
    problemKey?: string;
    solutionKey?: string;
    featuresKeys?: string[];
    impactKey?: string;
  };
}