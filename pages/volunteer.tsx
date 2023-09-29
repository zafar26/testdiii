import Image from 'next/image'
import Nav from '../components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { useEffect, useState } from 'react'
import HeadTag from '@/components/Head'
import { Env } from '@/helpers/types'

const VolunteerPage = ({ env }: { env: Env }) => {
    return (
        <div className=" h-full">
            <HeadTag
                seoTitle={'Volunteer'}
                // seoImage={env?.base_url && env.base_url + blogs[0]?.image_path}
                seoDescription={''}
                seoURL={'/volunteer'}
            />
            <Nav selectedPage="Volunteer" env={env} />
            <div className="py-10 flex justify-center ">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[90%] w-full lg:m-2 m-4 justify-around justify-items-center ">
                    <div className="flex flex-col text-[#00504B] mb-4 justify-center">
                        <div className="w-[80%] flex flex-row pb-5 self-center">
                            <div className="flex">
                                <Image
                                    src="/volunteer/volunteer.png"
                                    alt="heading"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-xl font-bold ml-4  lg:text-3xl">
                                    {' '}
                                    Volunteer With Us
                                </h1>
                            </div>
                        </div>
                        <div className="w-[80%] self-center">
                            <p className="text-lg lg:text-xl">
                                Dawateislami India is growing everyday, If you
                                would like to volunteer for the great cause of
                                it then please give us your details. إِنْ شَاءَ
                                ٱللَّٰهُ We will reach out to you soon.
                            </p>
                        </div>
                    </div>
                    <div className="w-full justify-center p-1 sm:h-screen h-screen  text-white">
                        <iframe
                            src="https://tally.so/embed/mJ1DZd?dynamicHeight=0"
                            className="w-full h-screen bg-teal-100 overflow-auto"
                            title="Volunteer"
                        ></iframe>
                    </div>
                </div>
            </div>
            <FooterSection env={env} />
        </div>
    )
}
export const getStaticProps = () => {
    let env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    return {
        props: { env },
    }
}
export default VolunteerPage
