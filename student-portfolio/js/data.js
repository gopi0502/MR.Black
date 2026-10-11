/**
 * Portfolio Data Configuration
 * Gopikrishna - 10th Grade Graduate, C++, Web Design & Creative Arts
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Gopikrishna",
    preferredName: "Gopi",
    role: "10th Grade Graduate · Aspiring Programmer & Creative Technologist",
    shortTagline: "Recent 10th-grade graduate with 85.4% honors, exploring C++ logic, modern responsive web design, and creative digital arts.",
    longBio: "I recently completed my 10th-grade education at Vidyaniketan Matric Higher Secondary School with 85.4% honors and distinctions in Mathematics and Science. Driven by a deep curiosity for how software functions and looks, I spend my time programming algorithms in C++, designing modern frosted-glass web interfaces, and sketching UI prototypes in Figma as I prepare for higher secondary STEM studies.",
    education: {
      status: "10th Grade Completed (Secondary School Certificate)",
      school: "Vidyaniketan Matric Higher Secondary School",
      academicYear: "Class of 2026",
      score: "85.4% Aggregate (High Honors)",
      distinctions: "Distinction in Mathematics & Science",
      nextStep: "Enrolling in Grade 11 (STEM: Physics, Chemistry, Math & Computer Science)"
    },
    location: "Open to Student Hackathons & Collaborative Remote Learning",
    badge: {
      text: "🎓 10th Grade Completed · 85.4% Honors",
      status: "Active Student & Creator"
    },
    socials: {
      github: "https://github.com/gopi0502",
      linkedin: "https://linkedin.com",
      codepen: "https://codepen.io",
      figma: "https://figma.com",
      discord: "https://discord.com",
      email: "gopi736736@gmail.com",
      resume: "#contact"
    }
  },

  // Key Metrics
  stats: [
    { label: "10th Grade Board", value: "85.4%", subtext: "Vidyaniketan High Honors", icon: "graduation-cap" },
    { label: "Projects & Prototypes", value: "8+", subtext: "C++, Web & Creative Arts", icon: "folder-git-2" },
    { label: "Core Tech Learning", value: "4+", subtext: "C++, HTML/CSS, JS, Python", icon: "code-2" },
    { label: "School Awards", value: "3x", subtext: "Science Fair & Tech Honors", icon: "trophy" }
  ],

  // About Me Section Details
  about: {
    headline: "Curious Mind, Problem Solver & Creative Maker",
    storyParagraph1: "I recently completed my 10th-grade education at Vidyaniketan Matric Higher Secondary School with an 85.4% aggregate score, earning distinctions in Mathematics and Science. During school, I discovered a genuine passion for programming—beginning with writing my first C++ console loops and realizing how mathematical logic translates into working software.",
    storyParagraph2: "For me, technology is the perfect harmony of analytical logic and artistic design. Beyond calculating algorithms or debugging pointers in C++, I am fascinated by creative arts—composing digital posters, wireframing modern UI layouts in Figma, and developing clean, responsive web pages using modern HTML, CSS, and JavaScript.",
    storyParagraph3: "As I transition into Grade 11 (STEM Track: Advanced Mathematics, Physics, Chemistry, and Computer Science), my ambition is to build practical software, participate in student hackathons, and lay the foundation for a future career in Computer Science & Software Engineering.",
    pillars: [
      {
        icon: "terminal",
        title: "Programming Logic & C++",
        description: "Mastering fundamental control flow, functions, OOP structures, arrays, and file stream persistence in C++."
      },
      {
        icon: "layout",
        title: "Modern Web Design",
        description: "Crafting fluid, mobile-friendly interfaces using semantic HTML5, modern CSS with frosted glassmorphism, and JavaScript."
      },
      {
        icon: "palette",
        title: "Creative Arts & UI/UX",
        description: "Prototyping intuitive student apps in Figma, designing vector illustrations, and applying harmonious color theory."
      },
      {
        icon: "award",
        title: "Academic Dedication",
        description: "Consistent focus on STEM excellence with 85.4% board score and top distinctions in Mathematics and Science."
      }
    ]
  },

  // Skills Breakdown
  skills: {
    programming: [
      { name: "C++", level: "Intermediate", percentage: 82, icon: "terminal", note: "OOP, Functions, Arrays, File Streams, Logic" },
      { name: "HTML5 & Semantic Web", level: "Proficient", percentage: 90, icon: "code", note: "Semantic Structure, Accessibility, Forms" },
      { name: "CSS3 & Modern Layouts", level: "Proficient", percentage: 88, icon: "layout", note: "Flexbox, CSS Grid, Glassmorphism, Animations" },
      { name: "JavaScript (ES6+)", level: "Intermediate", percentage: 76, icon: "sparkles", note: "DOM, Event Loops, Canvas API, LocalStorage" },
      { name: "Python", level: "Beginner-Intermediate", percentage: 65, icon: "file-code", note: "Syntax, Problem Solving, Scripting" }
    ],
    design: [
      { name: "Figma & Wireframing", level: "Intermediate", percentage: 80, icon: "figma", note: "Mobile Wireframes, UI Mockups, Component Kits" },
      { name: "Responsive Web Layouts", level: "Proficient", percentage: 88, icon: "smartphone", note: "Mobile-first, Media Queries, Breakpoints" },
      { name: "Digital Poster & Canva Arts", level: "Proficient", percentage: 85, icon: "image", note: "Vector Graphic Layouts, School Posters" },
      { name: "Color Harmony & Typography", level: "Intermediate", percentage: 78, icon: "palette", note: "Visual Hierarchy, Dark Theme Aesthetics" }
    ],
    academic: [
      { name: "Mathematics", level: "Distinction", percentage: 94, icon: "calculator", note: "Algebra, Trigonometry, Geometry, Coordinate Math" },
      { name: "Physics", level: "Distinction", percentage: 90, icon: "atom", note: "Mechanics, Planetary Gravity, Optics" },
      { name: "Computer Applications", level: "Top of Class", percentage: 95, icon: "laptop", note: "Algorithms, Flowcharts, Number Systems" },
      { name: "Problem Solving & Logic", level: "Advanced", percentage: 88, icon: "lightbulb", note: "Algorithmic thinking, Code Optimization" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Intermediate", percentage: 72, icon: "git-branch", note: "Version Control, Repositories, Commits" },
      { name: "VS Code", level: "Proficient", percentage: 90, icon: "monitor", note: "Extensions, Debugging, Live Server" },
      { name: "GCC / G++ Compiler", level: "Intermediate", percentage: 75, icon: "terminal", note: "Command Line Compilation, C++ CLI" },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 82, icon: "layers", note: "Utility-first Design, Custom Dark Themes" }
    ]
  },

  // Projects & Image Gallery Showcase
  projects: [
    {
      id: "grade-manager",
      title: "Student Grade & Attendance Tracker",
      category: "programming",
      badge: "C++ Application",
      description: "A terminal-based student database management system in C++ that calculates subject GPAs, attendance records, and generates formatted report cards saved persistently to local files.",
      image: "https://picsum.photos/id/1/900/600",
      imageCaption: "C++ Student Database & GPA Calculator Console Architecture",
      bulletPoints: [
        "Architected with Object-Oriented Programming (OOP) utilizing classes for Student, Subject, and GradeReport.",
        "Implemented robust file persistence with C++ fstream to save student records and reload them across sessions.",
        "Created user-friendly terminal formatting and automatic grade-letter calculation with input sanitization."
      ],
      tags: ["C++", "OOP", "File Streams", "Data Structures", "CLI"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: null,
      metrics: "500+ Lines of C++",
      featured: true
    },
    {
      id: "solar-explorer",
      title: "Interactive Solar System & Gravity Exhibit",
      category: "school",
      badge: "1st Place Science Fair",
      description: "An interactive digital planetary physics exhibit created for the High School Science Fair, demonstrating celestial orbits, relative gravity calculations, and space facts.",
      image: "https://picsum.photos/id/1002/900/600",
      imageCaption: "1st Place Winner - Interactive Planetary Orbits & Gravity Physics Simulation",
      bulletPoints: [
        "Awarded 1st Place out of 35 participating teams at the Annual Inter-School Science & Tech Fair.",
        "Built CSS3 keyframe orbit animations and responsive planetary cards with interactive facts.",
        "Featured a 'Calculate Your Weight on Other Planets' real-time mathematical physics simulator."
      ],
      tags: ["HTML5", "CSS3 Animations", "JavaScript", "Science Fair", "Physics"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: "https://example.com",
      metrics: "🏆 1st Prize Winner",
      featured: true
    },
    {
      id: "portfolio-website",
      title: "Midnight Glassmorphism Portfolio",
      category: "web",
      badge: "Featured Web Project",
      description: "A responsive portfolio website engineered with clean HTML5, CSS3 frosted glassmorphism, an interactive particle canvas hero background, and an image lightbox gallery.",
      image: "https://picsum.photos/id/0/900/600",
      imageCaption: "Midnight Dark Mode Portfolio with Frosted Glassmorphism & Particle Canvas",
      bulletPoints: [
        "Engineered an interactive 2D Canvas particle constellation network with mouse repulsion physics.",
        "Built a full-featured image lightbox gallery with smooth zooming, captions, and keyboard controls.",
        "Designed a 100% mobile-friendly responsive layout with glassmorphic cards and scroll-triggered animations."
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Canvas API", "Glassmorphism"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: "https://example.com",
      metrics: "100% Mobile Responsive",
      featured: true
    },
    {
      id: "retro-arcade",
      title: "Retro Arcade: Snake & Brick Breaker",
      category: "programming",
      badge: "2D Game Dev",
      description: "Playable 2D browser mini-games developed with HTML5 Canvas and JavaScript (accompanied by a C++ console version) exploring collision detection, state loops, and high scores.",
      image: "https://picsum.photos/id/1080/900/600",
      imageCaption: "Playable 2D Canvas Arcade Game with Collision Detection & High-Score Loops",
      bulletPoints: [
        "Programmed a 60 FPS requestAnimationFrame game loop with keyboard direction controls and velocity math.",
        "Implemented real-time bounding-box collision detection between ball, paddle, bricks, and snake segments.",
        "Added local storage high-score leaderboard and responsive pause/restart capabilities."
      ],
      tags: ["JavaScript", "HTML5 Canvas", "C++", "Game Dev", "Collision Math"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: "https://example.com",
      metrics: "60 FPS Gameplay",
      featured: false
    },
    {
      id: "study-hub-ui",
      title: "School Study Hub · UI/UX Design System",
      category: "creative",
      badge: "Figma UI/UX",
      description: "A comprehensive UI wireframe and high-fidelity prototype created in Figma for a student study companion app, featuring homework organizers, timetable views, and club announcements.",
      image: "https://picsum.photos/id/119/900/600",
      imageCaption: "Student Study Companion Mobile App UI Wireframes & Prototyping in Figma",
      bulletPoints: [
        "Researched student workflows and designed 15+ interactive mobile screens in Figma.",
        "Established an accessible design system with harmonious dark palettes, buttons, and card styles.",
        "Created promotional digital flyers and social banners for school tech week."
      ],
      tags: ["Figma", "UI/UX Design", "Wireframing", "Creative Arts", "Mobile UI"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: "https://figma.com",
      metrics: "15+ Screens Designed",
      featured: true
    },
    {
      id: "quick-quiz",
      title: "QuickQuiz: 10th Grade STEM Revision App",
      category: "web",
      badge: "Web Application",
      description: "A timed multiple-choice quiz web application built to help classmates review 10th-grade Mathematics, Science, and Computer Science concepts with instant score reports.",
      image: "https://picsum.photos/id/20/900/600",
      imageCaption: "Interactive Timed Quiz Web Platform for 10th Grade STEM Exam Revision",
      bulletPoints: [
        "Built interactive quiz mechanics with countdown timers, randomized questions, and instant explanations.",
        "Stored test history and topic accuracy breakdowns locally in the user's browser.",
        "Used by 40+ classmates during 10th-grade final board exam revision week."
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "STEM Education", "Exam Prep"],
      githubUrl: "https://github.com/gopi0502",
      liveUrl: "https://example.com",
      metrics: "Used by 40+ Classmates",
      featured: false
    }
  ],

  // School Achievements & Honors
  achievements: [
    {
      title: "10th Grade Secondary Board Examination - Academic Honors",
      issuer: "Vidyaniketan Matric Higher Secondary School",
      date: "Spring 2026",
      badge: "85.4% Honors",
      icon: "award",
      description: "Graduated 10th grade with 85.4% aggregate marks, earning High Honors with distinction in Mathematics and Science."
    },
    {
      title: "1st Place Winner · High School Science & Tech Fair",
      issuer: "Inter-School Science Committee",
      date: "Fall 2025",
      badge: "1st Prize",
      icon: "trophy",
      description: "Awarded First Place for creating an interactive digital planetary physics exhibit and celestial orbit simulator."
    },
    {
      title: "Junior Co-Lead · School Coding & Robotics Club",
      issuer: "High School Tech Society",
      date: "2025 - 2026",
      badge: "Leadership",
      icon: "users",
      description: "Co-facilitated after-school workshops introducing 7th-9th grade students to C++ basics, problem solving, and basic web design."
    },
    {
      title: "Silver Medal · Inter-School Digital Art Competition",
      issuer: "Regional Arts Alliance",
      date: "Winter 2025",
      badge: "Creative Arts",
      icon: "palette",
      description: "Recognized for creative digital illustration and poster design highlighting clean technology and future innovation."
    }
  ]
};

if (typeof Object.freeze === 'function') {
  Object.freeze(PORTFOLIO_DATA);
}
