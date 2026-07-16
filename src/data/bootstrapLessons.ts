import { Topic } from '../types';
import { bootstrapLessonsPart1 } from './bootstrapLessonsPart1';
import { bootstrapLessonsPart2 } from './bootstrapLessonsPart2';
import { bootstrapLessonsPart3 } from './bootstrapLessonsPart3';
import { bootstrapLessonsPart4 } from './bootstrapLessonsPart4';

export const bootstrapTopics: Topic[] = [
  {
    id: "bootstrap-getting-started",
    title: {
      en: "Bootstrap 5 Getting Started",
      km: "ការចាប់ផ្តើមដំបូងជាមួយ BS5"
    },
    lessons: [
      ...bootstrapLessonsPart1,
      ...bootstrapLessonsPart2
    ]
  },
  {
    id: "bootstrap-forms",
    title: {
      en: "Bootstrap 5 Forms",
      km: "ទម្រង់ទិន្នន័យ BS5 Forms"
    },
    lessons: [
      ...bootstrapLessonsPart3
    ]
  },
  {
    id: "bootstrap-grid",
    title: {
      en: "Bootstrap 5 Grid",
      km: "ប្រព័ន្ធក្រឡា BS5 Grid"
    },
    lessons: [
      ...bootstrapLessonsPart4
    ]
  }
];
