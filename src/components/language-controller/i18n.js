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
          },
          sections:{
            talks: {
              title: "Talks and events",
              items: [ 
                {
                  title: "Inspiring Girls -  C.E.I.P. Infanta Elena de Utebo ",
                  description: "In commemoration of Working Women's Day, I attended the C.E.I.P. Infanta Elena de Utebo to talk to 5th and 6th grade students about programming and emerging technologies. I explained how, since the beginning of computer science, women have always been present, although our participation decreased significantly in the 80s. Technology has no gender and to contribute to it is to contribute to our future. Thank you for giving me the opportunity to listen to you and motivate you to do whatever you set out to do, whether you are boys or girls.",
                  link: "https://ceipinfantaelena.catedu.es/dia-internacional-de-la-mujer/"
                },
                {
                title: "From Theory to Reality: Real-Life Lessons",
                description: "In this talk, I will share the tools and learnings that helped me overcome my first challenges in the technological world of work. From the common technical mistakes we all face, to the essential soft skills for working effectively in a team, We will explore how to develop strategies to grow in programming while learning to manage the uncertainty and obstacles inherent to the professional path",
              }]
            },
            projects: {
              title:"Projects"
            }
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
          },
          sections:{
            talks: {
              title: "Charlas y eventos",
              items: [ 
                {
                  title: "Inspiring Girls -  C.E.I.P. Infanta Elena de Utebo ",
                  description: "En conmemoración del Día de la Mujer Trabajadora, asistí al C.E.I.P. Infanta Elena de Utebo para hablar con los alumnos de 5º y 6º de primaria sobre programación y tecnologías emergentes. Les expliqué cómo, desde los inicios de la informática, las mujeres siempre hemos estado presentes, aunque nuestra participación disminuyó significativamente en la década de los 80. La tecnología no tiene género y contribuir en ella es contribuir en nuestro futuro. Gracias por darme la oportunidad de escucharlos y motivarlos a que pueden con lo que se propongan, sean niños o niñas.",
                  link: "https://ceipinfantaelena.catedu.es/dia-internacional-de-la-mujer/"
                },
                {
                title: "De la teoría a la realidad: Lecciones de la vida real",
                description: "En esta charla, compartiré las herramientas y aprendizajes que me ayudaron a superar mis primeros desafíos en el mundo laboral tecnológico. Desde los errores técnicos comunes que todos enfrentamos, hasta las habilidades blandas esenciales para trabajar de manera efectiva en equipo, exploraremos cómo desarrollar estrategias para crecer en programación mientras aprendemos a gestionar la incertidumbre y los obstáculos propios del camino profesional",
              }
            ]
            },
            projects: {
              title:"Proyectos"
            }
          }
        }
      }
    }
  });

export default i18n;