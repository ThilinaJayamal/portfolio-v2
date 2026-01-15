import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import cashFlowX from '../assets/cashFlowX.png';
import primeGadgets from '../assets/prime_gadgets.png';
import mern_auth from '../assets/mern_auth.jpg';
import sayHi from '../assets/sayHi.png'
import quiz from '../assets/quiz1.jpg';
import edulink from '../assets/edulink.jpg';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';
import weather from '../assets/wether.jpg';
import quizMaster from '../assets/quizMaster.png'

function Projects() {
  const projects = [
    {
      image: primeGadgets,
      title: "Prime Gadgets",
      description:
        "A modern MERN-based e-commerce platform for electronic gadgets, featuring product filtering, secure checkout, and a fully responsive UI.",
      techs: ["React", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/ThilinaJayamal/prime-gadgets",
      live: "https://prime-gadgets-3cqd.vercel.app",
    },
    {
      image: cashFlowX,
      title: "CashFlowX",
      description:
        "A full-stack finance management application for budgeting and expense tracking, with interactive dashboards and secure authentication.",
      techs: ["React", "Chart.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/ThilinaJayamal/Personal-Finance-Manager",
      live: "https://personal-finance-manager-nine.vercel.app",
    },
    {
      image: quizMaster,
      title: "Quiz Master",
      description:
        "An AI-powered quiz platform that generates quizzes from text or PDFs, providing analytics, secure authentication, and detailed results.",
      techs: [
        "React",
        "Tailwind CSS",
        "Spring Boot",
        "Spring AI",
        "Spring Security",
        "PostgreSQL",
      ],
      github: "https://github.com/ThilinaJayamal/AI-powerd-Quiz-App-Backend",
      live: "",
    },
    {
      image: edulink,
      title: "EDU-LINK",
      description:
        "A smart classroom automation system with AI-based attendance, RFID lockers, and real-time environment monitoring.",
      techs: [
        "Spring Boot",
        "IoT",
        "React Native + Expo",
        "PostgreSQL",
        "WebSocket",
        "Machine Learning",
      ],
      github: "https://github.com/USJP-FOT/EDU-LINK",
      live: "",
    },
    {
      image: sayHi,
      title: "SayHi!",
      description:
        "A real-time chat application built with the MERN stack and Socket.IO for instant messaging.",
      techs: ["React", "MongoDB", "Express.js", "Tailwind CSS", "Socket.IO"],
      github: "https://github.com/ThilinaJayamal/Real-Time-Chat-application",
      live: "",
    },
    {
      image: mern_auth,
      title: "MERN Auth",
      description:
        "A secure authentication system using JWT and bcrypt, supporting user registration, login, and protected routes.",
      techs: ["React", "MongoDB", "Express.js", "Tailwind CSS", "Nodemailer"],
      github: "https://github.com/ThilinaJayamal/MERN-Auth",
      live: "",
    },
    {
      image: weather,
      title: "Weather App",
      description:
        "A mobile weather application built with React Native and Expo, consuming real-time data from the OpenWeather API.",
      techs: ["React Native + Expo", "OpenWeather API"],
      github: "https://github.com/ThilinaJayamal/weather-app",
      live: "",
    },
    {
      image: quiz,
      title: "Quiz App",
      description:
        "A simple mobile quiz application developed using React Native and Expo.",
      techs: ["React Native + Expo"],
      github: "https://github.com/ThilinaJayamal/quiz-mobile-app",
      live: "",
    },
  ];


  const [showMore, setShowMore] = useState(false);
  const filteredProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <Element name='projects'>
      <div className="max-w-6xl mx-auto px-6 xl:px-0 mt-12">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-white mb-2">Projects</h2>
          <p className='text-white/80 max-w-xl'>Here are some of the projects I've worked on, showcasing my skills in various technologies and problem domains.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.1, delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className='flex justify-center mt-12'>
          <Button onClick={() => setShowMore((prev) => !prev)}>
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
