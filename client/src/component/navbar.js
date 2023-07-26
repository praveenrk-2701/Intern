import React from "react";
import './navbar.css';
import { Link } from "react-router-dom"
import Icc from "./ICC-MON.png"
function Navbar() {
    return (
        <div>

            <div className="sidebar">
            <img src={Icc} alt="Icc" className="Leo"></img>

                <ul className="sidebar-nav">

                    

                    <li className="sidebar-item">
                        <Link to="/Dashboard" className="sidebar-link">Dashboard</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/Twitter" className="sidebar-link">Twitter</Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/Telegram" className="sidebar-link">Telegram</Link>
                    </li>

                    
                    <li className="sidebar-item">
                        <Link to="/UPI" className="sidebar-link">UPI</Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/Youtube" className="sidebar-link">Youtube</Link>
                    </li>
                </ul>

            </div>
        </div>
    );
}
export default Navbar;