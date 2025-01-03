import React from 'react';

export const Tooltip = ({ icon, name }) => {
    return (
        <div className={`rounded-md`}>
            <div className={`flex items-center justify-center p-2 cursor-pointer rounded-md text-main-color border-[1.4px] border-main-color
            hover:text-white-color hover:bg-main-color 
            font-medium relative z-[9] 
            data-[tooltip]:after:content-[attr(data-tooltip)] data-[tooltip]:after:mt-2 data-[tooltip]:after:text-sm data-[tooltip]:after:invisible data-[tooltip]:after:scale-50 data-[tooltip]:after:origin-top data-[tooltip]:after:opacity-0 
            hover:data-[tooltip]:after:visible hover:data-[tooltip]:after:opacity-100 hover:data-[tooltip]:after:scale-100 data-[tooltip]:after:transition-all data-[tooltip]:after:absolute data-[tooltip]:after:bg-main-color data-[tooltip]:after:top-[calc(100%+4px)] data-[tooltip]:after:left-1/2 data-[tooltip]:after:-translate-x-1/2 data-[tooltip]:after:-z-[1] 
            data-[tooltip]:after:min-h-fit data-[tooltip]:after:min-w-fit data-[tooltip]:after:rounded-md data-[tooltip]:after:drop-shadow 
            data-[tooltip]:before:mt-2 data-[tooltip]:before:drop-shadow data-[tooltip]:after:text-center data-[tooltip]:after:text-white-color data-[tooltip]:after:whitespace-nowrap 
            data-[tooltip]:before:invisible data-[tooltip]:before:opacity-0 hover:data-[tooltip]:before:visible hover:data-[tooltip]:before:opacity-100 data-[tooltip]:before:transition-all data-[tooltip]:before:bg-main-color data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] data-[tooltip]:before:absolute data-[tooltip]:before:top-full data-[tooltip]:before:left-1/2 data-[tooltip]:before:-translate-x-1/2 
            data-[tooltip]:before:z-0 data-[tooltip]:before:w-3 data-[tooltip]:before:h-[4px] data-[tooltip]:after:text-[1.4rem] data-[tooltip]:after:px-3.5 data-[tooltip]:after:py-2`}
                data-tooltip={name}>
                <i className="w-[2.5rem] h-[2.5rem] fill-current stroke-current stroke-0 flex items-center justify-center text-[2rem]">
                    {icon}
                </i>
            </div>
        </div>
    );
}


export const SocialTooltip = ({ name, link, icon }) => {
    return (
        <li className="icon">
            <span className="tooltip">{name}</span>
            <a href={link} className=''>{icon}</a>
        </li>
    )
}