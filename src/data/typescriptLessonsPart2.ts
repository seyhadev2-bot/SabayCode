import { Lesson } from '../types';

export const typescriptLessonsPart2: Lesson[] = [
  {
    id: "ts-aliases-interfaces",
    title: {
      en: "TS Aliases & Interfaces",
      km: "Aliases & Interfaces"
    },
    content: {
      en: `### Type Aliases & Interfaces
TypeScript allows you to name and reuse complex object structures using **Type Aliases** or **Interfaces**.

### Type Aliases
Useful for primitive unions, tuples, or object shapes:
\`\`\`typescript
type CarYear = number;
type CarType = string;
type Car = {
  year: CarYear;
  type: CarType;
};
\`\`\`

### Interfaces
Only used to define object shapes. They can be extended/merged:
\`\`\`typescript
interface Point {
  x: number;
  y: number;
}
interface ThreeDPoint extends Point {
  z: number;
}
\`\`\`

> **Note:** Use \`interface\` by default for object structures, and \`type\` when you need unions, primitives, or tuple aliases.`,
      km: `### Type Aliases និង Interfaces
TypeScript អនុញ្ញាតឱ្យយើងបង្កើតឈ្មោះសម្គាល់ប្រភេទថ្មី និងប្រើប្រាស់រចនាសម្ព័ន្ធវត្ថុឡើងវិញបានយ៉ាងងាយស្រួលតាមរយៈ **Type Aliases** ឬ **Interfaces**។

### Type Aliases
មានប្រយោជន៍សម្រាប់ប្រភេទតភ្ជាប់គ្នា (Unions), ទុបផល (Tuples) ឬរចនាសម្ព័ន្ធវត្ថុ៖
\`\`\`typescript
type CarYear = number;
type CarType = string;
type Car = {
  year: CarYear;
  type: CarType;
};
\`\`\`

### Interfaces
ប្រើសម្រាប់តែកំណត់រចនាសម្ព័ន្ធវត្ថុ (Object shapes) ប៉ុណ្ណោះ។ ពួកវាអាចពង្រីក (Extend) ឬច្របាច់បញ្ចូលគ្នាបាន៖
\`\`\`typescript
interface Point {
  x: number;
  y: number;
}
interface ThreeDPoint extends Point {
  z: number;
}
\`\`\`

> **ចំណាំ:** ប្រើប្រាស់ \`interface\` ជាលំនាំដើមសម្រាប់រចនាសម្ព័ន្ធវត្ថុទូទៅ និងប្រើ \`type\` នៅពេលត្រូវការ Unions ឬអថេរដទៃទៀត។`
    },
    starterCode: `interface User {
  id: number;
  username: string;
  email: string;
}

// Inherits properties from User interface
interface PremiumUser extends User {
  subscriptionType: string;
}

const customer: PremiumUser = {
  id: 101,
  username: "Sopheak",
  email: "sopheak@domain.kh",
  subscriptionType: "Gold VIP"
};

console.log(\`Customer \${customer.username} has a subscription level of \${customer.subscriptionType}\`);
`
  },
  {
    id: "ts-union-types",
    title: {
      en: "TS Union Types",
      km: "ប្រភេទសហភាព (Union Types)"
    },
    content: {
      en: `### What are Union Types?
**Union types** are used when a value can be more than one single type. You separate the allowed types with the vertical bar \`|\`.

### Example
\`\`\`typescript
let id: string | number;
id = 123;      // OK
id = "ABC-99"; // OK
// id = true;   // Error!
\`\`\`

### Union in Function Parameters
When working with union types, you may need to perform "type narrowing" before using methods specific to a certain type:
\`\`\`typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
\`\`\``,
      km: `### តើអ្វីជា Union Types?
**Union types** ត្រូវបានប្រើប្រាស់នៅពេលដែលតម្លៃមួយអាចមានប្រភេទលើសពីមួយ។ អ្នកគ្រាន់តែប្រើសញ្ញាខណ្ឌកណ្តាល \`|\` ដើម្បីបែងចែកប្រភេទដែលអនុញ្ញាត។

### ឧទាហរណ៍
\`\`\`typescript
let id: string | number;
id = 123;      // ត្រឹមត្រូវ
id = "ABC-99"; // ត្រឹមត្រូវ
// id = true;   // កំហុស!
\`\`\`

### ការប្រើប្រាស់ Union ក្នុងប៉ារ៉ាម៉ែត្រអនុគមន៍
នៅពេលដំណើរការលើ Union Types អ្នកប្រហែលជាត្រូវច្របៀតប្រភេទ (Type Narrowing) ដើម្បីបញ្ជាក់ប្រភេទជាក់លាក់មុននឹងអនុវត្តមុខងារផ្សេងៗ៖
\`\`\`typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
\`\`\``
    },
    starterCode: `function formatPrice(value: string | number): string {
  if (typeof value === "number") {
    return \`$\${value.toFixed(2)}\`;
  }
  return \`$\${parseFloat(value).toFixed(2)}\`;
}

console.log("From number:", formatPrice(15));
console.log("From string:", formatPrice("42.5"));
`
  },
  {
    id: "ts-functions",
    title: {
      en: "TS Functions",
      km: "អនុគមន៍ក្នុង TS"
    },
    content: {
      en: `### Typing Functions
TypeScript allows you to specify types for both the **parameters (inputs)** and the **return value (outputs)** of functions.

### Typed Parameters & Return
\`\`\`typescript
function multiply(x: number, y: number): number {
  return x * y;
}
\`\`\`

### Optional Parameters
You can specify that a parameter is optional by using the \`?\` symbol. It must be listed after required parameters:
\`\`\`typescript
function greet(name: string, title?: string): string {
  if (title) {
    return \`Hello \${title} \${name}\`;
  }
  return \`Hello \${name}\`;
}
\`\`\`

### Default Parameters
You can also assign a default value to parameters:
\`\`\`typescript
function exponent(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}
\`\`\``,
      km: `### ការកំណត់ប្រភេទអនុគមន៍ (Functions)
TypeScript អនុញ្ញាតឱ្យយើងកំណត់ប្រភេទយ៉ាងច្បាស់លាស់សម្រាប់ទាំង **ប៉ារ៉ាម៉ែត្រចូល (Parameters)** និង **តម្លៃត្រឡប់មកវិញ (Return Value)** នៃអនុគមន៍។

### ប៉ារ៉ាម៉ែត្រ និងតម្លៃត្រឡប់
\`\`\`typescript
function multiply(x: number, y: number): number {
  return x * y;
}
\`\`\`

### ប៉ារ៉ាម៉ែត្រជម្រើស (Optional Parameters)
អ្នកអាចកំណត់ឱ្យប៉ារ៉ាម៉ែត្រណាមួយជាជម្រើសមិនចាំបាច់ដោយប្រើសញ្ញា \`?\`។ វាត្រូវតែស្ថិតនៅក្រោយប៉ារ៉ាម៉ែត្របង្ខំ៖
\`\`\`typescript
function greet(name: string, title?: string): string {
  if (title) {
    return \`Hello \${title} \${name}\`;
  }
  return \`Hello \${name}\`;
}
\`\`\`

### ប៉ារ៉ាម៉ែត្រតម្លៃលំនាំដើម (Default Parameters)
អ្នកក៏អាចផ្តល់តម្លៃលំនាំដើមក្នុងប៉ារ៉ាម៉ែត្របានផងដែរ៖
\`\`\`typescript
function exponent(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}
\`\`\``
    },
    starterCode: `function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}

console.log("Full Name:", buildName("Sok", "Chenda"));
console.log("First Name Only:", buildName("Arun"));
`
  },
  {
    id: "ts-casting",
    title: {
      en: "TS Casting",
      km: "ការប្តូរប្រភេទ (Casting)"
    },
    content: {
      en: `### What is Type Casting?
Sometimes you know the exact type of a value better than TypeScript can infer. You can override TypeScript's inferred type using **Casting**.

### Casting Syntaxes
There are two primary methods for casting in TypeScript:

1. **Using \`as\` keyword:** (Recommended and standard)
\`\`\`typescript
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
\`\`\`

2. **Using angle brackets \`<>\`:**
\`\`\`typescript
let someValue: unknown = "This is a string";
let strLength: number = (<string>someValue).length;
\`\`\`

> **Caution:** Casting does not perform actual runtime conversion. It is simply a way to tell the compiler to trust your specified type.`,
      km: `### តើអ្វីជា Type Casting?
ពេលខ្លះអ្នកដឹងច្បាស់ពីប្រភេទទិន្នន័យជាក់ស្តែងរបស់តម្លៃណាមួយច្បាស់ជាងអ្វីដែល TypeScript អាចយល់ដឹងបាន។ អ្នកអាចកំណត់បង្ខំប្រភេទនោះដោយប្រើប្រាស់ **Casting**។

### របៀបសរសេរ Casting
មានវិធីសំខាន់ៗពីរយ៉ាងដើម្បីអនុវត្ត Casting នៅក្នុង TypeScript៖

1. **ការប្រើប្រាស់ពាក្យគន្លឹះ \`as\':** (ជាវិធីដែលគេណែនាំ និងប្រើច្រើនបំផុត)
\`\`\`typescript
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
\`\`\`

2. **ការប្រើប្រាស់សញ្ញាគ្នាប \`<>\':**
\`\`\`typescript
let someValue: unknown = "This is a string";
let strLength: number = (<string>someValue).length;
\`\`\`

> **ការព្រមាន:** Casting មិនផ្លាស់ប្តូរតម្លៃពិតប្រាកដក្នុងពេលដំណើរការ (Runtime) នោះទេ។ វាគ្រាន់តែជាការប្រាប់ឱ្យ Compiler ទុកចិត្តលើការកំណត់របស់អ្នកប៉ុណ្ណោះ។`
    },
    starterCode: `let rawInput: unknown = "1000";

// Cast rawInput to string so we can read length
let stringLength = (rawInput as string).length;

console.log("Input is:", rawInput);
console.log("Input text length is:", stringLength);
`
  },
  {
    id: "ts-classes",
    title: {
      en: "TS Classes",
      km: "ថ្នាក់ (Classes) ក្នុង TS"
    },
    content: {
      en: `### Classes with Types
TypeScript adds type safety, access modifiers, and type annotations to standard ES6 JavaScript Classes.

### Access Modifiers
TypeScript supports three primary access modifiers for class members:
- **public:** (Default) Access is allowed from anywhere.
- **private:** Access is only allowed within the class.
- **protected:** Access is allowed within the class and its subclasses.

### Example
\`\`\`typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
\`\`\``,
      km: `### ថ្នាក់ (Classes) នៅក្នុង TypeScript
TypeScript បន្ថែមសុវត្ថិភាពប្រភេទ, របៀបគ្រប់គ្រងសិទ្ធិចូលប្រើប្រាស់ (Access Modifiers), និងការកំណត់ប្រភេទអថេរទៅលើ JavaScript Classes (ES6)។

### សិទ្ធិចូលប្រើប្រាស់ (Access Modifiers)
- **public:** (លំនាំដើម) អាចចូលប្រើបានពីគ្រប់ទីកន្លែង។
- **private:** អាចចូលប្រើបានតែនៅក្នុង Class របស់វាផ្ទាល់ប៉ុណ្ណោះ។
- **protected:** អាចចូលប្រើបាននៅក្នុង Class របស់វាផ្ទាល់ និង Class ដែលបន្តវេនពីវា (Subclasses)។

### ឧទាហរណ៍
\`\`\`typescript
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
\`\`\``
    },
    starterCode: `class Smartphone {
  private brand: string;
  protected model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  public getDetails(): string {
    return \`Smart Device: \${this.brand} \${this.model}\`;
  }
}

const myPhone = new Smartphone("Samsung", "Galaxy S24");
console.log(myPhone.getDetails());
`
  },
  {
    id: "ts-basic-generics",
    title: {
      en: "TS Basic Generics",
      km: "ជេនេរីកមូលដ្ឋាន (Generics)"
    },
    content: {
      en: `### What are Generics?
**Generics** allow you to write reusable, type-safe components, functions, or classes that work over a variety of types rather than a single one. It uses the angle bracket syntax \`<T>\`.

### Generic Function Example
Instead of using \`any\`, we can capture the actual type passed to a function:
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<string>("myString"); // return type is string
let result2 = identity<number>(100);        // return type is number
\`\`\`

Here, \`T\` is a placeholder variable for whatever type is supplied to the function.`,
      km: `### តើអ្វីជា Generics?
**Generics** អនុញ្ញាតឱ្យយើងសរសេរសមាសភាគ, អនុគមន៍ ឬ Class ដែលអាចយកទៅប្រើឡើងវិញបានជាមួយប្រភេទទិន្នន័យផ្សេងៗគ្នាជាច្រើន ដោយនៅតែរក្សាបាននូវសុវត្ថិភាពប្រភេទរឹងមាំ។ វាប្រើប្រាស់សញ្ញា \`<T>\`។

### ឧទហរណ៍អនុគមន៍ Generic
ជំនួសឱ្យការប្រើប្រាស់ \`any\` យើងអាចចាប់យកប្រភេទជាក់ស្តែងដែលបានបញ្ជូនមក៖
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity<string>("myString"); // return type គឺ string
let result2 = identity<number>(100);        // return type គឺ number
\`\`\`

នៅទីនេះ \`T\` គឺជាកន្លែងរង់ចាំជំនួស (Placeholder) សម្រាប់ប្រភេទដែលត្រូវបានបញ្ជូនទៅកាន់អនុគមន៍។`
    },
    starterCode: `// A generic function that takes an array and returns its first element
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numberList = [10, 20, 30];
const textList = ["apple", "banana", "orange"];

console.log("First Number:", getFirstElement(numberList));
console.log("First Text:", getFirstElement(textList));
`
  },
  {
    id: "ts-utility-types",
    title: {
      en: "TS Utility Types",
      km: "ប្រភេទឧបករណ៍ប្រើប្រាស់"
    },
    content: {
      en: `### TypeScript Utility Types
TypeScript provides several built-in global utility types to facilitate common type transformations. 

### Common Utilities
- **Partial<Type>:** Constructs a type with all properties of \`Type\` set to optional.
- **Required<Type>:** Constructs a type with all properties of \`Type\` set to required.
- **Readonly<Type>:** Constructs a type where all properties of \`Type\` are read-only (cannot be re-assigned).
- **Pick<Type, Keys>:** Constructs a type by picking a set of properties from \`Type\`.
- **Omit<Type, Keys>:** Constructs a type by removing a set of properties from \`Type\`.

### Example
\`\`\`typescript
interface Todo {
  title: string;
  description: string;
}

const todo1: Partial<Todo> = {
  title: "Clean room" // description is optional here!
};
\`\`\``,
      km: `### TypeScript Utility Types
TypeScript ផ្តល់ជូននូវប្រភេទឧបករណ៍ប្រើប្រាស់សកល (Built-in global utility types) ដើម្បីជួយផ្លាស់ប្តូរ ឬកែច្នៃប្រភេទទិន្នន័យបានលឿន និងងាយស្រួល។

### ឧបករណ៍ទូទៅដែលប្រើច្រើន
- **Partial<Type>:** បង្កើតប្រភេទថ្មីមួយដោយកំណត់រាល់លក្ខណៈ (Properties) របស់ \`Type\` ឱ្យទៅជាជម្រើសមិនបង្ខំ (Optional)។
- **Required<Type>:** បង្ខំឱ្យរាល់ Properties ទាំងអស់របស់ \`Type\` ក្លាយជាបង្ខំត្រូវតែមាន។
- **Readonly<Type>:** កំណត់ឱ្យរាល់ Properties ទាំងអស់របស់ \`Type\` ទៅជាអានបានតែមួយមុខ (មិនអាចកែប្រែតម្លៃបាន)។
- **Pick<Type, Keys>:** បង្កើតប្រភេទថ្មីដោយជ្រើសរើសយកតែលក្ខណៈមួយចំនួនពី \`Type\`។
- **Omit<Type, Keys>:** បង្កើតប្រភេទថ្មីដោយលុបចោលលក្ខណៈមួយចំនួនចេញពី \`Type\`។

### ឧទាហរណ៍
\`\`\`typescript
interface Todo {
  title: string;
  description: string;
}

const todo1: Partial<Todo> = {
  title: "Clean room" // description ក្លាយជាជម្រើសមិនបង្ខំឡើយនៅទីនេះ!
};
\`\`\``
    },
    starterCode: `interface UserProfile {
  id: number;
  fullName: string;
  email: string;
  phoneNumber?: string;
}

// Make all properties Readonly
const constantUser: Readonly<UserProfile> = {
  id: 1,
  fullName: "Sok Sophal",
  email: "sophal@domain.kh"
};

console.log("UserProfile name is:", constantUser.fullName);

// Try uncommenting the line below to see compilation errors:
// constantUser.fullName = "New Name"; 
`
  },
  {
    id: "ts-keyof",
    title: {
      en: "TS Keyof",
      km: "ប្រមាណវិធី Keyof"
    },
    content: {
      en: `### The \`keyof\` Operator
The **\`keyof\`** operator takes an object type and produces a string or numeric literal union of its keys.

### Example
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// Equivalent to: "id" | "name" | "email"
type UserKeys = keyof User; 
\`\`\`

This is extremely powerful when combined with Generics to ensure you can only query or pass actual keys of an object.`,
      km: `### ប្រមាណវិធី \`keyof\`
ប្រមាណវិធី **\`keyof\`** យកប្រភេទវត្ថុ (Object Type) មួយដើម្បីបង្កើតជាប្រភេទក្រុមតម្លៃអក្សរ ឬលេខ (String or Numeric Literal Union) នៃ Keys ទាំងអស់ដែលមាននៅក្នុងវត្ថុនោះ។

### ឧទាហរណ៍
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// ស្មើនឹង៖ "id" | "name" | "email"
type UserKeys = keyof User; 
\`\`\`

វាមានអានុភាពខ្លាំងណាស់នៅពេលប្រើរួមគ្នាជាមួយ Generics ដើម្បីធានាថាអ្នកអាចហៅប្រើតែ Keys ណាដែលមានពិតប្រាកដនៅក្នុង Object ប៉ុណ្ណោះ។`
    },
    starterCode: `interface Laptop {
  brand: string;
  ram: number;
  storage: number;
}

// A function that safely gets a property value using keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const myLaptop: Laptop = {
  brand: "Apple MacBook",
  ram: 16,
  storage: 512
};

console.log("Brand:", getProperty(myLaptop, "brand"));
console.log("RAM:", getProperty(myLaptop, "ram"));
`
  },
  {
    id: "ts-null",
    title: {
      en: "TS Null",
      km: "តម្លៃ Null ក្នុង TS"
    },
    content: {
      en: `### Null and Undefined in TypeScript
By default, \`null\` and \`undefined\` have their own types in TypeScript.

### Strict Null Checks
When \`strictNullChecks\` is enabled (highly recommended), values cannot automatically have \`null\` or \`undefined\` assigned to them unless you explicitly state so using union types.

\`\`\`typescript
let username: string;
// username = null; // Compile error!

let nullableUsername: string | null = null; // Allowed
\`\`\`

### Optional Chaining
TypeScript also supports standard JS **Optional Chaining** (\`?.\`) to safely access nested properties that might be null or undefined:
\`\`\`typescript
console.log(user?.address?.city);
\`\`\``,
      km: `### តម្លៃ Null និង Undefined ក្នុង TS
តាមលំនាំដើម \`null\` និង \`undefined\` មានប្រភេទទិន្នន័យផ្ទាល់ខ្លួននៅក្នុង TypeScript។

### ការពិនិត្យ Null តឹងរ៉ឹង (Strict Null Checks)
នៅពេលបើកដំណើរការ \`strictNullChecks\` (ត្រូវបានណែនាំខ្ពស់) អថេរនានាមិនអាចផ្តល់តម្លៃ \`null\` ឬ \`undefined\` ដោយស្វ័យប្រវត្តិនោះទេ លុះត្រាតែអ្នកបញ្ជាក់ច្បាស់លាស់ដោយប្រើ Union Type៖

\`\`\`typescript
let username: string;
// username = null; // កំហុស Compile!

let nullableUsername: string | null = null; // ត្រឹមត្រូវ
\`\`\`

### និមិត្តសញ្ញាតំណភ្ជាប់ជម្រើស (Optional Chaining)
TypeScript គាំទ្រការប្រើប្រាស់ **Optional Chaining** (\`?.\`) ដើម្បីចូលទៅកាន់ Properties ជាន់ក្នុងៗដោយសុវត្ថិភាព៖
\`\`\`typescript
console.log(user?.address?.city);
\`\`\``
    },
    starterCode: `function displayGreeting(name: string | null) {
  if (name === null) {
    console.log("Hello, Guest!");
  } else {
    console.log(\`Hello, \${name.toUpperCase()}!\`);
  }
}

displayGreeting("Borey");
displayGreeting(null);
`
  },
  {
    id: "ts-definitely-typed",
    title: {
      en: "TS Definitely Typed",
      km: "Definitely Typed"
    },
    content: {
      en: `### Definitely Typed (@types)
Many popular JavaScript libraries (like Lodash, Express, React) are written in plain JavaScript and don't include native type definitions.

### Type Declaration Packages
The **Definitely Typed** repository is a massive community project that houses TS type declarations for thousands of JS packages. You install these types using the \`@types/\` prefix via npm:
\`\`\`bash
npm install --save-dev @types/react
npm install --save-dev @types/lodash
\`\`\`

These packages are installed as development dependencies and provide instant type safety and autocomplete inside your IDE for those JS libraries!`,
      km: `### Definitely Typed (@types)
បណ្ណាល័យ JavaScript ល្បីៗជាច្រើន (ដូចជា Lodash, Express, React) ត្រូវបានសរសេរជាភាសា JavaScript ធម្មតា ហើយមិនមានការកំណត់ប្រភេទកូដ (Type Definitions) មកជាមួយស្រាប់ឡើយ។

### កញ្ចប់ប្រកាសប្រភេទ (Type Declaration Packages)
គម្រោងសហគមន៍ **Definitely Typed** គឺជាកន្លែងផ្ទុកប្រកាសប្រភេទ TS សម្រាប់កញ្ចប់ JS រាប់ពាន់។ អ្នកអាចដំឡើងពួកវាដោយប្រើបុព្វបទ \`@types/\` តាមរយៈ npm៖
\`\`\`bash
npm install --save-dev @types/react
npm install --save-dev @types/lodash
\`\`\`

កញ្ចប់ប្រភេទទាំងនេះត្រូវបានដំឡើងជា Dev Dependencies ហើយជួយឱ្យ IDE យល់ដឹងពីប្រភេទ និងជួយបំពេញកូដស្វ័យប្រវត្តិភ្លាមៗសម្រាប់បណ្ណាល័យទាំងនោះ!`
    },
    starterCode: `// Conceptual example showing how typescript declarations resolve inside typical environments
interface CommunityPackageExample {
  (name: string): string;
  version: string;
}

const mockPackage: CommunityPackageExample = Object.assign(
  (name: string) => "Result: " + name,
  { version: "1.0.0" }
);

console.log("Mocking type definitions of an external library:", mockPackage("Success"));
console.log("Library version:", mockPackage.version);
`
  }
];
