import {
  SiApachekafka,
  SiKubernetes,
  SiJenkins,
  SiLinux,
  SiJsonwebtokens,
} from "react-icons/si";

// Skills Section Logo's
import javascriptLogo from "./assets/tech_logo/javascript.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import golangLogo from "./assets/tech_logo/go_logo.png";
import redisLogo from "./assets/tech_logo/redis-logo.png";
import dockerLogo from "./assets/tech_logo/docker-logo.png";
import awsLogo from "./assets/tech_logo/AWS-Logo.png";
import grpcLogo from "./assets/tech_logo/Grpc-Logo.png";
import microservicesLogo from "./assets/tech_logo/microservice-logo.png";
import restapiLogo from "./assets/tech_logo/rest_api_logo.png";

// Experience Section Logo's
import shiprocketlogo from "./assets/company_logo/shiprocketlogo.png";
import nitkkrlogo from "./assets/company_logo/nitkkrlogo.jpg";

// Education Section Logo's
import nitkkredulogo from "./assets/education_logo/nitkkrlogo.jpg";
import oxfordlogo from "./assets/education_logo/oxfordlogo.jpg";
import dayaramlogo from "./assets/education_logo/dayaramlogo.jpg";

// Project Section Logo's
import expenseimg from "./assets/work_logo/expense.png";
import codecollabimg from "./assets/work_logo/CodeCollabImg.png";
import grootImg from "./assets/work_logo/groot.png";

export const RESUME_URL =
  "https://drive.google.com/file/d/1NKMZr4x98nxpN2OSEqr2SR-h2ABeEGJA/view?usp=sharing";

export const CONTACT_EMAIL = "chiraggarg879@gmail.com";

// Headline numbers shown in the hero section.
// Text wrapped in **double asterisks** anywhere below is rendered highlighted.
export const impactStats = [
  { value: "225K+", label: "orders/day on a Go + Kafka service I migrated" },
  { value: "43%", label: "p90 latency cut (14s → 8s)" },
  { value: "140K+", label: "partner API calls/day, exactly-once" },
  { value: "0.06%", label: "of batches ever needed recovery" },
];

