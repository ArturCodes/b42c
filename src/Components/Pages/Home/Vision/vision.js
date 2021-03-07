import React from 'react'
import "./vision.scss"
import Vision from '../../../img/visionVision.png'

function vision() {
    return (
        <div className="vision">
            <div className="right">
        <img src={Vision} alt=""/>
            </div>
            <div className="left">
                <h1>Our Vision</h1>
                <p>is to create a business world full of prosperity, meaning, <br />
                and connection for all.</p>
            </div>
        </div>
    )
}

export default vision
