import Navbar from "../../Navbar/navbar"
import "./home.scss"
import ink from "../../../assets/ink.webm"
import inkBG from "../../../assets/inkBG.png"
import Vision from "./Vision/vision"
import Offer from "./Offer/offer"

const Home = () => {
    return (
        <div className="home-wrapper">
            <Navbar />
            <video src={ink} autoPlay="true" loop="false" muted="true" poster={inkBG}></video>
            <Vision />
            <Offer />
        </div>
    );
}

export default Home;