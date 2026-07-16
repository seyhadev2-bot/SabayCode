import { Topic } from '../types';
import { typescriptLessonsPart1 } from './typescriptLessonsPart1';
import { typescriptLessonsPart2 } from './typescriptLessonsPart2';
import { typescriptLessonsPart3 } from './typescriptLessonsPart3';
import { typescriptLessonsPart4 } from './typescriptLessonsPart4';

export const typescriptTopics: Topic[] = [
  {
    id: "getting-started",
    title: {
      en: "TypeScript Curriculum",
      km: "កម្មវិធីសិក្សា TypeScript"
    },
    lessons: [
      ...typescriptLessonsPart1,
      ...typescriptLessonsPart2,
      ...typescriptLessonsPart3,
      ...typescriptLessonsPart4
    ]
  }
];
