import React from 'react'
import CreateSomethingImg from '/Another_Something.png'

const CreateSomething = () => {
    return (
        <div className='rounded-2xl h-[418px] w-[85vw] max-w-[1200px] overflow-hidden mt-32 max-[620px]:h-[314px] max-[435px]:h-[209px]'>
            <img className='w-full h-full object-cover' src={CreateSomethingImg} alt="Create Something" />
        </div>
    )
}

export default CreateSomething