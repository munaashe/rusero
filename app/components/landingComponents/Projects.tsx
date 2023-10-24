import React from 'react'
import Image from 'next/image'

const Projects = () => {
    return (
        <div>
            <div className="mt-28">
                <div data-aos="flip-down" className="text-center max-w-screen-md mx-auto">
                    <h1 className="text-3xl font-bold mb-4">What is<span className="text-yellow-500">Skilline?</span></h1>
                    <p className="text-gray-500">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                </div>
                <div data-aos="fade-up" className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7">
                    <div className="relative md:w-5/12">
                        <Image src="/img/Rectangle 19.png" alt="" layout="fill" objectFit="cover" className="rounded-2xl" />
                        <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">FOR INSTRUCTORS</h1>
                                <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-[1.1] duration-[300ms] ease-in-out">Start a class today</button>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:w-[5rem]">
                        <Image src="/img/Rectangle 21.png" alt="" layout="fill" objectFit="cover" className="rounded-[2rem]" />
                        <div className="absolute bg-black bg-opacity-[20%] bottom-[0] left-[0] right-[0] w-full h-full rounded-[2rem]">
                            <div className="-translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%] transform">
                                <h1 className="-translate-x-[50%] -translate-y-[50%] uppercase text-white font-bold text-center text-sm lg:text-xl mb-[3rem]">FOR STUDENTS</h1>
                                <button style={{ background: 'rgba(35, 189, 238, 0.9)' }} className="-translate-x-[50%] -translate-y-[50%] rounded-full text-white text-xs lg:text-md px[6rem]-py[3rem]-w[100%]-font-medium-focus-outline-none-transform-transition-hover-scale[110]-duration[300ms]-ease-in-out">Enter access code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center sm:space-x-8 mt-36">
                <div data-aos="fade-right" className="sm:w-1/2 relative">
                    <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
                    <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
                        Everything you can do in a physical classroom,{' '}
                        <span className="text-yellow-500">you can do with Skilline</span>
                    </h1>
                    <p className="py-5 lg:pr-32">
                        Skilline’s school management software helps traditional and online schools manage scheduling,
                        attendance, payments and virtual classrooms all in one secure cloud-based system.
                    </p>
                    <a href="" className="underline">
                        Learn More
                    </a>
                </div>
                <div data-aos="fade-left" className="sm:w-1/2 relative mt-10 sm:mt-0">
                    <div style={{ background: '#23BDEE' }} className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"></div>
                    <img className="rounded-xl z-40 relative" src="/img/teacher-explaining.png" alt="" />
                    <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] focus:outline-none transform transition hover:scale-[110%] duration-[300ms] ease-in-out z-[50]">
                        <svg className="w-[5px] h-[5px] ml-[1px]" viewBox="0 0 24 28" fill="#23BDEE" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e7 27.1099 6.25202e7 26.3321L7e7 100123C7e7 .223477 .848877 -.256572 151538 .14427L22.5751 12.8097Z" />
                        </svg>
                    </button>
                    <div className="bg-yellow-500 w-[40px] h-[40px] floating absolute rounded-lg z-[10] -bottom-[3px] -right-[3px]"></div>
                </div>
            </div>
        </div>
    )
}

export default Projects