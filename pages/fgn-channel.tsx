import Menus from "../components/Menu/menu";
import ReactPlayer from 'react-player/lazy'
import { useState, useEffect } from 'react'
import { Env } from '@/helpers/types'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'

export const getStaticProps: GetStaticProps<{
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        return { props: { env: envData } }
    } catch (err: any) {
        return { props: { env: envData } }
    }
}

const FgnChannel = ({
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const profile = 'digital/fgn-channel.jpeg'
    const name = 'FGN Channel'
    const title =
        'FGN Channel Ke Official Accounts Ko Follow & Subscribe Kijiye'
    const menus = [
        {
            name: 'Instagram',
            link: 'https://instagram.com/fgnchannelofficial?igshid=YmMyMTA2M2Y=',
        },
        {
            name: 'Facebook',
            link: 'https://m.facebook.com/100090531408529/',
        },
        {
            name: 'Youtube',
            link: 'https://www.youtube.com/@fgnchannelofficial',
        },
        {
            name: 'Dawateislami India',
            link: '/digital',
        },
    ]
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return <p>Loading</p>
    } else {
        return (
            <>
                <HeadTag
                    seoTitle={'FGN Channel'}
                    seoDescription={' Channel'}
                    seoURL={'/fgn-channel'}
                />
                <Nav env={env} />
                <div className="px-4 md:px-16 md:m-8 w-full flex flex-col items-center md:flex-row md:h-screen">
                    <div className=" w-full md:w-2/3 h-full bg-red-900">
                        <ReactPlayer
                            url="https://www.youtube.com/embed/s8F0SFcecfE"
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <Menus
                        menus={menus}
                        profile={profile}
                        name={name}
                        title={title}
                    />
                </div>
                <FooterSection env={env} />
            </>
        )
    }
}

export default FgnChannel
