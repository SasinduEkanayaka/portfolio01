import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../Context";

const Togglee = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  
  return (
    <div 
      className="toggle" 
      onClick={handleClick}
      data-theme={darkMode ? "dark" : "light"}
      role="button"
      tabIndex={0}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "4px" } : { right: "4px" }}
      ></div>
    </div>
  );
};

export default Togglee;
