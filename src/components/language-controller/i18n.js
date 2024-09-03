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
            part1:`Hey! Welcome to Illari's Portfolio`,
     
          },
          main: {
            description: `Software developer, data and learning enthusiast.<br/> My experience centers on web development.`,
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
            part1:`Hola! Soy Illari, este es mi portafolio`,
          
          },
          main: {
            description: `Software developer, entusiasta de los datos y aprender.<br/> Mi experiencia se centra en el desarrollo web. `,
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