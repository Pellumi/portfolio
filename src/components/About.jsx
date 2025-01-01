import React from 'react'
import AboutTabs from './AboutTabs'

const About = () => {
    return (
        <>
            <section className='flex flex-col justify-center items-center gap-32' id='about'>
                <div className="w-full h-max relative flex justify-between max-[768px]:flex-col max-[768px]:gap-[8rem] max-[768px]:w-full max-[768px]:items-center max-[435px]:gap-16">
                    <div className="w-2/5 flex flex-col items-center max-[768px]:w-4/5 max-[435px]:w-full">
                        <h2 className="text-center text-[4.5rem] mb-4 font-bold">About <span className='text-main-color'>Me</span></h2>
                        <h3 className='text-[1.8rem] text-justify'>As a passionate and adaptable software developer skilled in Java and JavaScript amongst others, I specialize in mobile app and website development, while engaging my expertise as a software engineer to deliver innovative, robust solutions and ensure code quality through thorough reviews.</h3>
                    </div>
                    <AboutTabs />
                </div>
            </section>
        </>
    )
}

export default About