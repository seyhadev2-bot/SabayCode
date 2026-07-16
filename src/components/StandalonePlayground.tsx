import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { coursesData } from '../data/coursesData';
import Editor from '@monaco-editor/react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Terminal, RotateCcw, Copy, Check, Download, 
  Sparkles, Code, FileCode, ChevronRight, ChevronDown, 
  BookOpen, Globe, Cpu, Database, Info, Maximize2, Minimize2, 
  Trash2, ExternalLink, RefreshCw, Columns, ArrowLeft, Beaker
} from 'lucide-react';

// Hardcoded starter templates
const playgroundTemplates: Record<string, string> = {
  html: `<!DOCTYPE html>
<html>
<head>
  <title>Sabaicode HTML Sandbox</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; text-align: center; padding: 40px; background-color: #f8fafc; color: #1e293b; }
    h1 { color: #4f46e5; font-size: 36px; font-weight: 800; margin-bottom: 12px; }
    .card { background: white; max-width: 450px; margin: 0 auto; padding: 30px; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
    .btn { background: #4f46e5; color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .btn:hover { background: #3730a3; transform: translateY(-1px); }
  </style>
</head>
<body>
  <div class="card">
    <h1>សួស្តីពិភពលោក! 🇰🇭</h1>
    <p>Welcome to your bilingual HTML5 Sandbox. Edit anything here and click Run Code!</p>
    <button class="btn" onclick="console.log('Button clicked!'); alert('Happy coding in Cambodia!')">Interactive Button</button>
  </div>
</body>
</html>`,
  css: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background: radial-gradient(circle at top right, #e0f2fe, #f5f3ff);
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      margin: 0;
    }
    .profile-card {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      padding: 30px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.6);
      box-shadow: 0 20px 40px -15px rgba(79, 70, 229, 0.15);
      text-align: center;
      max-width: 340px;
      transition: transform 0.3s;
    }
    .profile-card:hover { transform: translateY(-5px); }
    h2 { color: #4f46e5; margin: 0 0 10px 0; font-size: 24px; }
    p { color: #475569; font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
    .tag { background: #e0e7ff; color: #4f46e5; padding: 4px 12px; border-radius: 50px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="profile-card">
    <span class="tag">Designer Mode</span>
    <h2>Styled CSS Card</h2>
    <p>This workspace allows complete design control with CSS selectors, layouts, custom transitions, and variables.</p>
  </div>
</body>
</html>`,
  javascript: `// JavaScript Interactive Playground
console.log("🚀 Javascript engine online!");

function calculateDiscount(price, discountPercent) {
  const savings = price * (discountPercent / 100);
  const finalPrice = price - savings;
  return { savings, finalPrice };
}

const originalPrice = 250;
const promoDiscount = 15; // 15% discount
const invoice = calculateDiscount(originalPrice, promoDiscount);

console.log("🛒 Original Price: $" + originalPrice);
console.log("✨ Discount Savings: $" + invoice.savings);
console.log("💳 Final Payable Price: $" + invoice.finalPrice);

// You can interact with web pages directly:
document.body.innerHTML += \`
  <div style="padding: 20px; background: #f0fdf4; border: 1.5px solid #bbf7d0; border-radius: 12px; max-width: 400px; margin: 20px auto; font-family: sans-serif; text-align: center;">
    <h3 style="color: #16a34a; margin-top: 0;">Javascript Rendered!</h3>
    <p style="font-size: 14px; color: #1e293b;">Calculated Pay price is: <strong>$\${invoice.finalPrice}</strong></p>
  </div>
\`;`,
  typescript: `// TypeScript Static Types & Interfaces
interface Developer {
  id: number;
  name: string;
  isBilingual: boolean;
  skills: string[];
}

function printDeveloperInfo(dev: Developer): void {
  console.log(\`💻 SabayCode Developer Profile:\`);
  console.log(\`- Name: \${dev.name}\`);
  console.log(\`- Bilingual Support (KM/EN): \${dev.isBilingual ? 'Yes 🇰🇭' : 'No'}\`);
  console.log(\`- Technology Stack: \${dev.skills.join(', ')}\`);
}

const leadDev: Developer = {
  id: 1088,
  name: "Dara Seyha",
  isBilingual: true,
  skills: ["TypeScript", "React", "Node.js", "PostgreSQL"]
};

printDeveloperInfo(leadDev);`,
  python: `# Python Data Structures & Loops Demo
student_scores = {
    "Seyha": 95,
    "Sokchea": 88,
    "Dara": 92,
    "Borey": 79
}

print("📊 Sandbox database: Processing student grades...")
for name, score in student_scores.items():
    status = "Passed ✅" if score >= 80 else "Needs Work ⚠️"
    print(f"- Student {name:7} scored {score:3}/100 | Status: {status}")

class_average = sum(student_scores.values()) / len(student_scores)
print(f"\\n📈 Overall Class Average Score: {class_average:.2f}%")`,
  java: `public class Main {
    public static void main(String[] args) {
        String welcomeMessage = "សួស្តីពីភាសា Java! Welcome to Sabaicode Sandbox.";
        System.out.println(welcomeMessage);
        
        System.out.println("\\n--- Fibonacci Series Generator ---");
        int count = 8;
        int n1 = 0, n2 = 1;
        System.out.print(n1 + " " + n2);
        
        for (int i = 2; i < count; ++i) {
            int n3 = n1 + n2;
            System.out.print(" " + n3);
            n1 = n2;
            n2 = n3;
        }
        System.out.println();
    }
}`,
  c: `#include <stdio.h>

int main() {
    char title[] = "C Native compiler execution";
    int year = 2026;
    
    printf("--- %s ---\\n", title);
    printf("Standard: ANSI C11\\n");
    printf("State: Active compile cycle\\n");
    printf("Current running environment: Cloud sandbox container\\n");
    printf("Active year: %d\\n", year);
    
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Lesson {
public:
    string title;
    int durationMinutes;
    
    Lesson(string t, int d) {
        title = t;
        durationMinutes = d;
    }
};

int main() {
    cout << "--- C++ Object Oriented Programming Sandbox ---" << endl;
    
    vector<Lesson> syllabus;
    syllabus.push_back(Lesson("C++ Syntax basics", 45));
    syllabus.push_back(Lesson("Pointers & Memory allocation", 90));
    syllabus.push_back(Lesson("Object-Oriented Design patterns", 120));
    
    for (size_t i = 0; i < syllabus.size(); ++i) {
        cout << "Topic #" << (i+1) << ": " << syllabus[i].title 
             << " (" << syllabus[i].durationMinutes << " mins)" << endl;
    }
    
    return 0;
}`,
  csharp: `using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        Console.WriteLine("--- C# .NET Core Interactive Compiler ---");
        
        List<string> languages = new List<string> { "C#", "F#", "VB.NET", "TypeScript" };
        Console.WriteLine("Managed languages in CLR pipeline:");
        foreach (var lang in languages) {
            Console.WriteLine($"- {lang}");
        }
    }
}`,
  php: `<?php
$headline = "សួស្តីពីភាសា PHP! Live Server Sandbox.";
$timestamp = date("Y-m-d H:i:s");
?>
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; text-align: center; padding: 40px; background: #faf5ff;">
  <h1 style="color: #7c3aed;"><?php echo $headline; ?></h1>
  <p>PHP Server execution compiled this page dynamically on: <strong><?php echo $timestamp; ?></strong></p>
  <div style="display: inline-block; background: #7c3aed; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold;">
    PHP v8.2 Engine Live
  </div>
</body>
</html>`,
  kotlin: `fun main() {
    println("🇰🇭 Greet from Kotlin standard compiler!")
    val items = listOf("Variables", "Control flow", "Null safety", "Coroutines")
    
    println("\\nWhy choose Kotlin for Android development?")
    for ((index, value) in items.withIndex()) {
        println("\${index + 1}. \${value} is highly optimized.")
    }
}`,
  sql: `-- Seeded SQLite SQL Database Table
-- Select or run queries on preseeded tables: Customers, Employees, Products, Orders
SELECT CustomerID, CustomerName, ContactName, City, Country 
FROM Customers 
WHERE Country = 'Germany' OR Country = 'UK'
ORDER BY CustomerName ASC;`,
  mysql: `-- Database Sandbox: Creating a local table, inserting records, and running queries
CREATE TABLE if not exists courses (
    id INTEGER PRIMARY KEY,
    name TEXT,
    difficulty TEXT,
    xp_reward INTEGER
);

INSERT INTO courses VALUES (1, 'HTML5 Foundations', 'Beginner', 150)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;
INSERT INTO courses VALUES (2, 'React Application Design', 'Advanced', 400)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;
INSERT INTO courses VALUES (3, 'Modern Python & AI', 'Intermediate', 300)
ON CONFLICT(id) DO UPDATE SET name=excluded.name;

SELECT * FROM courses WHERE xp_reward >= 200;`,
  git: `# Simulated version control timeline
# Learn common git commands sequentially:
git init
git status
git add index.html
git commit -m "initial website boilerplate layout"
git log --oneline`,
  jquery: `<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-8 flex flex-col items-center min-h-[400px]">
  <div id="target-box" class="w-full max-w-sm bg-indigo-600 text-white p-8 rounded-2xl text-center shadow-lg mb-6 transition-all font-bold">
    jQuery Animation Target Card
  </div>
  
  <div class="flex space-x-3">
    <button id="fadeBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer">Fade Toggle</button>
    <button id="slideBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer">Slide Toggle</button>
  </div>

  <script>
    $(document).ready(function() {
      console.log("jQuery Core connected!");
      
      $("#fadeBtn").click(function() {
        console.log("Fade toggle clicked!");
        $("#target-box").fadeToggle(400);
      });
      
      $("#slideBtn").click(function() {
        console.log("Slide toggle clicked!");
        $("#target-box").slideToggle(400);
      });
    });
  </script>
</body>
</html>`,
  react: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-900 text-white min-h-[400px] flex items-center justify-center p-6">
  <div id="root" class="w-full max-w-md"></div>

  <script type="text/babel">
    const { useState, useEffect } = React;

    function CustomCounter() {
      const [count, setCount] = useState(0);
      
      useEffect(() => {
        console.log("React Component Mounted! Initial Count: " + count);
      }, []);

      const handleIncrement = () => {
        const newVal = count + 1;
        setCount(newVal);
        console.log("Count updated to: " + newVal);
      };

      return (
        <div class="bg-slate-800 border border-slate-700 p-8 rounded-3xl text-center shadow-2xl">
          <span class="inline-block bg-indigo-500/10 text-indigo-400 font-mono text-xs px-3 py-1 rounded-full uppercase">React v18 Sandbox ⚛️</span>
          <h2 class="text-2xl font-black text-white mt-4">Interactive Counter</h2>
          <p class="text-slate-400 text-sm mt-1">Sabaicode live web compiler component rendering.</p>
          
          <div class="my-6 text-5xl font-black font-mono text-indigo-400">
            {count}
          </div>
          
          <button 
            onClick={handleIncrement}
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl transition shadow-lg shadow-indigo-600/25"
          >
            Increment Count
          </button>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<CustomCounter />);
  </script>
</body>
</html>`,
  nextjs: `import React from 'react';

// Simulated Server Component Page Router Representation
export default function HomePage() {
  console.log("Simulating Next.js SSR build path rendering...");
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ background: '#000', color: '#fff', padding: '10px 20px', borderRadius: '50px', display: 'inline-block', fontSize: '12px', fontWeight: 'bold' }}>
        Next.js App Router 🚀
      </div>
      <h1 style={{ fontSize: '32px', margin: '20px 0 10px 0', fontWeight: '800' }}>Bilingual Server-Side Framework</h1>
      <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
        Edit the JSX code to see instantaneous hot module re-renders. Next.js combines powerful static generation and server hydration.
      </p>
    </div>
  );
}`,
  vue: `<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 flex flex-col items-center min-h-[400px] justify-center">
  <div id="vue-root" class="w-full max-w-sm bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 text-center">
    <span class="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Vue 3 Live Sandbox 🟢</span>
    
    <h2 class="text-xl font-bold text-slate-800 mt-4">Two-Way Data Binding</h2>
    <p class="text-xs text-slate-500 mt-1">Edit the textbox to see reactivity in action.</p>
    
    <div class="my-6">
      <div class="text-sm font-semibold text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100 min-h-[48px] flex items-center justify-center italic">
        {{ message || 'Writing some reactive text...' }}
      </div>
    </div>
    
    <input 
      v-model="message" 
      class="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:outline-none" 
      placeholder="Type reactive text here..."
      @input="logMessage"
    />
  </div>

  <script>
    const { createApp, ref } = Vue;
    createApp({
      setup() {
        const message = ref("សួស្តី សប្បាយកូដ! Reactive Live.");
        
        const logMessage = () => {
          console.log("Vue State message changed: " + message.value);
        };
        
        return { message, logMessage };
      }
    }).mount('#vue-root');
  </script>
</body>
</html>`,
  angular: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 p-8 flex items-center justify-center min-h-[400px]">
  <div class="w-full max-w-md bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-lg">
    <span class="bg-rose-50 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Angular Live Signals 🔴</span>
    
    <h3 class="text-xl font-extrabold text-slate-900 mt-4">Signals Counter</h3>
    <p class="text-slate-500 text-xs mt-1">Dynamic reactivity model tracking angular state signals.</p>

    <div class="my-6 text-4xl font-extrabold font-mono text-rose-600">
      0
    </div>

    <button class="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-6 rounded-2xl transition shadow-lg shadow-rose-600/20">
      Trigger Angular Action
    </button>
  </div>
</body>
</html>`,
  tailwind: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-white min-h-[400px] flex items-center justify-center p-6">
  <div class="max-w-md bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-800 hover:scale-[1.01] transition-all duration-300">
    <div class="inline-block bg-teal-500/10 text-teal-400 font-bold font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Tailwind v4 Engine</div>
    
    <h2 class="text-2xl font-black text-white mt-4">Rapid Prototyping</h2>
    <p class="text-slate-400 mt-2 text-sm leading-relaxed">Design beautiful user interfaces instantly with CSS utility classes directly inside your HTML structures.</p>
    
    <button 
      class="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold py-3 rounded-2xl transition shadow-lg shadow-teal-500/20 cursor-pointer"
      onclick="console.log('Tailwind button clicked!')"
    >
      Run Tailwind Action
    </button>
  </div>
</body>
</html>`,
  bootstrap: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light py-5">
  <div class="container bg-white p-5 rounded-4 shadow-sm" style="max-width: 500px;">
    <span class="badge bg-primary text-uppercase mb-3 px-3 py-2">Bootstrap v5</span>
    <h2 class="text-primary font-weight-bold mb-2">Grid & Layout system</h2>
    <p class="text-muted mb-4">Design responsive grids and pre-styled UI components easily using official mobile-first bootstrap packages.</p>
    <div class="alert alert-info py-2 font-monospace" style="font-size: 13px;">Bootstrap container active.</div>
    <button class="btn btn-primary w-100 py-2.5 font-weight-bold" onclick="console.log('Bootstrap action triggered!');">Trigger Bootstrap Action</button>
  </div>
</body>
</html>`,
  flutter: `import 'package:flutter/material.dart';

void main() => runApp(PlaygroundApp());

class PlaygroundApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sabaicode Flutter Playground'),
          backgroundColor: Colors.indigo,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.bolt, size: 80, color: Colors.amber),
              SizedBox(height: 15),
              Text(
                'Happy Coding with Flutter!',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: Colors.indigo,
                ),
              ),
              SizedBox(height: 5),
              Text('Edit this code to customize your virtual app device.'),
            ],
          ),
        ),
      ),
    );
  }
}`
};

