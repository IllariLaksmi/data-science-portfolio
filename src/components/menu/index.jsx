import React from "react";
import ThemeController from "../theme-controller";
import LanguageController from "../language-controller";
//import { Trans } from "react-i18next";
import i18n from "../language-controller/i18n";
import links from "../../data/links.json"


const Menu = () => {
    return (<ul className="menu menu-responsive bg-base-200  flex flex-row  justify-center rounded-box">
    
        <div className="flex flex-row justify-center flex-wrap">
            <li><a target="_blank" href={links?.[i18n.language]?.linkedin} className="menu-link">LinkedIn</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.github} className="menu-link">Github</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.cv} className="menu-link">CV</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.email} className="menu-link">E-mail</a></li>
            <ThemeController />
            <LanguageController />
        </div>
     
    </ul>)
}
export default Menu;