import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { ArrowRight, Terminal, Sparkles, BookOpenCheck, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  setCurrentView: (view: 'home' | 'courses' | 'playground' | 'reference' | 'profile' | 'lesson') => void;
}

const mockCodeSnippets = [
  {
    lang: "javascript",
    code: `// សប្បាយកូដ - Sabaicode
const learnToCode = async () => {
  const students = "Cambodia 🇰🇭";
  console.log("Welcome to Sabaicode!");
  return "Happy coding!";
};`
  },
  {
    lang: "python",
    code: `# Bilingual python learning
def greet_student(name):
    print(f"សួស្តី {name}!")
    print("Welcome to Python!")

greet_student("Seyha")`
  },
  {
    lang: "html",
    code: `<!-- Learn HTML & CSS -->
<div class="card p-6 bg-indigo-500">
  <h1>សួស្តី សប្បាយកូដ!</h1>
  <p>Live sandbox visualizer</p>
</div>`
  }
];

export const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  const { language } = useApp();
  const t = translations[language];
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [typedCode, setTypedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Cycle through code snippets typing effect
  useEffect(() => {
    const currentCode = mockCodeSnippets[snippetIndex].code;
    if (charIndex < currentCode.length) {
      const timeout = setTimeout(() => {
        setTypedCode((prev) => prev + currentCode[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        // Reset and go to next snippet
        setSnippetIndex((prev) => (prev + 1) % mockCodeSnippets.length);
        setTypedCode('');
        setCharIndex(0);
      }, 4000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, snippetIndex]);

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24" id="hero-section">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 -z-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-96 h-96 bg-pink-500/5 dark:bg-violet-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/30 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'en' 
                  ? "100% Free Interactive Learning" 
                  : "ការរៀនអន្តរកម្មឥតគិតថ្លៃ ១០០%"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
              {language === 'en' ? (
                <>
                  Learn to Code <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Bilingually
                  </span>
                </>
              ) : (
                <>
                  រៀនសរសេរកូដតាមបែប <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 font-bold">
                    ទ្វេភាសា (ខ្មែរ/អង់គ្លេស)
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {t.appSlogan} {language === 'en' 
                ? "Gain industry-ready skills with structural lessons matching standard documentation, paired with a full-screen code workspace and real-time outputs." 
                : "ទទួលបានជំនាញកូដកម្រិតស្ដង់ដារតាមរយៈមេរៀនលម្អិត ភ្ជាប់ជាមួយឧបករណ៍សាកល្បងកូដដ៏ទំនើប និងលទ្ធផលដំណើរការភ្លាមៗ។"}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setCurrentView('courses')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 cursor-pointer"
              >
                <span>{t.startCourse}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentView('playground')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-850 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>{t.playground}</span>
                <Terminal className="w-4 h-4 text-indigo-500" />
              </button>
            </div>

            {/* Micro badges list */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">21</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'en' ? "Courses" : "វគ្គសិក្សា"}
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">100%</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'en' ? "Bilingual" : "ទ្វេភាសា"}
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">Real</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'en' ? "Compilers" : "ម៉ាស៊ីនដំណើរការ"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal Visualization */}
          <div className="lg:col-span-5 relative" id="hero-terminal">
            {/* Ambient terminal shadows */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-2xl -z-10" />

            <div className="overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col h-80 sm:h-96">
              {/* Window Header */}
              <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800/80">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-slate-500 font-mono text-xs font-semibold flex items-center space-x-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{mockCodeSnippets[snippetIndex].lang}.py - Editor</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Code Pane */}
              <div className="flex-1 p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-y-auto leading-relaxed select-none text-left">
                <pre className="whitespace-pre-wrap">
                  {typedCode}
                  <span className="inline-block w-2 h-4 bg-indigo-400 ml-0.5 animate-pulse" />
                </pre>
              </div>

              {/* Terminal Bottom Output bar */}
              <div className="bg-slate-900/60 p-3 border-t border-slate-900/80 font-mono text-[10px] sm:text-xs text-slate-400 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Interactive Runner is Ready</span>
                </div>
                <span>Ln 1, Col 1</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 border-t border-slate-200 dark:border-slate-900 pt-16">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start">
            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Full Curriculum" : "មាតិកាសិក្សាពេញលេញ"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Explore over 20 languages and modern frameworks from HTML/CSS to React, SQL, and C++." 
                  : "ស្វែងរកមេរៀនចំនួន២០+ ភាសាកូដ និងក្របខ័ណ្ឌការងារចាប់ពី HTML/CSS រហូតដល់ React, SQL, និង C++។"}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start">
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Immediate Compiler" : "ម៉ាស៊ីនចងក្រងភ្លាមៗ"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Run code instantly inside your browser! Experience HTML/CSS iframe builders and real backend server compilers." 
                  : "ដំណើរការកូដភ្លាមៗក្នុងកម្មវិធីរុករករបស់អ្នក! ទទួលបានការឆ្លុះបញ្ចាំងលទ្ធផលរហ័សទាន់ចិត្ត និងត្រឹមត្រូវ។"}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-900 flex space-x-4 items-start">
            <div className="p-3 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-slate-100">
                {language === 'en' ? "Dual-Language UI" : "ចំណុចប្រទាក់ពីរភាសា"}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                {language === 'en' 
                  ? "Read documentation, explanations, guidelines and solve quizzes seamlessly in Khmer or English." 
                  : "អានឯកសារពន្យល់ មេរៀន សេចក្តីណែនាំ និងឆ្លើយកម្រងសំណួរជាភាសាខ្មែរ ឬអង់គ្លេសដោយងាយស្រួល។"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