// Filename and extension map
const langFileInfoMap: Record<string, { filename: string, iconColor: string }> = {
  html: { filename: 'index.html', iconColor: 'text-orange-500' },
  css: { filename: 'styles.css', iconColor: 'text-blue-500' },
  javascript: { filename: 'app.js', iconColor: 'text-yellow-500' },
  typescript: { filename: 'app.ts', iconColor: 'text-sky-600' },
  python: { filename: 'main.py', iconColor: 'text-teal-500' },
  java: { filename: 'Main.java', iconColor: 'text-amber-600' },
  c: { filename: 'main.c', iconColor: 'text-slate-400' },
  cpp: { filename: 'main.cpp', iconColor: 'text-blue-600' },
  csharp: { filename: 'Program.cs', iconColor: 'text-purple-600' },
  php: { filename: 'index.php', iconColor: 'text-indigo-500' },
  kotlin: { filename: 'main.kt', iconColor: 'text-indigo-400' },
  sql: { filename: 'queries.sql', iconColor: 'text-cyan-500' },
  mysql: { filename: 'schema.sql', iconColor: 'text-cyan-600' },
  git: { filename: 'vcs_commands.sh', iconColor: 'text-orange-600' },
  jquery: { filename: 'index.html', iconColor: 'text-sky-400' },
  react: { filename: 'App.jsx', iconColor: 'text-indigo-400' },
  nextjs: { filename: 'page.jsx', iconColor: 'text-slate-200' },
  vue: { filename: 'index.html', iconColor: 'text-emerald-500' },
  angular: { filename: 'index.html', iconColor: 'text-rose-500' },
  tailwind: { filename: 'index.html', iconColor: 'text-teal-400' },
  bootstrap: { filename: 'index.html', iconColor: 'text-purple-500' },
  flutter: { filename: 'main.dart', iconColor: 'text-sky-400' },
};

// Group categories for languages
const categories = [
  { id: 'web', name: { en: 'Web Technologies', km: 'បច្ចេកវិទ្យាវិប' }, icon: Globe },
  { id: 'frameworks', name: { en: 'Advanced Frameworks', km: 'ក្របខ័ណ្ឌការងារខ្ពស់' }, icon: Sparkles },
  { id: 'backend', name: { en: 'Backend & Systems', km: 'ប្រព័ន្ធការងារខាងក្រោយ' }, icon: Cpu },
  { id: 'database', name: { en: 'Database & VCS', km: 'មូលដ្ឋានទិន្នន័យ & VCS' }, icon: Database },
];

// Map courses to their respective group categories
const getCategoryForLang = (lang: string): string => {
  const webLangs = ['html', 'css', 'javascript', 'jquery', 'tailwind', 'bootstrap'];
  const frameworkLangs = ['react', 'vue', 'angular', 'nextjs', 'flutter'];
  const backendLangs = ['python', 'typescript', 'java', 'c', 'cpp', 'csharp', 'php', 'kotlin'];
  const databaseLangs = ['sql', 'mysql', 'git'];

  if (webLangs.includes(lang)) return 'web';
  if (frameworkLangs.includes(lang)) return 'frameworks';
  if (backendLangs.includes(lang)) return 'backend';
  return 'database';
};

// Cheat Sheets content map
const cheatSheetsMap: Record<string, { title: string, code: string }[]> = {
  html: [
    { title: 'Boilerplate structure', code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Title</title>\n</head>\n<body>\n  <!-- Content here -->\n</body>\n</html>` },
    { title: 'Interactive button click', code: `<button onclick="alert('Clicked!')">Click Me</button>` },
    { title: 'Add dynamic styles', code: `<div style="background: indigo; color: white; padding: 20px; border-radius: 12px;">Styled Box</div>` }
  ],
  css: [
    { title: 'Flexbox Centering', code: `display: flex;\njustify-content: center;\nalign-items: center;` },
    { title: 'Glassmorphism background', code: `background: rgba(255, 255, 255, 0.7);\nbackdrop-filter: blur(10px);\nborder: 1px solid rgba(255,255,255,0.3);` },
    { title: 'Smooth transitions', code: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);` }
  ],
  javascript: [
    { title: 'Write console logs', code: `console.log("Output info message");` },
    { title: 'Bilingual translation array', code: `const welcome = {\n  en: "Hello World",\n  km: "សួស្តីពិភពលោក"\n};` },
    { title: 'Calculate values async', code: `const fetchData = async () => {\n  console.log("Retrieving data...");\n};` },
    { title: 'Write unit tests (Jest style)', code: `describe("Calculator Tests", () => {\n  test("adds numbers correctly", () => {\n    expect(1 + 2).toBe(3);\n  });\n});` }
  ],
  python: [
    { title: 'Lists dictionary iterate', code: `scores = {"Dara": 90, "Seyha": 95}\nfor name, val in scores.items():\n    print(f"{name} got {val}")` },
    { title: 'Define custom functions', code: `def solve_math(a, b):\n    return a * b + 10` },
    { title: 'Filter items', code: `results = [x for x in range(10) if x % 2 == 0]` },
    { title: 'Write unit tests (Discovery style)', code: `def test_addition():\n    assert 1 + 2 == 3, "Addition failed!"` }
  ],
  typescript: [
    { title: 'Define interfaces', code: `interface Config {\n  id: string;\n  isActive: boolean;\n}` },
    { title: 'Function argument typings', code: `function format(name: string, age?: number): string {\n  return \`Name: \${name}\`;\n}` },
    { title: 'Write unit tests (Jest style)', code: `describe("Addition Tests", () => {\n  test("summing simple digits", () => {\n    const sum: number = 2 + 3;\n    expect(sum).toBe(5);\n  });\n});` }
  ],
  react: [
    { title: 'Declare state Hook', code: `const [count, setCount] = useState(0);` },
    { title: 'Lifecycle side effects', code: `useEffect(() => {\n  console.log("Mounted!");\n}, []);` },
    { title: 'Write unit tests (Jest style)', code: `describe("React State Tests", () => {\n  test("checks arithmetic assertions", () => {\n    expect(2 * 5).toBe(10);\n  });\n});` }
  ],
  sql: [
    { title: 'Retrieve sorted rows', code: `SELECT * FROM Customers\nWHERE Country = 'UK'\nORDER BY CustomerName DESC;` },
    { title: 'Group and average math', code: `SELECT CategoryID, AVG(Price)\nFROM Products\nGROUP BY CategoryID;` }
  ],
  mysql: [
    { title: 'Create new table safely', code: `CREATE TABLE if not exists products (\n  id INTEGER PRIMARY KEY,\n  title TEXT,\n  price REAL\n);` },
    { title: 'Insert multi rows', code: `INSERT INTO products VALUES (1, 'Book', 12.5), (2, 'Pen', 1.5);` }
  ]
};

