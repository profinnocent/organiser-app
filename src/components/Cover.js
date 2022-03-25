import React from 'react'
import {Link} from 'react-router-dom'
import './Cover.css'

const Cover = () => {
    return (
        <div className="cover">
            <div className="content">
                <h5>Free Delivery Anywhere</h5>
                <h1><span>Burger</span><span>King</span> </h1>
                <p>We are the undisputed KING of BURGER anywhere anytime. <br/>Our delicious variety of tasty, tongue smelting and belly warming Burgers is a delight to families all over the globe.</p>
                <Link to='/products'>Shop now now 
                <i class="fa-solid fa-arrow-right-from-bracket"></i>                </Link>
            </div>

            <div className="pix">
            </div>
        </div>
    )
}

export default Cover
