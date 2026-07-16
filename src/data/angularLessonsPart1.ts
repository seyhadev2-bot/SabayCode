import { Lesson } from '../types';

export const angularLessonsPart1: Lesson[] = [
  {
    id: "ang-home",
    title: {
      en: "Angular Home",
      km: "ទំព័រដើម Angular"
    },
    content: {
      en: `### Welcome to Angular!
Angular is a powerful, production-ready framework for building modern, high-performance web applications. Created and maintained by Google, it is a comprehensive platform providing everything from modular structure to deep reactivity out of the box.

### Why Choose Angular?
- **All-in-One Platform:** Out-of-the-box routing, HTTP clients, form builders, and advanced animations.
- **Enterprise-Grade Architecture:** Ideal for large teams, with built-in TypeScript support, strong dependency injection, and clean boundaries.
- **Modern Reactivity:** Features state-of-the-art Angular Signals for surgical DOM updates without zone overhead.

### Your First Step
Click **Run Code** on the right side of the screen to compile, mount, and run our custom Angular sandbox compiler live in the browser!

> **Note:** Angular uses a component-driven design. Everything you see, from buttons to entire dashboards, is organized into encapsulated blocks called Components.`,
      km: `### សូមស្វាគមន៍មកកាន់វគ្គសិក្សា Angular!
Angular គឺជាក្របខ័ណ្ឌ (Framework) ដ៏មានឥទ្ធិពលសម្រាប់ការបង្កើតកម្មវិធីគេហទំព័រទំនើបដែលមានដំណើរការលឿនខ្ពស់។ បង្កើតឡើងនិងគាំទ្រដោយ Google វាផ្តល់នូវប្រព័ន្ធគ្រប់គ្រងរចនាសម្ព័ន្ធដ៏រឹងមាំ និងឧបករណ៍គ្រប់គ្រាន់តាំងពីដំបូង។

### ហេតុអ្វីជ្រើសរើសយក Angular?
- **ប្រព័ន្ធសរុបតែមួយ (All-in-One):** មានភ្ជាប់ស្រាប់ជាមួយ Routing, HTTP Client, Form Validation និងការបង្កើតចលនា (Animations)។
- **រចនាសម្ព័ន្ធកម្រិតសហគ្រាស:** ល្អបំផុតសម្រាប់ក្រុមការងារធំៗ ដោយសារកូដ TypeScript រៀបចំរៀបរយ មានប្រព័ន្ធ Dependency Injection ច្បាស់លាស់។
- **ប្រតិកម្មទំនើប (Reactivity):** ប្រើប្រាស់មុខងារ Angular Signals ជំនាន់ថ្មីដើម្បីកែប្រែ DOM បានលឿនដោយគ្មានភាពយឺតយ៉ាវ។

### ជំហានដំបូងរបស់អ្នក
ចុចលើប៊ូតុង **Run Code** នៅផ្នែកខាងស្តាំដើម្បីចងក្រង និងសាកល្បងដំណើរការកម្មវិធី Angular របស់អ្នកភ្លាមៗនៅក្នុងកម្មវិធីរុករក!

> **សម្គាល់៖** Angular ប្រើប្រាស់ការរចនាបែបសមាសភាគ (Component-driven)។ រាល់អ្វីដែលអ្នកឃើញនៅលើអេក្រង់ ត្រូវបានបែងចែកជាផ្នែកៗហៅថា Component។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-indigo-100 flex flex-col items-center space-y-4 text-center">
      <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-black text-3xl animate-bounce">
        A
      </div>
      <h1 class="text-2xl font-black text-slate-900 tracking-tight">សួស្តីកម្ពុជា! (Hello Angular!)</h1>
      <p class="text-sm text-slate-500 leading-relaxed">
        Welcome to your very first Angular playground on our Bilingual Coding Platform. Click run to start!
      </p>
      <button (click)="welcome()" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-lg transition">
        Greet Student
      </button>
    </div>
  \`
})
export class AppComponent {
  welcome() {
    alert("សូមស្វាគមន៍មកកាន់ការសិក្សា Angular! (Welcome to Angular!)");
  }
}
`
  },
  {
    id: "ang-intro",
    title: {
      en: "Angular Introduction",
      km: "សេចក្តីផ្តើមអំពី Angular"
    },
    content: {
      en: `### Understanding the Architecture
Angular is a **fully integrated** framework. Unlike libraries like React, which require you to choose state-management, routing, and forms validation packages, Angular includes robust, highly cohesive built-in modules for each core concern.

### Component-Driven Layout
A standard Angular app consists of a tree of components. Each component is a TypeScript class that manages:
1. **Metadata:** Decorator functions (\`@Component\`) specifying selector tag, template layout, and scoped styling.
2. **HTML Template:** Defines how the layout is formatted and rendered to the DOM.
3. **Behavior Class:** A TypeScript file holding reactive attributes, states, and methods.

> **Tip:** Standalone components (introduced in modern Angular versions) do not require old-style NgModule files, making code cleaner and easier to learn!`,
      km: `### ស្វែងយល់អំពីរចនាសម្ព័ន្ធ Angular
Angular គឺជាក្របខ័ណ្ឌការងារសរុបមួយ។ ខុសពី React ដែលទាមទារការជ្រើសរើសបណ្ណាល័យបន្ថែមសម្រាប់រៀបចំ Routing ឬ Forms, Angular មានភ្ជាប់មកជាមួយនូវម៉ូឌុលចម្បងៗទាំងអស់ដែលមានសុវត្ថិភាពខ្ពស់។

### ប្លង់តម្រង់សមាសភាគ
កម្មវិធី Angular ទាំងមូលមានទម្រង់ជាដើមឈើនៃសមាសភាគ (Component Tree)។ រាល់ Component នីមួយៗគឺជា TypeScript Class ដែលគ្រប់គ្រង៖
1. **ទិន្នន័យមេតា (Metadata):** កំណត់ដោយ Decorator (\`@Component\`) រួមមាន selector, template និង styling។
2. **គំរូទំព័រ (HTML Template):** កំណត់ទម្រង់ប្លង់ដែលត្រូវបង្ហាញលើអេក្រង់។
3. **ឥរិយាបថ (TypeScript Class):** ផ្ទុកទៅដោយទិន្នន័យ អថេរ និងវិធីសាស្ត្រប្រតិកម្ម (Methods)។

> **គន្លឹះ៖** Standalone Components ជំនាន់ថ្មីជួយឱ្យយើងមិនចាំបាច់បង្កើត NgModule ស្មុគស្មាញដូចមុនទៀតឡើយ ធ្វើឱ្យកូដកាន់តែស្អាត និងងាយរៀន!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 bg-slate-900 text-white rounded-2xl shadow-xl max-w-sm mx-auto text-left space-y-4">
      <h2 class="text-lg font-bold border-b border-slate-800 pb-2 text-indigo-400">Angular Component</h2>
      
      <div class="text-sm space-y-2">
        <p>📊 <strong>Scope:</strong> {{ currentScope }}</p>
        <p>🚀 <strong>Status:</strong> <span class="text-emerald-400 font-mono font-bold">{{ status }}</span></p>
      </div>

      <button (click)="toggleStatus()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition">
        Change Framework Status
      </button>
    </div>
  \`
})
export class AppComponent {
  currentScope = 'Standalone App Component';
  status = 'FULLY FUNCTIONAL';

  toggleStatus() {
    this.status = this.status === 'FULLY FUNCTIONAL' ? 'REACTIVE & FAST' : 'FULLY FUNCTIONAL';
  }
}
`
  },
  {
    id: "ang-get-started",
    title: {
      en: "Angular Get Started",
      km: "ការចាប់ផ្តើមជាមួយ Angular"
    },
    content: {
      en: `### Setting up the Environment
To create and run Angular applications on your local machine, you must install **Node.js** first, and then install the official **Angular CLI** utility.

### Step 1: Install the CLI globally
Run this terminal command in your machine to install the command line interface:
\`\`\`bash
npm install -g @angular/cli
\`\`\`

### Step 2: Create a New Project
Generate a brand-new project with routing and standalone component architecture automatically:
\`\`\`bash
ng new my-angular-app
\`\`\`

### Step 3: Serve the Development Server
Navigate into the folder and launch the interactive hot-reloading development server:
\`\`\`bash
cd my-angular-app
ng serve
\`\`\`
This boots the application locally, usually on \`http://localhost:4200\`.

> **Note:** Modern Angular CLI configures standalone component mode by default, which removes boilerplate NgModule declarations completely.`,
      km: `### ការរៀបចំដំឡើងបរិស្ថានអភិវឌ្ឍន៍
ដើម្បីបង្កើតកម្មវិធី Angular នៅលើកុំព្យូទ័ររបស់អ្នក ដំបូងត្រូវដំឡើង **Node.js** និងបន្ទាប់មកត្រូវដំឡើងឧបករណ៍ **Angular CLI**។

### ជំហានទី ១៖ ដំឡើង Angular CLI
វាយបញ្ជានៅក្នុង Terminal កុំព្យូទ័ររបស់អ្នក៖
\`\`\`bash
npm install -g @angular/cli
\`\`\`

### ជំហានទី ២៖ បង្កើតគម្រោងថ្មី
បង្កើតគម្រោងថ្មីមួយដែលមានរចនាសម្ព័ន្ធ Standalone Component ដោយស្វ័យប្រវត្ត៖
\`\`\`bash
ng new my-angular-app
\`\`\`

### ជំហានទី ៣៖ ដំណើរការម៉ាស៊ីនបម្រើសាកល្បង
ចូលទៅក្នុង Folder គម្រោង រួចបើកដំណើរការ Server សាកល្បង៖
\`\`\`bash
cd my-angular-app
ng serve
\`\`\`
វានឹងដំណើរការកម្មវិធីរបស់អ្នកនៅលើអាសយដ្ឋាន \`http://localhost:4200\`។

> **សម្គាល់៖** Angular CLI ជំនាន់ចុងក្រោយបង្អស់នឹងកំណត់រចនាសម្ព័ន្ធ Standalone Mode ដោយស្វ័យប្រវត្តិ ដែលកាត់បន្ថយកូដស្មុគស្មាញចាស់ៗចោលទាំងអស់។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-sm mx-auto text-left shadow-sm">
      <div class="text-xs font-mono text-slate-400 mb-1">CLI Terminal Command</div>
      <div class="p-3 bg-slate-900 text-emerald-400 font-mono rounded-lg text-xs leading-relaxed select-all">
        $ ng serve --port 4200
      </div>
      
      <div class="mt-4 p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg text-xs text-amber-800">
        📌 serve matches port <strong>4200</strong> on your local web browsers!
      </div>
    </div>
  \`
})
export class AppComponent {}
`
  },
  {
    id: "ang-first-app",
    title: {
      en: "Angular First App",
      km: "កម្មវិធីដំបូងរបស់អ្នក"
    },
    content: {
      en: `### Building Your First Feature
Let's see how Angular combines data and UI. By declaring a public property inside the component class, you can bind it directly to the HTML.

### Essential Structure
Every Angular file imports dependencies, registers metadata with \`@Component\`, and exports the TypeScript component class:
- **selector:** The tag name (e.g. \`app-root\`) where this component mounts.
- **template:** Inline HTML template string with dynamic placeholders.
- **styles:** Embedded styles matching selector tags inside the component.

> **Tip:** You can write standard CSS styles inside the Component decorator! They are fully encapsulated and will never bleed or leak out into other files.`,
      km: `### បង្កើតមុខងារកម្មវិធីដំបូងរបស់អ្នក
តោះមើលរបៀបដែល Angular ភ្ជាប់ទិន្នន័យ និង UI ជាមួយគ្នា។ តាមរយៈការបង្កើតអថេរទូទៅ (Public Property) នៅក្នុង Class អ្នកអាចបង្ហាញវានៅលើទំព័រ HTML បានភ្លាមៗ។

### រចនាសម្ព័ន្ធចាំបាច់
រាល់ឯកសារ Angular ត្រូវ៖ នាំចូលបណ្ណាល័យ រៀបចំ Metadata តាមរយៈ \`@Component\` និងនាំចេញ Class TypeScript៖
- **selector:** ឈ្មោះ Tag (ឧទាហរណ៍៖ \`app-root\`) សម្រាប់បង្ហាញសមាសភាគនេះ។
- **template:** កូដ HTML ដែលមានភ្ជាប់ទិន្នន័យឌីណាមិក។
- **styles:** រចនាបថ CSS ដែលកំណត់សម្រាប់តែសមាសភាគមួយនេះប៉ុណ្ណោះ។

> **គន្លឹះ៖** រចនាបថ CSS ដែលអ្នកសរសេរនៅក្នុង Component នឹងត្រូវបិទជិត (Encapsulated) មិនឱ្យប៉ះពាល់ដល់ឯកសារផ្សេងទៀតឡើយ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 max-w-sm mx-auto text-center space-y-3">
      <h2 class="text-lg font-bold text-slate-800">My Angular Card</h2>
      <div class="text-sm text-slate-600">Developer: <span class="font-bold text-indigo-600">{{ author }}</span></div>
      <p class="text-xs text-slate-500">{{ bio }}</p>
      
      <button (click)="updateAuthor()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold">
        Switch Developer
      </button>
    </div>
  \`,
  styles: [\`
    h2 { font-family: sans-serif; color: #4338ca; }
  \`]
})
export class AppComponent {
  author = 'Sokchea Mean';
  bio = 'Enthusiastic developer learning frontend and full-stack frameworks.';

  updateAuthor() {
    this.author = this.author === 'Sokchea Mean' ? 'Bona Chhim' : 'Sokchea Mean';
  }
}
`
  },
  {
    id: "ang-templates",
    title: {
      en: "Angular Templates",
      km: "គំរូទំព័រ Templates"
    },
    content: {
      en: `### What is a Template?
An Angular template is a blueprint for your view. It is standard HTML but with added dynamic capabilities like interpolation (double curly braces \`{{ }}\`), which allows you to run evaluations, print variables, and execute methods on the class instance.

### Interpolation Features
- Render values: \`{{ title }}\`
- Run simple math: \`{{ 10 * 5 }}\`
- Call class functions: \`{{ getFullName() }}\`
- Retrieve string values: \`{{ message.toUpperCase() }}\`

> **Note:** Template expressions should be fast and simple. Avoid calling heavy methods directly in \`{{ }}\` expressions, as Angular runs them during digest cycles.`,
      km: `### តើអ្វីជា Template?
Template នៅក្នុង Angular គឺជាប្លង់មេសម្រាប់បង្ហាញលើអេក្រង់។ វាជាកូដ HTML ធម្មតា ប៉ុន្តែបន្ថែមលទ្ធភាពបង្ហាញទិន្នន័យឌីណាមិក តាមរយៈវង់ក្រចករលកពីរជាន់ \`{{ }}\` (Interpolation)។

### លទ្ធភាពនៃ Interpolation
- បង្ហាញតម្លៃអថេរ៖ \`{{ title }}\`
- គណនាលេខសាមញ្ញ៖ \`{{ 10 * 5 }}\`
- ហៅអនុគមន៍ពី Class៖ \`{{ getFullName() }}\`
- បំប្លែងទម្រង់អក្សរ៖ \`{{ message.toUpperCase() }}\`

> **សម្គាល់៖** កន្សោមក្នុង Template គួរតែសាមញ្ញ និងរត់លឿន។ ជៀសវាងការហៅមុខងារធ្ងន់ៗក្នុង \`{{ }}\` ព្រោះវានឹងរត់ជាញឹកញាប់ពេលទំព័រផ្លាស់ប្តូរ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm max-w-sm mx-auto text-left space-y-4">
      <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider font-mono">Template Calculations</h3>
      
      <div class="space-y-2 text-sm text-slate-700">
        <div>📝 Title: <strong class="text-indigo-600">{{ pageTitle }}</strong></div>
        <div>🔢 Math Calculation: <strong class="text-indigo-600">{{ 25 * 4 }}</strong></div>
        <div>🔄 Dynamic Uppercase: <strong class="text-indigo-600">{{ authorName.toUpperCase() }}</strong></div>
        <div>⏱️ Current Time: <strong class="text-indigo-600">{{ getCurrentTime() }}</strong></div>
      </div>
    </div>
  \`
})
export class AppComponent {
  pageTitle = 'Angular Templates Engine';
  authorName = 'kimsour';

  getCurrentTime() {
    return new Date().toLocaleTimeString();
  }
}
`
  },
  {
    id: "ang-components",
    title: {
      en: "Angular Components",
      km: "សមាសភាគ Components"
    },
    content: {
      en: `### Deep Dive into Components
Components are the fundamental building blocks of an Angular application. They consist of metadata declared using the \`@Component\` decorator and a corresponding class defining state and controls.

### Core Properties of Decorator:
1. **selector:** The custom HTML tag name representing this component.
2. **template:** The HTML structure (or \`templateUrl\` pointing to an external file).
3. **styles:** Scoped CSS styles targeting the layout (or \`styleUrls\` pointing to external sheets).
4. **imports:** Declares standalone component dependencies (e.g. \`CommonModule\`, custom sub-components).

> **Tip:** By packaging templates, styles, and controller actions together, Angular enforces neat file organization and components modularity.`,
      km: `### ស្វែងយល់លម្អិតពី Components
Components គឺជាបំណែកគ្រឹះចាំបាច់បំផុតនៃកម្មវិធី Angular។ ពួកវាបង្កឡើងដោយទិន្នន័យមេតា (Metadata) ដែលបានប្រកាសតាមរយៈ Decorator \`@Component\` និង Class កំណត់ឥរិយាបថ។

### លក្ខណៈសម្បត្តិសំខាន់ៗរបស់ Decorator៖
1. **selector:** ឈ្មោះ Tag HTML ផ្ទាល់ខ្លួនសម្រាប់តំណាងសមាសភាគនេះ។
2. **template:** ទម្រង់រចនាសម្ព័ន្ធ HTML (or \`templateUrl\` ទៅកាន់ឯកសារក្រៅ)។
3. **styles:** រចនាបថ CSS សម្រាប់ប្លង់ (or \`styleUrls\` ទៅកាន់ឯកសារក្រៅ)។
4. **imports:** សម្រាប់ប្រកាសការនាំចូលឧបករណ៍ជំនួយ (ដូចជា \`CommonModule\`)។

> **គន្លឹះ៖** ការរៀបចំចងក្រង templates, styles, និង controllers ចូលគ្នា ជួយឱ្យកូដមានរបៀបរៀបរយ និងងាយស្រួលគ្រប់គ្រង។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 bg-white rounded-2xl shadow-xl max-w-sm mx-auto text-center border border-slate-100">
      <div class="inline-block p-2 rounded-xl bg-teal-50 text-teal-600 mb-2">
        🛠️ Component Decorator
      </div>
      <h2 class="text-xl font-extrabold text-slate-800">{{ title }}</h2>
      <p class="text-xs text-slate-500 mt-1">Mounted at tag: <code class="font-mono bg-slate-100 px-1 py-0.5 rounded">&lt;app-root&gt;</code></p>
      
      <div class="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-400">
        Styles and views are isolated here.
      </div>
    </div>
  \`
})
export class AppComponent {
  title = 'Standalone Component';
}
`
  },
  {
    id: "ang-data-binding",
    title: {
      en: "Angular Data Binding",
      km: "ការចងភ្ជាប់ទិន្នន័យ Data Binding"
    },
    content: {
      en: `### Unifying Data and UI
Data binding connects your TypeScript properties to your HTML view. Angular supports three major types of binding structures:

### 1. Interpolation & Property Binding
One-way flow from code to view:
- **Interpolation:** \`{{ value }}\` for text nodes.
- **Property Binding:** \`[disabled]="isBlocked"\` or \`[src]="imageUrl"\` to set DOM element attributes dynamically.

### 2. Event Binding
One-way flow from view to code:
- **Event Binding:** \`(click)="handler()"\` to capture triggers and clicks.

### 3. Two-Way Data Binding
Bidirectional synchronization using \`[(ngModel)]\`:
- Uses the banana-in-a-box syntax: \`[(ngModel)]="name"\`. Useful for updating form controls and view simultaneously.

> **Note:** To use \`[(ngModel)]\`, ensure that you have configured your component imports correctly!`,
      km: `### ការភ្ជាប់ទិន្នន័យ និងផ្ទាំងបង្ហាញ
ការចងភ្ជាប់ទិន្នន័យ (Data Binding) ជួយភ្ជាប់អថេរពី TypeScript ទៅនឹងប្លង់ HTML។ Angular គាំទ្រការភ្ជាប់ទិន្នន័យ ៣ ប្រភេទចម្បង៖

### ១. Interpolation & Property Binding
ទិន្នន័យហូរទិសដៅតែមួយ ពីកូដទៅកាន់ផ្ទាំងបង្ហាញ៖
- **Interpolation:** \`{{ value }}\` សម្រាប់បង្ហាញជាអត្ថបទ។
- **Property Binding:** \`[disabled]="isBlocked"\` ឬ \`[src]="imageUrl"\` សម្រាប់កំណត់តម្លៃលក្ខណៈរបស់ Tag HTML។

### ២. Event Binding
ទិន្នន័យហូរទិសដៅតែមួយ ពីផ្ទាំងបង្ហាញទៅកាន់កូដវិញ៖
- **Event Binding:** \`(click)="handler()"\` សម្រាប់ចាប់រាល់សកម្មភាពចុច ឬព្រឹត្តិការណ៍នានា។

### ៣. Two-Way Data Binding
ការផ្លាស់ប្តូរទិន្នន័យស្របគ្នាពីរទិសដៅ ដោយប្រើ \`[(ngModel)]\`៖
- ប្រើប្រាស់សញ្ញា \`[(ngModel)]="name"\` ដែលជួយធ្វើបច្ចុប្បន្នភាព Form និងអថេរបានភ្លាមៗស្របគ្នា។

> **សម្គាល់៖** ដើម្បីប្រើ \`[(ngModel)]\` បាន ត្រូវប្រាកដថាបានប្រកាសការនាំចូលឱ្យបានត្រឹមត្រូវ!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Angular Binding Demo</h2>
      
      <!-- 1. Property Binding -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase">1. Property Binding</label>
        <button [disabled]="isButtonDisabled" class="w-full py-2 bg-indigo-600 disabled:bg-slate-200 text-white disabled:text-slate-400 font-bold text-xs rounded-lg transition">
          Interactive Button Status
        </button>
      </div>

      <!-- 2. Event Binding -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase">2. Event Binding</label>
        <button (click)="toggleDisable()" class="w-full py-1.5 border border-indigo-200 text-indigo-600 hover:bg-indigo-50 font-semibold text-xs rounded-lg transition">
          Toggle Button Disable Attribute
        </button>
      </div>

      <!-- 3. Two-Way Model Binding -->
      <div class="space-y-1 pt-2 border-t border-slate-100">
        <label class="text-[10px] font-bold text-slate-400 uppercase">3. Two-Way Binding ([(ngModel)])</label>
        <input [(ngModel)]="username" class="w-full p-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="Type here...">
        <div class="text-xs text-slate-500 mt-1">Live Output: <strong class="text-indigo-600 font-mono">{{ username }}</strong></div>
      </div>
    </div>
  \`
})
export class AppComponent {
  isButtonDisabled = false;
  username = 'Phnom Penh';

  toggleDisable() {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}
`
  },
  {
    id: "ang-directives",
    title: {
      en: "Angular Directives",
      km: "ការណែនាំពិសេស Directives"
    },
    content: {
      en: `### Extending HTML Capabilities
Directives are custom instructions that extend HTML markup with dynamic logic. In Angular, there are three types of directives:

### 1. Component Directives
These are directives packaged with templates (essentially '@Component').

### 2. Attribute Directives
These modify the appearance or behavior of an existing element:
- 'ngClass': Applies list of CSS classes dynamically.
- 'ngStyle': Injects raw inline CSS attributes dynamically.

### 3. Structural Directives
These reshape the DOM layout by inserting, destroying, or repeating elements:
- '*ngIf': Renders element conditionally.
- '*ngFor': Repeats element over iterable arrays.

> **Tip:** Prepend structural directives with an asterisk ('*') to indicate they modify DOM structure.`,
      km: `### ការពង្រីកសមត្ថភាព HTML
Directives គឺជាការណែនាំពិសេសដែលពង្រីកសមត្ថភាពរបស់ HTML ឱ្យដំណើរការកូដសនិទានវិទ្យា (Logic) បាន។ ក្នុង Angular ពួកវាបែងចែកជា ៣៖

### ១. Component Directives
ជា Directive ដែលមានប្លង់គំរូទំព័រផ្ទាល់ខ្លួន (ជាសមាសភាគ @Component)។

### ២. Attribute Directives
សម្រាប់កែប្រែសោភ័ណភាព ឬសកម្មភាពរបស់ Tag HTML ដែលមានស្រាប់៖
- 'ngClass': ដាក់បន្ថែម ឬដកថយរចនាបថថ្នាក់ CSS។
- 'ngStyle': កំណត់លក្ខណៈ CSS ផ្ទាល់នៅលើ Tag ជាក់លាក់។

### ៣. Structural Directives
សម្រាប់ផ្លាស់ប្តូរទម្រង់រចនាសម្ព័ន្ធ DOM (បង្កើត លុប ឬល្បាក់បង្ហាញ)៖
- '*ngIf': បង្ហាញសមាសភាគលុះត្រាតែលក្ខខណ្ឌជាពិត។
- '*ngFor': ល្បាក់បង្ហាញធាតុនីមួយៗចេញពីលំដាប់ អារេ។

> **គន្លឹះ៖** រាល់ structural directives ត្រូវចាប់ផ្តើមដោយសញ្ញាផ្កាយ ('*') ជានិច្ច ដើម្បីបញ្ជាក់ថាពួកវាកែប្រែទម្រង់ DOM។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Attribute Directives Demo</h2>
      
      <!-- [ngClass] & [ngStyle] demo -->
      <div 
        [ngClass]="{'border-emerald-500 bg-emerald-50 text-emerald-800': isCool, 'border-rose-500 bg-rose-50 text-rose-800': !isCool}"
        [ngStyle]="{'padding': '12px', 'border-width': '2px', 'border-style': 'solid'}"
        class="rounded-xl text-xs transition-all duration-300 font-medium"
      >
        🌟 Active Theme Status: {{ isCool ? 'Cool Calm Mode' : 'Warm Sunset Mode' }}
      </div>

      <button (click)="toggleTheme()" class="w-full py-2 bg-slate-900 text-white rounded-lg text-xs font-bold shadow hover:bg-black transition">
        Toggle Directive Styling Classes
      </button>
    </div>
  \`
})
export class AppComponent {
  isCool = true;

  toggleTheme() {
    this.isCool = !this.isCool;
  }
}
`
  },
  {
    id: "ang-events",
    title: {
      en: "Angular Events",
      km: "ព្រឹត្តិការណ៍ផ្សេងៗ Angular Events"
    },
    content: {
      en: `### Listening to User Interactions
Event binding flows from the UI template to your TypeScript class. When a user clicks a button, moves the mouse, or presses a key, Angular captures the event and invokes your handler method.

### Syntax
Event listeners wrap target events in parentheses, assigning them to method calls:
\`\`\`html
<button (click)="onSave()">Save</button>
\`\`\`

### Accessing Event Details
You can pass the special \`$event\` token to access raw DOM event payloads:
\`\`\`html
<input (input)="onKeyUp($event)">
\`\`\`

> **Note:** The \`$event\` payload holds information like target values, coordinates, and key codes, which you can process directly inside your TypeScript classes.`,
      km: `### ការចាប់រាល់សកម្មភាពរបស់អ្នកប្រើប្រាស់
ការភ្ជាប់ព្រឹត្តិការណ៍ (Event Binding) បញ្ជូនទិន្នន័យពី UI មកកាន់ TypeScript Class វិញ។ ពេលអ្នកប្រើចុចប៊ូតុង វាយអក្សរ ឬរំកិលកណ្ដុរ Angular ចាប់យកព្រឹត្តិការណ៍ទាំងនោះ ហើយដំណើរការ Method ភ្លាម។

### ទម្រង់សរសេរ
ព្រឹត្តិការណ៍គោលដៅត្រូវសរសេរក្នុងវង់ក្រចក រួចភ្ជាប់ទៅ Method៖
\`\`\`html
<button (click)="onSave()">រក្សាទុក</button>
\`\`\`

### ការទាញយកព័ត៌មានលម្អិតនៃព្រឹត្តិការណ៍
អ្នកអាចប្រើប្រាស់អថេរពិសេស \`$event\` ដើម្បីទាញយកទិន្នន័យលម្អិតរបស់ DOM Event៖
\`\`\`html
<input (input)="onKeyUp($event)">
\`\`\`

> **សម្គាល់៖** អថេរ \`$event\` ផ្ទុកទិន្នន័យដូចជា តម្លៃបញ្ចូល កូអរដោនេ ឬលេខកូដគ្រាប់ចុច ដែលអ្នកអាចយកទៅផ្ទៀងផ្ទាត់ក្នុងកូដ TypeScript បាន។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Event Handlers Tracker</h2>
      
      <!-- Click event -->
      <button (click)="recordClick()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition shadow">
        Click Counter Button
      </button>

      <!-- Key Input event with $event passing -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase">Real-time Keyboard Logger</label>
        <input (keyup)="logKey($event)" class="w-full p-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-indigo-500 font-mono" placeholder="Type letters to log key...">
      </div>

      <div class="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-600 font-mono">
        <div>👉 Click Count: <span class="text-indigo-600 font-bold">{{ clicks }}</span></div>
        <div>⌨️ Last Key Pressed: <span class="text-indigo-600 font-bold">{{ lastKey || 'None' }}</span></div>
      </div>
    </div>
  \`
})
export class AppComponent {
  clicks = 0;
  lastKey = '';

  recordClick() {
    this.clicks++;
  }

  logKey(event: KeyboardEvent) {
    this.lastKey = event.key;
  }
}
`
  }
];
