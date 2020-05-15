import React from 'react';
import { useLocation } from "react-router-dom";

export default function NoMatch() {
    let location = useLocation();
    return (
        <div style={{textAlign: "center"}}>
            <h2>
                No Such Page Found for <code>{location.pathname}</code>
            </h2>
            <h1> {"<" } 404 {">"} </h1>
        </div>
    )
}