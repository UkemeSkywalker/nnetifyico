import React from "react";
import "./SidebarRow.css";


function SidebarRow({page}) {
    return (
        <div className="SidebarRow"> 
            <h2>{page}</h2>
        </div>
    )
}

export default SidebarRow
