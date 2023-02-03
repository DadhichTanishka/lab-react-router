import { Link } from "react-router-dom"
import React from "react"

function NavBar(){
    return (
        <nav>
            <div><Link to="/home">Kalvium</Link></div>
            <div><Link to="/contacts">contacts</Link></div>
            <div><Link to="/about">about</Link></div>
        </nav>
    )
}
export default NavBar