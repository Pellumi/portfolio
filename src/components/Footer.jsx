// import React from 'react'
import { IoMdArrowUp } from 'react-icons/io'

const Footer = () => {
    return (
        <>
            <footer className="flex justify-between items-center flex-wrap px-[7%] py-8 bg-main-color">
                <div className="">
                    <p className='text-[1.6rem] text-white-color'>&copy; {new Date().getFullYear()} | Made by Pellumi</p>
                </div>

                <div className="">
                    <a href="#home" className='inline-flex justify-center items-center p-[0.8rem] bg-white-color rounded-[0.8rem] border-[0.2rem] border-main-color outline-[0.2rem] outline outline-transparent duration-500 ease text-[2.4rem] text-[#333] hover:outline-white-color'><IoMdArrowUp /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer