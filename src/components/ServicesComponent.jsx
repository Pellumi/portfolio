// import React from 'react'
import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

const ServicesComponent = () => {
    const services = [
        { title: 'Frontend Web Design and Development', subject: 'Frontend Web Design and Development' },
        { title: 'Backend Web Development', subject: 'Backend Website Development' },
        { title: 'FullStack Web Application Development', subject: 'FullStack Web Application Development' },
        { title: 'Mobile Application Development (Android)', subject: 'Mobile Application Development (Android)' },
        { title: 'Graphic Design', subject: 'Graphic Design' },
        { title: 'Debugging and Code Review', subject: 'Debugging and Code Review' }
    ];

    const sendEmail = (subject) => {
        const email = "philip.edward1510@gmail.com";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };
    return (
        <>
            <section className="relative pb-[10rem]" id='services'>
                <h2 className="mb-8 text-[45px] font-bold text-center max-[450px]:text-[35px]">My <span>Services</span></h2>
                <h3 className="text-[2rem] font-semibold text-center mb-12">Just a couple things that I can help out with</h3>
                <div className="grid grid-cols-2 gap-12 max-[690px]:flex max-[690px]:flex-col">
                    {services.map((service, index) => (
                        <a key={index} href="javascript:void(0);" onClick={() => sendEmail(service.subject)}>
                            <div className="border-[0.1rem] border-main-color rounded-2xl flex cursor-pointer hover:scale-[1.02] duration-[0.2s] ease-in-out max-[768px]:hover:scale-[1]">
                                <h2 className='my-12 mx-16 text-[15px] font-semibold'>{service.title}</h2>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="social__media">
                    <li className="icon">
                        <span className="tooltip">GitHub</span>
                        <a href="https://github.com/Pellumi" className=''><BiLogoGithub /></a>
                    </li>
                    <li className="icon">
                        <span className="tooltip">Gmail</span>
                        <a href="mailto:philip.edward1510@gmail.com" className=''><BiLogoGmail /></a>
                    </li>
                    <li className="icon">
                        <span className="tooltip">Linkedin</span>
                        <a href="https://www.linkedin.com/in/philip-edward-ba5167268/" className=''><BiLogoLinkedin /></a>
                    </li>
                </div>
            </section>
        </>
    )
}

export default ServicesComponent