// Default cheat sheets fallback if lang is not in map
const defaultCheatSheet = [
  { title: 'Standard template reset', code: `// Reset to initial clean layout code\nconsole.log("Sandbox active and ready.");` },
  { title: 'Bilingual greeting logs', code: `// ខ្មែរ / English logger\nconst msg = "សួស្តី សប្បាយកូដ!";\nconsole.log(msg);` }
];

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
SELECT 2, 'Chang', 1, 1, '24 - 12 oz bottles', 19.00 WHERE NOT EXISTS (SELECT 1 FROM Products WHERE ProductID = 2);
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

const PrimitiveValueRenderer: React.FC<{ val: any }> = ({ val }) => {
  if (val === null) return <span className="text-slate-500 italic font-mono">null</span>;
  if (val === undefined) return <span className="text-slate-500 italic font-mono">undefined</span>;
  
  if (typeof val === 'string') {
    return <span className="text-emerald-400 font-mono">"{val}"</span>;
  }
  if (typeof val === 'number') {
    return <span className="text-amber-400 font-bold font-mono">{val}</span>;
  }
  if (typeof val === 'boolean') {
    return <span className="text-purple-400 font-bold font-mono">{val ? 'true' : 'false'}</span>;
  }
  if (typeof val === 'function') {
    return <span className="text-blue-400 italic font-mono font-medium">{val.toString().substring(0, 50)}...</span>;
  }
  return <span className="text-slate-200 font-mono">{String(val)}</span>;
};

