
export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
  detailedContent?: {
    overview: string;
    keyAchievements: string[];
    impact: string;
    image?: string;
  };
}

export interface Skill {
  id: string;
  name: string;
  category: 'Leadership' | 'Culture' | 'Governance' | 'Communication';
  icon: string;
  detailedContent?: {
    overview: string;
    longFormInsight: string;
    keyFocusAreas: {
      title: string;
      description: string;
    }[];
    impactMetrics: {
      label: string;
      value: string;
    }[];
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
