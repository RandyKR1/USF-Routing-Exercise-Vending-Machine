import React from "react";
import {Link} from 'react-router-dom'
import "./style.css"

const Chips = () => {
    return (
        <>
        <h1>CHIPS</h1>
        <div>
            <img 
                className="snack-img"
                src="https://www.allrecipes.com/thmb/WyCC-RL8cuAEKfYHsdnzqi64iTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/73135-homestyle-potato-chips-ddmfs-0348-3x4-hero-c21021303c8849bbb40c1007bfa9af6e.jpg" alt="" />
        </div>
        <Link to="/">
            Go Back
        </Link>
    </>
    )
}

export default Chips