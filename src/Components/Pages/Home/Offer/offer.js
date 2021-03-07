import { NavLink } from "react-router-dom"
import "./offer.scss"




const Offer = () => {
    return (
        <div className="offer-wrapper">
            <h1>Services that EMD offers</h1>

            <div className="offers">
                <div className="row1">
                    <div className="card">Website</div>
                    <div className="card">SEO</div>
                    <div className="card">Graphic Design</div>
                </div>

                <div className="row2">
                    <div className="card">Photography</div>
                    <div className="card">Videography</div>
                    <div className="card">Ecommerce</div>
                </div>

                <div className="row3">
                    <div className="card">Email Marketing</div>
                    <div className="card"><NavLink to="/services">Learn more</NavLink></div>
                </div>
            </div>
        </div>
    );
}

export default Offer;