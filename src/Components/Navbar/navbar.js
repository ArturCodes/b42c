import "./navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <div className="navbar">

            <div className="nav-left">
                <NavLink exact to="/"></NavLink> 
            </div>

            <div className="nav-right">
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
}

export default Navbar;