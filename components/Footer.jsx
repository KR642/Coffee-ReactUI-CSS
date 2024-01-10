import React from 'react'
import logo from '/src/assets/logo.png'
const Footer = () => {
  return (
      <>
        <footer className='footer'>
            <div>
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div>
                <h3>Our Services</h3>
                <a href="#">Pricing</a>
                <a href="#">Tracking</a>
                <a href="#">Report a bug</a>
                <a href="#">Terms and conditions</a>
            </div>
            <div>
                <h3>Our Company</h3>
                <a href="#">Pricing</a>
                <a href="#">Tracking</a>
                <a href="#">Report a bug</a>
                <a href="#">Terms and conditions</a>
            </div>
            <div>
                <h3>Address</h3>
                <p>Example street 101, pincode</p>
                <p>State, Country</p>
            </div>
        </footer>
      </>
  )
}

export default Footer