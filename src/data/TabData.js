import { TbBrandAndroid, TbBrandPrisma, TbBrandVite } from "react-icons/tb";
import CreateSomethingImg from "/Another_Something.png";
import ChatAppMain from "/Chat_Main_Platform.png";
import Babrite_Main_Platform from "/Babrite_Main_Platform.png";
import MaxHelp_Main_Platform from "/MaxHelp_Main_Platform.png";
import Tasked_Main_Platform from "/Tasked_Main_Platform.png";
import Portfolio_Main from "/Portfolio_Main.png";
import { FaJava, FaNodeJs, FaWhatsapp } from "react-icons/fa6";
import { SiPostgresql, SiSocketdotio } from "react-icons/si";
import { RiFirebaseLine, RiTailwindCssLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

export const tabsTitles = [
  { title: "Skills", id: "skills" },
  { title: "Experience", id: "experience" },
  { title: "Education", id: "education" },
];

export const tabsData = {
  skills: [
    {
      title: "Web Development",
      description: "FullStack Website Development [FE Heavy]",
    },
    {
      title: "Database Management Systems (DBMS)",
      description: "MySQL, Microsoft SQL Server, Postgre SQL. MongoDb, Firebase",
    },
    {
      title: "Mobile App Development",
      description: "Building Android Native applications",
    },
    {
      title: "Programming Languages",
      description: "Java, JavaScript, Python, C#",
    },
    {
      title: "Frameworks",
      description:
        "ReactJs, ExpressJs, Java Servlet Packages (JSP), Tailwind, ASP.NET",
    },
  ],
  experience: [
    {
      title: "December 2025 - Present",
      description: "Front-end and Mobile Application Developer at Acad AI",
    },
    {
      title: "October 2024 - January 2025",
      description:
        "Babcock University Student Entrepreneurship Club (BUSEC) - Graphics Designer",
    },
    {
      title: "July 2024 - July 2025",
      description:
        "Babcock University Computer Club (BUCC) - Development Team Member",
    },
    {
      title: "January 2024 - June 2024",
      description:
        "Internship at National Institute of Information and Technology (NIIT), Abuja",
    },
    // { title: "2021-Present", description: "Frontend Website Development" },
    // { title: "2023 - Present", description: "FullStack Website Development" },
    // { title: "2023 - Present", description: "Mobile Application Development" },
  ],
  education: [
    { title: "2024", description: "Industrial Attachment at NIIT Nigeria" },
    {
      title: "2021-Present",
      description: "BA in Software Engineering, Babcock University",
    },
    {
      title: "October - December 2021",
      description: "Web Design training at IBBIL Computers",
    },
  ],
};

export const myWorks = [
  {
    src: ChatAppMain,
    alt: "Chat Application",
    title: "Real-Time Chat Application",
    type: "web",
    description:
      "Developed a chat application enabling seamless messaging between friends, emphasizing performance and security, and integrating WebSocket technology to ensure efficient real-time communication, delivering a smooth and reliable user experience tailored to modern needs.",
    stack: [
      { icon: TbBrandVite, name: "React" },
      { icon: FaNodeJs, name: "Express" },
      { icon: SiSocketdotio, name: "Socket.io" },
      { icon: GrMysql, name: "MySQL" },
    ],
    link: "https://chatappbypellumi.netlify.app/",
    github: "https://github.com/Pellumi/chat_application",
  },
  {
    src: Babrite_Main_Platform,
    alt: "Shopping Application",
    title: "Campus Shopping Application",
    type: "mobile",
    description:
      "Developed a campus-focused shopping app streamlining ordering and delivery, utilizing Firebase for image storage, real-time product updates, and cloud messaging for notifications, enhancing efficiency, responsiveness, and user convenience while addressing unique campus community needs.",
    stack: [
      { icon: FaJava, name: "Java" },
      { icon: TbBrandAndroid, name: "Android Studio" },
      { icon: FaNodeJs, name: "Express" },
      { icon: RiFirebaseLine, name: "Firebase" },
    ],
    link: "https://drive.google.com/drive/folders/1iEd3IWQfI81pdDBiW7HTO7zajpxpxrlZ?usp=sharing",
    github: "https://github.com/Pellumi/shopping-application",
  },
  {
    src: MaxHelp_Main_Platform,
    alt: "Inventory Management System",
    title: "Inventory Management System",
    type: "web",
    description:
      "Collaborated on a system to track stock, automate inventory updates, and provide actionable insights, leveraging Prisma as an ORM in Express for seamless database connectivity, and developed responsive dashboards and APIs to handle large-scale data efficiently.",
    stack: [
      { icon: TbBrandVite, name: "React" },
      { icon: FaNodeJs, name: "Express" },
      { icon: TbBrandPrisma, name: "Prisma" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
    link: "",
    github: "https://github.com/Pellumi/project-management",
  },
  {
    src: Tasked_Main_Platform,
    alt: "Task Management App",
    title: "Task Management App",
    type: "mobile",
    description:
      "Created a task management app allowing users to create, track, and prioritize tasks, featuring real-time updates and reminders, with a user-friendly interface and Firebase integration for seamless data synchronization and efficient notifications delivery.",
    stack: [
      { icon: FaJava, name: "Java" },
      { icon: TbBrandAndroid, name: "Android Studio" },
      { icon: RiFirebaseLine, name: "Firebase" },
    ],
    link: "https://drive.google.com/drive/folders/1BV2fI9U68YfWbPmpVXGQBvHvPNtRDEuF?usp=sharing",
    github: "https://github.com/Pellumi/Todo-list-application",
  },
  // {
  //   src: Tasked_Main_Platform,
  //   alt: "Task Management App",
  //   title: "Career Guidance and Resume Analysis System",
  //   type: "web",
  //   description:
  //     "Developed Atlas, a comprehensive web platform for managing academic career guidance and FAQs at Babcock University. Created both the marketing website and the core web application, incorporating features such as AI algorithms for resume analysis, FAQ chatbot, and career guidance.",
  //   stack: [
  //     { icon: FaJava, name: "Java" },
  //     { icon: TbBrandAndroid, name: "Android Studio" },
  //     { icon: RiFirebaseLine, name: "Firebase" },
  //   ],
  //   link: "https://drive.google.com/drive/folders/1BV2fI9U68YfWbPmpVXGQBvHvPNtRDEuF?usp=sharing",
  //   github: "https://github.com/Pellumi/Todo-list-application",
  // },
  {
    src: Portfolio_Main,
    alt: "Portfolio Website",
    title: "Portfolio Website",
    type: "web",
    description:
      "Developed a dynamic portfolio website highlighting projects, skills, and achievements with a responsive design, incorporating smooth navigation and interactive elements, while optimizing performance to provide an exceptional user experience across all devices and screen sizes.",
    stack: [
      { icon: TbBrandVite, name: "React" },
      { icon: RiTailwindCssLine, name: "TailwindCSS" },
    ],
    link: "https://madebypellumi.netlify.app/",
    github: "https://github.com/Pellumi/portfolio",
  },
];

export const mySocials = [
  {
    name: "GitHub",
    link: "https://github.com/Pellumi",
    icon: BiLogoGithub,
  },
  {
    name: "Gmail",
    link: "mailto:philip.edward1510@gmail.com",
    icon: BiLogoGmail,
  },
  {
    name: "Linkedin",
    link: "www.linkedin.com/in/philip-edward-199973360",
    icon: BiLogoLinkedin,
  },
  {
    name: "WhatsApp",
    link: "whatsapp://send?phone=2349068806168",
    icon: FaWhatsapp,
  },
];

export const myServices = [
  {
    title: "Frontend Web Design and Development",
    subject: "Frontend Web Design and Development",
  },
  { title: "Backend Web Development", subject: "Backend Website Development" },
  {
    title: "FullStack Web Application Development",
    subject: "FullStack Web Application Development",
  },
  {
    title: "Mobile Application Development (Android)",
    subject: "Mobile Application Development (Android)",
  },
  { title: "Graphic Design", subject: "Graphic Design" },
  { title: "Debugging and Code Review", subject: "Debugging and Code Review" },
];
