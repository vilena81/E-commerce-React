import { Link } from "react-router-dom";
import React, { useState } from 'react';
import img from './nk.png'



export default function Header() {
    
    
    return (
        <div className="header">
            <div >
                <Link to="/"><img src={img} className="logo-nike" /></Link>
            </div>

            <div className="nav">
                <ul className="nav-list">
                    <li className="home">
                        <Link to="/"></Link>
                    </li>

                    <li className="about">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="contact">
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>


            <div>
               <input placeholder="search" className="input"></input>
                <Link to="/basket"><img src="basket.png"  className="basket-logo"/> </Link>

            </div>

        </div>
    )
}




