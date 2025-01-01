import React from 'react'
import { ReverseWorkTab, WorkTab } from './WorkTab'
import { myWorks } from '../data/TabData'

const MyWorks = () => {
  return (
    <>
      <section className="" id="works">
        <h2 className="mb-8 text-[45px] font-bold text-center max-[450px]:text-[35px]">My <span>Works</span></h2>
        <h3 className="text-[2rem] font-semibold text-center mb-12">A few things that I have meddled in</h3>
        <div className="flex flex-col gap-24">
          {myWorks.map((work, index) => (
            (index + 2) % 2 == 0 ? <WorkTab key={index} {...work} /> : <ReverseWorkTab key={index} {...work} />
          ))}
        </div>
      </section>
    </>
  )
}

export default MyWorks