import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";


const MobileNav = () => {
    const [clicked, setClicked] = useState(false);
  return (
    <div className='mobile-nav'>
        <div onClick={() => {
            setClicked(!clicked)
        }}>
        {
            clicked==true?<FaTimes />:<FaBars />
        }
        
        </div>
        {
            clicked && (
            <div className='mob-menu'>
            <p><a href="">Home</a></p>
            <p><a href="">Coffee Menu</a></p>
            <p><a href="">Contact Us</a></p>
            <p><a href="">Coffee Shop</a></p>
        </div>
            )
        }
        
    </div>
  )
}

export default MobileNav