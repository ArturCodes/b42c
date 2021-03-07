import "./navbar.scss"
import { NavLink } from "react-router-dom"
import logo from "../../Components/img/Logo.png"
import { FaBars } from "react-icons/fa"

const Navbar = () => {

    return (
        <div className="navbar">

            <div className="logo">
                <NavLink exact to="/"> <img src={logo} alt="" /></NavLink>
            </div>

            <div className="navigation">
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="bars"><FaBars/></div>
            
            <div className="mobile-navigation">
                <NavLink exact to="/">Home </NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

        </div>
    );
}

export default Navbar;