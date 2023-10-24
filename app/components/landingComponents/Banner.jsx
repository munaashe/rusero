'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import denis from '@/app/assets/denis.png'
import Image from 'next/image';
import Link from 'next/link';
import { GitHub, WhatsApp, Telegram, LinkedIn } from '@mui/icons-material'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='bg-[#F1FAFF]'>
            <div className='max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start px-8 mx-auto flex flex-col lg:flex-row items-start'>
                {/* Left Col */}
                <div className='flex flex-col w-full lg:w-6/12 justify-center pt-32 items-start text-center lg:text-left mb-5 md:mb-0'>
                    <h1
                        data-aos='fade-right'
                        data-aos-once='true'
                        className='my-4 text-5xl font-bold leading-tight text-[#2196F3] text-darken'
                    >
                        <span className='text-[#E86E36]'>Addressing</span> Tech Challenges is now much easier
                    </h1>
                    <p
                        data-aos='fade-down'
                        data-aos-once='true'
                        data-aos-delay='300'
                        className='leading-normal text-2xl mb-8'
                    >
                        SiDesigned brings solutions to life through code, music and decaf coffee.
                    </p>
                    <div
                        data-aos='fade-up'
                        data-aos-once='true'
                        data-aos-delay='700'
                        className='w-full md:flex items-center justify-center lg:justify-start md:space-x-5'
                    >
                        <Link target='_blank' href='https://calendly.com/munaashe'>
                            <button
                                className='lg:mx-0 bg-[#E86E36] text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out'
                            >
                                Schedule a Call
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Right Col */}
                <div className='w-full lg:w-6/12 relative' id='girl'>
                    <Image
                        data-aos='fade-up'
                        data-aos-once='true'
                        className='w-8/12 mx-auto 2xl:-mb-20 my-auto'
                        src={denis}
                        alt='Denis Siduna'

                    />
                    <Link href='https://linkedin.com/in/munaashe'>
                        <div
                            data-aos='fade-up'
                            data-aos-delay='300'
                            data-aos-once='true'
                            className='absolute top-0 right-0 mt-64 bg-white rounded-2xl flex justify-evenly items-center gap-4 p-2'
                        >
                            <div className='font-semibold ml-4 text-[#0072b1]'>
                                Lets Connect
                            </div>

                            <LinkedIn
                                sx={{
                                    fontSize: '40px',
                                    color: '#0077b5'
                                }}
                            />
                        </div>
                    </Link>
                    <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true"
                        className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating bg-white px-4 py-2 rounded-xl">
                        <Link href='https://t.me/munaashe' target='_blank'>
                            <Telegram
                                sx={{
                                    fontSize: '40px',
                                    color: '#0088cc'
                                }}
                            />
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true"
                        className="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating">
                        <Link href='https://github.com/munaashe'>
                            <div className='flex justify-evenly items-center bg-white rounded-xl px-4 py-2 gap-2'>
                                <div className='font-semibold ml-4 text-black'>
                                    Lets Code
                                </div>
                                <GitHub
                                    sx={{
                                        fontSize: '40px',
                                        color: '#171515'
                                    }}
                                />
                            </div>
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" data-aos-once="true"
                        className="absolute bottom-20 md:bottom-48 lg:bottom-32 -right-6 lg:right-8 floating-4">
                        <Link href='https://wa.me/27685229708'>
                            <WhatsApp
                                sx={{
                                    fontSize: '40px',
                                    color: '#4fce5d'
                                }}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner


