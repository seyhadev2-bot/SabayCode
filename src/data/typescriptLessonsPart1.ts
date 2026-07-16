import { Lesson } from '../types';

export const typescriptLessonsPart1: Lesson[] = [
  {
    id: "ts-home",
    title: {
      en: "TS Home",
      km: "ទំព័រដើម TypeScript"
    },
    content: {
      en: `### Welcome to the TypeScript Course!
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types to help you catch errors early and write more maintainable code.

### Course Goals
In this course, you will learn:
- Static type checking with TypeScript
- Core and advanced type concepts
- Integration with frameworks like React
- Real-world tooling and configuration

### Try Your First Code
On the right, you can see a simple TypeScript program. Try clicking **Run Code** to compile and run it.`,
      km: `### សូមស្វាគមន៍មកកាន់វគ្គសិក្សា TypeScript!
TypeScript គឺជាភាសាសរសេរកម្មវិធីដែលពង្រីកពីលើ JavaScript ដោយបន្ថែមការកំណត់ប្រភេទរឹងមាំ (Static Typing) ដែលត្រូវបានបកប្រែទៅជា JavaScript ធម្មតា។ វាជួយការពារបញ្ហាកូដតាំងពីដំណាក់កាលសរសេរ។

### គោលដៅនៃវគ្គសិក្សា
នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងសិក្សាអំពី៖
- ការកំណត់ប្រភេទនិងការផ្ទៀងផ្ទាត់កំហុស (Type Checking)
- គំនិតគ្រឹះ និងកម្រិតខ្ពស់នៃប្រព័ន្ធកំណត់ប្រភេទ (Type Systems)
- ការប្រើប្រាស់ជាមួយ Frameworks ដូចជា React
- ការកំណត់រចនាសម្ព័ន្ធ និងឧបករណ៍អភិវឌ្ឍន៍ពិតប្រាកដ

### សាកល្បងកូដដំបូងរបស់អ្នក
នៅខាងស្តាំដៃ អ្នកអាចមើលឃើញកម្មវិធី TypeScript សាមញ្ញមួយ។ សាកល្បងចុចលើប៊ូតុង **Run Code** ដើម្បីដំណើរការវា។`
    },
    starterCode: `// Welcome to TypeScript!
let greeting: string = "សួស្តីកម្ពុជា! (Hello Cambodia!)";
console.log(greeting);

// Try editing the text above and run it again!
`
  },
  {
    id: "ts-intro",
    title: {
      en: "TS Introduction",
      km: "សេចក្តីផ្តើមអំពី TS"
    },
    content: {
      en: `### Why TypeScript?
JavaScript is dynamically typed, meaning errors are often only caught at runtime. TypeScript introduces **static typing**, allowing you to define contracts for your data and find bugs before your code even runs.

### Key Benefits
- **Early Bug Detection:** Type-related errors are caught in your editor or during compilation.
- **Improved Auto-complete:** Intelligent suggestions (IntelliSense) make development much faster.
- **Self-Documenting Code:** Types clearly define what values functions and objects expect.

> **Tip:** TypeScript does not run in the browser directly. It compiles into standard JavaScript, which can then be executed anywhere JavaScript runs!`,
      km: `### ហេតុអ្វីបានជាប្រើ TypeScript?
JavaScript គឺជាភាសាដែលកំណត់ប្រភេទដោយស្វ័យប្រវត្តិនឹងបត់បែន (Dynamically typed) ដែលមានន័យថាកំហុសកូដជាច្រើនច្រើនតែត្រូវរកឃើញនៅពេលដំណើរការកម្មវិធី (Runtime)។ TypeScript នាំយក **Static Typing** មកជួយឱ្យយើងអាចសរសេរកូដប្រកបដោយទំនុកចិត្ត និងកាត់បន្ថយកំហុស។

### អត្ថប្រយោជន៍ចម្បងៗ
- **ការស្វែងរកកំហុសបានលឿន:** បញ្ហាទាក់ទងនឹងប្រភេទទិន្នន័យត្រូវបានរកឃើញភ្លាមៗនៅក្នុង Editor ឬពេល Compile។
- **ការជួយបំពេញកូដស្វ័យប្រវត្តិ:** ការណែនាំកូដ (IntelliSense) ជួយឱ្យការសរសេរកូដកាន់តែលឿន និងត្រឹមត្រូវ។
- **កូដពន្យល់ខ្លួនឯង:** ប្រភេទដែលបានកំណត់ច្បាស់លាស់ជួយបង្ហាញប្រាប់ពីរបៀបប្រើប្រាស់អនុគមន៍ និងវត្ថុ (Objects)។

> **គន្លឹះ:** TypeScript មិនដំណើរការផ្ទាល់នៅក្នុងកម្មវិធីរុករក (Browser) នោះទេ។ វាត្រូវបកប្រែទៅជា JavaScript ធម្មតាសិន ទើបអាចយកទៅដំណើរការបានគ្រប់ទីកន្លែង!`
    },
    starterCode: `// Try introducing a type mismatch to see how TS detects it
let userAge: number = 25;

// UNCOMMENT THE LINE BELOW TO OBSERVE TYPE-CHECKING ERROR:
// userAge = "twenty-five"; 

console.log("User age is:", userAge);
`
  },
  {
    id: "ts-get-started",
    title: {
      en: "TS Get Started",
      km: "ការចាប់ផ្តើមជាមួយ TS"
    },
    content: {
      en: `### Setting Up TypeScript
To start using TypeScript on your machine, you can install it globally via npm (Node Package Manager):
\`\`\`bash
npm install -g typescript
\`\`\`

### Compiling Files
You use the \`tsc\` (TypeScript Compiler) tool to compile a \`.ts\` file to a \`.js\` file:
\`\`\`bash
tsc filename.ts
\`\`\`
This compiles \`filename.ts\` into standard browser-compatible \`filename.js\`.

### Interactive Playground
You can try writing basic TypeScript right here in our playground without any local installation!`,
      km: `### ការរៀបចំដំឡើង TypeScript
ដើម្បីចាប់ផ្តើមប្រើប្រាស់ TypeScript នៅលើម៉ាស៊ីនរបស់អ្នក អ្នកអាចដំឡើងវាតាមរយៈ npm (Node Package Manager)៖
\`\`\`bash
npm install -g typescript
\`\`\`

### ការបកប្រែកូដ (Compiling)
អ្នកត្រូវប្រើប្រាស់កម្មវិធី \`tsc\` (TypeScript Compiler) ដើម្បីបកប្រែឯកសារ \`.ts\` ទៅជា \`.js\`៖
\`\`\`bash
tsc filename.ts
\`\`\`
វានឹងបង្កើតឯកសារ \`filename.js\` ដែលអាចដំណើរការលើ browser បានជាទូទៅ។

### កម្មវិធីសាកល្បងអន្តរកម្ម
អ្នកអាចសាកល្បងសរសេរកូដ TypeScript មូលដ្ឋាននៅទីនេះបានភ្លាមៗ ដោយមិនបាច់ដំឡើងអ្វីទាំងអស់!`
    },
    starterCode: `// Standard TypeScript compilation structure
function greetUser(name: string, date: Date) {
  console.log(\`Hello \${name}, today is \${date.toDateString()}!\`);
}

greetUser("Cambodia Coders", new Date());
`
  },
  {
    id: "ts-simple-types",
    title: {
      en: "TS Simple Types",
      km: "ប្រភេទសាមញ្ញៗក្នុង TS"
    },
    content: {
      en: `### The Core Types
TypeScript has three primary primitives that are frequently used:
1. **string:** Textual data (e.g., \`"Hello"\`).
2. **number:** Numeric values, both integers and floating-point (e.g., \`42\`, \`3.14\`).
3. **boolean:** Truth values (\`true\` or \`false\`).

### Example
\`\`\`typescript
let courseName: string = "TypeScript";
let totalLessons: number = 40;
let isPublished: boolean = true;
\`\`\`

> **Note:** If you try to assign a value of another type, TypeScript will show an error.`,
      km: `### ប្រភេទទិន្នន័យស្នូល
TypeScript មានប្រភេទទិន្នន័យសាមញ្ញៗចំនួន ៣ ដែលត្រូវបានប្រើប្រាស់ញឹកញាប់បំផុត៖
1. **string:** ទិន្នន័យជាអក្សរ ឬអត្ថបទ (ឧទាហរណ៍៖ \`"Hello"\`)។
2. **number:** តម្លៃជាលេខ ទាំងលេខគត់ និងលេខទសភាគ (ឧទាហរណ៍៖ \`42\`, \`3.14\`)។
3. **boolean:** តម្លៃពិត ឬមិនពិត (\`true\` ឬ \`false\`)។

### ឧទាហរណ៍
\`\`\`typescript
let courseName: string = "TypeScript";
let totalLessons: number = 40;
let isPublished: boolean = true;
\`\`\`

> **ចំណាំ:** ប្រសិនបើអ្នកព្យាយាមផ្តល់តម្លៃដែលមានប្រភេទផ្សេង នោះ TypeScript នឹងបង្ហាញសារកំហុសជាមិនខាន។`
    },
    starterCode: `let price: number = 19.99;
let productName: string = "Learning TypeScript Book";
let inStock: boolean = true;

console.log(\`Product: \${productName}\`);
console.log(\`Price: $\${price}\`);
console.log(\`In stock: \${inStock}\`);
`
  },
  {
    id: "ts-explicit-inference",
    title: {
      en: "TS Explicit & Inference",
      km: "ការកំណត់ផ្ទាល់ និងការស្វែងយល់ស្វ័យប្រវត្តិ"
    },
    content: {
      en: `### Explicit Types vs. Type Inference
There are two main ways TypeScript knows the type of a variable:

1. **Explicit Typing:** You specify the type directly using syntax like \`: string\`.
2. **Implicit Typing (Inference):** TypeScript automatically guesses (infers) the type based on the value you assign to it during creation.

### Example
\`\`\`typescript
// Explicit
let score: number = 100;

// Implicit / Inferred (TS knows this is a string)
let player = "Sokha"; 
\`\`\`

> **Tip:** In general, implicit typing is preferred when types are obvious, as it makes code cleaner. Use explicit typing when declaring variables without initial values or when working with complex types.`,
      km: `### ការកំណត់ប្រភេទជាក់លាក់ និងការយល់ដឹងស្វ័យប្រវត្តិ
មានវិធីពីរយ៉ាងដែល TypeScript ស្គាល់ប្រភេទទិន្នន័យរបស់អថេរ៖

1. **Explicit Typing (ការកំណត់ផ្ទាល់):** អ្នកបញ្ជាក់ប្រភេទទិន្នន័យដោយផ្ទាល់ ឧទាហរណ៍៖ \`: string\`។
2. **Implicit Typing (Inference - ការយល់ដឹងស្វ័យប្រវត្តិ):** TypeScript កំណត់ប្រភេទដោយស្វ័យប្រវត្តិតាមរយៈតម្លៃដែលអ្នកផ្តល់ឱ្យវានៅពេលបង្កើតអថេរ។

### ឧទាហរណ៍
\`\`\`typescript
// Explicit (កំណត់ផ្ទាល់)
let score: number = 100;

// Implicit (យល់ដឹងស្វ័យប្រវត្តិ - TS ដឹងថាជា string)
let player = "Sokha"; 
\`\`\`

> **គន្លឹះ:** ជាទូទៅ ការប្រើប្រាស់ Implicit Typing (យល់ដឹងស្វ័យប្រវត្តិ) ត្រូវបានណែនាំនៅពេលដែលតម្លៃដំបូងច្បាស់លាស់ ព្រោះវាធ្វើឱ្យកូដស្អាតល្អ។ ប្រើ Explicit នៅពេលប្រកាសអថេរទទេ ឬប្រភេទទិន្នន័យស្មុគស្មាញ។`
    },
    starterCode: `// TypeScript infers the type of 'websiteName' automatically as string
let websiteName = "Cambodian Coders Academy";

// This will output correctly
console.log("Website:", websiteName);

// Try uncommenting the line below to see a type error:
// websiteName = 12345;
`
  },
  {
    id: "ts-special-types",
    title: {
      en: "TS Special Types",
      km: "ប្រភេទពិសេសៗក្នុង TS"
    },
    content: {
      en: `### Special Types in TypeScript
TypeScript has special types that help you handle untyped or highly dynamic values:

1. **any:** Disables type checking completely. *Use sparingly*, as it defeats the purpose of TypeScript!
2. **unknown:** A safer alternative to \`any\`. It allows any value, but forces you to do type checking before using it.
3. **never:** Represents values that will never occur (e.g., functions that throw errors or have infinite loops).
4. **void:** Used as a return type for functions that do not return any value.

### Void Example
\`\`\`typescript
function logMessage(msg: string): void {
  console.log(msg);
}
\`\`\``,
      km: `### ប្រភេទពិសេសៗនៅក្នុង TypeScript
TypeScript ផ្តល់នូវប្រភេទពិសេសមួយចំនួន ដើម្បីជួយគ្រប់គ្រងតម្លៃដែលមិនមានប្រភេទច្បាស់លាស់ ឬតម្លៃផ្លាស់ប្តូរលឿន៖

1. **any:** បិទការផ្ទៀងផ្ទាត់ប្រភេទទាំងស្រុង។ *គួរជៀសវាងការប្រើប្រាស់ច្រើន* ព្រោះវាធ្វើឱ្យបាត់បង់អត្ថប្រយោជន៍របស់ TypeScript!
2. **unknown:** ជម្រើសដែលមានសុវត្ថិភាពជាង \`any\`។ វាអនុញ្ញាតឱ្យផ្ទុកតម្លៃគ្រប់ប្រភេទ ប៉ុន្តែតម្រូវឱ្យយើងពិនិត្យប្រភេទ (Type Check) មុនពេលយកទៅប្រើប្រាស់។
3. **never:** តំណាងឱ្យតម្លៃដែលមិនធ្លាប់កើតឡើង (ឧទាហរណ៍៖ អនុគមន៍ដែលបោះកំហុសជានិច្ច ឬរង្វិលជុំមិនចេះឈប់)។
4. **void:** ប្រើជាប្រភេទត្រឡប់មកវិញ (Return) នៃអនុគមន៍ដែលមិនបោះតម្លៃអ្វីមកវិញសោះ។

### ឧទាហរណ៍ void
\`\`\`typescript
function logMessage(msg: string): void {
  console.log(msg);
}
\`\`\``
    },
    starterCode: `// 1. any type
let flexibleValue: any = "Hello";
flexibleValue = 42; // Allowed!

// 2. void function
function printHello(): void {
  console.log("This function returns nothing (void).");
}

printHello();
console.log("Flexible value is:", flexibleValue);
`
  },
  {
    id: "ts-arrays",
    title: {
      en: "TS Arrays",
      km: "អារេ (Arrays) ក្នុង TS"
    },
    content: {
      en: `### Typing Arrays
In TypeScript, you can specify what type of elements an array should hold. There are two syntaxes:

1. **Using square brackets:** \`type[]\` (e.g., \`string[]\`).
2. **Using generic array type:** \`Array<type>\` (e.g., \`Array<number>\`).

### Examples
\`\`\`typescript
let names: string[] = ["Dara", "Bory", "Sophea"];
let numbers: number[] = [1, 2, 3, 4, 5];
\`\`\`

If you try to add an invalid type into the array (like pushing a number into a \`string[]\`), TypeScript will trigger a compilation error.`,
      km: `### ការកំណត់ប្រភេទអថេរអារេ (Arrays)
នៅក្នុង TypeScript អ្នកអាចបញ្ជាក់យ៉ាងច្បាស់លាស់ថាតើធាតុនៅក្នុងអារេត្រូវតែជាប្រភេទអ្វី។ មានរបៀបសរសេរពីរយ៉ាង៖

1. **ការប្រើប្រាស់វង់ក្រចកការ៉េ:** \`type[]\` (ឧទាហរណ៍៖ \`string[]\`)។
2. **ការប្រើប្រាស់ Generic Array Type:** \`Array<type>\` (ឧទាហរណ៍៖ \`Array<number>\`)។

### ឧទាហរណ៍
\`\`\`typescript
let names: string[] = ["Dara", "Bory", "Sophea"];
let numbers: number[] = [1, 2, 3, 4, 5];
\`\`\`

ប្រសិនបើអ្នកព្យាយាមបន្ថែមប្រភេទខុសទៅក្នុងអារេ (ដូចជាការបញ្ចូលលេខទៅក្នុង \`string[]\`) នោះ TypeScript នឹងបង្ហាញសារកំហុសភ្លាមៗ។`
    },
    starterCode: `let skills: string[] = ["TypeScript", "React", "Node.js"];

// Push a valid string item
skills.push("Tailwind");

console.log("My Skills:", skills);

// Try uncommenting the line below to see a compilation error:
// skills.push(100); 
`
  },
  {
    id: "ts-tuples",
    title: {
      en: "TS Tuples",
      km: "ទុបផល (Tuples) ក្នុង TS"
    },
    content: {
      en: `### What is a Tuple?
A **tuple** is a typed array with a pre-defined length and specific types for each index position. 

### Syntax
\`\`\`typescript
// Define a tuple of [string, number]
let employee: [string, number];
employee = ["Dara", 30]; // Correct
// employee = [30, "Dara"]; // Error!
\`\`\`

> **Note:** Tuples are excellent for structured records like coordinates \`[x, y]\` or key-value pairings where you know the exact order and length of the elements.`,
      km: `### តើអ្វីជា Tuple?
**Tuple** គឺជាអារេដែលត្រូវបានកំណត់ចំនួនធាតុច្បាស់លាស់ និងប្រភេទទិន្នន័យជាក់លាក់សម្រាប់ទីតាំងសន្ទស្សន៍ (Index) នីមួយៗជាមុន។

### របៀបសរសេរ
\`\`\`typescript
// កំណត់ tuple ដែលមានទម្រង់ [string, number]
let employee: [string, number];
employee = ["Dara", 30]; // ត្រឹមត្រូវ
// employee = [30, "Dara"]; // កំហុស!
\`\`\`

> **ចំណាំ:** Tuples មានប្រយោជន៍ខ្លាំងណាស់សម្រាប់ទិន្នន័យដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ ដូចជាកូអរដោនេ \`[x, y]\` ឬការផ្គូផ្គងតម្លៃ Key-Value ដែលអ្នកដឹងពីលំដាប់លំដោយពិតប្រាកដ។`
    },
    starterCode: `// A tuple representing geographical coordinates: [latitude, longitude]
let phnomPenhCoord: [number, number] = [11.5564, 104.9282];

console.log(\`Latitude: \${phnomPenhCoord[0]}\`);
console.log(\`Longitude: \${phnomPenhCoord[1]}\`);

// Try editing the elements or swapping with a string to see how TypeScript acts!
`
  },
  {
    id: "ts-object-types",
    title: {
      en: "TS Object Types",
      km: "ប្រភេទវត្ថុ (Object Types)"
    },
    content: {
      en: `### Typing Objects
In TypeScript, you can define the types of properties an object should contain.

### Syntax
\`\`\`typescript
let user: { name: string; age: number; isAdmin: boolean };

user = {
  name: "Seyha",
  age: 24,
  isAdmin: true
};
\`\`\`

### Optional Properties
You can make a property optional using the \`?\` modifier:
\`\`\`typescript
let userWithBio: { name: string; bio?: string };
\`\`\``,
      km: `### ការកំណត់ប្រភេទវត្ថុ (Object Types)
នៅក្នុង TypeScript អ្នកអាចកំណត់ប្រភេទតម្លៃសម្រាប់លក្ខណៈ (Properties) នីមួយៗរបស់ Object បានយ៉ាងលម្អិត។

### របៀបសរសេរ
\`\`\`typescript
let user: { name: string; age: number; isAdmin: boolean };

user = {
  name: "Seyha",
  age: 24,
  isAdmin: true
};
\`\`\`

### លក្ខណៈជម្រើស (Optional Properties)
អ្នកអាចកំណត់ឱ្យ Property ណាមួយជាជម្រើសមិនចាំបាច់ (Optional) ដោយប្រើសញ្ញា \`?\`៖
\`\`\`typescript
let userWithBio: { name: string; bio?: string };
\`\`\``
    },
    starterCode: `// Typing an object for a library book
let book: { title: string; author: string; pages: number; publishedYear?: number } = {
  title: "Mastering TypeScript",
  author: "Vireak",
  pages: 320
};

console.log(\`Book: \${book.title} by \${book.author}\`);
// publishedYear is optional so it's undefined right now
console.log("Published Year:", book.publishedYear);
`
  },
  {
    id: "ts-enums",
    title: {
      en: "TS Enums",
      km: "អ៊ីណឹម (Enums) ក្នុង TS"
    },
    content: {
      en: `### What is an Enum?
An **enum** (enumeration) is a special class that represents a group of constants (unchangeable variables). It makes code highly readable.

### Numeric Enums
By default, enums will initialize the first value to \`0\` and auto-increment:
\`\`\`typescript
enum CardinalDirections {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}
\`\`\`

### String Enums
You can also define string enums, which are much easier to debug:
\`\`\`typescript
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
\`\`\``,
      km: `### តើអ្វីជា Enum?
**Enum** (Enumeration) គឺជាប្រភេទក្រុមថ្នាក់ពិសេសមួយសម្រាប់តំណាងឱ្យសំណុំតម្លៃថេរ (Constants) ដែលមិនអាចផ្លាស់ប្តូរបាន។ វាជួយឱ្យកូដអានទៅងាយស្រួលយល់។

### Numeric Enums
តាមលំនាំដើម សមាជិកដំបូងរបស់ Enum នឹងចាប់ផ្តើមពីលេខ \`0\` និងកើនឡើងជាបន្តបន្ទាប់៖
\`\`\`typescript
enum CardinalDirections {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}
\`\`\`

### String Enums
អ្នកក៏អាចកំណត់ Enum ជាប្រភេទអត្ថបទ (String) ដែលងាយស្រួលស្វែងរកកំហុស៖
\`\`\`typescript
enum Role {
  Admin = "ADMIN",
  User = "USER"
}
\`\`\``
    },
    starterCode: `enum Status {
  Pending = "PENDING",
  Active = "ACTIVE",
  Suspended = "SUSPENDED"
}

let userStatus: Status = Status.Active;

console.log("Current account status:", userStatus);
if (userStatus === Status.Active) {
  console.log("Welcome back, user is active!");
}
`
  }
];
