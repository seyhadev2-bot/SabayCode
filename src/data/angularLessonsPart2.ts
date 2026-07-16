import { Lesson } from '../types';

export const angularLessonsPart2: Lesson[] = [
  {
    id: "ang-conditional",
    title: {
      en: "Angular Conditional",
      km: "លក្ខខណ្ឌចងបង្ហាញ Conditional"
    },
    content: {
      en: `### Conditional Rendering
In web development, we often need to hide or show items depending on user permissions, state, or flags. Angular provides two main ways to write conditional layouts:

### 1. Classic structural directive (\`*ngIf\`)
Allows you to attach conditions directly onto HTML nodes:
\`\`\`html
<div *ngIf="isLoggedIn">Welcome Back!</div>
\`\`\`

### 2. Modern Angular Control Flow (\`@if\`)
Introduced in recent versions of Angular, this is a native, lightweight block-level syntax:
\`\`\`html
@if (isLoggedIn) {
  <div>Welcome Back!</div>
} @else {
  <div>Please sign in.</div>
}
\`\`\`

> **Pitfall:** Ensure you spell the directive correctly. A common mistake is forgetting the asterisk (\`*\`) in \`*ngIf\`, which will cause Angular to ignore the statement!`,
      km: `### ការបង្ហាញដោយមានលក្ខខណ្ឌ
ក្នុងការអភិវឌ្ឍគេហទំព័រ យើងតែងត្រូវបង្ហាញ ឬលាក់ប៊ូតុង និងផ្នែកផ្សេងៗផ្អែកលើស្ថានភាព ឬការអនុញ្ញាតរបស់អ្នកប្រើ។ Angular ផ្តល់វិធីសរសេរពីរបែប៖

### ១. ទម្រង់លក្ខខណ្ឌបែបបុរាណ (\`*ngIf\`)
អនុញ្ញាតឱ្យយើងដាក់លក្ខខណ្ឌផ្ទាល់នៅលើ Tag ណាមួយ៖
\`\`\`html
<div *ngIf="isLoggedIn">សូមស្វាគមន៍ត្រឡប់មកវិញ!</div>
\`\`\`

### ២. ប្លុកបញ្ជាលក្ខខណ្ឌជំនាន់ថ្មី (\`@if\`)
ត្រូវបានដាក់បញ្ចូលក្នុងកំណែទម្រង់ថ្មីៗរបស់ Angular ដោយប្រើសញ្ញា @ ដ៏ងាយស្រួល៖
\`\`\`html
@if (isLoggedIn) {
  <div>សូមស្វាគមន៍ត្រឡប់មកវិញ!</div>
} @else {
  <div>សូមចូលគណនីរបស់អ្នក។</div>
}
\`\`\`

> **ចំណុចគួរប្រយ័ត្ន៖** ត្រូវប្រាកដថាសរសេរ Directive បានត្រឹមត្រូវ។ កំហុសដែលកើតមានញឹកញាប់គឺការភ្លេចសញ្ញាផ្កាយ (\`*\`) នៅពីមុខ \`*ngIf\` ដែលធ្វើឱ្យវាដំណើរការមិនកើត!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Dynamic UI Conditionals</h2>
      
      <!-- Toggle Action -->
      <button (click)="toggleCard()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition">
        {{ isVisible ? 'Hide Account Details' : 'Show Account Details' }}
      </button>

      <!-- Conditionally rendered block -->
      @if (isVisible) {
        <div class="p-4 bg-indigo-50/70 border border-indigo-100 rounded-xl space-y-2 animate-fade-in text-xs text-indigo-900 font-medium">
          <p>🔑 <strong>User ID:</strong> USR-9482</p>
          <p>📧 <strong>Email:</strong> client@phnompenh.kh</p>
          <p>💼 <strong>Rank:</strong> Elite Creator</p>
        </div>
      } @else {
        <div class="p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-400">
          Account details are currently masked.
        </div>
      }
    </div>
  \`
})
export class AppComponent {
  isVisible = false;

  toggleCard() {
    this.isVisible = !this.isVisible;
  }
}
`
  },
  {
    id: "ang-lists",
    title: {
      en: "Angular Lists",
      km: "បញ្ជីរាយនាម Angular Lists"
    },
    content: {
      en: `### Repeating Layout Elements
Whenever you have arrays of data (like logs, table records, or messages), you can repeat HTML sections dynamically.

### 1. Classic syntax (\`*ngFor\`)
Iterates over an array in older versions:
\`\`\`html
<li *ngFor="let task of tasks">{{ task }}</li>
\`\`\`

### 2. Modern Control Flow (\`@for\`)
Optimized for high performance and clean markup, this modern version is the standard:
\`\`\`html
@for (task of tasks; track task.id) {
  <li>{{ task.name }}</li>
} @empty {
  <p>No tasks available!</p>
}
\`\`\`

> **Note:** The \`track\` keyword is strictly mandatory in the modern \`@for\` syntax. It helps Angular determine precisely which list items have changed, ensuring surgical DOM modifications.`,
      km: `### ការបង្ហាញទិន្នន័យជាបញ្ជីរាយនាម
រាល់ពេលដែលយើងមានទិន្នន័យជាអារេ (ដូចជា បញ្ជីការងារ គណនី ឬផលិតផល) យើងអាចប្រើប្រាស់មុខងារល្បាក់ដើម្បីបង្ហាញពួកវាបានភ្លាមៗ។

### ១. ទម្រង់បញ្ជីបែបបុរាណ (\`*ngFor\`)
រត់ល្បាក់លើអារេទិន្នន័យក្នុងកំណែទម្រង់ចាស់៖
\`\`\`html
<li *ngFor="let task of tasks">{{ task }}</li>
\`\`\`

### ២. ប្លុកបញ្ជាបញ្ជីជំនាន់ថ្មី (\`@for\`)
រចនាឡើងដើម្បីផ្តល់ល្បឿនប្រតិបត្តិការលឿនខ្ពស់ និងកូដមានរបៀបរៀបរយ៖
\`\`\`html
@for (task of tasks; track task.id) {
  <li>{{ task.name }}</li>
} @empty {
  <p>មិនមានការងារដែលត្រូវធ្វើទេ!</p>
}
\`\`\`

> **សម្គាល់៖** ពាក្យគន្លឹះ \`track\` គឺចាំបាច់ត្រូវតែសរសេរក្នុង \`@for\` ជំនាន់ថ្មី។ វាជួយឱ្យ Angular ស្គាល់ច្បាស់ពីទីតាំងដែលបានកែប្រែក្នុងបញ្ជី ដើម្បីធ្វើបច្ចុប្បន្នភាព DOM បានត្រឹមត្រូវ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">My Task Planner</h2>
      
      <!-- Simple Add Task bar -->
      <div class="flex space-x-2">
        <input [(ngModel)]="newTaskName" class="flex-1 p-2 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="New task title...">
        <button (click)="addTask()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg shadow-sm transition">
          Add
        </button>
      </div>

      <!-- Loops rendering tasks -->
      <ul class="space-y-1.5 pt-2 border-t border-slate-50">
        @for (task of tasks; track task.id) {
          <li class="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 border border-slate-100 text-xs">
            <span class="text-slate-700 font-medium">{{ task.name }}</span>
            <button (click)="removeTask(task.id)" class="text-rose-500 hover:text-rose-700 font-bold px-1.5 py-0.5 rounded transition">
              ×
            </button>
          </li>
        } @empty {
          <div class="text-center py-4 text-xs text-slate-400 font-medium">
            🎉 All done! No tasks remaining.
          </div>
        }
      </ul>
    </div>
  \`
})
export class AppComponent {
  newTaskName = '';
  tasks = [
    { id: 1, name: 'រៀបចំមេរៀន Angular' },
    { id: 2, name: 'សាកល្បង Angular Signals' },
    { id: 3, name: 'បកប្រែកូដជាភាសាខ្មែរ' }
  ];
  nextId = 4;

  addTask() {
    if (this.newTaskName.trim()) {
      this.tasks.push({
        id: this.nextId++,
        name: this.newTaskName.trim()
      });
      this.newTaskName = '';
    }
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
`
  },
  {
    id: "ang-forms",
    title: {
      en: "Angular Forms",
      km: "ទម្រង់បញ្ចូលព័ត៌មាន Forms"
    },
    content: {
      en: `### Collecting User Input
Forms are vital for collecting and validating user data securely. Angular provides two types of form management architectures:

### 1. Template-driven Forms
Simple, declarative forms managed directly inside HTML markup. Uses standard directives like \`ngModel\` for bindings and validation attributes.

### 2. Reactive Forms
Programmatic, highly testable forms. Form structures, attributes, and validation rules are declared as TypeScript models in your class code.

### Standard Field Validations
- **required:** Prevents empty submission.
- **email:** Confirms valid email syntaxes.
- **minlength:** Ensures values are above specific lengths.

> **Tip:** You can check the state of a form (such as \`dirty\`, \`valid\`, \`invalid\`) to toggle submit button statuses automatically in the template!`,
      km: `### ការប្រមូលព័ត៌មានពីអ្នកប្រើប្រាស់
ទម្រង់បញ្ចូលព័ត៌មាន (Forms) គឺសំខាន់បំផុតសម្រាប់ប្រមូល និងផ្ទៀងផ្ទាត់ទិន្នន័យឱ្យមានសុវត្ថិភាព។ Angular ផ្ដល់ស្ថាបត្យកម្មគ្រប់គ្រង ២ បែប៖

### ១. Template-driven Forms
ជាទម្រង់ងាយស្រួល សរសេរប្រកាសផ្ទាល់នៅក្នុងកូដ HTML ដោយប្រើ \`ngModel\` សម្រាប់ភ្ជាប់ទិន្នន័យ និងកំណត់ការផ្ទៀងផ្ទាត់។

### ២. Reactive Forms
ជាទម្រង់កម្រិតខ្ពស់ ងាយស្រួលធ្វើតេស្ត។ រចនាសម្ព័ន្ធ Form និងលក្ខខណ្ឌផ្ទៀងផ្ទាត់ត្រូវបានសរសេរជាគំរូទិន្នន័យ (TypeScript models) នៅក្នុង Class។

### លក្ខខណ្ឌផ្ទៀងផ្ទាត់ទូទៅ
- **required:** ទាមទារឱ្យបញ្ចូលព័ត៌មាន (មិនអាចទទេ)។
- **email:** ផ្ទៀងផ្ទាត់ថាជាទម្រង់អ៊ីមែលត្រឹមត្រូវ។
- **minlength:** កំណត់ប្រវែងអក្សរអប្បបរមា។

> **គន្លឹះ៖** អ្នកអាចពិនិត្យស្ថានភាពរបស់ Form (ដូចជា \`valid\`, \`invalid\`) ដើម្បីបិទ ឬបើកប៊ូតុង Submit ដោយស្វ័យប្រវត្តិតាមរយៈគំរូទំព័រ!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Secure Registration Form</h2>
      
      <div class="space-y-3">
        <!-- Email field -->
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
          <input [(ngModel)]="email" class="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="user@gmail.com">
          @if (email && !isEmailValid()) {
            <span class="text-[10px] text-rose-500 font-semibold font-sans">✕ Invalid email pattern!</span>
          }
        </div>

        <!-- Password field -->
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase">Password</label>
          <input type="password" [(ngModel)]="password" class="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-mono focus:outline-none focus:border-indigo-500" placeholder="••••••••">
          @if (password && password.length < 6) {
            <span class="text-[10px] text-rose-500 font-semibold font-sans">✕ Min 6 characters required!</span>
          }
        </div>

        <button (click)="submitForm()" [disabled]="!isFormValid()" class="w-full py-2.5 bg-indigo-600 disabled:bg-slate-200 text-white disabled:text-slate-400 font-bold text-xs rounded-lg shadow-sm transition">
          Register Account
        </button>
      </div>
    </div>
  \`
})
export class AppComponent {
  email = '';
  password = '';

  isEmailValid(): boolean {
    return this.email.includes('@') && this.email.includes('.');
  }

  isFormValid(): boolean {
    return this.isEmailValid() && this.password.length >= 6;
  }

  submitForm() {
    alert(\`ចុះឈ្មោះជោគជ័យជាមួយអ៊ីមែល៖ \${this.email}\`);
  }
}
`
  },
  {
    id: "ang-router",
    title: {
      en: "Angular Router",
      km: "ប្រព័ន្ធរ៉ោតទ័រ Router"
    },
    content: {
      en: `### Navigation in Single Page Apps
In Single Page Applications (SPAs), pages don't load from the server on click. Instead, the **Angular Router** intercepts links, swaps component layouts locally, and updates browser URLs on the fly.

### Key Concepts:
- **RouterModule:** Regulates routes mappings, connecting URL paths to specific components.
- **router-outlet:** The placeholder element tag where active route layouts render.
- **routerLink:** Directive applied on links to trigger navigation without browser reloads:
\`\`\`html
<a routerLink="/dashboard">Go to Dashboard</a>
\`\`\`

> **Note:** The Angular Router handles active state tracking seamlessly. You can use \`routerLinkActive\` to apply custom CSS styling onto links when their paths match browser URLs.`,
      km: `### ការរុករកទំព័រក្នុងកម្មវិធីតែមួយ
នៅក្នុងកម្មវិធី Single Page Applications (SPAs) គេហទំព័រមិនត្រូវការទាញយកឯកសារថ្មីពីម៉ាស៊ីនបម្រើរាល់ពេលប្ដូរទំព័រឡើយ។ **Angular Router** នឹងជំនួសការបង្ហាញ Component ក្នុងតំបន់ និងផ្លាស់ប្តូរតំណភ្ជាប់ URL ភ្លាមៗ។

### គំនិតសំខាន់ៗ៖
- **RouterModule:** គ្រប់គ្រងការផ្គូផ្គង និងរៀបចំបញ្ជីផ្លូវតំណភ្ជាប់ទៅកាន់សមាសភាគនីមួយៗ។
- **router-outlet:** ជាកន្លែងដែលសមាសភាគសកម្មត្រូវយកមកម៉ោនបង្ហាញនៅលើអេក្រង់។
- **routerLink:** Directive ជំនួស \`href\` ជួយប្ដូរទំព័រដោយគ្មានការ Reload កម្មវិធីរុករក៖
\`\`\`html
<a routerLink="/dashboard">ទៅកាន់ផ្ទាំងព័ត៌មាន</a>
\`\`\`

> **សម្គាល់៖** Angular Router ជួយតាមដានទំព័រសកម្មបានយ៉ាងងាយ។ អ្នកអាចប្រើ \`routerLinkActive\` ដើម្បីកំណត់រចនាបថ CSS ពិសេសលើតំណភ្ជាប់នៅពេលដែលទំព័រនោះកំពុងបើកបង្ហាញ។`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Mock Angular Router SPA</h2>
      
      <!-- Simulated Nav Tabs -->
      <nav class="flex border-b border-slate-100 pb-2 text-xs font-semibold">
        <button (click)="navigate('home')" [class.text-indigo-600]="activeTab === 'home'" class="flex-1 py-1 text-center transition">Home</button>
        <button (click)="navigate('settings')" [class.text-indigo-600]="activeTab === 'settings'" class="flex-1 py-1 text-center transition">Settings</button>
        <button (click)="navigate('profile')" [class.text-indigo-600]="activeTab === 'profile'" class="flex-1 py-1 text-center transition">Profile</button>
      </nav>

      <!-- Simulated Router Outlet container -->
      <div class="p-4 bg-slate-50/70 border border-slate-100 rounded-xl min-h-[80px] flex items-center justify-center text-xs text-slate-500 text-center">
        @if (activeTab === 'home') {
          <div class="animate-fade-in">🏠 Welcome to the <strong>Home Page</strong> components view!</div>
        } @else if (activeTab === 'settings') {
          <div class="animate-fade-in">⚙️ Configure your dashboard preferences in <strong>Settings</strong>!</div>
        } @else if (activeTab === 'profile') {
          <div class="animate-fade-in">👤 View and update user credentials in <strong>Profile Card</strong>!</div>
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  activeTab = 'home';

  navigate(path: string) {
    this.activeTab = path;
  }
}
`
  },
  {
    id: "ang-services",
    title: {
      en: "Angular Services & DI",
      km: "សេវាកម្ម និងការចាក់បញ្ចូលសេវា"
    },
    content: {
      en: `### Sharing Data Across Components
In a real application, multiple components often need to read and update the same data (like logged-in user details or shopping cart states). Angular solves this using **Services** and **Dependency Injection (DI)**.

### Dependency Injection (DI)
Instead of manually instantiating classes with \`new MyService()\`, Angular's injector creates, manages, and provides singletons of your services dynamically:
\`\`\`ts
constructor(private userService: UserService) {}
\`\`\`

### Decorator \`@Injectable\`
Tells Angular that this class is a service that can be injected into components, controllers, or other services.

> **Tip:** By declaring \`providedIn: 'root'\` inside the Service decorator, you register it globally, making a single shared data cache accessible throughout the entire app!`,
      km: `### ការចែករំលែកទិន្នន័យរវាង Components
នៅក្នុងកម្មវិធីពិតប្រាកដ សមាសភាគជាច្រើនច្រើនតែត្រូវការអាន និងកែប្រែទិន្នន័យរួមគ្នា (ដូចជាព័ត៌មានអ្នកប្រើ ឬទំនិញក្នុងកន្ត្រក)។ Angular ដោះស្រាយបញ្ហានេះដោយប្រើ **Services** និង **Dependency Injection (DI)**។

### Dependency Injection (DI)
ជំនួសឱ្យការបង្កើត Class ដោយដៃផ្ទាល់ (\`new MyService()\`) ប្រព័ន្ធ injector របស់ Angular នឹងបង្កើត និងចែករំលែកទិន្នន័យសេវាកម្មនោះមកឱ្យយើងដោយស្វ័យប្រវត្ត៖
\`\`\`ts
constructor(private userService: UserService) {}
\`\`\`

### Decorator \`@Injectable\`
បង្ហាញប្រាប់ Angular ថា Class នេះគឺជាសេវាកម្ម (Service) ដែលអាចយកទៅប្រើប្រាស់ និងចាក់បញ្ចូលក្នុងសមាសភាគនានាបាន។

> **គន្លឹះ៖** តាមរយៈការប្រកាស \`providedIn: 'root'\` នៅក្នុង @Injectable អ្នកនឹងចុះឈ្មោះសេវាកម្មនោះជាលក្ខណៈសកល ដែលអាចឱ្យគ្រប់ផ្នែកទាំងអស់អានទិន្នន័យរួមគ្នាតែមួយបានភ្លាមៗ!`
    },
    starterCode: `import { Component, Injectable } from '@angular/core';

// Simulated Shared Service Store
@Injectable({
  providedIn: 'root'
})
export class SharedCounterService {
  sharedValue = 100;

  increment() {
    this.sharedValue += 10;
  }
}

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Dependency Injection Demo</h2>
      
      <div class="p-3.5 bg-indigo-50 border border-indigo-100 rounded-xl">
        <div class="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Shared Service Value</div>
        <div class="text-2xl font-black text-indigo-700 font-mono">{{ counterService.sharedValue }}</div>
      </div>

      <p class="text-xs text-slate-500 leading-normal">
        By sharing this service, we can mutate and read data globally without any complex event emitters.
      </p>

      <button (click)="addValue()" class="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg transition shadow-sm">
        Increment Shared Service Value
      </button>
    </div>
  \`
})
export class AppComponent {
  // Injecting the service via compiler parameters
  constructor(public counterService: SharedCounterService) {}

  addValue() {
    this.counterService.increment();
  }
}
`
  },
  {
    id: "ang-http-client",
    title: {
      en: "Angular HTTP Client",
      km: "ម៉ាស៊ីន HTTP Client"
    },
    content: {
      en: `### Interacting with Servers
Angular features a powerful, robust utility called \`HttpClient\` to request web resources, fetch JSON payloads, and interact with backends securely.

### Essential API Commands
- \`get(url)\`: Fetch resource data.
- \`post(url, data)\`: Submit brand new resources.
- \`put(url, data)\`: Update existing fields.
- \`delete(url)\`: Erase resources.

### RxJS Observables
Unlike typical fetch APIs that return JavaScript Promises, Angular's HTTP Client returns **RxJS Observables**. Observables are powerful streams that allow you to map, filter, retry, and manage complex request lifecycles.

> **Tip:** To retrieve and display data from an Observable stream, you must invoke the \`.subscribe()\` method!`,
      km: `### ការទាញយកទិន្នន័យពីម៉ាស៊ីនបម្រើ
Angular ផ្ដល់ជូននូវឧបករណ៍ដ៏មានឥទ្ធិពលមួយឈ្មោះថា \`HttpClient\` សម្រាប់ធ្វើសំណើទាញយកឯកសារ JSON ឬប្រាស្រ័យទាក់ទងជាមួយ API ម៉ាស៊ីនបម្រើខាងក្រៅប្រកបដោយសុវត្ថិភាព។

### បញ្ជាមូលដ្ឋានគ្រឹះ API
- \`get(url)\`: ទាញយកទិន្នន័យពីម៉ាស៊ីនបម្រើ។
- \`post(url, data)\`: បញ្ជូនទិន្នន័យថ្មីទៅកាន់ម៉ាស៊ីនបម្រើ។
- \`put(url, data)\`: កែប្រែទិន្នន័យដែលមានស្រាប់។
- \`delete(url)\`: លុបទិន្នន័យចេញពីម៉ាស៊ីនបម្រើ។

### RxJS Observables
ខុសពីការប្រើប្រាស់ Fetch ធម្មតាក្នុង JS ដែលផ្តល់មកវិញជា Promises ឧបករណ៍ HTTP Client របស់ Angular ផ្តល់មកវិញជា **RxJS Observables** ដែលអនុញ្ញាតឱ្យយើងតម្រង ឬគ្រប់គ្រងការដំណើរការសំណើបានល្អជាងមុន។

> **គន្លឹះ៖** ដើម្បីទាញយកទិន្នន័យពីចរន្ត Observable យកមកបង្ហាញលើអេក្រង់ អ្នកត្រូវតែហៅប្រើអនុគមន៍ \`.subscribe()\` ជានិច្ច!`
    },
    starterCode: `import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Dynamic User Downloader</h2>
      
      <button (click)="fetchUsers()" [disabled]="isLoading" class="w-full py-2 bg-indigo-600 disabled:bg-slate-200 text-white disabled:text-slate-400 font-bold text-xs rounded-lg transition shadow-sm">
        {{ isLoading ? 'Connecting API...' : 'Fetch Members List' }}
      </button>

      <!-- Users results -->
      <div class="space-y-2">
        @for (user of users; track user.id) {
          <div class="p-2 border border-slate-100 bg-slate-50/70 rounded-xl flex items-center justify-between text-xs animate-fade-in">
            <span class="font-bold text-slate-700">{{ user.name }}</span>
            <span class="text-[9px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold uppercase font-mono">
              {{ user.active ? 'Active' : 'Offline' }}
            </span>
          </div>
        } @empty {
          <div class="text-center py-4 text-xs text-slate-400 font-medium">
            No active members downloaded yet.
          </div>
        }
      </div>
    </div>
  \`
})
export class AppComponent {
  users: any[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.isLoading = true;
    this.http.get('https://api.example.com/users').subscribe((response: any) => {
      this.users = response;
      this.isLoading = false;
    });
  }
}
`
  },
  {
    id: "ang-pipes",
    title: {
      en: "Angular Pipes",
      km: "ឧបករណ៍បំប្លែងទិន្នន័យ Pipes"
    },
    content: {
      en: `### Transforming Template Output
Pipes allow you to format and transform dynamic values directly in your HTML template without modifying the original data variables.

### Common Built-in Pipes
- \`uppercase\`: Capitalizes letters entirely (e.g., \`{{ 'angkor' | uppercase }}\` yields \`ANGKOR\`).
- \`date\`: Formats dates gracefully (e.g., \`{{ birthday | date:'medium' }}\`).
- \`currency\`: Prefixes symbols and formats decimals (e.g., \`{{ price | currency:'USD' }}\`).
- \`json\`: Serializes objects into formatted text strings, perfect for debugging!

### Chaining Pipes
You can chain multiple pipe filters together inside a template expression:
\`\`\`html
{{ user.joinedDate | date | uppercase }}
\`\`\`

> **Tip:** Pipes use the pipe character (\`|\`) in templates. They are highly efficient because Angular only re-evaluates them when the input value changes!`,
      km: `### ការបំប្លែងទម្រង់ទិន្នន័យលើគំរូទំព័រ
Pipes អនុញ្ញាតឱ្យយើងផ្លាស់ប្តូរ និងកំណត់ទម្រង់ទិន្នន័យដើម្បីបង្ហាញនៅលើគំរូទំព័រ HTML បានភ្លាមៗ ដោយមិនបាច់ប៉ះពាល់ ឬកែប្រែតម្លៃដើមនៃអថេរឡើយ។

### ឧបករណ៍ Pipes ដែលមានស្រាប់ពេញនិយម
- \`uppercase\`: បំប្លែងអក្សរទាំងអស់ទៅជាអក្សរធំ (ឧទាហរណ៍៖ \`angkor wat\` ទៅជា \`ANGKOR WAT\`)។
- \`date\`: កំណត់ទម្រង់កាលបរិច្ឆេទឱ្យងាយស្រួលមើល។
- \`currency\`: កំណត់និមិត្តសញ្ញារូបិយប័ណ្ណ និងចំនួនក្បៀសលេខទសភាគ។
- \`json\`: បំប្លែងទិន្នន័យស្មុគស្មាញជាអត្ថបទ JSON String ដែលល្អបំផុតសម្រាប់ការស្វែងរកបញ្ហាកូដ!

### ការតភ្ជាប់ Pipe ច្រើនបញ្ចូលគ្នា
អ្នកអាចភ្ជាប់ Pipe ច្រើនបន្តគ្នាពីមួយទៅមួយក្នុងកន្សោមតែមួយបាន៖
\`\`\`html
{{ user.joinedDate | date | uppercase }}
\`\`\`

> **គន្លឹះ៖** Pipes ប្រើនិមិត្តសញ្ញាខណ្ឌ (\`|\`) ក្នុង Template។ ពួកវាដំណើរការលឿនខ្លាំងព្រោះ Angular នឹងគណនាវាលុះត្រាតែទិន្នន័យដើមមានការផ្លាស់ប្តូរតម្លៃប៉ុណ្ណោះ!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Bilingual Pipes formatter</h2>
      
      <div class="space-y-2.5 text-xs font-medium text-slate-600">
        <!-- Text Pipe -->
        <div class="p-2 bg-slate-50 rounded-xl">
          <div class="text-[9px] text-slate-400 font-bold uppercase font-mono">Original: {{ textValue }}</div>
          <div class="text-slate-800 font-bold">Uppercase Pipe: <span class="text-indigo-600">{{ textValue | uppercase }}</span></div>
        </div>

        <!-- Currency Pipe -->
        <div class="p-2 bg-slate-50 rounded-xl">
          <div class="text-[9px] text-slate-400 font-bold uppercase font-mono">Original Decimal: {{ price }}</div>
          <div class="text-slate-800 font-bold">Currency Pipe: <span class="text-indigo-600">{{ price | currency:'USD':'symbol':'1.2-2' }}</span></div>
        </div>

        <!-- Date Pipe -->
        <div class="p-2 bg-slate-50 rounded-xl">
          <div class="text-[9px] text-slate-400 font-bold uppercase font-mono">Raw Timestamp</div>
          <div class="text-slate-800 font-bold">Formatted Date Pipe: <span class="text-indigo-600">{{ today | date:'mediumDate' }}</span></div>
        </div>
      </div>
    </div>
  \`
})
export class AppComponent {
  textValue = 'bilingual angular learning';
  price = 450.75;
  today = new Date();
}
`
  },
  {
    id: "ang-lifecycle",
    title: {
      en: "Angular Lifecycle Hooks",
      km: "វដ្តជីវិតសមាសភាគ Lifecycle"
    },
    content: {
      en: `### Understanding the Component Lifecycle
As users navigate your application, Angular is constantly creating, updating, and destroying components. **Lifecycle Hooks** allow you to tap into these events to run custom setup or cleanup logic.

### Crucial Hooks
- **ngOnChanges:** Fires before \`ngOnInit\` and whenever bound input values change.
- **ngOnInit:** Invoked exactly once after the component is initialized. Perfect place to fetch backend data.
- **ngOnDestroy:** Invoked just before the component is destroyed. Critical for unsubscribing from observables and avoiding memory leaks!

> **Note:** To use a lifecycle hook, implement the matching TypeScript interface (e.g., \`OnInit\`, \`OnDestroy\`) and declare the method inside your component class!`,
      km: `### ស្វែងយល់ពីវដ្តជីវិតសមាសភាគ
នៅពេលអ្នកប្រើប្រាស់រុករកកម្មវិធី Angular នឹងបង្កើត កែប្រែ និងលុបសមាសភាគនានាជាបន្តបន្ទាប់។ **Lifecycle Hooks** គឺជាចំណុចកណ្ដាលដែលអនុញ្ញាតឱ្យយើងជ្រៀតចូលដើម្បីសរសេរកូដដំណើរការកិច្ចការទាំងនោះ។

### Hooks សំខាន់ៗបំផុត
- **ngOnChanges:** ដំណើរការដំបូងគេបង្អស់ និងរាល់ពេលដែលទិន្នន័យបញ្ចូល (Input bindings) ផ្លាស់ប្តូរ។
- **ngOnInit:** រត់តែម្ដងគត់បន្ទាប់ពីសមាសភាគត្រូវបានបង្កើតឡើង។ ជាកន្លែងល្អបំផុតសម្រាប់ទាញយកទិន្នន័យពី API។
- **ngOnDestroy:** រត់ភ្លាមៗមុនពេលសមាសភាគត្រូវលុបចោល។ សំខាន់បំផុតសម្រាប់លុបចោលការភ្ជាប់ចរន្តទិន្នន័យ (Unsubscribe) ការពារភាពខូចខាតអង្គចងចាំ!

> **សម្គាល់៖** ដើម្បីប្រើប្រាស់ lifecycle hook បាន អ្នកត្រូវអនុវត្តតាម Interface (ដូចជា \`OnInit\`, \`OnDestroy\`) និងសរសេរ Method របស់វាគ្មិននៅក្នុង Class របស់អ្នក!`
    },
    starterCode: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-md border border-slate-100 text-left space-y-4">
      <h2 class="text-base font-extrabold text-slate-800">Lifecycle Activity Logger</h2>
      
      <p class="text-xs text-slate-500 leading-relaxed">
        Check the log panel below. The <code class="font-mono bg-indigo-50 px-1 py-0.5 rounded text-indigo-600 font-bold">ngOnInit</code> hook has run automatically on initialization!
      </p>

      <div class="p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl space-y-1">
        <div class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Logger Console</div>
        @for (log of lifecycleLogs; track $index) {
          <div>⚡ [{{ $index + 1 }}] {{ log }}</div>
        }
      </div>
    </div>
  \`
})
export class AppComponent implements OnInit, OnDestroy {
  lifecycleLogs: string[] = [];

  ngOnInit() {
    this.lifecycleLogs.push('ngOnInit() invoked: Component is fully ready!');
  }

  ngOnDestroy() {
    console.log('Component has been destroyed!');
  }
}
`
  },
  {
    id: "ang-styling",
    title: {
      en: "Angular Styling",
      km: "ការរចនាម៉ូដសោភ័ណភាព Styling"
    },
    content: {
      en: `### Style Encapsulation
By default, styles defined in an Angular component are fully encapsulated. They are scoped specifically to that component's HTML markup and will never bleed or affect other views.

### Special Selectors
- **:host:** Represents the component container host element itself (e.g. '<app-root>'). Use this to define styles like flex alignment, dimensions, or borders on the root.
- **:host-context:** Applies styles based on ancestor classes or body attributes (useful for theme setups like dark mode).

### Customizing Encapsulation Mode
Inside '@Component', you can set 'encapsulation' to:
- 'ViewEncapsulation.Emulated' (Default): Scoped styles using unique helper attributes.
- 'ViewEncapsulation.None': Styles bleed globally like standard stylesheets.

> **Tip:** Keeping styles encapsulated makes refactoring easy and protects your application against unexpected global styling side-effects!`,
      km: `### ការបិទជិតរចនាបថសោភ័ណភាព
តាមលំនាំដើម រាល់ការសរសេររចនាបថ CSS នៅក្នុងសមាសភាគណាមួយ គឺត្រូវបានបិទជិត (Encapsulated)។ ពួកវានឹងជះឥទ្ធិពលតែលើសមាសភាគនោះប៉ុណ្ណោះ និងមិនដែលលេចធ្លាយទៅក្រៅឡើយ។

### និមិត្តសញ្ញាជ្រើសរើសពិសេស
- **:host:** តំណាងឱ្យប្រអប់ផ្ទុកទាំងមូលរបស់សមាសភាគនោះផ្ទាល់ (ឧទាហរណ៍៖ Tag '<app-root>')។ ប្រើដើម្បីកំណត់ទំហំ ប្រអប់ ឬការរៀបជួរនៅលើ Root។
- **:host-context:** សម្រាប់ដាក់ម៉ូតផ្អែកលើទម្រង់ថ្នាក់របស់ថ្នាក់ឪពុក (ល្អបំផុតសម្រាប់រៀបចំ Dark/Light Mode របស់កម្មវិធី)។

### ការកែប្រែប្រភេទទម្រង់ Encapsulation
នៅក្នុង '@Component' យើងអាចកំណត់ 'encapsulation' ជា៖
- 'ViewEncapsulation.Emulated' (លំនាំដើម)៖ ការបិទជិតដោយប្រើអត្តសញ្ញាណជំនួយពិសេស។
- 'ViewEncapsulation.None'៖ រចនាបថជះឥទ្ធិពលជាសកលទូទាំងកម្មវិធីតែម្ដង។

> **គន្លឹះ៖** ការប្រើរចនាបថបែបបិទជិតជួយសម្រួលដល់ការកែប្រែកូដទៅថ្ងៃក្រោយ និងការពារកុំឱ្យរចនាបថ CSS ជាន់គ្នាច្របូកច្របល់!`
    },
    starterCode: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <div class="p-6 text-left space-y-4 rounded-2xl border border-slate-100 shadow-md bg-white">
      <h2 class="text-base font-extrabold text-slate-800">Isolated Styling Component</h2>
      
      <p class="text-xs text-slate-500 leading-normal">
        The green border and layout padding are declared inside the encapsulated <code class="font-bold">:host</code> CSS rule of this component!
      </p>

      <div class="badge p-2 text-center rounded-xl font-bold text-xs">
        🎨 Fully Encapsulated Box
      </div>
    </div>
  \`,
  styles: [\`
    :host {
      display: block;
      border: 3px solid #10b981;
      border-radius: 20px;
      padding: 8px;
      max-width: 384px;
      margin: 0 auto;
    }
    .badge {
      background-color: #ecfdf5;
      color: #047857;
    }
  \`]
})
export class AppComponent {}
`
  }
];
