import React from 'react'
import pixy from '../assets/teamwork1.svg'
import './Cover.css'

const Cover = () => {
    return (
        <div className="cover">
            <div className="content">
                <h5>Free Delivery</h5>
                <h1>DRONIFY LOGICTICS</h1>
                <p>We use state of the art drone technology to deliver fast and better logitics services at unbeatabl rate to our customers This has made us the undisputed market leader in Africa.</p>
                <h3>Read More...</h3>
            </div>

            <div className="pix">
                <img src={pixy} alt="pagepix" />
            </div>
        </div>
    )
}

export default Cover
