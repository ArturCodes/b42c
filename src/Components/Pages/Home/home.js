import Navbar from "../../Navbar/navbar"
import "./home.scss"
import ink from "../../../assets/ink.webm"
import inkBG from "../../../assets/inkBG.png"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />
            <video src={ink} autoPlay="true" loop="false" muted="true" poster={inkBG}></video>
            <div className="vision">
                <p>Our vision is to create a business world full of prosperity, meaning, <br/> 
                and connection for all.</p>
            </div>
        </div>
    );
}

export default Home;