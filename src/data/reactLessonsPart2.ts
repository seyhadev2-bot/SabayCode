import { Lesson } from '../types';

export const reactLessonsPart2: Lesson[] = [
  {
    id: "react-props-children",
    title: { en: "React Props Children", km: "លក្ខណៈ Props Children" },
    content: {
      en: `# React Props Children
The **\`children\`** property is a special, automatically populated prop that references all JSX tags nested between the opening and closing tags of a component.

### Example:
\`\`\`jsx
function Card({ children }) {
  return <div className="card-box">{children}</div>;
}

// Usage:
<Card>
  <h2>Nested Title</h2>
  <p>Nested paragraph content</p>
</Card>
\`\`\`

> **Note:** This allows you to design versatile, reusable wrapper layouts (such as modal frames, sidebars, or page sections) that can host any custom HTML blocks.`,
      km: `# លក្ខណៈ Props Children
លក្ខណៈ **\`children\`** គឺជា Props ពិសេសដែលផ្ទុកដោយស្វ័យប្រវត្តិនូវរាល់កូដ JSX ទាំងឡាយណាដែលសរសេរនៅចន្លោះ Tag បើក និង Tag បិទរបស់សមាសភាគ។

### ឧទហរណ៍៖
\`\`\`jsx
function Card({ children }) {
  return <div className="card-box">{children}</div>;
}

// របៀបប្រើប្រាស់៖
<Card>
  <h2>ចំណងជើង</h2>
  <p>មាតិកាកថាខណ្ឌ</p>
</Card>
\`\`\`

> **សម្គាល់៖** វាអនុញ្ញាតឱ្យអ្នកបង្កើតសមាសភាគរុំ (Wrapper layouts) ដូចជា ប្រអប់ Modal, Sidebars ឬ Cards ដែលអាចផ្ទុកមាតិកាអ្វីក៏បានតាមចិត្ត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Custom container wrapper utilizing the 'children' prop
  function BorderContainer({ children, borderStyle = 'solid', title }) {
    return (
      <div style={{
        border: \`3px \${borderStyle} #3b82f6\`,
        borderRadius: '12px',
        padding: '20px',
        backgroundColor: '#fff',
        margin: '10px 0'
      }}>
        {title && <h3 style={{ color: '#1e40af', marginTop: 0 }}>{title}</h3>}
        {/* Nested elements render here */}
        {children}
      </div>
    );
  }

  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: '400px' }}>
        <BorderContainer title="Layout Wrapper A" borderStyle="dashed">
          <p>This paragraph is passed as a child element inside <em>BorderContainer</em>!</p>
          <button style={{ padding: '6px 12px' }}>Child Button</button>
        </BorderContainer>

        <BorderContainer title="Layout Wrapper B" borderStyle="double">
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ padding: '4px', background: '#e0f2fe' }}>Badge 1</span>
            <span style={{ padding: '4px', background: '#dcfce7' }}>Badge 2</span>
          </div>
        </BorderContainer>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "react-events",
    title: { en: "React Events", km: "ព្រឹត្តិការណ៍ Events ក្នុង React" },
    content: {
      en: `# React Events
React handles browser interactions with event attributes just like HTML, but using camelCase naming (e.g., \`onClick\`, \`onChange\`, \`onSubmit\`).

### Key Differences:
1. Event handlers are written as function references: \`onClick={handleClick}\` (no brackets \`()\`).
2. If you need to pass an argument, wrap the call in an arrow function: \`() => handleClick(id)\`.

> **Pitfall:** If you write \`onClick={handleClick()}\` (with brackets), the function runs immediately when the component renders, instead of waiting for the user to click!`,
      km: `# ព្រឹត្តិការណ៍ Events ក្នុង React
React គ្រប់គ្រងទំនាក់ទំនងរបស់អ្នកប្រើប្រាស់តាមរយៈ Attributes ស្រដៀង HTML ដែរ ប៉ុន្តែប្រើប្រាស់ទម្រង់អក្សរ camelCase (ឧ. \`onClick\`, \`onChange\`, \`onSubmit\`)។

### ភាពខុសគ្នាធំៗ៖
1. Event handlers ត្រូវបានបញ្ជូនជាអនុគមន៍យោង៖ \`onClick={handleClick}\` (មិនសរសេរវង់ក្រចក \`()\` ឡើយ)។
2. ប្រសិនបើត្រូវការបញ្ជូនអាគុយម៉ង់ ត្រូវសរសេរវារុំក្នុង Arrow function៖ \`() => handleClick(id)\`។

> **បញ្ហាជួបប្រទះ៖** ប្រសិនបើអ្នកសរសេរ \`onClick={handleClick()}\` (មានវង់ក្រចក) អនុគមន៍នោះនឹងដំណើរការភ្លាមៗនៅពេល Render គេហទំព័រ ជាជាងរង់ចាំអ្នកប្រើប្រាស់ចុចលើប៊ូតុង!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ClickEventsApp() {
    const handleBasicClick = () => {
      alert("Button clicked directly!");
    };

    const handleParameterizedClick = (name) => {
      alert(\`Hello \${name}! Passed arguments via arrow function.\`);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Event Handling in React</h3>
        
        <button 
          onClick={handleBasicClick}
          style={{ padding: '10px 15px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginRight: '10px' }}
        >
          Basic Click
        </button>

        <button 
          onClick={() => handleParameterizedClick("Student")}
          style={{ padding: '10px 15px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Pass Argument
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ClickEventsApp />);
</script>`
  },
  {
    id: "react-conditionals",
    title: { en: "React Conditionals", km: "លក្ខខណ្ឌបង្ហាញក្នុង React" },
    content: {
      en: `# React Conditionals
There are times when you want to show or hide elements based on active user configurations, logged states, or application calculations.

### Common Patterns:
* **Ternary Operators:** \`isPremium ? <PremiumCard /> : <FreeCard />\`
* **Logical AND Operators:** \`hasNotification && <Badge />\`
* **Early Returns:** Returning \`null\` in a component function halts rendering of that element entirely.

> **Tip:** Keep JSX clean. If conditional logic becomes complex, evaluate the conditions before the \`return\` statement or split them into a separate sub-component.`,
      km: `# លក្ខខណ្ឌបង្ហាញក្នុង React
មានពេលខ្លះអ្នកចង់បង្ហាញ ឬលាក់បាំង elements ផ្សេងៗដោយផ្អែកលើការកំណត់របស់អ្នកប្រើប្រាស់ សភាពនៃការចូលគណនី ឬការគណនាផ្សេងៗ។

### ទម្រង់ប្រើប្រាស់ញឹកញាប់៖
* **Ternary Operators:** \`isPremium ? <PremiumCard /> : <FreeCard />\`
* **Logical AND Operators:** \`hasNotification && <Badge />\`
* **Early Returns:** ការបញ្ជូនត្រឡប់ \`null\` នៅក្នុងអនុគមន៍សមាសភាគដើម្បីបញ្ឈប់ការបង្ហាញ UI នោះទាំងស្រុង។

> **គន្លឹះ៖** រក្សាកូដ JSX ឱ្យស្អាត។ ប្រសិនបើលក្ខខណ្ឌកាន់តែស្មុគស្មាញ គួរតែគណនាលក្ខខណ្ឌនោះឱ្យរួចរាល់មុនពេលហៅ \`return\` ឬបំបែកវាជាសមាសភាគកូន។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ConditionalView() {
    const [showPreview, setShowPreview] = React.useState(false);
    const [unreadMessages, setUnreadMessages] = React.useState(3);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Conditional UI Control</h3>

        {/* Short-circuit operator: render badge only if unreadMessages > 0 */}
        <div style={{ marginBottom: '20px' }}>
          <strong>Inbox 📬</strong>
          {unreadMessages > 0 && (
            <span style={{ padding: '3px 8px', backgroundColor: '#ef4444', color: 'white', borderRadius: '10px', fontSize: '11px', marginLeft: '6px' }}>
              {unreadMessages} New
            </span>
          )}
        </div>

        {/* Ternary toggler */}
        <button 
          onClick={() => setShowPreview(!showPreview)}
          style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '15px' }}
        >
          {showPreview ? "Hide Document" : "Show Document"}
        </button>

        {showPreview ? (
          <div style={{ padding: '16px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            <h4>📄 Secret Dossier</h4>
            <p style={{ margin: 0 }}>This is visible because <em>showPreview</em> is true!</p>
          </div>
        ) : (
          <p style={{ color: '#94a3b8' }}>Document is hidden</p>
        )}
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ConditionalView />);
</script>`
  },
  {
    id: "react-lists",
    title: { en: "React Lists", km: "ការបង្ហាញបញ្ជីឈ្មោះ Lists" },
    content: {
      en: `# React Lists
To render arrays of data dynamically in React, we use the standard JavaScript \`.map()\` array method to convert list data into React elements.

### The Key Attribute:
Each list item must receive a unique **\`key\`** prop. React uses these keys to track which items are updated, added, or removed.

\`\`\`jsx
const items = [{ id: 1, name: "Apple" }];
const list = items.map(item => <li key={item.id}>{item.name}</li>);
\`\`\`

> **Pitfall:** Never use the array index as the key if the list items can be re-ordered, filtered, or deleted. This will lead to subtle UI bugs and performance issues.`,
      km: `# ការបង្ហាញបញ្ជីឈ្មោះ Lists
ដើម្បីបង្ហាញទិន្នន័យជាលក្ខណៈបញ្ជី (Arrays) នៅក្នុង React យើងប្រើប្រាស់វិធីសាស្ត្រ \`.map()\` របស់ JavaScript ដើម្បីបំប្លែងទិន្នន័យទាំងនោះទៅជាសមាសភាគ React។

### លក្ខណៈ Key Attribute៖
រាល់ធាតុនីមួយៗនៅក្នុងបញ្ជីត្រូវតែមានលក្ខណៈ **\`key\`** ពិសេសតែមួយគត់។ React ប្រើប្រាស់ Key ទាំងនេះដើម្បីតាមដានរាល់ការផ្លាស់ប្តូរ ក៏ដូចជាបន្ថែម ឬលុបធាតុនានា។

\`\`\`jsx
const items = [{ id: 1, name: "Apple" }];
const list = items.map(item => <li key={item.id}>{item.name}</li>);
\`\`\`

> **បញ្ហាជួបប្រទះ៖** កុំប្រើប្រាស់លិបិក្រម (Index) របស់ Array ធ្វើជា Key ឱ្យសោះ ប្រសិនបើធាតុនៅក្នុងបញ្ជីអាចត្រូវបានផ្លាស់ប្តូរលំដាប់ ចម្រាញ់ ឬលុបចោល ព្រោះវាអាចបង្កឱ្យមានលទ្ធផលខុសឆ្គង។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ShoppingListApp() {
    const [tasks, setTasks] = React.useState([
      { id: 't1', text: "Buy milk from grocery", completed: false },
      { id: 't2', text: "Review React ES6 lessons", completed: true },
      { id: 't3', text: "Write your first dynamic list app", completed: false }
    ]);

    const toggleTask = (id) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Interactive Shopping & Task List</h3>
        <p style={{ fontSize: '13px', color: '#64748b' }}>Click on tasks to toggle completion status:</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li 
              key={task.id} 
              onClick={() => toggleTask(task.id)}
              style={{
                padding: '10px 14px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                marginBottom: '8px',
                cursor: 'pointer',
                backgroundColor: task.completed ? '#f0fdf4' : '#fff',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#a3a3a3' : '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{task.text}</span>
              <span>{task.completed ? "✓ Done" : "⏳ Pending"}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ShoppingListApp />);
</script>`
  },
  {
    id: "react-forms",
    title: { en: "React Forms", km: "ការគ្រប់គ្រងទម្រង់ Forms" },
    content: {
      en: `# React Forms
In standard HTML, input tags manage their own states. In React, we use the **Controlled Component** pattern. The inputs bind their value to a React state, and changes trigger a handler updating that state.

### Controlled Input:
\`\`\`jsx
const [email, setEmail] = useState("");

<input 
  type="email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>
\`\`\`

> **Note:** Controlled inputs guarantee that React state serves as the "single source of truth" for form elements.`,
      km: `# ការគ្រប់គ្រងទម្រង់ Forms
នៅក្នុង HTML ធម្មតា Inputs គ្រប់គ្រងតម្លៃរបស់វាដោយខ្លួនឯង។ ប៉ុន្តែក្នុង React យើងប្រើប្រាស់ប្រព័ន្ធ **Controlled Component**។ Input នីមួយៗត្រូវភ្ជាប់តម្លៃរបស់វាទៅនឹង React State ហើយរាល់ការកែប្រែនឹងត្រូវហៅអនុគមន៍ដើម្បីធ្វើបច្ចុប្បន្នភាព State នោះវិញ។

### ឧទាហរណ៍ Controlled Input៖
\`\`\`jsx
const [email, setEmail] = useState("");

<input 
  type="email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
/>
\`\`\`

> **សម្គាល់៖** Controlled inputs ធានាថា React State គឺជាប្រភពឯកសារយោងផ្លូវការតែមួយគត់សម្រាប់ទិន្នន័យទាំងអស់របស់ Form។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function ControlledForm() {
    const [inputValue, setInputValue] = React.useState("");

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
        <h3>Controlled Form Element</h3>
        <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#4b5563' }}>
          Type and see output change:
        </label>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type here..."
          style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
        />
        <div style={{ marginTop: '15px', padding: '10px', background: '#f3f4f6', borderRadius: '4px' }}>
          <strong>Value in State:</strong> {inputValue || <span style={{ color: 'red' }}>Empty</span>}
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ControlledForm />);
</script>`
  },
  {
    id: "react-forms-submit",
    title: { en: "React Forms Submit", km: "ការបញ្ជូនទិន្នន័យ Form Submit" },
    content: {
      en: `# React Forms Submit
To handle form submissions, we bind an \`onSubmit\` handler to the form tag. Inside the handler, we **MUST** call \`event.preventDefault()\` to prevent the web browser from refreshing the page.

### Submission Handler:
\`\`\`jsx
const handleSubmit = (event) => {
  event.preventDefault(); // Blocks default refresh
  alert("Submitting: " + value);
};

<form onSubmit={handleSubmit}>
  <button type="submit">Send</button>
</form>
\`\`\`

> **Note:** Page refreshing destroys all in-memory React states, which is why blocking it is mandatory!`,
      km: `# ការបញ្ជូនទិន្នន័យ Form Submit
ដើម្បីគ្រប់គ្រងការផ្ញើទិន្នន័យពី Form យើងភ្ជាប់អនុគមន៍ \`onSubmit\` ទៅនឹង Form Tag។ នៅក្នុងអនុគមន៍នោះ យើង**ត្រូវតែ**ហៅ \`event.preventDefault()\` ដើម្បីការពារកម្មវិធីរុករកកុំឱ្យដំណើរការទំព័រឡើងវិញ (Refresh)។

### អនុគមន៍គ្រប់គ្រងការ Submit៖
\`\`\`jsx
const handleSubmit = (event) => {
  event.preventDefault(); // ទប់ស្កាត់ការ Refresh
  alert("Submitting: " + value);
};

<form onSubmit={handleSubmit}>
  <button type="submit">Send</button>
</form>
\`\`\`

> **សម្គាល់៖** ការ Refresh ទំព័រគេហទំព័រនឹងបំផ្លាញរាល់ទិន្នន័យ (State) ទាំងអស់ដែលរក្សាក្នុង React ដូច្នេះការទប់ស្កាត់វាគឺចាំបាច់បំផុត!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function SubmitFormApp() {
    const [username, setUsername] = React.useState("");
    const [submittedData, setSubmittedData] = React.useState(null);

    const handleSubmit = (e) => {
      e.preventDefault(); // Block browser page reload!
      if (!username.trim()) {
        alert("Please enter a valid username!");
        return;
      }
      setSubmittedData(username);
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px' }}>
        <h3>Sign Up Workspace</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose Username"
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
          />
          <button 
            type="submit"
            style={{ width: '100%', padding: '10px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Create Account
          </button>
        </form>

        {submittedData && (
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '6px' }}>
            🎉 <strong>Registration successful!</strong> Welcome to the platform, <strong>{submittedData}</strong>!
          </div>
        )}
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SubmitFormApp />);
</script>`
  },
  {
    id: "react-textarea",
    title: { en: "React Textarea", km: "ប្រអប់សរសេរអត្ថបទធំ Textarea" },
    content: {
      en: `# React Textarea
In HTML, a textarea defines its content between opening and closing tags (\`<textarea>Text</textarea>\`). In React, textareas use the exact same controlled model as input fields, relying on a \`value\` attribute.

### Controlled Textarea:
\`\`\`jsx
const [description, setDescription] = useState("");

<textarea 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
/>
\`\`\``,
      km: `# ប្រអប់សរសេរអត្ថបទធំ Textarea
នៅក្នុង HTML ធម្មតា ប្រអប់សរសេរអត្ថបទធំរក្សាទុកមាតិការវាង Tag បើក និងបិទ (\`<textarea>Text</textarea>\`)។ ប៉ុន្តែសម្រាប់ React គឺវាប្រើប្រាស់ Controlled model ដូច Input ធម្មតាដែរ ពោលគឺប្រើ Attribute \`value\` ដើម្បីភ្ជាប់ State។

### ឧទាហរណ៍ Controlled Textarea៖
\`\`\`jsx
const [description, setDescription] = useState("");

<textarea 
  value={description} 
  onChange={(e) => setDescription(e.target.value)} 
/>
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function TextareaApp() {
    const [comment, setComment] = React.useState("");
    const maxChars = 100;

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px' }}>
        <h3>Controlled Textarea & Word Tracker</h3>
        <textarea 
          value={comment}
          onChange={(e) => {
            if (e.target.value.length <= maxChars) {
              setComment(e.target.value);
            }
          }}
          placeholder="Write your review here..."
          rows="4"
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginTop: '5px' }}>
          <span>Word Count: {comment.split(/\s+/).filter(Boolean).length} words</span>
          <span>{comment.length} / {maxChars} characters</span>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TextareaApp />);
</script>`
  },
  {
    id: "react-select",
    title: { en: "React Select", km: "ប្រអប់ជ្រើសរើស Select Box" },
    content: {
      en: `# React Select
Just like inputs and textareas, the \`<select>\` element is controlled using the \`value\` attribute placed directly on the select element itself, rather than setting \`selected\` on individual option tags.

### Example:
\`\`\`jsx
const [color, setColor] = useState("blue");

<select value={color} onChange={(e) => setColor(e.target.value)}>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
\`\`\``,
      km: `# ប្រអប់ជ្រើសរើស Select Box
ស្រដៀងគ្នាទៅនឹង Input និង Textarea ដែរធាតុ \`<select>\` ត្រូវបានគ្រប់គ្រងដោយប្រើ Attribute \`value\` ផ្ទាល់នៅលើ Select Element តែម្ដង ជំនួសឱ្យការសរសេរ Attribute \`selected\` នៅលើ Option Tag នីមួយៗ។

### ឧទាហរណ៍៖
\`\`\`jsx
const [color, setColor] = useState("blue");

<select value={color} onChange={(e) => setColor(e.target.value)}>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
</select>
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function SelectApp() {
    const [difficulty, setDifficulty] = React.useState("beginner");

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
        <h3>Select Course Difficulty</h3>
        <select 
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          style={{ width: '100%', padding: '8px', borderRadius: '6px', fontSize: '14px', marginBottom: '15px' }}
        >
          <option value="beginner">Beginner Course (Entry)</option>
          <option value="intermediate">Intermediate Course (Core)</option>
          <option value="advanced">Advanced Course (Expert)</option>
        </select>

        <div style={{ 
          padding: '12px', 
          borderRadius: '8px', 
          backgroundColor: difficulty === 'beginner' ? '#ecfdf5' : (difficulty === 'intermediate' ? '#eff6ff' : '#fff1f2'),
          color: difficulty === 'beginner' ? '#047857' : (difficulty === 'intermediate' ? '#1d4ed8' : '#be123c'),
          fontSize: '13px',
          fontWeight: 'bold'
        }}>
          Selected Level: {difficulty.toUpperCase()}
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SelectApp />);
</script>`
  },
  {
    id: "react-multiple-inputs",
    title: { en: "React Multiple Inputs", km: "ការបញ្ចូលទិន្នន័យច្រើន Multiple Inputs" },
    content: {
      en: `# React Multiple Inputs
When a form has many input fields, declaring separate state hooks and handlers for each can become tedious. Instead, you can group input states inside a single object and use a generic change handler.

### Generic Handler:
We track the input elements using the HTML **\`name\`** attribute.
\`\`\`jsx
const [form, setForm] = useState({ name: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,        // Spread copy existing data
    [name]: value   // Dynamically overwrite specific key
  });
};
\`\`\`

> **Tip:** The bracket notation \`[name]\` allows dynamic key assignment based on whichever input element fired the event.`,
      km: `# ការបញ្ចូលទិន្នន័យច្រើន Multiple Inputs
នៅពេលដែល Form មួយមានកន្លែងបញ្ចូលទិន្នន័យច្រើន ការបង្កើត State Hooks ផ្សេងៗគ្នាច្រើនអាចបង្កភាពស្មុគស្មាញ។ ជំនួសមកវិញ អ្នកអាចបញ្ចូល Inputs ទាំងអស់ក្នុង Object តែមួយ រួចប្រើប្រាស់អនុគមន៍តែមួយដើម្បីតាមដាន។

### អនុគមន៍ទូទៅ៖
យើងតាមដាន Inputs ផ្សេងៗគ្នាដោយផ្អែកលើ Attribute **\`name\`** របស់វា។
\`\`\`jsx
const [form, setForm] = useState({ name: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
    ...form,        // ចម្លងទិន្នន័យចាស់ទុក
    [name]: value   // ជំនួសតម្លៃលក្ខណៈដែលបានកែប្រែ dynamically
  });
};
\`\`\`

> **គន្លឹះ៖** ការប្រើសញ្ញាគ្នាបើកបិទ \`[name]\` ជួយកំណត់ឈ្មោះ Key ឌីណាមិកតាម input ណាដែលត្រូវបានកែប្រែ។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function MultiInputForm() {
    const [form, setForm] = React.useState({
      firstName: "",
      lastName: "",
      email: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '350px' }}>
        <h3>Profile Registration</h3>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <input 
            type="text" 
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First Name"
            style={{ width: '50%', padding: '8px' }}
          />
          <input 
            type="text" 
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            style={{ width: '50%', padding: '8px' }}
          />
        </div>
        <input 
          type="email" 
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          style={{ width: '100%', padding: '8px', marginBottom: '15px', boxSizing: 'border-box' }}
        />

        <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '6px', fontSize: '13px' }}>
          <strong>State JSON:</strong>
          <pre style={{ margin: '5px 0 0 0', color: '#4f46e5' }}>{JSON.stringify(form, null, 2)}</pre>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MultiInputForm />);
</script>`
  },
  {
    id: "react-checkbox",
    title: { en: "React Checkbox", km: "ប្រអប់ធីក Checkbox" },
    content: {
      en: `# React Checkbox
Unlike text fields, checkboxes utilize boolean states (checked or unchecked). Therefore, when writing controlled checkboxes, you must bind your state to the **\`checked\`** property and capture changes using **\`e.target.checked\`**.

### Controlled Checkbox:
\`\`\`jsx
const [agreed, setAgreed] = useState(false);

<input 
  type="checkbox" 
  checked={agreed} 
  onChange={(e) => setAgreed(e.target.checked)} 
/>
\`\`\``,
      km: `# ប្រអប់ធីក Checkbox
ខុសពីការបញ្ចូលអត្ថបទ ប្រអប់ធីកប្រើប្រាស់តម្លៃប៊ូលីន (ពិត ឬមិនពិត)។ ដូច្នេះ ក្នុងការបង្កើត Controlled Checkbox អ្នកត្រូវភ្ជាប់ State ទៅនឹង Attribute **\`checked\`** ហើយតាមដានការកែប្រែដោយប្រើ **\`e.target.checked\`**។

### ឧទាហរណ៍ Controlled Checkbox៖
\`\`\`jsx
const [agreed, setAgreed] = useState(false);

<input 
  type="checkbox" 
  checked={agreed} 
  onChange={(e) => setAgreed(e.target.checked)} 
/>
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function CheckboxApp() {
    const [agreed, setAgreed] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
        <h3>Terms of Service agreement</h3>
        
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', margin: '20px 0' }}>
          <input 
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>I agree to accept terms and cookie guidelines.</span>
        </label>

        <button 
          disabled={!agreed}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: agreed ? '#10b981' : '#cbd5e1',
            color: agreed ? 'white' : '#94a3b8',
            border: 'none',
            borderRadius: '6px',
            cursor: agreed ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CheckboxApp />);
</script>`
  },
  {
    id: "react-radio",
    title: { en: "React Radio", km: "ប៊ូតុងមូលជ្រើសរើស Radio Button" },
    content: {
      en: `# React Radio
Radio buttons allow a user to choose exactly one option from a pre-defined set. To group checkboxes together, they must share the same \`name\` attribute. We control selected elements by comparing our active state to the button's \`value\`.

### Example:
\`\`\`jsx
const [size, setSize] = useState("M");

<input 
  type="radio" 
  value="S" 
  checked={size === "S"} 
  onChange={(e) => setSize(e.target.value)} 
/>
\`\`\``,
      km: `# ប៊ូតុងមូលជ្រើសរើស Radio Button
ប៊ូតុងមូល (Radio buttons) អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ជ្រើសរើសយកតម្លៃតែមួយគត់ពីសំណុំទិន្នន័យ។ ដើម្បីដាក់វាក្នុងក្រុមតែមួយ ពួកវាត្រូវមាន Attribute \`name\` ដូចគ្នា។ យើងគ្រប់គ្រងវាដោយប្រៀបធៀប State ទៅនឹង \`value\` នីមួយៗ។

### ឧទាហរណ៍៖
\`\`\`jsx
const [size, setSize] = useState("M");

<input 
  type="radio" 
  value="S" 
  checked={size === "S"} 
  onChange={(e) => setSize(e.target.value)} 
/>
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function RadioApp() {
    const [membership, setMembership] = React.useState("free");

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Choose Your Plan</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '15px 0' }}>
          <label style={{ cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="plan"
              value="free" 
              checked={membership === "free"}
              onChange={(e) => setMembership(e.target.value)}
            /> Free Tier ($0/mo)
          </label>

          <label style={{ cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="plan"
              value="pro" 
              checked={membership === "pro"}
              onChange={(e) => setMembership(e.target.value)}
            /> Pro Developer ($15/mo)
          </label>

          <label style={{ cursor: 'pointer' }}>
            <input 
              type="radio" 
              name="plan"
              value="enterprise" 
              checked={membership === "enterprise"}
              onChange={(e) => setMembership(e.target.value)}
            /> Corporate Scale ($120/mo)
          </label>
        </div>

        <div style={{ padding: '10px', border: '1px solid #e2e8f0', background: '#fafafa', borderRadius: '6px' }}>
          Active subscription: <strong>{membership.toUpperCase()} Plan</strong>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RadioApp />);
</script>`
  },
  {
    id: "react-portals",
    title: { en: "React Portals", km: "មុខងារ React Portals" },
    content: {
      en: `# React Portals
Portals provide a first-class way to render components into a DOM node that exists outside of the parent component's mounting tree. This is extremely useful for dialog modals, tooltips, or toast notifications.

### Syntax:
\`\`\`jsx
ReactDOM.createPortal(child, containerNode)
\`\`\`

> **Note:** Even though a portal can be rendered outside the parent DOM node, it still behaves like a normal React component inside the React component tree (e.g., event bubbling still flows up the React tree!).`,
      km: `# មុខងារ React Portals
Portals ផ្ដល់នូវវិធីសាស្ត្រពិសេសដើម្បីបង្ហាញ (Render) សមាសភាគនៅក្នុង DOM Node ផ្សេងដែលស្ថិតនៅខាងក្រៅរចនាសម្ព័ន្ធមេ។ វាមានប្រយោជន៍បំផុតសម្រាប់បង្កើតប្រអប់ផ្ទាំងអណ្តែត (Modal), ទម្រង់ណែនាំ (Tooltip) ឬការជូនដំណឹង (Toast)។

### វាក្យសម្ពន្ធ៖
\`\`\`jsx
ReactDOM.createPortal(child, containerNode)
\`\`\`

> **សម្គាល់៖** ទោះបីជា Portal ត្រូវបានបង្ហាញនៅក្រៅ DOM មេក៏ដោយ វាគ្មិននៅតែមានឥរិយាបថដូចសមាសភាគធម្មតាក្នុង React Tree ដដែល (រាល់ព្រឹត្តិការណ៍ Event bubbling នៅតែដំណើរការឡើងទៅលើធម្មតា)។`
    },
    starterCode: `<div id="root"></div>
{/* Secondary target element outside #root */}
<div id="modal-portal-target" style={{ padding: '10px', margin: '15px 0', border: '2px dashed #ec4899', borderRadius: '8px' }}>
  <strong>#modal-portal-target (Outer node container)</strong>
</div>

<script type="text/babel">
  function PortalDemo() {
    const [showPortal, setShowPortal] = React.useState(false);

    const portalContent = (
      <div style={{ padding: '8px', background: '#fbcfe8', color: '#9d174d', borderRadius: '4px', fontSize: '13px' }}>
        🚀 I am a Portal render! Located physically inside <em>#modal-portal-target</em>, but controlled by React component state!
      </div>
    );

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '10px' }}>
        <h3>React Portal Workspace</h3>
        <button 
          onClick={() => setShowPortal(!showPortal)}
          style={{ padding: '8px 12px', background: '#ec4899', color: '#white', border: 'none', borderRadius: '6px', cursor: 'pointer', color: 'white' }}
        >
          {showPortal ? "Close Portal" : "Deploy Portal"}
        </button>

        {showPortal && ReactDOM.createPortal(
          portalContent,
          document.getElementById('modal-portal-target')
        )}
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<PortalDemo />);
</script>`
  },
  {
    id: "react-suspense",
    title: { en: "React Suspense", km: "មុខងារ React Suspense" },
    content: {
      en: `# React Suspense
\`\`\<Suspense\`\`\> lets you display a fallback UI (like a loading indicator or spinner) while waiting for nested children components to finish loading or resolving resources.

### Example:
\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading component...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

> **Tip:** In modern frameworks, Suspense is used extensively for server-side streaming and data-fetching hooks.`,
      km: `# មុខងារ React Suspense
\`\`\<Suspense\`\`\> អនុញ្ញាតឱ្យអ្នកបង្ហាញ UI បណ្ដោះអាសន្ន (ដូចជាសញ្ញាកំពុងដំណើរការ - Loader) នៅពេលរង់ចាំសមាសភាគកូនផ្ទុកទិន្នន័យ ឬធនធាននានារួចរាល់។

### ឧទាហរណ៍៖
\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>កំពុងផ្ទុកទិន្នន័យ...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

> **គន្លឹះ៖** នៅក្នុង Framework ទំនើបៗ Suspense ត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយសម្រាប់ការទាញយកទិន្នន័យ និងការដំណើរការកូដពីម៉ាស៊ីនបម្រើ (Streaming)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Simulate a lazy resolving element
  function SuspenseSimulator() {
    const [resolved, setResolved] = React.useState(false);

    React.useEffect(() => {
      const timer = setTimeout(() => setResolved(true), 2500);
      return () => clearTimeout(timer);
    }, []);

    if (!resolved) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: '#4f46e5' }}>
          <div className="spinner" style={{
            border: '4px solid #f3f4f6',
            borderTop: '4px solid #4f46e5',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            animation: 'spin 1s linear infinite',
            margin: 'auto mb-10'
          }}></div>
          <style>{\`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          \`}</style>
          <span>⏳ Simulating Lazy Fallback Suspense Loading...</span>
        </div>
      );
    }

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #10b981', borderRadius: '10px', backgroundColor: '#ecfdf5' }}>
        <h3>✓ Lazy Component Resolved Successfully!</h3>
        <p style={{ margin: 0 }}>This component is fully rendered after simulated async suspense completed.</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SuspenseSimulator />);
</script>`
  },
  {
    id: "react-css-styling",
    title: { en: "React CSS Styling", km: "ការរចនាគេហទំព័រ CSS Styling" },
    content: {
      en: `# React CSS Styling
There are three main ways to style React components:
1. **Inline Styling:** Passed as a JavaScript object. Property names must be camelCase:
   \`\`\`jsx
   <h1 style={{ fontSize: '24px', backgroundColor: 'blue' }}>Title</h1>
   \`\`\`
2. **External Stylesheets:** Writing standard CSS files and importing them: \`import './App.css'\`.
3. **Tailwind CSS:** Declaring direct functional classes on the element: \`<div className="p-4 bg-blue-500 rounded"></div>\`.

> **Pitfall:** With inline styling, numeric values often need to be passed as strings if units are specified (e.g. \`'24px'\`). Plain numbers default to pixels (e.g. \`fontSize: 24\`).`,
      km: `# ការរចនាគេហទំព័រ CSS Styling
មានវិធីសាស្ត្រធំៗចំនួនបីសម្រាប់រចនាម៉ូតសមាសភាគ React៖
1. **Inline Styling:** បញ្ជូនជា JavaScript object។ ឈ្មោះលក្ខណៈត្រូវតែជា camelCase៖
   \`\`\`jsx
   <h1 style={{ fontSize: '24px', backgroundColor: 'blue' }}>ចំណងជើង</h1>
   \`\`\`
2. **External Stylesheets:** សរសេរឯកសារ CSS ធម្មតា រួចធ្វើការ Import ចូល៖ \`import './App.css'\`។
3. **Tailwind CSS:** កំណត់ Classes របស់ Tailwind ដោយផ្ទាល់លើសមាសភាគ៖ \`<div className="p-4 bg-blue-500 rounded"></div>\`។

> **បញ្ហាជួបប្រទះ៖** សម្រាប់ inline styling ប្រសិនបើមានកំណត់ឯកតា (Units) អ្នកត្រូវបញ្ជូនជាអក្សរ (ឧ. \`'24px'\`)។ ប្រសិនបើសរសេរតែលេខ វានឹងគិតជាភីកសែល (Pixels) ជាស្វ័យប្រវត្ត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function StyledApp() {
    const [isHot, setIsHot] = React.useState(false);

    // Dynamic style object based on active component state
    const cardStyle = {
      padding: '24px',
      borderRadius: '16px',
      fontFamily: 'sans-serif',
      transition: 'all 0.4s ease',
      backgroundColor: isHot ? '#fee2e2' : '#f0fdf4',
      border: isHot ? '3px solid #ef4444' : '3px solid #22c55e'
    };

    return (
      <div style={cardStyle}>
        <h2 style={{ color: isHot ? '#b91c1c' : '#15803d', margin: '0 0 10px 0' }}>
          Interactive Style Switcher
        </h2>
        <p style={{ color: '#4b5563', fontSize: '14px' }}>
          The styling values are bound to local component state. Click below to toggle!
        </p>
        <button 
          onClick={() => setIsHot(!isHot)}
          style={{
            padding: '10px 20px',
            backgroundColor: isHot ? '#ef4444' : '#22c55e',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Switch to {isHot ? "Cool Green" : "Hot Red"}
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<StyledApp />);
</script>`
  },
  {
    id: "react-css-modules",
    title: { en: "React CSS Modules", km: "ការប្រើប្រាស់ CSS Modules" },
    content: {
      en: `# React CSS Modules
CSS Modules are CSS files where all class names and animation names are scoped locally to the specific component by default. This avoids global class name collisions.

### How it works:
1. Create a file named \`Component.module.css\`.
2. Import the style object in your React file:
   \`\`\`javascript
   import styles from './Component.module.css';
   \`\`\`
3. Apply the class:
   \`\`\`jsx
   <div className={styles.container}>Card</div>
   \`\`\`

> **Note:** Behind the scenes, the build tool automatically renames class names to include unique hashes, e.g., \`_container_abc123\`.`,
      km: `# ការប្រើប្រាស់ CSS Modules
CSS Modules គឺជាឯកសារ CSS ដែលរាល់ឈ្មោះ Class ទាំងអស់ត្រូវបានកំណត់ជាលក្ខណៈបុគ្គល (Locally scoped) សម្រាប់តែសមាសភាគជាក់លាក់មួយប៉ុណ្ណោះ។ វាជួយការពារកុំឱ្យមានការជាន់ឈ្មោះគ្នាជាសកល។

### របៀបដំណើរការ៖
1. បង្កើតឯកសារឈ្មោះ \`Component.module.css\`។
2. ទាញយក (Import) វាមកប្រើប្រាស់ក្នុង React៖
   \`\`\`javascript
   import styles from './Component.module.css';
   \`\`\`
3. ភ្ជាប់ Class ទៅកាន់សមាសភាគ៖
   \`\`\`jsx
   <div className={styles.container}>Card</div>
   \`\`\`

> **សម្គាល់៖** នៅពីក្រោយខ្នង Build tool នឹងប្ដូរឈ្មោះ Class នោះទៅជាកូដពិសេសដោយស្វ័យប្រវត្ត (ឧ. \`_container_abc123\`)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function CSSModulesDemo() {
    // Simulating CSS Module hashing behavior locally
    const simulatedStyles = {
      button_u9s2a: {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#7c3aed',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
      },
      title_x83n1: {
        fontSize: '18px',
        color: '#4c1d95',
        fontFamily: 'sans-serif'
      }
    };

    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h3 style={simulatedStyles.title_x83n1}>CSS Modules Scoped Classes</h3>
        <p style={{ fontSize: '13px', color: '#666' }}>
          This mimics a CSS module where classes are compiled to unique identifiers to prevent styling conflicts.
        </p>
        <button style={simulatedStyles.button_u9s2a}>Scoped Module Button</button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<CSSModulesDemo />);
</script>`
  }
];
