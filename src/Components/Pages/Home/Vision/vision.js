import React from 'react'
import Vision from '../../../img/visionVision.png'
import "./vision.scss"

function vision() {

    return (
        <div className="vision">

            <div className="right">
                <img src={Vision} alt="Vision" />
            </div>

            <div className="left">
                <div>
                    <h1>Our Vision</h1>
                </div>

                <div>
                    <p>is to create a business world full of prosperity, meaning, </p>
                    <br />
                    <p>and connection for all.</p>
                </div>

            </div>

        </div>
    )
}

export default vision
