import React from 'react'
import Icons from "./Icons";
import { MdShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const BuyBox = ({pic, heading, text, amount}) => {

  return (
    <>
    <div className='buy-box'>
        <img src={pic} alt="" />
        <div className='buy-txt'>
            <h3>{heading}</h3>
            <p>{text}</p>
            <div className='shop-icons'>
                <Icons icon = { <MdShoppingCart/>} size = "small"/>
                <Icons icon = { <IoMdHeartEmpty/>} size = "small"/>
            </div>
        </div>
        <div className='amount-btn'>
            <p className='p-white'>{amount}</p>
        </div>
    </div>
    </>
  )
}

export default BuyBox;