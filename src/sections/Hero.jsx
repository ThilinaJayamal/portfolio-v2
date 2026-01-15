import React from 'react'
import TextType from '@/components/TextType'
import { GoDownload } from "react-icons/go";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Element } from 'react-scroll';
import Particles from '../components/Particles';

function Hero() {
    return (
        <Element name='home'className='relative'>
            <div style={{ width: '100%', height: '100vh', position: 'absolute',zIndex:20 }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className='w-full min-h-screen flex items-center justify-center sm:px-0 px-4'>
                <div>
                    <div className='text-white flex flex-col sm:items-start items-center justify-center
                 w-full min-h-screen'>
                        <h1 className='text-5xl xl:text-6xl font-bold mb-3 z-30 sm:text-left text-center'>
                            <span className='text-2xl font-semibold text-white/70'>Hi, I’m </span><br />
                            Thilina Jayamal
                        </h1>
                        <TextType
                            className="text-xl md:text-3xl text-white mb-3 z-30"
                            text={[
                                "Web Developer",
                                "Mobile Application Developer",
                                "Full-Stack Developer",
                            ]}
                            typingSpeed={100}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            cursorClassName="text-white"
                        />

                        <p className='z-30 text-lg max-w-xl text-white/80 leading-8 mb-6 sm:text-left text-center'>
                            <RiDoubleQuotesL className='inline -mt-4' />{" "}
                            I’m a software engineering student passionate about creating clean,
                            efficient code and impactful software solutions.{" "}<RiDoubleQuotesR className='inline -mt-4' />
                        </p>

                        <a href="/ThilinaJayamal.pdf" download className='z-30'>
                            <button className='flex gap-4 items-center backdrop-blur bg-blue-200/10 text-white border
                        border-white/20 font-semibold px-6 py-3 rounded-4xl cursor-pointer hover:bg-blue-200/20'>
                                <GoDownload className='text-xl' /> <span>Download Resume</span>
                            </button>
                        </a>


                    </div>

                </div>
            </div>

        </Element>
    )
}

export default Hero