import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Award, Printer, X, Check, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  courseTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ courseTitle, isOpen, onClose }) => {
  const { language, progress } = useApp();
  const [studentName, setStudentName] = useState(progress.profileName || 'Cambodian Coder');
  const [isSaved, setIsSaved] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContent = printRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      const printWindow = window.open('', '', 'height=600,width=800');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Certificate - ${studentName}</title>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Kantumruy+Pro:wght@400;700&display=swap');
                body {
                  font-family: 'Inter', 'Kantumruy Pro', sans-serif;
                  margin: 0;
                  padding: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 90vh;
                  background-color: white;
                }
                .cert-container {
                  border: 12px double #eab308;
                  padding: 40px;
                  max-width: 800px;
                  width: 100%;
                  text-align: center;
                  background-color: #fff9e6;
                  border-radius: 12px;
                  box-sizing: border-box;
                }
                .cert-title {
                  font-size: 28px;
                  font-weight: 800;
                  color: #1e3a8a;
                  margin-bottom: 5px;
                  letter-spacing: 2px;
                }
                .cert-subtitle {
                  font-size: 14px;
                  color: #6b7280;
                  margin-bottom: 30px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                }
                .cert-present {
                  font-size: 14px;
                  color: #4b5563;
                  font-style: italic;
                  margin-bottom: 10px;
                }
                .cert-name {
                  font-size: 32px;
                  font-weight: 800;
                  color: #b45309;
                  border-bottom: 2px solid #eab308;
                  display: inline-block;
                  padding-bottom: 5px;
                  margin-bottom: 20px;
                  min-width: 300px;
                }
                .cert-text {
                  font-size: 13px;
                  color: #374151;
                  line-height: 1.6;
                  margin-bottom: 40px;
                }
                .cert-signatures {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 40px;
                  padding: 0 40px;
                }
                .signature-block {
                  border-top: 1px solid #9ca3af;
                  width: 180px;
                  padding-top: 8px;
                  font-size: 11px;
                  color: #4b5563;
                }
                .seal {
                  font-size: 40px;
                  margin: 20px auto;
                }
              </style>
            </head>
            <body>
              <div class="cert-container">
                <div class="cert-title">CERTIFICATE OF ACHIEVEMENT</div>
                <div class="cert-subtitle">វិញ្ញាបនបត្របញ្ចប់ការសិក្សា</div>
                <div class="cert-present">This is proudly presented to</div>
                <div class="cert-name">${studentName}</div>
                <div class="cert-text">
                  for successfully completing all lessons, projects, and standardized curriculum challenges for the 
                  <strong>${courseTitle} Course</strong> under the bilingual learning framework with high honors.
                </div>
                <div class="seal">⭐</div>
                <div class="cert-signatures">
                  <div class="signature-block">
                    <strong>Sabaicode Academy</strong><br/>Curriculum Director
                  </div>
                  <div class="signature-block">
                    <strong>AI Studio Workspace</strong><br/>Developer Mentor Agent
                  </div>
                </div>
              </div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
        }, 500);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in text-left">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-indigo-500" />
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
              {language === 'en' ? "Generate Your Certificate" : "ទាញយកវិញ្ញាបនបត្ររបស់អ្នក"}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Name input */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-indigo-50/20 dark:bg-indigo-950/10 space-y-3">
          <label htmlFor="certificate-student-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            {language === 'en' ? "Your Full Name (English or Khmer)" : "ឈ្មោះពេញរបស់អ្នក (អង់គ្លេស ឬ ខ្មែរ)"}
          </label>
          <div className="flex gap-2">
            <input
              id="certificate-student-name"
              type="text"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                setIsSaved(false);
              }}
              placeholder="e.g. Sokchea Dev"
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white text-sm focus:ring-1 focus:ring-indigo-500"
            />
            <button
              onClick={() => setIsSaved(true)}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer"
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              <span>{isSaved ? (language === 'en' ? "Confirmed" : "បានបញ្ជាក់") : (language === 'en' ? "Confirm Name" : "បញ្ជាក់ឈ្មោះ")}</span>
            </button>
          </div>
        </div>

        {/* Certificate Preview Frame */}
        <div className="flex-1 p-6 overflow-y-auto max-h-[350px] bg-slate-100 dark:bg-slate-950 flex justify-center items-center">
          <div 
            ref={printRef}
            className="border-8 double border-amber-500 dark:border-amber-600 bg-amber-50/70 dark:bg-amber-950/10 p-6 sm:p-8 rounded-xl max-w-xl w-full text-center space-y-4 shadow-inner relative"
            style={{ borderStyle: 'double' }}
          >
            <div className="text-amber-600 dark:text-amber-500 text-3xl mb-1">⭐</div>
            <h4 className="text-sm font-black text-indigo-950 dark:text-indigo-400 font-mono tracking-widest uppercase">
              CERTIFICATE OF ACHIEVEMENT
            </h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider italic">
              This certificate is proudly awarded to
            </p>
            <div className="text-xl font-black text-amber-700 dark:text-amber-500 border-b-2 border-amber-300 dark:border-amber-700 inline-block px-6 pb-1 font-sans">
              {studentName}
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              for successfully completing all lessons, projects, and standardized curriculum challenges for the 
              <strong> {courseTitle} Course</strong> under the bilingual learning framework with high honors.
            </p>

            <div className="flex justify-between items-center pt-4 border-t border-amber-200 dark:border-amber-900/40 text-[9px] text-slate-400 font-medium">
              <div className="text-left">
                <p className="font-bold text-slate-700 dark:text-slate-200">Sabaicode Academy</p>
                <p>Curriculum Director</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-700 dark:text-slate-200">AI Studio Workspace</p>
                <p>Developer Mentor Agent</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer"
          >
            {language === 'en' ? "Cancel" : "បោះបង់"}
          </button>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{language === 'en' ? "Print / Save PDF" : "បោះពុម្ព / រក្សាទុកជា PDF"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
