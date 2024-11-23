import React from 'react'

const Footer = () => {
  return (
    <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path>
      {/* <text x="750" y="250" fill="white" fontSize={"30px"}>Developed By:

      </text>
      <text x="750" y="300" fill="white" fontSize={"40px"}>
        Sujata Kutuwa
      </text> */}
    </svg>
      <div className="absolute bottom-[25%] sm:[10%] left:">
        <p className="text-red-400">Develop By</p>
      </div>


    </div>
  )
}

export default Footer