import React from "react";
import {Link} from 'react-router-dom'
import "./style.css"

const Drinks = () => {
    return(
        <>
            <h1>DRINKS</h1>
            <div>
                <img 
                    className="snack-img"
                    src="https://i.redd.it/yyr6vtruhzbb1.jpg" alt="" />
            </div>
            <Link to="/">
                Go Back
            </Link>
        </>
    )
}

export default Drinks