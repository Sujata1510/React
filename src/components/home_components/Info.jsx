import React from 'react'

const Info = () => {
  return (
    <div className='space-y-6'>
      <h1 className="text-3xl font-bold text-center ">Who am I</h1>
      <div className="h-[400px] w-[400px] rounded-full bg-black flex justify-center items-center mx-auto border-gray-600 border-[6px] sm:h-[300px] sm:w-[210px] md:h-[300px] md:w-[300px]">
        <div className="text-white">
          <p>Name : Sujata Kutuwa</p>
          <p>Email : sujakutuwa2@gmail.com</p>
          <p>Tel : 9869377721</p>
          <p>Age : 23</p>
          <p>Experience : Python,Html,Css,Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default Info