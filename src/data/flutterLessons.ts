import { Topic, ReferenceItem, Quiz, MiniProject } from '../types';

export const flutterTopics: Topic[] = [
  {
    id: "getting-started",
    title: { en: "Getting Started", km: "ការចាប់ផ្តើម" },
    lessons: [
      {
        id: "flutter-home",
        title: { en: "1. Flutter Home", km: "១. ទំព័រដើម Flutter" },
        content: {
          en: `# Welcome to Flutter Development!
Welcome to the comprehensive Flutter Development course! Flutter is Google's portable UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.

In this course, you will learn to build cross-platform apps using the Dart programming language, master modern declarative UI paradigms, and implement reactive state management.

### What We Will Build & Learn:
- **Dart Programming Fundamentals**: Learn Google's robust, client-optimized programming language.
- **Widget Tree & Core Layouts**: Understand how Flutter compiles widgets into high-performance visual hierarchies.
- **Interactive Apps with State Management**: Master user interaction, forms, gestures, and reactive state updates.
- **Advanced Animations & REST APIs**: Bring your apps to life with fluid motion and connect to cloud databases.
- **App Store Deployment**: Steps to pack and publish your apps to Android & iOS.

> **Note:** This course is fully bilingual (English and Khmer). Lessons marked with a playground support live editing and execution via Google's official embedded DartPad tool!`,
          km: `# សូមស្វាគមន៍មកកាន់ការសិក្សា Flutter!
សូមស្វាគមន៍មកកាន់វគ្គសិក្សាអភិវឌ្ឍន៍កម្មវិធីជាមួយ Flutter! Flutter គឺជាឧបករណ៍រចនា UI (UI Toolkit) របស់ក្រុមហ៊ុន Google សម្រាប់បង្កើតកម្មវិធីទូរស័ព្ទ វេបសាយ និងកុំព្យូទ័រ ដែលមានល្បឿនលឿន និងស្រស់ស្អាតបំផុត ចេញពីកូដតែមួយ (Single Codebase)។

នៅក្នុងវគ្គសិក្សានេះ អ្នកនឹងរៀនបង្កើតកម្មវិធីឆ្លងប្រព័ន្ធ (Cross-platform) ដោយប្រើភាសា Dart ស្វែងយល់ពីរបៀបរចនា UI បែបប្រកាស (Declarative UI) និងគ្រប់គ្រងទិន្នន័យកម្មវិធី (State Management)។

### អ្វីដែលយើងនឹងរៀន និងបង្កើត៖
- **មូលដ្ឋានគ្រឹះភាសា Dart**៖ រៀនភាសាកូដដែលត្រូវបានអភិវឌ្ឍឡើងសម្រាប់ការរចនា UI ដោយ Google។
- **រចនាសម្ព័ន្ធ Widget និង Layouts**៖ យល់ដឹងពីរបៀបដែល Flutter បំលែងកូដទៅជាផ្ទៃបង្ហាញល្បឿនលឿន។
- **ការគ្រប់គ្រង State និងអន្តរកម្ម**៖ បង្កើតកម្មវិធីដែលអាចផ្លាស់ប្តូរទិន្នន័យ ទទួលការចុច និងទម្រង់បំពេញព័ត៌មាន។
- **ចលនាគំនូរជីវចល និង REST APIs**៖ ធ្វើឱ្យកម្មវិធីមានជីវវន្ត និងភ្ជាប់ទៅកាន់ទិន្នន័យនៅលើ Cloud។
- **ការដាក់លក់លើ App Store**៖ ជំហានរៀបចំកម្មវិធីដើម្បីដាក់ដំណើរការលើ Google Play Store និង Apple App Store។

> **ចំណាំ៖** វគ្គសិក្សានេះត្រូវបានរៀបចំជាពីរភាសា (អង់គ្លេស និងខ្មែរ)។ មេរៀនដែលមានសញ្ញាសាកល្បងកូដ គាំទ្រការសរសេរ និងដំណើរការកូដផ្ទាល់នៅលើកម្មវិធីរុករកតាមរយៈឧបករណ៍ DartPad ផ្លូវការរបស់ Google!`
        },
        starterCode: ""
      },
      {
        id: "flutter-intro",
        title: { en: "2. Flutter Introduction", km: "២. សេចក្តីផ្តើមអំពី Flutter" },
        content: {
          en: `# Flutter Introduction
Flutter is not just a library; it is a complete Software Development Kit (SDK) containing rendering engines, CLI tools, widgets, and APIs.

### Why Choose Flutter?
1. **Fast Development**: With features like *Hot Reload*, code changes are reflected in sub-seconds in your emulator or physical device.
2. **Native Performance**: Unlike Hybrid Apps, Flutter compiled code talks directly to canvas paint engines without web bridges, achieving solid 60fps/120fps performance.
3. **Beautiful Designs**: Flutter provides highly customized widgets implementing Material Design (Android) and Cupertino (iOS) aesthetics.

### How it Works Under the Hood
Flutter acts like a game engine. It does not use the OEM native platform widgets. Instead, it draws every pixel directly on the screen using its high-speed graphics canvas renderer (**Skia** or the modern **Impeller** engine). This means your app looks identical and runs smoothly on both Android 5.0 and the latest iOS devices.`,
          km: `# សេចក្តីផ្តើមអំពី Flutter
Flutter មិនមែនត្រឹមតែជាបណ្ណាល័យកូដ (Library) នោះទេ ប៉ុន្តែវាជាកញ្ចប់អភិវឌ្ឍន៍កម្មវិធីពេញលេញ (SDK) ដែលរួមមានម៉ាស៊ីនគំនូរ (Rendering engine), ឧបករណ៍ CLI, និងសមាសធាតុរចនា UI (Widgets)។

### ហេតុអ្វីបានជាជ្រើសរើសប្រើប្រាស់ Flutter?
១. **ល្បឿននៃការសរសេរកូដរហ័ស**៖ មុខងារ *Hot Reload* ជួយបង្ហាញលទ្ធផលកូដដែលទើបផ្លាស់ប្តូរក្នុងរយៈពេលមិនដល់ ១វិនាទីឡើយ លើអេក្រង់សាកល្បង។
២. **ដំណើរការល្បឿនស្មើ Native**៖ មិនដូចកម្មវិធី Hybrid ផ្សេងទៀតឡើយ កូដ Flutter ត្រូវបានបំលែងទៅជាភាសាម៉ាស៊ីនផ្ទាល់ និងគូររូបភាពលើអេក្រង់ដោយមិនឆ្លងកាត់ Web bridge ឡើយ ធានាល្បឿនរត់ 60fps/120fps។
៣. **រចនាបថស្អាតទាក់ទាញ**៖ Flutter ផ្តល់នូវ Widgets ស្អាតៗជាច្រើនដែលអនុវត្តតាមស្តង់ដារ Material Design (Android) និង Cupertino (iOS)។

### របៀបដែលវាដំណើរការខាងក្នុង
Flutter ដំណើរការប្រហាក់ប្រហែលនឹងម៉ាស៊ីនហ្គេម (Game Engine) ដែរ។ វាសរសេរ និងគូររូបភាពគ្រប់ភីកសែល (Pixel) ទាំងអស់ដោយផ្ទាល់នៅលើអេក្រង់ ដោយប្រើប្រាស់ម៉ាស៊ីនគំនូរកម្រិតខ្ពស់ (**Skia** ឬម៉ាស៊ីនថ្មី **Impeller**)។ ហេតុនេះហើយ ទើបកម្មវិធីរបស់អ្នកមានរូបរាងដូចគ្នាឥតខ្ចោះ និងរត់លឿន ទាំងលើ Android ចាស់ៗ និង iOS ទំនើបៗ។`
        },
        starterCode: ""
      },
      {
        id: "flutter-install",
        title: { en: "3. Flutter Installation", km: "៣. ការដំឡើង Flutter" },
        content: {
          en: `# Flutter Installation Walkthrough
To build Flutter applications locally on your machine, you must download the Flutter SDK and install dependencies for your target platform.

> **Reference Guide:** Follow these manual setup steps on your physical computer.

### Step-by-Step Guide:
1. **Download the SDK**: Visit [flutter.dev/docs/get-started](https://flutter.dev/docs/get-started) and download the stable package for your OS (Windows, macOS, or Linux).
2. **Extract & Path Setup**: Extract the zip folder and append the Flutter \`bin\` folder to your system environment variables.
   \`\`\`bash
   # Add to ~/.zshrc or ~/.bashrc on Mac/Linux:
   export PATH="$PATH:/YOUR_PATH_TO_FLUTTER/flutter/bin"
   \`\`\`
3. **Verify Installation**: Run the diagnostics CLI command in your terminal to see missing packages:
   \`\`\`bash
   $ flutter doctor
   \`\`\`
   This command inspects Android Studio, Xcode, VS Code, and browser configurations, and gives a list of next actions.`,
          km: `# ការណែនាំអំពីការដំឡើង Flutter
ដើម្បីសរសេរកម្មវិធី Flutter លើកុំព្យូទ័រផ្ទាល់ខ្លួនរបស់អ្នក អ្នកត្រូវទាញយក Flutter SDK និងដំឡើងកម្មវិធីគាំទ្រផ្សេងៗទៅតាមប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក។

> **មគ្គុទ្ទេសក៍យោង៖** សូមអនុវត្តតាមជំហានទាំងនេះនៅលើកុំព្យូទ័ររបស់អ្នកផ្ទាល់។

### ជំហានលម្អិត៖
១. **ទាញយក SDK**៖ ចូលទៅកាន់គេហទំព័រ [flutter.dev/docs/get-started](https://flutter.dev/docs/get-started) រួចទាញយកកញ្ចប់ស្តង់ដារសម្រាប់ OS របស់អ្នក (Windows, macOS, ឬ Linux)។
២. **កំណត់ផ្លូវ Path**៖ បន្ធូរកញ្ចប់ឯកសារ zip រួចបញ្ជាក់ទីតាំងថត \`bin\` របស់ Flutter ទៅកាន់ Environment Variables នៃកុំព្យូទ័ររបស់អ្នក។
   \`\`\`bash
   # បន្ថែមក្នុងឯកសារ ~/.zshrc ឬ ~/.bashrc លើ Mac/Linux៖
   export PATH="$PATH:/YOUR_PATH_TO_FLUTTER/flutter/bin"
   \`\`\`
៣. **ពិនិត្យការដំឡើង**៖ វាយពាក្យបញ្ជាខាងក្រោមនៅលើ Terminal ដើម្បីពិនិត្យរកមើលកញ្ចប់កូដដែលខ្វះខាត៖
   \`\`\`bash
   $ flutter doctor
   \`\`\`
   ពាក្យបញ្ជានេះនឹងត្រួតពិនិត្យប្រព័ន្ធ Android Studio, Xcode, VS Code និង browser រួចផ្តល់នូវបញ្ជីការងារដែលត្រូវដំឡើងបន្ត។`
        },
        starterCode: ""
      },
      {
        id: "flutter-create-app",
        title: { en: "4. Creating a Simple Application in Android Studio", km: "៤. ការបង្កើតកម្មវិធីក្នុង Android Studio" },
        content: {
          en: `# Creating a Simple Application in Android Studio
Android Studio is Google's primary IDE for Android and cross-platform Flutter development.

> **Reference Guide:** Follow these steps to configure your editor and launch your first Flutter app project.

### Step-by-Step Walkthrough:
1. **Install Flutter Plugins**: Open Android Studio, go to **Settings** > **Plugins**, search for "Flutter" and "Dart", and install both. Restart Android Studio.
2. **Start a New Project**:
   - Select **New Flutter Project**.
   - Input your local Flutter SDK path.
   - Choose a project name (lowercase with underscores, e.g. \`my_first_app\`).
   - Select targeted platforms (Android, iOS, Web).
3. **Locate the Entrypoint**: Inside the project directory, find \`lib/main.dart\`. This is the main file containing the app starting point.
4. **Launch Application**: Select your virtual device emulator or connected device from the top toolbar, then click the green **Run (Play)** button to compile!`,
          km: `# ការបង្កើតកម្មវិធីដំបូងក្នុង Android Studio
Android Studio គឺជាកម្មវិធីសរសេរកូដចម្បងរបស់ Google សម្រាប់ការអភិវឌ្ឍន៍ប្រព័ន្ធ Android និងកម្មវិធីឆ្លងប្រព័ន្ធជាមួយ Flutter។

> **មគ្គុទ្ទេសក៍យោង៖** សូមអនុវត្តតាមជំហានទាំងនេះ ដើម្បីកំណត់ឧបករណ៍ និងបើកដំណើរការគម្រោងកម្មវិធីដំបូងរបស់អ្នក។

### ជំហានបង្កើតគម្រោង៖
១. **ដំឡើង Flutter Plugin**៖ បើក Android Studio ចូលទៅកាន់ **Settings** > **Plugins** រួចស្វែងរកពាក្យ "Flutter" និង "Dart" ហើយចុចដំឡើងវា។ រួចបិទបើកកម្មវិធីឡើងវិញ។
២. **បង្កើតគម្រោងថ្មី**៖
   - ជ្រើសរើស **New Flutter Project**។
   - បញ្ជាក់ផ្លូវទៅកាន់ទីតាំង Flutter SDK លើម៉ាស៊ីនរបស់អ្នក។
   - បំពេញឈ្មោះគម្រោង (ប្រើអក្សរតូចភ្ជាប់ដោយសញ្ញា _ ឧទាហរណ៍៖ \`my_first_app\`)។
   - ជ្រើសរើសប្រព័ន្ធចង់បង្កើតកម្មវិធី (Android, iOS, Web)។
៣. **ស្វែងរកទីតាំងចាប់ផ្តើមកូដ**៖ នៅក្នុងគម្រោងរបស់អ្នក សូមស្វែងរកឯកសារ \`lib/main.dart\`។ នេះគឺជាឯកសារកូដចម្បងដែលផ្ទុកចំណុចចាប់ផ្តើមដំណើរការរបស់កម្មវិធី។
៤. **ដំណើរការកម្មវិធី**៖ ជ្រើសរើសអេក្រង់ទូរស័ព្ទទម្រង់សាកល្បង (Emulator) ឬឧបករណ៍ពិតរួចចុចប៊ូតុង **Run (សញ្ញាពណ៌បៃតង)** ដើម្បីបំលែង និងដំឡើងកម្មវិធី!`
        },
        starterCode: ""
      },
      {
        id: "flutter-architecture",
        title: { en: "5. Flutter Architecture Application", km: "៥. រចនាសម្ព័ន្ធកម្មវិធី Flutter" },
        content: {
          en: `# Flutter Architecture Application
To write production-quality Flutter apps, you should understand how Flutter is layered.

### The Three Layers of Flutter:
1. **The Framework (Dart)**: This is the high-level layer that developers interact with. It includes layout APIs, animation modules, gesture detectors, and a complete library of Material and Cupertino widgets.
2. **The Engine (C/C++)**: This is the engine core. It includes **Skia** or **Impeller** (drawing engine), the Dart runtime container, text layout libraries, and hardware pipeline optimization.
3. **The Embedder (Platform-Specific)**: This is the platform entry point. It coordinates with native host environments (Java/Kotlin on Android, Swift/Objective-C on iOS) to gain window surface frames, surface graphics buffers, and capture input events.

### Rendering Cycle:
When your application's state shifts, Flutter rebuilds the internal UI tree, computes a lightweight "Render Tree" difference delta, and notifies the engine. The Engine swiftly re-renders and draws only changed pixels directly, bypassing complex OS desktop UI elements.`,
          km: `# យល់ដឹងពីរចនាសម្ព័ន្ធកម្មវិធី Flutter
ដើម្បីសរសេរកម្មវិធីដែលមានគុណភាព និងល្បឿនលឿន អ្នកត្រូវយល់ដឹងពីលំដាប់ស្រទាប់បច្ចេកវិទ្យារបស់ Flutter។

### ស្រទាប់ចម្បងទាំង៣ របស់ Flutter៖
១. **The Framework (ភាសា Dart)**៖ ជាស្រទាប់កម្រិតខ្ពស់ដែលអ្នកសរសេរកូដធ្វើការជាមួយ។ វារួមបញ្ចូលទាំង APIs សម្រាប់ប្លង់រចនា (Layout), គំនូរជីវចល (Animation), ឧបករណ៍ចាប់ការប៉ះ (Gestures), និងបណ្តុំ Widgets (Material/Cupertino)។
២. **The Engine (ភាសា C/C++)**៖ ជាស្នូលម៉ាស៊ីនចម្បង។ វារួមបញ្ចូលទាំងបណ្ណាល័យគូររូបភាព **Skia** ឬ **Impeller**, កញ្ចប់ដំណើរការភាសា Dart (Dart Runtime), និងការសម្របសម្រួលល្បឿនគូររូបភាពលើអេក្រង់។
៣. **The Embedder (កូដតាមប្រព័ន្ធនីមួយៗ)**៖ ជាច្រកចេញចូលតាមប្រព័ន្ធទូរស័ព្ទនីមួយៗ។ វាធ្វើការងារទំនាក់ទំនងជាមួយប្រព័ន្ធប្រតិបត្តិការ (Android ប្រើ Java/Kotlin និង iOS ប្រើ Swift/Obj-C) ដើម្បីទាញយកផ្ទៃបង្ហាញរបស់ទូរស័ព្ទ និងចាប់សញ្ញាចុចអេក្រង់។

### លំហូរដំណើរការគូរ UI៖
នៅពេលដែលទិន្នន័យ (State) របស់កម្មវិធីផ្លាស់ប្តូរ Flutter នឹងរៀបចំគណនាភាពខុសគ្នានៃក្រាហ្វិក រួចបញ្ជាទៅកាន់ Engine ឱ្យគូរឡើងវិញយ៉ាងរហ័សបំផុត ដោយមិនចាំបាច់ឆ្លងកាត់ការគ្រប់គ្រង UI ដ៏ស្មុគស្មាញរបស់ប្រព័ន្ធប្រតិបត្តិការឡើយ។`
        },
        starterCode: ""
      },
      {
        id: "flutter-dart-intro",
        title: { en: "6. Introduction to Dart Programming", km: "៦. សេចក្តីផ្តើមអំពីភាសា Dart" },
        content: {
          en: `# Introduction to Dart Programming
Dart is a client-optimized, object-oriented language developed by Google. Before building Flutter interfaces, we need to grasp basic Dart variables, lists, and control structures.

### Key Syntax Elements:
- \`void main()\`: Every Dart application starts executing here.
- \`var\`, \`String\`, \`int\`, \`double\`, \`bool\`: Common static type declarations.
- \`String interpolation\`: Combine variables into text using the \`$\` character.

### Let's practice with Dart:
In the interactive panel below, practice declaring variables, lists, and executing standard outputs.`,
          km: `# មូលដ្ឋានគ្រឹះភាសា Dart
Dart គឺជាភាសាសរសេរកូដតម្រង់ទិសវត្ថុ (Object-Oriented Language) អភិវឌ្ឍដោយក្រុមហ៊ុន Google។ មុននឹងចាប់ផ្តើមរចនា UI របស់ Flutter យើងត្រូវយល់ដឹងពីអថេរ (Variables), បញ្ជី (Lists), និងលក្ខខណ្ឌបញ្ជានៃភាសានេះជាមុនសិន។

### ចំណុចសំខាន់ៗ៖
- \`void main()\`៖ គ្រប់កម្មវិធី Dart ទាំងអស់ ចាប់ផ្តើមដំណើរការចេញពីអនុគមន៍នេះ។
- \`var\`, \`String\`, \`int\`, \`double\`, \`bool\`៖ ប្រភេទកំណត់អថេរទូទៅ។
- \`String interpolation\`៖ បញ្ចូលតម្លៃអថេរទៅក្នុងអត្ថបទដោយប្រើសញ្ញា \`$\`។

### សាកល្បងអនុវត្តជាមួយ Dart៖
នៅក្នុងប្រអប់សាកល្បងខាងក្រោម រៀនប្រកាសអថេរ និងបង្ហាញលទ្ធផលចេញមកក្រៅ។`
        },
        starterCode: `void main() {
  // 1. Declare variables
  String courseName = "Flutter & Dart Course";
  int lessonsCount = 25;
  double duration = 12.5;
  
  // 2. Perform a calculation or string interpolation
  print("Welcome to $courseName!");
  print("This training features $lessonsCount interactive parts.");
  print("Expected complete duration is $duration hours.");
  
  // 3. Try to add a simple list and loop
  List<String> coreWidgets = ["Container", "Text", "Row", "Column"];
  print("\\nCore Flutter Widgets to study:");
  for (var widget in coreWidgets) {
    print("- $widget");
  }
}`
      },
      {
        id: "flutter-widgets-intro",
        title: { en: "7. Flutter Introduction to Widgets", km: "៧. សេចក្តីផ្តើមអំពី Widgets" },
        content: {
          en: `# Flutter Introduction to Widgets
In Flutter, **Everything is a Widget**. A button, a margin, layout alignments, and even the app theme itself are all represented as widgets.

### Widget Tree Architecture
Flutter builds layouts by nesting widgets inside one another, forming a hierarchical tree.

### StatelessWidget vs StatefulWidget
1. **StatelessWidget**: Immutable widgets. Their look depends entirely on properties passed on initialization. They do not maintain dynamic, runtime state changes.
2. **StatefulWidget**: Can dynamically modify their internal rendering in response to user taps, networking data, or timers.

### Practice Widget Rendering:
Let's see a simple widget layout using a \`MaterialApp\`, \`Scaffold\`, and \`Text\` widget. Run this in the live panel below!`,
          km: `# សេចក្តីផ្តើមអំពី Widgets
នៅក្នុងប្រព័ន្ធ Flutter **អ្វីៗគ្រប់យ៉ាងគឺជា Widget**។ ប៊ូតុង, គម្លាត (Margin), ការតម្រឹមប្លង់រចនា ឬសូម្បីតែ Theme របស់កម្មវិធីទាំងមូល សុទ្ធតែជា Widget ទាំងអស់។

### គំនិតរចនាសម្ព័ន្ធ Widget Tree
Flutter បង្កើតប្លង់បង្ហាញដោយការញាត់បញ្ចូល Widget មួយទៅក្នុង Widget មួយទៀត បង្កើតបានជាដើមឈើរចនាសម្ព័ន្ធ (Widget Tree)។

### StatelessWidget ប្រៀបធៀបនឹង StatefulWidget
១. **StatelessWidget**៖ ជា Widget ឋិតថេរ។ រូបរាងរបស់វាអាស្រ័យទាំងស្រុងលើតម្លៃដែលផ្ទេរឱ្យពេលចាប់ផ្តើម ហើយវាមិនអាចផ្លាស់ប្តូររូបរាងដោយខ្លួនឯងបានទេនៅពេលកម្មវិធីកំពុងដំណើរការ។
២. **StatefulWidget**៖ ជា Widget ឌីណាមិក។ វាអាចផ្លាស់ប្តូររូបរាងបង្ហាញឡើងវិញនៅពេលមានអន្តរកម្មពីអ្នកប្រើប្រាស់ ការទាញយកទិន្នន័យពីអ៊ីនធឺណិត ឬម៉ោងរាប់ថយក្រោយ។

### សាកល្បងដំណើរការ Widgets៖
សូមមើលកូដគំរូនៃ Widget សាមញ្ញមួយដែលប្រើប្រាស់ \`MaterialApp\`, \`Scaffold\` និង \`Text\`។ ដំណើរការវាក្នុងប្រអប់សាកល្បងខាងក្រោម!`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sabaicode Flutter App'),
          backgroundColor: Colors.indigo,
        ),
        body: Center(
          child: Text(
            'Hello, Cambodian Developers! 🇰🇭\\nWelcome to Flutter Widgets.',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.indigo,
            ),
          ),
        ),
      ),
    ),
  );
}`
      },
      {
        id: "flutter-layouts-intro",
        title: { en: "8. Flutter Introduction to Layouts", km: "៨. សេចក្តីផ្តើមអំពី Layouts" },
        content: {
          en: `# Introduction to Layouts
