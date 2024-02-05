
import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const LanguageController = () => {
    const { t, i18n } = useTranslation();
    return (<div className="flex flex-col ms-3">
        <label className="mb-2"><Trans i18nKey="language.label"> Language </Trans></label>
        <select className="select select-bordered select-sm w-full max-w-xs" onChange={(e) => {
            i18n.changeLanguage(e.target.value); window.location.reload(false);
        }} value={i18n.resolvedLanguage}>
            <option value={"en"}> English</option>
            <option value={"es"} > Español</option>
        </select>
    </div>)
}
export default LanguageController;