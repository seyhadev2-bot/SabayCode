import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { authTranslations } from '../utils/authTranslations';
import { 
  Eye, EyeOff, Mail, Lock, AlertTriangle, Sparkles, 
  ChevronRight, Loader2, KeyRound, CheckCircle, ArrowLeft, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface LoginPageProps {
  onNavigateToRegister: () => void;
  onSuccess: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigateToRegister, onSuccess }) => {
  const { language } = useApp();
  const { login, loginWithGoogle, loginWithFacebook, sendPasswordReset, resetPasswordWithToken } = useAuth();
  const t = authTranslations[language];

  // Auth fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showOAuthModal, setShowOAuthModal] = useState<string | null>(null);

  // Forgot password wizard state
  const [resetStep, setResetStep] = useState<'none' | 'email-input' | 'sent-success' | 'new-password' | 'finished' >('none');
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetError, setResetError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(language === 'en' ? "Please fill in all fields." : "សូមបំពេញគ្រប់ប្រអប់។");
      return;
    }

    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.success) {
        onSuccess();
      } else {
        setError(res.error || "Incorrect email or password.");
      }
    } catch (err) {
      setError("Failed to connect to authentication services.");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthClick = (provider: 'google' | 'facebook') => {
    setShowOAuthModal(provider);
  };

  const handleOAuthSelectAccount = async () => {
    setShowOAuthModal(null);
    setLoading(true);
    try {
      if (showOAuthModal === 'google') {
        await loginWithGoogle();
      } else {
        await loginWithFacebook();
      }
      onSuccess();
    } catch (err) {
      setError("Social single sign-on failed.");
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password Actions
  const handleRequestResetLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (!resetEmail) return;

    setLoading(true);
    try {
      const res = await sendPasswordReset(resetEmail);
      if (res.success) {
        setResetStep('sent-success');
      } else {
        setResetError(res.error || "No account found with this email.");
      }
    } catch (err) {
      setResetError("Error contacting reset servers.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (newPassword.length < 6) {
      setResetError(t.errPasswordLength);
      return;
    }

    setLoading(true);
    try {
      const res = await resetPasswordWithToken(resetEmail, newPassword);
      if (res.success) {
        setResetStep('finished');
        // Pre-fill login email with the newly reset one
        setEmail(resetEmail);
      } else {
        setResetError("Failed to update password.");
      }
    } catch (err) {
      setResetError("Error resetting password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
        id="login-container"
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 overflow-hidden">
          
          <AnimatePresence mode="wait">
            {resetStep === 'none' ? (
              /* LOGIN STATE */
              <motion.div
                key="login-form-view"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header Logo */}
                <div className="text-center mb-6">
                  <div className="inline-flex justify-center mb-4 cursor-pointer" onClick={onNavigateToRegister}>
                    <SabayCodeLogo size={42} showText={false} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {t.welcomeBack}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-sm mx-auto">
                    {t.continueJourney}
                  </p>
                </div>

                {/* General Login Error */}
                {error && (
                  <div className="mb-4 p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t.email}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="block w-full pl-10 pr-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        {t.password}
                      </label>
                      <button
                        type="button"
                        onClick={() => setResetStep('email-input')}
                        className="text-xs text-indigo-600 dark:text-indigo-400 font-extrabold hover:underline cursor-pointer"
                      >
                        {t.forgotPassword}
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Lock className="w-4 h-4" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Log In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer shadow-md shadow-indigo-600/10"
                    id="submit-login-btn"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        <span>{language === 'en' ? "Signing In..." : "កំពុងចូលគណនី..."}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4.5 h-4.5 fill-white/10" />
                        <span>{t.logIn}</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Social Dividers */}
                <div className="my-6 flex items-center justify-between">
                  <span className="w-[30%] border-b border-slate-200 dark:border-slate-800" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.orContinueWith}</span>
                  <span className="w-[30%] border-b border-slate-200 dark:border-slate-800" />
                </div>

                {/* Social Binds */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Google Login */}
                  <button
                    onClick={() => handleOAuthClick('google')}
                    className="flex items-center justify-center space-x-2 py-2 px-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.64l3.15-3.15C17.45 1.68 14.9 1 12 1 7.35 1 3.37 3.65 1.39 7.56l3.85 2.99c.9-2.7 3.42-4.51 6.76-4.51z"/>
                      <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.47h6.46c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.41-4.94 3.41-8.56z"/>
                      <path fill="#FBBC05" d="M5.24 14.55c-.23-.69-.36-1.43-.36-2.2s.13-1.51.36-2.2L1.39 7.16C.5 8.94 0 10.92 0 13s.5 4.06 1.39 5.84l3.85-2.99c-.9-1.34-.9-2.95-.9-4.3z"/>
                      <path fill="#34A853" d="M12 18.96c3.34 0 6.14-1.1 8.19-2.99l-3.7-2.87c-1.12.75-2.55 1.2-4.49 1.2-3.34 0-5.86-1.81-6.76-4.51L1.39 12.78c1.98 3.91 5.96 6.18 10.61 6.18z"/>
                    </svg>
                    <span>Google</span>
                  </button>

                  {/* Facebook Login */}
                  <button
                    onClick={() => handleOAuthClick('facebook')}
                    className="flex items-center justify-center space-x-2 py-2 px-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 shrink-0 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </button>
                </div>

                {/* Footer Switcher */}
                <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
                  <span>{t.dontHaveAccount} </span>
                  <button
                    type="button"
                    onClick={onNavigateToRegister}
                    className="text-indigo-600 dark:text-indigo-400 font-extrabold hover:underline cursor-pointer"
                    id="switch-to-register"
                  >
                    {t.signUp}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* FORGOT PASSWORD WIZARD FLOW */
              <motion.div
                key="reset-wizard-view"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="py-2 text-left"
              >
                <button
                  onClick={() => { setResetStep('none'); setResetError(''); }}
                  className="flex items-center space-x-1 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 mb-4 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.backToLogin}</span>
                </button>

                {resetStep === 'email-input' && (
                  <form onSubmit={handleRequestResetLink} className="space-y-4">
                    <div className="mb-4">
                      <KeyRound className="w-10 h-10 text-indigo-500 mb-3" />
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{t.forgotTitle}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {t.forgotInstructions}
                      </p>
                    </div>

                    {resetError && (
                      <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{resetError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        placeholder="example@sabaicode.com"
                        className="block w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all cursor-pointer shadow-md"
                    >
                      {loading ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : t.sendResetLink}
                    </button>
                  </form>
                )}

                {resetStep === 'sent-success' && (
                  <div className="space-y-4 text-center">
                    <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 rounded-full inline-flex mx-auto border border-emerald-100 dark:border-emerald-900/30">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {language === 'en' ? "Reset Link Dispatched" : "តំណកំណត់ឡើងវិញត្រូវបានបញ្ជូន"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 px-4 leading-relaxed">
                      {t.resetEmailSent}
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200/50 dark:border-slate-850 p-4 rounded-xl text-left font-mono text-[10px] text-slate-500">
                      <p className="text-[9px] text-indigo-500 font-bold mb-1 uppercase tracking-wider">Simulated Inbox Dispatch:</p>
                      <p><strong>From:</strong> auth@sabaicode.com</p>
                      <p><strong>To:</strong> {resetEmail}</p>
                      <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer text-center py-1 bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-950 rounded" onClick={() => setResetStep('new-password')}>
                        {language === 'en' ? "→ Click to open simulated link" : "→ ចុចទីនេះដើម្បីបើកតំណសាកល្បង"}
                      </p>
                    </div>
                  </div>
                )}

                {resetStep === 'new-password' && (
                  <form onSubmit={handleSaveNewPassword} className="space-y-4">
                    <div className="mb-4">
                      <Lock className="w-10 h-10 text-indigo-500 mb-3" />
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{t.enterNewPassword}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {language === 'en' ? "Please establish a strong password for security." : "សូមកំណត់ពាក្យសម្ងាត់រឹងមាំដើម្បីសុវត្ថិភាព។"}
                      </p>
                    </div>

                    {resetError && (
                      <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{resetError}</span>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        {t.password}
                      </label>
                      <input
                        type="password"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder={t.newPasswordPlaceholder}
                        className="block w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all cursor-pointer shadow-md"
                    >
                      {loading ? <Loader2 className="w-4.5 h-4.5 animate-spin" /> : t.changePasswordButton}
                    </button>
                  </form>
                )}

                {resetStep === 'finished' && (
                  <div className="space-y-4 text-center">
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-full inline-flex mx-auto">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      {language === 'en' ? "Password Restored" : "ពាក្យសម្ងាត់ត្រូវបានប្តូរជោគជ័យ"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 px-2 leading-relaxed">
                      {t.passwordChangedSuccess}
                    </p>
                    <button
                      onClick={() => setResetStep('none')}
                      className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-xs font-bold text-white rounded-xl transition cursor-pointer shadow-md"
                    >
                      {t.logIn}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

      {/* SOCIAL OAUTH MODAL SELECTOR */}
      <AnimatePresence>
        {showOAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOAuthModal(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 relative z-10 overflow-hidden text-center"
            >
              <div className="mb-5">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 dark:bg-slate-950 flex items-center justify-center mb-3">
                  {showOAuthModal === 'google' ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12 5.04c1.62 0 3.08.56 4.22 1.64l3.15-3.15C17.45 1.68 14.9 1 12 1 7.35 1 3.37 3.65 1.39 7.56l3.85 2.99c.9-2.7 3.42-4.51 6.76-4.51z"/>
                      <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.47h6.46c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.41-4.94 3.41-8.56z"/>
                      <path fill="#FBBC05" d="M5.24 14.55c-.23-.69-.36-1.43-.36-2.2s.13-1.51.36-2.2L1.39 7.16C.5 8.94 0 10.92 0 13s.5 4.06 1.39 5.84l3.85-2.99c-.9-1.34-.9-2.95-.9-4.3z"/>
                      <path fill="#34A853" d="M12 18.96c3.34 0 6.14-1.1 8.19-2.99l-3.7-2.87c-1.12.75-2.55 1.2-4.49 1.2-3.34 0-5.86-1.81-6.76-4.51L1.39 12.78c1.98 3.91 5.96 6.18 10.61 6.18z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  {showOAuthModal === 'google' 
                    ? (language === 'en' ? "Sign in with Google" : "ចូលគណនីជាមួយ Google")
                    : (language === 'en' ? "Sign in with Facebook" : "ចូលគណនីជាមួយ Facebook")
                  }
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                  {language === 'en' ? "Choose an account to connect with SabayCode" : "ជ្រើសរើសគណនីមួយដើម្បីភ្ជាប់ជាមួយសប្បាយកូដ"}
                </p>
              </div>

              {/* Accounts List */}
              <div className="space-y-2.5 text-left mb-6">
                <button
                  onClick={handleOAuthSelectAccount}
                  className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-indigo-50/20 dark:hover:bg-indigo-950/20 transition group cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl bg-indigo-50 dark:bg-slate-950 p-1.5 rounded-xl">
                      {showOAuthModal === 'google' ? "🦊" : "🐯"}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {showOAuthModal === 'google' ? "Mony Rachana" : "Sokha Chan"}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {showOAuthModal === 'google' ? "mony.rachana@gmail.com" : "sokha.chan@gmail.com"}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition" />
                </button>
              </div>

              {/* Close */}
              <button
                onClick={() => setShowOAuthModal(null)}
                className="w-full py-2.5 bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 text-xs font-bold text-slate-500 dark:text-slate-400 rounded-xl transition border border-slate-100 dark:border-slate-800/60 cursor-pointer"
              >
                {language === 'en' ? "Cancel" : "បោះបង់"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
