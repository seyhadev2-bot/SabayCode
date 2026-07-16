import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import { 
  Trophy, Flame, Award, Trash2, Edit2, Check, User, Sparkles, BookOpenCheck
} from 'lucide-react';

const avatarEmojis = ["🦊", "🐼", "🦁", "🐨", "🐸", "🐙", "🧙‍♂️", "👩‍💻", "👨‍💻", "🚀", "👾", "🥑"];

export const ProfilePanel: React.FC = () => {
  const { language, progress, updateProfile, resetAllProgress } = useApp();
  const t = translations[language];

  const [isEditing, setIsEditing] = useState(false);
  const [profileName, setProfileName] = useState(progress.profileName || 'Cambodian Coder');
  const [selectedAvatar, setSelectedAvatar] = useState(progress.profileAvatar || '🦊');

  const handleSaveProfile = () => {
    updateProfile(profileName, selectedAvatar);
    setIsEditing(false);
  };

  const handleReset = () => {
    const confirmWipe = window.confirm(
      language === 'en' 
        ? "Are you absolutely sure you want to reset all your learning history, quiz scores, and cached code? This action cannot be undone."
        : "តើអ្នកប្រាកដជាចង់លុបប្រវត្តិសិក្សា ពិន្ទុ និងកូដទាំងអស់មែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់ថយក្រោយវិញបានឡើយ។"
    );
    if (confirmWipe) {
      resetAllProgress();
      window.location.reload();
    }
  };

  // Calculate stats
  const totalCompletedLessons = progress.completedLessons.length;
  
  const completedCourses = coursesData.filter((course) => {
    const courseLessonIds = course.topics.flatMap(t => t.lessons.map(l => `${course.id}-${l.id}`));
    if (courseLessonIds.length === 0) return false;
    return courseLessonIds.every(id => progress.completedLessons.includes(id));
  });

  return (
    <div className="max-w-4xl mx-auto py-10 px-4" id="profile-panel-page">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left">
        
        {/* Left Column: Avatar & edit profile */}
        <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 text-center shadow-sm">
          
          {/* Avatar view */}
          <div className="relative inline-block mb-4">
            <span className="text-6xl filter drop-shadow-md select-none">{progress.profileAvatar || "🦊"}</span>
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-1.5 rounded-full border-2 border-white dark:border-slate-900">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* User Profile Title */}
          {!isEditing ? (
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center justify-center space-x-1.5">
                <span>{progress.profileName || "Sokchea Dev"}</span>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                  title="Edit Profile"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </h2>
              <p className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest">
                Cambodian Student
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-w-xs mx-auto text-left">
              <div className="space-y-1">
                <label htmlFor="display-name" className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Display Name</label>
                <input
                  id="display-name"
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Avatar Emoji grid */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Select Avatar</span>
                <div className="grid grid-cols-6 gap-2">
                  {avatarEmojis.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setSelectedAvatar(emoji)}
                      className={`text-xl p-1.5 rounded-xl transition hover:scale-110 cursor-pointer ${
                        selectedAvatar === emoji ? 'bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/50' : ''
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSaveProfile}
                className="w-full inline-flex items-center justify-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 rounded-xl shadow-md transition cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Save Profile</span>
              </button>
            </div>
          )}

          {/* Points Status */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-left space-y-4">
            <h3 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">
              Stats Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-900 flex flex-col justify-between">
                <span className="text-xs text-slate-400">Total Score</span>
                <span className="text-xl font-black text-indigo-600 dark:text-indigo-400 font-mono mt-1">
                  {progress.points} XP
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-900 flex flex-col justify-between">
                <span className="text-xs text-slate-400">Streak Count</span>
                <span className="text-xl font-black text-amber-500 font-mono mt-1 flex items-center">
                  <Flame className="w-5 h-5 fill-amber-500 mr-1 animate-pulse" />
                  {progress.streakCount}
                </span>
              </div>
            </div>

            {/* Reset History button */}
            <button
              onClick={handleReset}
              className="w-full inline-flex items-center justify-center space-x-1.5 px-4 py-3 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/30 dark:hover:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-bold text-xs rounded-xl transition cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{t.resetProgress}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Achievements & Completed courses */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Progress Overview */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-5 flex items-center space-x-2">
              <Award className="w-5 h-5 text-indigo-500" />
              <span>{language === 'en' ? "Achievements & Milestones" : "សមិទ្ធផលសិក្សា"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 flex space-x-3 items-start">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <BookOpenCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Lessons Finished</h4>
                  <p className="text-xs text-slate-500 font-semibold font-mono">{totalCompletedLessons} Lessons</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-900 flex space-x-3 items-start">
                <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Completed Courses</h4>
                  <p className="text-xs text-slate-500 font-semibold font-mono">{completedCourses.length} Courses</p>
                </div>
              </div>
            </div>
          </div>

          {/* List of completed courses list */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              {language === 'en' ? "Your Learning Directory" : "វគ្គសិក្សារបស់អ្នក"}
            </h3>

            {completedCourses.length > 0 ? (
              <div className="divide-y divide-slate-100 dark:divide-slate-900">
                {completedCourses.map((course) => (
                  <div key={course.id} className="py-3 flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
                      {course.title[language]}
                    </span>
                    <span className="text-xs font-bold text-emerald-500 font-mono bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-lg">
                      100% COMPLETED
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400 py-4">
                {language === 'en' 
                  ? "No courses fully completed yet. Start learning and complete all lessons to earn your official course star badge!" 
                  : "មិនទាន់មានវគ្គសិក្សាណាត្រូវបានបញ្ចប់ទាំងស្រុងនៅឡើយទេ។ ចាប់ផ្តើមសិក្សាមេរៀនទាំងអស់ដើម្បីទទួលបានផ្លាកសញ្ញាផ្កាយស្ដង់ដារ!"}
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
