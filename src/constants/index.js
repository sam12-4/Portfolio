import {  voxtron, cleansweepai } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    verilog,
    iot,
    dsp,
    chat
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: verilog,
        name: "Verilog",
        type: "Hardware Design",
    },
    {
        imageUrl: iot,
        name: "IoT",
        type: "Embedded Systems",
    },
    {
        imageUrl: dsp,
        name: "Digital Signal Processing (DSP)",
        type: "Hardware & Software",
    }
];

export const experiences = [
    {
        title: "MERN Stack Developer",
        company_name: "Voxtron Solutions",
        icon: voxtron,
        iconBg: "#accbe1",
        date: "March 2023 - Present",
        points: [
            "Developing and maintaining web applications using the MERN stack.",
            "Collaborating with cross-functional teams including designers and product managers.",
            "Implementing responsive design and optimizing performance.",
            "Creating API integrations and handling database management."
        ],
    },
    {
        title: "Final Year Project - CleanSweepAI",
        company_name: "NED University",
        icon: cleansweepai,
        iconBg: "#fbc3bc",
        date: "August 2024 - Present",
        points: [
            "Developing an AI-powered autonomous cleaning robot using IoT.",
            "Creating a web dashboard with React for real-time monitoring.",
            "Integrating ESP32-CAM for live video streaming.",
            "Handling firmware development and embedded programming."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sam12-4',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sameer-hussain-ned',
    }
];

export const projects = [
    {
        iconUrl: cleansweepai,
        theme: 'btn-back-blue',
        name: 'CleanSweepAI',
        description: 'An AI-powered robotic cleaner with real-time monitoring and remote control via a web dashboard integrating iot and AI.',
        link: 'https://github.com/sam12-4/CLAIR',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Property Finder',
        description: 'A WordPress-based real estate listing tool with advanced search and filtering options.',
        link: 'https://www.property.com.au/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Inventory Management System',
        description: 'A full-stack inventory management system built with React, Node.js, and MongoDB.',
        link: 'https://github.com/sam12-4/inventory-management',
    },
    {
        iconUrl: chat, // You need to add a chat icon in your assets
        theme: 'btn-back-green',
        name: 'Octo Chat',
        description: 'A real-time chat application built using WebSockets,  Vue.js and Node.js, supporting private and group chats.',
        link: 'https://github.com/sam12-4/Inventory-Management-System-React',
    }
];
