import { Topic } from '../types';
import { reactLessonsPart1 } from './reactLessonsPart1';
import { reactLessonsPart2 } from './reactLessonsPart2';
import { reactLessonsPart3 } from './reactLessonsPart3';
import { reactLessonsPart4 } from './reactLessonsPart4';

export const reactTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "Getting Started",
      km: "ការចាប់ផ្តើមដំបូង"
    },
    lessons: [
      ...reactLessonsPart1,
      ...reactLessonsPart2,
      ...reactLessonsPart3
    ]
  },
  {
    id: "react-hooks",
    title: {
      en: "React Hooks",
      km: "ការប្រើប្រាស់ React Hooks"
    },
    lessons: reactLessonsPart4
  }
];
