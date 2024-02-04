import React from "react";
import ThemeController from "../theme-controller";
import LanguageController from "../language-controller";

const Menu = () => {
    return (<ul className="menu menu-responsive bg-base-200 flex flex-col justify-center rounded-box">
            <li><a className="menu-link">LinkedIn</a></li>
            <li><a className="menu-link">Github</a></li>
            <li><a className="menu-link">CV</a></li>
            <li><a className="menu-link">E-mail</a></li>
            <div className="mt-10">
                <ThemeController /> 
            </div>
            <div className="mt-3">
                <LanguageController /> 
            </div>
            
        
  </ul>)
}
export default Menu;