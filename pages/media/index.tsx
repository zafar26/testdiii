import MediaCardList from '@/components/Media_Card'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { Env } from '@/helpers/types'
import { getAllMedia, getMedia } from '@/helpers/api/media'
import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import HeadTag from '@/components/Head'
import { getSingleSetting } from '@/helpers/api/settings'
import { discordLog } from '@/helpers/utils'

type Data = {
    id: number
    slug: string
    name: string
    media_type: string
    media_path: string
    month: string
    thumbnail_image: string
    language: {
        id: number
        name: string
        code: string
    }
}
export const runtime = 'experimental-edge'

export const getStaticProps: GetStaticProps<{
    data?: Data[]
    env: Env
}> = async () => {
    try {
        let envData: Env = {
            base_url: process.env.BACKEND_URL!,
            token: process.env.TOKEN!,
            discordUrl: process.env.DISCORD_WEBHOOK_URL!,
        }
        const { data } = await getAllMedia(1, 4, envData)
        // const { data: cache } = await getSingleSetting(
        //     'frontend_cache_time',
        //     envData,
        // )
        return {
            props: { data, env: envData },
            // revalidate: !isNaN(cache.value) ? Number(cache.value) : 10,
        }
    } catch (err: any) {
        return {
            props: {
                env: {
                    base_url: process.env.BACKEND_URL!,
                    token: process.env.TOKEN!,
                },
                // revalidate: 10,
            },
        }
    }
}

const MediaList = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [media, setMedia] = useState<any[]>(data ? data : [])
    const [loader, setLoader] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMore() {
        setLoader('loading')
        try {
            const { data } = await getMedia(pageCount + 1, 4, env)
            if (data && data.data?.length > 0) {
                setMedia((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Media API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            setLoader('')
        }
    }

    return (
        <>
            <HeadTag
                seoTitle={'Media'}
                seoImage={
                    env?.base_url && env.base_url + media[0]?.thumbnail_image
                }
                seoDescription={''}
                seoURL={'/media'}
            />
            <Nav selectedPage="Media" env={env} />
            <div className="py-10">
                <div className="px-3">
                    <div className="w-full ">
                        <div className="w-full flex flex-col ">
                            <h1 className="text-xl md:text-4xl font-semibold text-teal-900 text-center">
                                Media List
                            </h1>
                            <h2 className="text-center md:text-xl font-light mt-2">
                                Here is a list of all the media
                            </h2>
                            <div className="md:mt-4 flex flex-wrap justify-center">
                                <MediaCardList list={media} env={env} />
                            </div>
                        </div>
                    </div>
                </div>
                {loader != 'No Data' && (
                    <div className="w-full mt-4 flex justify-center">
                        <button
                            onClick={() => getMore()}
                            className=" px-20 py-2 bg-teal-900 text-white rounded flex "
                        >
                            <PulseLoader
                                color={'#FFFFFF'}
                                loading={loader == 'loading' ? true : false}
                                size={15}
                                aria-label="Loading Spinner"
                            />
                            {loader != 'loading' && <p>More</p>}
                        </button>
                    </div>
                )}
            </div>
            <FooterSection env={env} />
        </>
    )
}

export default MediaList