const ObjectInspector: React.FC<{ data: any; depth?: number }> = ({ data, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(depth < 1);

  if (data === null) return <span className="text-slate-500 italic font-mono">null</span>;
  if (data === undefined) return <span className="text-slate-500 italic font-mono">undefined</span>;

  const isArray = Array.isArray(data);
  const keys = Object.keys(data);
  
  if (keys.length === 0) {
    return <span className="text-slate-400 font-mono">{isArray ? '[]' : '{}'}</span>;
  }

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="pl-2 font-mono text-[11px] select-text">
      <div 
        onClick={toggleOpen} 
        className="inline-flex items-center space-x-1 cursor-pointer hover:bg-slate-900 px-1 rounded transition text-slate-400 select-none"
      >
        <span className="text-[9px] text-slate-500 transition-transform duration-150 transform" style={{ display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
        <span className="text-indigo-400 font-bold font-mono">{isArray ? `Array(${keys.length})` : 'Object'}</span>
        <span className="text-slate-600 font-mono">{isOpen ? (isArray ? '[' : '{') : (isArray ? '[...]' : '{...}')}</span>
      </div>

      {isOpen && (
        <div className="pl-4 border-l border-slate-800 my-0.5 space-y-0.5">
          {keys.map((key) => {
            const val = data[key];
            const isValObj = typeof val === 'object' && val !== null;
            
            return (
              <div key={key} className="flex flex-wrap items-start font-mono">
                <span className="text-purple-400 font-bold mr-1 font-mono">{key}:</span>
                {isValObj ? (
                  <ObjectInspector data={val} depth={depth + 1} />
                ) : (
                  <PrimitiveValueRenderer val={val} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {isOpen && <span className="text-slate-600 block pl-2 font-mono">{isArray ? ']' : '}'}</span>}
    </div>
  );
};

const LogArgumentRenderer: React.FC<{ arg: { type: string; value: string; raw?: any } }> = ({ arg }) => {
  if (arg.type === 'object' || arg.type === 'array') {
    let parsedData = arg.raw;
    if (!parsedData) {
      try {
        parsedData = JSON.parse(arg.value);
      } catch (e) {
        // Fallback to text
      }
    }
    if (parsedData) {
      return <ObjectInspector data={parsedData} />;
    }
  }

  if (arg.type === 'string') {
    return <span className="text-slate-200 font-mono whitespace-pre-wrap">{arg.value}</span>;
  }
  if (arg.type === 'number') {
    return <span className="text-amber-400 font-bold font-mono">{arg.value}</span>;
  }
  if (arg.type === 'boolean') {
    return <span className="text-purple-400 font-bold font-mono">{arg.value}</span>;
  }
  if (arg.type === 'null' || arg.type === 'undefined') {
    return <span className="text-slate-500 italic font-mono">{arg.value}</span>;
  }
  if (arg.type === 'function') {
    return <span className="text-blue-400 font-mono whitespace-pre-wrap">{arg.value}</span>;
  }

  return <span className="text-slate-200 font-mono whitespace-pre-wrap">{arg.value}</span>;
};

interface StandalonePlaygroundProps {
  initialCode?: string;
  initialLang?: string;
  initialTitle?: string;
  onBack?: () => void;
}

export const StandalonePlayground: React.FC<StandalonePlaygroundProps> = ({
  initialCode,
  initialLang,
  initialTitle,
  onBack
}) => {
  const { language, theme, progress, saveUserCode } = useApp();
  const t = translations[language];

  // Selected language state
  const [selectedLang, setSelectedLang] = useState<string>(initialLang || 'html');
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [iframeSrc, setIframeSrc] = useState<string>('');
  
  // Custom console logs captured from Web IFrame
  const [iframeLogs, setIframeLogs] = useState<{ level: string; message?: string; args?: any[]; timestamp: string }[]>([]);
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'logs'>('preview');

  // Interactive UI utilities
  const [copied, setCopied] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSidebarTab, setActiveSidebarTab] = useState<'languages' | 'helper'>('languages');
  const [isFullscreenOutput, setIsFullscreenOutput] = useState(false);

  // Auto-saved banner notification
  const [savedBadgeVisible, setSavedBadgeVisible] = useState(false);

  // Track the last loaded lesson code to prevent overwriting user edits when context updates
  const lastLoadedCodeRef = useRef<string | null>(null);

  // Guard execution timeout
  const timeoutRef = useRef<any>(null);
  const isTestingRef = useRef<boolean>(false);
  const dartpadIframeRef = useRef<HTMLIFrameElement>(null);

  // Reference lists of available courses
  const filteredCourses = coursesData.filter(c => playgroundTemplates[c.id] !== undefined);

  // Sync selected language when initialLang prop changes
  useEffect(() => {
    if (initialLang) {
      setSelectedLang(initialLang);
    }
  }, [initialLang]);

  // Synchronize initial code with DartPad for Flutter
  useEffect(() => {
    if (selectedLang !== 'flutter') return;

    let hasSentCode = false;
    const sendInitialCode = () => {
      if (dartpadIframeRef.current && dartpadIframeRef.current.contentWindow) {
        dartpadIframeRef.current.contentWindow.postMessage({
          sender: 'frame',
          type: 'sourceCode',
          files: {
            'main.dart': code
          }
        }, '*');
        hasSentCode = true;
      }
    };

    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.sender === 'frame' && e.data.type === 'ready') {
        sendInitialCode();
      }
    };

    window.addEventListener('message', handleMessage);

    const iframe = dartpadIframeRef.current;
    if (iframe) {
      const handleLoad = () => {
        setTimeout(sendInitialCode, 650);
      };
      iframe.addEventListener('load', handleLoad);
      return () => {
        iframe.removeEventListener('load', handleLoad);
        window.removeEventListener('message', handleMessage);
      };
    }

    const timer = setTimeout(() => {
      if (!hasSentCode) sendInitialCode();
    }, 2500);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, [selectedLang]);

  // Reset or load code on language change
  useEffect(() => {
    if (initialLang === selectedLang && initialCode !== undefined) {
      if (lastLoadedCodeRef.current !== initialCode) {
        setCode(initialCode);
        lastLoadedCodeRef.current = initialCode;
      }
    } else {
      const cacheKey = `playground-${selectedLang}`;
      const cachedCode = progress.savedCodes[cacheKey];
      setCode(cachedCode || playgroundTemplates[selectedLang] || '// Write code here');
    }
    setOutput('');
    setIframeSrc('');
    setIframeLogs([]);
    
    // Automatically switch output tab depending on selected language type
    const isVisual = ['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular', 'flutter'].includes(selectedLang);
    setActiveOutputTab(isVisual ? 'preview' : 'logs');
  }, [selectedLang, progress.savedCodes, initialCode, initialLang]);

  // Capture IFrame postMessages for console logs and compilation results!
  useEffect(() => {
    const handleIframeLogs = (event: MessageEvent) => {
      if (!event.data) return;
      if (event.data.type === 'iframe-log') {
        const { level, message, args } = event.data;
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        setIframeLogs(prev => [...prev, { level, message, args, timestamp: timeStr }]);
        
        if (level === 'test-summary') {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsRunning(false);
        }
      } else if (event.data.type === 'execution-complete' || event.data.type === 'iframe-success') {
        // If we are running tests, the completion is indicated by 'execution-complete' after all tests have run
        if (event.data.type === 'execution-complete' || !isTestingRef.current) {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setIsRunning(false);
        }
      }
    };
    window.addEventListener('message', handleIframeLogs);
    return () => {
      window.removeEventListener('message', handleIframeLogs);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Add Cmd/Ctrl + Enter shortcut to run code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code, selectedLang, isRunning]);

  const handleCodeChange = (newVal: string | undefined) => {
    const val = newVal || '';
    setCode(val);
    saveUserCode(`playground-${selectedLang}`, val);
    
    // Show quick auto-saved badge feedback on a slight delay
    setSavedBadgeVisible(true);
    const timeout = setTimeout(() => setSavedBadgeVisible(false), 1500);
    return () => clearTimeout(timeout);
  };

  const handleReset = () => {
    if (window.confirm(language === 'en' ? "Are you sure you want to reset this editor template?" : "តើអ្នកប្រាកដជាចង់កំណត់កូដគំរូឡើងវិញមែនទេ?")) {
      const orig = (initialLang === selectedLang && initialCode !== undefined) 
        ? initialCode 
        : (playgroundTemplates[selectedLang] || '');
      setCode(orig);
      if (initialLang !== selectedLang) {
        saveUserCode(`playground-${selectedLang}`, orig);
      }
      setOutput('');
      setIframeSrc('');
      setIframeLogs([]);
    }
  };

  const runCode = async (runInTestMode = false) => {
    if (isRunning) return;
    isTestingRef.current = runInTestMode;
    setIsRunning(true);
    setOutput(runInTestMode 
      ? (language === 'en' ? "Executing test harness runner..." : "កំពុងដំណើរការកម្មវិធីតេស្តកូដ...")
      : (language === 'en' ? "Executing compiler sandbox pipeline..." : "កំពុងដំណើរការកូដមេ...")
    );
    setIframeSrc('');
    setIframeLogs([]); // Clear logs on run

    if (selectedLang === 'flutter') {
      if (runInTestMode) {
        setActiveOutputTab('logs');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        
        const logs: any[] = [];
        let passed = 0;
        let total = 0;

        const checkAssertion = (name: string, regex: RegExp, successMsg: string, failMsg: string) => {
          total++;
          const matches = regex.test(code);
          if (matches) {
            passed++;
            logs.push({ level: 'success', message: `  ✓ ${name}\n    → ${successMsg}`, timestamp: timeStr });
          } else {
            logs.push({ level: 'error', message: `  ✕ ${name}\n    → ${failMsg}`, timestamp: timeStr });
          }
        };

        checkAssertion(
          "Use StatefulWidget",
          /StatefulWidget/i,
          "Verified: Your habit tracker extends StatefulWidget to handle dynamic changes.",
          "Error: Use a StatefulWidget to manage mutable list states."
        );

        checkAssertion(
          "Implement setState()",
          /setState\s*\(/i,
          "Verified: You called setState() to request re-renders on checkbox or form changes.",
          "Error: Call setState() inside your click responders to notify Flutter of updates."
        );

        checkAssertion(
          "Build habit list dynamically",
          /ListView/i,
          "Verified: ListView/ListView.builder is configured for high-performance rendering.",
          "Error: Use ListView.builder or ListView to render habit arrays dynamically."
        );

        checkAssertion(
          "Configure MaterialApp theme",
          /MaterialApp/i,
          "Verified: MaterialApp root widget is initialized correctly.",
          "Error: Make sure your root app is wrapped inside a MaterialApp widget."
        );

        setOutput(`Flutter Habit Tracker Assertions Result:\n\n${passed} / ${total} Checks Passed.\n\n` + (passed === total ? "GREAT WORK! All validations passed. You can now publish your app!" : "Keep coding! Correct the failing items and verify again."));
        setIframeLogs(logs);
        setIsRunning(false);
        return;
      } else {
        setActiveOutputTab('preview');
        if (dartpadIframeRef.current && dartpadIframeRef.current.contentWindow) {
          dartpadIframeRef.current.contentWindow.postMessage({
            sender: 'frame',
            type: 'sourceCode',
            files: {
              'main.dart': code
            }
          }, '*');
          
          const now = new Date();
          const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
          setIframeLogs([{
            level: 'success',
            message: 'Flutter code injected into DartPad sandbox. Compiling live widget render tree...',
            timestamp: timeStr
          }]);
        }
        setIsRunning(false);
        return;
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const iframeLanguages = ['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'];

    if (iframeLanguages.includes(selectedLang)) {
      // Auto-switch tabs based on logs/visual criteria
      if (runInTestMode) {
        setActiveOutputTab('logs');
      } else {
        const hasConsoleLog = code.includes('console.log') || code.includes('console.info') || code.includes('console.warn');
        const hasDOMManipulation = /document\.|window\.|innerHTML|appendChild|createElement|querySelector|getElementById|ReactDOM/i.test(code);
        if ((selectedLang === 'javascript' || selectedLang === 'jquery') && hasConsoleLog && !hasDOMManipulation) {
          setActiveOutputTab('logs');
        } else {
          setActiveOutputTab('preview');
        }
      }

      // 8s Execution Timeout to catch infinite loops
      timeoutRef.current = setTimeout(() => {
        setIsRunning(false);
        timeoutRef.current = null;
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        setIframeLogs(prev => [...prev, {
          level: 'error',
          message: 'Execution timed out (8s limit exceeded). If your code contains infinite loops (like while(true)), please check and run again.',
          timestamp: timeStr
        }]);
      }, 8000);

      // Helper to fetch multi-file workspace codes
      const getCachedCode = (lang: string): string => {
        if (lang === selectedLang) return code;
        const cacheKey = `playground-${lang}`;
        return progress.savedCodes[cacheKey] || playgroundTemplates[lang] || '';
      };

      const htmlCode = getCachedCode('html');
      const cssCode = getCachedCode('css');
      const jsCode = getCachedCode('javascript');

      // Intercept and format console messages beautifully
      const consoleHookScript = `
        <script>
          (function() {
            const _log = console.log;
            const _error = console.error;
            const _warn = console.warn;
            const _info = console.info;

            function serialize(val) {
              if (val === undefined) return 'undefined';
              if (val === null) return 'null';
              if (typeof val === 'string') return val;
              if (typeof val === 'function') return val.toString();
              if (typeof val === 'symbol') return val.toString();
              try {
                return JSON.stringify(val, null, 2);
              } catch (e) {
                return String(val);
              }
            }

            function serializeArg(arg) {
              if (arg === undefined) return { type: 'undefined', value: 'undefined' };
              if (arg === null) return { type: 'null', value: 'null' };
              if (typeof arg === 'string') return { type: 'string', value: arg };
              if (typeof arg === 'number') return { type: 'number', value: String(arg) };
              if (typeof arg === 'boolean') return { type: 'boolean', value: String(arg) };
              if (typeof arg === 'function') return { type: 'function', value: arg.toString() };
              if (typeof arg === 'symbol') return { type: 'symbol', value: arg.toString() };
              
              // Handle circular references safely
              const seen = new WeakSet();
              function safeStringify(obj) {
                try {
                  return JSON.stringify(obj, function(key, val) {
                    if (typeof val === 'object' && val !== null) {
                      if (seen.has(val)) {
                        return '[Circular]';
                      }
                      seen.add(val);
                    }
                    if (typeof val === 'function') {
                      return val.toString();
                    }
                    return val;
                  }, 2);
                } catch (e) {
                  return String(obj);
                }
              }

              if (Array.isArray(arg)) {
                return { type: 'array', value: safeStringify(arg) };
              }
              if (typeof arg === 'object') {
                return { type: 'object', value: safeStringify(arg) };
              }
              return { type: 'unknown', value: String(arg) };
            }

            function sendLog(level, args) {
              const message = args.map(serialize).join(' ');
              const serializedArgs = args.map(serializeArg);
              window.parent.postMessage({ type: 'iframe-log', level: level, message: message, args: serializedArgs }, '*');
            }
            
            console.log = function(...args) {
              _log.apply(console, args);
              sendLog('info', args);
            };
            console.error = function(...args) {
              _error.apply(console, args);
              sendLog('error', args);
            };
            console.warn = function(...args) {
              _warn.apply(console, args);
              sendLog('warn', args);
            };
            console.info = function(...args) {
              _info.apply(console, args);
              sendLog('info', args);
            };

            window.onerror = function(message, source, lineno, colno, error) {
              window.parent.postMessage({ type: 'iframe-log', level: 'error', message: message + " (Line " + lineno + ")" }, '*');
              window.parent.postMessage({ type: 'execution-complete' }, '*');
              return false;
            };

            window.addEventListener('unhandledrejection', function(event) {
              const reason = event.reason;
              const msg = reason ? (reason.message || reason) : 'Unhandled promise rejection';
              window.parent.postMessage({ type: 'iframe-log', level: 'error', message: "Promise Error: " + msg }, '*');
              window.parent.postMessage({ type: 'execution-complete' }, '*');
            });
          })();
        </script>
      `;

      const testRunnerScript = `
        <script>
          (function() {
            const suites = [];
            let currentSuite = null;
            let hasTests = false;

            window.describe = function(name, fn) {
              hasTests = true;
              const suite = { name, tests: [] };
              suites.push(suite);
              const parentSuite = currentSuite;
              currentSuite = suite;
              try {
                fn();
              } catch (err) {
                suite.error = err.message || String(err);
              }
              currentSuite = parentSuite;
            };

            const createTestFunc = function(name, fn) {
              hasTests = true;
              const testCase = { name, fn, status: 'pending' };
              if (currentSuite) {
                currentSuite.tests.push(testCase);
              } else {
                suites.push({ name: 'Global Tests', tests: [testCase] });
              }
            };

            window.test = createTestFunc;
            window.it = createTestFunc;

            window.expect = function(actual) {
              const isNot = { value: false };
              const matchers = {
                toBe: (expected) => {
                  const pass = Object.is(actual, expected);
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
                  }
                },
                toEqual: (expected) => {
                  const pass = JSON.stringify(actual) === JSON.stringify(expected);
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
                  }
                },
                toBeTruthy: () => {
                  const pass = !!actual;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "truthy value, but got " + JSON.stringify(actual));
                  }
                },
                toBeFalsy: () => {
                  const pass = !actual;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "falsy value, but got " + JSON.stringify(actual));
                  }
                },
                toContain: (item) => {
                  const pass = (Array.isArray(actual) || typeof actual === "string") ? actual.includes(item) : false;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + JSON.stringify(actual) + " " + (isNot.value ? "NOT " : "") + "to contain " + JSON.stringify(item));
                  }
                },
                toBeNull: () => {
                  const pass = actual === null;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "null, but got " + JSON.stringify(actual));
                  }
                },
                toBeUndefined: () => {
                  const pass = actual === undefined;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "undefined, but got " + JSON.stringify(actual));
                  }
                },
                toBeDefined: () => {
                  const pass = actual !== undefined;
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected " + (isNot.value ? "NOT " : "") + "defined value, but got undefined");
                  }
                },
                toThrow: (expectedError) => {
                  if (typeof actual !== "function") {
                    throw new Error("Actual value must be a function to test exceptions");
                  }
                  let threw = false;
                  let thrownError = null;
                  try {
                    actual();
                  } catch (e) {
                    threw = true;
                    thrownError = e;
                  }
                  const pass = threw && (!expectedError || (thrownError.message || thrownError).includes(expectedError));
                  if (isNot.value ? pass : !pass) {
                    throw new Error("Expected function " + (isNot.value ? "NOT " : "") + "to throw " + (expectedError || "error"));
                  }
                }
              };

              return {
                ...matchers,
                get not() {
                  isNot.value = true;
                  return matchers;
                }
              };
            };

            window.runAllTests = function() {
              if (!hasTests) {
                window.parent.postMessage({
                  type: "iframe-log",
                  level: "warn",
                  message: "No test suites found. Write a test suite using \\"describe\\" and \\"test\\" blocks to run assertions."
                }, "*");
                window.parent.postMessage({ type: 'execution-complete' }, '*');
                return;
              }

              let passedCount = 0;
              let failedCount = 0;

              suites.forEach(suite => {
                window.parent.postMessage({
                  type: "iframe-log",
                  level: "test-suite",
                  message: suite.name
                }, "*");

                if (suite.error) {
                  window.parent.postMessage({
                    type: "iframe-log",
                    level: "test-fail",
                    message: "  ✕ Suite Initialization Error: " + suite.error
                  }, "*");
                  failedCount += suite.tests.length || 1;
                  return;
                }

                suite.tests.forEach(testCase => {
                  const startTime = performance.now();
                  try {
                    testCase.fn();
                    const duration = (performance.now() - startTime).toFixed(1);
                    window.parent.postMessage({
                      type: "iframe-log",
                      level: "test-pass",
                      message: "  ✓ " + testCase.name + " (" + duration + "ms)"
                    }, "*");
                    passedCount++;
                  } catch (err) {
                    const duration = (performance.now() - startTime).toFixed(1);
                    window.parent.postMessage({
                      type: "iframe-log",
                      level: "test-fail",
                      message: "  ✕ " + testCase.name + " (" + duration + "ms)\\n    → Error: " + (err.message || err)
                    }, "*");
                    failedCount++;
                  }
                });
              });

              const totalCount = passedCount + failedCount;
              window.parent.postMessage({
                type: "iframe-log",
                level: "test-summary",
                message: JSON.stringify({ passed: passedCount, failed: failedCount, total: totalCount })
              }, "*");
              window.parent.postMessage({ type: 'execution-complete' }, '*');
            };
          })();
        </script>
      `;

      const hooks = runInTestMode 
        ? `${consoleHookScript}\n${testRunnerScript}`
        : consoleHookScript;

      let compiledDoc = '';
      const baseHtml = htmlCode.trim() || `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body { font-family: system-ui, sans-serif; padding: 15px; margin: 0; }</style></head><body><div id="root"></div></body></html>`;

      if (selectedLang === 'react') {
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            ${hooks}
          </head>
          <body>
            <div id="root"></div>
            <script type="text/babel">
              try {
                ${code}
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              } catch (err) {
                console.error(err);
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
            <script>
              window.addEventListener('load', () => {
                setTimeout(() => {
                  window.parent.postMessage({ type: 'execution-complete' }, '*');
                }, 50);
              });
              window.parent.postMessage({ type: 'iframe-success' }, '*');
            </script>
          </body>
          </html>
        `;
      } else if (selectedLang === 'vue') {
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Vue 3 Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
            ${hooks}
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
              window.parent.postMessage({ type: 'iframe-success' }, '*');
              if (!${runInTestMode}) {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
          </body>
          </html>
        `;
      } else if (selectedLang === 'angular') {
        const escapedCode = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        compiledDoc = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Angular Live Sandbox</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            ${hooks}
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
                  let compiled = htmlString.replace(/@for\\\\s*\\\\(\\\\s*(\\\\w+)\\\\s+of\\\\s+([a-zA-Z0-9_()\\\\[\\\\]\\\\.\\\\'\\\\"?]+)\\\\s*;\\\\s*track\\\\s+([a-zA-Z0-9_\\\\.]+)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\}(?:\\\\s*@empty\\\\s*\\\\{([\\\\s\\\\S]*?)\\})?/g, (match, itemName, listExpr, trackExpr, body, emptyBody) => {
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

                  compiled = compiled.replace(/@if\\\\s*\\\\(\\\\s*([\\\\s\\\\S]*?)\\\\s*\\\\)\\\\s*\\\\{([\\\\s\\\\S]*?)\\}(?:\\\\s*@else\\\\s*\\\\{([\\\\s\\\\S]*?)\\})?/g, (match, condExpr, ifBody, elseBody) => {
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
              window.parent.postMessage({ type: 'iframe-success' }, '*');
              if (!${runInTestMode}) {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            </script>
          </body>
          </html>
        `;
      } else {
        // Plain HTML / CSS / JS combined workspace compilation
        let cdns = '';
        if (selectedLang === 'jquery' || baseHtml.includes('jquery')) {
          cdns += `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>\n`;
        }
        if (selectedLang === 'tailwind' || baseHtml.includes('tailwindcss')) {
          cdns += `<script src="https://cdn.tailwindcss.com"></script>\n`;
        }
        if (selectedLang === 'bootstrap' || baseHtml.includes('bootstrap')) {
          cdns += `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">\n`;
        }

        compiledDoc = baseHtml;

        // Ensure head hooks are set
        if (compiledDoc.includes('<head>')) {
          compiledDoc = compiledDoc.replace('<head>', `<head>\n${hooks}\n${cdns}`);
        } else if (compiledDoc.includes('<html>')) {
          compiledDoc = compiledDoc.replace('<html>', `<html>\n<head>\n${hooks}\n${cdns}\n</head>`);
        } else {
          compiledDoc = `<!DOCTYPE html><html><head><meta charset="utf-8">${hooks}${cdns}</head><body>` + compiledDoc + `</body></html>`;
        }

        // Handle internal linking of cssCode
        const cssRegex = /<link\s+[^>]*href=["']\s*(?:\.\/)?style\.css\s*["'][^>]*>/gi;
        if (cssRegex.test(compiledDoc)) {
          compiledDoc = compiledDoc.replace(cssRegex, `<style>${cssCode}</style>`);
        } else if (cssCode && !compiledDoc.includes(`<style>${cssCode}</style>`) && !compiledDoc.includes(cssCode)) {
          compiledDoc = compiledDoc.replace('</head>', `<style>${cssCode}</style>\n</head>`);
        }

        // Handle internal linking of jsCode
        const jsRegex = /<script\s+[^>]*src=["']\s*(?:\.\/)?(?:app\.js|script\.js|main\.js|index\.js)\s*["'][^>]*>\s*<\/script>/gi;
        if (jsRegex.test(compiledDoc)) {
          compiledDoc = compiledDoc.replace(jsRegex, `<script>${jsCode}</script>`);
        } else if (jsCode && !compiledDoc.includes(jsCode)) {
          if (compiledDoc.includes('</body>')) {
            compiledDoc = compiledDoc.replace('</body>', `<script>${jsCode}</script>\n</body>`);
          } else {
            compiledDoc = compiledDoc.replace('</html>', `<script>${jsCode}</script>\n</html>`);
          }
        }

        // Inject the active editor Javascript specifically
        if (selectedLang === 'javascript') {
          const wrapperScript = `
            <script>
              try {
                ${code}
              } catch (err) {
                console.error(err);
              }
            </script>
          `;
          if (compiledDoc.includes('</body>')) {
            compiledDoc = compiledDoc.replace('</body>', `${wrapperScript}\n</body>`);
          } else {
            compiledDoc = compiledDoc + wrapperScript;
          }
        }

        // Success notifier
        const successScript = `
          <script>
            window.parent.postMessage({ type: 'iframe-success' }, '*');
            window.parent.postMessage({ type: 'execution-complete' }, '*');
          </script>
        `;
        if (compiledDoc.includes('</body>')) {
          compiledDoc = compiledDoc.replace('</body>', `${successScript}\n</body>`);
        } else {
          compiledDoc = compiledDoc + successScript;
        }
      }

      if (runInTestMode) {
        const triggerScript = `
          <script>
            setTimeout(() => {
              if (typeof window.runAllTests === 'function') {
                window.runAllTests();
              } else {
                window.parent.postMessage({ type: 'execution-complete' }, '*');
              }
            }, 300);
          </script>
        `;
        if (compiledDoc.includes('</body>')) {
          compiledDoc = compiledDoc.replace('</body>', `${triggerScript}\n</body>`);
        } else {
          compiledDoc = compiledDoc + triggerScript;
        }
      }

      // Briefly clear iframeSrc before loading to ensure a total reload
      setTimeout(() => {
        setIframeSrc(compiledDoc);
        setOutput(runInTestMode 
          ? (language === 'en' ? "Running tests in sandbox environment..." : "កំពុងតេស្តកូដនៅក្នុងម៉ាស៊ីន...")
          : (language === 'en' ? "Live preview compilation success." : "លទ្ធផលចងក្រងការបង្ហាញរូបភាពជោគជ័យ។")
        );
        
        // Log custom compiler success log
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        if (runInTestMode) {
          setIframeLogs(prev => [...prev, { level: 'success', message: 'Test Runner initialized. Discovered and running your assertions...', timestamp: timeStr }]);
        } else {
          setIframeLogs(prev => [...prev, { level: 'success', message: 'Build compilation succeeded. App is mounted on container iframe viewport.', timestamp: timeStr }]);
        }
      }, 100);

    } else {
      // Send code to remote execution API via Piston backend compilers
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
        mysql: 'sql',
        git: 'sh'
      };
      const ext = extMap[selectedLang] || 'py';

      try {
        const resolved = await getPistonRuntime(selectedLang);
        
        let fileName = `playground_main.${ext}`;
        if (selectedLang === 'java') {
          const classMatch = code.match(/(?:public\s+)?class\s+(\w+)/);
          if (classMatch && classMatch[1]) {
            fileName = `${classMatch[1]}.java`;
          } else {
            fileName = 'Main.java';
          }
        } else if (selectedLang === 'csharp') {
          fileName = 'Program.cs';
        }

        const isSql = selectedLang === 'sql' || selectedLang === 'mysql';
        let executableCode = isSql ? SQL_SEED_SCRIPT + '\n' + code : code;

        if (runInTestMode) {
          if (selectedLang === 'python') {
            const pythonRunner = `
# --- INJECTED PYTHON TEST RUNNER ---
import sys
import traceback
import inspect
import json

def __run_python_tests():
    g = globals()
    test_functions = {k: v for k, v in g.items() if k.startswith('test_') and callable(v)}
    
    if not test_functions:
        print("TEST_WARN: No tests found in python script. Define functions starting with 'test_' to run assertions.", file=sys.stderr)
        return

    passed_count = 0
    failed_count = 0
    
    print("TEST_SUITE: Python Test Suite")
    
    for name, func in test_functions.items():
        try:
            func()
            print(f"TEST_PASS:   ✓ {name}")
            passed_count += 1
        except AssertionError as e:
            err_msg = str(e) or "Assertion failed"
            print(f"TEST_FAIL:   ✕ {name}\\n    → Assertion Error: {err_msg}")
            failed_count += 1
        except Exception as e:
            tb = traceback.format_exc().splitlines()[-2]
            err_msg = f"{type(e).__name__}: {str(e)} (at {tb.strip()})"
            print(f"TEST_FAIL:   ✕ {name}\\n    → Runtime Error: {err_msg}")
            failed_count += 1
            
    total = passed_count + failed_count
    summary = {"passed": passed_count, "failed": failed_count, "total": total}
    print(f"TEST_SUMMARY: {json.dumps(summary)}")

if __name__ == "__main__":
    __run_python_tests()
`;
            executableCode = executableCode + '\n' + pythonRunner;
          } else if (selectedLang === 'typescript') {
            const tsRunner = `
// --- INJECTED TYPESCRIPT TEST RUNNER ---
(function() {
  const suites: any[] = [];
  let currentSuite: any = null;
  let hasTests = false;

  (global as any).describe = function(name: string, fn: any) {
    hasTests = true;
    const suite = { name, tests: [], error: null as string | null };
    suites.push(suite);
    const parentSuite = currentSuite;
    currentSuite = suite;
    try {
      fn();
    } catch (err: any) {
      suite.error = err.message || String(err);
    }
    currentSuite = parentSuite;
  };

  const createTestFunc = function(name: string, fn: any) {
    hasTests = true;
    const testCase = { name, fn, status: 'pending' };
    if (currentSuite) {
      currentSuite.tests.push(testCase);
    } else {
      suites.push({ name: 'Global Tests', tests: [testCase], error: null });
    }
  };

  (global as any).test = createTestFunc;
  (global as any).it = createTestFunc;

  (global as any).expect = function(actual: any) {
    const isNot = { value: false };
    const matchers = {
      toBe: (expected: any) => {
        const pass = Object.is(actual, expected);
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
        }
      },
      toEqual: (expected: any) => {
        const pass = JSON.stringify(actual) === JSON.stringify(expected);
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + JSON.stringify(expected) + ", but got " + JSON.stringify(actual));
        }
      },
      toBeTruthy: () => {
        const pass = !!actual;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "truthy value, but got " + JSON.stringify(actual));
        }
      },
      toBeFalsy: () => {
        const pass = !actual;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "falsy value, but got " + JSON.stringify(actual));
        }
      },
      toContain: (item: any) => {
        const pass = (Array.isArray(actual) || typeof actual === "string") ? (actual as any).includes(item) : false;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + JSON.stringify(actual) + " " + (isNot.value ? "NOT " : "") + "to contain " + JSON.stringify(item));
        }
      },
      toBeNull: () => {
        const pass = actual === null;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "null, but got " + JSON.stringify(actual));
        }
      },
      toBeUndefined: () => {
        const pass = actual === undefined;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "undefined, but got " + JSON.stringify(actual));
        }
      },
      toBeDefined: () => {
        const pass = actual !== undefined;
        if (isNot.value ? pass : !pass) {
          throw new Error("Expected " + (isNot.value ? "NOT " : "") + "defined value, but got undefined");
        }
      }
    };

    return {
      ...matchers,
      get not() {
        isNot.value = true;
        return matchers;
      }
    };
  };

  setTimeout(() => {
    if (!hasTests) {
      console.log("TEST_WARN: No test suites found. Write a test suite using \\"describe\\" and \\"test\\" blocks to run assertions.");
      return;
    }

    let passedCount = 0;
    let failedCount = 0;

    suites.forEach(suite => {
      console.log("TEST_SUITE: " + suite.name);

      if (suite.error) {
        console.log("TEST_FAIL:   ✕ Suite Initialization Error: " + suite.error);
        failedCount += suite.tests.length || 1;
        return;
      }

      suite.tests.forEach((testCase: any) => {
        try {
          testCase.fn();
          console.log("TEST_PASS:   ✓ " + testCase.name);
          passedCount++;
        } catch (err: any) {
          console.log("TEST_FAIL:   ✕ " + testCase.name + "\\n    → Error: " + (err.message || err));
          failedCount++;
        }
      });
    });

    const totalCount = passedCount + failedCount;
    console.log("TEST_SUMMARY: " + JSON.stringify({ passed: passedCount, failed: failedCount, total: totalCount }));
  }, 100);
})();
`;
            executableCode = executableCode + '\n' + tsRunner;
          }
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
          controller.abort();
        }, 8000);

        const response = await fetch('https://emkc.org/api/v2/piston/execute', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
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

        clearTimeout(timeoutId);
        const resData = await response.json();
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

        // 1. Check for compilation failure first
        if (resData.compile && (resData.compile.code !== 0 || resData.compile.stderr)) {
          const compileErr = resData.compile.stderr || resData.compile.output || 'Compilation failed';
          const formattedErr = `Compile Error:\n${compileErr}`;
          setOutput(formattedErr);
          setIframeLogs([{ level: 'error', message: formattedErr, timestamp: timeStr }]);
          return;
        }

        // 2. Handle successful compilation or non-compiled runs
        if (resData.run) {
          const rawOutput = resData.run.stdout || resData.run.output || '';
          const rawError = resData.run.stderr || '';

          // If there is a runtime error (non-zero code) and stderr is present
          if (resData.run.code !== 0 && rawError) {
            const formattedErr = `Runtime Error (Exit Code ${resData.run.code}):\n${rawError}`;
            setOutput(formattedErr);
            setIframeLogs([{ level: 'error', message: formattedErr, timestamp: timeStr }]);
            return;
          }

          if (runInTestMode) {
            // Parse structured output
            const testSource = rawOutput || resData.run.output || '';
            const lines = testSource.split('\n');
            const cleanConsoleLines: string[] = [];
            const parsedLogs: any[] = [];

            lines.forEach((line: string) => {
              if (line.startsWith('TEST_SUITE:')) {
                const suiteName = line.replace('TEST_SUITE:', '').trim();
                parsedLogs.push({ level: 'test-suite', message: suiteName, timestamp: timeStr });
                cleanConsoleLines.push(`Suite: ${suiteName}`);
              } else if (line.startsWith('TEST_PASS:')) {
                const testMsg = line.replace('TEST_PASS:', '').trim();
                parsedLogs.push({ level: 'test-pass', message: testMsg, timestamp: timeStr });
                cleanConsoleLines.push(testMsg);
              } else if (line.startsWith('TEST_FAIL:')) {
                const testMsg = line.replace('TEST_FAIL:', '').replace(/\\n/g, '\n').trim();
                parsedLogs.push({ level: 'test-fail', message: testMsg, timestamp: timeStr });
                cleanConsoleLines.push(testMsg);
              } else if (line.startsWith('TEST_WARN:')) {
                const warnMsg = line.replace('TEST_WARN:', '').trim();
                parsedLogs.push({ level: 'warn', message: warnMsg, timestamp: timeStr });
                cleanConsoleLines.push(`Warning: ${warnMsg}`);
              } else if (line.startsWith('TEST_SUMMARY:')) {
                const summaryStr = line.replace('TEST_SUMMARY:', '').trim();
                parsedLogs.push({ level: 'test-summary', message: summaryStr, timestamp: timeStr });
                try {
                  const summary = JSON.parse(summaryStr);
                  cleanConsoleLines.push(`\nTest Summary: Passed: ${summary.passed}, Failed: ${summary.failed}, Total: ${summary.total}`);
                } catch(e) {
                  cleanConsoleLines.push(`\nTest Summary: ${summaryStr}`);
                }
              } else {
                // Keep ordinary prints
                if (line.trim()) {
                  cleanConsoleLines.push(line);
                }
              }
            });

            setOutput(cleanConsoleLines.join('\n') || 'No assertions were executed.');
            setIframeLogs(parsedLogs.length ? parsedLogs : [{ level: 'info', message: testSource || 'No output produced.', timestamp: timeStr }]);
          } else {
            // Regular mode output
            const finalOutput = rawOutput || resData.run.output || 'No console log output produced.';
            setOutput(finalOutput);
            
            if (rawError) {
              setIframeLogs([
                { level: 'error', message: `Runtime Warning/Error:\n${rawError}`, timestamp: timeStr },
                { level: 'info', message: finalOutput, timestamp: timeStr }
              ]);
            } else {
              setIframeLogs([
                { level: 'success', message: 'Execution Succeeded', timestamp: timeStr },
                { level: 'info', message: finalOutput, timestamp: timeStr }
              ]);
            }
          }
        } else {
          const errMsg = language === 'en' ? "Piston API compiler response failure." : "មានបញ្ហាក្នុងការផ្ញើសំណើទៅកាន់ម៉ាស៊ីនចងក្រងកូដ។";
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: timeStr }]);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          const errMsg = "Execution timed out (8s limit exceeded). If your code contains infinite loops, please check and run again.";
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: new Date().toLocaleTimeString() }]);
        } else {
          const errMsg = `Remote Execution Fail: ${err.message || err}`;
          setOutput(errMsg);
          setIframeLogs([{ level: 'error', message: errMsg, timestamp: new Date().toLocaleTimeString() }]);
        }
      } finally {
        setIsRunning(false);
      }
    }
  };

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
      nextjs: 'javascript',
      vue: 'html',
      angular: 'html',
      tailwind: 'html',
      bootstrap: 'html'
    };
    return editorMap[selectedLang] || 'javascript';
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCodeAsFile = () => {
    const info = langFileInfoMap[selectedLang] || { filename: 'code.txt' };
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = info.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const activeFileInfo = langFileInfoMap[selectedLang] || { filename: 'main.js', iconColor: 'text-indigo-400' };
  const cheatsheet = cheatSheetsMap[selectedLang] || defaultCheatSheet;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-900 text-slate-100 font-sans select-none overflow-hidden" id="sandbox-root-workspace">
      
      {/* Top Professional IDE Navigation Header */}
      <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10 shadow-md">
        
        {/* Branding Title */}
        <div className="flex items-center space-x-3.5">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white font-bold cursor-pointer transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Back' : 'ថយក្រោយ'}</span>
            </button>
          )}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/10 shrink-0">
              <Code className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-sm font-black tracking-tight text-white uppercase">
                  {initialTitle ? initialTitle : (language === 'en' ? "Sabaicode Sandbox" : "ប្រអប់សាកល្បង សប្បាយកូដ")}
                </h2>
                {!initialTitle && (
                  <span className="hidden md:inline px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 font-bold text-[9px] font-mono uppercase tracking-widest">
                    v2.0 Workspace
                  </span>
                )}
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                {initialTitle 
                  ? (language === 'en' ? "Custom tutorial example workspace" : "បន្ទប់អនុវត្តកូដគំរូ")
                  : (language === 'en' ? "Bilingual learning workspace for modern developers" : "ឧបករណ៍ដំណើរការកូដទ្វេភាសាសម្រាប់អ្នកអភិវឌ្ឍន៍ជំនាន់ថ្មី")}
              </p>
            </div>
          </div>
        </div>

        {/* Live Auto Saved / Compiler state Badge */}
        <div className="hidden lg:flex items-center space-x-2 text-xs">
          <AnimatePresence>
            {savedBadgeVisible && (
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/15 uppercase tracking-wide"
              >
                ✓ Auto-Saved
              </motion.span>
            )}
          </AnimatePresence>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 font-semibold text-[11px]">
            <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`} />
            <span>{isRunning ? 'Compiling Code...' : 'Container Compiler Online'}</span>
          </div>
        </div>

        {/* Quick Toolbar Action buttons */}
        <div className="flex items-center space-x-2">
          
          <button
            onClick={copyCodeToClipboard}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 text-slate-400 hover:text-white transition-all cursor-pointer relative"
            title="Copy current code to clipboard"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={downloadCodeAsFile}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Download code as physical local file"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800/80 text-slate-400 hover:text-white transition-all cursor-pointer mr-1.5"
            title="Reset code editor template to original values"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={() => runCode(true)}
            disabled={isRunning}
            className="inline-flex items-center space-x-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/60 disabled:border-slate-800 disabled:text-slate-600 text-indigo-400 hover:text-indigo-300 font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            title="Run Unit Tests Assertions"
          >
            {isRunning ? (
              <RefreshCw className="w-4 h-4 animate-spin text-indigo-500" />
            ) : (
              <Beaker className="w-4 h-4 text-indigo-400 fill-indigo-400/10" />
            )}
            <span>{language === 'en' ? "Run Tests" : "តេស្តកូដ"}</span>
          </button>

          <button
            onClick={() => runCode(false)}
            disabled={isRunning}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 disabled:from-indigo-800 disabled:to-violet-800 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            {isRunning ? (
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
            ) : (
              <Play className="w-4 h-4 fill-white text-white" />
            )}
            <span>{isRunning ? t.running : t.runCode}</span>
          </button>
        </div>

      </div>

      {/* Main Double Section Splitting */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Side: Interactive Sidebar Navigator for 20+ languages */}
        <div 
          className={`shrink-0 border-r border-slate-800 bg-slate-950 flex flex-col transition-all duration-300 relative ${
            isSidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
          }`}
        >
          {/* Sidebar Tab Header */}
          <div className="flex bg-slate-900 border-b border-slate-800 text-xs font-bold font-sans">
            <button
              onClick={() => setActiveSidebarTab('languages')}
              className={`flex-1 py-3 text-center transition border-b-2 ${
                activeSidebarTab === 'languages' 
                  ? 'border-indigo-500 text-white bg-slate-950' 
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              {language === 'en' ? "Languages" : "ភាសាផ្សេងៗ"}
            </button>
            <button
              onClick={() => setActiveSidebarTab('helper')}
              className={`flex-1 py-3 text-center transition border-b-2 ${
                activeSidebarTab === 'helper' 
                  ? 'border-indigo-500 text-white bg-slate-950' 
                  : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/60'
              }`}
            >
              {language === 'en' ? "Cheat Sheet" : "គន្លឹះរហ័ស"}
            </button>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4 text-left">
            {activeSidebarTab === 'languages' ? (
              categories.map((cat) => {
                const CategoryIcon = cat.icon;
                const catLangs = filteredCourses.filter(c => getCategoryForLang(c.id) === cat.id);

                if (catLangs.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-1.5">
                    <div className="flex items-center space-x-2 text-[10px] font-extrabold text-slate-500 font-mono tracking-wider uppercase px-2 mb-1 pt-1.5">
                      <CategoryIcon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{cat.name[language]}</span>
                    </div>
                    
                    <div className="space-y-0.5">
                      {catLangs.map((course) => {
                        const isSelected = selectedLang === course.id;
                        const fileInfo = langFileInfoMap[course.id] || { filename: 'index.js', iconColor: 'text-indigo-400' };

                        return (
                          <button
                            key={course.id}
                            onClick={() => setSelectedLang(course.id)}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${
                              isSelected
                                ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-bold shadow-sm'
                                : 'text-slate-400 hover:bg-slate-900/60 hover:text-slate-200 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-2.5 min-w-0">
                              <FileCode className={`w-4 h-4 shrink-0 ${fileInfo.iconColor}`} />
                              <span className="truncate font-medium">{course.title[language]}</span>
                            </div>
                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'translate-x-0.5 text-indigo-400' : 'text-slate-600 opacity-0 group-hover:opacity-100'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="space-y-4 animate-fade-in py-1">
                <div className="flex items-center space-x-2 bg-indigo-950/40 text-indigo-400 border border-indigo-900/30 p-3 rounded-xl text-xs leading-normal">
                  <Info className="w-4 h-4 shrink-0" />
                  <span className="font-sans font-medium text-[11px]">
                    {language === 'en' 
                      ? `Quick references for ${selectedLang.toUpperCase()}. Click any snippet to copy.`
                      : `គន្លឹះ និងវាក្យសម្ពន្ធរហ័សសម្រាប់ ${selectedLang.toUpperCase()}។ ចុចលើប្រអប់ដើម្បីចម្លង។`}
                  </span>
                </div>

                <div className="space-y-3">
                  {cheatsheet.map((item, index) => (
                    <div 
                      key={index} 
                      className="group bg-slate-900 border border-slate-800/80 rounded-xl p-3 hover:border-slate-700 transition cursor-pointer"
                      onClick={() => {
                        navigator.clipboard.writeText(item.code);
                        alert(language === 'en' ? "Snippet copied to clipboard!" : "ចម្លងកូដគំរូរួចរាល់!");
                      }}
                    >
                      <h4 className="text-[11px] font-bold text-slate-300 font-sans tracking-wide flex items-center justify-between mb-1.5">
                        <span>{item.title}</span>
                        <span className="text-[9px] font-mono text-indigo-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
                      </h4>
                      <pre className="p-2 bg-slate-950 rounded-lg text-[10px] text-slate-400 font-mono overflow-x-auto leading-relaxed border border-slate-950">
                        <code>{item.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Toggle sidebar collapse handle */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute bottom-4 right-4 p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer z-10 shadow-lg"
            title="Collapse language panel"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
        </div>

        {/* Floating open sidebar handle when closed */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="absolute left-4 bottom-4 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white cursor-pointer z-20 shadow-lg animate-bounce"
            title="Expand language list"
          >
            <Columns className="w-4.5 h-4.5 text-indigo-400" />
          </button>
        )}

        {/* Center Section: Code Monaco Editor & simulated Tabs */}
        <div className="flex-1 flex flex-col bg-slate-900 relative">
          
          {/* Simulating File Tabs Bar */}
          <div className="h-10 bg-slate-950 border-b border-slate-900 flex items-center justify-between px-4 shrink-0 text-xs">
            
            <div className="flex items-center space-x-1">
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-900 text-white font-mono font-bold rounded-t-xl border-t-2 border-indigo-500">
                <FileCode className={`w-3.5 h-3.5 ${activeFileInfo.iconColor}`} />
                <span>{activeFileInfo.filename}</span>
              </div>
              <div className="text-slate-600 font-mono px-2 hidden sm:block">/ workspace</div>
            </div>

            <div className="text-slate-500 font-mono text-[10px] uppercase font-bold flex items-center space-x-1.5 bg-slate-900/40 px-2.5 py-1 rounded-lg">
              <span>Syntax:</span>
              <span className="text-indigo-400">{getEditorLanguage()}</span>
            </div>

          </div>

          {/* Monaco Frame */}
          <div className="flex-1 relative min-h-[250px] shadow-inner bg-slate-950">
            <Editor
              height="100%"
              language={getEditorLanguage()}
              theme="vs-dark" // Standardized dark theme for high aesthetic pairing
              value={code}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 13.5,
                lineNumbers: "on",
                automaticLayout: true,
                scrollBeyondLastLine: false,
                wordWrap: "on",
                padding: { top: 12, bottom: 12 },
                cursorBlinking: "smooth",
                fontFamily: "Fira Code, JetBrains Mono, Menlo, monospace",
                fontLigatures: true,
              }}
            />
          </div>

          {/* Workspace Footer Status Bar */}
          <div className="h-7 bg-slate-950 border-t border-slate-900 px-4 flex items-center justify-between font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider shrink-0">
            <div className="flex items-center space-x-4">
              <span>UTF-8</span>
              <span>Tab Size: 2</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>Editor Theme:</span>
              <span className="text-slate-400">vs-dark</span>
            </div>
          </div>

        </div>

        {/* Right Side: Split Terminal / Double Tab Live renderer viewport */}
        <div 
          className={`bg-slate-950 border-l border-slate-800 transition-all duration-300 flex flex-col relative ${
            isFullscreenOutput ? 'absolute inset-0 z-30 bg-slate-950' : 'flex-1 md:max-w-2xl lg:max-w-3xl'
          }`}
          id="playground-execution-viewport"
        >
          {/* Double Viewport Tabs Header */}
          <div className="h-10 bg-slate-950 border-b border-slate-900 flex items-center justify-between px-4 shrink-0 text-xs">
            
            <div className="flex space-x-1.5" id="output-tabs">
              {['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular', 'flutter'].includes(selectedLang) && (
                <button
                  onClick={() => setActiveOutputTab('preview')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                    activeOutputTab === 'preview' 
                      ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/15' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? "Visual Live Preview" : "ការបង្ហាញលទ្ធផលរូបភាព"}</span>
                </button>
              )}
              
              <button
                onClick={() => setActiveOutputTab('logs')}
                className={`px-3 py-1.5 rounded-lg font-bold transition flex items-center space-x-1.5 ${
                  activeOutputTab === 'logs' 
                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/15' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>{language === 'en' ? "Terminal / Console Logs" : "កុងសូល / លទ្ធផលកូដ"}</span>
              </button>
            </div>

            {/* Panel control actions */}
            <div className="flex items-center space-x-1">
              
              {activeOutputTab === 'logs' && iframeLogs.length > 0 && (
                <button
                  onClick={() => setIframeLogs([])}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-900/60 transition cursor-pointer"
                  title="Clear console logs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => setIsFullscreenOutput(!isFullscreenOutput)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-900/60 transition cursor-pointer"
                title={isFullscreenOutput ? "Exit fullscreen panel" : "Maximize output viewport"}
              >
                {isFullscreenOutput ? (
                  <Minimize2 className="w-3.5 h-3.5" />
                ) : (
                  <Maximize2 className="w-3.5 h-3.5" />
                )}
              </button>

            </div>

          </div>

          {/* Output view container */}
          <div className="flex-1 p-4 overflow-hidden relative flex flex-col bg-slate-950">
            {iframeSrc && (
              <div className={`bg-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative flex flex-col ${
                activeOutputTab === 'preview' 
                  ? 'w-full h-full flex' 
                  : 'absolute opacity-0 pointer-events-none w-[1px] h-[1px] overflow-hidden'
              }`}>
                {/* Mock Browser bar */}
                <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center space-x-2 text-slate-400 text-xs shrink-0 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="flex-1 bg-white rounded-lg border border-slate-200 px-3 py-0.5 text-[10px] font-mono truncate max-w-sm">
                    https://sandbox.sabaicode.kh/live/index.html
                  </div>
                </div>
                <iframe
                  srcDoc={iframeSrc}
                  title="Sandbox Live Visual Rendering Viewport"
                  sandbox="allow-scripts"
                  className="w-full flex-1 bg-white border-none"
                />
              </div>
            )}

            {selectedLang === 'flutter' && (
              <div className={`bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative flex flex-col ${
                activeOutputTab === 'preview' 
                  ? 'w-full h-full flex' 
                  : 'absolute opacity-0 pointer-events-none w-[1px] h-[1px] overflow-hidden'
              }`}>
                {/* Mock Browser bar */}
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center space-x-2 text-slate-400 text-xs shrink-0 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="flex-1 bg-slate-950 rounded-lg border border-slate-800 px-3 py-0.5 text-[10px] font-mono text-slate-500 truncate max-w-sm">
                    https://dartpad.dev/embed-flutter.html
                  </div>
                </div>
                <iframe
                  ref={dartpadIframeRef}
                  src="https://dartpad.dev/embed-flutter.html?theme=dark&run=true&split=60"
                  title="Flutter DartPad Sandbox"
                  allow="clipboard-read; clipboard-write"
                  className="w-full flex-1 bg-slate-950 border-none"
                />
              </div>
            )}

            {activeOutputTab === 'preview' && !iframeSrc && selectedLang !== 'flutter' && (
              /* Visual compiler fallback placeholder */
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-800 rounded-3xl animate-fade-in select-none">
                <div className="p-4 rounded-full bg-slate-900/80 text-indigo-400 border border-slate-800 mb-4 animate-bounce">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-white text-base">
                  {language === 'en' ? "Visual Rendering Ready" : "ការបង្ហាញលទ្ធផលរូបភាពរួចរាល់"}
                </h3>
                <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed font-sans">
                  {language === 'en' 
                    ? "Edit web codes, stylesheets, scripts and click 'Run Code' to compile live responsive outputs."
                    : "កែសម្រួលកូដ HTML/CSS/React រួចចុច 'ដំណើរការកូដ' ដើម្បីមើលរូបរាងលទ្ធផលផ្ទាល់ភ្នែករបស់អ្នក។"}
                </p>
              </div>
            )}

            {activeOutputTab === 'logs' && (
              /* Terminal Log output View */
              <div className="flex-1 flex flex-col h-full overflow-hidden text-left font-mono">
                {iframeLogs.length === 0 && !output ? (
                  /* Terminal console fallback placeholder */
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8 select-none">
                    <div className="p-4 rounded-full bg-slate-900/80 text-emerald-400 border border-slate-800 mb-4">
                      <Terminal className="w-8 h-8 animate-pulse" />
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {language === 'en' ? "Terminal Standard Output" : "កុងសូលបង្ហាញលទ្ធផលកូដ"}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed font-sans">
                      {t.noOutputYet}
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-3 bg-slate-950 border border-slate-800/60 rounded-2xl text-xs leading-relaxed font-mono select-text space-y-2">
                    
                    {/* Display Piston/Native stdout first if present */}
                    {output && !['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'].includes(selectedLang) && (
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-900 pb-1 mb-2">Stdout Logstream</div>
                        <pre className="whitespace-pre-wrap text-emerald-400 font-mono font-medium">{output}</pre>
                      </div>
                    )}

                    {/* Display Live captured IFrame logs */}
                    {iframeLogs.length > 0 && (
                      <div className="space-y-1.5 font-mono">
                        {['html', 'css', 'javascript', 'jquery', 'react', 'tailwind', 'bootstrap', 'vue', 'angular'].includes(selectedLang) && (
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider border-b border-slate-900 pb-1 mb-2">Captured Iframe Console Streams</div>
                        )}
                        {iframeLogs.map((log, idx) => {
                          const isError = log.level === 'error';
                          const isWarn = log.level === 'warn';
                          const isSuccess = log.level === 'success';
                          const isTestSuite = log.level === 'test-suite';
                          const isTestPass = log.level === 'test-pass';
                          const isTestFail = log.level === 'test-fail';
                          const isTestSummary = log.level === 'test-summary';

                          let badgeColor = 'text-sky-400 bg-sky-400/10 border-sky-400/15';
                          if (isError) badgeColor = 'text-rose-400 bg-rose-400/10 border-rose-400/15';
                          if (isWarn) badgeColor = 'text-amber-400 bg-amber-400/10 border-amber-400/15';
                          if (isSuccess) badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/15';
                          if (isTestSuite) badgeColor = 'text-indigo-400 bg-indigo-500/10 border-indigo-500/15';
                          if (isTestPass) badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/15';
                          if (isTestFail) badgeColor = 'text-rose-400 bg-rose-400/10 border-rose-400/15';
                          if (isTestSummary) badgeColor = 'text-purple-400 bg-purple-500/10 border-purple-500/15';

                           return (
                            <div key={idx} className={`flex items-start space-x-2 text-[11px] border-b border-slate-900/40 pb-1.5 font-mono ${isTestSuite ? 'bg-indigo-500/5 p-1 rounded-lg border-indigo-500/10 border' : isTestSummary ? 'bg-slate-900/80 p-3 rounded-xl border border-slate-800' : ''}`}>
                              <span className="text-slate-600 font-mono shrink-0 select-none">[{log.timestamp}]</span>
                              <span className={`px-1.5 py-0.2 rounded border font-mono uppercase text-[9px] font-bold shrink-0 ${badgeColor}`}>
                                {isTestSuite ? 'suite' : isTestPass ? 'pass' : isTestFail ? 'fail' : isTestSummary ? 'summary' : log.level}
                              </span>
                              <div className={`flex flex-col gap-1.5 font-mono flex-1 ${
                                isError || isTestFail ? 'text-rose-400' : 
                                isWarn ? 'text-amber-400' : 
                                isSuccess || isTestPass ? 'text-emerald-400 font-semibold' : 
                                isTestSuite ? 'text-indigo-300 font-bold text-xs' :
                                isTestSummary ? 'text-purple-300 font-bold' :
                                'text-slate-200'
                              }`}>
                                {isTestSummary ? (
                                  (() => {
                                    try {
                                      const s = JSON.parse(log.message || '{}');
                                      return (
                                        <div className="flex flex-col space-y-1.5 py-1">
                                          <div className="text-slate-300 text-[10px] tracking-wide font-black uppercase flex items-center space-x-1.5">
                                            <Beaker className="w-3.5 h-3.5 text-purple-400" />
                                            <span>ASSERTION EXECUTION SUMMARY</span>
                                          </div>
                                          <div className="flex items-center space-x-4 text-xs font-bold pt-1">
                                            <span className="text-slate-400">Total: <span className="text-slate-100">{s.total}</span></span>
                                            <span className="text-emerald-400">Passed: <span>{s.passed}</span></span>
                                            <span className="text-rose-400">Failed: <span>{s.failed}</span></span>
                                          </div>
                                          {s.failed === 0 ? (
                                            <div className="text-[10px] text-emerald-500 font-black tracking-wider uppercase bg-emerald-500/5 py-1 px-2 rounded border border-emerald-500/10">
                                              ✨ ALL TESTS PASSED SUCCESSFULLY!
                                            </div>
                                          ) : (
                                            <div className="text-[10px] text-rose-500 font-black tracking-wider uppercase bg-rose-500/5 py-1 px-2 rounded border border-rose-500/10">
                                              ✕ SOME TESTS ARE FAILING. CHECK ERRORS ABOVE.
                                            </div>
                                          )}
                                        </div>
                                      );
                                    } catch(e) {
                                      return <span className="whitespace-pre-wrap font-mono">{log.message}</span>;
                                    }
                                  })()
                                ) : log.args && log.args.length > 0 ? (
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {log.args.map((arg, argIdx) => (
                                      <LogArgumentRenderer key={argIdx} arg={arg} />
                                    ))}
                                  </div>
                                ) : (
                                  <span className="whitespace-pre-wrap font-mono">{log.message}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
