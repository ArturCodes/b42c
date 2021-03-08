import Navbar from "../../Navbar/navbar"
// import Footer from "../../Footer/footer"
import "./about.scss"

const About = () => {
    return (
        <div className="about-wrapper">
            <Navbar />
            <div className="about">
                <h1>About Us</h1>
                <p> EMD was founded in 2005 in a garage when two college roommates, Henry and John, put their minds together to create all things web related. The office, now located in the IDS Center in downtown Minneapolis, has over 30 employees.</p>

                <h3>EMD’s Mission Statement:</h3>

                <p>
                    We strive to deliver value in our service, and to understand with respect all of our clients needs and to provide a partnership that is created when we host our clients web services, develop their site, market their product/service or simply give them advice..</p>

            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default About;