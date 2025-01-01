// import React from 'react'
import ChangingText from './ChangingText';
import CreateSomething from './CreateSomething';

const Landing = () => {
    return (
        <>
            <section className="" id='home'>
                <div className="flex relative max-[768px]:text-center max-[768px]:content-center max-[768px]:justify-center max-[450px]:items-center">
                    <div className="max-w-[50rem]">
                        <h3 className='text-[4rem] font-bold max-[768px]:text-[3rem]'>Hello, I am</h3>
                        <h1 className='text-[5.6rem] font-bold mb-[0.3rem] max-[768px]:my-4'>Philip Edward</h1>
                        <h2 className='mb-4 text-[4rem] h-[10.8rem] font-bold max-[768px]:h-max max-[325px]:h-[12rem] max-[580px]:h-[8.5rem] max-[768px]:text-[3rem]'>I&apos;m a <ChangingText /></h2>
                        <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4">I&apos;m a software developer passionate about creating artistic and functional websites that deliver exceptional value.</p>
                        <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 max-[375px]:mb-4">As a Software Engineering student at Babcock University, I&apos;m honing my skills in building innovative and impactful applications.</p>
                        <a href="https://drive.google.com/file/d/1EEtqUxaSFJ1G6_pbVdrdlBK8rREs9xio/view?usp=sharing" target="blank" className="inline-block py-5 px-11 bg-main-color rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-white-color tracking-[0.1rem] font-semibold border-[0.2rem] border-transparent transition-all duration-500 mt-8 hover:bg-transparent hover:text-main-color hover:border-main-color">View Resume/CV</a>
                    </div>
                </div>
                <CreateSomething />
            </section>
        </>
    )
}

export default Landing