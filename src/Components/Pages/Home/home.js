import Navbar from "../../Navbar/navbar"
import "./home.scss"
import ink from "../../../assets/ink.mp4"
import inkBG from "../../../assets/inkBG.png"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />
            <video src={ink} autoPlay="true" loop="true" muted="true" poster={inkBG} className="bg-vid">
            </video>
        </div>
    );
}

export default Home;