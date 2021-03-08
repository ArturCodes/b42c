import Navbar from "../../Navbar/navbar"
// import Footer from "../../Footer/footer"
import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact-wrapper">
            <Navbar />
            <div className="contact">
                <h1>Contact Us</h1>
                <div className="form-wrapper">

                    <form>
                        <div>
                            <label>Name: </label>
                            <input type="text" name="name" placeholder="Name" />
                        </div>

                        <div>
                            <label>Email: </label>
                            <input type="text" name="email" placeholder="Email" />
                        </div>

                        <div>
                            <label>Message: </label>
                            <textarea type="text" name="message" placeholder="Message"> </textarea>
                        </div>

                        <div>
                            <input type="submit" value="Submit" />
                        </div>

                    </form>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Contact;