import React from "react";
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';
import logo from "./images/Nnetify-Text.png";
function Sidebar() {
    return (
        <div className="sidebar">
                <div className="SidebarComp">
                <div className="sidebar__logo">
                    <img src={logo} alt=""/>
                </div>
                <SidebarRow page='1' className="active__page">  
                </SidebarRow>
                <SidebarRow page='2'/>  
                <SidebarRow page='3'/>  
            </div>
        </div>
    );
}

export default Sidebar