To build beautiful application pages, you must organize multiple widgets horizontally, vertically, or stacked on top of one another.

### Core Alignment Widgets:
- **Column**: Places child widgets in a vertical list.
- **Row**: Places child widgets in a horizontal list.
- **Container**: A container widget that supports padding, margins, borders, colors, and border-radius.
- **Padding**: Explicitly inserts spacing around any target widget.

> **Tip:** Use \`mainAxisAlignment\` and \`crossAxisAlignment\` to align children in Columns and Rows!`,
          km: `# សេចក្តីផ្តើមអំពី Layouts
ដើម្បីបង្កើតអេក្រង់កម្មវិធីដ៏ស្រស់ស្អាត អ្នកត្រូវរៀបចំ Widgets ជាច្រើនបញ្ចូលគ្នាជាជួរដេក ជួរឈរ ឬត្រួតពីលើគ្នា។

### Widgets ប្លង់រចនាសំខាន់ៗ៖
- **Column**៖ រៀបចំ Widget កូនៗតម្រៀបជាជួរឈរពីលើចុះក្រោម។
- **Row**៖ រៀបចំ Widget កូនៗតម្រៀបជាជួរដេកពីឆ្វេងទៅស្តាំ។
- **Container**៖ ប្រអប់ផ្ទុកដែលគាំទ្រ Padding, Margin, ពណ៌ផ្ទៃខាងក្រោយ និងជ្រុងមូល។
- **Padding**៖ ប្រើសម្រាប់បង្កើតគម្លាតជុំវិញ Widget ណាមួយ។

> **គន្លឹះ៖** ប្រើប្រាស់ \`mainAxisAlignment\` និង \`crossAxisAlignment\` ដើម្បីតម្រឹមទីតាំង Widget កូនៗនៅក្នុង Column និង Row!`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(LayoutDemo());

class LayoutDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Layout Row & Column')),
        body: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Bento Style Cards Layout',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 15),
              // Horizontal Row
              Row(
                children: [
                  Expanded(
                    child: Container(
                      height: 100,
                      decoration: BoxDecoration(
                        color: Colors.amber,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Center(child: Text('Card A')),
                    ),
                  ),
                  SizedBox(width: 10),
                  Expanded(
                    child: Container(
                      height: 100,
                      decoration: BoxDecoration(
                        color: Colors.teal,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Center(child: Text('Card B', style: TextStyle(color: Colors.white))),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 15),
              Container(
                width: double.infinity,
                padding: EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.indigo.shade50,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.indigo),
                ),
                child: Text(
                  'Full-width footer information block.',
                  textAlign: TextAlign.center,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-gestures-intro",
        title: { en: "9. Flutter Introduction to Gestures", km: "៩. សេចក្តីផ្តើមអំពី Gestures" },
        content: {
          en: `# Flutter Introduction to Gestures
Natively, many widgets (like text, containers, and icons) do not listen to user touch actions. To make any static widget interactive, you must wrap it in a gesture responder widget.

### GestureDetector vs InkWell
1. **GestureDetector**: Listens to raw gesture movements: taps, double-taps, long presses, drags, and scaling.
2. **InkWell**: Listens to tap events and renders a beautiful, modern Android Material ripple animation on touch.

### Practice Gestures:
Let's build a custom interactive button. When tapped, it displays logs in the debugger! Try tapping the button in the preview pane below.`,
          km: `# សេចក្តីផ្តើមអំពី Gestures
តាមធម្មតា Widgets ជាច្រើន (ដូចជា Text, Container ឬ Icon) មិនអាចដឹងពីការចុចរបស់អ្នកប្រើប្រាស់ឡើយ។ ដើម្បីធ្វើឱ្យពួកគេមានអន្តរកម្មចុចបាន យើងត្រូវញាត់វានៅក្នុង Widget ទទួលសញ្ញាចុច។

### GestureDetector ប្រៀបធៀបនឹង InkWell
១. **GestureDetector**៖ ចាប់សញ្ញាកាយវិការគ្រប់ប្រភេទ៖ ចុចម្តង, ចុចពីរដង, ចុចជាប់, អូស ឬពង្រីក។
២. **InkWell**៖ ចាប់សញ្ញាចុច និងបង្កើតឱ្យមានចលនារលកទឹក (Ripple Animation) ដ៏ស្រស់ស្អាតនៅកន្លែងដែលយើងបានប៉ះប៉ូតុង។

### សាកល្បងការចុច៖
យើងនឹងបង្កើតប៊ូតុងរចនាដោយខ្លួនឯងមួយ។ នៅពេលចុច វានឹងដំណើរការកូដបង្ហាញសារក្នុង Debug Console! សាកល្បងចុចលើប៊ូតុងក្នុងប្រអប់ខាងក្រោម។`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(GestureApp());

class GestureApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              GestureDetector(
                onTap: () {
                  print('User tapped the static container!');
                },
                child: Container(
                  padding: EdgeInsets.all(20),
                  color: Colors.red.shade100,
                  child: Text('GestureDetector Container\\n(No feedback on tap)'),
                ),
              ),
              SizedBox(height: 30),
              // InkWell needs a Material ancestor to draw ripples correctly
              Material(
                color: Colors.blue,
                borderRadius: BorderRadius.circular(8),
                child: InkWell(
                  onTap: () {
                    print('User tapped the modern InkWell button!');
                  },
                  borderRadius: BorderRadius.circular(8),
                  child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
                    child: Text(
                      'InkWell Button with Ripple',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-state-management",
        title: { en: "10. Flutter State Management", km: "១០. ការគ្រប់គ្រង State ក្នុង Flutter" },
        content: {
          en: `# Flutter State Management
State is any dynamic data inside your application that changes during runtime (e.g., shopping cart list, active session, counter count).

### How StatefulWidget Updates the Screen
To update state and render changes on the display, we call the **\`setState()\`** method.
\`\`\`dart
setState(() {
  _counter++;
});
\`\`\`
Calling \`setState()\` marks this widget as "dirty" and requests Flutter to rebuild the widget tree, updating the visual interface with the new state values.

> **Common Pitfall:** Modifying variable values without wrapping inside a \`setState()\` function will change the variable, but the screen will not update to show the change!`,
          km: `# ការគ្រប់គ្រង State ក្នុង Flutter
State គឺជាទិន្នន័យឌីណាមិកទាំងឡាយនៅក្នុងកម្មវិធីដែលផ្លាស់ប្តូរនៅពេលដំណើរការ (ឧទាហរណ៍៖ ទំនិញក្នុងកន្ត្រក, គណនីកំពុងចូលប្រើ, ឬចំនួនលេខរាប់)។

### របៀបដែល StatefulWidget ធ្វើបច្ចុប្បន្នភាពអេក្រង់
ដើម្បីផ្លាស់ប្តូរទិន្នន័យ និងគូររូបភាពបង្ហាញឡើងវិញ យើងត្រូវហៅអនុគមន៍ **\`setState()\`**៖
\`\`\`dart
setState(() {
  _counter++;
});
\`\`\`
ការហៅ \`setState()\` នឹងបញ្ជាឱ្យ Flutter បង្កើត និងគូរអេក្រង់ Widget Tree ឡើងវិញ ដើម្បីឆ្លុះបញ្ចាំងពីតម្លៃទិន្នន័យថ្មី។

> **កំហុសទូទៅ៖** បើអ្នកផ្លាស់ប្តូរតម្លៃអថេរដោយមិនដាក់នៅក្នុង \`setState()\` នោះទេ អថេរនឹងផ្លាស់ប្តូរតម្លៃពិតមែន ប៉ុន្តែអេក្រង់ទូរស័ព្ទនឹងមិនផ្លាស់ប្តូរឡើយ!`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(TaskTrackerApp());

class TaskTrackerApp extends StatefulWidget {
  @override
  _TaskTrackerAppState createState() => _TaskTrackerAppState();
}

class _TaskTrackerAppState extends State<TaskTrackerApp> {
  int _completedTasks = 0;

  void _completeTask() {
    setState(() {
      _completedTasks++;
    });
  }

  void _resetTasks() {
    setState(() {
      _completedTasks = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Sabaicode Habit App')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(Icons.check_circle, size: 80, color: Colors.green),
              SizedBox(height: 10),
              Text('Completed Tasks Daily Goals:'),
              Text(
                '$_completedTasks',
                style: TextStyle(fontSize: 48, fontWeight: FontWeight.black, color: Colors.indigo),
              ),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: _completeTask,
                    child: Text('Complete One Task'),
                  ),
                  SizedBox(width: 10),
                  TextButton(
                    onPressed: _resetTasks,
                    child: Text('Reset', style: TextStyle(color: Colors.grey)),
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-animation",
        title: { en: "11. Flutter Animation", km: "១១. ចលនាគំនូរជីវចល (Animation)" },
        content: {
          en: `# Flutter Animation
Animations make your applications look premium and smooth. Flutter provides robust implicit and explicit animations to animate widget sizes, colors, angles, and alignments.

### Implicit Animations:
These are super easy to use! Flutter provides "Animated" versions of common widgets (e.g., \`AnimatedContainer\`, \`AnimatedOpacity\`, \`AnimatedPositioned\`).
When you modify their layout values inside a \`setState()\`, Flutter automatically interpolates values and animate changes over the specified duration.

### Practice Animation:
Run this live demo below, click the action button, and watch the Container change color, borders, and width smoothly!`,
          km: `# ចលនាគំនូរជីវចល (Animation)
ចលនាគំនូរជីវចលជួយឱ្យកម្មវិធីរបស់អ្នកមើលទៅមានលំដាប់ខ្ពស់ និងរលូន។ Flutter ផ្តល់នូវបច្ចេកវិទ្យាគំនូរជីវចលយ៉ាងរឹងមាំ ដើម្បីផ្លាស់ប្តូរទំហំ, ពណ៌, មុំបង្វិល ឬទីតាំងរបស់ Widget។

### Implicit Animations (ចលនាដោយប្រយោល)៖
ប្រភេទនេះងាយស្រួលបំផុត! Flutter ផ្តល់នូវ Widget គំរូស្រាប់ៗដែលមានពាក្យ "Animated" នៅពីមុខ (ដូចជា \`AnimatedContainer\`, \`AnimatedOpacity\`, \`AnimatedPositioned\`)។
នៅពេលអ្នកប្តូរតម្លៃទំហំ ឬពណ៌របស់វាក្នុង \`setState()\` នោះ Flutter នឹងធ្វើចលនារំកិលតម្លៃដោយស្វ័យប្រវត្តិតាមរយៈរយៈពេលដែលយើងបានកំណត់។

### សាកល្បងចលនា៖
ដំណើរការកូដខាងក្រោម រួចចុចប៊ូតុងលេង ដើម្បីមើល Container ផ្លាស់ប្តូររូបរាងយ៉ាងរលូន!`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(SmoothApp());

class SmoothApp extends StatefulWidget {
  @override
  _SmoothAppState createState() => _SmoothAppState();
}

class _SmoothAppState extends State<SmoothApp> {
  bool _expanded = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AnimatedContainer(
                duration: Duration(milliseconds: 600),
                curve: Curves.elasticOut,
                width: _expanded ? 250 : 150,
                height: _expanded ? 120 : 150,
                decoration: BoxDecoration(
                  color: _expanded ? Colors.indigo : Colors.orange,
                  borderRadius: _expanded ? BorderRadius.circular(40) : BorderRadius.circular(12),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black25,
                      blurRadius: 10,
                      offset: Offset(0, 5),
                    )
                  ]
                ),
                child: Center(
                  child: Text(
                    _expanded ? 'Expanded Rounded' : 'Square Box',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              SizedBox(height: 30),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    _expanded = !_expanded;
                  });
                },
                child: Text('Toggle Smooth Animation'),
              )
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-android-code",
        title: { en: "12. Flutter Writing Android-Specific Code", km: "១២. ការសរសេរកូដសម្រាប់ប្រព័ន្ធ Android" },
        content: {
          en: `# Flutter Writing Android-Specific Code
Sometimes, your application needs to talk directly to native Android API services (like Bluetooth hardware, custom device sensors, or unique background background libraries) that are not exposed directly in Dart.

> **Reference Guide:** Follow these steps to configure communication with Android native systems.

### Platform Channels Architecture
Flutter communicates with native platform modules using **Platform Channels**, which act as a message transmitter.

### How to Write Method Channel:
1. **Dart Code**: Setup the \`MethodChannel\` and request an action:
   \`\`\`dart
   static const channel = MethodChannel('sabaicode.dev/battery');
   final int result = await channel.invokeMethod('getBatteryLevel');
   \`\`\`
2. **Kotlin Code**: Open \`android/app/src/main/kotlin/.../MainActivity.kt\` and capture the call:
   \`\`\`kotlin
   import io.flutter.embedding.android.FlutterActivity
   import io.flutter.embedding.engine.FlutterEngine
   import io.flutter.plugin.common.MethodChannel

   class MainActivity: FlutterActivity() {
       private val CHANNEL = "sabaicode.dev/battery"

       override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
           super.configureFlutterEngine(flutterEngine)
           MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
               call, result ->
               if (call.method == "getBatteryLevel") {
                   result.success(95) // Return simulated battery percent
               } else {
                   result.notImplemented()
               }
           }
       }
   }
   \`\`\``,
          km: `# ការសរសេរកូដសម្រាប់ប្រព័ន្ធ Android ផ្ទាល់ខ្លួន
ជួនកាល កម្មវិធីរបស់អ្នកត្រូវការទំនាក់ទំនងផ្ទាល់ជាមួយសេវាកម្មកូដ Native របស់ Android (ដូចជាគ្រឿង Bluetooth, Sensor ពិសេសៗ ឬសេវាប្រព័ន្ធខាងក្នុង) ដែលមិនទាន់មានការគាំទ្រផ្ទាល់ពីភាសា Dart។

> **មគ្គុទ្ទេសក៍យោង៖** ស្វែងយល់ពីរបៀបភ្ជាប់ទំនាក់ទំនងជាមួយកូដ Native របស់ Android។

### យន្តការទំនាក់ទំនង Platform Channels
Flutter ប្រើប្រាស់ **Platform Channels** ដើម្បីផ្ញើសារសាកសួរ ឬបញ្ជាកូដ Native ទៅវិញទៅមក។

### របៀបសរសេរ Method Channel៖
១. **កូដ Dart**៖ កំណត់ឈ្មោះ Channel រួចផ្ញើសំណើ៖
   \`\`\`dart
   static const channel = MethodChannel('sabaicode.dev/battery');
   final int result = await channel.invokeMethod('getBatteryLevel');
   \`\`\`
២. **កូដ Kotlin**៖ បើកឯកសារ \`android/app/src/main/kotlin/.../MainActivity.kt\` រួចចាប់យកសារបញ្ជា៖
   \`\`\`kotlin
   import io.flutter.embedding.android.FlutterActivity
   import io.flutter.embedding.engine.FlutterEngine
   import io.flutter.plugin.common.MethodChannel

   class MainActivity: FlutterActivity() {
       private val CHANNEL = "sabaicode.dev/battery"

       override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
           super.configureFlutterEngine(flutterEngine)
           MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler {
               call, result ->
               if (call.method == "getBatteryLevel") {
                   result.success(95) // ផ្ញើភាគរយថ្មគំរូត្រឡប់ទៅវិញ
               } else {
                   result.notImplemented()
               }
           }
       }
   }
   \`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-ios-code",
        title: { en: "13. Flutter Writing iOS-Specific Code", km: "១៣. ការសរសេរកូដសម្រាប់ប្រព័ន្ធ iOS" },
        content: {
          en: `# Flutter Writing iOS-Specific Code
Similarly to Android, to interact with iOS native SDKs (like Apple HealthKit, CoreMotion, or local iOS keychain APIs), you must write Swift-specific channel handling.

> **Reference Guide:** Follow these steps to configure communication with iOS native Swift code.

### iOS Method Channel Implementation:
1. **Swift Code**: Open the Apple Xcode project and edit \`ios/Runner/AppDelegate.swift\`:
   \`\`\`swift
   import UIKit
   import Flutter

   @UIApplicationMain
   @objc class AppDelegate: FlutterAppDelegate {
     override func application(
       _ application: UIApplication,
       didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
     ) -> Bool {
       let controller : FlutterViewController = window?.rootViewController as! FlutterViewController
       let batteryChannel = FlutterMethodChannel(name: "sabaicode.dev/battery",
                                                 binaryMessenger: controller.binaryMessenger)
       
       batteryChannel.setMethodCallHandler({
         (call: FlutterMethodCall, result: @escaping FlutterResult) -> Void in
         if (call.method == "getBatteryLevel") {
           result(100) // iOS native response battery percent
         } else {
           result(FlutterMethodNotImplemented)
         }
       })

       GeneratedPluginRegistrant.register(with: self)
       return super.application(application, didFinishLaunchingWithOptions: launchOptions)
     }
   }
   \`\`\``,
          km: `# ការសរសេរកូដសម្រាប់ប្រព័ន្ធ iOS ផ្ទាល់ខ្លួន
ស្រដៀងគ្នាទៅនឹងប្រព័ន្ធ Android ដែរ ដើម្បីទាក់ទងជាមួយកញ្ចប់ iOS SDK (ដូចជា Apple HealthKit, CoreMotion ឬប្រព័ន្ធសន្តិសុខ Keychain របស់ iOS) អ្នកត្រូវសរសេរកូដ Swift សម្រាប់ចាប់សញ្ញាបញ្ជាពី Dart។

> **មគ្គុទ្ទេសក៍យោង៖** ស្វែងយល់ពីរបៀបភ្ជាប់ទំនាក់ទំនងជាមួយកូដ Swift លើ iOS។

### របៀបសរសេរ Method Channel លើ iOS៖
១. **កូដ Swift**៖ បើកគម្រោង Xcode រួចចូលទៅកែសម្រួលឯកសារ \`ios/Runner/AppDelegate.swift\`៖
   \`\`\`swift
   import UIKit
   import Flutter

   @UIApplicationMain
   @objc class AppDelegate: FlutterAppDelegate {
     override func application(
       _ application: UIApplication,
       didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
     ) -> Bool {
       let controller : FlutterViewController = window?.rootViewController as! FlutterViewController
       let batteryChannel = FlutterMethodChannel(name: "sabaicode.dev/battery",
                                                 binaryMessenger: controller.binaryMessenger)
       
       batteryChannel.setMethodCallHandler({
         (call: FlutterMethodCall, result: @escaping FlutterResult) -> Void in
         if (call.method == "getBatteryLevel") {
           result(100) // ផ្ញើតម្លៃកម្រិតថ្មទូរស័ព្ទត្រឡប់ទៅ Dart
         } else {
           result(FlutterMethodNotImplemented)
         }
       })

       GeneratedPluginRegistrant.register(with: self)
       return super.application(application, didFinishLaunchingWithOptions: launchOptions)
     }
   }
   \`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-packages-intro",
        title: { en: "14. Flutter Introduction to Packages", km: "១៤. សេចក្តីផ្តើមអំពី Packages" },
        content: {
          en: `# Flutter Introduction to Packages
You do not need to write everything from scratch. The Flutter community maintains thousands of open-source packages containing HTTP tools, state managers, custom sliders, and secure local databases.

> **Reference Guide:** Follow these steps to install and manage packages inside your local projects.

### How to install packages:
1. **Find Package**: Visit Google's official directory [pub.dev](https://pub.dev) and search for a package (e.g., \`http\`, \`shared_preferences\`, \`provider\`).
2. **Add to Configuration**: Open \`pubspec.yaml\` at the root of your project directory, and register the package under dependencies:
   \`\`\`yaml
   dependencies:
     flutter:
       sdk: flutter
     http: ^1.1.0 # Register external package
   \`\`\`
3. **Execute Get Command**: In your terminal run the following command to download:
   \`\`\`bash
   $ flutter pub get
   \`\`\``,
          km: `# សេចក្តីផ្តើមអំពី Packages
អ្នកមិនចាំបាច់សរសេរកូដគ្រប់យ៉ាងតាំងពីចំណុចសូន្យនោះទេ។ សហគមន៍អ្នកសរសេរ Flutter បានបង្កើត និងចែកចាយ Packages រាប់ម៉ឺន ដែលរួមមានឧបករណ៍ទំនាក់ទំនង HTTP, កម្មវិធីគ្រប់គ្រងទិន្នន័យ, Slider ស្អាតៗ និងប្រព័ន្ធផ្ទុកទិន្នន័យសុវត្ថិភាព។

> **មគ្គុទ្ទេសក៍យោង៖** របៀបដំឡើង និងគ្រប់គ្រង Packages នៅក្នុងគម្រោងរបស់អ្នក។

### របៀបដំឡើង Packages៖
១. **ស្វែងរក Package**៖ ចូលទៅកាន់គេហទំព័រ [pub.dev](https://pub.dev) រួចស្វែងរកឈ្មោះដែលចង់បាន (ឧទាហរណ៍៖ \`http\`, \`shared_preferences\`, \`provider\`)។
២. **បន្ថែមក្នុងឯកសារកំណត់**៖ បើកឯកសារ \`pubspec.yaml\` នៅថតធំចម្បងនៃគម្រោង រួចបន្ថែមឈ្មោះ package នៅក្រោមពាក្យ dependencies៖
   \`\`\`yaml
   dependencies:
     flutter:
       sdk: flutter
     http: ^1.1.0 # បន្ថែមបណ្ណាល័យកូដខាងក្រៅ
   \`\`\`
៣. **ទាញយកកញ្ចប់កូដ**៖ វាយពាក្យបញ្ជាខាងក្រោមនៅលើ terminal គម្រោងរបស់អ្នក៖
   \`\`\`bash
   $ flutter pub get
   \`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-rest-api",
        title: { en: "15. Flutter Accessing REST APIs", km: "១៥. ការទាញយកទិន្នន័យពី REST APIs" },
        content: {
          en: `# Flutter Accessing REST APIs
Most mobile apps connect to cloud database servers. We use the \`http\` package to query, insert, and delete data on backend REST APIs.

### The Network Cycle in Flutter
Because network operations can be slow, Flutter handles network requests asynchronously using Dart **Futures** (similar to Promises in JavaScript).

### JSON Parsing
Once a request returns successfully, we parse raw JSON strings into Dart Map/List objects using the \`jsonDecode()\` helper function.

### Try REST API Simulation:
The example below simulates fetching task items from a cloud REST API. Run this live below!`,
          km: `# ការទាញយកទិន្នន័យពី REST APIs
កម្មវិធីទូរស័ព្ទភាគច្រើនត្រូវភ្ជាប់ទំនាក់ទំនងជាមួយ Cloud Database។ យើងប្រើប្រាស់ package ឈ្មោះ \`http\` ដើម្បីសាកសួរ បញ្ចូល ឬលុបទិន្នន័យនៅលើម៉ាស៊ីនបម្រើ REST APIs។

### ដំណើរការបណ្តាញអ៊ីនធឺណិតក្នុង Flutter
ដោយសារការភ្ជាប់បណ្តាញត្រូវការពេលរង់ចាំ Flutter គ្រប់គ្រងសំណើទាំងនេះបែបអសមកាល (Asynchronously) ដោយប្រើប្រាស់ Dart **Futures** (ស្រដៀងគ្នាទៅនឹង Promises ក្នុង JavaScript)។

### ការបំលែងទិន្នន័យ JSON
នៅពេលដែលសំណើជោគជ័យ យើងបំលែងកូដអត្ថបទ JSON ទៅជាវត្ថុ Map/List របស់ Dart ដោយប្រើប្រាស់អនុគមន៍ \`jsonDecode()\`។

### សាកល្បងការផ្សារភ្ជាប់ API៖
ឧទាហរណ៍ខាងក្រោមសាកល្បងទាញយកកិច្ចការងារពី Cloud REST API គំរូ។ សាកល្បងដំណើរការវានៅខាងក្រោម!`
        },
        starterCode: `import 'dart:convert';
import 'package:flutter/material.dart';

void main() => runApp(ApiApp());

class ApiApp extends StatefulWidget {
  @override
  _ApiAppState createState() => _ApiAppState();
}

class _ApiAppState extends State<ApiApp> {
  String _taskTitle = "Press the button to download course data";
  bool _loading = false;

  void _getTaskData() {
    setState(() => _loading = true);
    
    // Simulating call delay to a REST API backend
    Future.delayed(Duration(seconds: 1), () {
      const responseBody = '{"id": 101, "course": "Flutter Certification", "status": "Active"}';
      final parsedMap = jsonDecode(responseBody);
      
      setState(() {
        _taskTitle = "Course ID: \${parsedMap['id']}\\nTitle: \${parsedMap['course']}\\nStatus: \${parsedMap['status']}";
        _loading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Sabaicode Web Request')),
        body: Center(
          child: Padding(
            padding: EdgeInsets.all(24.0),
            child: _loading 
              ? CircularProgressIndicator() 
              : Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: Colors.grey.shade100,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        _taskTitle,
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 16, fontStyle: FontStyle.italic),
                      ),
                    ),
                    SizedBox(height: 25),
                    ElevatedButton.icon(
                      onPressed: _getTaskData,
                      icon: Icon(Icons.cloud_download),
                      label: Text('Fetch Server Data'),
                    ),
                  ],
                ),
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-database",
        title: { en: "16. Flutter Database Concepts", km: "១៦. គោលគំនិតគ្រឹះមូលដ្ឋានទិន្នន័យ" },
        content: {
          en: `# Flutter Database Concepts
For offline capabilities, local data must be stored securely inside device databases. The most popular options in Flutter are **SQLite** (relational) and **Hive** (NoSQL key-value).

### Why use local database?
- **Offline Access**: Allow users to run the app without internet connection.
- **Cache network responses**: Cache API responses for instant loading.
- **Durable configurations**: Remember user themes and configurations permanently.

### Practice Database Simulation:
This lesson uses an in-memory database representation to teach inserting records and displaying lists on-screen dynamically.`,
          km: `# គោលគំនិតមូលដ្ឋានទិន្នន័យក្នុង Flutter
សម្រាប់ការសរសេរកម្មវិធីដែលអាចដំណើរការទោះបីជាគ្មានអ៊ីនធឺណិត (Offline) ទិន្នន័យត្រូវរក្សាទុកក្នុងទូរស័ព្ទ។ ជម្រើសពេញនិយមរួមមាន **SQLite** (Relational DB) និង **Hive** (NoSQL Key-value)។

### ហេតុអ្វីត្រូវប្រើប្រាស់ប្រព័ន្ធផ្ទុកទិន្នន័យក្នុងម៉ាស៊ីន?
- **ដំណើរការគ្មានបណ្តាញ**៖ អនុញ្ញាតឱ្យអ្នកប្រើបើកកម្មវិធីបាន ទោះគ្មានអ៊ីនធឺណិត។
- **រក្សាទុកទិន្នន័យបណ្តោះអាសន្ន**៖ រក្សាទុកកូដ API ដើម្បីឱ្យបើកកម្មវិធីបានលឿន។
- **ចងចាំការកំណត់**៖ ចងចាំស្បែកពណ៌ (Theme) ឬការកំណត់ផ្សេងៗជាអចិន្ត្រៃយ៍។

### សាកល្បងការគ្រប់គ្រង Database គំរូ៖
មេរៀននេះប្រើប្រាស់កូដគំរូនៃ database ក្នុងម៉ាស៊ីន ដើម្បីរៀនបញ្ចូលទិន្នន័យ និងបង្ហាញបញ្ជីឈ្មោះសិស្ស។`
        },
        starterCode: `import 'package:flutter/material.dart';

void main() => runApp(DatabaseDemo());

class DatabaseDemo extends StatefulWidget {
  @override
  _DatabaseDemoState createState() => _DatabaseDemoState();
}

class _DatabaseDemoState extends State<DatabaseDemo> {
  // Simulated local database table
  final List<Map<String, String>> _sqliteRecords = [
    {"id": "1", "title": "Setup Flutter SDK"},
    {"id": "2", "title": "Run flutter doctor"}
  ];

  final _titleController = TextEditingController();

  void _addLocalRecord() {
    if (_titleController.text.isNotEmpty) {
      setState(() {
        final newId = (_sqliteRecords.length + 1).toString();
        _sqliteRecords.add({
          "id": newId,
          "title": _titleController.text
        });
        _titleController.clear();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Offline Database SQLite Demo')),
        body: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: [
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _titleController,
                      decoration: InputDecoration(
                        labelText: 'New Task Title',
                        hintText: 'e.g. Learn State Management',
                      ),
                    ),
                  ),
                  IconButton(
                    icon: Icon(Icons.add_box, size: 40, color: Colors.indigo),
                    onPressed: _addLocalRecord,
                  )
                ],
              ),
              SizedBox(height: 20),
              Text('Database Records:', style: TextStyle(fontWeight: FontWeight.bold)),
              Expanded(
                child: ListView.builder(
                  itemCount: _sqliteRecords.length,
                  itemBuilder: (context, index) {
                    final item = _sqliteRecords[index];
                    return Card(
                      child: ListTile(
                        leading: CircleAvatar(child: Text(item['id']!)),
                        title: Text(item['title']!),
                      ),
                    );
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}`
      },
      {
        id: "flutter-i18n",
        title: { en: "17. Flutter Internationalization", km: "១៧. ការធ្វើអន្តរជាតូបនីយកម្ម (i18n)" },
        content: {
          en: `# Flutter Internationalization
To reach multiple audiences (e.g. English and Khmer), your app's text must dynamically adapt to the user's phone language.

> **Reference Guide:** Follow these steps to configure multi-language translation support inside your local projects.

### Step-by-Step Walkthrough:
1. **Add Dependencies**: Update \`pubspec.yaml\` with localization packages:
   \`\`\`yaml
   dependencies:
     flutter_localizations:
       sdk: flutter
     intl: ^0.18.0
   \`\`\`
2. **Setup arb Files**: Create translation keys in \`lib/l10n/app_en.arb\`:
   \`\`\`json
   {
     "helloWorld": "Hello World!"
   }
   \`\`\`
   And for Khmer in \`lib/l10n/app_km.arb\`:
   \`\`\`json
   {
     "helloWorld": "សួស្តីពិភពលោក!"
   }
   \`\`\`
3. **Usage in Code**: Load translated text based on context:
   \`\`\`dart
   Text(AppLocalizations.of(context)!.helloWorld)
   \`\`\``,
          km: `# ការធ្វើអន្តរជាតូបនីយកម្ម (i18n) ក្នុង Flutter
ដើម្បីឱ្យកម្មវិធីអាចគាំទ្រច្រើនភាសា (ដូចជា ភាសាខ្មែរ និងអង់គ្លេស) អត្ថបទទាំងអស់ក្នុងកម្មវិធីត្រូវតែផ្លាស់ប្តូរទៅតាមភាសាកំណត់របស់ទូរស័ព្ទដៃដោយស្វ័យប្រវត្តិ។

> **មគ្គុទ្ទេសក៍យោង៖** ស្វែងយល់ពីរបៀបកំណត់ឱ្យកម្មវិធីគាំទ្រច្រើនភាសា។

### ជំហានអនុវត្តសំខាន់ៗ៖
១. **បន្ថែម Dependencies**៖ បើក \`pubspec.yaml\` រួចបន្ថែមបណ្ណាល័យគាំទ្រ៖
   \`\`\`yaml
   dependencies:
     flutter_localizations:
       sdk: flutter
     intl: ^0.18.0
   \`\`\`
២. **បង្កើតឯកសារ arb**៖ បង្កើតឯកសារបកប្រែពាក្យក្នុង \`lib/l10n/app_en.arb\`៖
   \`\`\`json
   {
     "helloWorld": "Hello World!"
   }
   \`\`\`
   និងសម្រាប់ភាសាខ្មែរក្នុង \`lib/l10n/app_km.arb\`៖
   \`\`\`json
   {
     "helloWorld": "សួស្តីពិភពលោក!"
   }
   \`\`\`
៣. **ការប្រើប្រាស់ក្នុងកូដ**៖ ហៅពាក្យមកបង្ហាញតាមភាសាសកម្ម៖
   \`\`\`dart
   Text(AppLocalizations.of(context)!.helloWorld)
   \`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-testing",
        title: { en: "18. Flutter Testing", km: "១៨. ការធ្វើតេស្តកម្មវិធី Flutter" },
        content: {
          en: `# Flutter Testing
Flutter has support for automated testing to ensure your application runs correctly before sending it to real users.

### The Three Testing Types:
1. **Unit Tests**: Verifies a single function, method, or class behavior without loading external visual resources.
2. **Widget Tests**: Isolates a single widget and tests its interactive clicks, text input, and layout states.
3. **Integration Tests**: Tests the entire application workflow end-to-end, simulating realistic device runs.

### Example Unit Test Code:
\`\`\`dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Counter increments value correctly', () {
    final counter = Counter();
    counter.increment();
    expect(counter.value, 1);
  });
}
\`\`\``,
          km: `# ការធ្វើតេស្តកម្មវិធី Flutter
Flutter ផ្តល់នូវប្រព័ន្ធធ្វើតេស្តស្វ័យប្រវត្តិយ៉ាងល្អប្រសើរ ដើម្បីធានាថាកម្មវិធីដំណើរការបានត្រឹមត្រូវ និងគ្មានកំហុស មុននឹងបញ្ជូនទៅកាន់អ្នកប្រើប្រាស់ពិតប្រាកដ។

### ប្រភេទតេស្តទាំង៣ របស់ Flutter៖
១. **Unit Tests**៖ ធ្វើតេស្តលើអនុគមន៍ ឬ Class នីមួយៗដាច់ដោយឡែកពីគ្នា ដើម្បីពិនិត្យលទ្ធផលគណនា។
២. **Widget Tests**៖ បង្កើត Widget គំរូសាកល្បង ដើម្បីតេស្តសញ្ញាចុច បញ្ចូលអក្សរ ឬការផ្លាស់ប្តូររូបរាង។
៣. **Integration Tests**៖ ធ្វើតេស្តដំណើរការកម្មវិធីទាំងមូលតាំងពីដើមដល់ចប់ ដោយដំណើរការគំរូនៅលើទូរស័ព្ទពិត។

### ឧទាហរណ៍កូដ Unit Test គំរូ៖
\`\`\`dart
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('Counter increments value correctly', () {
    final counter = Counter();
    counter.increment();
    expect(counter.value, 1);
  });
}
\`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-deployment",
        title: { en: "19. Flutter Deployment", km: "១៩. ការដាក់ឱ្យដំណើរការកម្មវិធី (Deployment)" },
        content: {
          en: `# Flutter Deployment Guide
Once your Flutter application is built, you must compile production release packages and submit them to app stores.

> **Reference Guide:** Follow these steps to pack your apps for App Store releases.

### Compile Android Package (.aab)
1. Setup a secure sign key (**keystore**) inside \`android/key.properties\`.
2. Run the compiler command to generate an Android App Bundle:
   \`\`\`bash
   $ flutter build appbundle
   \`\`\`
3. Locate the build outcome inside \`build/app/outputs/bundle/release/app-release.aab\`. Upload this to Google Play Console.

### Compile iOS Package (.ipa)
1. Register for an Apple Developer Account and setup Provisioning Profiles in Apple App Store Connect.
2. Compile and archive using command-line:
   \`\`\`bash
   $ flutter build ipa --export-method=app-store
   \`\`\`
3. Open Xcode workspace \`ios/Runner.xcworkspace\` to sign packages and submit directly to TestFlight!`,
          km: `# មគ្គុទ្ទេសក៍ការដាក់ដំណើរការកម្មវិធី (Deployment)
នៅពេលដែលកម្មវិធីរបស់អ្នករួចរាល់ អ្នកត្រូវបំលែងវាទៅជាកញ្ចប់ឯកសារផលិតផលផ្លូវការ (Release Bundle) ដើម្បីដាក់លក់លើ App Store។

> **មគ្គុទ្ទេសក៍យោង៖** ស្វែងយល់ពីរបៀបវេចខ្ចប់កម្មវិធីសម្រាប់ដាក់លក់។

### វេចខ្ចប់សម្រាប់ប្រព័ន្ធ Android (.aab)៖
១. កំណត់សោសុវត្ថិភាពសរសេរកូដ (**keystore**) នៅក្នុងឯកសារ \`android/key.properties\`។
២. វាយបញ្ជាបំលែងកូដដើម្បីទទួលបានកញ្ចប់ App Bundle៖
   \`\`\`bash
   $ flutter build appbundle
   \`\`\`
៣. ស្វែងរកឯកសារលទ្ធផលនៅក្នុងថត \`build/app/outputs/bundle/release/app-release.aab\` ដើម្បីយកទៅបង្ហោះលើ Google Play Console។

### វេចខ្ចប់សម្រាប់ប្រព័ន្ធ iOS (.ipa)៖
១. បង្កើតគណនី Apple Developer រួចកំណត់ទម្រង់សុវត្ថិភាពនៅក្នុង Apple App Store Connect។
២. វាយបញ្ជាបំលែងកូដនៅលើ macOS terminal៖
   \`\`\`bash
   $ flutter build ipa --export-method=app-store
   \`\`\`
៣. បើកកម្មវិធី Xcode លើឯកសារ \`ios/Runner.xcworkspace\` ដើម្បីត្រួតពិនិត្យ និងបញ្ជូនទៅកាន់ TestFlight!`
        },
        starterCode: ""
      },
      {
        id: "flutter-dev-tools",
        title: { en: "20. Flutter Development Tools", km: "២០. ឧបករណ៍អភិវឌ្ឍន៍ (DevTools)" },
        content: {
          en: `# Flutter Development Tools
Google provides **Flutter DevTools**, a web-based suite of performance profiling and debugging tools for developers.

> **Reference Guide:** Learn to debug app responsiveness, identify rendering jank, and inspect visual properties.

### Key Tools Explained:
1. **Flutter Inspector**: Inspect the nested widget tree layout, see precise sizes, and tweak alignments live.
2. **Performance View**: Inspect rendering charts and CPU logs. Identify which frame takes longer than 16ms to render (causing visual stutter or jank).
3. **Memory View**: Detect memory leaks and inspect which classes take up physical RAM.
4. **Network View**: Capture all outbound HTTP REST requests and inspect response payload details.`,
          km: `# ឧបករណ៍ជំនួយការសរសេរកូដ (Flutter DevTools)
ក្រុមហ៊ុន Google ផ្តល់ជូននូវ **Flutter DevTools** ដែលជាកញ្ចប់ឧបករណ៍វិភាគល្បឿន និងស្វែងរកកំហុសកូដនៅលើកម្មវិធីរុករក (Web-based suite)។

> **មគ្គុទ្ទេសក៍យោង៖** រៀនស្វែងរកកំហុសកូដ វិភាគភាពយឺតយ៉ាវ និងពិនិត្យទិន្នន័យ UI។

### ឧបករណ៍សំខាន់ៗរួមមាន៖
១. **Flutter Inspector**៖ ប្រើសម្រាប់ពិនិត្យមើលដើមឈើ Widget Tree, មើលទំហំពិតប្រាកដ និងកែតម្រូវប្លង់សាកល្បងភ្លាមៗ។
២. **Performance View**៖ ពិនិត្យក្រាហ្វដំណើរការម៉ាស៊ីន និង CPU។ ស្វែងរកអេក្រង់ដែលទាញយកកូដលើសពី ១៦មីលីវិនាទី (បង្កឱ្យរូបភាពដើរទាក់ៗ)។
៣. **Memory View**៖ ស្វែងរកបញ្ហាលេចធ្លាយមេម៉ូរី (Memory Leaks) និងពិនិត្យមើលទិន្នន័យដែលស៊ី RAM។
៤. **Network View**៖ ចាប់យករាល់សំណើ HTTP REST ផ្ញើចេញក្រៅ ដើម្បីពិនិត្យមើលព័ត៌មានដែលទទួលបានពី server។`
        },
        starterCode: ""
      },
      {
        id: "flutter-advanced",
        title: { en: "21. Flutter Writing Advanced Applications", km: "២១. ការសរសេរកម្មវិធីកម្រិតខ្ពស់" },
        content: {
          en: `# Flutter Writing Advanced Applications
For complex projects, you must master multi-threading, custom painters, and complex route transitions.

> **Reference Guide:** Overview of advanced concepts.

### 1. Isolates (Multi-threading)
In Dart, code runs inside a single-thread container (an Isolate). To perform heavy calculations (like processing photos or parsing massive JSON arrays) without causing the UI to freeze, you must spawn background **Isolates**:
\`\`\`dart
final parsedJson = await Isolate.run(() => parseLargeJson(rawString));
\`\`\`

### 2. CustomPainter
When standard widgets are insufficient, draw custom vector shapes, charts, and drawings directly on screen using graphics coordinates:
\`\`\`dart
class MyCustomPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = Colors.indigo;
    canvas.drawCircle(Offset(size.width / 2, size.height / 2), 40, paint);
  }
}
\`\`\``,
          km: `# ការសរសេរកម្មវិធីកម្រិតខ្ពស់ជាមួយ Flutter
សម្រាប់កម្មវិធីធំៗ និងស្មុគស្មាញ អ្នកត្រូវយល់ដឹងពីការបែងចែកការងារម៉ាស៊ីន, ការគូររូបក្រាហ្វិកដោយខ្លួនឯង និងប្រព័ន្ធផ្លាស់ប្តូរអេក្រង់លំដាប់ខ្ពស់។

> **មគ្គុទ្ទេសក៍យោង៖** គោលគំនិតលំដាប់ខ្ពស់ក្នុងកម្មវិធីពិត។

### ១. Isolates (ការរត់កូដលើ Thread ផ្សេងទៀត)៖
កូដ Dart ដំណើរការលើ Thread តែមួយ (ហៅថា Isolate)។ ដើម្បីគណនាទិន្នន័យធំៗ (ដូចជា បំលែងរូបថត ឬទាញយកទិន្នន័យ JSON យក្ស) ដោយមិនធ្វើឱ្យគាំងអេក្រង់ យើងត្រូវបញ្ជាឱ្យកូដរត់លើ Isolate ថ្មីមួយទៀត៖
\`\`\`dart
final parsedJson = await Isolate.run(() => parseLargeJson(rawString));
\`\`\`

### ២. CustomPainter (ការគូររូបភាពសេរី)៖
នៅពេលដែល Widgets ធម្មតាមិនអាចឆ្លើយតបតម្រូវការបាន អ្នកអាចគូររូបភាព ក្រាហ្វ ឬវ៉ិចទ័រដោយផ្ទាល់នៅលើអេក្រង់ដោយបញ្ជាក់កូអរដោនេ៖
\`\`\`dart
class MyCustomPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = Colors.indigo;
    canvas.drawCircle(Offset(size.width / 2, size.height / 2), 40, paint);
  }
}
\`\`\``
        },
        starterCode: ""
      },
      {
        id: "flutter-conclusion",
        title: { en: "22. Flutter Conclusion", km: "២២. សេចក្តីសន្និដ្ឋានអំពី Flutter" },
        content: {
          en: `# Flutter Course Conclusion
Congratulations! You have completed the comprehensive Flutter and Dart programming curriculum!

### What you have learned:
1. Dart core programming concepts.
2. Designing responsive, modern, Material layouts.
3. Managing state dynamically using Stateful widgets.
4. Accessing remote HTTP REST API cloud servers.
5. Packaging applications for Play Store and iOS App Store releases.

### Next Steps:
Put your knowledge to the test by taking the **Course Quiz** and trying the **Mini Project**. Once completed, unlock your official Sabaicode bilingual certification!`,
          km: `# សេចក្តីសន្និដ្ឋាននៃវគ្គសិក្សា Flutter
អបអរសាទរ! អ្នកបានបញ្ចប់កម្មវិធីសិក្សា និងការស្វែងយល់លម្អិតអំពីប្រព័ន្ធ Flutter និង Dart ហើយ!

### សង្ខេបអ្វីដែលអ្នកបានរៀន៖
១. មូលដ្ឋានគ្រឹះ និងរចនាសម្ព័ន្ធភាសា Dart។
២. ការរចនាប្លង់ UI (Responsive Layouts) ស្របតាមទូរស័ព្ទដៃគ្រប់ប្រភេទ។
៣. ការគ្រប់គ្រងទិន្នន័យ និងផ្លាស់ប្តូរផ្ទៃបង្ហាញដោយប្រើ Stateful Widgets។
៤. ការភ្ជាប់ និងទាញយកទិន្នន័យពី Cloud REST APIs។
៥. ជំហានវេចខ្ចប់កម្មវិធីដើម្បីបង្ហោះលើ Google Play Store និង iOS App Store។

### ជំហានបន្ទាប់៖
សាកល្បងសមត្ថភាពរបស់អ្នកដោយចូលរួម **ធ្វើតេស្ត Quiz** និងរចនា **គម្រោងខ្នាតតូច**។ នៅពេលរួចរាល់ អ្នកអាចទាញយកវិញ្ញាបនបត្រទ្វិភាសាចេញពីប្រព័ន្ធ Sabaicode ភ្លាមៗ!`
        },
        starterCode: ""
      }
    ]
  },
  {
    id: "useful-resources",
    title: { en: "Flutter Useful Resources", km: "ធនធានមានប្រយោជន៍ Flutter" },
    lessons: [
      {
        id: "flutter-quick-guide",
        title: { en: "23. Flutter Quick Guide", km: "២៣. សេចក្តីណែនាំរហ័ស Flutter" },
        content: {
          en: `# Flutter Quick Guide
This guide outlines quick commands and standard widget definitions for rapid development reference.

> **Reference Guide — follow these steps on your own machine**

### Fast CLI Cheat Sheet:
- Create new app project:
  \`\`\`bash
  $ flutter create my_app
  \`\`\`
- Check setup dependencies issues:
  \`\`\`bash
  $ flutter doctor
  \`\`\`
- Install external dependencies package:
  \`\`\`bash
  $ flutter pub get
  \`\`\`
- Launch app in release compilation mode:
  \`\`\`bash
  $ flutter run --release
  \`\`\`

### Common Shortcuts (VS Code & Android Studio):
- Trigger manual Hot Reload: Press \`r\` in the terminal.
- Trigger Hot Restart: Press \`R\` (Shift+r) in the terminal.
- Show code fixes recommendations: \`Alt + Enter\` (Windows) or \`Option + Return\` (Mac).`,
          km: `# សេចក្តីណែនាំរហ័ស Flutter
ឯកសារនេះសង្ខេបនូវរាល់ពាក្យបញ្ជា CLI សំខាន់ៗ និងគន្លឹះរហ័សសម្រាប់ជំនួយដល់ការសរសេរកូដប្រចាំថ្ងៃ។

> **មគ្គុទ្ទេសក៍យោង៖ សូមប្រើប្រាស់ពាក្យបញ្ជាទាំងនេះនៅលើកុំព្យូទ័ររបស់អ្នកផ្ទាល់។**

### បញ្ជីពាក្យបញ្ជា CLI សំខាន់ៗ៖
- បង្កើតគម្រោងកម្មវិធីថ្មី៖
  \`\`\`bash
  $ flutter create my_app
  \`\`\`
- ពិនិត្យសុខភាពប្រព័ន្ធដំឡើង៖
  \`\`\`bash
  $ flutter doctor
  \`\`\`
- ទាញយកកញ្ចប់កូដគាំទ្រខាងក្រៅ៖
  \`\`\`bash
  $ flutter pub get
  \`\`\`
- ដំណើរការកម្មវិធីក្នុងល្បឿនលឿនផ្លូវការ៖
  \`\`\`bash
  $ flutter run --release
  \`\`\`

### គន្លឹះផ្លូវកាត់លើកម្មវិធីសរសេរកូដ (VS Code / Android Studio)៖
- បញ្ជាដំណើរការ Hot Reload ភ្លាមៗ៖ វាយអក្សរ \`r\` លើ terminal។
- បញ្ជាដំណើរការ Hot Restart (ចាប់ផ្តើមជាថ្មី)៖ វាយអក្សរ \`R\` (Shift+r) លើ terminal។
- បង្ហាញការណែនាំកែកូដស្វ័យប្រវត្ត៖ ចុច \`Alt + Enter\` (Windows) ឬ \`Option + Return\` (Mac)។`
        },
        starterCode: ""
      },
      {
        id: "flutter-resources",
        title: { en: "24. Flutter Useful Resources", km: "២៤. ប្រភពធនធានមានប្រយោជន៍" },
        content: {
          en: `# Flutter Useful Resources
Boost your Flutter skills using these valuable learning platforms, packages, and developer channels.

### Official Learning Links:
- **Official Documentation**: [docs.flutter.dev](https://docs.flutter.dev) — Highly detailed guides, widget classes definitions, and videos.
- **DartPad Web Playground**: [dartpad.dev](https://dartpad.dev) — Write and run Dart/Flutter snippets without installation.

### Must-Have Packages (pub.dev):
1. **http**: Simple API requests helper.
2. **shared_preferences**: Persistent offline key-value pairs storage.
3. **provider** / **flutter_bloc**: State management solutions.
4. **google_fonts**: Load hundreds of premium typography fonts instantly in Dart code.`,
          km: `# ប្រភពធនធានសិក្សាមានប្រយោជន៍ Flutter
ពង្រីកចំណេះដឹងផ្នែក Flutter របស់អ្នកបន្ថែមទៀតតាមរយៈបណ្តាញសិក្សា គេហទំព័រ និងបណ្ណាល័យកូដលំដាប់កំពូល។

### គេហទំព័រផ្លូវការចម្បង៖
- **ឯកសារណែនាំផ្លូវការ**៖ [docs.flutter.dev](https://docs.flutter.dev) — ផ្ទុកទៅដោយការណែនាំលម្អិត, វីដេអូ និងការពិពណ៌នាពី Widgets ទាំងអស់។
- **DartPad សម្រាប់សាកល្បង**៖ [dartpad.dev](https://dartpad.dev) — សរសេរ និងសាកល្បងដំណើរការកូដ Dart/Flutter ដោយពុំចាំបាច់ដំឡើងអ្វីឡើយ។

### Packages សំខាន់ៗដែលគួរដំឡើង (pub.dev)៖
១. **http**៖ ជំនួយដល់ការទាញយកទិន្នន័យពី Server។
២. **shared_preferences**៖ រក្សាទុកការកំណត់តូចៗក្នុងទូរស័ព្ទបានអចិន្ត្រៃយ៍។
៣. **provider** / **flutter_bloc**៖ ប្រព័ន្ធគ្រប់គ្រង State កម្រិតសកល។
៤. **google_fonts**៖ បញ្ចូលហ្វុងអក្សរស្អាតៗរាប់ពាន់របស់ Google ក្នុងកូដ Dart ភ្លាមៗ។`
        },
        starterCode: ""
      },
      {
        id: "flutter-discussion",
        title: { en: "25. Flutter Discussion", km: "២៥. ការពិភាក្សាអំពី Flutter" },
        content: {
          en: `# Flutter Discussion Forum
Share ideas, ask questions, and collaborate with other Sabaicode students studying Flutter app development.

### How to Ask Good Technical Questions:
1. **Share Error Logs**: Paste the exact crash message from your debugger or terminal.
2. **Provide Code Snippet**: Isolate the failing widget and share the file code.
3. **Explain Expected Outcome**: Write what you want the code to do, versus what it is actually doing.

### Join Cambodia Flutter Community:
- Ask questions in our local student chat groups.
- Participate in monthly app design challenges! Let's build amazing mobile apps together.`,
          km: `# វេទិកាពិភាក្សាអំពី Flutter
ចែករំលែកគំនិត, សួរសំណួរ និងសហការជាមួយសិស្សនិស្សិតដទៃទៀតដែលកំពុងសិក្សាអភិវឌ្ឍន៍កម្មវិធីជាមួយ Flutter នៅលើ Sabaicode។

### របៀបសួរសំណួរបច្ចេកទេសឱ្យទទួលបានចម្លើយលឿន៖
១. **បញ្ជាក់កូដកំហុស (Error Logs)**៖ ចម្លងអត្ថបទកំហុសចេញពី debugger ឬ terminal ឱ្យបានច្បាស់លាស់។
២. **ចែករំលែកកូដគំរូ**៖ ស្រង់យកតែផ្នែកកូដ Widget ដែលកំពុងមានបញ្ហា ដើម្បីកុំឱ្យស្មុគស្មាញ។
៣. **បញ្ជាក់ពីលទ្ធផលចង់បាន**៖ រៀបរាប់ពីអ្វីដែលអ្នកចង់ឱ្យកូដដំណើរការ និងអ្វីដែលវាកំពុងជួបប្រទះពិតប្រាកដ។

### ចូលរួមសហគមន៍អ្នកសរសេរ Flutter ក្នុងស្រុក៖
- សួរសំណួរនៅក្នុងក្រុមជជែកកម្សាន្តរបស់សិស្ស Sabaicode។
- ចូលរួមប្រកួតប្រជែងរចនាកម្មវិធីប្រចាំខែ! មកចូលរួមបង្កើតកម្មវិធីទូរស័ព្ទដ៏អស្ចារ្យទាំងអស់គ្នា!`
        },
        starterCode: ""
      }
    ]
  }
];

export const flutterReferences: ReferenceItem[] = [
  { id: "fr-container", syntax: "Container()", desc: { en: "A convenience widget that combines common painting, positioning, and sizing.", km: "Widget សម្រាប់កំណត់ទំហំ, ពណ៌, ជ្រុងមូល និងគម្លាត Padding/Margin ជុំវិញ Widget ផ្សេងទៀត។" }, example: "Container(width: 100, height: 100, color: Colors.blue)" },
  { id: "fr-text", syntax: "Text()", desc: { en: "A run of text with a single style.", km: "Widget សម្រាប់បង្ហាញអក្សរនៅលើអេក្រង់ និងកំណត់ទម្រង់ហ្វុងអក្សរ។" }, example: "Text('Hello', style: TextStyle(fontSize: 20))" },
  { id: "fr-column", syntax: "Column()", desc: { en: "A widget that displays its children in a vertical array.", km: "Widget សម្រាប់រៀបចំ Widget កូនៗតម្រៀបជាជួរឈរពីលើចុះក្រោម។" }, example: "Column(children: [Text('A'), Text('B')])" },
  { id: "fr-row", syntax: "Row()", desc: { en: "A widget that displays its children in a horizontal array.", km: "Widget សម្រាប់រៀបចំ Widget កូនៗតម្រៀបជាជួរដេកពីឆ្វេងទៅស្តាំ។" }, example: "Row(children: [Text('Left'), Text('Right')])" },
  { id: "fr-listview", syntax: "ListView.builder()", desc: { en: "A scrollable list of widgets that are created on demand.", km: "Widget បញ្ជីរំកិលចុះឡើងសម្រាប់បង្ហាញទិន្នន័យច្រើនៗប្រកបដោយប្រសិទ្ធភាព។" }, example: "ListView.builder(itemCount: 10, itemBuilder: (context, i) => Text('Row $i'))" }
];

export const flutterQuizzes: Quiz[] = [
  {
    id: "flutter-q1",
    question: { en: "Who developed Flutter and Dart?", km: "តើក្រុមហ៊ុនណាជាអ្នកអភិវឌ្ឍ Flutter និង Dart?" },
    options: {
      en: ["Apple", "Facebook (Meta)", "Microsoft", "Google"],
      km: ["Apple", "Facebook (Meta)", "Microsoft", "Google"]
    },
    correctIndex: 3,
    explanation: {
      en: "Flutter and Dart are created and maintained as open-source technologies by Google.",
      km: "Flutter និង Dart ត្រូវបានបង្កើតឡើង និងគាំទ្រជាបច្ចេកវិទ្យាកូដចំហរដោយក្រុមហ៊ុន Google។"
    }
  },
  {
    id: "flutter-q2",
    question: { en: "Which tool should you run to verify Flutter's installation dependencies status?", km: "តើអ្នកគួរវាយពាក្យបញ្ជាណាដើម្បីពិនិត្យស្ថានភាពការដំឡើងរបស់ Flutter?" },
    options: {
      en: ["flutter run", "flutter doctor", "flutter install", "flutter check"],
      km: ["flutter run", "flutter doctor", "flutter install", "flutter check"]
    },
    correctIndex: 1,
    explanation: {
      en: "'flutter doctor' inspects local developer components and prints missing configuration tasks.",
      km: "'flutter doctor' ត្រួតពិនិត្យគ្រឿងបង្គុំផ្សេងៗលើកុំព្យូទ័រ និងបង្ហាញការងារដំឡើងដែលនៅសេសសល់។"
    }
  },
  {
    id: "flutter-q3",
    question: { en: "In Flutter, what are the primary types of widgets?", km: "នៅក្នុង Flutter តើប្រភេទ Widget ចម្បងមានអ្វីខ្លះ?" },
    options: {
      en: ["StatefulWidget and StatelessWidget", "DynamicWidget and StaticWidget", "VisualWidget and LogicalWidget", "ClientWidget and ServerWidget"],
      km: ["StatefulWidget and StatelessWidget", "DynamicWidget and StaticWidget", "VisualWidget and LogicalWidget", "ClientWidget and ServerWidget"]
    },
    correctIndex: 0,
    explanation: {
      en: "StatefulWidget and StatelessWidget are the foundational building blocks of Flutter UIs.",
      km: "StatefulWidget និង StatelessWidget គឺជាគ្រឹះចម្បងសម្រាប់រចនាកូដ UI របស់ Flutter។"
    }
  },
  {
    id: "flutter-q4",
    question: { en: "What method MUST be called to update a StatefulWidget's layout with new values?", km: "តើអនុគមន៍ណាដែលត្រូវហៅដើម្បីធ្វើបច្ចុប្បន្នភាពទិន្នន័យលើ StatefulWidget?" },
    options: {
      en: ["refresh()", "rebuild()", "setState()", "updateState()"],
      km: ["refresh()", "rebuild()", "setState()", "updateState()"]
    },
    correctIndex: 2,
    explanation: {
      en: "Calling 'setState()' tells Flutter to rebuild the widget tree with modified state data.",
      km: "ការហៅ 'setState()' បញ្ជាឱ្យ Flutter សង់អេក្រង់ឡើងវិញជាមួយនឹងតម្លៃទិន្នន័យដែលបានផ្លាស់ប្តូរ។"
    }
  },
  {
    id: "flutter-q5",
    question: { en: "Which package is commonly used in Flutter to perform REST API requests?", km: "តើ package ណាដែលពេញនិយមប្រើសម្រាប់ទំនាក់ទំនង REST API?" },
    options: {
      en: ["flutter_api", "http", "axios_flutter", "json_request"],
      km: ["flutter_api", "http", "axios_flutter", "json_request"]
    },
    correctIndex: 1,
    explanation: {
      en: "The standard community-backed package is 'http' located on pub.dev.",
      km: "កញ្ចប់កូដស្តង់ដារសហគមន៍គាំទ្រគឺ 'http' ដែលមាននៅលើគេហទំព័រ pub.dev។"
    }
  }
];

export const flutterMiniProjects: MiniProject[] = [
  {
    id: "flutter-project-tracker",
    title: { en: "Simple Habit Tracker", km: "កម្មវិធីតាមដានទម្លាប់ល្អៗ" },
    desc: {
      en: "Build a single-screen Flutter application that tracks daily habits (e.g. Reading, Exercise). Users should be able to check task items to increment a completed state counter, and add new habits via an interactive form field.",
      km: "បង្កើតកម្មវិធីទូរស័ព្ទអេក្រង់តែមួយសម្រាប់តាមដានទម្លាប់ប្រចាំថ្ងៃ (ឧទាហរណ៍៖ អានសៀវភៅ, ហាត់ប្រាណ)។ អ្នកប្រើប្រាស់អាចចុចសញ្ញាធីកលើកិច្ចការដើម្បីបន្ថែមចំនួនលេខរាប់ និងអាចបន្ថែមទម្លាប់ថ្មីតាមរយៈទម្រង់បញ្ចូលអត្ថបទ។"
    },
    starterCode: `import 'package:flutter/material.dart';

void main() => runApp(HabitTrackerApp());

class HabitTrackerApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: Text('Sabaicode Habit Tracker')),
        body: Center(child: Text('Complete your implementation!')),
      ),
    );
  }
}`,
    solutionCode: `import 'package:flutter/material.dart';

void main() => runApp(HabitTrackerApp());

class HabitTrackerApp extends StatefulWidget {
  @override
  _HabitTrackerAppState createState() => _HabitTrackerAppState();
}

class _HabitTrackerAppState extends State<HabitTrackerApp> {
  final List<String> _habits = ["Read Book for 15m", "Physical Exercise 20m"];
  int _completedCount = 0;
  final _inputController = TextEditingController();

  void _addHabit() {
    if (_inputController.text.isNotEmpty) {
      setState(() {
        _habits.add(_inputController.text);
        _inputController.clear();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text('Sabaicode Habit Tracker'),
          backgroundColor: Colors.indigo,
        ),
        body: Padding(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: [
              // Statistics Box
              Container(
                width: double.infinity,
                padding: EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: Colors.indigo.shade50,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Column(
                  children: [
                    Text('Completed Habits Count', style: TextStyle(color: Colors.indigo)),
                    Text(
                      '$_completedCount',
                      style: TextStyle(fontSize: 48, fontWeight: FontWeight.black, color: Colors.indigo),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 20),
              // Input fields form
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _inputController,
                      decoration: InputDecoration(
                        labelText: 'Enter new daily habit...',
                        border: OutlineInputBorder(),
                      ),
                    ),
                  ),
                  SizedBox(width: 10),
                  ElevatedButton(
                    onPressed: _addHabit,
                    child: Text('Add'),
                    style: ElevatedButton.styleFrom(backgroundColor: Colors.indigo, foregroundColor: Colors.white),
                  )
                ],
              ),
              SizedBox(height: 20),
              // Dynamic Habit items list
              Expanded(
                child: ListView.builder(
                  itemCount: _habits.length,
                  itemBuilder: (context, index) {
                    return Card(
                      child: ListTile(
                        leading: Icon(Icons.star, color: Colors.amber),
                        title: Text(_habits[index]),
                        trailing: IconButton(
                          icon: Icon(Icons.check, color: Colors.green),
                          onPressed: () {
                            setState(() {
                              _completedCount++;
                            });
                          },
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`
  }
];
