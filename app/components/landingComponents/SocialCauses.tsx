import Image from 'next/image'
import React from 'react'

import ida from '../../assets/ida.png'
import choiceNust from '../../assets/choicenust.png'
import smh from '../../assets/smhzw.png'
import Link from 'next/link'

type CauseType = {
    image: any,
    title: string,
    url: string
}

const images: CauseType[] = [
    {
        image: ida,
        title: 'Institute of Disaster Alleviation',
        url: 'https://ida.org.zw'
    },
    {
        image: choiceNust,
        title: 'Nust Choice Champions',
        url: 'https://choicechampions.org'
    },
    {
        image: smh,
        title: 'Student Mental Health Zimbabwe',
        url: 'https://smhzw.org.zw'
    }
]

const SocialCauses = () => {
    return (
        <div>
            <div className="mt-24 flex flex-col md:flex-row items-start md:space-x-10 px-4">
                <div data-aos="zoom-in-right" className="md:w-6/12">
                    <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className='flex justify-center items-center'>
                                <Link href={image.url} target='_blank'>
                                    <Image
                                        src={image.image}
                                        alt={image.title}
                                        className='h-36 w-36'
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="md:w-6/12">
                    <div className="flex items-center space-x-20 mb-5">
                        <span className="border border-gray-300 w-14 absolute"></span>
                        <h1 className="text-gray-400 tracking-widest text-sm">SOCIAL CAUSES</h1>
                    </div>
                    <h1 className="font-semibold text-darken text-2xl lg:pr-40">
                        Leaving the world better {' '}
                        <span className="text-[#E86E36]">than we have found it</span>
                    </h1>
                    <p className="text-gray-500 my-5 lg:pr-20">
                        Among the numerous challenges affecting people in the part of our globe, we zeroed on natural
                        disasters and health, mental health in particular, and hope to contribute meaningfully
                        in those areas.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SocialCauses