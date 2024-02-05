import React from "react";
import ThemeController from "../theme-controller";
import LanguageController from "../language-controller";
import { Trans } from "react-i18next";
import i18n from "../language-controller/i18n";
import links from "../../data/links.json"


const Menu = () => {
    return (<ul className="menu menu-responsive bg-base-200 h-1/4 md:h-full md:w-1/6 flex flex-row md:flex-col justify-center rounded-box">
        <div className="flex flex-col justify-center w-1/3">
            <p className="md:mb-10 border border-dashed border-primary border-spacing-2 w-100  md:w-32 p-3 ">
                <Trans i18nKey="main.description">
                    Junior Data Scientist with experience as a Software Developer. <br /> Love music, challenges and learning.
                </Trans>
            </p>
        </div>
        <div className="flex flex-col justify-center">
            <li><a target="_blank" href={links?.[i18n.language]?.linkedin} className="menu-link">LinkedIn</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.github} className="menu-link">Github</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.cv} className="menu-link">CV</a></li>
            <li><a target="_blank" href={links?.[i18n.language]?.email} className="menu-link">E-mail</a></li>
        </div>
        <div className="flex flex-col">
            <div className="mt-10">
                <ThemeController />
            </div>
            <div className="mt-3">
                <LanguageController />
            </div>
        </div>
    </ul>)
}
export default Menu;