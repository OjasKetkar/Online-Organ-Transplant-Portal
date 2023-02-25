import React, { useState, useEffect } from "react";
import NavBar from './NavBar'

export default function Home(){
    return (
        <>
        <NavBar/>
        <div className="home">
            This is the home page
        </div>
        </>
    )
}