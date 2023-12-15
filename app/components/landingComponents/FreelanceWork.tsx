import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ernoca from '../../assets/ernoca.jpg'
import internetSol from '../../assets/internetsol.jpg'
import procad from '../../assets/procad.png'
import skyangel from '../../assets/skyangel.jpg'

const FreelanceWork = () => {
    return (
        <div className='px-4'>
            <div data-aos="zoom-in" className="mt-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Latest Freelance <span className="text-yellow-500">Projects</span></h1>
                <p className="text-gray-500 my-5">A few of the software dev projects undertaken in the past few months</p>
            </div>
            <div data-aos="zoom-in-up" className="my-14 flex flex-col lg:flex-row lg:space-x-20">
                <div className="lg:w-6/12">
                    <Image
                        className="w-full mb-6 rounded-xl"
                        src={ernoca}
                        alt=""
                    />
                    <h1 className="text-gray-800 font-semibold my-3 text-xl">Ernoca - New and Pre-Owned Cars and Spares Digital Market Place</h1>
                    <p className="text-gray-500 mb-3">Design and dev of the Ernoca app, for selling new and preowned vehicles and accessories. Used Next.js on the UI, with Redux Toolkit Query and Tailwind. Firebase for Auth and Database.</p>
                    <Link href='https://ernoca.com' target='_blank' className="underline">Visit Site</Link>
                </div>
                <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <Image
                                    className="rounded-xl w-full"
                                    src={procad}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Procad Construction (PVT) (LTD). Modern Website in React & Tailwind</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Designed and developed the website for Procad Construction</p>
                            <Link href='https://procad.co.zw' target='_blank' className="underline">Visit Site</Link>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <Image
                                    className="rounded-xl w-full"
                                    src={internetSol}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">Internet Solutions - Online shop for tech devices</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Designed and developed the frontend, backend and cloud services</p>
                            <Link href='https://internetsolutions.co.zw' target='_blank' className="underline">Visit Site</Link>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <div className="w-4/12">
                            <div className="relative">
                                <Image
                                    className="rounded-xl w-full"
                                    src={skyangel}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-8/12">
                            <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">SkyAngel Private Jet Charters Site & Reservations System</h1>
                            <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">Booking sytem design and dev, and website design and dev too</p>
                            <Link href='https://skyangel.co.zw' target='_blank' className="underline">Visit Site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreelanceWork
