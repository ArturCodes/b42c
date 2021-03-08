import React from 'react'
import "./clients.scss"

import BestBuy from "../../../img/bb.png"
import WallMarat from "../../../img/wm.png"
import BlackFish from "../../../img/bf.png"
import Clam from "../../../img/c.png"
import FleetFarm from "../../../img/ff.png"


function clients() {
    return (
        <div className="clients-wrapper">

            <div>
                <h1>Clients that we worked with</h1>
            </div>

            <div className="clients">
                <img src={BestBuy} alt="BestBuy" />
                <img src={WallMarat} alt="WallMarat" />
                <img src={BlackFish} alt="BlackFish" />
                <img src={Clam} alt="Clam" />
                <img src={FleetFarm} alt="FleetFarm" className=""/>
            </div>

        </div>
    )
}

export default clients
