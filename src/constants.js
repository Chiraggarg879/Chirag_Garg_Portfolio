// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import marutilogo from './assets/company_logo/marutilogo.jpg';
import nitkkrlogo from './assets/company_logo/nitkkrlogo.jpg';


// Education Section Logo's
import nitkkredulogo from './assets/education_logo/nitkkrlogo.jpg';
import oxfordlogo from './assets/education_logo/oxfordlogo.jpg';
import dayaramlogo from './assets/education_logo/dayaramlogo.jpg';

// Project Section Logo's
import expenseimg from './assets/work_logo/expense.png';
import codecollabimg from './assets/work_logo/CodeCollabImg.png';
import bstheapvisualizerimg from './assets/work_logo/BST_img.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },  
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: marutilogo,
      role: "Graduate Engineer Trainee",
      company: "Maruti Suzuki India Limited Digital",
      date: "June 2025 - Present",
      desc: " Analyzed 6 months of LPDC & HPDC machine sensor data using Python,Numpy, Pandas.",
      skills: [
        "Python",
        "Numpy",
        "Pandas",
        "SAP",
        "PP",
        "PPDS",
        "ABAP",
        
      ],
    },
    {
      id: 1,
      img: nitkkrlogo,
      role: "Project Intern",
      company: "Deparment of Computer Engineering",
      date: "Feb 2024 - June 2024",
      desc: " Designed an empirical framework with CodeBERT to evaluate 15+ classifiers for vulnerability prediction.",
      skills: [
        "Python",
        "Machine Learning",
        "CodeBert",

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
degree: "Bachelor of Technology - B.Tech in Information Technology"

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
      grade: "78%",
      desc: "I completed my class 10 education from Dayaram Public School, under the CBSE board, where I studied Science with Information Techology.",
      degree: "CBSE(X) -Science with Information Technology",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Expense Management System",
      description:
        "An intuitive MERN stack Expense Management System to easily track and manage daily expenses with a clean and user-friendly interface.",
      image: expenseimg,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Code Collab Application",
      description:
        "Built CodeCollab, a real-time collaborative code editor enabling multiple users to write, run, and debug code seamlessly with live synchronization.",
      image: codecollabimg,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Web Sockets"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Binary Search Tree and Heap Visualizer",
      description:
        "An interactive tool that visually demonstrates BST and Heap operations through dynamic animations for easier understanding of data structures.",
      image: bstheapvisualizerimg,
      tags: [ "HTML", "CSS", "JavaScript","Data Structures", "Algorithms"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
  ];  