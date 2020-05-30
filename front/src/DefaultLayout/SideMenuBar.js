import React from 'react';
import {Link} from "react-router-dom";

const SideMenuBar = props => {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/tasks" className="nav-link">
                        <span className="menu-title">Tasks</span>
                        <i className="mdi mdi-account-multiple-outline menu-icon"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/leaderboard" className="nav-link">
                        <span className="menu-title">Leaderboard</span>
                        <i className="mdi mdi-account-multiple-outline menu-icon"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default SideMenuBar;