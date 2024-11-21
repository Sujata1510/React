import React from 'react'

const DisplaySection = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div className="w-full h-[650px] mt-[-150px]">
        <dotlottie-player src="https://lottie.host/aa08866d-e3d8-48f0-847a-60603682279b/8JXNyrnwCl.lottie" background="transparent" speed="1" loop autoplay></dotlottie-player></div>
      <div className="mt-4 space-y-3">
        <h1 className="text-2xl font-bold">Hi, I am Sujata.</h1>
        <p className="text-purple-800 italic">Full stack developer, Freelancer.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ipsum laborum fuga dolores eius accusantium unde doloribus exercitationem, dolorum quasi atque dicta. Repellat enim eum magnam ut pariatur atque possimus?</p>
      </div>
    </div>
  )
}

export default DisplaySection