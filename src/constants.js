// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
// Tech logo imports added by user
import golangLogo from "./assets/tech_logo/go_logo.png";
import redisLogo from "./assets/tech_logo/redis-logo.png";
import dockerLogo from "./assets/tech_logo/docker-logo.png";
import awsLogo from "./assets/tech_logo/AWS-Logo.png";
import grpcLogo from "./assets/tech_logo/Grpc-Logo.png";
import jwtLogo from "./assets/tech_logo/jwt_logo.png";
import microservicesLogo from "./assets/tech_logo/microservice-logo.png";
import restapiLogo from "./assets/tech_logo/rest_api_logo.png";

// Experience Section Logo's
import shiprocketlogo from "./assets/company_logo/shiprocketlogo.png";
import marutilogo from "./assets/company_logo/marutilogo.jpg";
import nitkkrlogo from "./assets/company_logo/nitkkrlogo.jpg";

// Education Section Logo's
import nitkkredulogo from "./assets/education_logo/nitkkrlogo.jpg";
import oxfordlogo from "./assets/education_logo/oxfordlogo.jpg";
import dayaramlogo from "./assets/education_logo/dayaramlogo.jpg";

// Project Section Logo's
import expenseimg from "./assets/work_logo/expense.png";
import codecollabimg from "./assets/work_logo/CodeCollabImg.png";
import bstheapvisualizerimg from "./assets/work_logo/BST_img.png";
import grootImg from "./assets/work_logo/groot.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Golang", logo: golangLogo },
      { name: "REST APIs", logo: restapiLogo },
      { name: "gRPC", logo: grpcLogo },
      { name: "Microservices", logo: microservicesLogo },
      { name: "Redis", logo: redisLogo },
      { name: "JWT Authentication", logo: jwtLogo },
      { name: "Docker", logo: dockerLogo },
      { name: "AWS", logo: awsLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: shiprocketlogo,
    role: "Graduate Engineer Trainee (Software Engineer)",
    company: "Shiprocket Limited",
    date: "Nov 2025 - Present",
    desc: "Refactored legacy courier integration workflows into scalable Golang microservices, implemented Redis caching for high-frequency backend paths, and automated scheduled courier processing workflows in a distributed environment.",
    skills: [
      "Golang",
      "Microservices",
      "Redis",
      "Kafka",
      "AWS",
      "Production Debugging",
    ],
  },
  {
    id: 1,
    img: marutilogo,
    role: "Graduate Engineer Trainee",
    company: "Maruti Suzuki India Limited",
    date: "June 2025 - Nov 2025",
    desc: "Built Python automation scripts using NumPy and Pandas to process LPDC and HPDC machine sensor data, while executing PL/SQL queries to migrate and validate production data for reliable QA testing.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "PL/SQL",
      "Data Automation",
      "QA Support",
    ],
  },
  {
    id: 2,
    img: nitkkrlogo,
    role: "Project Intern",
    company: "Dept. of Computer Engineering, NIT Kurukshetra",
    date: "Feb 2024 - June 2024",
    desc: "Designed a CodeBERT-based framework to evaluate 15+ ML classifiers for vulnerability prediction and achieved 97% accuracy in identifying vulnerable code functions.",
    skills: [
      "Python",
      "Machine Learning",
      "CodeBERT",
      "Vulnerability Prediction",
      "Research",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: nitkkredulogo,
    school: "NIT,Kurukshetra",
    date: "Dec 2021 - May 2025",
    grade: "8.59 CGPA",
    desc: "I have completed my Bachelor's degree (B.Tech) in Information Technology from NIT Kurukshetra. During my time at NIT, I built a solid foundation in core computer science subjects and engineering principles. I studied courses such as Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object-Oriented Programming, and Software Development. I worked on several academic projects and participated in coding competitions, which strengthened my problem-solving and programming skills. My journey at NIT Kurukshetra played a crucial role in shaping my technical expertise and preparing me for professional challenges.",
    degree: "Bachelor of Technology - B.Tech in Information Technology",
  },
  {
    id: 1,
    img: oxfordlogo,
    school: "Oxford Public School, Uklana Mandi",
    date: "April 2020 - March 2021",
    grade: "95.2",
    desc: "I completed my class 12 education from Oxford Public School, Uklana Mandi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: dayaramlogo,
    school: "Dayaram Public School, Fatehabad",
    date: "Apr 2018 - March 2021",
    grade: "93.2%",
    desc: "I completed my class 10 education from Dayaram Public School, under the CBSE board, where I studied Science with Information Techology.",
    degree: "CBSE(X) -Science with Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "Custom Version Control System - Groot",
    description:
      "Implemented a Git-like version control system from scratch with core features such as init, add, commit, log, diff, and efficient file tracking.",
    image: grootImg,
    tags: [
      "JavaScript",
      "Node.js",
      "Version Control",
      "Data Structures",
      "Algorithms",
    ],
    github: "https://github.com/Chiraggarg879",
    webapp: "#",
  },
  {
    id: 1,
    title: "Code Collab Application",
    description:
      "Built a real-time collaborative editor supporting multiple users and live synchronization across languages using TypeScript, React.js, and WebSocket communication.",
    image: codecollabimg,
    tags: [
      "TypeScript",
      "React.js",
      "Web Sockets",
      "Realtime",
      "Collaboration",
    ],
    github: "https://github.com/Chiraggarg879",
    webapp: "#",
  },
  {
    id: 2,
    title: "Expense Management App",
    description:
      "Developed a secure full-stack expense tracker with JWT authentication, CRUD APIs, and persistent storage for transaction management.",
    image: expenseimg,
    tags: [
      "HTML5",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/Chiraggarg879",
    webapp: "#",
  },
];
