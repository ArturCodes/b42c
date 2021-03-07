import "./navbar.scss"
import { NavLink } from "react-router-dom"
import myLogo from "../../assets/myLogo2.png"

const Navbar = () => {
    console.log({myLogo})
    return (
        <div className="navbar-wrapper">

            <div className="nav-left">
                <img src={require('./myLogo.png')} alt="Elite Media Design"></img>
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