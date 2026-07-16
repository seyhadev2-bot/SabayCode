import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { Course, Lesson, Topic } from '../types';
import Editor from '@monaco-editor/react';
import canvasConfetti from 'canvas-confetti';
import { 
  BookOpen, CheckCircle, ArrowRight, ArrowLeft, 
  Terminal, Layers, ChevronRight, ChevronDown, Menu, HelpCircle,
  Trophy, Award
} from 'lucide-react';
import { QuizCard } from './QuizCard';
import { MiniProjectCard } from './MiniProjectCard';
import { ReferenceViewer } from './ReferenceViewer';
import { CertificateModal } from './CertificateModal';
import { TailwindLessonView } from './TailwindLessonView';
import { runGitSimulation } from '../utils/gitSimulator';

const SQL_SEED_SCRIPT = `
-- --- SQL SANDBOX PRE-SEED DATABASE START ---
CREATE TABLE IF NOT EXISTS Customers (
  CustomerID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerName TEXT,
  ContactName TEXT,
  Address TEXT,
  City TEXT,
  PostalCode TEXT,
  Country TEXT
);

CREATE TABLE IF NOT EXISTS Employees (
  EmployeeID INTEGER PRIMARY KEY AUTOINCREMENT,
  LastName TEXT,
  FirstName TEXT,
  BirthDate TEXT,
  Photo TEXT,
  Notes TEXT
);

CREATE TABLE IF NOT EXISTS Products (
  ProductID INTEGER PRIMARY KEY AUTOINCREMENT,
  ProductName TEXT,
  SupplierID INTEGER,
  CategoryID INTEGER,
  Unit TEXT,
  Price REAL
);

CREATE TABLE IF NOT EXISTS Orders (
  OrderID INTEGER PRIMARY KEY AUTOINCREMENT,
  CustomerID INTEGER,
  EmployeeID INTEGER,
  OrderDate TEXT,
  ShipperID INTEGER
);

INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 1, 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 1);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 2, 'Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Avda. de la Constitución 2222', 'México D.F.', '05021', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 2);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 3, 'Antonio Moreno Taquería', 'Antonio Moreno', 'Mataderos 2312', 'México D.F.', '05023', 'Mexico' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 3);
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Address, City, PostalCode, Country)
SELECT 4, 'Around the Horn', 'Thomas Hardy', '120 Hanover Sq.', 'London', 'WA1 1DP', 'UK' WHERE NOT EXISTS (SELECT 1 FROM Customers WHERE CustomerID = 4);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 1, 'Davolio', 'Nancy', '1968-12-08', 'EmpID1.pic', 'Education includes a BA in psychology.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 1);
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Photo, Notes)
SELECT 2, 'Fuller', 'Andrew', '1952-02-19', 'EmpID2.pic', 'Andrew received his Ph.D. in computer science.' WHERE NOT EXISTS (SELECT 1 FROM Employees WHERE EmployeeID = 2);

INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 1, 'Chais', 1, 1, '10 boxes x 20 bags', 18.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 1);
INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 2, 'Chang', 1, 1, '24 - 12 oz bottles', 19.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 2);
INSERT INTO Products (ProductID, ProductName, SupplierID, CategoryID, Unit, Price)
SELECT 3, 'Aniseed Syrup', 1, 2, '12 - 550 ml bottles', 10.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 3);

INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10248, 1, 1, '1996-07-04', 3 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10248);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10249, 2, 2, '1996-07-05', 1 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10249);
INSERT INTO Orders (OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)
SELECT 10250, 3, 1, '1996-07-08', 2 WHERE NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = 10250);
-- --- SQL SANDBOX PRE-SEED DATABASE END ---

`;

let cachedPistonRuntimes: any[] | null = null;

async function getPistonRuntime(targetLang: string) {
  try {
    if (!cachedPistonRuntimes) {
      const res = await fetch('https://emkc.org/api/v2/piston/runtimes');
      if (res.ok) {
        cachedPistonRuntimes = await res.json();
      }
    }
  } catch (e) {
    console.error("Failed to fetch Piston runtimes", e);
  }

  const aliasMap: Record<string, string[]> = {
    python: ['python', 'python3', 'py'],
    typescript: ['typescript', 'ts'],
    java: ['java', 'openjdk'],
    c: ['c', 'gcc', 'clang'],
    cpp: ['cpp', 'g++', 'cpp', 'c++'],
    csharp: ['csharp', 'cs', 'mono-csharp', 'dotnet'],
    php: ['php'],
    kotlin: ['kotlin', 'kt'],
    sql: ['sqlite3', 'sqlite', 'sql'],
    mysql: ['sqlite3', 'sqlite', 'sql'],
    git: ['bash', 'sh']
  };

  const targets = aliasMap[targetLang] || [targetLang];

  if (cachedPistonRuntimes && cachedPistonRuntimes.length > 0) {
    for (const target of targets) {
      const match = cachedPistonRuntimes.find((r: any) => 
        r.language === target || 
        (r.aliases && r.aliases.includes(target))
      );
      if (match) {
        return {
          language: match.language,
          version: match.version
        };
      }
    }
  }

  const pistonMap: Record<string, { language: string; version: string }> = {
    python: { language: 'python3', version: '3.10.0' },
    typescript: { language: 'typescript', version: '4.9.4' },
    java: { language: 'java', version: '15.0.2' },
    c: { language: 'c', version: '10.2.0' },
    cpp: { language: 'cpp', version: '10.2.0' },
    csharp: { language: 'csharp', version: '6.12.0' },
    php: { language: 'php', version: '8.2.3' },
    kotlin: { language: 'kotlin', version: '1.8.20' },
    sql: { language: 'sqlite3', version: '3.36.0' },
    mysql: { language: 'sqlite3', version: '3.36.0' },
    git: { language: 'bash', version: '5.2.0' }
  };

  return pistonMap[targetLang] || { language: targetLang, version: '*' };
}

