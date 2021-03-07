import React from 'react'
import "./vision.scss"
import Vision from '../../../img/visionVision.png'

function vision() {
    return (
        <div className="vision">

            <div className="right">
                <img src={Vision} alt="" />
            </div>

            <div className="left">
                <div>
                    <h1>Our Vision</h1>
                </div>

                <div>
                    <p>is to create a business world full of prosperity, meaning, <br />
                and connection for all.</p>
                </div>

            </div>

        </div>
    )
}

export default vision
