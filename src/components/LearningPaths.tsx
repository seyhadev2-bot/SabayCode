import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { coursesData } from '../data/coursesData';
import { translations } from '../translations';
import { Course, CourseCategory } from '../types';
import { 
  Search, BookOpen, Star, Flame, Trophy, Award, 
  Code, Palette, Terminal, Database, GitBranch, Component, 
  Globe, Monitor, Smartphone, Cpu, Layers, Layout, ShieldAlert
} from 'lucide-react';

interface LearningPathsProps {
  onSelectCourse: (courseId: string) => void;
}

// Map course icon names to actual components gracefully
const CourseIcon: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const iconMap: Record<string, any> = {
    FileHtml: Layout,
    FileCode: Palette,
    FileJson: Terminal,
    FileCode2: Terminal,
    FileSymlink: Terminal,
    Code: Code,
    Layers: Layers,
    Code2: Code,
    Hash: Cpu,
    Cpu: Cpu,
    Smartphone: Smartphone,
    Database: Database,
    DatabaseBackup: Database,
    GitBranch: GitBranch,
    FileHeart: Component,
    Component: Component,
    Compass: Globe,
    Monitor: Monitor,
    Globe: Globe,
    Palette: Palette,
    Grid: Layout,
  };

  const ComponentToRender = iconMap[name] || Code;
  return <ComponentToRender className={className} />;
};

export const LearningPaths: React.FC<LearningPathsProps> = ({ onSelectCourse }) => {
  const { language, progress } = useApp();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'all'>('all');

  const categories: { id: CourseCategory | 'all'; label: { en: string; km: string } }[] = [
    { id: 'all', label: { en: "All Categories", km: "គ្រប់ប្រភេទ" } },
    { id: 'foundation', label: { en: "Foundation", km: "កូដគ្រឹះដំបូង" } },
    { id: 'programming', label: { en: "Programming", km: "ភាសាសរសេរកូដ" } },
    { id: 'database', label: { en: "Database", km: "មូលដ្ឋានទិន្នន័យ" } },
    { id: 'tooling', label: { en: "Tooling", km: "ឧបករណ៍ជំនួយ" } },
    { id: 'framework', label: { en: "Framework & Library", km: "ក្របខ័ណ្ឌការងារ" } },
  ];

  // Helper to calculate course completion percentage
  const getCourseProgress = (course: Course) => {
    // Collect all lesson ids of this course
    const courseLessonIds = course.topics.flatMap(topic => 
      topic.lessons.map(lesson => `${course.id}-${lesson.id}`)
    );
    if (courseLessonIds.length === 0) return 0;

    const completedInCourse = courseLessonIds.filter(id => 
      progress.completedLessons.includes(id)
    ).length;

    return Math.round((completedInCourse / courseLessonIds.length) * 100);
  };

  const getCourseTotalLessons = (course: Course) => {
    return course.topics.flatMap(t => t.lessons).length;
  };

  // Filter courses based on search & category tab selection
  const filteredCourses = coursesData.filter((course) => {
    const titleMatch = course.title[language].toLowerCase().includes(searchQuery.toLowerCase()) || 
                       course.title.en.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = course.desc[language].toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = activeCategory === 'all' || course.category === activeCategory;
    
    return (titleMatch || descMatch) && categoryMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="catalog-page">
      {/* Blog-style Hero Header */}
      <div className="text-center md:text-left max-w-3xl mb-12 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {t.learningPaths}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          {t.learningPathsSlogan}
        </p>
      </div>

      {/* Search & Filter bar Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-slate-200/60 dark:border-slate-800/60">
        
        {/* Search input field */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchCourses}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Categories Tab slider */}
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all duration-150 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/10'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

      </div>

      {/* Grid of Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const coursePercent = getCourseProgress(course);
            const totalLessons = getCourseTotalLessons(course);
            const isCompleted = coursePercent === 100;

            return (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course.id)}
                className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:hover:shadow-indigo-950/20 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left"
              >
                {/* Completion Star Badge */}
                {isCompleted && (
                  <div className="absolute top-4 right-4 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-xl border border-emerald-200/50 dark:border-emerald-900/30">
                    <Award className="w-4 h-4" />
                  </div>
                )}

                {/* Top Block: Icon & difficulty levels */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-all duration-200 border border-indigo-100/30 dark:border-indigo-900/20">
                      <CourseIcon name={course.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase text-indigo-500 dark:text-indigo-400">
                      {course.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {course.title[language]}
                  </h3>

                  {/* Course Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans mb-5 line-clamp-3">
                    {course.desc[language]}
                  </p>
                </div>

                {/* Bottom Block: Progress + Specs */}
                <div className="space-y-4">
                  
                  {/* Course Specs Bar */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-100 dark:border-slate-900 pt-3">
                    <span className="flex items-center space-x-1 font-semibold uppercase">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500/10 mr-0.5" />
                      {course.difficulty === 'beginner' ? t.beginner : course.difficulty === 'intermediate' ? t.intermediate : t.advanced}
                    </span>
                    <span className="flex items-center space-x-1">
                      <BookOpen className="w-3.5 h-3.5 mr-0.5" />
                      {totalLessons} {t.lessons}
                    </span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                      <span>{language === 'en' ? "Course Progress" : "វឌ្ឍនភាពវគ្គសិក្សា"}</span>
                      <span className="font-mono text-indigo-500">{coursePercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-300 rounded-full`}
                        style={{ width: `${coursePercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Start Button */}
                  <button className="w-full bg-slate-50 hover:bg-indigo-600 hover:text-white dark:bg-slate-900/60 dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-200 text-xs font-bold py-2 px-4 rounded-xl border border-slate-200/50 dark:border-slate-800/80 transition-all cursor-pointer">
                    {coursePercent > 0 ? (language === 'en' ? "Continue Learning" : "បន្តការរៀន") : t.startCourse}
                  </button>

                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <ShieldAlert className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            {language === 'en' ? "No Courses Found" : "រកមិនឃើញវគ្គសិក្សាទេ"}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
            {language === 'en' 
              ? "We couldn't find any language matching your search. Try resetting your query!" 
              : "យើងមិនអាចរកឃើញភាសាកូដដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ។ សាកល្បងស្វែងរកម្តងទៀត!"}
          </p>
        </div>
      )}
    </div>
  );
};
