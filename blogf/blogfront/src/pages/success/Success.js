import React from 'react'
import "./success.css"
import compra from "../../assets/compra.png";

const Success = () => {
  return (
    <div className='success'>
      <img className="img" src={compra} alt="" /* width={250} height={250} */ />

    </div>
  )
}

export default Success