import React from 'react'
import { NavLink } from "react-router-dom"
import "./footer.scss"

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="footer-links">
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="footer-info">
                <p>Phone: 763-123-1234</p>
                <p>Email: info@elitemediadesign.com</p>
                <p>Address: 80 S 8th St, Suite #005 Minneapolis, MN 55402</p>
            </div>
        </div>
    )
}

export default Footer
