import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { useEffect, useState } from 'react'

const OnlineCourse = ({ base_url, token }: any) => {
    return (
        <div className="h-screen inline-grid">
            <HeadTag
                seoTitle={'Online Courses'}
                // seoImage={env?.base_url && env.base_url + blogs[0]?.image_path}
                seoDescription={''}
                seoURL={'/online-courses'}
            />
            <Nav selectedPage="Online Courses" env={{ base_url, token }} />
            <h1 className="text-xl md:text-4xl font-bold text-center p-10 text-teal-900">
                Coming Soon
            </h1>
            <FooterSection />
        </div>
    )
}
export const getStaticProps = () => {
    const base_url = process.env.BACKEND_URL
    const token = process.env.TOKEN
    return {
        props: { base_url, token },
    }
}
export default OnlineCourse
