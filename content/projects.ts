export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  frontendRepo?: string;
  backendRepo?: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "starconnect-platform",
    title: "StarConnect Platform",
    description:
      "A production-grade professional networking platform with real-time communication, webinars, scheduling, and scalable backend services.",
    tags: ["Next.js", "React", "TypeScript", "NestJS", "Redis", "RabbitMQ", "Elasticsearch", "Socket.IO"],
    href: "https://starconnect.com",
    highlights: [
      "Built platform features with Next.js, React, Redux, and TypeScript",
      "Achieved about 100% Lighthouse performance score for faster load speed and UX",
      "Developed chat, video call, webinar, and scheduling workflows for real-time user interaction",
      "Contributed to NestJS microservices architecture with Redis, RabbitMQ, Elasticsearch, JWT, and MySQL",
    ],
  },
  {
    slug: "advanced-todo-app",
    title: "Advanced Todo App",
    description:
      "A full-stack single-page todo management app with JWT authentication, Redux state management, and installable PWA support.",
    tags: ["React", "Tailwind", "Redux", "Express", "MongoDB", "Mongoose", "JWT", "PWA"],
    href: "https://advanced-rtk-todo.netlify.app/",
    frontendRepo: "https://github.com/Tushar8640/rtk-todo-app",
    backendRepo: "https://github.com/Tushar8640/todo-server",
    highlights: [
      "Built JWT token-based authentication for protected todo workflows",
      "Designed the app as a responsive single-page application with Redux-powered state management",
      "Added PWA support so users can install it on Android, iOS, and Windows",
      "Implemented todo create, edit, and management features with Express, Mongoose, and MongoDB",
    ],
  },
  {
    slug: "library-management-website",
    title: "Library Management Website",
    description:
      "A full-stack single-page library management website with JWT authentication, separate admin and user dashboards, and real-time notifications.",
    tags: ["React", "Tailwind", "Redux", "Node.js", "MongoDB", "JWT", "Socket.IO"],
    href: "https://amathlib.netlify.app/",
    frontendRepo: "https://github.com/israt-emu/Library-management-frontend",
    backendRepo: "https://github.com/israt-emu/Library-management-backend",
    highlights: [
      "Created separate dashboards for admins and users with protected routes",
      "Enabled users to borrow or request books while admins manage inventory and requests",
      "Added real-time notifications with Socket.IO for user and admin updates",
      "Built backend APIs with Node.js, MongoDB, JWT authentication, and Redux-powered frontend state",
    ],
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A React Native personal finance app for managing daily income and expenses with budgets, reports, reminders, and backup/restore support.",
    tags: ["React Native", "Expo", "Local Storage", "Dark Mode", "Finance App"],
    href: "https://expo.dev/artifacts/eas/bdvh9CMTuSucwV15uErcWi.apk",
    highlights: [
      "Built category-based income and expense tracking with date-wise history filters",
      "Added budgets, recurring transactions, reminders, and backup/restore support",
      "Created visual summaries and reports for a clearer personal finance overview",
      "Implemented dark mode and local storage for a smooth mobile-first experience",
    ],
  },
];
