import React from 'react'

const CardUi = (props) => {
  return (
    <div className="w-[300px] shadow-red-600 shadow-2xl p-2">
      <h1>{props.name}</h1>
      <img className="w-full space-y-2 h-[300px]" src={props.img} alt="" />
      <p>{props.detail}</p>
    </div>
  )
}

export default CardUi