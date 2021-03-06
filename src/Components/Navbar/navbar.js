import "./navbar.scss"


const Navbar = () => {
    return ( 
        <div className="navbar">

            <div className="logo">
                <a href="/home"><img src="../../resouuces/logo" alt="logo"/></a>
            </div>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
     );
}
 
export default Navbar;