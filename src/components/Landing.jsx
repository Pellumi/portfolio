// import React from 'react'
import CanvasAnimation from "./CanvasAnimation";
import ChangingText from "./ChangingText";
import CreateSomething from "./CreateSomething";
import Profile from "/profile.png";

const Landing = () => {
  return (
    <>
      <CanvasAnimation />
      <section className="" id="home">
        <div className="flex flex-col lg:flex-row relative lg:gap-12 max-[1440px]:h-[calc(100dvh_-_77.5px)] max-[1023px]:h-max max-[768px]:text-center max-[768px]:content-center max-[768px]:justify-center">
          <div className="flex-1 flex flex-col items-left justify-center ">
            <div className="relative inline-block rounded-full mb-8 max-[768px]:hidden max-[450px]:inline-block">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFh9yd0RD8t1A/profile-displayphoto-shrink_400_400/B56ZZNijFKHsAg-/0/1745057625903?e=1752710400&v=beta&t=yhqLVYxv8yBDf578P37-EY9Ta0fVrNW0GQ5llsDpZhw"
                alt=""
                className="rounded-full border-main-color border-[0.3rem] w-20 h-20 object-cover bg-black"
              />
            </div>
            <h3 className="text-[4rem] font-bold max-[768px]:text-[3rem] max-[450px]:text-left">
              Hello, I am
            </h3>
            <h1 className="text-[5.6rem] font-bold mb-[0.3rem] max-[768px]:my-4 max-[450px]:text-left max-[450px]:text-[4rem]">
              Philip Edward
            </h1>
            <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4 max-[450px]:text-left">
              Front-end and Mobile Application Developer at <br /> <span><a href="https://www.acadai.co/">Acad AI</a></span>
            </p>
          </div>
          <div className="flex-1 flex flex-col items-left justify-center">
            <h2 className="mb-4 text-[4rem] lg:h-[10.8rem] font-bold max-[768px]:h-max max-[325px]:h-[12rem] max-[580px]:h-[8.5rem] max-[768px]:text-[3rem] max-[450px]:text-left">
              I&apos;m a <ChangingText />
            </h2>
            <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4 max-[450px]:text-left">
              I&apos;m a software developer passionate about creating artistic
              and functional systems that deliver exceptional value.
            </p>
            <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 max-[375px]:mb-4 max-[450px]:text-left">
              As a Software Engineering student at Babcock University, I&apos;m
              honing my skills in building innovative and impactful
              applications.
            </p>
            <a
              href="https://drive.google.com/file/d/1syrtqTjMvz6ZkkDcloD7F_SUuUJp53da/view?usp=sharing"
              target="blank"
              className="inline-block py-5 px-11 w-max bg-main-color rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-white-color tracking-[0.1rem] font-semibold border-[0.2rem] border-transparent transition-all duration-500 mt-8 hover:bg-transparent hover:text-main-color hover:border-main-color max-[768px]:mx-auto"
            >
              View Resume/CV
            </a>
          </div>
        </div>
        <CreateSomething />
      </section>
    </>
  );
};

export default Landing;