interface LessonInterfaceProps {
  course: Course;
  onGoBack: () => void;
}

export const LessonInterface: React.FC<LessonInterfaceProps> = ({ course, onGoBack }) => {
  const { language, theme, progress, completeLesson, saveUserCode } = useApp();
  const t = translations[language];

  // 1. Navigation States
  const [activeTab, setActiveTab] = useState<'lessons' | 'reference' | 'quiz' | 'project'>('lessons');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isCertOpen, setIsCertOpen] = useState(false);

  // Fallback states to satisfy unused runCode references (read-only mode)
  const [code, setCode] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  const [consoleOutput, setConsoleOutput] = useState<string>('');

  const highlightCode = (codeStr: string, lang: string): React.ReactNode => {
    if (!codeStr) return '';
    let html = codeStr
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    const isWeb = ['html', 'xml', 'vue', 'angular', 'tailwind', 'bootstrap', 'jquery', 'react'].includes(lang);

    if (isWeb) {
      html = html.replace(/(&lt;\/?[a-zA-Z0-9:-]+)(\s|&gt;)/g, '<span class="text-indigo-400 font-bold">$1</span>$2');
      html = html.replace(/(\s[a-zA-Z0-9:-]+=)(["'].*?["'])/g, ' <span class="text-teal-400">$1</span><span class="text-amber-400">$2</span>');
      html = html.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="text-slate-500 italic">$1</span>');
    } else if (lang === 'css') {
      html = html.replace(/([a-zA-Z-]+\s*:)/g, '<span class="text-indigo-400">$1</span>');
      html = html.replace(/(#[a-zA-Z0-9-]+|\.[a-zA-Z0-9-]+)/g, '<span class="text-teal-400 font-bold">$1</span>');
      html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-slate-500 italic">$1</span>');
    } else {
      html = html.replace(/(\/\/.*|#.*|\/\*[\s\S]*?\*\/|--.*)/g, '<span class="text-slate-500 italic">$1</span>');
      html = html.replace(/(["'])(.*?)(\1)/g, '<span class="text-amber-400">$1$2$3</span>');
      const keywords = [
        'def ', 'class ', 'import ', 'from ', 'return', 'const ', 'let ', 'var ', 'function', 'public ', 'static ', 'void ',
        'if', 'else', 'for ', 'while', 'new ', 'try', 'catch', 'select', 'SELECT', 'FROM', 'WHERE', 'where', 'ORDER BY', 'order by',
        'and', 'OR', 'or', 'LIMIT', 'limit', 'CREATE TABLE', 'create table', 'INSERT INTO', 'insert into', 'values', 'VALUES',
        'using ', 'namespace ', 'cout', 'cin', 'int ', 'char ', 'double ', 'float ', 'bool ', 'String ', 'include', 'printf',
        'package ', 'fun ', 'val ', 'var '
      ];
      keywords.forEach(keyword => {
        const escaped = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\b(${escaped})`, 'g');
        html = html.replace(regex, '<span class="text-indigo-400 font-bold">$1</span>');
      });
    }

    return <code dangerouslySetInnerHTML={{ __html: html }} />;
  };
  
  // Find first lesson to select initially
  const firstLesson = course.topics[0]?.lessons[0];
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(firstLesson || null);

  // Keep active lesson in sync when course changes
  useEffect(() => {
    const first = course.topics[0]?.lessons[0];
    setActiveLesson(first || null);
    setActiveTab('lessons');
  }, [course.id]);

  // Collapsible sections state
  const [collapsedTopics, setCollapsedTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (topicId: string) => {
    setCollapsedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };

  // Renders markdown content safely without external parser to prevent issues, with support for standard custom elements
  const renderMarkdown = (text: string) => {
    return text.split('\n\n').map((block, i) => {
      // Blockquote / Tip / Note Callout Box
      if (block.trim().startsWith('> ')) {
        const formattedBlock = block.replace(/^>\s*/gm, '').trim();
        return (
          <div key={i} className="p-4 bg-amber-50/70 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 my-4 leading-relaxed font-medium">
            {formattedBlock}
          </div>
        );
      }
      // Headers
      if (block.startsWith('### ')) {
        return <h3 key={i} className="text-base font-bold text-slate-900 dark:text-white mt-4 mb-2">{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('## ')) {
        return <h2 key={i} className="text-lg font-bold text-slate-900 dark:text-white mt-5 mb-3">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('# ')) {
        return <h1 key={i} className="text-xl font-extrabold text-slate-950 dark:text-white mt-6 mb-4">{block.replace('# ', '')}</h1>;
      }
      // Inline block code blocks
      if (block.startsWith('```')) {
        const lines = block.split('\n');
        const codeContent = lines.slice(1, lines.length - 1).join('\n');
        return (
          <pre key={i} className="p-4 bg-slate-900 dark:bg-black rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto text-xs text-slate-200 leading-normal my-4 font-mono select-text text-left">
            <code>{codeContent}</code>
          </pre>
        );
      }
      // Lists
      if (block.startsWith('- ') || block.startsWith('* ') || /^\d+\./.test(block)) {
        const items = block.split('\n');
        return (
          <ul key={i} className="list-disc pl-5 space-y-1 my-3 text-slate-700 dark:text-slate-300">
            {items.map((li, j) => (
              <li key={j} className="text-sm">
                {li.replace(/^[\s\d.\-*]+\s*/, '')}
              </li>
            ))}
          </ul>
        );
      }
      // Normal paragraph
      return (
        <p key={i} className="text-sm text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
          {block}
        </p>
      );
    });
  };

  // 5. Completion Logic (Earn XP + Confetti)
  const runCode = async () => {
    const localIframeLanguages = ['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'];

    if (localIframeLanguages.includes(course.id)) {
      // In-browser Iframe Renderer
      let htmlBundle = code;

      if (course.id === 'angular') {
        // Build specialized browser-side Angular execution engine with Signals and Control Flow support
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Angular Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <style>
              body {
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background-color: #f8fafc;
                margin: 0;
                padding: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
              }
            </style>
          </head>
          <body>
            <div id="sandbox-root" class="w-full"></div>

            <script>
              const AngularCore = {
                signal: function(initialValue) {
                  let value = initialValue;
                  const listeners = new Set();
                  const s = function() {
                    if (AngularCore.activeComputed) {
                      listeners.add(AngularCore.activeComputed);
                    }
                    return value;
                  };
                  s.set = function(newValue) {
                    value = newValue;
                    listeners.forEach(fn => fn());
                    window.app?.triggerRender();
                  };
                  s.update = function(fn) {
                    s.set(fn(value));
                  };
                  s.isSignal = true;
                  return s;
                },
                computed: function(fn) {
                  let cachedValue;
                  let isDirty = true;
                  const c = function() {
                    if (isDirty) {
                      AngularCore.activeComputed = c.updateCache;
                      cachedValue = fn();
                      AngularCore.activeComputed = null;
                      isDirty = false;
                    }
                    return cachedValue;
                  };
                  c.updateCache = function() {
                    isDirty = true;
                    window.app?.triggerRender();
                  };
                  c.isSignal = true;
                  return c;
                },
                activeComputed: null,
                Component: function(metadata) {
                  return function(targetClass) {
                    targetClass.metadata = metadata;
                    return targetClass;
                  };
                }
              };
              window.AngularCore = AngularCore;
            </script>
            
            <script>
              const userCode = \`${escapedCode}\`;
              
              let cleanCode = userCode
                .replace(/import\\s*\\{([\\s\\S]*?)\\}\\s*from\\s*['"]@angular\\/core['"];?/g, (m, imports) => {
                  return "const { " + imports + " } = window.AngularCore;";
                })
                .replace(/import\\s*.*?\\s*from\\s*['"].*?['"];?/g, '')
                .replace(/export\\s+/g, '');

              function extractMetaValue(codeStr, key) {
                const idx = codeStr.indexOf(key + ':');
                if (idx === -1) return '';
                let startCharCode = 0;
                let startIdx = -1;
                for (let i = idx + key.length + 1; i < codeStr.length; i++) {
                  const charCode = codeStr.charCodeAt(i);
                  if (charCode === 39 || charCode === 34 || charCode === 96) {
                    startCharCode = charCode;
                    startIdx = i + 1;
                    break;
                  }
                }
                if (startIdx === -1) return '';
                for (let i = startIdx; i < codeStr.length; i++) {
                  if (codeStr.charCodeAt(i) === startCharCode && codeStr.charCodeAt(i-1) !== 92) {
                    return codeStr.substring(startIdx, i);
                  }
                }
                return '';
              }

              let selector = extractMetaValue(cleanCode, 'selector') || 'app-root';
              let template = extractMetaValue(cleanCode, 'template');
              let styles = extractMetaValue(cleanCode, 'styles');

              cleanCode = cleanCode.replace(/@Component\\([\\s\\S]*?\\)/, '');

              try {
                const compiledClassCode = Babel.transform(cleanCode, {
                  presets: [['typescript', { allExtensions: true, isTSX: true }]]
                }).code;

                const setupFn = new Function('AngularCore', \`
                  \${compiledClassCode}
                  return typeof AppComponent !== 'undefined' ? AppComponent : (typeof App !== 'undefined' ? App : null);
                \`);
                
                const AppComponentClass = setupFn(AngularCore);
                
                if (!AppComponentClass) {
                  throw new Error("Could not find Component class (e.g. AppComponent) in your code.");
                }

                const appInstance = new AppComponentClass();
                window.app = appInstance;

                document.getElementById('sandbox-root').innerHTML = "<" + selector + "></" + selector + ">";

                if (styles) {
                  const styleTag = document.createElement('style');
                  styleTag.innerHTML = styles;
                  document.head.appendChild(styleTag);
                }

                function compileInterpolations(text, ctx) {
                  return text.replace(/\\\\{\\\\{\\\\s*([\\\\s\\\\S]*?)\\\\s*\\\\}\\\\}/g, (match, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      const val = fn(ctx);
                      return val !== undefined && val !== null ? val : '';
                    } catch (e) {
                      return '';
                    }
                  });
                }

                function compileBindingsAndInterpolations(htmlSegment, ctx) {
                  let segment = compileInterpolations(htmlSegment, ctx);
                  
                  segment = segment.replace(/\\\\[class\\\\.([a-zA-Z0-9_-]+)\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, className, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'class="' + className + '"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[disabled\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'disabled="true"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[checked\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, expr) => {
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + expr + "; }");
                      return fn(ctx) ? 'checked="true"' : '';
                    } catch (e) {
                      return '';
                    }
                  });

                  segment = segment.replace(/\\\\[\\\\(ngModel\\\\)\\\\]\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, propName) => {
                    return 'value="' + (ctx[propName] || '') + '" oninput="app.' + propName + ' = this.value; app.triggerRender();"';
                  });

                  segment = segment.replace(/\\\\((\\\\w+)\\\\)\\\\s*=\\\\s*["']([\\\\s\\\\S]*?)["']/g, (m, eventName, handlerExpr) => {
                    const htmlEventMap = {
                      click: 'onclick',
                      change: 'onchange',
                      keyup: 'onkeyup',
                      input: 'oninput'
                    };
                    const htmlEvent = htmlEventMap[eventName] || 'on' + eventName;
                    
                    let compiledHandler = handlerExpr;
                    compiledHandler = compiledHandler.replace(/\\\\(([\\\\s\\\\S]*?)\\\\)/, (match, argsStr) => {
                      if (!argsStr.trim()) return '()';
                      const args = argsStr.split(',').map(arg => {
                        arg = arg.trim();
                        if (arg === '$event') return 'event';
                        try {
                          const fn = new Function('ctx', "with(ctx) { return " + arg + "; }");
                          const val = fn(ctx);
                          if (typeof val === 'string') return "'" + val.replace(/'/g, "\\\\'") + "'";
                          if (typeof val === 'object') return JSON.stringify(val);
                          return val;
                        } catch (e) {
                          return arg;
                        }
                      });
                      return "(" + args.join(', ') + ")";
                    });

                    return htmlEvent + '="app.' + compiledHandler + '; event.preventDefault();"';
                  });

                  return segment;
                }

                function compileTemplate(htmlString, ctx) {
                  let compiled = htmlString.replace(/@for\\\\s*\\\\(\\\\s*(\\\\w+)\\\\s+of\\\\s+([a-zA-Z0-9_()\\\\[\\\\]\\\\.\\\\'\\\\"?]+)\\\\s*;\\\\s*track\\\\s+([a-zA-Z0-9_\\\\.]+)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\}(?:\\\\s*@empty\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\})?/g, (match, itemName, listExpr, trackExpr, body, emptyBody) => {
                    let list;
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + listExpr + "; }");
                      list = fn(ctx);
                    } catch (e) {
                      list = [];
                    }
                    
                    if (!list || list.length === 0) {
                      return emptyBody ? compileBindingsAndInterpolations(emptyBody, ctx) : '';
                    }
                    
                    return list.map((item, index) => {
                      const itemCtx = Object.create(ctx);
                      itemCtx[itemName] = item;
                      itemCtx['$index'] = index;
                      return compileBindingsAndInterpolations(body, itemCtx);
                    }).join('');
                  });

                  compiled = compiled.replace(/@if\\\\s*\\\\(\\\\s*([\\\\s\\\\S]*?)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\}(?:\\\\s*@else\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\})?/g, (match, condExpr, ifBody, elseBody) => {
                    let condVal = false;
                    try {
                      const fn = new Function('ctx', "with(ctx) { return " + condExpr + "; }");
                      condVal = fn(ctx);
                    } catch (e) {
                      condVal = false;
                    }
                    return condVal ? compileBindingsAndInterpolations(ifBody, ctx) : (elseBody ? compileBindingsAndInterpolations(elseBody, ctx) : '');
                  });

                  return compileBindingsAndInterpolations(compiled, ctx);
                }

                appInstance.triggerRender = function() {
                  const renderedHTML = compileTemplate(template, appInstance);
                  const appNode = document.querySelector(selector);
                  if (appNode) {
                    appNode.innerHTML = renderedHTML;
                  }
                };

                appInstance.triggerRender();

              } catch (err) {
                document.getElementById('sandbox-root').innerHTML = \`
                  <div class="p-6 max-w-md mx-auto bg-rose-50 border border-rose-200 rounded-xl text-rose-800 space-y-2 text-left">
                    <h3 class="font-bold text-sm">⚠️ Compilation Error</h3>
                    <p class="text-xs font-mono whitespace-pre-wrap leading-relaxed">\${err.message || err}</p>
                  </div>
                \`;
                console.error(err);
              }
            </script>
          </body>
          </html>
        `;
      } else if (course.id === 'vue') {
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue 3 Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            <style>
              body {
                font-family: 'Inter', system-ui, -apple-system, sans-serif;
                background-color: #f8fafc;
                margin: 0;
                padding: 16px;
              }
            </style>
          </head>
          <body>
            <div id="sandbox-root">
              <div id="app"></div>
            </div>

            <script>
              const userCode = \`${escapedCode}\`;

              function extractBlock(codeStr, tag) {
                const regex = new RegExp('<' + tag + '[^>]*>([\\\\s\\\\S]*?)<\\\\/' + tag + '>', 'i');
                const match = codeStr.match(regex);
                return match ? match[1].trim() : null;
              }

              try {
                const template = extractBlock(userCode, 'template');
                const scriptSetup = extractBlock(userCode, 'script\\\\s+setup');
                const scriptNormal = extractBlock(userCode, 'script');
                const styleContent = extractBlock(userCode, 'style');

                if (styleContent) {
                  const styleTag = document.createElement('style');
                  styleTag.innerHTML = styleContent;
                  document.head.appendChild(styleTag);
                }

                const { createApp, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject } = Vue;

                let componentOptions = {};

                if (template) {
                  componentOptions.template = template;
                }

                if (scriptSetup) {
                  let cleanScript = scriptSetup
                    .replace(/import\\\\s*\\\\{([\\\\s\\\\S]*?)\\\\}\\\\s*from\\\\s*['"]vue['"];?/g, 'const { $1 } = Vue;')
                    .replace(/import\\\\s*.*?\\\\s*from\\\\s*['"].*?['"];?/g, '')
                    .replace(/export\\\\s+default\\\\s+/g, '');

                  const declaredVars = new Set();
                  const varRegex = /(?:const|let|var)\\\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\\\s*=/g;
                  let match;
                  while ((match = varRegex.exec(cleanScript)) !== null) {
                    declaredVars.add(match[1]);
                  }
                  
                  const funcRegex = /function\\\\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\\\\s*\\\\(/g;
                  while ((match = funcRegex.exec(cleanScript)) !== null) {
                    declaredVars.add(match[1]);
                  }

                  const returnKeys = Array.from(declaredVars);

                  const setupFn = new Function('Vue', 'ref', 'reactive', 'computed', 'watch', 'onMounted', 'onUnmounted', 'provide', 'inject', \`
                    \${cleanScript}
                    return { \${returnKeys.join(', ')} };
                  \`);

                  componentOptions.setup = function() {
                    return setupFn(Vue, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject);
                  };

                } else if (scriptNormal) {
                  let cleanScript = scriptNormal
                    .replace(/import\\\\s*.*?\\\\s*from\\\\s*['"].*?['"];?/g, '')
                    .replace(/export\\\\s+default\\\\s+/, 'return ');

                  const setupFn = new Function('Vue', 'ref', 'reactive', 'computed', 'watch', 'onMounted', 'onUnmounted', 'provide', 'inject', cleanScript);
                  const returnedOptions = setupFn(Vue, ref, reactive, computed, watch, onMounted, onUnmounted, provide, inject);
                  
                  componentOptions = {
                    ...returnedOptions,
                    template: template || returnedOptions.template
                  };
                } else {
                  if (!template && (userCode.includes('<!DOCTYPE html>') || userCode.includes('<html'))) {
                    document.open();
                    document.write(userCode);
                    document.close();
                    throw 'HTML_DIRECT_RENDER';
                  } else {
                    componentOptions.template = template || userCode;
                  }
                }

                const app = createApp(componentOptions);
                app.mount('#app');

              } catch (err) {
                if (err !== 'HTML_DIRECT_RENDER') {
                  document.getElementById('sandbox-root').innerHTML = \`
                    <div class="p-6 max-w-md mx-auto bg-rose-50 border border-rose-200 rounded-xl text-rose-800 space-y-2 text-left">
                      <h3 class="font-bold text-sm">⚠️ Vue Compilation Error</h3>
                      <p class="text-xs font-mono whitespace-pre-wrap leading-relaxed">\${err.message || err}</p>
                    </div>
                  \`;
                  console.error(err);
                }
              }
            </script>
          </body>
          </html>
        `;
      } else if (!code.includes('<!DOCTYPE html>') && !code.includes('<html>')) {
        let extraCDN = '';
        if (course.id === 'jquery') {
          extraCDN = `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`;
        } else if (course.id === 'tailwind') {
          extraCDN = `<script src="https://cdn.tailwindcss.com"></script>`;
        } else if (course.id === 'bootstrap') {
          extraCDN = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">`;
        } else if (course.id === 'react') {
          extraCDN = `
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          `;
        }

        htmlBundle = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>body { font-family: sans-serif; padding: 15px; margin: 0; background-color: #fafafa; }</style>
            ${extraCDN}
          </head>
          <body>
            ${code}
          </body>
          </html>
        `;
      }

      setTimeout(() => {
        setIframeSrc(htmlBundle);
        setConsoleOutput(language === 'en' ? 'Rendered successfully.' : 'ដំណើរការបង្ហាញដោយជោគជ័យ។');
        setIsRunning(false);
      }, 400);

    } else {
      // Server-Side Piston Sandbox API (Python, C, C++, Java, Kotlin, PHP, C#, TS, SQL)
      const extMap: Record<string, string> = {
        python: 'py',
        typescript: 'ts',
        java: 'java',
        c: 'c',
        cpp: 'cpp',
        csharp: 'cs',
        php: 'php',
        kotlin: 'kt',
        sql: 'sql',
        mysql: 'sql'
      };
      const ext = extMap[course.id] || 'py';

      try {
        const resolved = await getPistonRuntime(course.id);
        
        let fileName = `main.${ext}`;
        if (course.id === 'java') {
          const classMatch = code.match(/(?:public\s+)?class\s+(\w+)/);
          if (classMatch && classMatch[1]) {
            fileName = `${classMatch[1]}.java`;
          } else {
            fileName = 'Main.java';
          }
        } else if (course.id === 'csharp') {
          fileName = 'Program.cs';
        }

        const isSql = course.id === 'sql' || course.id === 'mysql';
        const executableCode = isSql ? SQL_SEED_SCRIPT + '\n' + code : code;

        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            language: resolved.language,
            version: resolved.version,
            files: [
              {
                name: fileName,
                content: executableCode
              }
            ]
          })
        });

        const data = await response.json();
        if (data.run) {
          const out = data.run.output || data.run.stdout || data.run.stderr || 'No output produced.';
          setConsoleOutput(out);
        } else {
          setConsoleOutput(language === 'en' ? 'Execution timed out or sandbox server rejected request.' : 'ការសាកល្បងកូដរលត់ម៉ោង ឬម៉ាស៊ីនបដិសេធសំណើ។');
        }
      } catch (err) {
        setConsoleOutput(`Connection Error: ${err}`);
      } finally {
        setIsRunning(false);
      }
    }
  };

  // 5. Completion Logic (Earn XP + Confetti)
  const handleMarkAsCompleted = () => {
    if (!activeLesson) return;
    
    // Unlocks / registers lesson completed
    completeLesson(course.id, activeLesson.id);

    // Fire Confetti animation
    canvasConfetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Check if active lesson is completed
  const isLessonCompleted = activeLesson 
    ? progress.completedLessons.includes(`${course.id}-${activeLesson.id}`) 
    : false;

  // Next / Previous navigation buttons
  const flatLessons = course.topics.flatMap(t => t.lessons);
  const currentLessonIndex = activeLesson ? flatLessons.findIndex(l => l.id === activeLesson.id) : -1;

  const handleNextLesson = () => {
    if (currentLessonIndex < flatLessons.length - 1) {
      setActiveLesson(flatLessons[currentLessonIndex + 1]);
    } else {
      // End of course lessons, switch to Quiz tab!
      setActiveTab('quiz');
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setActiveLesson(flatLessons[currentLessonIndex - 1]);
    }
  };

  // Map editor code type correctly
  const getEditorLanguage = () => {
    const editorMap: Record<string, string> = {
      html: 'html',
      css: 'css',
      javascript: 'javascript',
      typescript: 'typescript',
      python: 'python',
      java: 'java',
      c: 'c',
      cpp: 'cpp',
      csharp: 'csharp',
      php: 'php',
      kotlin: 'kotlin',
      sql: 'sql',
      mysql: 'sql',
      jquery: 'javascript',
      react: 'javascript',
      tailwind: 'html',
      bootstrap: 'html',
      vue: 'html',
      angular: 'typescript',
      flutter: 'dart',
    };
    return editorMap[course.id] || 'javascript';
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden" id="lesson-interface">
      {/* Course Subheader Navigation bar */}
      <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-left">
        <div className="flex items-center space-x-3">
          <button 
            onClick={onGoBack}
            className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {course.title[language]}
            </h2>
            <p className="text-[10px] text-slate-500 font-medium font-mono uppercase mt-0.5">
              Category: {course.category}
            </p>
          </div>
        </div>

        {/* Tab Switchers */}
        <div className="flex bg-slate-100 dark:bg-slate-900 p-0.5 rounded-xl border border-slate-200/40 dark:border-slate-800/60 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              activeTab === 'lessons' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.lessons}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('reference')}
            className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              activeTab === 'reference' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>{t.reference}</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              activeTab === 'quiz' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.quiz}</span>
          </button>

          <button
            onClick={() => setActiveTab('project')}
            className={`px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
              activeTab === 'project' ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.miniProjects}</span>
          </button>
        </div>

        {/* Hamburger Outline Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
          title="Toggle course menu outline"
        >
          <Menu className="w-4.5 h-4.5 text-slate-500 dark:text-slate-400" />
        </button>
      </div>

      {/* Main Double Panel Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side menu outline bar */}
        {sidebarOpen && (
          <aside className="w-64 border-r border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 overflow-y-auto flex flex-col justify-between text-left">
            <div className="p-4 space-y-5">
              <h3 className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase">
                {t.curriculum}
              </h3>

              {/* Topics block lists */}
              <div className="space-y-4">
                {course.topics.map((topic) => {
                  const isCollapsed = collapsedTopics[topic.id];
                  const isGettingStarted = topic.id === 'getting-started';
                  return (
                    <div key={topic.id} className="space-y-1.5">
                      {!isGettingStarted && (
                        <button
                          onClick={() => toggleTopic(topic.id)}
                          className="w-full flex items-center justify-between text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 leading-tight hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors py-1 text-left cursor-pointer uppercase tracking-wider mt-4"
                        >
                          <span className="truncate pr-2">{topic.title[language]}</span>
                          {isCollapsed ? (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                        </button>
                      )}
                      
                      {(!isCollapsed || isGettingStarted) && (
                        <div className={`space-y-0.5 ${isGettingStarted ? '' : 'pl-2.5 border-l border-slate-100 dark:border-slate-900'}`}>
                          {topic.lessons.map((lesson) => {
                            const isSelected = activeLesson?.id === lesson.id && activeTab === 'lessons';
                            const isDone = progress.completedLessons.includes(`${course.id}-${lesson.id}`);

                            return (
                              <button
                                key={lesson.id}
                                onClick={() => {
                                  setActiveLesson(lesson);
                                  setActiveTab('lessons');
                                  if (window.innerWidth < 768) {
                                    setSidebarOpen(false);
                                  }
                                }}
                                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-all ${
                                  isSelected
                                    ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                                }`}
                              >
                                <div className="flex items-center min-w-0 flex-1 pr-2">
                                  <span className="truncate">{lesson.title[language]}</span>
                                  {lesson.isNew && (
                                    <span className="ml-1.5 px-1 py-0.5 text-[8px] font-bold bg-indigo-500 text-white rounded shrink-0 leading-none">
                                      {language === 'en' ? 'New' : 'ថ្មី'}
                                    </span>
                                  )}
                                </div>
                                {isDone && (
                                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 fill-emerald-500/10" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Complete progress counter inside list */}
            <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900">
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>{language === 'en' ? "Course Unlocked" : "បើកសិក្សាបាន"}</span>
                <span>
                  {course.topics.flatMap(t => t.lessons).filter(l => progress.completedLessons.includes(`${course.id}-${l.id}`)).length}
                  /{course.topics.flatMap(t => t.lessons).length}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-600 rounded-full transition-all"
                  style={{
                    width: `${Math.round((course.topics.flatMap(t => t.lessons).filter(l => progress.completedLessons.includes(`${course.id}-${l.id}`)).length / course.topics.flatMap(t => t.lessons).length) * 100)}%`
                  }}
                />
              </div>
            </div>
          </aside>
        )}

        {/* Right Dynamic Viewport Panel (Lessons Reader & Monaco Sandbox Editor) */}
        <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Active View Router */}
          {activeTab === 'lessons' && activeLesson ? (
            <div className="flex-1 p-6 md:p-8 overflow-y-auto text-left bg-white dark:bg-slate-950/40 w-full">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="inline-block px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'en' ? 'Core Concept' : 'គំនិតស្នូល'}
                </div>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {activeLesson.title[language]}
                </h1>
                
                {/* Markdown explanations or custom Tailwind visualizer */}
                {course.id === 'tailwind' ? (
                  <TailwindLessonView lessonId={activeLesson.id} language={language} />
                ) : (
                  <div className="markdown-body mt-4 font-sans leading-relaxed">
                    {renderMarkdown(activeLesson.content[language])}
                  </div>
                )}

                {/* Example box and Try It Yourself button as W3Schools style */}
                {activeLesson.starterCode && (
                  <div className="space-y-3 mt-8 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/20 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold font-mono uppercase bg-slate-200 dark:bg-slate-800 px-2.5 py-1 rounded-lg text-slate-500 dark:text-slate-400">
                        {language === 'en' ? 'Example' : 'ឧទាហរណ៍'}
                      </span>
                    </div>
                    <div className="relative group">
                      <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
                        {highlightCode(activeLesson.starterCode, course.id)}
                      </pre>
                    </div>
                    <div className="pt-2">
                      <a
                        href={`#/tryit?course=${course.id}&lesson=${activeLesson.id}`}
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs tracking-wider transition-all shadow-md shadow-indigo-600/10 hover:scale-[1.02] cursor-pointer"
                      >
                        <span>{language === 'en' ? 'Try It Yourself »' : 'សាកល្បងដោយខ្លួនឯង »'}</span>
                      </a>
                    </div>
                  </div>
                )}

                {currentLessonIndex === flatLessons.length - 1 && (
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100/30 dark:from-indigo-950/20 dark:to-slate-900/40 border border-indigo-200/50 dark:border-indigo-900/30 text-left space-y-4 animate-fade-in mt-6">
                    <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-extrabold text-sm uppercase font-mono tracking-wider">
                      <Trophy className="w-5 h-5 text-amber-500 animate-pulse" />
                      <span>{language === 'en' ? "Curriculum Completed!" : "បានបញ្ចប់កម្មវិធីសិក្សាទាំងស្រុង!"}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {language === 'en' 
                        ? "Congratulations! You have completed all lessons in this curriculum. Put your skills to the test and earn your official certification below:"
                        : "អបអរសាទរ! អ្នកបានអាន និងស្វែងយល់រាល់មេរៀនទាំងអស់នៅក្នុងកម្មវិធីសិក្សានេះហើយ។ សាកល្បងសមត្ថភាព និងទាញយកវិញ្ញាបនបត្ររបស់អ្នកនៅខាងក្រោម៖"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <button
                        onClick={() => setActiveTab('quiz')}
                        className="flex items-center justify-center space-x-1.5 p-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800/80 font-bold text-xs transition shadow-sm cursor-pointer"
                      >
                        <HelpCircle className="w-4 h-4" />
                        <span>{language === 'en' ? "Take Course Quiz" : "ធ្វើតេស្តវគ្គសិក្សា"}</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('project')}
                        className="flex items-center justify-center space-x-1.5 p-3 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-850 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800/80 font-bold text-xs transition shadow-sm cursor-pointer"
                      >
                        <Layers className="w-4 h-4" />
                        <span>{language === 'en' ? "Practice Exercises" : "លំហាត់អនុវត្ត"}</span>
                      </button>
                      <button
                        onClick={() => setIsCertOpen(true)}
                        className="flex items-center justify-center space-x-1.5 p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm cursor-pointer"
                      >
                        <Award className="w-4 h-4" />
                        <span>{language === 'en' ? "Claim Certificate" : "ទាញយកវិញ្ញាបនបត្រ"}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Completed / Mark Lesson completed controller buttons */}
                <div className="border-t border-slate-200/60 dark:border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {isLessonCompleted ? (
                    <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 fill-emerald-500/10 animate-bounce" />
                      <span>{language === 'en' ? 'Lesson Completed (+50 XP Earned!)' : 'បានបញ្ចប់មេរៀន (ទទួលបាន +៥០ XP!)'}</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleMarkAsCompleted}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-500/10 cursor-pointer transition"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{t.markCompleted}</span>
                    </button>
                  )}

                  {/* Left & Right navigational arrows */}
                  <div className="flex space-x-2 w-full sm:w-auto">
                    <button
                      onClick={handlePrevLesson}
                      disabled={currentLessonIndex === 0}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-900 transition cursor-pointer"
                      title={t.previousLesson}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextLesson}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition cursor-pointer"
                      title={t.nextLesson}
                    >
                      <span>{t.nextLesson}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'reference' ? (
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white dark:bg-slate-950/40 text-left">
              <ReferenceViewer courseId={course.id} />
            </div>
          ) : activeTab === 'quiz' ? (
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white dark:bg-slate-950/40 text-left">
              <QuizCard course={course} />
            </div>
          ) : (
            <div className="flex-1 p-6 md:p-8 overflow-y-auto bg-white dark:bg-slate-950/40 text-left">
              <MiniProjectCard course={course} />
            </div>
          )}

          {/* Certificate Generation Modal */}
          <CertificateModal 
            courseTitle={course.title[language]} 
            isOpen={isCertOpen} 
            onClose={() => setIsCertOpen(false)} 
          />

        </main>
      </div>
    </div>
  );
};
