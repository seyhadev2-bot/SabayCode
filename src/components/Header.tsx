import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { translations } from '../translations';
import { Flame, Trophy, Sun, Moon, Menu, X, LogIn, LogOut, UserCheck } from 'lucide-react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface HeaderProps {
  currentView: 'home' | 'courses' | 'playground' | 'reference' | 'profile' | 'lesson' | 'contact' | 'donate' | 'login' | 'register' | 'verify-email';
  setCurrentView: (view: 'home' | 'courses' | 'playground' | 'reference' | 'profile' | 'lesson' | 'contact' | 'donate' | 'login' | 'register' | 'verify-email') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const { language, setLanguage, theme, setTheme, progress } = useApp();
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const handleNavClick = (view: 'home' | 'courses' | 'playground' | 'profile' | 'contact' | 'donate' | 'login' | 'register') => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const navItems: { id: 'home' | 'courses' | 'profile' | 'contact' | 'donate'; label: string }[] = [
    { id: 'home', label: language === 'en' ? 'Home' : 'ទំព័រដើម' },
    { id: 'courses', label: t.learningPaths },
    { id: 'profile', label: t.profile },
    { id: 'contact', label: language === 'en' ? 'Contact' : 'ទំនាក់ទំនង' },
    { id: 'donate', label: language === 'en' ? 'Support & Donate' : 'គាំទ្រ និងបរិច្ចាគ' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="cursor-pointer group hover:opacity-90 active:scale-95 transition-all duration-150"
          id="nav-logo"
        >
          <SabayCodeLogo 
            size={34} 
            showText={true} 
            title={language === 'km' ? t.appName : undefined} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold transition-all duration-200 ${
                currentView === item.id || (item.id === 'courses' && currentView === 'lesson')
                  ? 'bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Top-Right Control Buttons */}
        <div className="flex items-center space-x-2 lg:space-x-3" id="nav-controls">
          {/* Active Streak Badge */}
          <div 
            onClick={() => setCurrentView('profile')}
            className="flex items-center space-x-1 px-2 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30 text-xs font-semibold cursor-pointer hover:scale-[1.02] transition-transform duration-150"
            title={`${t.streak}: ${progress.streakCount} ${t.daysStreak}`}
          >
            <Flame className="w-4 h-4 fill-amber-500 animate-pulse" />
            <span className="font-mono">{progress.streakCount}</span>
            <span className="hidden sm:inline text-[10px] font-normal">{t.daysStreak}</span>
          </div>

          {/* XP Badge */}
          <div 
            onClick={() => setCurrentView('profile')}
            className="flex items-center space-x-1 px-2 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 text-xs font-semibold cursor-pointer hover:scale-[1.02] transition-transform duration-150"
            title={`Total Points: ${progress.points} XP`}
          >
            <Trophy className="w-4 h-4 text-indigo-500" />
            <span className="font-mono">{progress.points}</span>
            <span className="hidden sm:inline text-[10px] font-normal">XP</span>
          </div>

          {/* User Account / Auth Widget */}
          <div className="hidden md:flex items-center space-x-2 border-l border-slate-200 dark:border-slate-850 pl-3">
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentView('profile')}
                  className="flex items-center space-x-2 px-2.5 py-1.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100/40 dark:border-indigo-900/20 text-xs text-slate-700 dark:text-slate-200 font-bold hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition cursor-pointer"
                >
                  <span className="text-sm shrink-0">{currentUser.progress.profileAvatar || "🦊"}</span>
                  <span className="max-w-[80px] truncate">{currentUser.name}</span>
                </button>
                <button
                  onClick={() => { logout(); handleNavClick('home'); }}
                  className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer"
                  title={language === 'en' ? "Log Out" : "ចាកចេញ"}
                >
                  <LogOut className="w-4.5 h-4.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={() => handleNavClick('login')}
                  className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Log In" : "ចូលគណនី"}
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="px-3 py-1.5 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm shadow-indigo-600/10 cursor-pointer"
                >
                  {language === 'en' ? "Sign Up" : "ចុះឈ្មោះ"}
                </button>
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl p-0.5 border border-slate-200/50 dark:border-slate-800/50">
            <button
              onClick={() => setLanguage('en')}
              className={`px-1.5 py-1 text-[10px] lg:text-xs font-bold rounded-lg transition-all duration-150 ${
                language === 'en'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('km')}
              className={`px-1.5 py-1 text-[10px] lg:text-xs font-bold rounded-lg transition-all duration-150 ${
                language === 'km'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'
              }`}
            >
              KM
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4.5 h-4.5 text-amber-500" />
            ) : (
              <Moon className="w-4.5 h-4.5 text-indigo-600" />
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1 shadow-lg animate-fade-in text-left">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                currentView === item.id || (item.id === 'courses' && currentView === 'lesson')
                  ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Auth options for mobile */}
          <div className="border-t border-slate-150 dark:border-slate-850 pt-2.5 mt-2.5 space-y-2">
            {currentUser ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-4 py-2 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">{currentUser.progress.profileAvatar || "🦊"}</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{currentUser.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-indigo-500 uppercase">Active Session</span>
                </div>
                <button
                  onClick={() => { logout(); handleNavClick('home'); }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 rounded-xl transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{language === 'en' ? "Log Out" : "ចាកចេញ"}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 px-2">
                <button
                  onClick={() => handleNavClick('login')}
                  className="py-2 text-center text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Log In" : "ចូលគណនី"}
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="py-2 text-center text-xs font-bold text-white bg-indigo-600 rounded-xl transition cursor-pointer"
                >
                  {language === 'en' ? "Sign Up" : "ចុះឈ្មោះ"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
