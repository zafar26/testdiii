import CardBooklet from '@/components/CardBooklet'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { getSingleSetting } from '@/helpers/api/settings'
import {
    getAllWeeklySpeech,
    getMoreWeeklySpeech,
} from '@/helpers/api/weekly-speech'

import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next/types'
import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

type Data = {
    id: number
    name: string
    slug: string
}
export const runtime = 'experimental-edge'

export const getServerSideProps: GetServerSideProps<{
    data?: Data[]
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
        discordUrl: process.env.DISCORD_WEBHOOK_URL!,
    }
    try {
        const { data } = await getAllWeeklySpeech(1, 4, envData)
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
            props: { env: envData },
            // revalidate: 10
        }
    }
}

const WeeklySpeeches = ({
    data,
    env,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [speeches, setSpeeches] = useState<any[]>(data ? data : [])
    const [loader, setLoader] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMore() {
        setLoader('loading')
        try {
            const { data } = await getMoreWeeklySpeech(pageCount + 1, 4, env)
            if (data && data.data?.length > 0) {
                setSpeeches((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Weekly Speech API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            setLoader('')
        }
    }

    return (
        <>
            <HeadTag
                seoTitle={'Weekly Speeches'}
                seoImage={
                    env?.base_url &&
                    env.base_url + speeches[0]?.cover_image_path
                }
                seoDescription={''}
                seoURL={'/weekly-speech'}
            />
            <Nav env={env} />
            <div className="px-0 lg:px-16 py-10">
                <div className="px-0 lg:px-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-900">
                        Weekly Speech
                    </h1>
                    <div className="mt-4 w-full md:flex justify-center ">
                        <CardBooklet
                            list={speeches}
                            isBayan={true}
                            baseUrl={env.base_url}
                        />
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

export default WeeklySpeeches
