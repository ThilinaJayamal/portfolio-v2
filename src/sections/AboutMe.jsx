import React from 'react'
import { motion } from 'framer-motion'
import pro from "../assets/upload.png"
import ScrollVelocity from '@/components/ScrollVelocity'
import Button from '@/components/Button'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Element } from 'react-scroll'


function AboutMe() {
    return (
        <Element name='about'>
            <motion.div 
                className='max-w-6xl mx-auto px-6 xl:px-0'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <div className='mb-6'>
                    <h2 className='text-3xl font-semibold mb-2 text-white'>About Me</h2>
                  <p className='text-white/80 max-w-xl'>A brief introduction to my journey, skills, and passions in software development.</p>
                </div>

                <div className='grid grid-cols-1  xl:grid-cols-2'>
                    <div className='space-y-4 text-white/70 order-2 xl:order-1'>

                        <p className='leading-7 text-lg' style={{ wordSpacing: '0.25rem' }}>
                            I’m <span className='font-medium text-white/90'>Thilina Jayamal</span>, a <span className='font-medium text-white/90'>
                            software engineering student</span> at university of Sri Jayewardenepura with a passion for building
                            <span className='font-medium text-white/90'> modern, user-friendly web and mobile applications. </span>
                            I enjoy turning ideas into <span className='font-medium text-white/90'>clean and efficient code </span>
                            and am constantly learning and improving my skills, with
                            the goal of creating <span className='font-medium text-white/90'>impactful software solutions</span> that solve
                            real-world problems.
                        </p>

                        <div className='flex items-center flex-col sm:flex-row gap-6 mt-8'>
                            <div className='flex flex-col rounded-md w-40 h-24 gap-1 text-purple-400 bg-purple-900/40 backdrop-blur justify-center items-center'>
                                <p className='text-4xl font-bold'>2+</p>
                                <p className='text-base'>Experience</p>
                            </div>

                            <div className='flex flex-col rounded-md w-40 h-24 gap-1 text-purple-400 bg-purple-900/40 backdrop-blur justify-center items-center'>
                                <p className='text-4xl font-bold'>5+</p>
                                <p className='text-base'>Projects</p>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center gap-6 mt-8'>
                            <a href="https://www.linkedin.com/in/thilina-jayamal-b70160213" target="_blank">
                                <Button>
                                    LinkedIn<FaLinkedin className='text-3xl inline ml-4' />
                                </Button>
                            </a>
                            <a href="https://github.com/ThilinaJayamal" target="_blank">
                                <Button>
                                    GitHub<FaGithub className='text-3xl inline ml-4' />
                                </Button>
                            </a>
                        </div>


                    </div>

                    <div className='flex items-start justify-center order-1 xl:order-2'>

                        <div className='size-80 rounded-md relative my-12 xl:my-0 group cursor-pointer'>
                            <img src={pro} alt="" className='relative size-80 rounded-md 
                            z-20 grayscale-100 group-hover:grayscale-0 transition-all duration-300' />
                            <div className='absolute top-3 left-3 group-hover:translate-2
                            size-80 rounded-md border-2 border-white z-10 transition-all duration-300'></div>
                        </div>

                    </div>
                </div>
            </motion.div>

            <div className='my-24'>
                <ScrollVelocity
                    texts={["Full-Stack Developer", "Mobile & Web"]}
                    velocity={80}
                    className="custom-scroll-text"
                />
            </div>
        </Element>
    )
}

export default AboutMe