import React from "react";
import NavBar from "./NavBar";
import  "../styles/card.css"

export default function Card(){
    
    return(
        <div className="card-container">
        <div className="card">
            
            <div className="card-image">CardImage</div>

            <div className="card-organ">
                <h2> CardOrgan</h2>
            </div>

            <div className="organ-details">
            <div className="card-hospital card_">
                Hospital : CardHospitalName
            </div>

            <div className="card-address card_">
                Address: CardAddress
            </div>

            <div className="card-expiry card_">
                Expiry Date: Card expiry
            </div>

            <div className="card-age card_">
                Donnor Age: CardAge
            </div>

            <div className="card-contact card_">
                Contact: CardContact
            </div>
            </div>

            <button className="cardBtn" >Request</button>

        </div>
        </div>
    )
}