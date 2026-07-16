import React, { useRef } from 'react';
import { 
  GraduationCap, Check, Sparkles, ArrowLeft, Heart, 
  HelpCircle, ExternalLink 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

// Use the provided KHQR code image URL
const qrCodeImage = 'https://cdn.corenexis.com/f/VUL2tFMTf6m.jpg';

export function SupportPage({ onBackToHome }: { onBackToHome: () => void }) {
  const { language } = useApp();
  const qrCardRef = useRef<HTMLDivElement>(null);

  // Scroll to QR Card smoothly
  const handleScrollToQR = () => {
    if (qrCardRef.current) {
      qrCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Translations
  const t = {
    en: {
      communityProject: "COMMUNITY PROJECT",
      supportTitle: "Support SabayCode Learning",
      platformDesc: "Sabaicode is operated entirely as a free educational initiative for Cambodian students and youth. Your contributions directly cover server hosting costs, domain renewals, and the creation of new bilingual coding tutorials.",
      benefitsTitle: "Benefits & What Your Donation Funds",
      
      benefit1Title: "Hosting Server & Compiler Costs",
      benefit1Desc: "keeps the in-browser code compiler and interactive sandboxes running 24/7",
      benefit2Title: "Domain Name Renewal",
      benefit2Desc: "ensures uninterrupted access to the learning portal for students every month",
      benefit3Title: "Creating New Lessons Faster",
      benefit3Desc: "accelerates production of high-quality bilingual tutorials across all courses",
      benefit4Title: "Keeping the Platform 100% Free",
      benefit4Desc: "removes financial barriers and ads, keeping a clean, distraction-free learning environment",

      backToHome: "BACK TO HOME",
      donateNow: "DONATE NOW",
      scanDonate: "Scan to Donate: NAN SEYHA",
      acledaBank: "ACLEDA BANK",
      scanPayDone: "Scan. Pay Done.",
      acctHolder: "NAN SEYHA",
      memberKhqr: "Member of KHQR",
      bankHotline: "Bank hotline: 023 994 444 | 015 999 233",
      scanInstruct: "Scan with ABA, ACLEDA, Sathapana, or any Bakong mobile app.",
    },
    km: {
      communityProject: "គម្រោងសហគមន៍",
      supportTitle: "គាំទ្រការសិក្សា SabayCode",
      platformDesc: "សប្បាយកូដ (Khmer Coding Learning) ត្រូវបានដំណើរការទាំងស្រុងជាគំនិតផ្តួចផ្តើមអប់រំឥតគិតថ្លៃសម្រាប់សិស្សានុសិស្ស និងយុវជនកម្ពុជា។ ការចូលរួមចំណែករបស់អ្នកនឹងជួយសម្រួលដល់ថ្លៃសេវាហោះស្ទីងម៉ាស៊ីនមេ ការបន្តដែនគេហទំព័រ និងការបង្កើតមេរៀនថ្មីៗទ្វេភាសា។",
      benefitsTitle: "អត្ថប្រយោជន៍ និងការប្រើប្រាស់ថវិការបស់អ្នក",

      benefit1Title: "ថ្លៃម៉ាស៊ីនមេ និងកម្មវិធីចងក្រងកូដ",
      benefit1Desc: "ធានាដំណើរការប្រព័ន្ធសាកល្បងកូដ និងម៉ាស៊ីនមេដំណើរការលឿន ២៤ម៉ោង/៧ថ្ងៃ",
      benefit2Title: "ការបន្តសុពលភាពដែនគេហទំព័រ",
      benefit2Desc: "ធានាការចូលប្រើប្រាស់គេហទំព័ររៀនកូដសម្រាប់សិស្សានុសិស្សរៀងរាល់ខែ",
      benefit3Title: "បង្កើតមេរៀនថ្មីៗបានកាន់តែរហ័ស",
      benefit3Desc: "បង្កើនល្បឿននៃការផលិតមេរៀនទ្វេភាសាដែលមានគុណភាពខ្ពស់គ្រប់វគ្គសិក្សា",
      benefit4Title: "រក្សាប្រព័ន្ធសិក្សាឥតគិតថ្លៃ ១០០%",
      benefit4Desc: "លុបបំបាត់រាល់របាំងហិរញ្ញវត្ថុ និងការផ្សាយពាណិជ្ជកម្ម ដើម្បីធានាបរិយាកាសសិក្សាស្អាតស្អំ",

      backToHome: "ត្រឡប់ទៅទំព័រដើម",
      donateNow: "បរិច្ចាគឥឡូវនេះ",
      scanDonate: "ស្កែនដើម្បីបរិច្ចាគ៖ NAN SEYHA",
      acledaBank: "អេស៊ីលីដា ACLEDA BANK",
      scanPayDone: "ស្កែន។ ទូទាត់។ រួចរាល់។",
      acctHolder: "NAN SEYHA",
      memberKhqr: "សមាជិក KHQR",
      bankHotline: "ទូរស័ព្ទបន្ទាន់ធនាគារ៖ 023 994 444 | 015 999 233",
      scanInstruct: "ស្កែនជាមួយកម្មវិធី ABA, ACLEDA, Sathapana ឬកម្មវិធីទូរស័ព្ទបាគងណាមួយ។",
    }
  }[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in text-left">
      
      {/* Back to top row */}
      <button
        onClick={onBackToHome}
        className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 transition cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'en' ? "Back to Dashboard" : "ត្រឡប់ទៅកាន់ផ្ទាំងគ្រប់គ្រង"}</span>
      </button>

      {/* Two column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Benefits & description */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-3xl p-6 md:p-8 shadow-sm">
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-emerald-500 text-white rounded-xl shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-block bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono tracking-wider">
                {t.communityProject}
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-3.5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t.supportTitle}
          </h1>

          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-sans">
            {t.platformDesc}
          </p>

          <hr className="border-slate-100 dark:border-slate-800 mb-6" />

          {/* Benefits section heading */}
          <div className="flex items-center space-x-2 text-slate-900 dark:text-white mb-5 font-bold text-sm">
            <Sparkles className="w-4.5 h-4.5 text-amber-500" />
            <span>{t.benefitsTitle}</span>
          </div>

          {/* Checklist items */}
          <div className="space-y-3.5 mb-8">
            {/* Hosting server & compiler */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit1Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit1Desc}</p>
              </div>
            </div>

            {/* Domain Name */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit2Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit2Desc}</p>
              </div>
            </div>

            {/* Creating lessons */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit3Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit3Desc}</p>
              </div>
            </div>

            {/* Platform free */}
            <div className="flex items-start space-x-3.5 p-4 bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-900 rounded-2xl">
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.benefit4Title}</h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">{t.benefit4Desc}</p>
              </div>
            </div>
          </div>

          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
            <button
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-950 text-xs font-black uppercase tracking-wider transition cursor-pointer"
            >
              {t.backToHome}
            </button>
            <button
              onClick={handleScrollToQR}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider shadow-sm transition hover:shadow duration-150 cursor-pointer"
            >
              <Heart className="w-4 h-4 mr-2 text-rose-300 fill-rose-300" />
              <span>{t.donateNow}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Donation KHQR card slip */}
        <div ref={qrCardRef} className="lg:col-span-5 flex flex-col items-center">
          
          {/* Small pill label above card */}
          <div className="mb-4 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.scanDonate}</span>
          </div>

          {/* The Bank Slip Card container */}
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 border border-emerald-100 dark:border-emerald-950/40 rounded-3xl p-4 md:p-5 shadow-lg flex flex-col items-center relative overflow-hidden transition-all">
            {/* Decorative background grids */}
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-10 dark:opacity-5"></div>
            
            {/* Real ACLEDA bank card slip image */}
            <div className="relative z-10 w-full overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm">
              <img 
                src={qrCodeImage} 
                alt="NAN SEYHA ACLEDA KHQR Slip" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain block select-none"
              />
            </div>
          </div>

          {/* Interoperability message below card */}
          <p className="text-[10px] md:text-xs text-slate-400 dark:text-slate-500 text-center mt-4 max-w-sm leading-relaxed leading-normal px-2">
            {t.scanInstruct}
          </p>

        </div>

      </div>

    </div>
  );
}
