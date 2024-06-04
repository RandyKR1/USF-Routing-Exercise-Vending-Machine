import React from "react";
import {Link} from 'react-router-dom';
import "./style.css"

const VendingMachine = () => {
    return(
        <>
        <div className="container">
            <h1>Vending Machine!</h1>
            <div className="link-ctnr">
                <Link to="/chips">
                    <h2>Chips</h2>
                </Link>
                <Link to="/drinks">
                    <h2>Drinks</h2>
                </Link>
                <Link to="/chocolate">
                    <h2>Chocolate</h2>
                </Link>
            </div>
        </div>

        </>
    )
}

export default VendingMachine