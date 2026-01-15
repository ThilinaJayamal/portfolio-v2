import Button from '@/components/Button'
import React from 'react'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

function Contact() {
    return (
        <Element name='contact'>
            <motion.div 
                className='max-w-6xl mx-auto px-6 xl:px-0 mt-32 flex flex-col justify-center items-center pb-12'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2 
                    className='font-bold text-5xl text-white/90'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p 
                    className='text-lg text-white/70 text-center max-w-xl mt-6 leading-7'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
                    Feel free to reach out if you'd like to work together or discuss a project idea.
                </motion.p>

                <motion.a 
                    href="mailto:thilinajayamal271@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button className={"mt-12"}>Contact Me</Button>
                </motion.a>

            </motion.div>
        </Element>
    )
}

export default Contact