export const SkillsInfo = [
  {
    title: "Languages",
    skills: [
      { name: "Go (Golang)", logo: golangLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SQL" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Microservices", logo: microservicesLogo },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Event-Driven Architecture" },
      { name: "REST APIs", logo: restapiLogo },
      { name: "gRPC", logo: grpcLogo },
      { name: "Distributed Locking" },
      { name: "Caching" },
      { name: "Idempotency" },
      { name: "Fault Tolerance" },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Concurrency & Quality",
    skills: [
      { name: "Goroutines" },
      { name: "Channels" },
      { name: "Worker Pools" },
      { name: "Mutexes & Atomics" },
      { name: "Unit / Integration Testing" },
      { name: "Load Testing" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Redis", logo: redisLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3, IAM)", logo: awsLogo },
      { name: "Kubernetes (EKS)", icon: SiKubernetes },
      { name: "Docker", logo: dockerLogo },
      { name: "Jenkins", icon: SiJenkins },
      { name: "CI/CD" },
      { name: "Observability" },
      { name: "Linux", icon: SiLinux },
      { name: "Git", logo: gitLogo },
    ],
  },
  {
    title: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "System Design" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: shiprocketlogo,
    role: "Software Engineer (Backend, Golang)",
    company: "Shiprocket Limited",
    location: "Gurugram, Haryana",
    date: "Nov 2025 - Present",
    bullets: [
      "Spearheaded migration of a legacy PHP bulk-assignment service to an **event-driven Golang microservice on Apache Kafka**, handling **~225K orders/day** for **150+ enterprise sellers**; cut **p90 latency by 43% (14s → 8s)** and **halved per-order turnaround** via a zero-downtime, feature-flagged rollout.",
      "Architected a **bulk pickup-scheduling pipeline** sustaining **~140K calls daily (~99% of traffic)** with concurrent worker pools, per-seller quotas, and **idempotent, exactly-once** requests to partner services.",
      "Hardened fault tolerance so only **0.06% of batches** needed recovery, leveraging at-least-once delivery, atomic **Redis Lua scripts**, safe **Kafka offset commits**, and graceful degradation during broker outages.",
      "Re-engineered the **order & shipment cancellation engine in Go**, taking over a PHP flow serving **100K+ requests/day**; orchestrated **8+ downstream side effects** asynchronously with **100% DB-write parity** and auto-fallback for a risk-free cutover.",
      "Delivered holiday-aware pickup and delivery-date logic across **3 services** and integrated couriers (Blue Dart, Pikndel, Delhivery), backed by unit/integration tests, **distributed tracing**, and **structured logging**.",
    ],
    skills: [
      "Golang",
      "Apache Kafka",
      "Redis",
      "MySQL",
      "Microservices",
      "Kubernetes (EKS)",
      "AWS",
      "Distributed Tracing",
    ],
  },
  {
    id: 1,
    img: nitkkrlogo,
    role: "Project Intern",
    company: "Dept. of Computer Engineering, NIT Kurukshetra",
    location: "Kurukshetra, Haryana",
    date: "Feb 2024 - Jun 2024",
    bullets: [
      "Benchmarked **15+ ML classifiers** on **CodeBERT** embeddings for source-code vulnerability prediction, creating an evaluation framework that reached **97% accuracy** in flagging vulnerable functions.",
    ],
    skills: ["Python", "Machine Learning", "CodeBERT", "Research"],
  },
];

export const education = [
  {
    id: 0,
    img: nitkkredulogo,
    school: "National Institute of Technology, Kurukshetra",
    date: "Dec 2021 - May 2025",
    grade: "8.59 / 10 CGPA",
    desc: "Core coursework in Data Structures & Algorithms, Operating Systems, Computer Networks, DBMS, Object-Oriented Programming and System Design. Active competitive programmer throughout.",
    degree: "B.Tech in Information Technology",
  },
  {
    id: 1,
    img: oxfordlogo,
    school: "Oxford Public School, Uklana Mandi",
    date: "Apr 2020 - Mar 2021",
    grade: "95.2%",
    desc: "Physics, Chemistry and Mathematics with Computer Science.",
    degree: "CBSE (XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: dayaramlogo,
    school: "Dayaram Public School, Fatehabad",
    date: "Apr 2018 - Mar 2019",
    grade: "93.2%",
    desc: "Science with Information Technology.",
    degree: "CBSE (X) - Science with Information Technology",
  },
];

export const achievements = [
  {
    title: "LeetCode",
    value: "1751",
    desc: "Max contest rating, **top 10%** globally",
    link: "https://leetcode.com/u/ChiragGarg879/",
  },
  {
    title: "CodeChef",
    value: "3★",
    desc: "**3-star** rated competitive programmer",
    link: "https://www.codechef.com/users/cgking",
  },
  {
    title: "Problem Solving",
    value: "1000+",
    desc: "DSA problems solved across LeetCode, CodeChef & GFG",
    link: "https://www.geeksforgeeks.org/user/chiraggn5vp/",
  },
];

export const projects = [
  {
    id: 0,
    featured: true,
    title: "Concurrent Cinema Ticket Booking System",
    date: "Oct 2026",
    description:
      "High-concurrency seat-reservation backend that guarantees no seat is ever sold twice.",
    highlights: [
      "Eliminated overselling with **atomic SET NX distributed locks**, validated by **100K concurrent goroutines** racing for one seat with **zero conflicts**.",
      "Two-phase **hold → confirm** flow where **2-minute expiring holds** free abandoned carts, with **O(1)** reverse-index lookup.",
      "**3 pluggable storage backends** behind a single Go interface, exposed via 4 REST endpoints.",
    ],
    tags: ["Go", "Redis", "Docker", "REST APIs", "Concurrency"],
    github: "https://github.com/Chiraggarg879",
  },
  {
    id: 1,
    featured: true,
    title: "Scalable URL Shortener Service",
    date: "Aug 2026",
    description:
      "Stateless link-shortening service with redirects, analytics and Redis-backed rate limiting.",
    highlights: [
      "**301 redirects**, custom aliases, collision-checked **6-char codes (16.7M keyspace)**, configurable expiry and click analytics.",
      "Per-IP **rate limiting** with Redis counters over **30-minute windows**, exposing remaining quota and reset time.",
      "Containerized with **multi-stage, non-root images** and Docker Compose.",
    ],
    tags: ["Go", "Fiber", "MySQL", "Redis", "Docker"],
    github: "https://github.com/Chiraggarg879",
  },
  {
    id: 2,
    title: "Groot - Custom Version Control System",
    description:
      "A Git-like version control system built from scratch with init, add, commit, log, diff and efficient file tracking.",
    image: grootImg,
    tags: ["JavaScript", "Node.js", "Data Structures"],
    github: "https://github.com/Chiraggarg879",
  },
  {
    id: 3,
    title: "Code Collab",
    description:
      "Real-time collaborative code editor with multi-user live synchronization over WebSockets.",
    image: codecollabimg,
    tags: ["TypeScript", "React.js", "WebSockets"],
    github: "https://github.com/Chiraggarg879",
  },
  {
    id: 4,
    title: "Expense Management App",
    description:
      "Full-stack expense tracker with JWT authentication, CRUD APIs and persistent storage.",
    image: expenseimg,
    tags: ["React.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Chiraggarg879",
  },
];
