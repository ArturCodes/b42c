import React from 'react'
import { NavLink } from "react-router-dom"
import "./footer.scss"
import Logo from "../../../img/Logo.png"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div>
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div><img src={Logo} alt=""/></div>
            <div>
                
            </div>
        </div>
    )
}

export default Footer
