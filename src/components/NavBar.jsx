import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
   return (
      <div className="navbar">
         <span className="links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
         </span>
         <span className="hiUser">hi, {props.userName}</span>
      </div>
   );
};
export default NavBar;
