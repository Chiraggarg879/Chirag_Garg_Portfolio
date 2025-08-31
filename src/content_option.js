import expenseImg from "./assets/images/expense.png";
import codeCollabImg from "./assets/images/CodeCollabImg.png"
import bstImg from "./assets/images/BST_img.png"
const logotext = "Chirag Garg";
const meta = {
    title: "Chirag Garg",
    description: "I’m a passionate Full Stack Developer skilled in building modern, responsive web applications using technologies like React, Node.js, and MongoDB. With a strong foundation in Data Structures, Algorithms, and core CS fundamentals, I enjoy solving real-world problems through clean, scalable code. "
,
};

const introdata = {
    title: "I’m Chirag Garg",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        // third: "I solve ",
    },
    description: "Full Stack Developer | 3* @Codechef | NIT KKR IT'25",
    your_img_url: "/ChiragGargImage.jpg",
};

const dataabout = {
  title: "A bit about myself",
  aboutme: `My name is Chirag Garg, and I have recently completed my B.Tech in Information Technology from NIT Kurukshetra. I am currently working as a Graduate Engineer Trainee at Maruti Suzuki India Limited (MSIL). I have a strong understanding of Data Structures and Algorithms, as well as core 
Computer Science fundamentals such as Object Oriented Programming, Computer Networking, Operating System, Database Management System. I enjoy building modern, responsive web applications using technologies 
like the MERN stack.

I actively solve DSA challenges and puzzles like Sudoku, and I hold good ratings across multiple 
competitive coding platforms. Beyond academics, I’m passionate about playing cricket and going to 
the gym—activities that help me stay disciplined and maintain a balanced lifestyle. I’m eager to apply 
my skills and enthusiasm to meaningful software projects and contribute effectively in a professional 
environment.`,
};

const worktimeline = [{
        jobtitle: "Graduate Enginneer Trainee",
        where: "Maruti Suzuki India Limited",
        date: "2025",
    },
    {
        jobtitle: "Project Intern",
        where: "Department of Computer Engineering",
        date: "2024",
    },
    
];

const skills = [{
        name: "C++",
        value: 90,
    },
    {
        name: "React.js",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "Java",
        value: 60,
    },
    {
        name: "Python",
        value: 60,
    },
];

const services = [
  {
    title: "Software Engineer",
    description:
      "Designing, developing, and maintaining robust software solutions with a focus on performance, scalability, and clean code practices using modern development tools and frameworks.",
  },
  {
    title: "Full Stack Development",
    description:
      "Building responsive and dynamic web applications using the MERN stack, from designing RESTful APIs to crafting intuitive frontend interfaces and handling database integration.",
  },
];

const dataportfolio = [{
        img: expenseImg,
        description: "“An intuitive MERN stack Expense Management System to easily track and manage daily expenses with a clean and user-friendly interface.”",
        link: "https://github.com/chiraggarg879",
    },
    {
        img: codeCollabImg,
        description: "“Built CodeCollab, a real-time collaborative code editor enabling multiple users to write, run, and debug code seamlessly with live synchronization.”",
        link: "#",
    },
    {
        img: bstImg,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
  YOUR_EMAIL: "chiraggarg879@gmail.com",
  YOUR_FONE: "7206291270",
  description: `I'm currently open to full-time roles and internship opportunities in software development. 
If you’re hiring or know of any opportunities where I can contribute as a Full Stack Developer or Software Engineer, 
feel free to reach out. I’d love to connect!`,
  
  // create an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_skwoo5s",
  YOUR_TEMPLATE_ID: "template_axjh41g",
  YOUR_USER_ID: "hs_HTQEpqu4rwp2ne",
};

const socialprofils = {
    github: "https://github.com/Chiraggarg879",
    // facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/chiraggarg879/",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};