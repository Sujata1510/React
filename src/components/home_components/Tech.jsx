import React from 'react'
// import { IconName, WiCloudDown } from "react-icons/wi";
import { DiAndroid, DiAngularSimple, DiAtom, DiCisco, DiCss3, DiJava, DiJavascript, DiNodejs, DiPython } from "react-icons/di";

const Tech = () => {
  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold mb-5 text-center">Technologies I use</h1>
      <div className="grid grid-cols-4 place-items-center gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DiJavascript size={200} className='hover:scale-125 ease-in duration-150' />
        <DiCss3 size={200} />
        <DiPython size={200} />
        <DiNodejs size={200} className="animate-bounce" />
        <DiJava size={200} />
        <DiAndroid size={200} />
        <DiCisco size={200} />
        <DiAngularSimple size={200} />
      </div>
    </div>
  )
}

export default Tech