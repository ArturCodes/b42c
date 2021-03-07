import Navbar from "../../Navbar/navbar"
import "./home.scss"
import ink from "../../../assets/ink.webm"
import inkBG from "../../../assets/inkBG.png"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />
            <video src={ink} autoPlay="true" loop="true" muted="true" poster={inkBG}></video>
        </div>
    );
}

export default Home;