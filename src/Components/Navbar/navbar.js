import "./navbar.scss"


const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <a href="/home"><img src="../../resouuces/logo" alt="logo"/>
                </a>
            </div>
            <ul>
                <li><a href="../home"> Home</a></li>
                <li><a href="../services"> Services</a></li>
                <li><a href="../about"> About</a></li>
                <li><a href="../contact"> Contact</a></li>
            </ul>
        </div>
     );
}
 
export default Navbar;