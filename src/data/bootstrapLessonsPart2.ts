import { Lesson } from '../types';

export const bootstrapLessonsPart2: Lesson[] = [
  {
    id: "bs5-navs",
    title: { en: "BS5 Navs", km: "សមាសភាគបញ្ជី Navs" },
    content: {
      en: `# Bootstrap 5 Navs
Navs are flexible lists of tabs or pills used to create sub-menus or alternate views inside a single web workspace.

### Key Nav Types
1. **Pills Style:** Add **\`.nav-pills\`** to make list items style like rounded capsules.
2. **Tabs Style:** Add **\`.nav-tabs\`** to create standard horizontal browser-style tabs.

\`\`\`html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Profile</a>
  </li>
</ul>
\`\`\`

- **Alignment:** Center your menu using \`.justify-content-center\` or align to the right using \`.justify-content-end\`.`,
      km: `# សមាសភាគបញ្ជី Navs ក្នុង Bootstrap 5
Navs គឺជាសមាសភាគបញ្ជីតំណភ្ជាប់ដែលអាចរៀបចំជារាងផ្ទាំងកាត់ (Tabs) ឬរាងគ្រាប់ថ្នាំ (Pills) សម្រាប់បង្កើតម៉ឺនុយរង ឬប្លង់ជម្រើសក្នុងទំព័រតែមួយ។

### ប្រភេទ Navs សំខាន់ៗ
1. **Pills Style:** បន្ថែម Class **\`.nav-pills\`** ដើម្បីធ្វើឱ្យតំណភ្ជាប់មានរាងមូលទ្រវែង។
2. **Tabs Style:** បន្ថែម Class **\`.nav-tabs\`** ដើម្បីបង្កើតជម្រើសផ្ទាំងកាត់បែបគេហទំព័រស្តង់ដារ។

\`\`\`html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">ទំព័រដើម</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ប្រវត្តិរូប</a>
  </li>
</ul>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container text-center" style="max-width: 500px;">
    <h3 class="mb-4">Tabs vs Pills Layouts</h3>

    <!-- Nav Tabs style -->
    <ul class="nav nav-tabs mb-4 justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">Inbox</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Archive</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Trash (0)</a>
      </li>
    </ul>

    <!-- Nav Pills style -->
    <ul class="nav nav-pills justify-content-center">
      <li class="nav-item">
        <a class="nav-link active bg-indigo" href="#">Active Pill</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Second Option</a>
      </li>
    </ul>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-navbar",
    title: { en: "BS5 Navbar", km: "របារម៉ឺនុយ Navbar" },
    content: {
      en: `# Bootstrap 5 Navbar
The Navbar is a responsive header navigation component that automatically collapses into a hamburger icon on mobile viewports.

### Core Structure
A basic navbar requires:
1. Outer container with **\`.navbar\`**, \`.navbar-expand-lg\` (controls collapse breakpoint), and utility color classes like \`.bg-dark navbar-dark\`.
2. A branding item with class **\`.navbar-brand\`**.
3. A hamburger toggler button with **\`.navbar-toggler\`** + \`data-bs-toggle="collapse"\`.
4. Wrap navigation items inside a collapsible container with **\`.collapse navbar-collapse\`**.

\`\`\`html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
      </ul>
    </div>
  </div>
</nav>
\`\`\``,
      km: `# របារម៉ឺនុយ Navbar ក្នុង Bootstrap 5
Navbar គឺជាសមាសភាគក្បាលគេហទំព័រ (Header Navigation) ដែលអាចប្រមូលផ្តុំតំណភ្ជាប់ និងបង្រួមខ្លួនទៅជាប៊ូតុងម៉ឺនុយបីបន្ទាត់ (Hamburger Menu) ដោយស្វ័យប្រវត្តិលើអេក្រង់ទូរស័ព្ទ។

### វាក្យសម្ពន្ធស្នូល
របារម៉ឺនុយត្រូវការធាតុដូចជា៖
១. ថ្នាក់មេមាន Class **\`.navbar\`**, \`.navbar-expand-lg\` (កំណត់ទំហំបង្រួម) និងពណ៌ដូចជា \`.bg-dark navbar-dark\`។
២. ផ្លាកយីហោមាន Class **\`.navbar-brand\`**។
៣. ប៊ូតុងបញ្ជាបង្រួមពន្លាតមាន Class **\`.navbar-toggler\`** និង \`data-bs-toggle="collapse"\`។
៤. បញ្ជីតំណភ្ជាប់រុំដោយប្រអប់ **\`.collapse navbar-collapse\`**។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <!-- Responsive Dark Navbar -->
  <nav class="navbar navbar-expand-md navbar-dark bg-primary shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Sabaicode App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light text-white" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="p-4">
    <h6>Resize sandbox preview width below to see Navbar fold dynamically!</h6>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-carousel",
    title: { en: "BS5 Carousel", km: "ស្លាយវិលជុំ Carousel" },
    content: {
      en: `# Bootstrap 5 Carousel
The Carousel is a slideshow component for cycling through elements like images or text blocks.

### Core Carousel Structure
Wrap slide items inside a **\`.carousel\`** with \`data-bs-ride="carousel"\` for auto-playing. Use **\`.carousel-inner\`** and **\`.carousel-item\`** for slides:

\`\`\`html
<div id="heroSlides" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="slide2.jpg" class="d-block w-100" alt="Slide 2">
    </div>
  </div>
</div>
\`\`\`

- **Indicators & Controls:** Add indicators (little dots at the bottom) and previous/next navigation arrows for manual slide control.`,
      km: `# ស្លាយវិលជុំ Carousel ក្នុង Bootstrap 5
Carousel គឺជាសមាសភាគបញ្ចាំងស្លាយរូបភាព ឬអត្ថបទរត់កាត់អេក្រង់ម្តងមួយៗដោយស្វ័យប្រវត្ត ឬតាមរយៈការបញ្ជាចុច។

### ទ្រង់ទ្រាយជាមូលដ្ឋាន
ព័ទ្ធស្លាយជុំវិញដោយប្រអប់មាន Class **\`.carousel\`** ជាមួយ \`data-bs-ride="carousel"\` ដើម្បីបញ្ចាំងស្វ័យប្រវត្ត។ ប្រើ **\`.carousel-inner\`** និង **\`.carousel-item\`** សម្រាប់រូបភាពនីមួយៗ៖

\`\`\`html
<div id="heroSlides" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
\`\`\`

- **ប៊ូតុងបញ្ជា (Controls):** អ្នកអាចបន្ថែមប៊ូតុង សញ្ញាព្រួញមុន/បន្ទាប់ និងចំនុចចង្អុលខាងក្រោម (Indicators) ដើម្បីបញ្ជាស្លាយដោយផ្ទាល់ដៃ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-3">
  <div class="container" style="max-width: 600px;">
    
    <!-- Autoplay Carousel with Controls -->
    <div id="carouselExampleIndicators" class="carousel slide shadow rounded-3 overflow-hidden" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner" style="height: 250px;">
        <div class="carousel-item active bg-primary text-white text-center py-5 h-100">
          <div class="py-5">
            <h3>Spectacular Slide 1</h3>
            <p>Style layouts with high-contrast color banners.</p>
          </div>
        </div>
        <div class="carousel-item bg-dark text-white text-center py-5 h-100">
          <div class="py-5">
            <h3>Elegant Slide 2</h3>
            <p>Integrate fully functional sliding templates.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-modal",
    title: { en: "BS5 Modal", km: "ប្រអប់ផ្ទាំងបញ្ជា Modal" },
    content: {
      en: `# Bootstrap 5 Modal
Modals are dialog overlays popped on top of the main webpage viewport, ideal for confirmations, registrations, and logins.

### Structure of Modal dialogs
A standard Modal has three main parts inside a **\`.modal-content\`** container:
1. **\`.modal-header\`**: Brand titles and close button (\`btn-close\`).
2. **\`.modal-body\`**: Actual form/content container.
3. **\`.modal-footer\`**: Control buttons (Dismiss / Submit).

### Modal Triggering
Use **\`data-bs-toggle="modal"\`** on a button combined with the targeting ID **\`data-bs-target="#modalID"\`**:

\`\`\`html
<!-- Button trigger modal -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Open Modal
</button>
\`\`\``,
      km: `# ប្រអប់ផ្ទាំងបញ្ជា Modal ក្នុង Bootstrap 5
Modals គឺជាផ្ទាំងសន្ទនាអណ្តែតអណ្តូង (Dialog boxes) ព័ទ្ធពីលើគេហទំព័រមេ ដែលប្រើសម្រាប់សួរការបញ្ជាក់ បញ្ចូលទិន្នន័យ ឡុកចូល ឬចុះឈ្មោះ។

### ទ្រង់ទ្រាយសមាសភាគ
នៅក្នុងប្រអប់មាន Class **\`.modal-content\`** បែងចែកជា ៣ផ្នែកធំៗ៖
១. **\`.modal-header\`**: ចំណងជើងប្រអប់ និងប៊ូតុងបិទ (\`btn-close\`)។
២. **\`.modal-body\`**: ខ្លឹមសារ ឬទម្រង់បំពេញទិន្នន័យ។
៣. **\`.modal-footer\`**: ប៊ូតុងបញ្ជាបិទ ឬរក្សាទុក។

### របៀបចុចបញ្ជាបើក
ត្រូវប្រើ Attribute **\`data-bs-toggle="modal"\`** និងចង្អុលទៅ ID របស់ផ្ទាំង Modal តាមរយៈ **\`data-bs-target="#modalID"\`**៖

\`\`\`html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  បើកផ្ទាំង Modal
</button>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 text-center">
  <div class="container py-4">
    <h3 class="mb-4">Standard Bootstrap Modal Dialog</h3>

    <!-- Trigger Button -->
    <button type="button" class="btn btn-danger btn-lg px-4" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
      Deactivate Workspace
    </button>

    <!-- Modal Content Block -->
    <div class="modal fade" id="confirmDeleteModal" tabindex="-1" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg border-0" style="border-radius: 16px;">
          <div class="modal-header bg-danger text-white border-0" style="border-top-left-radius: 16px; border-top-right-radius: 16px;">
            <h5 class="modal-title fw-bold" id="confirmDeleteModalLabel">Confirm Deactivation</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 text-start">
            <p class="mb-0 text-muted">
              Are you sure you want to deactivate your workspace? All saved configurations and progress logs will be permanently erased. This action cannot be undone.
            </p>
          </div>
          <div class="modal-footer border-0 bg-light" style="border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
            <button type="button" class="btn btn-secondary px-3 py-2 rounded-xl" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger px-4 py-2 rounded-xl">Confirm Delete</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-tooltip",
    title: { en: "BS5 Tooltip", km: "ព័ត៌មានជំនួយពេលដាក់ម៉ៅ Tooltip" },
    content: {
      en: `# Bootstrap 5 Tooltip
Tooltips are small contextual labels that appear when hovering over elements.

### Setup and Triggering
Create a tooltip by adding **\`data-bs-toggle="tooltip"\`** and **\`title="Your tooltip description text"\`** to any element:
\`\`\`html
<button class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Hover over me
</button>
\`\`\`

> **CRITICAL Pitfall:** Tooltips are **opt-in** for performance reasons. You **MUST** initialize tooltips manually via JavaScript before they will work!
\`\`\`javascript
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
\`\`\``,
      km: `# ព័ត៌មានជំនួយពេលដាក់ក្បាលម៉ៅ Tooltip ក្នុង Bootstrap 5
Tooltips គឺជាផ្លាកអក្សរពន្យល់តូចៗដែលលេចចេញមកនៅពេលអ្នកដាក់ក្បាលម៉ៅ (Hover) ពីលើប៊ូតុង ឬអត្ថបទអ្វីមួយ។

### របៀបបង្កើត
បន្ថែម Attribute **\`data-bs-toggle="tooltip"\`** និង **\`title="ពាក្យការពន្យល់"\`** ទៅលើ element ណាដែលចង់ប្រើ៖
\`\`\`html
<button class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="ការពន្យល់ខាងលើ">
  ដាក់ម៉ៅពីលើខ្ញុំ
</button>
\`\`\`

> **ចំណាំសំខាន់បំផុត៖** Tooltips មិនដំណើរការភ្លាមៗដោយស្វ័យប្រវត្តទេ! អ្នក **ត្រូវតែ** បើកដំណើរការវា (Initialize) តាមរយៈកូដ JavaScript បន្តិចជាមុនសិន៖
\`\`\`javascript
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 text-center">
  <div class="container py-4">
    <h3 class="mb-4">Bootstrap Tooltips</h3>

    <!-- Action Buttons with Tooltips -->
    <button type="button" class="btn btn-secondary me-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
      Tooltip on top
    </button>
    <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
      Tooltip on bottom
    </button>

    <script>
      // Initialize all tooltips on this document
      document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
      });
    </script>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-popover",
    title: { en: "BS5 Popover", km: "ប្រអប់ព័ត៌មាន Popover" },
    content: {
      en: `# Bootstrap 5 Popovers
Similar to tooltips, Popovers are larger popup boxes containing a title and description, triggered upon clicking an element.

### Setup and Triggering
Add **\`data-bs-toggle="popover"\`**, **\`title="Title"\`**, and **\`data-bs-content="Content description"\`**:
\`\`\`html
<button class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="Detailed information...">
  Click to toggle popover
</button>
\`\`\`

> **Note:** Just like tooltips, Popovers must be initialized manually using vanilla JavaScript!`,
      km: `# ប្រអប់ព័ត៌មាន Popover ក្នុង Bootstrap 5
ស្រដៀងគ្នានឹង Tooltips ដែរ Popovers គឺជាប្រអប់លេចចេញដែលធំជាងមុន ដែលអាចផ្ទុកទាំងចំណងជើង និងកថាខណ្ឌពិពណ៌នាលម្អិត ហើយវាបង្ហាញឡើងនៅពេលអ្នកចុច (Click) លើ element។

### របៀបបង្កើត
បន្ថែម Attribute **\`data-bs-toggle="popover"\`**, **\`title="ចំណងជើង" \`** និង **\`data-bs-content="ខ្លឹមសារពន្យល់"\`**៖
\`\`\`html
<button class="btn btn-danger" data-bs-toggle="popover" title="ចំណងជើង" data-bs-content="ការពន្យល់លម្អិត...">
  ចុចដើម្បីបង្ហាញ Popover
</button>
\`\`\`

> **ចំណាំ៖** ដូចគ្នានឹង Tooltips ដែរ Popovers តម្រូវឱ្យអ្នកសរសេរកូដបើកដំណើរការ (Initialize) ដោយដៃជាមួយ JavaScript ជាមុនសិន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 text-center">
  <div class="container py-4">
    <h3 class="mb-4">Bootstrap Popovers</h3>

    <!-- Clickable Popover -->
    <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="popover" title="Database Status" data-bs-content="Database backup completed successfully at 02:40 AM today with 0 packet drops.">
      Check DB Status
    </button>

    <script>
      // Initialize all popovers on this document
      document.addEventListener('DOMContentLoaded', function () {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(el => new bootstrap.Popover(el));
      });
    </script>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-toast",
    title: { en: "BS5 Toast", km: "ប្រអប់ដំណឹងរហ័ស Toast" },
    content: {
      en: `# Bootstrap 5 Toasts
Toasts are lightweight push notifications designed to mimic mobile OS alerts. They slide and fade smoothly into view (usually at the corner of the screen).

### Core Structure
\`\`\`html
<div class="toast show" role="alert">
  <div class="toast-header">
    <strong class="me-auto">Notification Header</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    Successfully completed!
  </div>
</div>
\`\`\`

> **Note:** To control when toasts show and hide dynamically, call the bootstrap JS API: \`new bootstrap.Toast(element).show()\`.`,
      km: `# ប្រអប់ដំណឹងរហ័ស Toast ក្នុង Bootstrap 5
Toasts គឺជាប្រអប់សារជូនដំណឹងរុញខ្លីៗ (Push notifications) ដែលរំកិល និងលេចចេញមកយ៉ាងស្រទន់ (ជាធម្មតានៅជ្រុងខាងស្តាំនៃអេក្រង់) ស្រដៀងនឹងប្រព័ន្ធជូនដំណឹងរបស់ទូរស័ព្ទដៃ។

### វាក្យសម្ពន្ធមូលដ្ឋាន
\`\`\`html
<div class="toast show">
  <div class="toast-header">
    <strong class="me-auto">ចំណងជើងដំណឹង</strong>
    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
  </div>
  <div class="toast-body">
    បានរក្សាទុកទិន្នន័យរួចរាល់!
  </div>
</div>
\`\`\`

> **ចំណាំ៖** ដើម្បីបង្ហាញ ឬលាក់ Toast តាមរយៈព្រឹត្តិការណ៍នានា (ដូចជាចុចប៊ូតុង) អ្នកត្រូវប្រើប្រាស់កូដបញ្ជា៖ \`new bootstrap.Toast(element).show()\`។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 bg-light text-center">
  <div class="container">
    <h3 class="mb-3">Bootstrap Live Toasts</h3>

    <!-- Launch Button -->
    <button type="button" class="btn btn-dark" id="liveToastBtn">Show Live Notification</button>

    <!-- Toast Placement container -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="liveToast" class="toast hide border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true" style="border-radius: 12px;">
        <div class="toast-header bg-dark text-white border-0" style="border-top-left-radius: 12px; border-top-right-radius: 12px;">
          <strong class="me-auto">System Sync</strong>
          <small class="text-secondary">Just now</small>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body bg-white text-dark text-start" style="border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
          Your workspace backup has been updated on Cloud Run securely.
        </div>
      </div>
    </div>

    <script>
      // JS script trigger to display toast on click
      const toastTrigger = document.getElementById('liveToastBtn')
      const toastLiveExample = document.getElementById('liveToast')
      if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
          const toast = new bootstrap.Toast(toastLiveExample)
          toast.show()
        })
      }
    </script>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-scrollspy",
    title: { en: "BS5 Scrollspy", km: "ការតាមដានរមូរ Scrollspy" },
    content: {
      en: `# Bootstrap 5 Scrollspy
Scrollspy automatically updates navigation links based on the current scroll position of the viewport inside content sections.

### Key Implementation Attributes
1. Apply **\`data-bs-spy="scroll"\`** and **\`data-bs-target="#navBarID"\`** on the scrollable container.
2. Ensure targeting container elements match respective header IDs matching nav links.
3. The scrollable container must have **\`position: relative;\`** and a specified height limit (\`overflow-y: scroll;\`).

\`\`\`html
<body data-bs-spy="scroll" data-bs-target="#myNavbar">
  <!-- Content sections -->
</body>
\`\`\``,
      km: `# ការតាមដានរមូរ Scrollspy ក្នុង Bootstrap 5
Scrollspy ជួយផ្លាស់ប្តូរ និងរំលេចពណ៌តំណភ្ជាប់ម៉ឺនុយ (Active class) ដោយស្វ័យប្រវត្តិ ទៅតាមទីតាំងមាតិកាដែលអ្នកកំពុងតែអូសរមូរ (Scroll) មើលនៅលើទំព័រ។

### លក្ខខណ្ឌសំខាន់ៗ
១. បន្ថែម Attribute **\`data-bs-spy="scroll"\`** និង **\`data-bs-target="#navBarID"\`** លើប្រអប់អូសរមូរ។
២. ធាតុមាតិកានីមួយៗត្រូវមាន ID ដែលត្រូវគ្នានឹងម៉ឺនុយតំណភ្ជាប់ (Links)។
៣. ប្រអប់អូសរមូរត្រូវមានស្ទីល **\`position: relative;\`** និងកំណត់កំពស់មាន \`overflow-y: scroll;\`។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    .scrollspy-example {
      position: relative;
      height: 200px;
      overflow-y: scroll;
    }
  </style>
</head>
<body class="p-4">
  <div class="container" style="max-width: 550px;">
    
    <!-- Navigation targets -->
    <nav id="navbar-example2" class="navbar navbar-light bg-light px-3 mb-3 rounded shadow-sm">
      <a class="navbar-brand fw-bold" href="#">Doc Index</a>
      <ul class="nav nav-pills">
        <li class="nav-item"><a class="nav-link" href="#scrollspyHeading1">Section 1</a></li>
        <li class="nav-item"><a class="nav-link" href="#scrollspyHeading2">Section 2</a></li>
      </ul>
    </nav>

    <!-- Scrollspy Container -->
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-white p-3 rounded border" tabindex="0">
      <h5 id="scrollspyHeading1" class="fw-bold text-primary">Section 1</h5>
      <p class="text-secondary text-sm">
        This is Section 1 details. Scroll down inside this frame to watch the active pill above switch seamlessly! Scrollspy automatically updates the navigation target.
      </p>
      <div style="height: 100px;"></div>
      <h5 id="scrollspyHeading2" class="fw-bold text-success">Section 2</h5>
      <p class="text-secondary text-sm">
        Welcome to Section 2. You reached the bottom of this document container. The navigation bar pill above has switched color dynamically!
      </p>
      <div style="height: 50px;"></div>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-offcanvas",
    title: { en: "BS5 Offcanvas", km: "ផ្ទាំងចំហៀង Offcanvas" },
    content: {
      en: `# Bootstrap 5 Offcanvas
Offcanvas is a hidden sidebar component that slides into view from the left, right, top, or bottom edges of the screen upon click.

### Offcanvas Classes
- **\`.offcanvas-start\`**: Slides in from the left.
- **\`.offcanvas-end\`**: Slides in from the right.
- **\`.offcanvas-bottom\`**: Slides in from the bottom.

\`\`\`html
<div class="offcanvas offcanvas-start" id="sidebarMenu">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Sidebar list items go here...
  </div>
</div>
\`\`\``,
      km: `# ផ្ទាំងចំហៀង Offcanvas ក្នុង Bootstrap 5
Offcanvas គឺជាសមាសភាគផ្ទាំងចំហៀង (Sidebar) ដែលលាក់ខ្លួននៅគែមអេក្រង់ ហើយនឹងរំកិលខ្លួនលេចចេញមក (ពីឆ្វេង ស្តាំ លើ ឬក្រោម) នៅពេលដែលអ្នកចុចប៊ូតុងបញ្ជា។

### Class កំណត់ទិសដៅ
- **\`.offcanvas-start\`**: រំកិលចេញមកពីខាងឆ្វេង។
- **\`.offcanvas-end\`**: រំកិលចេញមកពីខាងស្តាំ។
- **\`.offcanvas-bottom\`**: រំកិលឡើងមកពីខាងក្រោម។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 text-center">
  <div class="container py-4">
    <h3 class="mb-4">Bootstrap Offcanvas Drawers</h3>

    <!-- Trigger Button -->
    <button class="btn btn-primary px-4 py-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      Open Cart (Right Sidebar)
    </button>

    <!-- Offcanvas Frame (Right aligned) -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header bg-light">
        <h5 class="offcanvas-title fw-bold" id="offcanvasRightLabel">Shopping Cart</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-start">
        <p class="text-secondary text-sm">Your shopping cart is currently empty. Add items from our store to continue checking out!</p>
        <button class="btn btn-indigo w-100 mt-4 rounded-xl">Continue Shopping</button>
      </div>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-utilities",
    title: { en: "BS5 Utilities", km: "ថ្នាក់ជំនួយ Utilities" },
    content: {
      en: `# Bootstrap 5 Utilities
Utilities are single-purpose classes that help style components quickly without custom CSS.

### Essential Spacing Utilities
Follow the syntax: **\`{property}{sides}-{size}\`**
- **Properties:** \`p\` (padding), \`m\` (margin).
- **Sides:** \`t\` (top), \`b\` (bottom), \`s\` (start/left), \`e\` (end/right), \`x\` (horizontal), \`y\` (vertical).
- **Sizes:** \`0\` through \`5\`, and \`auto\`.
- **Example:** \`mt-4\` (margin top size 4), \`px-3\` (padding horizontal size 3).

### Borders & Shadows
- **Borders:** \`.border\`, \`.border-0\`, \`.border-primary\`.
- **Curvature:** \`.rounded-circle\`, \`.rounded-3\`.
- **Elevation Shadows:** \`.shadow-sm\`, \`.shadow\`, \`.shadow-lg\`.`,
      km: `# ថ្នាក់ជំនួយ Utilities ក្នុង Bootstrap 5
Utilities គឺជា Class ដែលមានតួនាទីតែមួយគត់ជាក់លាក់ ជួយតុបតែងស្ទីលសមាសភាគគេហទំព័របានរហ័សដោយមិនចាំបាច់សរសេរកូដ CSS ផ្ទាល់ខ្លួន។

### Spacing Utilities (Margins & Paddings)
ប្រើប្រាស់ទម្រង់៖ **\`{property}{sides}-{size}\`**
- **Properties:** \`p\` (Padding គម្លាតក្នុង), \`m\` (Margin គម្លាតក្រៅ)។
- **Sides:** \`t\` (ខាងលើ), \`b\` (ខាងក្រោម), \`s\` (ខាងឆ្វេង), \`e\` (ខាងស្តាំ), \`x\` (ឆ្វេងស្តាំសងខាង), \`y\` (លើក្រោម)។
- **Sizes:** \`0\` ដល់ \`5\` និង \`auto\`។
- **ឧទាហរណ៍:** \`mt-4\` (គម្លាតក្រៅខាងលើទំហំ៤), \`px-3\` (គម្លាតក្នុងឆ្វេងស្តាំទំហំ៣)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container">
    <h3 class="mb-4">Spacing, Border & Shadow Sandbox</h3>

    <div class="row g-3">
      <!-- Card with padding and shadow -->
      <div class="col-md-6">
        <div class="p-5 bg-white border border-secondary border-opacity-25 rounded-4 shadow-lg text-center">
          <h5 class="fw-bold mb-3">Heavy Shadow</h5>
          <p class="text-secondary text-sm mb-0">p-5 (heavy padding), shadow-lg, border, rounded-4</p>
        </div>
      </div>

      <!-- Card with small spacing -->
      <div class="col-md-6">
        <div class="p-3 bg-dark text-white rounded-2 shadow-sm text-center h-100 d-flex flex-column justify-content-center">
          <h5 class="mb-1 text-warning">Small Shadow</h5>
          <p class="text-secondary text-sm mb-0">p-3, shadow-sm, bg-dark, rounded-2</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-dark-mode",
    title: { en: "BS5 Dark Mode", km: "ប្រធានបទងងឹត Dark Mode" },
    content: {
      en: `# Bootstrap 5 Dark Mode
Bootstrap 5 has added native dark mode support starting from v5.3.0. You can toggle colors globally by using the **\`data-bs-theme\`** attribute.

### Activating Dark Mode
Apply **\`data-bs-theme="dark"\`** directly onto the parent element like \`<html>\`, \`<body>\`, or individual component containers (like cards or navbars) to instantly restyle everything:

\`\`\`html
<div class="card p-4 bg-body" data-bs-theme="dark">
  <h3 class="text-body">Dark Mode Activated</h3>
  <p class="text-body-secondary">Colors adjust automatically!</p>
</div>
\`\`\`

- **Semantic Body classes:** Use \`bg-body\` and \`text-body\` to ensure colors adapt beautifully when toggling theme states!`,
      km: `# ប្រធានបទងងឹត Dark Mode ក្នុង Bootstrap 5
ចាប់ពីកំណែ v5.3.0 មក Bootstrap 5 មានមុខងារគាំទ្រ Dark mode មកជាមួយស្រាប់។ អ្នកអាចប្តូរប្រធានបទពណ៌គេហទំព័រទាំងមូលដោយប្រើប្រាស់ Attribute **\`data-bs-theme\`**។

### របៀបបើកដំណើរការ
ដាក់ Attribute **\`data-bs-theme="dark"\`** ផ្ទាល់លើថេក \`<html>\`, \`<body>\` ឬប្រអប់សមាសភាគណាមួយ (ដូចជា Card ឬ Navbar) ដើម្បីប្តូរពណ៌ភ្លាមៗ៖

\`\`\`html
<div class="card p-4 bg-body" data-bs-theme="dark">
  <h3 class="text-body">Dark Mode ដំណើរការ</h3>
  <p class="text-body-secondary">ពណ៌នឹងផ្លាស់ប្តូរដោយស្វ័យប្រវត្ត!</p>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light text-center">
  <div class="container py-4" style="max-width: 500px;">
    
    <!-- Local Dark theme container -->
    <div id="themeBox" class="card p-4 bg-body border shadow-lg" data-bs-theme="light">
      <h4 id="themeTitle" class="fw-bold mb-2">Current Theme: Light</h4>
      <p class="text-body-secondary text-sm">
        Click the toggle button below to change the theme attribute "data-bs-theme" of this card dynamically!
      </p>
      
      <button id="toggleThemeBtn" class="btn btn-dark w-100 mt-3 rounded-pill">
        Toggle Theme Mode
      </button>
    </div>

    <script>
      const btn = document.getElementById('toggleThemeBtn');
      const box = document.getElementById('themeBox');
      const title = document.getElementById('themeTitle');

      btn.addEventListener('click', () => {
        const currentTheme = box.getAttribute('data-bs-theme');
        if (currentTheme === 'light') {
          box.setAttribute('data-bs-theme', 'dark');
          box.classList.remove('bg-white');
          title.textContent = 'Current Theme: Dark 🌙';
          btn.className = 'btn btn-light w-100 mt-3 rounded-pill';
        } else {
          box.setAttribute('data-bs-theme', 'light');
          title.textContent = 'Current Theme: Light ☀️';
          btn.className = 'btn btn-dark w-100 mt-3 rounded-pill';
        }
      });
    </script>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-flex",
    title: { en: "BS5 Flex", km: "សមាសភាគតម្រឹមបត់បែន Flex" },
    content: {
      en: `# Bootstrap 5 Flexbox Utilities
Quickly manage the layout, alignment, sizing, and order of grid columns or component blocks using Bootstrap's highly optimized Flexbox utility classes.

### Common Flexbox Helpers
- **Activate Flexbox:** Add **\`.d-flex\`** (or responsive \`.d-md-flex\`).
- **Flex Direction:** \`.flex-row\`, \`.flex-column\`, \`.flex-row-reverse\`.
- **Justify Content:** \`.justify-content-start\`, \`.justify-content-center\`, \`.justify-content-between\`.
- **Align Items:** \`.align-items-start\`, \`.align-items-center\`, \`.align-items-end\`.

\`\`\`html
<div class="d-flex justify-content-between align-items-center">
  <div>Item A</div>
  <div>Item B</div>
</div>
\`\`\``,
      km: `# សមាសភាគតម្រឹមបត់បែន Flexbox ក្នុង Bootstrap 5
គ្រប់គ្រងប្លង់ ការតម្រឹម ទំហំ និងលំដាប់លំដោយរបស់ប្រអប់នីមួយៗបានយ៉ាងរហ័ស ដោយប្រើប្រាស់ Class ជំនួយ Flexbox របស់ Bootstrap។

### ថ្នាក់ជំនួយ Flexbox សំខាន់ៗ
- **បើកដំណើរការ Flex:** បន្ថែម Class **\`.d-flex\`** (ឬ \`.d-md-flex\` តាមទំហំអេក្រង់)។
- **ទិសដៅរៀបចំ:** \`.flex-row\` (ផ្ដេក), \`.flex-column\` (បញ្ឈរ)។
- **តម្រឹមផ្តេក (Justify):** \`.justify-content-center\` (កណ្តាល), \`.justify-content-between\` (ចំហកណ្តាល)។
- **តម្រឹមបញ្ឈរ (Align):** \`.align-items-center\` (តម្រឹមចំហកណ្តាលបញ្ឈរ)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container">
    <h3 class="mb-4">Flexbox Alignment sandbox</h3>

    <!-- Flex container wrapping 3 colored items -->
    <div class="d-flex justify-content-between align-items-center p-4 bg-white rounded border shadow-sm mb-4">
      <div class="p-3 bg-primary text-white rounded">Item A</div>
      <div class="p-4 bg-success text-white rounded">Item B (Taller)</div>
      <div class="p-3 bg-danger text-white rounded">Item C</div>
    </div>
    
    <p class="text-secondary text-sm">The container above uses "d-flex justify-content-between align-items-center" to automatically distribute spacing and align items vertically in the center!</p>
  </div>
</body>
</html>`
  }
];
