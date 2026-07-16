import { Lesson } from '../types';

export const reactLessonsPart4: Lesson[] = [
  {
    id: "react-hooks-intro",
    title: { en: "What is Hooks?", km: "តើ Hooks គឺជាអ្វី?" },
    content: {
      en: `# What is Hooks?
Introduced in React 16.8, **Hooks** are special built-in JavaScript functions that allow functional components to use states, lifecycle features, and other side-effects without writing legacy class-based components.

### Core Rules of Hooks:
1. **Call them at the very top level:** Never call Hooks inside loops, nested conditions, or nested helper functions.
2. **Only call from React functions:** Call Hooks exclusively inside React functional components or custom hooks.

> **Tip:** In this section, we will build a single continuous running **Task Manager** application, incrementally adding hooks to see how they compose together to solve real-world problems!`,
      km: `# តើ Hooks គឺជាអ្វី?
ត្រូវបានណែនាំក្នុង React 16.8 **Hooks** គឺជាអនុគមន៍ JavaScript ពិសេសដែលអនុញ្ញាតឱ្យ Functional Component អាចគ្រប់គ្រង State, ដំណើរការជីវិត (Lifecycle) និងផលប៉ះពាល់ផ្សេងៗដោយមិនបាច់សរសេរ Class Components ឡើយ។

### វិធានចម្បងក្នុងការប្រើប្រាស់ Hooks៖
1. **ហៅវានៅកម្រិតកំពូលបង្អស់៖** មិនត្រូវហៅ Hooks នៅក្នុងរង្វិលជុំ (Loops) លក្ខខណ្ឌ (Conditions) ឬអនុគមន៍ត្រួតគ្នាឡើយ។
2. **ហៅវាពីសមាសភាគ React តែប៉ុណ្ណោះ៖** ហៅ Hooks នៅក្នុង Functional Components ឬ Custom Hooks ផ្ទាល់ខ្លួនប៉ុណ្ណោះ។

> **គន្លឹះ៖** នៅក្នុងផ្នែកនេះ យើងនឹងបង្កើតកម្មវិធី **គ្រប់គ្រងកិច្ចការងារ (Task Manager)** តែមួយគត់ដោយបន្ថែមមុខងារ Hooks ម្ដងមួយជំហានៗ ដើម្បីយល់ច្បាស់ពីរបៀបបញ្ចូលគ្នានៃ Hooks ទាំងអស់ក្នុងកម្មវិធីពិតប្រាកដ!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 1: Basic Static Layout
  function TaskApp() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        <p style={{ color: '#475569', fontSize: '14px' }}>Welcome! This is the static blueprint of our Task Manager application. Next, we will implement interactive states.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-usestate",
    title: { en: "React useState", km: "React useState" },
    content: {
      en: `# React useState
The \`useState\` hook is the foundational block for managing state values. It accepts an initial value and returns an array with the active state variable and an updater function.

\`\`\`javascript
const [value, setValue] = useState(initialValue);
\`\`\`

### In our Task Manager:
We now add interactive state tracking. We create an array of tasks and a text input state to dynamically insert new entries into our manager list.

> **Tip:** When updating state arrays, never use \`push()\` because it mutates the existing array. Always use the spread operator \`[...prev, newItem]\` to set a fresh array reference.`,
      km: `# React useState
មុខងារ \`useState\` គឺជាគ្រឹះចម្បងសម្រាប់គ្រប់គ្រងតម្លៃទិន្នន័យ។ វាទទួលយកតម្លៃចាប់ផ្តើម (Initial value) ហើយផ្តល់មកវិញនូវតម្លៃអថេរ និងអនុគមន៍សម្រាប់ធ្វើបច្ចុប្បន្នភាពតម្លៃនោះ។

\`\`\`javascript
const [value, setValue] = useState(initialValue);
\`\`\`

### នៅក្នុងកម្មវិធី Task Manager៖
យើងនឹងបន្ថែមសកម្មភាពអន្តរកម្ម។ យើងបង្កើត State សម្រាប់រក្សាទុកបញ្ជីកិច្ចការងារ (Tasks) និង State មួយទៀតសម្រាប់តម្លៃអក្សរដែលសរសេរក្នុង Input ដើម្បីបន្ថែមធាតុថ្មី។

> **គន្លឹះ៖** នៅពេលធ្វើបច្ចុប្បន្នភាព State ជា Array មិនត្រូវប្រើ \`push()\` ឡើយព្រោះវាកែប្រែតម្លៃចាស់ផ្ទាល់។ ត្រូវប្រើ Spread operator \`[...prev, newItem]\` ដើម្បីផ្តល់ជា Array ថ្មីស្រឡាង។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 2: Adding Interactive useState
  function TaskApp() {
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn core hooks rules", completed: false }
    ]);
    const [inputText, setInputText] = React.useState("");

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      
      const newTask = {
        id: Date.now(),
        text: inputText,
        completed: false
      };
      
      setTasks([...tasks, newTask]);
      setInputText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        {/* Input Form */}
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        {/* Task Items rendering */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#64748b' : '#0f172a'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-useeffect",
    title: { en: "React useEffect", km: "React useEffect" },
    content: {
      en: `# React useEffect
The \`useEffect\` hook allows functional components to perform side-effects (such as fetching APIs, subscribing to handlers, or saving data to local storage) after rendering.

### ⚠️ Demystifying the Dependency Array:
How \`useEffect\` behaves depends entirely on its second argument:
1. **No array (\`useEffect(() => {})\`):** Runs on **every single render** (mount & update). Can easily lead to infinite loop performance disasters if you set state inside!
2. **Empty array (\`useEffect(() => {}, [])\`):** Runs **only once** on mounting, equivalent to \`componentDidMount\`.
3. **Array with dependencies (\`useEffect(() => {}, [value])\`):** Runs on mount and **only when target variable updates**.

### In our Task Manager:
We now add local storage caching! We use a \`useEffect\` dependency block that runs automatically whenever the \`tasks\` array shifts, serializing the task payload inside the browser database.`,
      km: `# React useEffect
មុខងារ \`useEffect\` អនុញ្ញាតឱ្យសមាសភាគធ្វើកិច្ចការក្រៅប្រព័ន្ធ (Side-effects) ដូចជា ការទាញយកទិន្នន័យពី API, ការចុះឈ្មោះព្រឹត្តិការណ៍ផ្សេងៗ ឬការរក្សាទុកទិន្នន័យក្នុង Browser Local Storage។

### ⚠️ ការយល់ដឹងពី Dependency Array៖
ឥរិយាបថរបស់ \`useEffect\` ពឹងផ្អែកលើអាគុយម៉ង់ទីពីររបស់វា៖
1. **គ្មាន Array (\`useEffect(() => {})\`)៖** ដំណើរការ**រាល់ពេលដែល Render កូដ**។ អាចបង្កឱ្យមានបញ្ហាវិលជុំមិនចេះចប់ (Infinite loops) ប្រសិនបើអ្នកផ្លាស់ប្តូរ State ខាងក្នុង!
2. **Array ទទេ (\`useEffect(() => {}, [])\`)៖** ដំណើរការ**តែម្ដងគត់**នៅពេលសមាសភាគបើកដំបូង (Mount)។
3. **មានអថេរក្នុង Array (\`useEffect(() => {}, [value])\`)៖** ដំណើរការតែនៅពេលដែលអថេរនោះផ្លាស់ប្តូរតម្លៃ។

### នៅក្នុងកម្មវិធី Task Manager៖
យើងនឹងបន្ថែមការរក្សាទុកទិន្នន័យ (Caching) ក្នុងម៉ាស៊ីន! យើងប្រើ \`useEffect\` ដើម្បីឱ្យវារក្សាទុកទិន្នន័យក្នុង Local Storage ដោយស្វ័យប្រវត្តនៅពេលបញ្ជី \`tasks\` មានការផ្លាស់ប្តូរ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 3: Local Storage sync with useEffect
  function TaskApp() {
    // Lazy initial state: load from localStorage if exists
    const [tasks, setTasks] = React.useState(() => {
      const saved = localStorage.getItem("running-tasks");
      return saved ? JSON.parse(saved) : [
        { id: 1, text: "Install React dependencies", completed: true },
        { id: 2, text: "Learn core hooks rules", completed: false }
      ];
    });
    const [inputText, setInputText] = React.useState("");

    // Hook runs automatically whenever 'tasks' changes!
    React.useEffect(() => {
      localStorage.setItem("running-tasks", JSON.stringify(tasks));
      console.log("Tasks serialized to localstorage successfully.");
    }, [tasks]);

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      const newTask = { id: Date.now(), text: inputText, completed: false };
      setTasks([...tasks, newTask]);
      setInputText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#64748b' : '#0f172a'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>
        <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '10px', textAlign: 'center' }}>
          🔄 Automatically backed up to local storage! Try reloading.
        </span>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-usecontext",
    title: { en: "React useContext", km: "React useContext" },
    content: {
      en: `# React useContext
The \`useContext\` hook is used to share states or configurations (like active visual themes, user sessions, or localization setups) globally down a deep component tree without passing props manually down every single intermediate layer (prop-drilling).

### Conceptual Workflow:
1. Create a Context: \`const MyContext = React.createContext();\`
2. Wrap your layout with a Provider: \`<MyContext.Provider value={state}>...\`
3. Retrieve state anywhere in descendants: \`const state = useContext(MyContext);\`

### In our Task Manager:
We introduce a global **ThemeContext** wrapping our Task Manager, letting child lists and input forms query the active theme color seamlessly!`,
      km: `# React useContext
មុខងារ \`useContext\` ត្រូវបានប្រើដើម្បីចែករំលែកទិន្នន័យ (ដូចជា រចនាបថពណ៌ កម្មវិធីប្រើប្រាស់ ឬភាសា) ទៅកាន់គ្រប់ផ្នែកទាំងអស់នៃសមាសភាគ ដោយមិនចាំបាច់បញ្ជូន Props បន្តបន្ទាប់គ្នាពីលើចុះក្រោមឡើយ (ជួយដោះស្រាយបញ្ហា Prop-drilling)។

### លំហូរការងារ៖
1. បង្កើត Context៖ \`const MyContext = React.createContext();\`
2. រុំសមាសភាគមេជាមួយ Provider៖ \`<MyContext.Provider value={state}>...\`
3. ហៅប្រើប្រាស់នៅផ្នែកកូន៖ \`const state = useContext(MyContext);\`

### នៅក្នុងកម្មវិធី Task Manager៖
យើងនឹងបង្កើត **ThemeContext** ជាសកលដើម្បីគ្រប់គ្រងពណ៌ (រចនាបថ) នៃកម្មវិធីគ្រប់គ្រងកិច្ចការងារ ដោយអនុញ្ញាតឱ្យសមាសភាគកូនៗទាំងអស់ទាញយកពណ៌បានដោយស្វ័យប្រវត្ត!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 4: Adding Context Provider and useContext
  const ThemeContext = React.createContext();

  function TaskApp() {
    const [theme, setTheme] = React.useState("light");
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn core hooks rules", completed: false }
    ]);
    const [inputText, setInputText] = React.useState("");

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      const newTask = { id: Date.now(), text: inputText, completed: false };
      setTasks([...tasks, newTask]);
      setInputText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    // Shared context object
    const themeValue = {
      mode: theme,
      toggleMode: () => setTheme(prev => prev === 'light' ? 'dark' : 'light'),
      colors: {
        bg: theme === 'light' ? '#f8fafc' : '#0f172a',
        card: theme === 'light' ? '#ffffff' : '#1e293b',
        text: theme === 'light' ? '#0f172a' : '#f8fafc'
      }
    };

    return (
      <ThemeContext.Provider value={themeValue}>
        <div style={{ padding: '20px', transition: 'all 0.3s' }}>
          <TaskManagerView 
            tasks={tasks}
            inputText={inputText}
            setInputText={setInputText}
            onAddTask={handleAddTask}
            onToggleTask={toggleTask}
          />
        </div>
      </ThemeContext.Provider>
    );
  }

  // Nested component reading theme configuration via useContext Hook
  function TaskManagerView({ tasks, inputText, setInputText, onAddTask, onToggleTask }) {
    const theme = React.useContext(ThemeContext);

    return (
      <div style={{
        fontFamily: 'sans-serif',
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        backgroundColor: theme.colors.card,
        color: theme.colors.text,
        borderRadius: '12px',
        border: '1px solid #cbd5e1',
        transition: 'all 0.3s'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2 style={{ margin: 0 }}>📋 Task Manager</h2>
          <button 
            onClick={theme.toggleMode}
            style={{ padding: '4px 10px', borderRadius: '20px', cursor: 'pointer', background: theme.mode === 'light' ? '#0f172a' : '#f8fafc', color: theme.mode === 'light' ? '#fff' : '#000', border: 'none' }}
          >
            {theme.mode === 'light' ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>

        <form onSubmit={onAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1', backgroundColor: theme.colors.bg, color: theme.colors.text }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => onToggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? (theme.mode === 'light' ? '#f0fdf4' : '#14532d') : theme.colors.bg,
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#94a3b8' : theme.colors.text
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-useref",
    title: { en: "React useRef", km: "React useRef" },
    content: {
      en: `# React useRef
The \`useRef\` hook performs two separate vital functions:
1. **Targeting DOM elements:** Keeps a direct connection to actual DOM nodes (like focusing a text area or scrolling an element).
2. **Persistent state values:** Stores values that persist across renders but **do NOT trigger a re-render** when modified.

\`\`\`javascript
const inputRef = useRef(null);
// Target an element: <input ref={inputRef} />
// Trigger action: inputRef.current.focus();
\`\`\`

### In our Task Manager:
We want the add-task text input to receive focus automatically when the workspace is mounted, or when a user clicks a "Focus Input" helper shortcut!`,
      km: `# React useRef
មុខងារ \`useRef\` បំពេញតួនាទីសំខាន់ពីរ៖
1. **គ្រប់គ្រង DOM Element៖** រក្សាការតភ្ជាប់ផ្ទាល់ទៅនឹង HTML element ពិតប្រាកដ (ដូចជាការ Focus លើ Input)។
2. **រក្សាទុកតម្លៃ Persistent៖** រក្សាទុកតម្លៃដែលមិនបាត់បង់ពេលធ្វើការ Render ឡើងវិញ ប៉ុន្តែវាក៏**មិនបង្កការ Render ថ្មី** នៅពេលផ្លាស់ប្តូរតម្លៃនោះដែរ។

\`\`\`javascript
const inputRef = useRef(null);
// ភ្ជាប់ទៅ element៖ <input ref={inputRef} />
// បញ្ជាឱ្យធ្វើការ៖ inputRef.current.focus();
\`\`\`

### នៅក្នុងកម្មវិធី Task Manager៖
យើងចង់ឱ្យកន្លែងវាយអក្សរ (Input Field) ទទួលបាន Focus (លេចទស្សន៍ទ្រនិចវាយអក្សរ) ដោយស្វ័យប្រវត្តនៅពេលបើកកម្មវិធី ឬនៅពេលចុចប៊ូតុងកាត់!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 5: DOM Focusing using useRef
  function TaskApp() {
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn core hooks rules", completed: false }
    ]);
    const [inputText, setInputText] = React.useState("");
    
    // 1. Declare the reference node pointer
    const inputFieldRef = React.useRef(null);

    // 2. Focus input automatically on mount
    React.useEffect(() => {
      inputFieldRef.current.focus();
    }, []);

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      const newTask = { id: Date.now(), text: inputText, completed: false };
      setTasks([...tasks, newTask]);
      setInputText("");
      
      // Re-focus input after adding item
      inputFieldRef.current.focus();
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          {/* 3. Link ref property to input node element */}
          <input 
            ref={inputFieldRef}
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type task details..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '2px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => inputFieldRef.current.focus()}
          style={{ width: '100%', marginTop: '10px', padding: '6px', border: '1px dashed #4f46e5', background: 'transparent', color: '#4f46e5', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }}
        >
          ⚡ Direct Input Focus via Ref
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-usereducer",
    title: { en: "React useReducer", km: "React useReducer" },
    content: {
      en: `# React useReducer
The \`useReducer\` hook is an alternative to \`useState\` used to manage complex, multi-action states. It works by routing state changes through a single **reducer function** via dispatched events, similar to Redux state architectures.

\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

### In our Task Manager:
Rather than scattering custom addition, toggling, and removal handlers across our application code, we consolidate all state changes into a unified reducer function triggered by clean, explicit actions: \`ADD\`, \`TOGGLE\`, or \`CLEAR\`.`,
      km: `# React useReducer
មុខងារ \`useReducer\` គឺជាជម្រើសជំនួសឱ្យ \`useState\` សម្រាប់គ្រប់គ្រង State ដែលមានសកម្មភាពច្រើន និងស្មុគស្មាញ។ វាដំណើរការដោយការបញ្ជូនសកម្មភាពនានាតាមរយៈ **Reducer function** រួចធ្វើបច្ចុប្បន្នភាព State (ស្រដៀងនឹងប្រព័ន្ធគ្រប់គ្រង Redux)។

\`\`\`javascript
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

### នៅក្នុងកម្មវិធី Task Manager៖
ជំនួសឱ្យការបង្កើតអនុគមន៍ដាច់ៗពីគ្នាសម្រាប់ បន្ថែម ប្ដូរសភាព ឬលុបកិច្ចការងារ យើងនឹងប្រមូលផ្ដុំសកម្មភាពទាំងអស់ទៅក្នុង Reducer តែមួយដែលគ្រប់គ្រងដោយព្រឹត្តិការណ៍ជាក់លាក់៖ \`ADD\`, \`TOGGLE\`, ឬ \`CLEAR\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 6: Complex State Reducer via useReducer
  const initialTasks = [
    { id: 1, text: "Install React dependencies", completed: true },
    { id: 2, text: "Learn core hooks rules", completed: false }
  ];

  // 1. Unified state transition reducer
  function tasksReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [...state, { id: Date.now(), text: action.payload, completed: false }];
      case 'TOGGLE':
        return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
      case 'CLEAR_COMPLETED':
        return state.filter(task => !task.completed);
      default:
        return state;
    }
  }

  function TaskApp() {
    // 2. Setup useReducer hook
    const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);
    const [inputText, setInputText] = React.useState("");

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      dispatch({ type: 'ADD', payload: inputText });
      setInputText("");
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add task via reducer..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => dispatch({ type: 'TOGGLE', payload: task.id })}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
          style={{ width: '100%', marginTop: '10px', padding: '8px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          🧹 Clear Completed Tasks
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-usecallback",
    title: { en: "React useCallback", km: "React useCallback" },
    content: {
      en: `# React useCallback
The \`useCallback\` hook is used to optimize performance. It returns a **memoized** version of a callback function that only changes if one of its dependency values updates.

### Why do we need it?
In React, when a parent component re-renders, all child components and inline functions are recreated from scratch. If you pass callback functions as props down to child components, they might re-render unnecessarily because function references change. Wrap them in \`useCallback\` to preserve their identity!

### In our Task Manager:
We memoize the toggle task callback, ensuring that our task list container behaves cleanly and avoids wasteful re-render cycles!`,
      km: `# React useCallback
មុខងារ \`useCallback\` ត្រូវបានប្រើដើម្បីបង្កើនល្បឿនដំណើរការកម្មវិធី។ វាផ្តល់មកវិញនូវអនុគមន៍ប្រភេទ **Memoized** (ចងចាំទុក) ដែលផ្លាស់ប្តូរតែនៅពេលដែលអថេរក្នុង Dependency array មានការប្រែប្រួលតម្លៃ។

### ហេតុអ្វីចាំបាច់ត្រូវប្រើ?
នៅក្នុង React រាល់ពេលសមាសភាគមេ Render ឡើងវិញ រាល់អនុគមន៍ខាងក្នុងនឹងត្រូវសាងសង់ឡើងវិញជាថ្មីពីបាតដៃទទេ។ ប្រសិនបើអ្នកបញ្ជូនអនុគមន៍ទាំងនោះទៅកាន់សមាសភាគកូន សមាសភាគកូននឹងគិតថា Props ផ្លាស់ប្តូរ រួចធ្វើការ Render ឡើងវិញដោយឥតប្រយោជន៍។ ហៅ \`useCallback\` ដើម្បីរក្សាទុកយោងអនុគមន៍នោះកុំឱ្យផ្លាស់ប្តូរ!

### នៅក្នុងកម្មវិធី Task Manager៖
យើងនឹងធ្វើការចងចាំ (Memoize) អនុគមន៍ប្តូរសភាពកិច្ចការ (Toggle task callback) ដើម្បីកុំឱ្យសមាសភាគបញ្ជីកិច្ចការរៀបចំឡើងវិញដោយឥតប្រយោជន៍!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 7: Memoizing Toggle callback using useCallback
  // Wrapping sub-component with React.memo to prevent unnecessary updates
  const TaskItem = React.memo(({ task, onToggle }) => {
    console.log(\`Rendering TaskItem: \${task.text}\`);
    return (
      <li 
        onClick={() => onToggle(task.id)}
        style={{
          padding: '8px 12px',
          backgroundColor: task.completed ? '#f0fdf4' : '#fff',
          border: '1px solid #cbd5e1',
          borderRadius: '6px',
          marginBottom: '6px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{task.text}</span>
        <span>{task.completed ? "✓" : "⏳"}</span>
      </li>
    );
  });

  function TaskApp() {
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn core hooks rules", completed: false }
    ]);
    const [count, setCount] = React.useState(0); // Independent counter to trigger parent re-renders

    // useCallback prevents recreation of toggleTask unless 'tasks' array updates
    const toggleTask = React.useCallback((id) => {
      setTasks(prevTasks => prevTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    }, []);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 10px 0' }}>📋 Hook Task Manager</h2>
        
        {/* Independent state: check console to see TaskItems do NOT re-render on count click! */}
        <div style={{ margin: '15px 0', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
          <p style={{ fontSize: '13px' }}>Parent Render Trigger Count: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)} style={{ padding: '6px 12px', cursor: 'pointer' }}>Trigger Parent Render</button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} />
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-usememo",
    title: { en: "React useMemo", km: "React useMemo" },
    content: {
      en: `# React useMemo
The \`useMemo\` hook returns a **memoized value**, avoiding heavy/expensive re-computations during layout renders. It only recalculates the computed value if one of its dependency parameters updates.

\`\`\`javascript
const cachedVal = useMemo(() => calculateStats(data), [data]);
\`\`\`

### Difference between \`useCallback\` and \`useMemo\`:
* \`useCallback\` caches the **function definition itself**.
* \`useMemo\` caches the **returned result value** of an execution.

### In our Task Manager:
We compute complex task analytics (total count, finished tasks, progress percentage). We wrap this logic in \`useMemo\` to prevent recalculating on unrelated parent renders!`,
      km: `# React useMemo
មុខងារ \`useMemo\` ផ្ដល់ត្រឡប់មកវិញនូវ **តម្លៃដែលបានរក្សាទុក (Memoized value)** ដោយចៀសវាងការគណនាស្មុគស្មាញឡើងវិញនៅរាល់ពេល Render។ វានឹងគណនាតម្លៃឡើងវិញលុះត្រាតែអថេរនៅក្នុង Dependency array មានការផ្លាស់ប្តូរ។

\`\`\`javascript
const cachedVal = useMemo(() => calculateStats(data), [data]);
\`\`\`

### ភាពខុសគ្នារវាង \`useCallback\` និង \`useMemo\`៖
* \`useCallback\` រក្សាទុក **រូបរាងអនុគមន៍ (Function definition)**។
* \`useMemo\` រក្សាទុក **លទ្ធផលចុងក្រោយ (Returned value)** នៃការគណនា។

### នៅក្នុងកម្មវិធី Task Manager៖
យើងគណនាស្ថិតិវិភាគ (ចំនួនកិច្ចការសរុប, កិច្ចការដែលរួចរាល់ និងភាគរយដំណើរការ)។ យើងរុំឡូហ្សិកនេះជាមួយ \`useMemo\` ដើម្បីកុំឱ្យវាគណនាសារជាថ្មីនៅពេលមាន Render ផ្នែកផ្សេងៗដែលមិនពាក់ព័ន្ធ!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 8: Memoizing analytics using useMemo
  function TaskApp() {
    const [tasks, setTasks] = React.useState([
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn core hooks rules", completed: false },
      { id: 3, text: "Examine useMemo calculations", completed: false }
    ]);
    const [inputText, setInputText] = React.useState("");

    // useMemo caches task statistics calculation, runs only when 'tasks' updates!
    const stats = React.useMemo(() => {
      console.log("Re-calculating task completion statistics...");
      const total = tasks.length;
      const completed = tasks.filter(t => t.completed).length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
      return { total, completed, percent };
    }, [tasks]);

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
      setInputText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        {/* Memoized Statistics Dashboard */}
        <div style={{ padding: '12px', backgroundColor: '#e0f2fe', borderRadius: '8px', marginBottom: '15px' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#0369a1' }}>📊 Performance Stats</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#075985' }}>
            <span>Total Tasks: <strong>{stats.total}</strong></span>
            <span>Completed: <strong>{stats.completed}</strong></span>
            <span>Progress: <strong>{stats.percent}%</strong></span>
          </div>
        </div>

        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add a new task..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  },
  {
    id: "react-custom-hooks",
    title: { en: "React Custom Hooks", km: "React Custom Hooks" },
    content: {
      en: `# React Custom Hooks
Custom hooks allow you to extract component state management logic into standard, highly reusable helper functions. A custom hook is simply a JavaScript function whose name starts with **\`use\`** and which calls other React Hooks inside it.

### Example:
\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return [state, setState];
}
\`\`\`

### In our Task Manager:
We modularize our application! We extract all local storage read and write tasks out of the main layout, storing them inside a single elegant custom hook: \`useTaskPersistence\`.`,
      km: `# React Custom Hooks
Custom Hooks អនុញ្ញាតឱ្យអ្នកដកស្រង់លំហូរការងារ និងឡូហ្សិករបស់ State ចេញពីសមាសភាគទៅជាអនុគមន៍ដាច់ដោយឡែកដែលអាចប្រើប្រាស់ឡើងវិញបានយ៉ាងទូលំទូលាយ។ Custom hook គ្រាន់តែជាអនុគមន៍ JavaScript ធម្មតាដែលផ្ដើមដោយពាក្យ **\`use\`** និងមានការហៅ Hooks ផ្សេងទៀតនៅក្នុងនោះ។

### ឧទាហរណ៍៖
\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  
  return [state, setState];
}
\`\`\`

### នៅក្នុងកម្មវិធី Task Manager៖
យើងនឹងធ្វើឱ្យកម្មវិធីរបស់យើងកាន់តែមានសណ្តាប់ធ្នាប់! យើងដកស្រង់ឡូហ្សិកនៃការរក្សាទុកទិន្នន័យ (Local Storage sync) ចេញពីសមាសភាគចម្បង រួចរក្សាវាទុកក្នុង Custom Hook មួយឈ្មោះថា \`useTaskPersistence\`។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Task Manager Step 9: Custom Persisting Hook useTaskPersistence
  function useTaskPersistence(key, defaultTasks) {
    const [tasks, setTasks] = React.useState(() => {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultTasks;
    });

    React.useEffect(() => {
      localStorage.setItem(key, JSON.stringify(tasks));
    }, [key, tasks]);

    return [tasks, setTasks];
  }

  function TaskApp() {
    // Relying on custom storage hook!
    const [tasks, setTasks] = useTaskPersistence("custom-hook-tasks", [
      { id: 1, text: "Install React dependencies", completed: true },
      { id: 2, text: "Learn custom hooks patterns", completed: false }
    ]);
    const [inputText, setInputText] = React.useState("");

    const handleAddTask = (e) => {
      e.preventDefault();
      if (!inputText.trim()) return;
      setTasks([...tasks, { id: Date.now(), text: inputText, completed: false }]);
      setInputText("");
    };

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ color: '#0f172a', margin: '0 0 15px 0' }}>📋 Hook Task Manager</h2>
        
        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Clean Custom Hooks app..."
            style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button type="submit" style={{ padding: '8px 12px', background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Add</button>
        </form>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 12px',
                backgroundColor: task.completed ? '#ecfdf5' : '#fff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                marginBottom: '6px',
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓" : "⏳"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TaskApp />);
</script>`
  }
];
