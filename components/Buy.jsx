import React from 'react'
import BuyBox from './BuyBox'
import beans from '/src/assets/beans.png'
const Buy = () => {
  return (
    <>
    <div className='buy-section'>
        <BuyBox pic = "/src/assets/top1.png" heading = "Americano" text = "100% Natural Arabica or Robusta, 30 ml cup" amount = "$2.50"/>
        <BuyBox pic = "/src/assets/top2.png" heading = "Cappuccino" text = "Coffee 50%, milk 50%, 280ml" amount = "$2.50"/>
        <div className='txt-box'>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
          Lorem ipsum dolor sit amet. Sed blanditiis totam aut tempora quasi 33 vitae voluptatum rem praesentium quia! Qui laborum quis et dolor magnam non consequatur magnam. Nam maiores ullam et tempora voluptatem et fugit velit a consequatur cumque in minus tempora nam ratione blanditiis quo rerum quisquam. 
          </p>
          <div className='learn-more-btn'>
            <a href="#">Learn More</a>
          </div>
        </div>
    </div>
    <div className='buy-section1'>
      <div className='txt-box'>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
            Lorem ipsum dolor sit amet. Sed blanditiis totam aut tempora quasi 33 vitae voluptatum rem praesentium quia! Qui laborum quis et dolor magnam non consequatur magnam. Nam maiores ullam et tempora voluptatem et fugit velit a consequatur cumque in minus tempora nam ratione blanditiis quo rerum quisquam. 
            </p>
            <div className='learn-more-btn'>
              <a href="#">Learn More</a>
            </div>
      </div>
      <div className='buy-img'>
        <div className='amount-big'><p>$2.50</p></div>
        <img src={beans} alt="" />
      </div>
    </div>
    </>
  )
}

export default Buy