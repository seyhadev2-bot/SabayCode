import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: 'default' | 'white' | 'dark';
  title?: string;
}

export const SabayCodeLogo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  textColor = 'default',
  title,
}) => {
  // Dynamic text colors based on theme / prop
  const textClass = textColor === 'white' 
    ? 'text-white' 
    : textColor === 'dark' 
    ? 'text-slate-900' 
    : 'text-slate-900 dark:text-white';

  const cColorClass = textColor === 'white'
    ? 'text-white'
    : textColor === 'dark'
    ? 'text-slate-900'
    : 'text-slate-900 dark:text-white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          {/* Stunning brand blue gradient from light cyan to royal blue, matching the high-tech SC identity */}
          <linearGradient id="scBrandGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="50%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#0052d4" />
          </linearGradient>
        </defs>

        {/* The Speed 'S' shape: Bold, stylized, and continuous with the iconic left horizontal wing */}
        <path
          d="M 90,32 C 90,18 44,18 44,32 C 44,40 54,42 82,42 L 18,42 L 35,58 L 72,58 C 84,58 92,60 92,72 C 92,86 46,86 46,72"
          stroke="url(#scBrandGradient)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* The 'C' shape: Split gracefully with a diagonal gap for the tech wedge */}
        {/* Top-Right half of C */}
        <path
          d="M 108,24 C 124,24 136,36 136,50 C 136,62 126,72 118,74"
          className={cColorClass}
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Bottom-Left half of C */}
        <path
          d="M 98,28 C 90,32 84,40 84,50 C 84,62 94,72 102,74"
          className={cColorClass}
          stroke="currentColor"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* The Iconic upward diagonal tech wedge / pointer inside the C's gap */}
        <path
          d="M 88,72 L 116,24"
          stroke="url(#scBrandGradient)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />

        {/* Registered Trademark Symbol ® positioned perfectly at the top right */}
        <circle cx="148" cy="22" r="5" className={cColorClass} stroke="currentColor" strokeWidth="1" fill="none" />
        <text x="145.5" y="24" fontSize="6.5" fontWeight="bold" className={cColorClass} fill="currentColor">R</text>
      </svg>

      {showText && (
        <div className="flex flex-col">
          {title ? (
            <span className={`text-lg font-bold tracking-tight font-sans leading-none ${textClass}`}>
              {title}
            </span>
          ) : (
            <span className={`text-xl font-bold tracking-tight font-sans leading-none ${textClass}`}>
              Sabay<span className="text-blue-500 dark:text-blue-400">Code</span>
            </span>
          )}
          <span className="text-[10px] text-blue-500 dark:text-blue-400 font-semibold font-mono tracking-wider uppercase mt-1">
            Bilingual Dev
          </span>
        </div>
      )}
    </div>
  );
};
