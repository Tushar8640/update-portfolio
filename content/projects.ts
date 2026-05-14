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
    slug: "shopnext-ecommerce",
    title: "ShopNext — Discover Quality Products",
    description:
      "A production-ready e-commerce platform built with Next.js 16 (App Router), Prisma 7, and PostgreSQL. Features a full storefront, multi-step checkout, wishlist, reviews, and an admin dashboard with analytics, inventory, coupons, gift cards, flash sales, and a blog editor.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "shadcn/ui",
      "Redux Toolkit",
      "Supabase",
      "E-commerce",
    ],
    href: "https://shopnext-lyart.vercel.app/",
    repo: "https://github.com/Tushar8640/ecom",
    highlights: [
      "Full storefront with multi-step checkout, wishlist, and product reviews",
      "Admin dashboard: analytics, inventory, coupons, gift cards, and flash sales",
      "Built-in blog editor for content marketing and SEO",
      "Type-safe data layer with Prisma 7 and PostgreSQL",
      "Auth and storage powered by Supabase, state managed with Redux Toolkit",
    ],
  },
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
  {
  slug: "cpbs-admission-system",
  title: "CPBS Admission System — Online Applications with Manual Payment Verification",
  description:
    "A bilingual (Bengali/English) Next.js 14 admission platform for the CPBS organization in Bangladesh. Students apply online, pay via bKash/Nagad/Rocket, and download PDF admit cards once an admin verifies the transaction. Includes a JWT-secured admin dashboard for managing applicants, schools, members, and database backups.",
  tags: [
    "Next.js 14",
    "App Router",
    "React",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS",
    "shadcn/ui",
    "JWT",
    "bcrypt",
    "PDFKit",
    "Puppeteer",
    "Zod",
    "React Hook Form",
    "Framer Motion",
  ],
  href: "https://cpbs.vercel.app",
  highlights: [
    "End-to-end admission flow: online application, manual bKash/Nagad/Rocket verification, auto roll-number generation, and PDF admit card download with re-download support",
    "JWT + bcrypt admin dashboard with super-admin controls for applicants, schools, members, and CSV/Excel export via XLSX",
    "Server-rendered PDF admit cards generated with PDFKit and Puppeteer (Sparticuz Chromium) from an HTML template",
    "Type-safe data layer with Prisma 5 and PostgreSQL, versioned migrations, seed scripts, and built-in JSON backup/restore tooling",
    "Bilingual marketing site with shadcn/ui, Tailwind, Embla carousels, and Framer Motion animations, plus a keep-alive logging endpoint to prevent serverless DB cold starts",
  ],
}
];
