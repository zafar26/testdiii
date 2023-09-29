// import dynamic from 'next/dynamic'
// import PropagateLoader from 'react-spinners/PropagateLoader'

// const IntroSection = dynamic(() => import('@/components/Sections/Intro'), {
//     loading: () => (
//         <div className="flex items-center justify-center w-full h-full">
//             <PropagateLoader
//                 color={'#134E4A'}
//                 loading={true}
//                 size={15}
//                 aria-label="Loading Spinner"
//             />
//         </div>
//     ),
// })
// const InsightSection = dynamic(() => import('@/components/Sections/Insight'), {
//     loading: () => (
//         <div className="flex items-center justify-center w-full h-full">
//             <PropagateLoader
//                 color={'#134E4A'}
//                 loading={true}
//                 size={15}
//                 aria-label="Loading Spinner"
//             />
//         </div>
//     ),
// })
// const WeeklyBooklet = dynamic(
//     () => import('@/components/Sections/WeeklyBooklet'),
//     {
//         loading: () => (
//             <div className="flex items-center justify-center w-full h-full">
//                 <PropagateLoader
//                     color={'#134E4A'}
//                     loading={true}
//                     size={15}
//                     aria-label="Loading Spinner"
//                 />
//             </div>
//         ),
//     },
// )
// const DonationSection = dynamic(
//     () => import('@/components/Sections/Donation'),
//     {
//         loading: () => (
//             <div className="flex items-center justify-center w-full h-full">
//                 <PropagateLoader
//                     color={'#134E4A'}
//                     loading={true}
//                     size={15}
//                     aria-label="Loading Spinner"
//                 />
//             </div>
//         ),
//     },
// )
// const FeaturedMediaSection = dynamic(
//     () => import('@/components/Sections/FeaturedMedia'),
//     {
//         loading: () => (
//             <div className="flex items-center justify-center w-full h-full">
//                 <PropagateLoader
//                     color={'#134E4A'}
//                     loading={true}
//                     size={15}
//                     aria-label="Loading Spinner"
//                 />
//             </div>
//         ),
//     },
// )
// const BlogSection = dynamic(() => import('@/components/Sections/Blog'), {
//     loading: () => (
//         <div className="flex items-center justify-center w-full h-full">
//             <PropagateLoader
//                 color={'#134E4A'}
//                 loading={true}
//                 size={15}
//                 aria-label="Loading Spinner"
//             />
//         </div>
//     ),
// })

import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import Shortcuts from '@/components/Shortcuts'
import FooterSection from '@/components/Sections/Footer'
import IntroSection from '@/components/Sections/Intro'
import InsightSection from '@/components/Sections/Insight'
import WeeklyBooklet from '@/components/Sections/WeeklyBooklet'
import FeaturedMediaSection from '@/components/Sections/FeaturedMedia'
import BlogSection from '@/components/Sections/Blog'
import DonationSection from '@/components/Sections/Donation'
import { EnvContext } from '@/components/Context/ApiContext'
import { useContext, useEffect } from 'react'
import { Env } from '@/helpers/types'

const Home = ({ env }: { env: Env }) => {
    const { setEnv } = useContext<any>(EnvContext)
    setEnv(env)
    return (
        <>
            <HeadTag />
            <Nav selectedPage="Home" env={env} />
            <div className="box-border">
                <Shortcuts />
                <IntroSection />
                <InsightSection />
                <WeeklyBooklet />
                <FeaturedMediaSection />
                <BlogSection />
                <DonationSection />
                <FooterSection />
            </div>
        </>
    )
}
export const getStaticProps = () => {
    const base_url = process.env.BACKEND_URL!
    const token = process.env.TOKEN!
    return {
        props: {
            env: {
                base_url,
                token,
                discordUrl: process.env.DISCORD_WEBHOOK_URL!,
            },
        },
        // revalidate: 500,
    }
}

export default Home
