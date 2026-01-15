import React from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaDocker } from "react-icons/fa";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiBootstrap,
    SiNodedotjs, SiSpringboot, SiPostgresql, SiExpo,
    SiMongodb
} from "react-icons/si";
import { Laptop, Smartphone, Database, Cloud, Settings, PenTool, Terminal } from "lucide-react";

import LogoLoop from '@/components/LogoLoop';
import { Element } from 'react-scroll';
import SkillCard from '@/components/SkillCard';

const techLogos = [
    // Frontend
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiExpo />, title: "Expo", href: "https://expo.dev" },

    // Backend
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiSpringboot />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },

    // Databases
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },

    // DevOps / Cloud
    { node: <FaDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
];

const skills = [
    {
        id: "programming-languages",
        title: "Programming Languages",
        items: ["Java", "JavaScript", "TypeScript", "C#", "Python"],
        icon: <Laptop className="text-purple-500 w-6 h-6" />
    },
    {
        id: "mobile-development",
        title: "Mobile Development",
        items: ["React Native", "Expo"],
        icon: <Smartphone className="text-purple-500 w-6 h-6" />
    },
    {
        id: "frontend-development",
        title: "Frontend Development",
        items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Zustand", "Redux"],
        icon: <SiReact className="text-purple-500 w-6 h-6" />
    },
    {
        id: "backend-development",
        title: "Backend Development",
        items: ["Node.js", "Express.js", "Spring Boot"],
        icon: <Settings className="text-purple-500 w-6 h-6" />
    },
    {
        id: "databases",
        title: "Databases",
        items: ["MongoDB", "MySQL", "PostgreSQL"],
        icon: <Database className="text-purple-500 w-6 h-6" />
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        items: ["Docker", "AWS", "Linux"],
        icon: <Cloud className="text-purple-500 w-6 h-6" />
    },
    {
        id: "design",
        title: "Design",
        items: ["Figma"],
        icon: <PenTool className="text-purple-500 w-6 h-6" />
    },
    {
        id: "tools-version-control",
        title: "Tools & Version Control",
        items: ["Git", "GitHub", "Postman"],
        icon: <Terminal className="text-purple-500 w-6 h-6" />
    },
];

function Skills() {
    return (
        <Element name='skills'>
            <motion.div 
                className='max-w-6xl mx-auto px-6 xl:px-0 mt-12'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-semibold mb-2">Skills</h2>
                    <p className='text-white/80 max-w-xl'>
                        I've worked with a range of technologies in the web development world, from frontend to backend and everything in between.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4'>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <SkillCard
                                title={skill.title}
                                items={skill.items}
                                icon={skill.icon}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className='mt-24' 
                    style={{ height: '100px', position: 'relative', overflow: 'hidden' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <LogoLoop
                        logos={techLogos}
                        speed={40}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#101828"
                        ariaLabel="Technology partners"
                    />
                </motion.div>
            </motion.div>
        </Element>
    );
}

export default Skills;
