import CardBooklet from '@/components/CardBooklet'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { getAllBlogs, getMoreBlogs } from '@/helpers/api/blog'
import { getSingleSetting } from '@/helpers/api/settings'
import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

type Data = {
    id: number
    title: string
}
export const runtime = 'experimental-edge'

export const getStaticProps: GetStaticProps<{
    data?: Data[]
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
        discordUrl: process.env.DISCORD_WEBHOOK_URL!,
    }
    try {
        const { data } = await getAllBlogs(1, 6, 'kids', envData)
        const { data: cache } = await getSingleSetting(
            'frontend_cache_time',
            envData,
        )
        return {
            props: { data, env: envData },
            revalidate: !isNaN(cache.value) ? Number(cache.value) : 10,
        }
    } catch (err: any) {
        return {
            props: { env: envData },
            revalidate: 10,
        }
    }
}

const KidsPage = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [blogs, setBlogs] = useState<any[]>(data ? data : [])
    const [loader, setLoader] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMore() {
        setLoader('loading')
        try {
            const { data } = await getMoreBlogs(pageCount + 1, 3, 'kids', env)

            if (data && data.data?.length > 0) {
                setBlogs((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Kids API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            setLoader('')
        }
    }

    return (
        <>
            <HeadTag seoTitle={'Kids'} seoDescription={''} seoURL={'/kids'} />
            <Nav env={env} />
            <div className="px-0 lg:p-16">
                <div className="px-0 lg:px-16">
                    <p className="px-8 text-2xl font-bold text-center md:px-0">
                        Kids
                    </p>
                    <div className="flex justify-center w-full mt-2 md:mt-8 ">
                        <CardBooklet
                            list={blogs}
                            isBlog={true}
                            baseUrl={env?.base_url}
                        />
                    </div>
                </div>
                {loader != 'No Data' && (
                    <div className="flex justify-center w-full mt-4">
                        <button
                            onClick={() => getMore()}
                            className="flex px-20 py-2 text-white bg-teal-900 rounded "
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

export default KidsPage
