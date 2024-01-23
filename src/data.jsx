import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaRegFileCode
} from "react-icons/fa";
import { FiFileText, FiServer, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/tech.jpg';
import Work2 from './assets/NFT_BUM.jpg';
import Work3 from './assets/Home_Automation.jpg';
import Work4 from './assets/bankingonline.jpg';
import Work5 from './assets/toolbox.jpg';

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Nikola",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hadzhiev",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years Old",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bulgarian",
  },

  {
    id: 5,
    title: "Available for work : ",
    description: "Yes",
  },

  {
    id: 6,
    title: "Address : ",
    description: "str. Han Asparuh 19, Center",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+359885255645",
  },

  {
    id: 8,
    title: "Email : ",
    description: "nikihad2012@gmail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "nikola-hadzhiev",
  },
  {
    id: 11,
    title: "Github : ",
    description: "github.com/NikolaHadzhiev",
  },
  {
    id: 12,
    title: "Langages : ",
    description: "Bulgarian, English, Spanish",
  },
  {
    id: 13,
    title: "Hobbies : ",
    description: "Video Editing, Video Games, Skiing, Ice Skating",
  },
];

export const stats = [
  {
    id: 1,
    no: "6+",
    title: "Years of <br /> Education",
  },

  {
    id: 2,
    no: "40+",
    title: "Completed <br /> Courses",
  },

  {
    id: 3,
    no: "9 000+",
    title: "Hours of<br /> Self teaching",
  },

  {
    id: 4,
    no: "20+",
    title: " Hours of <br /> Programming weekly",
  },
];

export const skills = [
  {
    id: 1,
    title: "C#",
    percentage: "90",
  },

  {
    id: 2,
    title: ".NET Core MVC",
    percentage: "70",
  },

  {
    id: 3,
    title: "C# OOP",
    percentage: "100",
  },

  {
    id: 4,
    title: "C# Razor Pages",
    percentage: "60",
  },

  {
    id: 5,
    title: "JavaScript",
    percentage: "100",
  },

  {
    id: 6,
    title: "ExpressJS",
    percentage: "80",
  },

  {
    id: 7,
    title: "ReactJS",
    percentage: "90",
  },

  {
    id: 8,
    title: "Redux, Redux Toolkit",
    percentage: "75",
  },
  {
    id: 9,
    title: "TypeScript",
    percentage: "75",
  },
  {
    id: 10,
    title: "HTML",
    percentage: "100",
  },
  {
    id: 11,
    title: "CSS",
    percentage: "100",
  },
  {
    id: 12,
    title: "SaSS",
    percentage: "90",
  },
  {
    id: 13,
    title: "SQL",
    percentage: "70",
  },
  {
    id: 14,
    title: "PostgreSQL",
    percentage: "75",
  },
  {
    id: 15,
    title: "MySQL",
    percentage: "90",
  },
  {
    id: 16,
    title: "MongoDB",
    percentage: "90",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "APR 2022 – DEC 2022",
    title: "RPA Junior Software developer <span> Next Consult </span>",
    desc: "Worked with a team of 4 RPA developers. Individual tasks - developing an automation for a process using UIPath platform. C# and VB.Net – creating custom scripts for manipulating and extracting information from websites, Excel Sheets, Word documents. Development of unattended and attended robots - Automate task - heavy, long-running workflows. Internal Company Chatbot – Used Express.js and Firebase with Dialogflow and UIPath",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "JULY 2020 - AUG 2020",
    title: "Software developer intern <span> Haemimont </span>",
    desc: "During a one month internship at the company, I worked on a demo REST API about giving specific shape files with longitude, latitude and  colors to a map and visualising it. I learned the main concepts of the  database PostgreSQL and the platform QGIS, Postman, DBeaver. My  main contributions were at the back -end side with the language C# and  the technology ASP.Net.Core.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "SEP 2023 - DEC 2023",
    title: "ReactJS Skills (Redux)",
    desc: "Self taught",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2 year-long education",
    title: "JS Skills (SoftUni Modules) <span> SoftUni </span>",
    desc: "During JS Web Developer Modules, I was taught to develop data-driven  applications with Node.js, Express.js, MongoDB. The modules provided knowledge and practical skills for the development of Single  Page Applications (SPA) using ReactJS technology,custom hooks, Context API and SaSS",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "3 year-long national program",
    title: "C# Skills (IT Career) <span> SoftUni, Technology School Electronic Systems and the Ministry of Education. </span>",
    desc: "During education, I was taught the programming essentials, object-oriented programming, data bases, algorithms, embedded and operating  systems, functional programming, web programming and general software  evelopment with C#",
  },
  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "4 months education",
    title: "ReactJS <span> Boom.dev </span>",
    desc: "Developed two big projects with ReactJS and NextJS technology",
  },
  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Sep 2021 - Present",
    title: "Bachelor of Computer Technology <span> University of Telecommunications and Post </span>",
    desc: "",
  },
  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Oct 2018 - May 2021",
    title: "Professional Qualification level 3 Software developer <span> SoftUni, Technology School Electronic Systems and the Ministry of Education.</span>",
    desc: "",
  },
  {
    id: 9,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Sep 2016 - May 2021",
    title: "Professional Qualification level 3 Office Manager <span> National Trade and Banking High School </span>",
    desc: "",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'TechHeaven',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'E-commerce',
      },
      {
        icon: <FiServer />,
        title: 'Type : ',
        desc: 'SPA with API',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#, React, Redux, SaSS',
      },
      {
        icon: <FaRegFileCode />,
        title: 'Code : ',
        desc: 'github.com',
        link : "https://github.com/NikolaHadzhiev/TechHeaven-Ecommerce"
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'techheaven.fly.dev',
        link: "https://techheaven.fly.dev"
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'NFT Auction BUM',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'NFT Auction',
      },
      {
        icon: <FiServer />,
        title: 'Type : ',
        desc: 'SPA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS, Next JS',
      },
      {
        icon: <FaRegFileCode />,
        title: 'Code : ',
        desc: 'github.com',
        link: "https://github.com/NikolaHadzhiev/NFT-Auction-Bum"
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'nft-auction-bum',
        link: "https://nft-auction-bum.vercel.app"
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Home Automation HEM',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Home Automation',
      },
      {
        icon: <FiServer />,
        title: 'Type : ',
        desc: 'SPA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ReactJS, NextJS',
      },
      {
        icon: <FaRegFileCode />,
        title: 'Code : ',
        desc: 'github.com',
        link: "https://github.com/Home-Automation-HEM-Boom-Dev/Home-Automation-HEM"
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Vitosha Bank',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Banking Website',
      },
      {
        icon: <FiServer />,
        title: 'Type : ',
        desc: 'Web Application',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ASP.Net Core, ReactJS',
      },
      {
        icon: <FaRegFileCode />,
        title: 'Code : ',
        desc: 'github.com',
        link: "https://github.com/GNA-projects/VitoshaBank-2.0"
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'GNA MultiToolbox',
    details: [
      {
        title: 'Project : ',
        desc: 'Usefull toolbox',
      },
      {
        title: 'Type : ',
        desc: 'Desktop Application',
      },
      {
        title: 'Language : ',
        desc: 'C#, WPF',
      },
      {
        title: 'Preview : ',
        desc: 'github.com',
        link: "https://github.com/GNA-projects/ITCareerProjectGNA/tree/master/ToolBoxGNA/GNA"
      },
    ],
  },
];
