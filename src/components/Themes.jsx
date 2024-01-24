import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./Themes.css";
import { useEffect, useState } from "react";

const getStorageColor = () => {
    let color = document.documentElement.style.getPropertyValue('--primary-color');
    
    if(localStorage.getItem("color")) color = localStorage.getItem("color");

    return color
}

const getStorageTheme = () => {
    let theme = "light-theme";
    
    if(localStorage.getItem("theme")) theme = localStorage.getItem("theme");

    return theme
}

const Themes = () => {
  
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => setColor(color);
  const toggleTheme = () => theme.includes("light") ? setTheme("dark-theme") : setTheme("light-theme"); 
   
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
      <div className={`${showSwitcher ? "show-switcher" : ""} style__switcher`}>
        <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
          <FaCog />
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
          {theme.includes("light") ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style__switcher-title">Style Switcher</h3>
        <div className="style__switcher-items">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor={changeColor} />;
          })}
        </div>

        <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>&times;</div>
      </div>
  );
};

export default Themes;
