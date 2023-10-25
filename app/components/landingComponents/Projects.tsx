import React from 'react'
import Image from 'next/image'
import rusero from '../../assets/rusero.jpg'
import sneng from '../../assets/sneng.jpg'
import Link from 'next/link'

const Projects = () => {
    return (
        <div>
            <div className="mt-28 w-full">
                <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Current <span className="text-yellow-500">Projects</span></h1>
                    <p className="text-gray-500">Centrally rooted in the principle of convenience, there exists a profound faith in Africa, driving our endeavor to emerge as the catalysts for providing effortlessly accessible tech services. This, in design, shall establish the bedrock of African commerce.</p>
                </div>
                <div data-aos="fade-up" className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7 w-full">
                    <div className="relative md:w-5/12">
                        <Image
                            src={sneng}
                            alt=""
                            objectFit="cover"
                            className="rounded-2xl"
                        />
                        <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                            <Link href='https://sn-eng.co.zw' target='_blank'>
                                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-[1.1] duration-[300ms] ease-in-out">Learn more</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="relative md:w-5/12">
                        <Image
                            src={rusero}
                            alt=""
                            objectFit="cover"
                            className="rounded-[2rem]"
                        />
                        <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                            <Link href='https://rusero.co.zw' target='_blank'>
                                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-[1.1] duration-[300ms] ease-in-out">Learn more</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects