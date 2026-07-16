import { Topic } from '../types';
import { angularLessonsPart1 } from './angularLessonsPart1';
import { angularLessonsPart2 } from './angularLessonsPart2';
import { angularLessonsPart3 } from './angularLessonsPart3';
import { angularLessonsPart4 } from './angularLessonsPart4';

export const angularTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ចាប់ផ្តើមដំបូង"
    },
    lessons: [...angularLessonsPart1, ...angularLessonsPart2]
  },
  {
    id: "advanced-angular",
    title: {
      en: "Advanced Angular",
      km: "កម្រិតខ្ពស់ Advanced Angular"
    },
    lessons: [...angularLessonsPart3, ...angularLessonsPart4]
  }
];
