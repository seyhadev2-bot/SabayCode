import { Lesson } from '../types';

export const reactLessonsPart3: Lesson[] = [
  {
    id: "react-css-in-js",
    title: { en: "React CSS-in-JS", km: "ការសរសេររចនាបថក្នុង JS" },
    content: {
      en: `# React CSS-in-JS
CSS-in-JS is a technique where CSS is styled using JavaScript. Libraries like **styled-components** or **Emotion** allow you to write actual CSS code to style your components.

### Styled Components Example:
\`\`\`jsx
import styled from 'styled-components';

const Button = styled.button\`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #7c3aed;
  color: #7c3aed;
  padding: 0.25em 1em;
\`;
\`\`\`

> **Note:** CSS-in-JS allows you to bind styles directly to component props, creating highly dynamic stylesheets.`,
      km: `# ការសរសេររចនាបថក្នុង JS
CSS-in-JS គឺជាបច្ចេកទេសមួយដែលកូដ CSS ត្រូវបានសរសេរដោយប្រើ JavaScript។ បណ្ណាល័យល្បីៗដូចជា **styled-components** ឬ **Emotion** អនុញ្ញាតឱ្យអ្នកសរសេរកូដ CSS ពិតប្រាកដសម្រាប់ច្នៃម៉ូតសមាសភាគរបស់អ្នក។

### ឧទាហរណ៍ Styled Components៖
\`\`\`jsx
import styled from 'styled-components';

const Button = styled.button\`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #7c3aed;
  color: #7c3aed;
  padding: 0.25em 1em;
\`;
\`\`\`

> **សម្គាល់៖** CSS-in-JS អនុញ្ញាតឱ្យអ្នកភ្ជាប់រចនាបថទៅនឹង Props របស់សមាសភាគដោយផ្ទាល់ ដែលធ្វើឱ្យការច្នៃម៉ូតមានភាពបត់បែនខ្ពស់បំផុត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Simulating CSS-in-JS styled component function that evaluates props
  function StyledButton({ primary, children, onClick }) {
    const computedStyles = {
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: '2px solid #7c3aed',
      cursor: 'pointer',
      transition: 'all 0.2s',
      backgroundColor: primary ? '#7c3aed' : 'transparent',
      color: primary ? 'white' : '#7c3aed',
      boxShadow: primary ? '0 4px 6px rgba(124, 58, 237, 0.2)' : 'none'
    };

    return (
      <button style={computedStyles} onClick={onClick}>
        {children}
      </button>
    );
  }

  function App() {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Simulated styled-components Workspace</h3>
        <p>These button instances change background and text colors dynamically depending on the "primary" boolean prop:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <StyledButton primary={true} onClick={() => alert("Primary Styled Button Clicked!")}>
            Primary Button
          </StyledButton>
          <StyledButton primary={false} onClick={() => alert("Secondary Styled Button Clicked!")}>
            Outline Button
          </StyledButton>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "react-router",
    title: { en: "React Router", km: "ប្រព័ន្ធនាំផ្លូវ React Router" },
    content: {
      en: `# React Router
React Router is the standard routing library for React. It enables single-page applications to navigate between views without performing full page refreshes, keeping the URL synchronized.

### Setup Structure:
\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

> **Note:** Since the preview iframe does not support browser URL address bars, we simulate React Router's internal path states below!`,
      km: `# ប្រព័ន្ធនាំផ្លូវ React Router
React Router គឺជាបណ្ណាល័យគ្រប់គ្រងផ្លូវ (Routing) ស្តង់ដារសម្រាប់ React។ វាអនុញ្ញាតឱ្យកម្មវិធីប្រភេទ Single-page អាចផ្លាស់ប្តូរទំព័រទិដ្ឋភាពទៅវិញទៅមកដោយមិនបាច់ដំណើរការគេហទំព័រឡើងវិញ (Full refresh)។

### រចនាសម្ព័ន្ធដំឡើង៖
\`\`\`jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

> **សម្គាល់៖** ដោយសារតែ Iframe នៅក្នុង preview មិនអាចបង្ហាញរបារអាសយដ្ឋាន URL ពិតប្រាកដបាន យើងនឹងសាកល្បងដំណើរការផ្លាស់ប្តូរទំព័ររបស់ React Router ដោយបង្កើត Path state ឌីណាមិកខាងក្រោម!`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Custom SPA Router simulator
  function RouterSimulator() {
    const [currentPath, setCurrentPath] = React.useState("home");

    const navigateTo = (path, e) => {
      e.preventDefault();
      setCurrentPath(path);
    };

    // Component views
    const HomeView = () => (
      <div style={{ animation: 'fadeIn 0.5s' }}>
        <h4>🏠 Home Welcome Panel</h4>
        <p style={{ color: '#4b5563', fontSize: '14px' }}>Welcome to our React single page application. No reload occurred!</p>
      </div>
    );

    const ProfileView = () => (
      <div style={{ animation: 'fadeIn 0.5s' }}>
        <h4>👤 Student Dashboard</h4>
        <p style={{ color: '#4b5563', fontSize: '14px' }}>This page represents your active user learning account.</p>
      </div>
    );

    const SettingsView = () => (
      <div style={{ animation: 'fadeIn 0.5s' }}>
        <h4>⚙️ Core Preferences</h4>
        <p style={{ color: '#4b5563', fontSize: '14px' }}>Customize theme settings, language properties, and account details.</p>
      </div>
    );

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '16px', border: '1px solid #cbd5e1', borderRadius: '12px' }}>
        <style>{\`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        \`}</style>

        {/* Simulated Navbar Links */}
        <nav style={{ display: 'flex', gap: '15px', paddingBottom: '12px', borderBottom: '1px solid #e2e8f0', marginBottom: '15px' }}>
          <a href="#" onClick={(e) => navigateTo("home", e)} style={{ textDecoration: 'none', fontWeight: currentPath === 'home' ? 'bold' : 'normal', color: '#4f46e5' }}>Home</a>
          <a href="#" onClick={(e) => navigateTo("profile", e)} style={{ textDecoration: 'none', fontWeight: currentPath === 'profile' ? 'bold' : 'normal', color: '#4f46e5' }}>Profile</a>
          <a href="#" onClick={(e) => navigateTo("settings", e)} style={{ textDecoration: 'none', fontWeight: currentPath === 'settings' ? 'bold' : 'normal', color: '#4f46e5' }}>Settings</a>
        </nav>

        {/* Router rendering switchboard */}
        <div style={{ minHeight: '100px', padding: '10px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
          {currentPath === 'home' && <HomeView />}
          {currentPath === 'profile' && <ProfileView />}
          {currentPath === 'settings' && <SettingsView />}
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<RouterSimulator />);
</script>`
  },
  {
    id: "react-transitions",
    title: { en: "React Transitions", km: "ការប្តូរទម្រង់ចលនា Transitions" },
    content: {
      en: `# React Transitions
Transitions and animations add visual polished feedback to the user experience. In React, mounting and unmounting transitions are usually handled using animation hooks or CSS classes.

### React 18 transition vs animations:
* **Framer Motion / Motion:** Standard React animation library used to configure fluid layouts.
* **CSS classes:** Standard CSS keyframes triggered dynamically using React state toggles.

> **Tip:** Do not animate every single layout shift, as it creates unnecessary distraction. Only use transitions to guide attention (e.g., alert entries, slide-out carts).`,
      km: `# ការប្តូរទម្រង់ចលនា Transitions
ការបង្កើតចលនា (Transitions & Animations) ជួយបន្ថែមសោភ័ណភាព និងផ្ដល់នូវការឆ្លើយតបដ៏ល្អដល់អ្នកប្រើប្រាស់។ នៅក្នុង React គេច្រើនប្រើប្រាស់បណ្ណាល័យចលនា ឬ Class CSS ផ្អែកលើ State ដើម្បីបង្កើតចលនា។

### បច្ចេកទេសបង្កើតចលនា៖
* **Framer Motion / Motion:** គឺជាបណ្ណាល័យចលនាស្តង់ដាររបស់ React សម្រាប់គ្រប់គ្រងប្លង់ចលនារលូន។
* **CSS classes:** កំណត់ CSS keyframes ធម្មតា ហើយបើកបិទវា dynamically តាមរយៈ React state។

> **គន្លឹះ៖** កុំបន្ថែមចលនាច្រើនហួសប្រមាណលើគ្រប់ផ្នែកនៃ UI ព្រោះវាអាចបង្កភាពរំខាន។ គួរប្រើវាតែនៅកន្លែងចាំបាច់ (ឧ. បើកប្រអប់ផ្ទាំងព័ត៌មាន, លេចចេញការជូនដំណឹង)។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function TransitionApp() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h3>Animate Element Mounting</h3>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ padding: '8px 16px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', marginBottom: '15px' }}
        >
          {isOpen ? "Collapse Card" : "Expand Card"}
        </button>

        <div style={{
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          maxHeight: isOpen ? '150px' : '0px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
        }}>
          <div style={{
            padding: '16px',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#1e40af',
            borderRadius: '8px'
          }}>
            <h4>✨ Fluid Layout Shift</h4>
            <p style={{ margin: 0, fontSize: '13px' }}>This component shifts height and opacity smoothly using CSS transition properties!</p>
          </div>
        </div>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<TransitionApp />);
</script>`
  },
  {
    id: "react-forward-ref",
    title: { en: "React Forward Ref", km: "ការបញ្ជូន Ref ទៅសមាសភាគកូន" },
    content: {
      en: `# React Forward Ref
Ref forwarding is an advanced feature that lets some components take a \`ref\` they receive and pass it (i.e., "forward" it) down to a child node.

### Why do we need it?
By default, you cannot attach a \`ref\` to a custom function component. If you try, React will throw a warning. To expose the underlying DOM element (like an input or video tag) inside your custom child, use \`React.forwardRef()\`.

### Example:
\`\`\`jsx
const CustomInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));
\`\`\``,
      km: `# ការបញ្ជូន Ref ទៅសមាសភាគកូន
Ref forwarding គឺជាមុខងារកម្រិតខ្ពស់ដែលអនុញ្ញាតឱ្យសមាសភាគទទួលយក \`ref\` ពីមេ រួចបញ្ជូនបន្ត (forward) ទៅកាន់សមាសភាគកូន ឬ HTML element ខាងក្នុង។

### ហេតុអ្វីចាំបាច់ត្រូវប្រើ?
ជាទូទៅ អ្នកមិនអាចភ្ជាប់ \`ref\` ទៅនឹងសមាសភាគដែលយើងបង្កើតផ្ទាល់ខ្លួនបានទេ។ ប្រសិនបើព្យាយាមធ្វើវានោះ React នឹងផ្ដល់ជាការព្រមាន។ ដើម្បីបើកសិទ្ធិឱ្យសមាសភាគមេអាចគ្រប់គ្រង DOM Element របស់សមាសភាគកូនបាន យើងត្រូវប្រើ \`React.forwardRef()\`។

### ឧទាហរណ៍៖
\`\`\`jsx
const CustomInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));
\`\`\``
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Custom Input component wrapped in forwardRef
  const SearchInput = React.forwardRef((props, ref) => {
    return (
      <div style={{ marginBottom: '10px' }}>
        <span style={{ fontSize: '12px', color: '#64748b', display: 'block', marginBottom: '4px' }}>🔍 FORWARDED ELEMENT:</span>
        <input 
          ref={ref}
          type="text" 
          placeholder="Type search terms..." 
          style={{ padding: '8px', width: '100%', boxSizing: 'border-box', border: '2px solid #cbd5e1', borderRadius: '6px' }}
        />
      </div>
    );
  });

  function App() {
    const inputRef = React.useRef(null);

    const handleFocusInput = () => {
      // Direct access to the input DOM node inside SearchInput!
      inputRef.current.focus();
      inputRef.current.style.borderColor = "#4f46e5";
    };

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '300px' }}>
        <h3>Forwarding DOM References</h3>
        <SearchInput ref={inputRef} />
        <button 
          onClick={handleFocusInput}
          style={{ width: '100%', padding: '8px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Set Direct Input Focus
        </button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "react-hoc",
    title: { en: "React HOC", km: "មុខងារ Higher-Order Components" },
    content: {
      en: `# React HOC
A **Higher-Order Component (HOC)** is an advanced pattern in React for reusing component logic. An HOC is not a component itself; it is a function that takes a component and returns a new, enhanced component.

### HOC Concept:
\`\`\`javascript
const EnhancedComponent = withLogging(MyComponent);
\`\`\`

### Common Use Cases:
* Adding common loading animations during data fetching.
* Wrapping views to enforce authentication rules or permission levels.
* Injecting custom localized translations.`,
      km: `# មុខងារ Higher-Order Components
**Higher-Order Component (HOC)** គឺជាទម្រង់រចនាកូដកម្រិតខ្ពស់របស់ React សម្រាប់ប្រើប្រាស់ឡូហ្សិកសមាសភាគឡើងវិញ។ HOC មិនមែនជាសមាសភាគដោយខ្លួនឯងនោះទេ ប៉ុន្តែវាជាអនុគមន៍ដែលទទួលយកសមាសភាគមួយ រួចផ្តល់មកវិញនូវសមាសភាគថ្មីដែលមានលក្ខណៈប្រសើរជាងមុន។

### ទម្រង់មូលដ្ឋាន៖
\`\`\`javascript
const EnhancedComponent = withLogging(MyComponent);
\`\`\`

### ករណីប្រើប្រាស់ញឹកញាប់៖
* បន្ថែមចលនាកំពុងដំណើរការ (Loading) នៅពេលទាញយកទិន្នន័យ។
* រុំសមាសភាគដើម្បីផ្ទៀងផ្ទាត់សិទ្ធិចូលប្រើប្រាស់ (Authentication)។
* បញ្ចូលការបកប្រែភាសា (Localization) ទៅក្នុងសមាសភាគជាស្វ័យប្រវត្ត។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  // Higher-Order Component wrapping helper
  function withAuthorization(WrappedComponent) {
    return function EnhancedComponent({ isLoggedIn, ...props }) {
      if (!isLoggedIn) {
        return (
          <div style={{ padding: '20px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#991b1b' }}>
            <h3>⚠️ Access Restricted</h3>
            <p style={{ fontSize: '13px', margin: 0 }}>You must be logged in to access this admin panel workspace.</p>
          </div>
        );
      }
      // Return wrapped component with all passed props
      return <WrappedComponent {...props} />;
    };
  }

  // Base Admin Panel component
  function AdminPanel() {
    return (
      <div style={{ padding: '20px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', color: '#1e3a8a' }}>
        <h3>🔒 Secure Admin Terminal</h3>
        <p style={{ fontSize: '13px' }}>Pipeline status: <strong>Online</strong></p>
        <button style={{ padding: '6px 12px' }}>Clear System Cache</button>
      </div>
    );
  }

  // Enhance AdminPanel with Authorization logic via HOC
  const SecuredAdminPanel = withAuthorization(AdminPanel);

  function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
        <h3 style={{ marginBottom: '20px' }}>HOC Wrapper Pattern</h3>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={loggedIn} 
              onChange={(e) => setLoggedIn(e.target.checked)} 
            /> Simulate User Authenticated State
          </label>
        </div>

        {/* Displaying enhanced component */}
        <SecuredAdminPanel isLoggedIn={loggedIn} />
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`
  },
  {
    id: "react-sass",
    title: { en: "React Sass", km: "ភាសារចនា Sass ក្នុង React" },
    content: {
      en: `# React Sass
Sass stands for **Syntactically Awesome Stylesheets**. It is a powerful CSS pre-processor that adds features like variables, nested selectors, mixins, and mathematical operators.

### Key Sass Features:
* **Nesting:** Group selectors hierarchical:
  \`\`\`scss
  nav {
    ul { margin: 0; }
    li { display: inline-block; }
  }
  \`\`\`
* **Variables:** Store reusable hex colors or sizing variables: \`$primary-color: #4f46e5;\`

> **Note:** To write Sass in React, install the Sass precompiler via \`npm install sass\` in your project folder, and import \`.scss\` files directly.`,
      km: `# ភាសារចនា Sass ក្នុង React
Sass តំណាងឱ្យ **Syntactically Awesome Stylesheets**។ វាគឺជា CSS Pre-processor ដ៏មានឥទ្ធិពលដែលបន្ថែមមុខងារទំនើបៗដូចជា អថេរ (Variables), ការសរសេររុំគ្នា (Nested selectors), Mixins និងការគណនាលេខ។

### មុខងារសំខាន់ៗរបស់ Sass៖
* **Nesting:** សរសេរ Selector បញ្ចូលគ្នាតាមឋានានុក្រម៖
  \`\`\`scss
  nav {
    ul { margin: 0; }
    li { display: inline-block; }
  }
  \`\`\`
* **Variables:** រក្សាទុកតម្លៃពណ៌ ឬទំហំ៖ \`$primary-color: #4f46e5;\`

> **សម្គាល់៖** ដើម្បីសរសេរ Sass ក្នុងគម្រោង React អ្នកគ្រាន់តែដំឡើងកម្មវិធីចងក្រង Sass តាមរយៈ \`npm install sass\` រួចទាញយកឯកសារ \`.scss\` មកប្រើប្រាស់ជាការស្រេច។`
    },
    starterCode: `<div id="root"></div>
<script type="text/babel">
  function SassDemo() {
    // Simulating structured nesting behavior of SCSS styles
    const simulatedSass = {
      card: {
        padding: '24px',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
        // nested visual properties
        title: {
          color: '#4f46e5',
          fontSize: '20px',
          margin: '0 0 10px 0'
        },
        button: {
          padding: '8px 16px',
          background: '#4f46e5',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }
      }
    };

    return (
      <div style={simulatedSass.card}>
        <h3 style={simulatedSass.card.title}>Sass Hierarchical Nesting</h3>
        <p style={{ fontSize: '13px', color: '#64748b' }}>
          This component imitates Sass nesting layout styles where element rules inherit properties under a unified master component tree.
        </p>
        <button style={simulatedSass.card.button}>Nesting Button</button>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<SassDemo />);
</script>`
  }
];
