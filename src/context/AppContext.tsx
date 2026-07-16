import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, UserProgress } from '../types';

interface AppContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  progress: UserProgress;
  completeLesson: (courseId: string, lessonId: string) => void;
  setQuizScore: (courseId: string, quizId: string, score: number) => void;
  saveUserCode: (key: string, code: string) => void;
  resetAllProgress: () => void;
  updateProfile: (name: string, avatar: string) => void;
  addXP: (points: number) => void;
  sandboxData: { code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null;
  setSandboxData: (data: { code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null) => void;
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  quizHighScores: {},
  savedCodes: {},
  joinedPaths: [],
  streakCount: 0,
  points: 0,
  profileName: "Sokchea Dev",
  profileAvatar: "🦊",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [theme, setThemeState] = useState<'light' | 'dark'>('dark');
  const [progress, setProgressState] = useState<UserProgress>(defaultProgress);
  const [sandboxData, setSandboxData] = useState<{ code: string; lang: string; title: string; lessonId?: string; courseId?: string } | null>(null);

  // 1. Initial Load from LocalStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('sabaicode-lang') as LanguageCode;
    if (savedLang) setLanguageState(savedLang);

    const savedTheme = localStorage.getItem('sabaicode-theme') as 'light' | 'dark';
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      // Default to dark theme for premium modern coding look
      setThemeState('dark');
    }

    const savedProgress = localStorage.getItem('sabaicode-progress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress) as UserProgress;
        setProgressState(parsed);
        calculateStreak(parsed);
      } catch (e) {
        console.error("Error parsing progress", e);
      }
    } else {
      // Initialize new streak
      const initProgress = { ...defaultProgress, streakCount: 1, lastActiveDate: getTodayDateString() };
      setProgressState(initProgress);
      localStorage.setItem('sabaicode-progress', JSON.stringify(initProgress));
    }
  }, []);

  // 2. Sync Theme class with document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('sabaicode-lang', lang);
  };

  const setTheme = (newTheme: 'light' | 'dark') => {
    setThemeState(newTheme);
    localStorage.setItem('sabaicode-theme', newTheme);
  };

  const getTodayDateString = () => {
    return new Date().toISOString().split('T')[0];
  };

  const calculateStreak = (currentProg: UserProgress) => {
    const today = getTodayDateString();
    if (!currentProg.lastActiveDate) {
      const updated = { ...currentProg, streakCount: 1, lastActiveDate: today };
      setProgressState(updated);
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return;
    }

    const lastActive = new Date(currentProg.lastActiveDate);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate.getTime() - lastActive.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let updatedProgress = { ...currentProg };

    if (diffDays === 1) {
      // Active consecutive day
      updatedProgress.streakCount += 1;
      updatedProgress.lastActiveDate = today;
      updatedProgress.points += 20; // 20 XP for maintaining streak
    } else if (diffDays > 1) {
      // Streak broken, reset
      updatedProgress.streakCount = 1;
      updatedProgress.lastActiveDate = today;
    } else if (diffDays === 0) {
      // Active on the same day, preserve streak
      updatedProgress.lastActiveDate = today;
    }

    setProgressState(updatedProgress);
    localStorage.setItem('sabaicode-progress', JSON.stringify(updatedProgress));
  };

  const completeLesson = (courseId: string, lessonId: string) => {
    const key = `${courseId}-${lessonId}`;
    setProgressState((prev) => {
      if (prev.completedLessons.includes(key)) return prev;
      const updated = {
        ...prev,
        completedLessons: [...prev.completedLessons, key],
        points: prev.points + 50, // 50 XP per lesson completed
        lastActiveDate: getTodayDateString()
      };
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const setQuizScore = (courseId: string, quizId: string, score: number) => {
    const key = `${courseId}-${quizId}`;
    setProgressState((prev) => {
      const prevHighScore = prev.quizHighScores[key] || 0;
      if (score <= prevHighScore) return prev;

      // Earn bonus XP proportional to score
      const bonusXP = Math.round((score - prevHighScore) * 1.5);
      const updated = {
        ...prev,
        quizHighScores: {
          ...prev.quizHighScores,
          [key]: score
        },
        points: prev.points + bonusXP,
        lastActiveDate: getTodayDateString()
      };
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const saveUserCode = (key: string, code: string) => {
    setProgressState((prev) => {
      const updated = {
        ...prev,
        savedCodes: {
          ...prev.savedCodes,
          [key]: code
        }
      };
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const addXP = (points: number) => {
    setProgressState((prev) => {
      const updated = {
        ...prev,
        points: prev.points + points
      };
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const updateProfile = (name: string, avatar: string) => {
    setProgressState((prev) => {
      const updated = {
        ...prev,
        profileName: name,
        profileAvatar: avatar
      };
      localStorage.setItem('sabaicode-progress', JSON.stringify(updated));
      return updated;
    });
  };

  const resetAllProgress = () => {
    const today = getTodayDateString();
    const resetProg = {
      ...defaultProgress,
      streakCount: 1,
      lastActiveDate: today,
    };
    setProgressState(resetProg);
    localStorage.setItem('sabaicode-progress', JSON.stringify(resetProg));
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage,
      theme,
      setTheme,
      progress,
      completeLesson,
      setQuizScore,
      saveUserCode,
      resetAllProgress,
      updateProfile,
      addXP,
      sandboxData,
      setSandboxData
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
