import React from "react";
import NavBar from "./NavBar";
import  "../styles/card.css"

export default function Card(){
    
    return(
        <div className="card-container">
        <div className="card">
            
            <div className="card-image">CardImage</div>

            <div className="card-organ">
                <h2> Heart</h2>
            </div>

            <div className="organ-details">
            <div className="card-hospital card_">
                Hospital : Bharti
            </div>

            <div className="card-address card_">
                Address: Pune
            </div>

            <div className="card-expiry card_">
                Expiry Date: 29/03/2025
            </div>

            <div className="card-age card_">
                Donnor Age: 25
            </div>

            <div className="card-contact card_">
                Contact: +91-5773930576
            </div>
            </div>

            <button className="cardBtn" >Request</button>

        </div>
        </div>
    )
}