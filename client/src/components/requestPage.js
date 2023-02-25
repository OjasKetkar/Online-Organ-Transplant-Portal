import React, { useState, useEffect } from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import "../styles/request.css"
export default function RequestPage(){
    // console.log("Request")
    return(
        <>
        <NavBar />
        <div className="request">
            <Card 
            />
        </div>
        </>
    )
}