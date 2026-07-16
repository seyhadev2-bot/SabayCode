/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LearningPaths } from './components/LearningPaths';
import { LessonInterface } from './components/LessonInterface';
import { ProfilePanel } from './components/ProfilePanel';
import { ContactPage } from './components/ContactPage';
import { SupportPage } from './components/SupportPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { EmailVerificationPage } from './components/EmailVerificationPage';
import { StandalonePlayground } from './components/StandalonePlayground';
import { AuthProvider, useAuth } from './context/AuthContext';
import { coursesData } from './data/coursesData';
import { translations } from './translations';
import { 
  Terminal, Search, BookOpen, Flame, Trophy, Sparkles, ChevronRight, Layout, ArrowRight 
} from 'lucide-react';

type ViewState = 'home' | 'courses' | 'playground' | 'reference' | 'profile' | 'lesson' | 'contact' | 'donate' | 'login' | 'register' | 'verify-email';

function MainAppContent() {
  const { language, theme, sandboxData, setSandboxData } = useApp();
  const { currentUser } = useAuth();
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/tryit') || hash.startsWith('#tryit')) {
        const queryPart = hash.includes('?') ? hash.split('?')[1] : '';
        const params = new URLSearchParams(queryPart);
        const courseId = params.get('course');
        const lessonId = params.get('lesson');
        
        if (courseId && lessonId) {
          const foundCourse = coursesData.find(c => c.id === courseId);
          if (foundCourse) {
            const foundLesson = foundCourse.topics
              .flatMap(t => t.lessons)
              .find(l => l.id === lessonId);
            if (foundLesson) {
              setSandboxData({
                code: foundLesson.starterCode,
                lang: courseId,
                title: `${foundCourse.title[language]} > ${foundLesson.title[language]}`,
                courseId,
                lessonId
              });
              setSelectedCourseId(courseId);
            }
          }
        } else {
          setSandboxData(null);
        }
        setCurrentView('playground');
      }
    };

    window.addEventListener('hashchange', handleHashRouting);
    handleHashRouting();
    return () => window.removeEventListener('hashchange', handleHashRouting);
  }, [language, setSandboxData]);

  const t = translations[language];

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('lesson');
  };

  const activeCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-200">
      {/* Top sticky Navigation header */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Container */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            {/* Animated Hero Section */}
            <Hero setCurrentView={setCurrentView} />

            {/* Structured featured paths divider */}
            <section className="py-12 md:py-16 bg-slate-100/50 dark:bg-slate-900/30 border-t border-slate-200/40 dark:border-slate-900/40 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                      {language === 'en' ? "Kickstart Your Coding Journey" : "ចាប់ផ្តើមវិថីសិក្សារបស់អ្នក"}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {language === 'en' 
                        ? "Curated entry tracks for complete beginners up to professional creators." 
                        : "វគ្គសិក្សាកម្រិតដំបូងរៀបចំឡើងសម្រាប់សិស្សនិស្សិតទូទៅ។"}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentView('courses')}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                  >
                    <span>{language === 'en' ? "View All 21 Courses" : "មើលវគ្គសិក្សាទាំង២១"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Popular featured course paths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coursesData.slice(0, 3).map((course) => {
                    return (
                      <div
                        key={course.id}
                        onClick={() => handleSelectCourse(course.id)}
                        className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-900/30 hover:-translate-y-0.5 cursor-pointer transition-all duration-150 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold font-mono uppercase bg-slate-100 dark:bg-slate-950 px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400">
                              {course.category}
                            </span>
                            <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-wider">
                              {course.difficulty}
                            </span>
                          </div>
                          <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                            {course.title[language]}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal line-clamp-2">
                            {course.desc[language]}
                          </p>
                        </div>
                        <div className="border-t border-slate-100 dark:border-slate-800/80 mt-5 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>{course.topics.flatMap(t => t.lessons).length} Lessons</span>
                          <span className="text-indigo-500 font-bold flex items-center space-x-0.5">
                            <span>Start</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {currentView === 'courses' && (
          <div className="animate-fade-in">
            <LearningPaths onSelectCourse={handleSelectCourse} />
          </div>
        )}

        {currentView === 'playground' && (
          <div className="animate-fade-in">
            <StandalonePlayground 
              initialCode={sandboxData?.code}
              initialLang={sandboxData?.lang}
              initialTitle={sandboxData?.title}
              onBack={() => {
                window.location.hash = '';
                if (sandboxData?.lessonId && sandboxData?.courseId) {
                  setSelectedCourseId(sandboxData.courseId);
                  setCurrentView('lesson');
                } else {
                  setCurrentView('courses');
                }
              }}
            />
          </div>
        )}

        {currentView === 'lesson' && (
          <div className="animate-fade-in">
            <LessonInterface course={activeCourse} onGoBack={() => setCurrentView('courses')} />
          </div>
        )}

        {currentView === 'profile' && (
          <div className="animate-fade-in">
            <ProfilePanel />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="animate-fade-in">
            <ContactPage onBackToHome={() => setCurrentView('home')} />
          </div>
        )}

        {currentView === 'donate' && (
          <div className="animate-fade-in">
            <SupportPage onBackToHome={() => setCurrentView('home')} />
          </div>
        )}

        {currentView === 'login' && (
          <div className="animate-fade-in">
            <LoginPage 
              onNavigateToRegister={() => setCurrentView('register')} 
              onSuccess={() => {
                const activeEmail = localStorage.getItem('sabaicode-active-user');
                const users = JSON.parse(localStorage.getItem('sabaicode-users') || '[]');
                const sessionUser = users.find((u: any) => u.email.toLowerCase() === activeEmail?.toLowerCase());
                if (sessionUser && !sessionUser.isVerified) {
                  setCurrentView('verify-email');
                } else {
                  setCurrentView('courses');
                }
              }} 
            />
          </div>
        )}

        {currentView === 'register' && (
          <div className="animate-fade-in">
            <RegisterPage 
              onNavigateToLogin={() => setCurrentView('login')} 
              onSuccess={() => setCurrentView('verify-email')} 
            />
          </div>
        )}

        {currentView === 'verify-email' && (
          <div className="animate-fade-in">
            <EmailVerificationPage 
              onSuccess={() => setCurrentView('courses')} 
              onBackToLogin={() => setCurrentView('login')} 
            />
          </div>
        )}
      </main>

      {/* Modern Compact Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-6 text-center text-xs text-slate-400 font-sans transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Sabaicode Bilingual Education Platform. All rights reserved.</p>
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            MADE FOR CAMBODIAN STUDENTS 🇰🇭
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <MainAppContent />
      </AuthProvider>
    </AppProvider>
  );
}
