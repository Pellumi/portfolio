import React from 'react'
import { Tooltip } from './Tooltip'

export const WorkTab = ({ src, alt, title, type, description, stack, link, github }) => {
  return (
    <div className='flex flex-col items-center gap-16 lg:flex-row'>
      <div className="flex-1">
        <div className="border border-text-color-dark dark:border-text-color relative overflow-hidden p-6 shadow-lg shadow-shadow-color dark:shadow-shadow-color-dark rounded-2xl hover:shadow-2xl transition-shadow">
          <img src={src} className='rounded-lg relative z-10 w-full h-auto' alt={alt} />
        </div>
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-[20px] md:text-[30px] font-bold mb-3">{title}</h2>
        <ul className="flex mb-14 gap-12 w-full items-center justify-center lg:items-start lg:justify-start">
          {stack.map((stack, index) => (
            <Tooltip icon={<stack.icon />} key={index} name={stack.name} />
          ))}
        </ul>
        <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4">{description}</p>
        <div className="w-full flex items-center justify-between">
          {github && (
            <a href={github} className="inline-block py-4 px-8 bg-main-color rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-white-color tracking-[0.1rem] cursor-pointer font-semibold border-[0.2rem] border-transparent transition-all duration-500 mt-8 hover:bg-transparent hover:text-main-color hover:border-main-color" target='blank'>
              GitHub
            </a>)
          }
          {link && (
            <a href={link} className="inline-block py-4 px-8 bg-transparent rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-main-color tracking-[0.1rem] cursor-pointer font-semibold border-[0.2rem] border-main-color transition-all duration-500 mt-8 hover:bg-main-color hover:text-white-color hover:border-transparent" target='blank'>
              {type === "web" ? "View Live" : "View Apk"}
            </a>)
          }
        </div>
      </div>
    </div>
  )
}

export const ReverseWorkTab = ({ src, alt, title, type, description, stack, link, github }) => {
  return (
    <div className='flex flex-col items-center gap-16 lg:flex-row-reverse'>
      <div className="flex-1">
        <div className="border border-text-color-dark dark:border-text-color relative overflow-hidden p-6 shadow-lg shadow-shadow-color dark:shadow-shadow-color-dark rounded-2xl hover:shadow-2xl transition-shadow">
          <img src={src} className='rounded-lg relative z-10 w-full h-auto' alt={alt} />
        </div>
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-[20px] md:text-[30px] font-bold mb-3">{title}</h2>
        <ul className="flex mb-14 gap-12 w-full items-center justify-center lg:items-start lg:justify-start">
          {stack.map((stack, index) => (
            <Tooltip icon={<stack.icon />} key={index} name={stack.name} />
          ))}
        </ul>
        <p className="text-[1.8rem] leading-[2.6rem] max-[768px]:mb-8 mb-4 max-[375px]:mb-4">{description}</p>
        <div className="w-full flex items-center justify-between">
          <a href={github} className="inline-block py-4 px-8 bg-main-color rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-white-color tracking-[0.1rem] cursor-pointer font-semibold border-[0.2rem] border-transparent transition-all duration-500 mt-8 hover:bg-transparent hover:text-main-color hover:border-main-color" target='blank'>GitHub</a>
          <a href={link} className="inline-block py-4 px-8 bg-transparent rounded-lg shadow-buttonShadow shadow-shadow-color dark:shadow-shadow-color-dark text-[1.6rem] text-main-color tracking-[0.1rem] cursor-pointer font-semibold border-[0.2rem] border-main-color transition-all duration-500 mt-8 hover:bg-main-color hover:text-white-color hover:border-transparent" target='blank'>
            {type === "web" ? "View Live" : "View Apk"}
          </a>
        </div>
      </div>
    </div>
  )
}