import React from 'react'
import { motion } from 'framer-motion'
import usj from '../assets/usj.png'
import udemy from '../assets/udemy.jpg'
import microsoft from '../assets/microsoft.jpeg'
import EducationCard from '@/components/EducationCard'
import { Element } from 'react-scroll';

const educationDetails = [
    {
        img: usj,
        title: "Bachelor of Information and Communication Technology Honours",
        subTitle: "University of Sri Jayewardenepura",
        date: "2023 - 2027",
    },
    {
        img: microsoft,
        title: "GitHub Foundations",
        subTitle: "Microsoft",
        date: "Issued Oct 2025 · Expires Oct 2027",
        credentialId: "A2FDFF17BFFFF2B6",
        credentialLink: "https://learn.microsoft.com/en-us/users/thilinajayamal/credentials/a2fdff17bffff2b6",
    },
    {
        img: udemy,
        title: "Java Spring Framework 6, Spring Boot 3, Spring – Telusko",
        subTitle: "Udemy",
        date: "Issued Sep 2025",
        credentialId: "UC-17d72c37-8245-4c9b-999a-946eeae8c396",
        credentialLink: "https://www.udemy.com/certificate/UC-17d72c37-8245-4c9b-999a-946eeae8c396",
    },
]

function Education() {
    return (
        <Element name="education">
        <motion.div 
            className='max-w-6xl mx-auto px-6 xl:px-0'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className='mb-12'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className='text-3xl font-semibold mb-2'>Education & Certifications</h2>
                <p className='text-white/80 max-w-xl'>I have built a solid foundation through formal education and strengthened my expertise with certifications, gaining both theoretical knowledge and practical skills across software development and related technologies.</p>
            </motion.div>

            <div className='space-y-6'>
                {
                    educationDetails.map(({ title, img, subTitle, date, credentialId, credentialLink }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <EducationCard title={title} img={img}
                                credentialId={credentialId} credentialLink={credentialLink}
                                subTitle={subTitle} date={date}
                                isLast={educationDetails?.length - 1 == index} />
                        </motion.div>
                    ))
                }
            </div>

        </motion.div>
        </Element>
    )
}

export default Education