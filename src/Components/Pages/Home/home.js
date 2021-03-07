import Navbar from "../../Navbar/navbar"
import "./home.scss"

const Home = () => {
    return ( 
        <div className="home-wrapper">
            <Navbar />
             <video>
                 <source src="../assets/ink.mp4" type="video/mp4"/>
             </video>
        </div>
     );
}
 
export default Home;