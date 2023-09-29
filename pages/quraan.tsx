import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import FooterSection from '@/components/Sections/Footer'
import HeadTag from '@/components/Head'
import { Env } from '@/helpers/types'

const Quraan = ({ env }: { env: Env }) => {
    return (
        <div className="h-screen inline-grid">
            <HeadTag
                seoTitle={'Quran'}
                // seoImage={env?.base_url && env.base_url + blogs[0]?.image_path}
                seoDescription={''}
                seoURL={'/quran'}
            />
            <Nav selectedPage="Quraan" env={env} />
            <h1 className="text-xl md:text-4xl font-bold text-center p-10 text-teal-900">
                Coming Soon
            </h1>
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
export default Quraan
