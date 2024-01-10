import React from "react";
import coffee from '/src/assets/coffee.png'
import Icons from "./Icons";
import { GiCoffeeCup } from "react-icons/gi";
import { SiBuymeacoffee } from "react-icons/si";
import { TbCoffee } from "react-icons/tb";
import { GiCoffeeBeans } from "react-icons/gi";

const Banner = ()=>{
    return(
        
        <div className="banner-main">
            <div className="banner-left">
                <div className="banner-heading">
                    <h1>Coffee </h1>
                    <h1>The Best For You</h1>
                </div>
                <div className="button-new">
                    <a href="#">View Menu</a>
                </div>
                <div className="banner-icons">
                    <Icons icon={<GiCoffeeCup/>} size="big"/>
                    <Icons icon={<SiBuymeacoffee/>} size="big"/>
                    <Icons icon={<TbCoffee/>} size="big"/>
                    <Icons icon={<GiCoffeeBeans/>} size="big"/>
                </div>
            </div>
            <div className="banner-right">
                <img src={coffee} alt="coffee" className="banner-img"/>
            </div>
        </div>
        
    )
}

export default Banner;