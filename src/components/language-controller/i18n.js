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
          title: {
            part1:`Hey! I'm Illari, check my`,
            part2:`Data Science <br /> Portfolio`,
          },
          main: {
            description: `Junior Data Scientist with experience as a Software Developer.<br/> Me encanta la música, los retos y aprender.`,
          },
          language: {
            label: `Language`
          },
          theme: {
            label: `Theme`
          },
          error: {
            title: `Oops!`,
            description: `Sorry, an unexpected error has occurred.`
          }
        }
      },
      es: {
        translation: {
          title: {
            part1:`Hey! Soy Illari, este es mi`,
            part2:`Portafolio de <br /> Data Science`,
          },
          main: {
            description: `Junior Data Scientist with experience as a Software Developer.<br/><br/> Love music, challenges and learning.`,
          },
          language: {
            label: `Idioma`
          },
          theme: {
            label: `Tema`
          },
          error: {
            title: `Ups!`,
            description: `Lo siento, un error imprevisto acaba de suceder`
          }
        }
      }
    }
  });

export default i18n;