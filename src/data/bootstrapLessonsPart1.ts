import { Lesson } from '../types';

export const bootstrapLessonsPart1: Lesson[] = [
  {
    id: "bs5-home",
    title: { en: "BS5 Home", km: "ទំព័រដើម BS5" },
    content: {
      en: `# Bootstrap 5 Home
Welcome to the Bootstrap 5 Responsive Design course! Bootstrap is the world's most popular open-source front-end framework for building responsive, mobile-first websites.

In this course, you will learn to construct modern layouts using Bootstrap's flexbox grid system, customize pre-styled components, and master utility-first typography, colors, and behaviors.

### Why Bootstrap 5?
- **Mobile-First Design:** Styled from mobile screens upwards out of the box.
- **Pre-Built Components:** Buttons, Modals, Navbars, and Carousels ready to use.
- **Easy Customization:** Easily styled via utility classes and variables.

> **Tip:** Bootstrap 5 has dropped jQuery. It now runs on pure, modern vanilla JavaScript, making it faster and lighter than ever!`,
      km: `# គេហទំព័រដើម Bootstrap 5
សូមស្វាគមន៍មកកាន់វគ្គសិក្សាស្វែងយល់ពី Bootstrap 5! Bootstrap គឺជាក្របខ័ណ្ឌ Front-end បើកចំហរដ៏ពេញនិយមបំផុតនៅលើពិភពលោកសម្រាប់ការសរសេរគេហទំព័រដែលឆ្លើយតបនឹងទំហំអេក្រង់ផ្សេងៗ (Responsive)។

នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនពីរបៀបសាងសង់គេហទំព័រទំនើបដោយប្រើប្រព័ន្ធ Grid របស់ Bootstrap, កែច្នៃសមាសភាគរចនាស្រាប់ៗ និងប្រើប្រាស់ Utility classes សម្រាប់រៀបចំអក្សរ ពណ៌ និងលក្ខណៈសម្បត្តិផ្សេងៗ។

### ហេតុអ្វីជ្រើសរើស Bootstrap 5?
- **Mobile-First Design:** រចនាឡើងជាចម្បងសម្រាប់ទូរស័ព្ទដៃរួចជាស្រេច។
- **Pre-Built Components:** មានប៊ូតុង ម៉ូដាល់ របារម៉ឺនុយ និងស្លាយវិលជុំស្រាប់ៗជាច្រើន។
- **ងាយស្រួលកែច្នៃ:** អាចកំណត់ស្ទីលតាមរយៈ Utility classes និងអថេរបានយ៉ាងងាយ។

> **គន្លឹះ៖** Bootstrap 5 បានលុបចោល jQuery ចេញហើយ។ ឥឡូវនេះវារត់លើ JavaScript សុទ្ធ ដែលធ្វើឱ្យវាដើរលឿន និងស្រាលជាងមុន!`
    },
    starterCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light p-4 text-center">
  <div class="container py-5">
    <div class="p-5 mb-4 bg-white rounded-4 shadow-sm border border-light">
      <h1 class="display-5 fw-bold text-primary">Hello, Bootstrap 5!</h1>
      <p class="col-md-8 mx-auto fs-5 text-muted">
        Start building spectacular, fully responsive websites with the world's favorite UI library.
      </p>
      <button class="btn btn-primary btn-lg px-4 rounded-pill" type="button">Explore Lessons</button>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-get-started",
    title: { en: "BS5 Get Started", km: "ការចាប់ផ្តើមដំបូង BS5" },
    content: {
      en: `# Bootstrap 5 Get Started
To include Bootstrap 5 in your web projects, you can either load it via CDN links or install it using package managers like npm.

### Standard CDN Setup
Add the following inside the \`<head>\` tag for the stylesheet:
\`\`\`html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
\`\`\`

And add this script bundle at the end of the \`<body>\` tag:
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
\`\`\`

> **Note:** The Bootstrap Bundle already contains **Popper.js**, which is required for dropdowns, tooltips, and popovers to work!`,
      km: `# ចាប់ផ្តើមជាមួយ Bootstrap 5
ដើម្បីដាក់បញ្ចូល Bootstrap 5 ទៅក្នុងគម្រោងរបស់អ្នក អ្នកអាចប្រើប្រាស់តំណភ្ជាប់ CDN ឬដំឡើងវាជាមួយកម្មវិធីគ្រប់គ្រងកញ្ចប់ដូចជា npm។

### ការដំឡើងតាម CDN ស្តង់ដារ
បន្ថែមបន្ទាត់ខាងក្រោមនៅក្នុងថេក \`<head>\` សម្រាប់ឯកសារ CSS៖
\`\`\`html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
\`\`\`

និងបន្ថែមបន្ទាត់ស្រ្គីបខាងក្រោមនៅចុងបញ្ចប់នៃថេក \`<body>\`៖
\`\`\`html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
\`\`\`

> **ចំណាំ៖** កញ្ចប់រួមរបស់ Bootstrap (Bootstrap Bundle) រួមបញ្ចូល **Popper.js** រួចជាស្រេច ដែលចាំបាច់សម្រាប់ដំណើរការ Dropdowns, Tooltips, និង Popovers!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-slate-50">
  <div class="card p-4 mx-auto" style="max-w: 450px;">
    <h3 class="text-success">System Configured!</h3>
    <p class="text-secondary">Bootstrap 5 style sheet is successfully loaded directly from the JSDelivr CDN network.</p>
    <div class="alert alert-info">Bootstrap 5 JavaScript bundle is also included for full interactivity.</div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-containers",
    title: { en: "BS5 Containers", km: "ប្រអប់ផ្ទុក Containers" },
    content: {
      en: `# Bootstrap 5 Containers
Containers are the most basic layout element in Bootstrap. They are used to contain, pad, and align your content within a given viewport.

### Types of Containers
1. **\`.container\`**: A responsive fixed-width container with max-width boundaries at each responsive breakpoint.
2. **\`.container-fluid\`**: A full-width container that spans the entire width of the viewport (width: 100% always).

\`\`\`html
<div class="container">
  <!-- Content aligned to center with responsive margins -->
</div>
<div class="container-fluid">
  <!-- Fluid content stretching from edge to edge -->
</div>
\`\`\`

> **Tip:** You should not place containers inside other containers, as they have responsive paddings and margins.`,
      km: `# ប្រអប់ផ្ទុក Containers ក្នុង Bootstrap 5
Containers គឺជាធាតុប្លង់គ្រឹះបំផុតនៅក្នុង Bootstrap។ វាត្រូវបានប្រើដើម្បីផ្ទុក តម្រឹម និងបង្កើតគម្លាតខាងក្នុងសម្រាប់មាតិការបស់អ្នក។

### ប្រភេទ Containers ផ្សេងៗ
1. **\`.container\`**: ជាប្រអប់ដែលមានទំហំច្បាស់លាស់ និងរក្សាគម្លាតសងខាងទៅតាមទំហំអេក្រង់នីមួយៗ (Responsive fixed-width)។
2. **\`.container-fluid\`**: ជាប្រអប់លាតសន្ធឹងពេញអេក្រង់ជានិច្ច (លាត ១០០% គ្រប់ទំហំអេក្រង់)។

\`\`\`html
<div class="container">
  <!-- មាតិកាតម្រឹមចំកណ្តាល -->
</div>
<div class="container-fluid">
  <!-- មាតិកាលាតសន្ធឹងពេញគែមអេក្រង់ -->
</div>
\`\`\`

> **គន្លឹះ៖** អ្នកមិនគួរដាក់ container មួយនៅខាងក្នុង container មួយទៀតទេ ព្រោះពួកវាមានគម្លាត (Padding) ផ្ទាល់ខ្លួនរួចជាស្រេច។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="py-4">
  <!-- 1. Fixed Container -->
  <div class="container bg-primary text-white p-3 mb-4 rounded text-center">
    <h5>Fixed Container (.container)</h5>
    <p>This box centers and adjusts its width depending on your browser size.</p>
  </div>

  <!-- 2. Fluid Container -->
  <div class="container-fluid bg-secondary text-white p-3 rounded text-center">
    <h5>Fluid Container (.container-fluid)</h5>
    <p>This container always spans the entire 100% width of the screen.</p>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-grid-basic",
    title: { en: "BS5 Grid Basic", km: "គ្រឹះប្រព័ន្ធក្រឡា Grid" },
    content: {
      en: `# Bootstrap 5 Grid Basic
Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It is built with flexbox and is fully responsive.

### Essential Rules
1. Columns must be immediate children of a **\`.row\`**.
2. Rows are groups of columns and must be placed within a **\`.container\`** or \`.container-fluid\`.
3. The total grid layout sums up to **12 columns** across.

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-6">Left Column (Takes 6/12)</div>
    <div class="col-6">Right Column (Takes 6/12)</div>
  </div>
</div>
\`\`\`

> **Note:** If you use \`.col\` without specifying a number, Bootstrap will auto-distribute the available width equally!`,
      km: `# គ្រឹះប្រព័ន្ធក្រឡា Grid ក្នុង Bootstrap 5
ប្រព័ន្ធ Grid របស់ Bootstrap ប្រើស៊េរីនៃ containers, rows, និង columns ដើម្បីរៀបចំប្លង់ និងតម្រឹមមាតិកា។ វាត្រូវបានបង្កើតឡើងដោយប្រើ flexbox និងមានភាពឆ្លើយតបខ្ពស់។

### វិធានការសំខាន់ៗ
1. Columns (\`.col-*\`) ត្រូវតែស្ថិតនៅផ្ទាល់ក្នុង **\`.row\`**។
2. Rows (\`.row\`) ត្រូវស្ថិតនៅក្នុង **\`.container\`** ឬ \`.container-fluid\`។
3. ក្រឡាសរុបនៃជួរដេកនីមួយៗគឺ **១២ ជួរឈរ (12 Columns)**។

\`\`\`html
<div class="container">
  <div class="row">
    <div class="col-6">ជួរឈរឆ្វេង (យក ៦/១២)</div>
    <div class="col-6">ជួរឈរស្តាំ (យក ៦/១២)</div>
  </div>
</div>
\`\`\`

> **ចំណាំ៖** ប្រសិនបើអ្នកប្រើប្រាស់ \`.col\` ធម្មតាដោយមិនបញ្ជាក់លេខ Bootstrap នឹងបែងចែកទំហំស្មើគ្នាដោយស្វ័យប្រវត្តិ!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-3 bg-light">
  <div class="container">
    <h3 class="mb-3">Standard 12-Column Grid</h3>
    
    <!-- Auto Width Columns -->
    <div class="row mb-3">
      <div class="col p-3 bg-indigo text-white border text-center rounded bg-primary">Auto Col 1</div>
      <div class="col p-3 bg-indigo text-white border text-center rounded bg-primary">Auto Col 2</div>
      <div class="col p-3 bg-indigo text-white border text-center rounded bg-primary">Auto Col 3</div>
    </div>

    <!-- Explicit Numbered Columns (Sum to 12) -->
    <div class="row">
      <div class="col-4 p-3 bg-dark text-white border text-center rounded">col-4 (Takes 1/3)</div>
      <div class="col-8 p-3 bg-secondary text-white border text-center rounded">col-8 (Takes 2/3)</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-typography",
    title: { en: "BS5 Typography", km: "ការរៀបចំអក្សរ Typography" },
    content: {
      en: `# Bootstrap 5 Typography
Bootstrap 5 sets default font families, line-height, and margins. It also includes modern display headings and blockquote elements to design polished text layers.

### Key Heading Classes
- **Heading Styles:** \`.h1\` through \`.h6\` (can be applied to any element to make it style like a header).
- **Display Headings:** \`.display-1\` through \`.display-6\` for larger, more stylized display typography.

### Utility Font helpers
- **\`.lead\`**: Makes a paragraph stand out with a slightly larger font size.
- **Font weights:** \`.fw-bold\`, \`.fw-normal\`, \`.fw-light\`, \`.fst-italic\`.
- **Text Align:** \`.text-start\`, \`.text-center\`, \`.text-end\`.`,
      km: `# ការរៀបចំអក្សរ Typography ក្នុង Bootstrap 5
Bootstrap 5 កំណត់ទម្រង់អក្សរ លំហអក្សរ និងគម្លាតលំនាំដើម។ វារួមបញ្ចូលទាំង display headings ទំនើបៗ និងធាតុសម្រង់សំដី (Blockquote) ដើម្បីរចនាអត្ថបទឱ្យមានភាពទាក់ទាញ។

### ថ្នាក់សំខាន់ៗ
- **Heading Styles:** \`.h1\` ដល់ \`.h6\` (អាចប្រើលើ tag ណាផ្សេងទៀតដើម្បីឱ្យវាមានទំហំដូច heading)។
- **Display Headings:** \`.display-1\` ដល់ \`.display-6\` សម្រាប់អក្សរចំណងជើងធំៗ និងទាន់សម័យ។

### ជំនួយការតម្រឹមអក្សរ (Utilities)
- **\`.lead\`**: ធ្វើឱ្យកថាខណ្ឌលេចធ្លោជាមួយនឹងទំហំអក្សរធំជាងធម្មតាបន្តិច។
- **កម្រាស់អក្សរ:** \`.fw-bold\` (ដិត), \`.fw-normal\` (ធម្មតា), \`.fw-light\` (ស្តើង)។
- **តម្រឹមអត្ថបទ:** \`.text-start\` (ឆ្វេង), \`.text-center\` (កណ្តាល), \`.text-end\` (ស្តាំ)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container max-w-md">
    <!-- Display Heading -->
    <h1 class="display-4 text-center text-primary mb-3">Hero Title</h1>
    
    <!-- Lead paragraph -->
    <p class="lead text-center text-muted">
      This is a lead paragraph helper. It makes key introductory text pop.
    </p>

    <hr>

    <!-- Blockquote layout -->
    <blockquote class="blockquote text-center mt-4">
      <p class="mb-2">"True craftsmanship requires choosing the right details."</p>
      <footer class="blockquote-footer">Design Philosophy in <cite title="Source Title">Sabaicode</cite></footer>
    </blockquote>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-colors",
    title: { en: "BS5 Colors", km: "ពណ៌ Colors" },
    content: {
      en: `# Bootstrap 5 Colors
Bootstrap 5 comes with a comprehensive semantic color palette used to denote status, meaning, and branding.

### Core Semantic Colors
- **Primary:** \`primary\` (branding blue)
- **Secondary:** \`secondary\` (neutral gray)
- **Success:** \`success\` (positive green)
- **Danger:** \`danger\` (warning/error red)
- **Warning:** \`warning\` (alert yellow)
- **Info:** \`info\` (instruction cyan)
- **Light / Dark:** \`light\` (off-white) and \`dark\` (charcoal black)

### Text vs Background Classes
- For text color: **\`.text-{theme}\`** (e.g., \`text-primary\`)
- For background color: **\`.bg-{theme}\`** (e.g., \`bg-success\`)
- Background opacity can also be customized (e.g., \`bg-opacity-50\`)`,
      km: `# ប្រព័ន្ធពណ៌ ក្នុង Bootstrap 5
Bootstrap 5 មកជាមួយក្ដារពណ៌ដែលបង្ហាញពីអត្ថន័យ និងស្ថានភាពផ្សេងៗគ្នា (Semantic Colors) សម្រាប់ប្រើប្រាស់លើអត្ថបទ និងផ្ទៃខាងក្រោយ។

### ពណ៌ស្នូលសំខាន់ៗ
- **Primary:** \`primary\` (ពណ៌ខៀវតំណាងម៉ាកយីហោ)
- **Secondary:** \`secondary\` (ពណ៌ប្រផេះ)
- **Success:** \`success\` (ពណ៌បៃតងតំណាងភាពជោគជ័យ)
- **Danger:** \`danger\` (ពណ៌ក្រហមតំណាងគ្រោះថ្នាក់/កំហុស)
- **Warning:** \`warning\` (ពណ៌លឿងតំណាងការព្រមាន)
- **Info:** \`info\` (ពណ៌ខៀវខ្ចីតំណាងព័ត៌មាន)

### Class សម្រាប់អក្សរ និងផ្ទៃក្រោយ
- ពណ៌អត្ថបទ៖ **\`.text-{theme}\`** (ឧទាហរណ៍៖ \`text-primary\`)
- ពណ៌ផ្ទៃក្រោយ៖ **\`.bg-{theme}\`** (ឧទាហរណ៍៖ \`bg-success\`)`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container text-center">
    <h3 class="mb-4">Semantic Colors Palette</h3>

    <!-- Text Colors -->
    <p class="text-primary font-weight-bold">Primary Text (.text-primary)</p>
    <p class="text-success">Success Text (.text-success)</p>
    <p class="text-danger">Danger Text (.text-danger)</p>

    <!-- Background Badges -->
    <div class="d-flex justify-content-center gap-2 mt-3">
      <div class="p-3 bg-primary text-white rounded shadow-sm">Primary BG</div>
      <div class="p-3 bg-success text-white rounded shadow-sm">Success BG</div>
      <div class="p-3 bg-warning text-dark rounded shadow-sm">Warning BG</div>
      <div class="p-3 bg-danger text-white rounded shadow-sm">Danger BG</div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-tables",
    title: { en: "BS5 Tables", km: "តារាង Tables" },
    content: {
      en: `# Bootstrap 5 Tables
Tables are heavily styled in Bootstrap. By adding the basic **\`.table\`** class, your tables get soft borders, light padding, and neat alignment.

### Table Modifier Classes
- **\`.table-striped\`**: Adds zebra-striping background color to alternate table rows.
- **\`.table-bordered\`**: Adds borders on all sides of the table and cells.
- **\`.table-hover\`**: Enables a subtle hover state background effect on rows.
- **\`.table-dark\`**: Switches the table to a dark color scheme.
- **\`.table-responsive\`**: Adds responsive scrollbars to the container on small viewports.`,
      km: `# តារាង Tables ក្នុង Bootstrap 5
តារាងត្រូវបានរចនាយ៉ាងស្អាតនៅក្នុង Bootstrap។ ដោយគ្រាន់តែបន្ថែម Class **\`.table\`** តារាងរបស់អ្នកនឹងទទួលបានបន្ទាត់ខណ្ឌទន់ៗ គម្លាតPadding សមរម្យ និងការរៀបចំមានរបៀប។

### ថ្នាក់ជំនួយលើតារាង (Modifier Classes)
- **\`.table-striped\`**: បន្ថែមពណ៌ឆ្នូតឆ្លាស់គ្នាលើជួរដេកនីមួយៗ (Zebra stripes)។
- **\`.table-bordered\`**: បន្ថែមស៊ុមជុំវិញតារាង និងរាល់ក្រឡានីមួយៗ។
- **\`.table-hover\`**: បង្កើតស្រមោលប្រផេះស្រាលៗនៅពេលដែលអ្នកដាក់ក្បាលម៉ៅលើជួរដេក។
- **\`.table-dark\`**: ប្តូរតារាងទៅជាពណ៌ខ្មៅស្រអាប់។
- **\`.table-responsive\`**: ធ្វើឱ្យតារាងអាចអូសឆ្វេងស្តាំបានលើទូរស័ព្ទដៃ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container">
    <h3 class="mb-3">Hoverable Striped Table</h3>
    
    <div class="table-responsive">
      <table class="table table-striped table-hover table-bordered">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sok</td>
            <td>Dara</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Keo</td>
            <td>Sothy</td>
            <td>UI/UX Designer</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Chan</td>
            <td>Nika</td>
            <td>Product Manager</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-images",
    title: { en: "BS5 Images", km: "រូបភាព Images" },
    content: {
      en: `# Bootstrap 5 Images
Responsive image handling is critical to modern development. Bootstrap 5 provides utility classes to auto-scale, round, and frame your photos.

### Image Classes
- **\`.img-fluid\`**: Applies \`max-width: 100%\` and \`height: auto\` to auto-scale inside parent layouts.
- **\`.img-thumbnail\`**: Adds a thin, rounded 1px border frame with soft padding.
- **\`.rounded\`**: Rounds the corners of the image slightly.
- **\`.rounded-circle\`**: Forces the image into a perfect circle (requires a square 1:1 image).`,
      km: `# រូបភាព Images ក្នុង Bootstrap 5
ការគ្រប់គ្រងរូបភាពឆ្លើយតប (Responsive Images) គឺសំខាន់ណាស់។ Bootstrap 5 ផ្តល់ថ្នាក់ជំនួយដើម្បីពង្រីកបង្រួមរូបភាពដោយស្វ័យប្រវត្តិ ធ្វើជ្រុងមូល និងបង្កើតស៊ុម។

### ថ្នាក់គ្រប់គ្រងរូបភាព
- **\`.img-fluid\`**: ដាក់ឲ្យរូបភាពមានទំហំ \`max-width: 100%\` និង \`height: auto\` ដើម្បីបង្រួមពង្រីកតាមប្រអប់ផ្ទុករបស់វា។
- **\`.img-thumbnail\`**: បន្ថែមស៊ុមព័ទ្ធជុំវិញរូបភាពស្តើងៗ ១ភីកសែល ជាមួយគម្លាតខាងក្នុង។
- **\`.rounded\`**: ធ្វើឱ្យជ្រុងទាំងបួនរបស់រូបភាពមូលបន្តិច។
- **\`.rounded-circle\`**: កាត់រូបភាពឱ្យទៅជារង្វង់មូលយ៉ាងស្អាត (តម្រូវឲ្យរូបភាពមានសមាមាត្រការ៉េ ១:១)។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 text-center bg-light">
  <div class="container">
    <h3 class="mb-4">Image Styling Utilities</h3>

    <div class="row g-4 justify-content-center">
      <div class="col-md-4">
        <h6 class="text-secondary">Rounded Frame</h6>
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" class="img-fluid rounded shadow" alt="Landscape">
      </div>
      
      <div class="col-md-4">
        <h6 class="text-secondary">Thumbnail Frame</h6>
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=300" class="img-thumbnail" alt="Landscape">
      </div>

      <div class="col-md-4">
        <h6 class="text-secondary">Circular Avatar</h6>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" class="rounded-circle border" style="width: 120px; height: 120px; object-fit: cover;" alt="Avatar">
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-jumbotron",
    title: { en: "BS5 Jumbotron", km: "Jumbotron ប្លង់លេចធ្លោ" },
    content: {
      en: `# Bootstrap 5 Jumbotron (Hero Section)
In Bootstrap 5, the literal \`.jumbotron\` class has been officially **removed**. Instead, you easily build a customized Jumbotron / Hero section using a combination of spacing, backgrounds, and rounding utility classes!

### Modern Jumbotron Setup
To create a modern, clean hero layout, combine:
- **\`.p-5\`** for padding
- **\`.mb-4\`** for bottom margin
- **\`.bg-light\`** (or other background color)
- **\`.rounded-3\`** for rounded curvature

\`\`\`html
<div class="p-5 mb-4 bg-light rounded-3">
  <h1 class="display-5 fw-bold">Hero Section</h1>
  <p class="fs-4">Custom description goes here...</p>
</div>
\`\`\``,
      km: `# Jumbotron ក្នុង Bootstrap 5 (Hero Section)
នៅក្នុង Bootstrap 5 ថ្នាក់ \`.jumbotron\` ត្រូវបាន**លុបចោលជាផ្លូវការ**។ ផ្ទុយទៅវិញ អ្នកអាចបង្កើតប្លង់លេចធ្លោ (Hero Section) នេះឡើងវិញដោយការរួមផ្សំរវាង Spacing, Backgrounds, និង Rounding utilities!

### របៀបបង្កើតជុំបូត្រុងទំនើប
ដើម្បីបង្កើតប្លង់ Hero ស្អាតបាត សូមប្រើប្រាស់៖
- **\`.p-5\`**: បន្ថែមគម្លាតខាងក្នុងធំទូលាយ
- **\`.mb-4\`**: បន្ថែមគម្លាតខាងក្រោម
- **\`.bg-light\`**: ពណ៌ផ្ទៃខាងក្រោយពណ៌ប្រផេះស្រាល
- **\`.rounded-3\`**: ធ្វើឱ្យជ្រុងមូលស្អាត

\`\`\`html
<div class="p-5 mb-4 bg-light rounded-3">
  <h1 class="display-5 fw-bold">ចំណងជើងធំ</h1>
  <p class="fs-4">កថាខណ្ឌពិពណ៌នាលម្អិត...</p>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container">
    <!-- Jumbotron Equivalent using Utilities in BS5 -->
    <div class="p-5 mb-4 bg-dark text-white rounded-4 shadow-lg">
      <div class="container-fluid py-3">
        <h1 class="display-5 fw-bold">Custom Jumbotron</h1>
        <p class="col-md-8 fs-4 text-secondary">
          Using utility classes, you can craft lightweight, perfectly customized hero layouts that look pristine on high-DPI screens.
        </p>
        <button class="btn btn-primary btn-lg mt-3" type="button">Call to Action</button>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-alerts",
    title: { en: "BS5 Alerts", km: "ប្រអប់សារដំណឹង Alerts" },
    content: {
      en: `# Bootstrap 5 Alerts
Alerts provide contextual feedback messages for typical user actions with handfuls of available styling colors.

### Basic Alert Setup
Add the core **\`.alert\`** class followed by a semantic contextual modifier like **\`.alert-success\`**, **\`.alert-danger\`**, or **\`.alert-warning\`**:

\`\`\`html
<div class="alert alert-success" role="alert">
  Successfully completed your profile update!
</div>
\`\`\`

### Dismissible Alerts
You can make alerts closable by adding \`.alert-dismissible\`, an active fade class, and a close button:
\`\`\`html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  Please double check your login password.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
\`\`\`

> **Note:** Dismissing alerts requires Bootstrap's JS bundle to function!`,
      km: `# ប្រអប់សារដំណឹង Alerts ក្នុង Bootstrap 5
Alerts ត្រូវបានប្រើដើម្បីបង្ហាញសារផ្តល់ដំណឹងផ្សេងៗទៅកាន់អ្នកប្រើប្រាស់ ជាមួយនឹងពណ៌សម្គាល់ន័យខុសៗគ្នា។

### របៀបបង្កើតប្រអប់ដំណឹងមូលដ្ឋាន
ប្រើប្រាស់ Class **\`.alert\`** រួមផ្សំជាមួយ Modifier ដូចជា **\`.alert-success\`**, **\`.alert-danger\`**, ឬ **\`.alert-warning\`**៖

\`\`\`html
<div class="alert alert-success" role="alert">
  បានកែប្រែប្រវត្តិរូបរបស់អ្នកដោយជោគជ័យ!
</div>
\`\`\`

### ប្រអប់ដំណឹងដែលអាចបិទបាន (Dismissible)
អ្នកអាចអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចុចបិទសារដំណឹងបាន ដោយបន្ថែម \`.alert-dismissible\`, ថ្នាក់ចលនា fade show, និងប៊ូតុងបិទ៖
\`\`\`html
<div class="alert alert-warning alert-dismissible fade show">
  សូមពិនិត្យលេខសម្ងាត់របស់អ្នកឡើងវិញ។
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4">
  <div class="container" style="max-width: 550px;">
    <h3 class="mb-4">Dismissible & Color Alerts</h3>

    <!-- Dismissible Success Alert -->
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Awesome!</strong> Your work has been saved successfully.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <!-- Static Danger Alert with Link -->
    <div class="alert alert-danger" role="alert">
      Critical system crash! <a href="#" class="alert-link">Upgrade subscription</a> to resume workspace.
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-buttons",
    title: { en: "BS5 Buttons", km: "ប៊ូតុង Buttons" },
    content: {
      en: `# Bootstrap 5 Buttons
Buttons are integral elements of forms and click interactions. Bootstrap includes multiple styles, sizes, and states.

### Standard Setup
Always start with the core base class **\`.btn\`**, then add a theme modifier class:
- **Solid Style:** \`.btn-primary\`, \`.btn-success\`, \`.btn-danger\`, \`.btn-dark\`
- **Outline Style:** \`.btn-outline-primary\`, \`.btn-outline-success\`, \`.btn-outline-danger\`

### Sizing Modifiers
- Large Button: **\`.btn-lg\`**
- Small Button: **\`.btn-sm\`**

\`\`\`html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-outline-danger btn-sm">Delete</button>
\`\`\``,
      km: `# ប៊ូតុង Buttons ក្នុង Bootstrap 5
ប៊ូតុងជាធាតុសំខាន់បំផុតសម្រាប់អន្តរកម្មជាមួយអ្នកប្រើប្រាស់ និងការបញ្ជូនព័ត៌មាន (Forms)។ Bootstrap រួមបញ្ចូលទាំងស្ទីល និងទំហំជាច្រើន។

### របៀបប្រើប្រាស់
ត្រូវប្រើប្រាស់ Class គ្រឹះ **\`.btn\`** រួចទើបបន្ថែម Class ស្ទីល ឬពណ៌៖
- **Solid Buttons:** \`.btn-primary\`, \`.btn-success\`, \`.btn-danger\`, \`.btn-dark\`
- **Outline Buttons:** \`.btn-outline-primary\`, \`.btn-outline-success\`, \`.btn-outline-danger\`

### ការកំណត់ទំហំ
- ប៊ូតុងធំ៖ **\`.btn-lg\`**
- ប៊ូតុងតូច៖ **\`.btn-sm\`**`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 text-center bg-light">
  <div class="container">
    <h3 class="mb-4">Button Styles & Sizes</h3>

    <!-- Solid Buttons Group -->
    <div class="mb-3 d-flex justify-content-center gap-2">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
    </div>

    <!-- Outline Buttons Group -->
    <div class="mb-3 d-flex justify-content-center gap-2">
      <button class="btn btn-outline-primary">Primary Outline</button>
      <button class="btn btn-outline-secondary">Secondary Outline</button>
    </div>

    <!-- Sizes -->
    <div class="d-flex justify-content-center align-items-center gap-2 pt-2">
      <button class="btn btn-primary btn-lg">Large btn</button>
      <button class="btn btn-primary">Normal btn</button>
      <button class="btn btn-primary btn-sm">Small btn</button>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-btn-groups",
    title: { en: "BS5 Button Groups", km: "ក្រុមប៊ូតុង Button Groups" },
    content: {
      en: `# Bootstrap 5 Button Groups
Button groups allow you to cluster multiple buttons together on a single horizontal or vertical line.

### Basic Button Group
Wrap a series of buttons inside a **\`.btn-group\`** container:
\`\`\`html
<div class="btn-group" role="group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
\`\`\`

- **Vertical Grouping:** Replace \`.btn-group\` with **\`.btn-group-vertical\`** to stack buttons on top of each other.
- **Sizing:** Scale the entire group using \`.btn-group-lg\` or \`.btn-group-sm\`.`,
      km: `# ក្រុមប៊ូតុង Button Groups ក្នុង Bootstrap 5
ក្រុមប៊ូតុង អនុញ្ញាតឱ្យអ្នកតម្រៀបប៊ូតុងច្រើនរួមគ្នាជាជួរដេក ឬជួរឈរតែមួយយ៉ាងស្អាត។

### របៀបបង្កើត
ព័ទ្ធជុំវិញស៊េរីប៊ូតុងនានាដោយប្រើប្រអប់ **\`.btn-group\`**៖
\`\`\`html
<div class="btn-group">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
\`\`\`

- **ក្រុមបញ្ឈរ (Vertical):** ប្តូរពី \`.btn-group\` ទៅជា **\`.btn-group-vertical\`** ដើម្បីដាក់ប៊ូតុងតម្រួតលើគ្នា។
- **ទំហំក្រុម:** កំណត់ទំហំក្រុមទាំងមូលដោយបន្ថែម Class \`.btn-group-lg\` ឬ \`.btn-group-sm\`។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 text-center">
  <div class="container" style="max-width: 450px;">
    <h4 class="mb-3">Button Group Configurations</h4>

    <!-- Horizontal Group -->
    <div class="mb-4">
      <h6 class="text-secondary text-start mb-2">Horizontal Toolbar:</h6>
      <div class="btn-group w-full" role="group">
        <button class="btn btn-outline-indigo active bg-primary text-white">English</button>
        <button class="btn btn-outline-indigo">Khmer</button>
        <button class="btn btn-outline-indigo">Japanese</button>
      </div>
    </div>

    <!-- Vertical Group -->
    <div>
      <h6 class="text-secondary text-start mb-2">Vertical Navigation stack:</h6>
      <div class="btn-group-vertical w-100" role="group">
        <button class="btn btn-outline-dark text-start">Dashboard</button>
        <button class="btn btn-outline-dark text-start">Analytics</button>
        <button class="btn btn-outline-dark text-start">Settings</button>
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-badges",
    title: { en: "BS5 Badges", km: "ផ្លាកសញ្ញា Badges" },
    content: {
      en: `# Bootstrap 5 Badges
Badges are small, inline indicators used to add contextual labels, numerical counters, or status indicators to buttons or texts.

### Standard Setup
Add the **\`.badge\`** class alongside a background utility color:
\`\`\`html
<h2>Notifications <span class="badge bg-danger">4</span></h2>
\`\`\`

### Pill Badges
Add the **\`.rounded-pill\`** class to make badges rounder like a pill capsule:
\`\`\`html
<span class="badge rounded-pill bg-success">Online</span>
\`\`\``,
      km: `# ផ្លាកសញ្ញា Badges ក្នុង Bootstrap 5
Badges គឺជាផ្លាកសញ្ញាតូចៗសម្រាប់បង្ហាញព័ត៌មានបន្ថែម ចំនួនលេខដំណឹង ឬស្ថានភាពផ្សេងៗនៅក្បែរអត្ថបទ ឬខាងក្នុងប៊ូតុង។

### របៀបបង្កើត
ប្រើប្រាស់ Class **\`.badge\`** រួមផ្សំជាមួយពណ៌ផ្ទៃក្រោយ (Background classes)៖
\`\`\`html
<h2>សារដំណឹង <span class="badge bg-danger">4</span></h2>
\`\`\`

### ផ្លាករាងគ្រាប់ថ្នាំ (Pill Badges)
បន្ថែម Class **\`.rounded-pill\`** ដើម្បីឱ្យផ្លាកមានរាងមូលទ្រវែងដូចគ្រាប់ថ្នាំ៖
\`\`\`html
<span class="badge rounded-pill bg-success">Online</span>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light text-center">
  <div class="container">
    <h3 class="mb-4">Inline Notification Badges</h3>

    <!-- Inside Button Counter -->
    <button type="button" class="btn btn-primary position-relative px-4 py-2 me-3">
      Inbox
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
      </span>
    </button>

    <!-- Pill Badges -->
    <div class="mt-4">
      <span class="badge rounded-pill bg-success px-3 py-2">Success Pill</span>
      <span class="badge rounded-pill bg-warning text-dark px-3 py-2">Warning Pill</span>
      <span class="badge rounded-pill bg-info px-3 py-2">Info Pill</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-progress",
    title: { en: "BS5 Progress Bars", km: "របារវឌ្ឍនភាព Progress" },
    content: {
      en: `# Bootstrap 5 Progress Bars
Progress bars demonstrate loading, loading percentage status, or timeline progression to end-users.

### Basic Progress Structure
The progress layout requires a wrapper container **\`.progress\`** and an inner tracking column **\`.progress-bar\`**:
\`\`\`html
<div class="progress">
  <div class="progress-bar" style="width: 70%">70% Completed</div>
</div>
\`\`\`

- **Striped Bars:** Add \`.progress-bar-striped\` to add beautiful stripes.
- **Animated Striped Bars:** Add \`.progress-bar-animated\` to animate the stripes.`,
      km: `# របារវឌ្ឍនភាព Progress Bars ក្នុង Bootstrap 5
Progress Bars ត្រូវបានប្រើដើម្បីបង្ហាញដំណាក់កាលការងារ ភាគរយនៃការទាញយកទិន្នន័យ ឬដំណើរការអ្វីមួយទៅកាន់អ្នកប្រើប្រាស់។

### ទ្រង់ទ្រាយជាមូលដ្ឋាន
វាត្រូវការប្រអប់ព័ទ្ធជុំវិញ **\`.progress\`** និងរបារខាងក្នុង **\`.progress-bar\`**៖
\`\`\`html
<div class="progress">
  <div class="progress-bar" style="width: 70%">៧០% រួចរាល់</div>
</div>
\`\`\`

- **របារឆ្នូត (Striped):** បន្ថែម Class \`.progress-bar-striped\` ដើម្បីបង្កើតឆ្នូតស្អាតៗ។
- **ចលនាឆ្នូតវិល (Animated):** បន្ថែម \`.progress-bar-animated\` ដើម្បីឱ្យឆ្នូតរត់វិលកាត់ភ្នែកយ៉ាងទំនើប។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container" style="max-width: 500px;">
    <h3 class="mb-4">Animated Progress Workflows</h3>

    <!-- Simple Bar -->
    <label class="form-label text-muted text-xs">Standard Progress (40%):</label>
    <div class="progress mb-3" style="height: 12px;">
      <div class="progress-bar bg-success" style="width: 40%">40%</div>
    </div>

    <!-- Striped Bar -->
    <label class="form-label text-muted text-xs">Striped Animated (75%):</label>
    <div class="progress" style="height: 20px;">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-indigo" style="width: 75%">
        Uploading Media files...
      </div>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-spinners",
    title: { en: "BS5 Spinners", km: "សញ្ញាដំណើរការ Spinners" },
    content: {
      en: `# Bootstrap 5 Spinners
Spinners are lightweight loading animations ideal for asynchronous network states, refreshing logs, or submitting forms.

### Spinner Archetypes
1. **Border Spinner (\`.spinner-border\`):** Standard light rotating ring.
2. **Growing Spinner (\`.spinner-grow\`):** Expanding glowing dot.

\`\`\`html
<!-- Border style spinner -->
<div class="spinner-border text-primary" role="status"></div>

<!-- Glowing dot style spinner -->
<div class="spinner-grow text-success" role="status"></div>
\`\`\`

### Button Integration
Spinners can be integrated inside buttons to show a loading state beautifully:
\`\`\`html
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span> Loading...
</button>
\`\`\``,
      km: `# សញ្ញាដំណើរការ Spinners ក្នុង Bootstrap 5
Spinners គឺជាចលនាវិលតូចៗដែលបង្ហាញពីស្ថានភាពកំពុងដំណើរការ ទាញយកទិន្នន័យ ឬបញ្ជូនឯកសារ។

### ប្រភេទ Spinners ផ្សេងៗ
1. **លក្ខណៈរង្វង់វិល (\`.spinner-border\`):** ជារង្វង់វិលស្តើងស្តង់ដារ។
2. **លក្ខណៈរីកធំ (\`.spinner-grow\`):** ជាចំនុចពន្លឺរីកមាឌហើយបាត់ទៅវិញម្តងមួយៗ។

\`\`\`html
<!-- រង្វង់វិល -->
<div class="spinner-border text-primary"></div>

<!-- ចំនុចរីកមាឌ -->
<div class="spinner-grow text-success"></div>
\`\`\`

### ការប្រើប្រាស់ក្នុងប៊ូតុង
អ្នកអាចដាក់បញ្ចូល spinner នៅខាងក្នុងប៊ូតុង ដើម្បីបង្ហាញសកម្មភាពកំពុងរង់ចាំយ៉ាងស្អាត៖
\`\`\`html
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm"></span> កំពុងដំណើរការ...
</button>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 text-center">
  <div class="container">
    <h3 class="mb-4">Loading States & Spinners</h3>

    <!-- Standard Border Spinners -->
    <div class="mb-4">
      <div class="spinner-border text-primary me-2"></div>
      <div class="spinner-border text-success me-2"></div>
      <div class="spinner-border text-danger"></div>
    </div>

    <!-- Glowing Growing Spinners -->
    <div class="mb-4">
      <div class="spinner-grow text-warning me-2"></div>
      <div class="spinner-grow text-info me-2"></div>
      <div class="spinner-grow text-dark"></div>
    </div>

    <!-- Button Integration -->
    <div>
      <button class="btn btn-indigo px-4" disabled>
        <span class="spinner-border spinner-border-sm me-2"></span>
        Synchronizing databases...
      </button>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-pagination",
    title: { en: "BS5 Pagination", km: "ការបែងចែកទំព័រ Pagination" },
    content: {
      en: `# Bootstrap 5 Pagination
Pagination is a structured list component that allows users to navigate across multi-page tables, articles, or search listings.

### Structure of Pagination
Always use the wrapper HTML tag \`<nav>\` with **\`.pagination\`** applied on the list tag \`<ul>\`, containing active item frames:

\`\`\`html
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
\`\`\`

- **Active / Disabled:** Use classes \`.active\` and \`.disabled\` directly on \`.page-item\` list nodes to reflect states.
- **Sizing:** Scale using \`.pagination-lg\` or \`.pagination-sm\` properties.`,
      km: `# ការបែងចែកទំព័រ Pagination ក្នុង Bootstrap 5
Pagination គឺជាសមាសភាគបញ្ជីដែលមានសណ្តាប់ធ្នាប់ សម្រាប់អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ចុចផ្លាស់ប្តូរទំព័រទិន្នន័យ (ដូចជាទំព័រទី១ ទី២...)។

### វាក្យសម្ពន្ធស្តង់ដារ
ត្រូវប្រើប្រាស់ថេក \`<nav>\` ព័ទ្ធជុំវិញថេកបញ្ជី \`<ul>\` ដែលមាន Class **\`.pagination\`**៖

\`\`\`html
<nav>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">មុន</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">បន្ទាប់</a></li>
  </ul>
</nav>
\`\`\`

- **ស្ថានភាពសកម្ម (Active / Disabled):** ប្រើ Class \`.active\` និង \`.disabled\` ផ្ទាល់លើ \`.page-item\` ដើម្បីកំណត់ស្ថានភាព។
- **ទំហំ:** កំណត់ទំហំដោយបន្ថែម Class \`.pagination-lg\` ឬ \`.pagination-sm\`។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 d-flex justify-content-center">
  <div class="container text-center">
    <h3 class="mb-4">Responsive Pagination Alignment</h3>

    <!-- Centered Large Pagination -->
    <nav class="mb-3">
      <ul class="pagination pagination-lg justify-content-center">
        <li class="page-item disabled"><a class="page-link" href="#">Prev</a></li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-list-groups",
    title: { en: "BS5 List Groups", km: "ក្រុមបញ្ជី List Groups" },
    content: {
      en: `# Bootstrap 5 List Groups
List groups are highly flexible components used to display lists of structured text items, links, or customized dashboard components.

### Basic Setup
Apply **\`.list-group\`** to the parent element, and **\`.list-group-item\`** to child nodes:
\`\`\`html
<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
</ul>
\`\`\`

- **Active states:** Use \`.active\` on items to highlight them.
- **Zebra striping / Colors:** Use \`.list-group-item-success\`, \`.list-group-item-danger\` to color lines contextually.
- **Actionable Link Items:** Convert list elements into \`<a>\` tags with \`.list-group-item-action\` to support beautiful click styles.`,
      km: `# ក្រុមបញ្ជី List Groups ក្នុង Bootstrap 5
List Groups គឺជាសមាសភាគដែលអាចបត់បែនបានខ្ពស់ សម្រាប់បង្ហាញបញ្ជីអត្ថបទ តំណភ្ជាប់ (Links) ឬព័ត៌មានជាជួរៗលើផ្ទាំងគ្រប់គ្រង (Dashboard)។

### របៀបបង្កើត
ប្រើប្រាស់ Class **\`.list-group\`** លើថេកមេ និង Class **\`.list-group-item\`** លើថេកកូនបញ្ជីនីមួយៗ៖
\`\`\`html
<ul class="list-group">
  <li class="list-group-item">ធាតុទី១</li>
  <li class="list-group-item">ធាតុទី២</li>
</ul>
\`\`\`

- **ស្ថានភាពលេចធ្លោ:** ប្រើ \`.active\` ដើម្បីបញ្ជាក់ជម្រើសដែលកំពុងជ្រើសរើស។
- **ការបន្ថែមពណ៌សម្គាល់:** ប្រើ \`.list-group-item-success\` ឬ \`.list-group-item-danger\` ដើម្បីដាក់ពណ៌លើជួរនីមួយៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4">
  <div class="container" style="max-width: 450px;">
    <h3 class="mb-3">Interactive Actionable Lists</h3>

    <!-- List Group with Badges and Active status -->
    <ul class="list-group">
      <a href="#" class="list-group-item list-group-item-action active d-flex justify-content-between align-items-center">
        Inbox Messages
        <span class="badge bg-danger rounded-pill">12</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
        Sent Mail
        <span class="badge bg-secondary rounded-pill">4</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action list-group-item-danger d-flex justify-content-between align-items-center">
        Spam Reports
        <span class="badge bg-danger rounded-pill">1</span>
      </a>
    </ul>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-cards",
    title: { en: "BS5 Cards", km: "ប្រអប់ព័ត៌មាន Cards" },
    content: {
      en: `# Bootstrap 5 Cards
A card is a flexible, highly extendable content container. It contains headers, footers, body contents, and rich image alignments.

### Standard Structure
Build with **\`.card\`**, wrapping a nested **\`.card-body\`**:
\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="avatar.jpg" class="card-img-top" alt="Header image">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some description text...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
\`\`\`

- **Header/Footer:** Use \`.card-header\` and \`.card-footer\` to create clear distinct segments.
- **Card Groups:** Use \`.card-group\` to lay cards next to each other in equal-width grids.`,
      km: `# ប្រអប់ព័ត៌មាន Cards ក្នុង Bootstrap 5
Card គឺជាប្រអប់ផ្ទុកព័ត៌មានដ៏ស្រស់ស្អាត និងពេញនិយមបំផុត ដែលអាចរួមបញ្ចូលទាំង រូបភាព ចំណងជើង អត្ថបទ ប៊ូតុង ក្បាលប្រអប់ និងជើងប្រអប់។

### វាក្យសម្ពន្ធស្តង់ដារ
ប្រើប្រាស់ Class **\`.card\`** រួចព័ទ្ធជុំវិញខ្លឹមសារដោយ Class **\`.card-body\`**៖
\`\`\`html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">ចំណងជើងប្រអប់</h5>
    <p class="card-text">កថាខណ្ឌខ្លឹមសារពិពណ៌នា...</p>
    <a href="#" class="btn btn-primary">ប៊ូតុងចុច</a>
  </div>
</div>
\`\`\`

- **ក្បាល/ជើងប្រអប់:** ប្រើ Class \`.card-header\` និង \`.card-footer\` ដើម្បីបែងចែកផ្ទាំងព័ត៌មានជាផ្នែកៗ។`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-4 bg-light">
  <div class="container d-flex justify-content-center">
    
    <!-- Beautiful Highlight Card -->
    <div class="card shadow-lg" style="width: 320px; border-radius: 15px; overflow: hidden;">
      <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400" class="card-img-top" alt="Card Header Image">
      <div class="card-body p-4">
        <h5 class="card-title fw-bold">Bootstrap 5 Card Layout</h5>
        <p class="card-text text-secondary text-sm">
          A modular container with deep drop shadow, custom top image scaling, responsive titles, and micro margin spacing.
        </p>
        <a href="#" class="btn btn-primary w-100 rounded-pill py-2">Explore More</a>
      </div>
      <div class="card-footer bg-white text-muted text-center py-2 text-xs">
        Updated 2 mins ago
      </div>
    </div>

  </div>
</body>
</html>`
  },
  {
    id: "bs5-dropdowns",
    title: { en: "BS5 Dropdowns", km: "ម៉ឺនុយទម្លាក់ Dropdowns" },
    content: {
      en: `# Bootstrap 5 Dropdowns
Dropdowns are toggleable menus that display lists of links or actions on demand.

### Standard Setup
Wrap the trigger button and the menu list inside a **\`.dropdown\`** class. Ensure the button has **\`data-bs-toggle="dropdown"\`**:

\`\`\`html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Menu Options
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action 1</a></li>
    <li><a class="dropdown-item" href="#">Action 2</a></li>
  </ul>
</div>
\`\`\`

> **Note:** Dropdowns rely on Popper.js to auto-position themselves. Always ensure the **bootstrap.bundle.min.js** script is loaded for full click interactivity!`,
      km: `# ម៉ឺនុយទម្លាក់ Dropdowns ក្នុង Bootstrap 5
Dropdowns គឺជាម៉ឺនុយដែលអាចចុចបើក/បិទបាន ដើម្បីបង្ហាញជម្រើស ឬសកម្មភាពផ្សេងៗជាបញ្ជីនៅពេលត្រូវការ។

### របៀបបង្កើត
ត្រូវព័ទ្ធជុំវិញប៊ូតុងកេះ និងបញ្ជីជម្រើសដោយ Class **\`.dropdown\`**។ ត្រូវប្រាកដថាប៊ូតុងចុះនោះមាន Attribute **\`data-bs-toggle="dropdown"\`**៖

\`\`\`html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    ជម្រើសម៉ឺនុយ
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">សកម្មភាពទី១</a></li>
    <li><a class="dropdown-item" href="#">សកម្មភាពទី២</a></li>
  </ul>
</div>
\`\`\`

> **ចំណាំ៖** Dropdowns ពឹងផ្អែកលើ Popper.js ដើម្បីលេចចេញមកចំទីតាំងត្រឹមត្រូវ។ ត្រូវប្រាកដថាបានដាក់បញ្ចូល **bootstrap.bundle.min.js** ដើម្បីដំណើរការចុចបាន!`
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4 text-center">
  <div class="container py-4">
    <h3 class="mb-4">Interactive Dropdown Menus</h3>

    <!-- Split Primary Dropdown -->
    <div class="dropdown d-inline-block">
      <button class="btn btn-primary dropdown-toggle px-4 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Select Action
      </button>
      <ul class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Edit Profile</a></li>
        <li><a class="dropdown-item" href="#">Billing Details</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item text-danger" href="#">Delete Workspace</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "bs5-collapse",
    title: { en: "BS5 Collapse", km: "ការបង្រួមពន្លាត Collapse" },
    content: {
      en: `# Bootstrap 5 Collapse
The collapse component permits hiding and revealing block content dynamically with clean, hardware-accelerated height transitions.

### Setup Trigger and Target
To create collapsible content, define:
1. **Trigger Button:** Must include \`data-bs-toggle="collapse"\` and a targeting attribute \`data-bs-target="#targetID"\`.
2. **Target Container:** Must have the class **\`.collapse\`** and match the corresponding **\`id="targetID"\`**.

\`\`\`html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#myDetails">
  Toggle Details
</button>

<div class="collapse mt-2" id="myDetails">
  <div class="card card-body">
    Revealed content details go here!
  </div>
</div>
\`\`\`

- **Accordions:** Nesting multiple collapsible components inside an accordion container enables toggleable panels where opening one panel closes the others!`,
      km: `# ការបង្រួមពន្លាត Collapse ក្នុង Bootstrap 5
សមាសភាគ Collapse ត្រូវបានប្រើដើម្បីលាក់ និងបង្ហាញមាតិកាណាមួយភ្លាមៗ ជាមួយនឹងការផ្លាស់ប្តូរទំហំកម្ពស់យ៉ាងរលូន។

### របៀបបង្កើតប៊ូតុងបញ្ជា និងប្រអប់បង្ហាញ
១. **ប៊ូតុងកេះ (Trigger Button):** ត្រូវមាន Attribute \`data-bs-toggle="collapse"\` និង \`data-bs-target="#targetID"\`។
២. **ប្រអប់លាក់កំបាំង (Target Container):** ត្រូវមាន Class **\`.collapse\`** និងមាន **\`id="targetID"\`** ដូចគ្នានឹងប៊ូតុងកេះ។

\`\`\`html
<button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#myDetails">
  បង្ហាញ / លាក់ព័ត៌មាន
</button>

<div class="collapse mt-2" id="myDetails">
  <div class="card card-body">
    ខ្លឹមសារលាក់កំបាំងដែលទើបតែត្រូវបានលាតត្រដាង!
  </div>
</div>
\`\`\``
    },
    starterCode: `<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body class="p-4">
  <div class="container" style="max-width: 500px;">
    <h3 class="mb-3">Collapsible Panels</h3>

    <!-- Toggle Action -->
    <button class="btn btn-indigo w-100 mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample">
      Learn More details
    </button>

    <!-- Hidden block -->
    <div class="collapse" id="collapseExample">
      <div class="card card-body bg-light border border-secondary-subtle">
        <h5 class="fw-bold">Under the Hood</h5>
        <p class="text-sm text-secondary mb-0">
          This container expands gracefully using CSS max-height transitions managed automatically by Bootstrap's core engine classes.
        </p>
      </div>
    </div>
  </div>
</body>
</html>`
  }
];
