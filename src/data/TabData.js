import { TbBrandAndroid, TbBrandPrisma, TbBrandVite } from "react-icons/tb";
import CreateSomethingImg from "/Another_Something.png";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { SiPostgresql, SiSocketdotio } from "react-icons/si";
import { RiFirebaseLine, RiTailwindCssLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

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
      description: "MySQL, Microsoft SQL Server, Postgre SQL",
    },
    {
      title: "Mobile App Development",
      description: "Building Android Native applications",
    },
    {
      title: "Programming Languages",
      description: "Java, JavaScript, Python, PHP",
    },
    {
      title: "Frameworks",
      description:
        "ReactJs, ExpressJs, Java Servlet Packages (JSP), SCSS, Tailwind, Bootstrap",
    },
  ],
  experience: [
    {
      title: "January 2024 - June 2024",
      description:
        "Internship at National Institute of Information and Technology (NIIT), Abuja",
    },
    {
      title: "July 2024 - Present",
      description:
        "Babcock University Computer Club (BUCC) - Development Team Member",
    },
    {
      title: "October 2024 - Present",
      description:
        "Babcock University Student Entrepreneurship Club (BUSEC) - Graphics Designer",
    },
    { title: "2021-Present", description: "Frontend Website Development" },
    { title: "2023 - Present", description: "FullStack Website Development" },
    { title: "2023 - Present", description: "Mobile Application Development" },
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
    src: CreateSomethingImg,
    alt: "Chat Application",
    title: "Real-Time Chat Application",
    description:
      "Developed a chat application enabling seamless messaging between friends, emphasizing performance and security, and integrating WebSocket technology to ensure efficient real-time communication, delivering a smooth and reliable user experience tailored to modern needs.",
    stack: [
      { icon: TbBrandVite, name: "React" },
      { icon: FaNodeJs, name: "Express" },
      { icon: SiSocketdotio, name: "Socket.io" },
      { icon: GrMysql, name: "MySQL" },
    ],
    link: "",
    github: "https://github.com/Pellumi/chat_application",
  },
  {
    src: CreateSomethingImg,
    alt: "Shopping Application",
    title: "Campus Shopping Application",
    description:
      "Developed a campus-focused shopping app streamlining ordering and delivery, utilizing Firebase for image storage, real-time product updates, and cloud messaging for notifications, enhancing efficiency, responsiveness, and user convenience while addressing unique campus community needs.",
    stack: [
      { icon: FaJava, name: "Java" },
      { icon: TbBrandAndroid, name: "Android Studio" },
      { icon: FaNodeJs, name: "Express" },
      { icon: RiFirebaseLine, name: "Firebase" },
    ],
    link: "",
    github: "https://github.com/Pellumi/shopping-application",
  },
  {
    src: CreateSomethingImg,
    alt: "Inventory Management System",
    title: "Inventory Management System",
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
    src: CreateSomethingImg,
    alt: "Task Management App",
    title: "Task Management App",
    description:
      "Created a task management app allowing users to create, track, and prioritize tasks, featuring real-time updates and reminders, with a user-friendly interface and Firebase integration for seamless data synchronization and efficient notifications delivery.",
    stack: [
      { icon: FaJava, name: "Java" },
      { icon: TbBrandAndroid, name: "Android Studio" },
      { icon: RiFirebaseLine, name: "Firebase" },
    ],
    link: "",
    github: "https://github.com/Pellumi/Todo-list-application",
  },
  {
    src: CreateSomethingImg,
    alt: "Portfolio Website",
    title: "Portfolio Website",
    description:
      "Developed a dynamic portfolio website highlighting projects, skills, and achievements with a responsive design, incorporating smooth navigation and interactive elements, while optimizing performance to provide an exceptional user experience across all devices and screen sizes.",
    stack: [
      { icon: TbBrandVite, name: "React" },
      { icon: RiTailwindCssLine, name: "TailwindCSS" },
    ],
    link: "",
    github: "",
  },
];
