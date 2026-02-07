export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  aiAssistant: string;
  emoji: string;
  highlight?: boolean;
}

export interface WeekPlan {
  week: number;
  phase: string;
  dates: string;
  tasks: string[];
  color: 'yellow' | 'orange' | 'green';
}