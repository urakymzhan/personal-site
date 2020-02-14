import React from "react";
import '../App.css';
import forward from '../assets/arrowRight.png'
 
const projectsStyle = {
   textAlign: "center",
}
const p1Style = {
    border: "4px solid #333333",
    borderRadius: "5px",
    width: "50%",
    margin: "0 auto",
    padding: "10px"
}
const forwardStyle = {
    width: "20px",
    height: "20px"
}
const aStyle = {
    fontSize: "20px",
    color: "gray"
}
function BlogOne() {
    return (
        <div style={projectsStyle}className="projects">
            <div class="p1" style={p1Style}>
                <a style={aStyle} href="https://nba-pelicans.herokuapp.com/"> 
                    NBA Scores and News {" "}
                    <img style={forwardStyle} src={forward} alt="forwarding" />
                </a>
            </div>
            
        </div>
  );
}

export default BlogOne;