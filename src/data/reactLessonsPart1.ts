import { Lesson } from '../types';

export const reactLessonsPart1: Lesson[] = [
  {
    id: "react-home",
    title: { en: "React Home", km: "ទំព័រដើម React" },
    content: {
      en: `# React Home
Welcome to the interactive React.js developer course! React is the world's most popular open-source JavaScript library developed by Meta (Facebook) for building fast, declarative, and component-based user interfaces.

### Why Learn React?
* **Component Architecture:** Build self-contained, reusable user interface building blocks.
* **Virtual DOM:** React updates only the changed parts of the actual DOM, resulting in amazing performance.
* **Declarative UI:** You describe *what* the UI should look like for a given state, and React handles *how* to draw it.

> **Tip:** Learn React to unlock professional frontend development. Virtually every modern web platform uses React or React-based frameworks.`,
      km: `# ទំព័រដើម React
សូមស្វាគមន៍មកកាន់វគ្គសិក្សាអន្តរកម្ម React.js! React គឺជាបណ្ណាល័យ JavaScript ប្រភពបើកចំហដ៏ពេញនិយមបំផុតដែលបង្កើតឡើងដោយក្រុមហ៊ុន Meta (Facebook) សម្រាប់កសាងគេហទំព័រដែលមានល្បឿនលឿន ងាយស្រួលគ្រប់គ្រង និងផ្អែកលើសមាសភាគ (Component-based)។

### ហេតុអ្វីត្រូវរៀន React?
* **រចនាសម្ព័ន្ធសមាសភាគ (Components):** បង្កើតប្លង់ UI ដែលអាចប្រើឡើងវិញបានយ៉ាងងាយស្រួល។
* **Virtual DOM:** React ធ្វើបច្ចុប្បន្នភាពតែផ្នែកដែលផ្លាស់ប្តូរប៉ុណ្ណោះ ដែលធ្វើឱ្យគេហទំព័រមានល្បឿនលឿនបំផុត។
* **Declarative UI:** អ្នកគ្រាន់តែកំណត់អ្វីដែលអ្នកចង់បង្ហាញតាមសភាពជាក់ស្តែង ហើយ React នឹងចាត់ចែងការបង្ហាញកូដដោយស្វ័យប្រវត្តិ។

> **គន្លឹះ៖** ការរៀន React ជួយឱ្យអ្នកក្លាយជាអ្នកអភិវឌ្ឍន៍គេហទំព័រអាជីព ព្រោះប្រព័ន្ធបច្ចេកវិទ្យាទំនើបភាគច្រើនត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់ React។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function Welcome() {
    return (
      <div style={{
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ color: '#00d8ff', margin: '0 0 10px 0' }}>React.js Course</h1>
        <p style={{ color: '#666', fontSize: '15px' }}>Learn React interactively step-by-step!</p>
        <button 
          onClick={() => alert("Let's build amazing apps!")}
          style={{
            padding: '10px 20px',
            background: '#00d8ff',
            color: '#1e293b',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '15px'
          }}
        >
          Get Started
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Welcome />);
</script>`
  },
  {
    id: "react-intro",
    title: { en: "React Intro", km: "សេចក្តីផ្តើម React" },
    content: {
      en: `# React Intro
React works by creating an in-memory Virtual DOM. When state changes, React first computes the difference (diffing) and updates *only* the specific actual HTML nodes that changed. This is much faster than re-rendering the entire page.

### Key Concepts
* **SPA (Single Page Application):** Web apps that load a single HTML page and dynamically update it as the user interacts.
* **Declarative Code:** Describe how the UI looks based on state, rather than manually selecting HTML tags with JavaScript and modifying their attributes.

> **Pitfall:** Do not try to directly modify document elements using \`document.getElementById\` in React. Let React manage the DOM!`,
      km: `# សេចក្តីផ្តើម React
React ដំណើរការដោយបង្កើត Virtual DOM នៅក្នុងមេម៉ូរី។ នៅពេលទិន្នន័យ (State) ផ្លាស់ប្តូរ React នឹងគណនាភាពខុសគ្នានៃកូដ រួចធ្វើបច្ចុប្បន្នភាពតែផ្នែក HTML ណាដែលផ្លាស់ប្តូរប៉ុណ្ណោះ។ វាលឿនជាងការអាប់ដេតទំព័រទាំងមូល។

### គំនិតសំខាន់ៗ
* **SPA (Single Page Application):** កម្មវិធីគេហទំព័រដែលទាញយកទំព័រ HTML តែម្តងគត់ ហើយធ្វើបច្ចុប្បន្នភាពទិន្នន័យ dynamically។
* **Declarative Code:** កំណត់ស្ទីល UI តាមរយៈ State ជាជាងការជ្រើសរើស HTML elements ដោយប្រើប្រាស់ JavaScript ផ្ទាល់។

> **បញ្ហាជួបប្រទះ៖** កុំព្យាយាមកែប្រែ HTML ផ្ទាល់ដោយប្រើ \`document.getElementById\` នៅក្នុង React។ ត្រូវទុកឱ្យ React គ្រប់គ្រង DOM ទាំងស្រុង!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function IntroApp() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
        <h2 style={{ color: '#0f172a' }}>Welcome to React Intro</h2>
        <div style={{
          padding: '16px',
          borderLeft: '4px solid #3b82f6',
          backgroundColor: '#eff6ff',
          color: '#1e40af',
          borderRadius: '0 8px 8px 0'
        }}>
          React uses the <strong>Virtual DOM</strong> to make UI updates highly efficient!
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<IntroApp />);
</script>`
  },
  {
    id: "react-get-started",
    title: { en: "React Get Started", km: "ការចាប់ផ្តើមជាមួយ React" },
    content: {
      en: `# React Get Started
To start writing React, you can load React directly from a CDN (Content Delivery Network) for quick experiments, or bootstrap a production project using modern bundles like Vite.

### Modern Vite Setup:
\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

> **Note:** For quick testing in our playground environment, we load React 18 and Babel from Unpkg so you can write and run JSX directly.`,
      km: `# ការចាប់ផ្តើមជាមួយ React
ដើម្បីចាប់ផ្តើមសរសេរ React អ្នកអាចទាញយកវាផ្ទាល់ពី CDN សម្រាប់ការសាកល្បងរហ័ស ឬបង្កើតគម្រោងស្តង់ដារសម្រាប់ផលិតកម្មដោយប្រើប្រាស់ Vite។

### ការដំឡើងតាមរយៈ Vite៖
\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

> **សម្គាល់៖** សម្រាប់បរិស្ថានសាកល្បងនៅក្នុងប្រព័ន្ធនេះ យើងបានទាញយក React 18 និង Babel រួចជាស្រេច ដើម្បីឱ្យអ្នកអាចសរសេរ និងដំណើរការ JSX ភ្លាមៗ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function GetStartedCard() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3 style={{ color: '#10b981' }}>✓ Environment Ready</h3>
        <p style={{ color: '#4b5563' }}>You are running a real in-browser Babel sandbox for JSX compilation.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<GetStartedCard />);
</script>`
  },
  {
    id: "react-first-app",
    title: { en: "React First App", km: "កម្មវិធី React ដំបូងរបស់អ្នក" },
    content: {
      en: `# React First App
Let's build your first interactive React application. We will create a small interactive card that allows you to customize a greeting message by typing your name.

### Building Blocks of our First App:
1. A container element to hold the root node: \`<div id="root"></div>\`
2. A component function that returns JSX
3. ReactDOM's \`createRoot\` to target the container and render the component.

> **Tip:** In JSX, dynamic values and JS expressions are written inside single curly braces \`{}\`.`,
      km: `# កម្មវិធី React ដំបូងរបស់អ្នក
តោះសាកល្បងបង្កើតកម្មវិធី React ដំបូងបង្អស់របស់អ្នក! យើងនឹងបង្កើតកាតអន្តរកម្មមួយដែលអនុញ្ញាតឱ្យអ្នកវាយឈ្មោះដើម្បីប្ដូរសារស្វាគមន៍។

### សមាសធាតុផ្សំនៃកម្មវិធី៖
1. ប្រអប់ផ្ទុកដែលជា Root Node៖ \`<div id="root"></div>\`
2. អនុគមន៍សមាសភាគ (Component Function) ដែលផ្តល់មកវិញនូវ JSX
3. មុខងារ \`createRoot\` របស់ ReactDOM ដើម្បីកំណត់ទិសដៅ និងបង្ហាញសមាសភាគ។

> **គន្លឹះ៖** នៅក្នុង JSX រាល់តម្លៃឌីណាមិក ឬកន្សោម JavaScript ត្រូវសរសេរក្នុងគ្នាបើកបិទ \`{}\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function GreetingApp() {
    const [name, setName] = React.useState("Developer");

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '24px', maxWidth: '350px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h4 style={{ color: '#334155', margin: '0 0 10px 0' }}>Say Hello!</h4>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box', marginBottom: '15px' }}
        />
        <h2 style={{ color: '#4f46e5', margin: 0 }}>Hello, {name || "Stranger"}! 👋</h2>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<GreetingApp />);
</script>`
  },
  {
    id: "react-render-html",
    title: { en: "React Render HTML", km: "ការបង្ហាញកូដ HTML ក្នុង React" },
    content: {
      en: `# React Render HTML
React's goal is to render HTML elements in the web browser. React handles this using a Virtual DOM node reference and the ReactDOM package.

### How it Works:
1. **Targeting Root:** React needs a container element, usually \`<div id="root"></div>\`.
2. **Mounting:** We use \`ReactDOM.createRoot()\` to define the mounting node.
3. **Rendering:** We call the \`.render()\` method to inject our component tree into that node.

> **Pitfall:** Make sure the target element actually exists in the HTML before calling \`createRoot\` on it, otherwise React will throw an error!`,
      km: `# ការបង្ហាញកូដ HTML ក្នុង React
គោលដៅរបស់ React គឺការបង្ហាញ (Render) HTML elements នៅលើកម្មវិធីរុករកគេហទំព័រ (Browser)។ React សម្រេចកិច្ចការនេះតាមរយៈការប្រើប្រាស់ Virtual DOM node និងកញ្ចប់ ReactDOM។

### របៀបដំណើរការ៖
1. **កំណត់ទិសដៅ Root:** React ត្រូវការប្រអប់ផ្ទុកមួយ ភាគច្រើនគឺ \`<div id="root"></div>\`។
2. **ការភ្ជាប់ (Mounting):** យើងប្រើប្រាស់ \`ReactDOM.createRoot()\` ដើម្បីកំណត់ Node ដែលត្រូវភ្ជាប់។
3. **ការបង្ហាញ (Rendering):** យើងហៅវិធីសាស្ត្រ \`.render()\` ដើម្បីបញ្ចូលសមាសភាគទាំងអស់ទៅក្នុង Node នោះ។

> **បញ្ហាជួបប្រទះ៖** ត្រូវប្រាកដថា element គោលដៅពិតជាមាននៅក្នុង HTML មុនពេលហៅ \`createRoot\` បើមិនដូច្នោះទេ វានឹងបង្កកំហុស (Error)!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ProductTable() {
    const products = [
      { id: 1, name: "Premium Laptop", price: "$999" },
      { id: 2, name: "Mechanical Keyboard", price: "$120" }
    ];

    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h3 style={{ color: '#1e293b' }}>Available Products</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f1f5f9' }}>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Product</th>
              <th style={{ padding: '10px', textAlign: 'left', borderBottom: '1px solid #e2e8f0' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0' }}>{p.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #e2e8f0', color: '#16a34a', fontWeight: 'bold' }}>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ProductTable />);
</script>`
  },
  {
    id: "react-upgrade",
    title: { en: "React Upgrade", km: "ការដំឡើង និងបច្ចុប្បន្នភាព React" },
    content: {
      en: `# React Upgrade
React regularly receives updates. The major transition from React 17 to React 18 introduced concurrent features, automatic batching of state updates, and replaced old render APIs with the new \`createRoot\` API.

### Old React 17 Syntax:
\`\`\`javascript
// Deprecated! Do not use in modern code:
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

### New React 18/19 Syntax:
\`\`\`javascript
// Recommended Standard:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

> **Note:** The newer syntax improves mounting speeds and allows React to coordinate transitions without blocking the UI thread.`,
      km: `# ការដំឡើង និងបច្ចុប្បន្នភាព React
React ទទួលបានការធ្វើបច្ចុប្បន្នភាពជាប្រចាំ។ ការផ្លាស់ប្តូរដ៏ធំពី React 17 ទៅ React 18 បាននាំមកនូវលក្ខណៈពិសេស Concurrent, ការរួមបញ្ចូលគ្នានៃការធ្វើបច្ចុប្បន្នភាព State (Automatic Batching) និងជំនួសវិធីសាស្ត្រចាស់ជំនួសដោយ \`createRoot\` API។

### វាក្យសម្ពន្ធចាស់ក្នុង React 17៖
\`\`\`javascript
// លែងណែនាំឱ្យប្រើទៀតហើយ៖
ReactDOM.render(<App />, document.getElementById('root'));
\`\`\`

### វាក្យសម្ពន្ធថ្មីក្នុង React 18/19៖
\`\`\`javascript
// ស្ដង់ដារដែលណែនាំ៖
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
\`\`\`

> **សម្គាល់៖** វាក្យសម្ពន្ធថ្មីធ្វើឱ្យការបង្ហាញកូដមានល្បឿនលឿនជាងមុន និងអនុញ្ញាតឱ្យ React សម្របសម្រួលដំណើរការ UI ដោយមិនមានការរំខាន។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function UpgradeCheck() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '16px', backgroundColor: '#fafafa', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <span style={{ padding: '4px 8px', background: '#e0f2fe', color: '#0369a1', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>REACT 18+ ACTIVE</span>
        <h3 style={{ margin: '10px 0 5px 0' }}>Using ReactDOM.createRoot()</h3>
        <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>This page is rendered using the modern, high-performance root architecture.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<UpgradeCheck />);
</script>`
  },
  {
    id: "react-es6",
    title: { en: "React ES6", km: "មុខងារ ES6 ក្នុង React" },
    content: {
      en: `# React ES6
React relies heavily on modern ECMAScript 6 (ES6+) features. Understanding these features is critical to mastering React.

### Crucial ES6 Features for React:
1. **Arrow Functions:** Shorthand function declarations: \`const foo = () => {}\`
2. **Array Methods:** \`.map()\` to transform lists and \`.filter()\` to remove items.
3. **Destructuring:** Easy extraction of object properties: \`const { name } = user;\`
4. **Spread Operator (\`...\`):** Copies contents of arrays or objects easily.

> **Tip:** You will see the spread operator used extensively in state management to copy existing states before updating specific keys.`,
      km: `# មុខងារ ES6 ក្នុង React
React ពឹងផ្អែកយ៉ាងខ្លាំងលើមុខងារទំនើបៗរបស់ ECMAScript 6 (ES6+)។ ការយល់ដឹងពីមុខងារទាំងនេះគឺចាំបាច់ណាស់ដើម្បីរៀន React បានល្អ។

### មុខងារ ES6 សំខាន់ៗសម្រាប់ React៖
1. **Arrow Functions:** ការប្រកាសអនុគមន៍ខ្លី៖ \`const foo = () => {}\`
2. **វិធីសាស្ត្រ Array:** ប្រើ \`.map()\` ដើម្បីបំប្លែងបញ្ជី និង \`.filter()\` ដើម្បីចម្រាញ់ទិន្នន័យ។
3. **Destructuring:** ទាញយកលក្ខណៈពី Object៖ \`const { name } = user;\`
4. **Spread Operator (\`...\`):** ចម្លងតម្លៃពី Array ឬ Object យ៉ាងលឿន។

> **គន្លឹះ៖** អ្នកនឹងឃើញការប្រើប្រាស់ Spread Operator ជាញឹកញាប់ក្នុងការគ្រប់គ្រង State ដើម្បីចម្លងទិន្នន័យចាស់ទុក មុនពេលធ្វើបច្ចុប្បន្នភាពតម្លៃថ្មី។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ES6Demo() {
    const baseFruits = ["Apple", "Banana"];
    // Spread operator to merge arrays
    const allFruits = [...baseFruits, "Orange", "Mango"];
    // Destructuring array values
    const [first, second] = allFruits;

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>ES6 Spread & Destructuring Demo</h3>
        <p>Destructured First Fruit: <strong>{first}</strong></p>
        <p>Destructured Second Fruit: <strong>{second}</strong></p>
        
        <h4>All Fruits (Spread Merged):</h4>
        <ul>
          {allFruits.map((fruit, idx) => (
            <li key={idx}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ES6Demo />);
</script>`
  },
  {
    id: "react-jsx-intro",
    title: { en: "React JSX Intro", km: "សេចក្តីផ្តើម JSX" },
    content: {
      en: `# React JSX Intro
JSX stands for **JavaScript XML**. It allows us to write HTML-like markup inside JavaScript files without using manual template files or DOM creation commands.

### JSX Code:
\`\`\`jsx
const element = <h1 className="title">Hello JSX</h1>;
\`\`\`

### Pure JavaScript equivalent (What is run behind the scenes):
\`\`\`javascript
const element = React.createElement('h1', { className: 'title' }, 'Hello JSX');
\`\`\`

> **Note:** JSX elements must be closed correctly (e.g. \`<img />\`, \`<br />\`), and you must return a single parent element or a Fragment (\`<></>\`).`,
      km: `# សេចក្តីផ្តើម JSX
JSX តំណាងឱ្យ **JavaScript XML**។ វាអនុញ្ញាតឱ្យយើងសរសេរទម្រង់កូដស្រដៀង HTML នៅក្នុងឯកសារ JavaScript ដោយមិនបាច់បង្កើត DOM elements ដោយដៃឡើយ។

### កូដ JSX៖
\`\`\`jsx
const element = <h1 className="title">Hello JSX</h1>;
\`\`\`

### កូដ JavaScript សុទ្ធ (ដំណើរការពីក្រោយខ្នង)៖
\`\`\`javascript
const element = React.createElement('h1', { className: 'title' }, 'Hello JSX');
\`\`\`

> **សម្គាល់៖** រាល់ Tags របស់ JSX ត្រូវតែបិទឱ្យបានត្រឹមត្រូវ (ឧ. \`<img />\`, \`<br />\`) ហើយត្រូវតែស្ថិតក្រោម Parent element តែមួយ ឬប្រើ Fragment (\`<></>\`)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function JSXIntro() {
    // JSX must return a single wrapper or a fragment
    return (
      <React.Fragment>
        <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '2px dashed #00d8ff', borderRadius: '10px' }}>
          <h3 style={{ color: '#090d16', margin: '0 0 10px 0' }}>JSX Fragment Example</h3>
          <p style={{ margin: 0 }}>This component uses a <strong>React.Fragment</strong> (&lt;&gt;&lt;/&gt;) to wrap multiple HTML elements cleanly!</p>
        </div>
      </React.Fragment>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<JSXIntro />);
</script>`
  },
  {
    id: "react-jsx-expressions",
    title: { en: "React JSX Expressions", km: "កន្សោម Expression ក្នុង JSX" },
    content: {
      en: `# React JSX Expressions
JSX allows you to execute any valid JavaScript expression inside single curly braces \`{}\`. This includes variables, properties, function calls, or mathematical calculations.

### Examples of Expressions:
\`\`\`jsx
<h3>Sum is: {5 + 5}</h3>
<p>User name is: {user.name}</p>
<span>Greeting: {getGreeting(user)}</span>
\`\`\`

> **Note:** You cannot write standard \`if/else\` blocks or \`for\` loops directly inside curly braces. Instead, use ternary operators or array \`.map()\` methods.`,
      km: `# កន្សោម Expression ក្នុង JSX
JSX អនុញ្ញាតឱ្យអ្នកដំណើរការរាល់កន្សោម JavaScript ត្រឹមត្រូវនៅចន្លោះគ្នាបើកបិទ \`{}\`។ នេះរួមបញ្ចូលទាំងការហៅអថេរ លក្ខណៈរបស់ Object ការហៅអនុគមន៍ ឬការគណនាគណិតវិទ្យា។

### ឧទាហរណ៍នៃ Expressions៖
\`\`\`jsx
<h3>ផលបូកគឺ៖ {5 + 5}</h3>
<p>ឈ្មោះអ្នកប្រើប្រាស់គឺ៖ {user.name}</p>
<span>ការស្វាគមន៍៖ {getGreeting(user)}</span>
\`\`\`

> **សម្គាល់៖** អ្នកមិនអាចសរសេរប្រយោគលក្ខខណ្ឌ \`if/else\` ឬរង្វិលជុំ \`for\` នៅក្នុងគ្នាបើកបិទបានឡើយ។ ជំនួសមកវិញ ត្រូវប្រើប្រាស់ Ternary operators ឬវិធីសាស្ត្រ \`.map()\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ExpressionsApp() {
    const user = { firstName: "Sok", lastName: "Dara", age: 25 };
    const formatName = (u) => \`\${u.firstName} \${u.lastName}\`;

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>JSX Expressions in Action</h3>
        <p>Full Name (Function Call): <strong>{formatName(user)}</strong></p>
        <p>Calculation: 10 + 20 = <strong>{10 + 20}</strong></p>
        <p>Age in 5 Years: <strong>{user.age + 5}</strong></p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ExpressionsApp />);
</script>`
  },
  {
    id: "react-jsx-attributes",
    title: { en: "React JSX Attributes", km: "លក្ខណៈ Attribute ក្នុង JSX" },
    content: {
      en: `# React JSX Attributes
JSX uses camelCase attributes instead of standard HTML lowercase attributes. This is because JSX is transpiled into JavaScript, and attributes become object keys.

### Key Class Name Differences:
* Use **\`className\`** instead of \`class\`
* Use **\`htmlFor\`** instead of \`for\`

### Binding attributes dynamically:
You can pass a string literal, or bind dynamically using curly braces:
\`\`\`jsx
const imageSrc = "avatar.png";
const avatar = <img src={imageSrc} className="avatar-img" />;
\`\`\`

> **Pitfall:** If you use a variable, do NOT wrap the curly braces inside quotes (e.g. \`src="{imgVar}"\` is wrong, use \`src={imgVar}\`).`,
      km: `# លក្ខណៈ Attribute ក្នុង JSX
JSX ប្រើប្រាស់លក្ខណៈជា camelCase ជំនួសឱ្យអក្សរតូចទាំងអស់របស់ HTML។ នេះមកពី JSX ត្រូវបំប្លែងទៅជា JavaScript ហើយ Attributes ទាំងនោះនឹងក្លាយជា Keys របស់ Object។

### ភាពខុសគ្នាធំៗ៖
* ប្រើ **\`className\`** ជំនួស \`class\`
* ប្រើ **\`htmlFor\`** ជំនួស \`for\`

### ការភ្ជាប់ Attribute បែបឌីណាមិក៖
អ្នកអាចបញ្ជូនអត្ថបទផ្ទាល់ ឬភ្ជាប់វា dynamically តាមគ្នាបើកបិទ៖
\`\`\`jsx
const imageSrc = "avatar.png";
const avatar = <img src={imageSrc} className="avatar-img" />;
\`\`\`

> **បញ្ហាជួបប្រទះ៖** ប្រសិនបើប្រើប្រាស់អថេរ កុំសរសេរគ្នាបើកបិទនៅក្នុងសញ្ញាសម្រង់ (ឧ. \`src="{imgVar}"\` គឺខុស ត្រូវសរសេរ \`src={imgVar}\`)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function AttributesApp() {
    const imageUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300";
    const customStyle = {
      borderRadius: '12px',
      border: '4px solid #4f46e5',
      width: '100%',
      maxHeight: '150px',
      objectFit: 'cover'
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
        <h3>JSX Attributes & Styling</h3>
        {/* Binding src and style attributes dynamically */}
        <img src={imageUrl} style={customStyle} alt="Abstract Background" />
        <p style={{ fontSize: '12px', color: '#64748b', marginTop: '8px' }}>Image loaded dynamically with style object</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AttributesApp />);
</script>`
  },
  {
    id: "react-jsx-if",
    title: { en: "React JSX If Statements", km: "លក្ខខណ្ឌ If ក្នុង JSX" },
    content: {
      en: `# React JSX If Statements
Because you cannot place standard \`if/else\` statements inside JSX braces, you must evaluate conditional paths differently in React.

### Recommended Patterns:
1. **Ternary Operator (\`condition ? true : false\`):** Perfect for choosing between two elements.
2. **Logical AND (\`condition && element\`):** Perfect for rendering something only when a condition is met.
3. **External evaluation:** Write standard if statements outside the JSX return statement.

> **Tip:** Ternary operators are ideal for toggling text or classes (e.g., \`className={isActive ? 'active' : 'inactive'}\`).`,
      km: `# លក្ខខណ្ឌ If ក្នុង JSX
ដោយសារតែអ្នកមិនអាចសរសេរលក្ខខណ្ឌ \`if/else\` ធម្មតាខាងក្នុងគ្នាបើកបិទរបស់ JSX បាន អ្នកត្រូវប្រើវិធីសាស្ត្រផ្សេងដើម្បីកំណត់លក្ខខណ្ឌបង្ហាញ UI។

### ទម្រង់ណែនាំ៖
1. **Ternary Operator (\`condition ? true : false\`):** ល្អបំផុតសម្រាប់ជ្រើសរើសរវាងកូដពីរ។
2. **Logical AND (\`condition && element\`):** ល្អបំផុតសម្រាប់បង្ហាញកូដលុះត្រាតែលក្ខខណ្ឌពិត។
3. **External Evaluation:** សរសេរលក្ខខណ្ឌ \`if/else\` ធម្មតាខាងក្រៅ JSX (មុនពេល return)។

> **គន្លឹះ៖** Ternary operators ស័ក្តិសមបំផុតសម្រាប់ប្តូរអត្ថបទ ឬ Classes (ឧ. \`className={isActive ? 'active' : 'inactive'}\`)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function AuthPreview() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Conditional Rendering</h3>
        
        {/* Ternary Operator Example */}
        <div style={{ margin: '15px 0' }}>
          {isLoggedIn ? (
            <div style={{ padding: '12px', background: '#dcfce7', color: '#15803d', borderRadius: '8px' }}>
              Welcome back, Premium Member!
            </div>
          ) : (
            <div style={{ padding: '12px', background: '#fee2e2', color: '#b91c1c', borderRadius: '8px' }}>
              Please sign in to access premium content.
            </div>
          )}
        </div>

        {/* Logical AND Example */}
        {isLoggedIn && <button style={{ marginRight: '8px', padding: '6px 12px' }}>Go to Profile</button>}

        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AuthPreview />);
</script>`
  },
  {
    id: "react-components",
    title: { en: "React Components", km: "សមាសភាគ Components" },
    content: {
      en: `# React Components
Components are independent, reusable pieces of code that act as UI factories. Instead of building one massive HTML page, we split our app into tiny, isolated modules.

### Function Components:
Function components are simply JavaScript functions that accept a props object and return JSX elements:
\`\`\`jsx
function Profile() {
  return <h3>User Profile</h3>;
}
\`\`\`

> **Crucial Rule:** React component names **MUST** start with an uppercase letter! If a component name starts with a lowercase letter, React treats it as a standard HTML tag (like \`<div>\` or \`<span>\`).`,
      km: `# សមាសភាគ Components
សមាសភាគ (Components) គឺជាផ្នែកកូដឯករាជ្យ និងអាចប្រើឡើងវិញបានដែលដើរតួជាអ្នកផលិត UI។ ជំនួសឱ្យការកសាងគេហទំព័រធំតែមួយ យើងបំបែកវាជាបំណែកតូចៗ និងដាច់ដោយឡែកពីគ្នា។

### Function Components៖
វាគ្រាន់តែជាអនុគមន៍ JavaScript ធម្មតាដែលទទួល Props និងផ្តល់ត្រឡប់មកវិញនូវកូដ JSX៖
\`\`\`jsx
function Profile() {
  return <h3>User Profile</h3>;
}
\`\`\`

> **វិធានសំខាន់៖** ឈ្មោះសមាសភាគរបស់ React **ត្រូវតែ** ផ្ដើមដោយអក្សរធំ! ប្រសិនបើផ្ដើមដោយអក្សរតូច React នឹងចាត់ទុកវាជា HTML Tag ធម្មតាវិញ (ដូចជា \`<div>\` ឬ \`<span>\`)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Child Component
  function Header() {
    return <h2 style={{ color: '#4f46e5', margin: '0 0 10px 0' }}>My Workspace</h2>;
  }

  // Another Child Component
  function Footer() {
    return <p style={{ color: '#94a3b8', fontSize: '11px', mt: '20px' }}>© 2026 Sandbox Environment</p>;
  }

  // Parent Component
  function Dashboard() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <Header />
        <p>This is the main dashboard, which renders nested reusable components.</p>
        <Footer />
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Dashboard />);
</script>`
  },
  {
    id: "react-class",
    title: { en: "React Class", km: "សមាសភាគ Class Components" },
    content: {
      en: `# React Class
Before React 16.8 (Hooks), components with state or lifecycle methods had to be written as ES6 Classes extending \`React.Component\`.

> **Note:** Today, Modern React strongly favors **Functional Components + Hooks**. We study Class components because they are still widespread in legacy and enterprise codebases.

### Class Component Syntax:
\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
\`\`\`

* Class components must contain a \`render()\` method returning JSX.
* Props are accessed using \`this.props\`.`,
      km: `# សមាសភាគ Class Components
មុនពេលវត្តមាន React 16.8 (Hooks) រាល់សមាសភាគដែលមានលក្ខណៈ State ឬវិធីសាស្ត្រជីវិត (Lifecycle) ត្រូវតែសរសេរជា ES6 Classes ដែលពង្រីកពី \`React.Component\`។

> **សម្គាល់៖** បច្ចុប្បន្ន React ទំនើបគាំទ្រខ្លាំងលើ **Functional Components + Hooks**។ យើងសិក្សាពី Class Components ពីព្រោះវាមានច្រើននៅក្នុងគម្រោងចាស់ៗ និងកូដសហគ្រាស។

### វាក្យសម្ពន្ធ Class Component៖
\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
\`\`\`

* Class components ត្រូវតែមានវិធីសាស្ត្រ \`render()\` ដើម្បីបញ្ជូនកូដ JSX។
* Props ត្រូវបានហៅតាមរយៈ \`this.props\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Legacy Class Component style
  class CounterClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
          <h3>Class Component (Legacy Style)</h3>
          <p>Subtitle: <em>{this.props.subtitle}</em></p>
          <p>Click Counter: <strong>{this.state.count}</strong></p>
          <button 
            onClick={() => this.setState({ count: this.state.count + 1 })}
            style={{ padding: '6px 12px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Increment State
          </button>
        </div>
      );
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CounterClass subtitle="Studying class states and properties" />);
</script>`
  },
  {
    id: "react-props",
    title: { en: "React Props", km: "ការប្រើប្រាស់ Props" },
    content: {
      en: `# React Props
Props stand for **properties**. They are read-only objects passed from a parent component down to child components, much like HTML tag attributes.

### Passing Props:
\`\`\`jsx
<UserCard name="Dara" role="Developer" />
\`\`\`

### Accessing Props inside Child:
\`\`\`jsx
function UserCard(props) {
  return <p>{props.name} is a {props.role}</p>;
}
\`\`\`

> **Crucial Rule:** Props are strictly **read-only** (immutable). A child component must never attempt to modify the props it receives!`,
      km: `# ការប្រើប្រាស់ Props
Props តំណាងឱ្យ **properties** (លក្ខណៈ)។ ពួកវាជា Objects សម្រាប់តែអាន (Read-only) ដែលត្រូវបានបញ្ជូនពីសមាសភាគមេ (Parent) ទៅកាន់សមាសភាគកូន (Child) ស្រដៀងនឹង Attributes របស់ HTML Tag ដែរ។

### ការបញ្ជូន Props៖
\`\`\`jsx
<UserCard name="Dara" role="Developer" />
\`\`\`

### ការប្រើប្រាស់ Props ក្នុងសមាសភាគកូន៖
\`\`\`jsx
function UserCard(props) {
  return <p>{props.name} is a {props.role}</p>;
}
\`\`\`

> **វិធានសំខាន់៖** Props គឺសម្រាប់តែអានប៉ុណ្ណោះ (មិនអាចកែប្រែបានទេ)។ សមាសភាគកូនមិនត្រូវកែប្រែតម្លៃ Props ដែលទទួលបានពីម៉ែឪរបស់វាជាដាច់ខាត!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Child component receiving props
  function WelcomeBanner(props) {
    return (
      <div style={{
        padding: '15px',
        backgroundColor: props.bgColor || '#cbd5e1',
        color: props.textColor || '#1e293b',
        borderRadius: '8px',
        marginBottom: '10px'
      }}>
        <h4>User: {props.username}</h4>
        <p style={{ margin: 0 }}>Role: {props.role}</p>
      </div>
    );
  }

  // Parent component
  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h3>Passing Dynamic Properties (Props)</h3>
        <WelcomeBanner username="Sok Dara" role="System Administrator" bgColor="#dbeafe" textColor="#1e40af" />
        <WelcomeBanner username="Chea Mary" role="UI Designer" bgColor="#fce7f3" textColor="#9d174d" />
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "react-props-destructure",
    title: { en: "React Props Destructuring", km: "ការបំបែក Props (Destructuring)" },
    content: {
      en: `# React Props Destructuring
Instead of using \`props.name\` or \`props.role\` everywhere, you can destructure properties directly in the function argument block. This makes your component code much cleaner and easier to read.

### Standard approach:
\`\`\`javascript
function User(props) {
  return <h1>{props.name}</h1>;
}
\`\`\`

### Destructured approach:
\`\`\`javascript
function User({ name, age }) {
  return <h1>{name} is {age}</h1>;
}
\`\`\`

> **Tip:** Destructuring also makes it super easy to set default values directly in the parameters: \`({ name = "Guest" })\`.`,
      km: `# ការបំបែក Props (Destructuring)
ជំនួសឱ្យការសរសេរ \`props.name\` ឬ \`props.role\` នៅគ្រប់កន្លែង អ្នកអាចបំបែកលក្ខណៈ (Destructure) ផ្ទាល់នៅក្នុងប៉ារ៉ាម៉ែត្រនៃអនុគមន៍បាន។ វាជួយឱ្យកូដរបស់អ្នកស្អាត និងងាយស្រួលអាន។

### របៀបធម្មតា៖
\`\`\`javascript
function User(props) {
  return <h1>{props.name}</h1>;
}
\`\`\`

### របៀបប្រើ Destructuring៖
\`\`\`javascript
function User({ name, age }) {
  return <h1>{name} is {age}</h1>;
}
\`\`\`

> **គន្លឹះ៖** Destructuring ក៏អនុញ្ញាតឱ្យអ្នកកំណត់តម្លៃលំនាំដើម (Default values) យ៉ាងងាយស្រួលនៅក្នុងប៉ារ៉ាម៉ែត្រ៖ \`({ name = "Guest" })\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Child component using ES6 destructuring directly inside parameter brackets
  function ProfileCard({ name, rating = 5, active = false }) {
    return (
      <div style={{
        padding: '16px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        backgroundColor: active ? '#f0fdf4' : '#fff',
        marginBottom: '10px'
      }}>
        <h4 style={{ margin: '0 0 5px 0' }}>Name: {name}</h4>
        <div>Rating: {"⭐".repeat(rating)}</div>
        <div style={{ fontSize: '12px', color: active ? 'green' : 'gray', marginTop: '5px' }}>
          Status: {active ? "Active Now" : "Offline"}
        </div>
      </div>
    );
  }

  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h3>Props Destructuring with Defaults</h3>
        <ProfileCard name="Dara Sok" rating={4} active={true} />
        {/* rating and active fallback to default parameters */}
        <ProfileCard name="Chantrea Chea" />
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  }
];
