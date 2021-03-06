import "./navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="logo">
                <NavLink exact to="/"><img src="../../resouuces/logo" alt="Elite Media Design" />
                </NavLink>
            </div>
            <ul>
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
    );
}

export default Navbar;