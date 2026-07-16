export type LanguageCode = 'en' | 'km';

export type CourseCategory = 'foundation' | 'programming' | 'database' | 'tooling' | 'framework';

export interface Lesson {
  id: string;
  title: {
    en: string;
    km: string;
  };
  content: {
    en: string;
    km: string;
  };
  starterCode: string;
  isNew?: boolean;
}

export interface Topic {
  id: string;
  title: {
    en: string;
    km: string;
  };
  lessons: Lesson[];
}

export interface ReferenceItem {
  id: string;
  syntax: string;
  desc: {
    en: string;
    km: string;
  };
  example: string;
}

export interface Quiz {
  id: string;
  question: {
    en: string;
    km: string;
  };
  options: {
    en: string[];
    km: string[];
  };
  correctIndex: number;
  explanation: {
    en: string;
    km: string;
  };
}

export interface MiniProject {
  id: string;
  title: {
    en: string;
    km: string;
  };
  desc: {
    en: string;
    km: string;
  };
  starterCode: string;
  solutionCode: string;
}

export interface Course {
  id: string;
  title: {
    en: string;
    km: string;
  };
  desc: {
    en: string;
    km: string;
  };
  category: CourseCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  iconName: string; // lucide icon name
  topics: Topic[];
  references: ReferenceItem[];
  quizzes: Quiz[];
  miniProjects: MiniProject[];
}

export interface UserProgress {
  completedLessons: string[]; // array of `${courseId}-${lessonId}`
  quizHighScores: Record<string, number>; // key: `${courseId}-${quizId}`, value: score out of 100
  savedCodes: Record<string, string>; // key: `${courseId}-${lessonId}` or `${courseId}-sandbox`, value: user edited code
  joinedPaths: string[]; // categories or courses
  streakCount: number;
  lastActiveDate?: string; // YYYY-MM-DD
  points: number;
  profileName?: string;
  profileAvatar?: string;
}

export interface UIKeys {
  appName: string;
  appSlogan: string;
  learningPaths: string;
  learningPathsSlogan: string;
  courses: string;
  playground: string;
  progress: string;
  streak: string;
  lessons: string;
  tryItYourself: string;
  runCode: string;
  running: string;
  output: string;
  completed: string;
  markCompleted: string;
  nextLesson: string;
  previousLesson: string;
  startCourse: string;
  searchCourses: string;
  allCategories: string;
  difficulty: string;
  estimatedTime: string;
  beginner: string;
  intermediate: string;
  advanced: string;
  curriculum: string;
  reference: string;
  quiz: string;
  miniProjects: string;
  score: string;
  submitAnswer: string;
  correct: string;
  incorrect: string;
  explanation: string;
  congratulations: string;
  resetProgress: string;
  saved: string;
  saveCode: string;
  profile: string;
  language: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  noOutputYet: string;
  playgroundWelcome: string;
  searchPlaceholder: string;
  dailyStreak: string;
  daysStreak: string;
  xpPoints: string;
}
