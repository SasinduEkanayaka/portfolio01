import React, { useContext } from "react";
import { themeContext } from "../Context";

const Social = () => {

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
 
  return (
    <div className="home__social" >
        <a href="https://www.linkedin.com/" className="home__social-icon" target="_blank" style={{ color: darkMode ? "white" : "" }}>
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/" className="home__social-icon" target="_blank" style={{ color: darkMode ? "white" : "" }}>
            <i class="uil uil-github"></i>
        </a>
        <a href="" className="home__social-icon" target="_blank" style={{ color: darkMode ? "white" : "" }}>
            <i class="uil uil-twitter"></i>
        </a>
    </div>
  )
}

export default Social