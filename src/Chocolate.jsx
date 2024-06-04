import React from "react";
import {Link} from 'react-router-dom'
import "./style.css"

const Chocolate = () => {
    return(
        <>
            <h1>CHOCOLATE</h1>
            <div>
                <img 
                    className="snack-img"
                    src="https://elavegan.com/wp-content/uploads/2023/01/homemade-chocolate-bars.jpg" alt="" />
            </div>
            <Link to="/">
                Go Back
            </Link>
        </>
    )
}

export default Chocolate