import MediaCardList from '@/components/Media_Card'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { detectMob, myLoader } from '@/helpers/utils'
import Image from 'next/image'
import ResponsiveEmbed from 'react-responsive-embed'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { Env } from '@/helpers/types'
import { getAllMedia, getMediaAll, getSingleMedia } from '@/helpers/api/media'
import { useEffect, useState } from 'react'
import ShareSVG from '@/components/Icons/share'
import HeadTag from '@/components/Head'

type Data = {
    id: number
    slug: string
    name: string
    media_type: string
    media_path: string
    month: string
    meta_title: string
    meta_description: string
    thumbnail_image: string
    published_at?: string
    vocalist?: any
    category?: any
    language: {
        id: number
        name: string
        code: string
    }
}
export const runtime = 'experimental-edge'


// This function gets called at build time
export async function getStaticPaths() {
    try {
        let envData: Env = {
            base_url: process.env.BACKEND_URL!,
            token: process.env.TOKEN!,
        }
        const res = await getMediaAll(envData)

        const paths = res.data.map((media: Data) => ({
            params: { id: media.slug },
        }))
        return { paths, fallback: true }
    } catch (err: any) {
        return { paths: [], fallback: true }
    }
}
export const getStaticProps: GetStaticProps<{
    data?: Data
    env: Env
}> = async ({ params }: any) => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        const { data } = await getSingleMedia(params?.id, envData)

        if (!data.name) {
            return {
                notFound: true,
            }
        }
        return {
            props: { data, env: envData },
        }
    } catch (err: any) {
        return {
            props: { env: envData },
        }
    }
}

let socialMediaLinks = [
    {
        icon: 'watsapp.png',
        link: '',
    },
    {
        icon: 'facebook.png',
        link: '',
    },
    {
        icon: 'instagram.png',
        link: '',
    },
    {
        icon: 'twitter.png',
        link: '',
    },
]

const MediaSingle = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [wind, setWind] = useState<any>()
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWind(window)
        }
    }, [])
    const shareThis = () => {
        let shareData = {
            text: data?.name,
            url: wind?.location?.href,
            title: data?.name,
        }
        if (
            wind &&
            wind.navigator.share &&
            wind.navigator.canShare(shareData)
        ) {
            wind?.navigator?.share(shareData)
        }
    }
    return (
        <div>
            <HeadTag
                seoTitle={
                    'Media | ' + data?.meta_title
                        ? data?.meta_title
                        : data?.name
                }
                seoImage={env?.base_url && env.base_url + data?.thumbnail_image}
                seoDescription={
                    data?.meta_description
                        ? data?.meta_description
                        : `Published At: ${data?.published_at}`
                }
                seoURL={wind?.location?.href}
            />
            <Nav selectedPage="Media" pageTitle={data?.name} env={env} />
            <div className="px-4 lg:px-16 lg:py-4 ">
                <div className="px-3 lg:px-16 md:mt-8 flex border-b p-6 border-gray-300 flex-col md:flex-row">
                    <div className="w-full md:w-5/6">
                        <iframe
                            width="380"
                            height="380"
                            className="w-full md:w-5/6"
                            src={
                                data?.media_path
                                    ? env?.base_url + data.media_path
                                    : ''
                            }
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={data?.name}
                        />
                        <h4 className="text-2xl md:text-3xl font-bold mt-8 ">
                            {data?.name}
                        </h4>
                    </div>
                    <div className="md:w-2/5 md:m-8 mt-8 md:mt-0 border border-teal-900 h-min p-4 rounded-2xl">
                        <div className="w-full flex px-6 py-2">
                            <span className="md:w-1/3">Date :</span>
                            <span className="lg:w-96 ml-2 md:ml-0">
                                {data?.published_at}
                            </span>
                        </div>
                        <div className="w-full flex px-6 py-2">
                            <span className="md:w-2/3 lg:w-1/3">
                                Vocalist :
                            </span>
                            <span className="lg:w-96 ml-2 md:ml-0">
                                {data?.vocalist?.name}
                            </span>
                        </div>
                        {/* <div className="w-full flex items-center px-6 py-2">
                            <span className="w-1/3 font-bold text-teal-900">
                                Share :
                            </span>
                            {socialMediaLinks.map((d: any, index: number) => (
                                <div
                                    key={index}
                                    className={`${
                                        index == 0 ? 'pr-2' : 'px-2 '
                                    } `}
                                >
                                    <Image
                                        loader={myLoader}
                                        src={d.icon}
                                        alt={'Image'}
                                        width={index == 1 ? 10 : 20}
                                        height={index == 1 ? 10 : 20}
                                    />
                                </div>
                            ))}
                        </div> */}
                        <div className="w-full flex justify-center">
                            {wind && detectMob() && (
                                <button
                                    onClick={() => shareThis()}
                                    className="flex w-24  md:w-min items-center md:ml-2 p-2 h-14 border border-teal-900 rounded text-teal-900"
                                >
                                    <ShareSVG />
                                    <p>Share</p>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-8  w-full">
                    <span className="">Similar Media</span>
                    <MediaCardList
                        list={data?.category?.medialist}
                        env={env}
                        horizontalScroll
                    />
                    {/* <div className="w-full mt-4 flex justify-center">
                        <button className=" px-20 py-2 bg-teal-900 text-white rounded">
                            More
                        </button>
                    </div> */}
                </div>
            </div>
            <FooterSection env={env} />
        </div>
    )
}
export default MediaSingle
