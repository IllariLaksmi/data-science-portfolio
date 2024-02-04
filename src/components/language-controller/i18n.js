import React from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          main: {
            description: `Junior Data Scientist with experience as a Software Developer.<br/>
            Certified as an AWS Cloud Practitioner by AWS. Big Data - AI by Keep Coding.<br/>
            I am known for my communication skills, good sense of humor, and growth mindset.`,
          }
        }
      },
      es: {
        translation: {
          main: {
            description: `Junior Data Scientist con experiencia como software developer.<br/>
            Certificada como AWS Cloud Practitioner por AWS. Big Data -IA por Keep Coding.<br/>
            Destaco por mi comunicación, sentido del humor y mentalidad de crecimiento.`,
          }
        }
      }
    }
  });

export default i18n;