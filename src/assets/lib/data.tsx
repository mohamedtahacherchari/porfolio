import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GoHome, GoMail, GoPerson, GoProject, GoStack } from "react-icons/go";
import adobexdicon from "../../assets/icons/adobexdicon.svg";
//import angularicon from "../../assets/icons/angularicon.svg";
import ansibleicon from "../../assets/icons/ansibleicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import caricon from "../../assets/icons/car-icon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
//import gitlabicon from "../../assets/icons/gitlabicon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import jenkinsicon from "../../assets/icons/jenkinsicon.svg";
import kubernetesicon from "../../assets/icons/kubernetesicon.svg";
import laravelicon from "../../assets/icons/laravelicon.svg";
import linuxicon from "../../assets/icons/linuxicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
//import mysqlicon from "../../assets/icons/mysqlicon.svg";
import nestjsicon from "../../assets/icons/nestjsicon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
//import springbooticon from "../../assets/icons/springbooticon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import profilepicture from "../img/bg-image-heni-sopra.jpeg";
 import nginxicon from "../../assets/icons/nginx.svg"
 import vpsUbuntu from "../img/vps-ubuntu.png"
 import reduxicon from "../../assets/icons/reduxicon.svg"
 import mui from "../../assets/icons/muiicon.svg"
 import express from "../img/express.png"
 import bootstrapicon from "../../assets/icons/bootstrapicon.svg"
 import giticon from "../../assets/icons/giticon.svg"
 import githubicon from "../../assets/icons/githubicone.svg"
 export const headerIntroData = {
  title: {
    fr: "Bonjour, Je suis Mohamed Taha Cherchari ",
    en: "Hi, I'm Mohamed Taha Cherchari",
  },
  subtitle: {
    fr: "Ingénieur en Informatique  | Développeur Fullstack javascript",
    en: " Software Engineer | Fullstack JavaScript Developer",
  },
  description: {
    fr: "Je suis Mohamed Taha Cherchari Ingénieur en informatique passionné, spécialisé dans les technologies MERN (MongoDB, Express, React, Node.js) et NestJS/TypeScript. J'interviens dans la conception d'applications web performantes, évolutives et adaptées aux besoins des entreprises tunisiennes. Rigoureux, orienté résultats et sensible aux enjeux du marché local, je m'engage à livrer des solutions innovantes, de qualité et à forte valeur ajoutée.",
    en: "I am Mohamed Taha Cherchari, Passionate Computer Engineer specialized in MERN technologies (MongoDB, Express, React, Node.js) and NestJS/TypeScript. I design high-performance, scalable, and user-centered web applications. Detail-oriented and results-driven, I am committed to delivering high-quality solutions tailored to the needs of the local market.",
  },
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Développeur Web Full Stack JavaScript",
    title_EN: "Full Stack JavaScript Developer",
    company: "LNR Finance",
    date: {
      fr:  "Depuis août 2024",
      en:  "Since August 2024 ",
    },
    description: [
      " Conception d'architectures web évolutives (front-end et back-end) et sécurisation des API RESTful.",
      " Optimisation de l'infrastructure back-end, réduisant les coûts de 30%.",
      "Mise en place d'un environnement de production VPS avec Nginx (99,9% de disponibilité).",
    ],
    description_EN: [
      " Designed scalable web architectures (front-end and back-end) and secured RESTful APIs.",
      " Optimized back-end infrastructure, reducing costs by 30%.",
      "Deployed a production environment on VPS with Nginx (99.9% uptime).",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "REST Api", icon: apiicon },
       { name: "Nest.js", icon: nestjsicon },
      { name: "React", icon: reacticon },
       { name: "Redux", icon: reduxicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Express js", icon: express },
      { name: "Mongo DB ", icon: mongodbicon },
      {name: "Javascript", icon: javascripticon} ,
      { name: "typescript", icon: typescripticon} ,
      { name: "tailwincss", icon: tailwindcssicon} ,
      {name : "nginx", icon : nginxicon},
      {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Développeur Web Full Stack JavaScript",
    title_EN: "Full Stack JavaScript Developer",
    company: "Greenlinks",
    date: {
      fr: "Juillet 2022 - Août 2024 ",
      en: "July 2022-  August 2023",
    },
    description: [
      "Mise en place d'architectures MERN stack évolutives.",
      "Création de solutions de gestion et de tableaux de bord interactifs (Chart.js).",
      "Mise en place de fonctionnalités en temps réel et notifications par email.",
      "Optimisation front-end et back-end, réduisant les temps de chargement de 60%.",
      "Mise en place d'un environnement de production VPS avec Nginx (99,9% de disponibilité).",

    ],
    description_EN: [
      "Implemented scalable MERN stack architectures.",
      "Developed management solutions and interactive dashboards (Chart.js).",
      "Integrated real-time features and automated email notifications.",
      " Optimized front-end and back-end performance, reducing loading times by 60%.",
      "Deployed a production environment on VPS with Nginx (99.9% uptime).",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "REST Api", icon: apiicon },
       { name: "Material UI", icon: mui },
      { name: "Mongo DB ", icon: mongodbicon },
      { name: "Express js", icon: expressicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Redux", icon: reduxicon },
     { name: "Node.js", icon: nodejsicon },
     { name: "typescript", icon: typescripticon} ,
     {name : "nginx", icon : nginxicon},
     {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,

    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Développeur Web Full Stack JavaScript",
    title_EN: "Full Stack JavaScript Developer",
    company: "GoMyCode",
    date: {
      fr: "Janvier 2022 - Juillet 2022",
      en: "January 2022 - July 2022",
    },
    description: [
      "Gestion d'applications web à fort trafic, avec 500+ utilisateurs dès le lancement.",
      " Mise en place d'une architecture back-end scalable, capable de traiter 1000+ requêtes simultanées.",
      "Intégration de paiements sécurisés et gestion avancée des médias.",
    ],
    description_EN: [
      " Managed high-traffic web applications with 500+ users at launch.",
      " Built a scalable back-end architecture capable of handling 1000+ concurrent requests.",
      " Integrated secure payment systems and advanced media management.",
   
    ],
    technologies: [
     { name: "Html", icon: htmlicon },
     { name: "CSS", icon: cssicon },
     { name: "REST Api", icon: apiicon },
      { name: "Bootstrap", icon: bootstrapicon },
     { name: "Express js", icon: express },
     { name: "Mongo DB ", icon: mongodbicon },
     { name: "JavaScript", icon: javascripticon },
     { name: "React", icon: reacticon },
     { name: "Redux", icon: reduxicon },
    { name: "Node.js", icon: nodejsicon },
    {name : "nginx", icon : nginxicon},
    {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },

  {
    title: "Développeur Web Full Stack JavaScript : Application de Facturation ",
    title_EN: " Full Stack JavaScript Developer : Invoicing Application ",
    company: "Personal Project :  Application de Facturation",
    date: {
      fr: "Janvier 2025 - Présent",
      en: "January 2025 - Present",
    },
    description: [
      "Développement d'une application de facturation complète avec le stack MERN.",
      "Création d'interfaces utilisateur intuitives avec React.js et Material-UI.",
      "Mise en place d'une gestion d'état centralisée avec Redux.",
      "Utilisation de MongoDB et Mongoose pour la gestion efficace des schémas de données.",
      "Gestion des routes et middleware spécifiques avec Express.",
      "Intégration d'un système de chat en temps réel avec Socket.io.",
      "Création de tableaux de bord interactifs avec Chart.js pour la visualisation des données.",
      "Génération de PDF et envoi automatisé de factures par e-mail avec Node Mailer et html2pdf.",
      "Déploiement optimisé sur un VPS Ubuntu avec Nginx.",
    ],
    description_EN: [
      "Developed a full-featured invoicing application using the MERN stack.",
      "Built modern and user-friendly interfaces with React.js and Material-UI.",
      "Implemented centralized state management with Redux.",
      "Used MongoDB and Mongoose for efficient data schema management.",
      "Handled modular routes and middleware with Express.",
      "Integrated real-time chat system using Socket.io.",
      "Created interactive dashboards with Chart.js to visualize invoicing data.",
      "Automated invoice generation and email sending with Node Mailer and html2pdf.",
      "Deployed the application on an optimized Ubuntu VPS with Nginx.",
    ],
    technologies: [
      { name: "HTML5", icon: htmlicon },
      { name: "CSS3", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React.js", icon: reacticon },
    //  { name: "Material-UI", icon: materialuiicon },
      { name: "Redux", icon: reduxicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Express.js", icon: expressicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Material UI", icon: mui },
      { name: "Nginx", icon: nginxicon },
      {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,

    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#8EB1C7", // une couleur professionnelle et tech
    },

  },

   {
    title: "Développeur Full Stack JavaScript – Plateforme de Formation",
    title_EN: "Fullstack JavaScript Developer – Training Platform",
    company: "Projet Personnel",
    date: {
      fr: "Septembre 2023 - Février 2024",
      en: "September 2023 - February 2024",
    },
    location: {
      fr: "La Marsa, Tunis, Tunisie – Sur site",
      en: "La Marsa, Tunis, Tunisia – On-site",
    },
    description: [
      "Conception et développement d'une plateforme de formation avec React.js et Node.js (Express).",
      "Utilisation de MongoDB et Mongoose pour la gestion efficace des données liées aux formations.",
      "Mise en œuvre de Redux pour assurer une gestion cohérente de l'état global de l'application.",
      "Gestion modulaire des routes et middleware avec Express.",
      "Création d'interfaces utilisateur conviviales avec des catégories distinctes pour chaque formation et des URL dédiées pour les inscriptions.",
      "Déploiement optimisé sur VPS Ubuntu avec Nginx.",
      "Utilisation de Node Mailer pour l'envoi automatique des informations d'inscription des candidats aux administrateurs.",
    ],
    description_EN: [
      "Designed and developed a training platform using React.js and Node.js (Express).",
      "Handled training-related data efficiently using MongoDB and Mongoose.",
      "Implemented Redux to ensure consistent state management across the application.",
      "Built modular routes and middleware tailored for the platform with Express.",
      "Created user-friendly interfaces with distinct training categories and dedicated registration URLs.",
      "Optimized deployment on Ubuntu VPS using Nginx for performance.",
      "Automated sending of candidate registration info to admins using Node Mailer.",
    ],
    technologies: [
      { name: "HTML5", icon: htmlicon },
      { name: "CSS3", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React.js", icon: reacticon },
      { name: "Redux", icon: reduxicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Express.js", icon: expressicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Material UI", icon: mui },
      { name: "Nginx", icon: nginxicon },
      {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#B6D7A8", // couleur apaisante pour l'éducation
    },
  } ,
   {
  title: "Développeur Full Stack JavaScript – Plateforme Caritative",
  title_EN: "Fullstack JavaScript Developer – Charity Platform",
  company: "Projet Personnel",
  date: {
    fr: "Mars 2024 - Présent",
    en: "March 2024 - Present",
  },
  location: {
    fr: "Tunis, Tunisie",
    en: "Tunis, Tunisia",
  },
  description: [
    "Développement d'une plateforme caritative avec React.js et Node.js (Express).",
    "Optimisation de la gestion des données avec MongoDB et Mongoose.",
    "Mise en œuvre d'un routage modulaire spécifique à chaque module de la plateforme avec Express.",
    "Conception d'interfaces utilisateur accessibles et attrayantes avec Material-UI.",
    "Intégration d’un calendrier interactif pour la gestion des événements caritatifs.",
  ],
  description_EN: [
    "Developed a charity platform using React.js and Node.js (Express).",
    "Optimized data management with MongoDB and Mongoose.",
    "Implemented modular routing for each section of the platform using Express.",
    "Designed intuitive and visually appealing user interfaces with Material-UI.",
    "Integrated an interactive calendar to manage charity events.",
  ],
  technologies: [
    { name: "HTML5", icon: htmlicon },
    { name: "CSS3", icon: cssicon },
    { name: "JavaScript", icon: javascripticon },
    { name: "React.js", icon: reacticon },
    { name: "Redux", icon: reduxicon },
    { name: "Node.js", icon: nodejsicon },
    { name: "Express.js", icon: expressicon },
    { name: "MongoDB", icon: mongodbicon },
    { name: "Material UI", icon: mui },
    { name: "Nginx", icon: nginxicon },
    {name: "VPS - Ubuntu ", icon: vpsUbuntu} ,
  ],
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
    projectcolor: "#FFD966", // couleur chaleureuse pour l'associatif
  },
}
] as const;

export const liveTickerData = {
  content: {
    fr: "Pour plus de détails, veuillez consulter mon CV et mon profil LinkedIn",
    en: "For more details, please refer to my CV and LinkedIn profile",
  },
} as const;

export const skillsDataWeb2 = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataWeb = [
  {
    skillsTitle: "Front-end",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: reduxicon,
        color: "#9370db",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "Material-ui",
        hash: "#material-ui",
        icon: mui,
        color: "#38B2AC",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#38B2AC",
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;
export const skillsDataDesign2 = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "DevOps",
    skills: [
      { title: "Nginx", hash: "#Nginx", icon: nginxicon, color: "#008020" },
      {
        title: "Ubuntu Server",
        hash: "#Ubuntu Server",
        icon: vpsUbuntu,
        color: "#ff7f00 ",
      },
      { title: "Docker", hash: "#Docker", icon: dockericon, color: "#00C4CC" },
      { title: "Git", hash: "#Git", icon: giticon, color: "#ff7f00 " },
      { title: "Github", hash: "#Github", icon: githubicon, color: "black" },
    ],
  },
] as const;
export const skillsDataDevOps = [
  {
    skillsTitle: "Back-end",
    skills: [
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Nest.js",
        hash: "#Nest.js",
        icon:  nestjsicon,
        color: "#f00020",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
     
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "Work Methodologies",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const; 

export const navLinks = [
  { fr: "Accueil", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Expériences", en: "Experiences", hash: "#projects", icon: GoProject },
  { fr: "À propos de moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  {
    fr: "© 2025 Heni LOUDHAIEF | Tous droits réservés",
    en: "© 2025 Heni LOUDHAIEF | All Rights Reserved",
    hash: "#",
    data: null, // No specific component for this
  },
] as const;

export const sideBarRightMail = {
  link: "mailto:al-chercheri@live.fr",
  text: "al-chercheri@live.fr",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mohamed-taha-cherchari-19318b176/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/mohamedtahacherchari",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:al-chercheri@live.fr",
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: "https://drive.google.com/file/d/1LmVHNeisiG481lkGtoT0sUILHlVFBomL/view?usp=drive_link",
    icon: FiFileText,
    altimgname: "cv",
  },
] as const;

export const quotesData = [
  {
    fr: `"Il n'est pas du tout important de réussir du premier coup. Ce qui compte vraiment, c'est de réussir au dernier moment."`,
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    fr: `"Le web est comme une toile, et le code est la peinture. Créez votre chef-d'œuvre."`,
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "À propos de moi",
  title_EN: "About me",
  description: "Quelques extraits de code à propos de moi",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Les circuits de mon cœur",
      description:
        "Lorsque je ne suis pas dans le monde numérique, je parcours le fascinant univers de la technologie et du matériel. Les circuits et les soudures sont pour moi comme des pièces de puzzle d'une aventure excitante.",
      icon: hardwareicon,
    },
    {
      title: "Sur la voie rapide de la vie",
      description:
        "En dehors du code, j'aime me retrouver sur la voie rapide – au sens propre. Les voitures sont ma passion, et j'apprécie de rouler sur des routes inconnues au volant de machines puissantes.",
      icon: caricon,
    },
    {
      title: "La curiosité comme devise de vie",
      description:
        "Mon parcours de développeur web n'est qu'une partie de mon chemin de vie. Je vis selon la devise que l'aventure commence vraiment lorsque l'on laisse derrière soi ce qui est familier. Découvrir de nouveaux endroits est ma forme d'inspiration créative.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Veuillez m'envoyer un message, et je vous répondrai dans les plus brefs délais.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Nom",
        en: "Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "E-mail",
        en: "E-mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez entrer votre email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Sujet",
        en: "Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer un sujet",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Message",
      en: "Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veuillez entrer votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyer",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "Je consens à ce que Heni LOUDHAIEF utilise mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Heni LOUDHAIEF may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous confirmez avoir lu la politique de confidentialité.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct va s'ouvrir sous peu. Serveurs en cours de démarrage...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Merci pour votre email. Je reviendrai vers vous dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible.",
  },
  failedEmailSent: {
    fr: "🦄 Malheureusement, l'envoi de votre e-mail a échoué. Veuillez réessayer plus tard.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later.",
  },
  failedValidationName: {
    fr: "Veuillez entrer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
