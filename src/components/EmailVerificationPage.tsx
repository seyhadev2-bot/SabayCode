import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { authTranslations } from '../utils/authTranslations';
import { 
  Mail, AlertTriangle, ShieldCheck, Loader2, ArrowLeft, RefreshCw, Sparkles 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SabayCodeLogo } from './SabayCodeLogo';

interface EmailVerificationPageProps {
  onSuccess: () => void;
  onBackToLogin: () => void;
}

export const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({ onSuccess, onBackToLogin }) => {
  const { language } = useApp();
  const { currentUser, verifyEmail, logout } = useAuth();
  const t = authTranslations[language];

  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);
  const [resent, setResent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code.length !== 4) {
      setError(language === 'en' ? "Please enter a valid 4-digit code." : "សូមបញ្ចូលកូដឲ្យបានត្រឹមត្រូវ (៤ ខ្ទង់)។");
      return;
    }

    setLoading(true);
    try {
      const res = await verifyEmail(code);
      if (res.success) {
        setVerified(true);
        setTimeout(() => {
          onSuccess();
        }, 1800);
      } else {
        setError(res.error || "Incorrect code.");
      }
    } catch (err) {
      setError("Failed to verify code.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResent(true);
    setTimeout(() => {
      setResent(false);
    }, 3000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
        id="verification-container"
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl dark:shadow-2xl/40 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 p-8 text-center overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!verified ? (
              <motion.div
                key="verify-prompt"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center mb-5 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-8 h-8 animate-pulse" />
                </div>

                <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                  {t.verifyTitle}
                </h2>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 max-w-sm mx-auto leading-relaxed">
                  {t.verifySentText} <strong className="text-indigo-600 dark:text-indigo-400 font-bold">{currentUser?.email}</strong>.
                </p>

                {/* Simulated Inbox Help Tip */}
                <div className="mt-4 p-3.5 bg-slate-50 dark:bg-slate-950/50 rounded-xl border border-slate-200/40 dark:border-slate-850 text-left">
                  <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-1.5 flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5 fill-indigo-500/10" />
                    <span>{language === 'en' ? "Simulated Verification Box" : "កញ្ចប់ផ្ទៀងផ្ទាត់សាកល្បង"}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {language === 'en' 
                      ? "A simulated code is active. Use code" 
                      : "កូដសាកល្បងត្រូវបានដំណើរការរួចរាល់។ សូមប្រើប្រាស់កូដ"
                    }{" "}
                    <span className="font-mono font-black text-xs text-indigo-600 bg-indigo-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-indigo-100 dark:border-indigo-950">1234</span>{" "}
                    {language === 'en' ? "to authenticate instantly." : "ដើម្បីផ្ទៀងផ្ទាត់ភ្លាមៗ។"}
                  </p>
                </div>

                {/* Error Box */}
                {error && (
                  <div className="mt-4 p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-xs flex items-start space-x-2 font-medium text-left">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Verification Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      maxLength={4}
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                      placeholder="e.g. 1234"
                      className="block w-full text-center tracking-[1em] pl-4 py-3 bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-2xl text-xl font-bold text-slate-900 dark:text-white placeholder:tracking-normal placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || code.length !== 4}
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer shadow-md shadow-indigo-600/10"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                        <span>{language === 'en' ? "Verifying..." : "កំពុងផ្ទៀងផ្ទាត់..."}</span>
                      </>
                    ) : (
                      <span>{t.verifyButton}</span>
                    )}
                  </button>
                </form>

                {/* Resend Code Section */}
                <div className="mt-6 flex flex-col items-center justify-center space-y-2">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span>{t.notReceived} </span>
                    <button
                      onClick={handleResend}
                      disabled={resent}
                      className="text-indigo-600 dark:text-indigo-400 font-extrabold hover:underline disabled:opacity-50 cursor-pointer inline-flex items-center space-x-1"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 mr-0.5 ${resent ? 'animate-spin' : ''}`} />
                      <span>{resent ? (language === 'en' ? "Sent!" : "បានផ្ញើ!") : t.resend}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => { logout(); onBackToLogin(); }}
                    className="text-xs text-slate-400 dark:text-slate-500 font-medium hover:text-slate-600 cursor-pointer pt-2"
                  >
                    {t.backToLogin}
                  </button>
                </div>
              </motion.div>
            ) : (
              /* VERIFIED SUCCESS STATE */
              <motion.div
                key="verify-success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="py-4 space-y-4"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="w-12 h-12 animate-bounce" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {language === 'en' ? "Account Verified!" : "បានផ្ទៀងផ្ទាត់ជោគជ័យ!"}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {t.verifySuccess}
                </p>

                {/* XP Reward Presentation */}
                <div className="inline-flex items-center space-x-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 px-4 py-2 rounded-2xl text-amber-600 dark:text-amber-400 font-bold text-sm animate-pulse">
                  <span>✨ +100 XP {language === 'en' ? "BONUS RECEIVED" : "ពិន្ទុរង្វាន់បន្ថែម"} ✨</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};
