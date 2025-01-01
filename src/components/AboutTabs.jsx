import React from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from "react-icons/fa6";
import { tabsTitles, tabsData } from '../data/TabData';

const AboutTabs = () => {
    const [activeTab, setActiveTab] = React.useState(tabsTitles[0].id);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handlePrevTab = () => {
        const currentIndex = tabsTitles.findIndex((tab) => tab.id === activeTab);
        const prevIndex = (currentIndex - 1 + tabsTitles.length) % tabsTitles.length;
        setActiveTab(tabsTitles[prevIndex].id);
      };
    
      const handleNextTab = () => {
        const currentIndex = tabsTitles.findIndex((tab) => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % tabsTitles.length;
        setActiveTab(tabsTitles[nextIndex].id);
      };
    

    return (
        <div className="w-[58%] flex flex-col justify-center max-[768px]:w-full">
            <div className="flex justify-center my-8 mx-0 text-[2.5rem] max-[930px]:text-[2rem] max-[435px]:text-[2rem] max-[435px]:justify-between max-[435px]:items-center max-[375px]:justify-between items-center">
                <div className='scale-150 hidden text-main-color cursor-pointer max-[435px]:block' onClick={handlePrevTab}>
                    <FaChevronLeft />
                </div>
                {tabsTitles.map((title, index) => (
                    <p
                        className={`mr-12 font-medium cursor-pointer relative after:w-0 after:h-[0.2rem] after:bg-main-color after:absolute after:left-0 after:bottom-[-4px] after:duration-500 max-[435px]:mr-0 max-[435px]:mb-4  ${activeTab === title.id ? 'after:w-1/2 max-[435px]:block max-[435px]:after:w-full' : 'hover:after:w-full max-[435px]:hidden max-[435px]:text-[3rem]'}`}
                        onClick={() => handleTabClick(title.id)} key={index}
                    >
                        {title.title}
                    </p>
                ))}
                <div className='scale-150 hidden text-main-color cursor-pointer max-[435px]:block' onClick={handleNextTab}>
                    <FaChevronRight />
                </div>
            </div>
            {Object.entries(tabsData).map(([tabKey, items]) => (
                <div className={` ${activeTab === tabKey ? 'block' : 'hidden'}`} id={tabKey} key={tabKey}>
                    <ul className='h-[20rem] flex flex-col items-center overflow-y-auto max-[1024px]:h-[300px] max-[768px]:h-max '>
                        {items.map((item, index) => (
                            <li className='my-4 mx-0 text-[1.5rem] text-center max-w-[450px]' key={index}>
                                <span className="font-bold text-[12px]">{item.title}</span><br /> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AboutTabs;
