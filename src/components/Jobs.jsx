import React from "react";
import Carousel from "./Carousel";
import { MdOutlineSchool } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { TbBrandPrisma, TbBrandVite } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSocketdotio } from "react-icons/si";

const Jobs = () => {
  const carouselItems = [
    {
      title: "Saglophil Specialist Hospital",
      description:
        "Developed a responsive, medically-oriented website for Saglophil Specialist Hospital, integrating dynamic service listings, contact forms, and location mapping, while ensuring accessibility, fast load times, and mobile-first design—resulting in improved patient engagement and digital presence.",
      image: "/saglophilImg.png?height=600&width=1024",
      stack: [
        { icon: TbBrandVite, name: "React" },
        { icon: RiTailwindCssLine, name: "TailwindCSS" },
      ],
      link: "https://saglophilhospital.com/",
      color: "bg-[#032d05]",
    },
    {
      title: "CodeIt Technologies",
      description:
        "Collaborated in developing a modern, responsive website for CodeIT Technologies, contributing to frontend architecture, UI/UX design, and performance optimization to deliver a seamless digital experience aligned with the company’s tech-forward brand.",
      image: "/codeItImg.png?height=600&width=1024",
      stack: [
        { icon: TbBrandVite, name: "React" },
        { icon: RiTailwindCssLine, name: "TailwindCSS" },
      ],
      link: "https://www.codeittechnologies.com/",
      color: "bg-red-500",
    },
    {
      title: "Agora Academia",
      description:
        "Designed and developed both the marketing website and full-stack web application for Agora Academia, an AI-powered educational platform. Built the public-facing site to communicate the platform’s mission with a responsive, modern design, and developed the internal web application to handle user authentication, document upload, real-time chat, and AI-assisted grading—ensuring performance, scalability, and a seamless user experience.",
      image: "/agoraImg.png?height=600&width=1024",
      stack: [
        { icon: TbBrandVite, name: "React" },
        { icon: RiTailwindCssLine, name: "TailwindCSS" },
        { icon: FaNodeJs, name: "Express" },
        { icon: TbBrandPrisma, name: "Prisma" },
        { icon: SiSocketdotio, name: "Socket.io" },
        { icon: GrMysql, name: "MySQL" },
      ],
      link: "https://agoraacademia.netlify.app/",
      color: "bg-[#0073E6]",
    },
  ];

  return (
    <>
      <div className="pt-[10rem] pb-[2rem] px-[7%]">
        {/* <h2 className="mb-8 text-[45px] font-bold text-center max-[450px]:text-[35px]">
          My <span>Works</span>
        </h2>
        <h3 className="text-[2rem] font-semibold text-center mb-12">
          A few things that I have meddled in
        </h3> */}
        <Carousel items={carouselItems} />
      </div>
    </>
  );
};

export default Jobs;
