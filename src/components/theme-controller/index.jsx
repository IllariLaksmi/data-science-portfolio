import React from 'react';
import { Trans } from 'react-i18next';

const ThemeController = () => {

    const themeValue = (opposite = false) => {
        let theme = localStorage.getItem("theme")
        if (theme) {
            let selectedTheme = theme == "pastel" ? "mytheme" : "pastel";
            if (opposite) {
                return selectedTheme == "pastel" ? "mytheme" : "pastel";
            }
            return selectedTheme
        } else {
            const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

            let selectedTheme = darkThemeMq.matches ? "pastel" : "mytheme";
            if (opposite) {
                return selectedTheme == "pastel" ? "mytheme" : "pastel";
            }
            return selectedTheme
        }
    }

    const setThemeValue = (e) => {
        localStorage.setItem("theme", e.target.checked ? themeValue() : themeValue(true))
    }

    return (<div className="flex flex-row m-2">
        <label className="me-2"><Trans i18nKey="theme.label"> Theme </Trans></label>
        <input type="checkbox" value={themeValue()} className="toggle theme-controller" onChange={(e) => { setThemeValue(e) }} />
    </div>)
}
export default ThemeController;