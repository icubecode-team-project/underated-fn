import React from 'react'
import "../index.css"
import errorImage from '../assets/404.jpg';

const FallBackUI = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6 px-4" style={{ backgroundColor: "#222222" }}>
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img src={errorImage} alt="Error" className="w-50 h-50" />
    </div>
    <div className=" text-5xl font-bold tracking-tight text-center" style={{color:"#fefefe"}}>
      404 Not Found
    </div>
  </div>
  
  )
}

export default FallBackUI;