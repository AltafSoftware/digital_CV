import { assets, infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>
                Introduction
            </h4>
            <h2 className='text-center text-5xl'>
                About me
            </h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm_w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user'
                        className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        Passionate and dedicated software engineering student with experience in
                        many industries, ranging from regular customer-service, sales and tech-
                        support to Anti-Money-Laundering, and now specializing in software
                        development. Through both academic studies, professional environments,
                        and hobby projects, i strive to learn and apply new technologies, tackle
                        complex challenges, and continuously develop my skills in the process.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index) => (
                            <li className='border-[0.5px] border-gray-400 
                            rounded-xl p-6 cursor-pointer hover:bg-green-200 
                            hover:-translate-y-1 duration-500 hover:shadow-md' 
                            key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3'/>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4>Tools I use</h4>

                    <ul></ul>
                </div>
            </div>
        </div>
    )
}

export default About
