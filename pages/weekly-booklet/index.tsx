import CardBooklet from '@/components/CardBooklet'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { getSingleSetting } from '@/helpers/api/settings'
import { getAllWeeklyBooks, getWeeklyBooks } from '@/helpers/api/weekly_booklet'
import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

type Data = {
    id: number
    name: string
    slug: string
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
        const { data } = await getAllWeeklyBooks(1, 4, envData)
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

const WeeklyBooklet = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [books, setBooks] = useState<any[]>(data ? data : [])
    const [loader, setLoader] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMore() {
        setLoader('loading')
        const controller = new AbortController()

        try {
            const { data } = await getWeeklyBooks(
                pageCount + 1,
                4,
                env,
                controller,
            )
            controller.abort()
            if (data && data.data?.length > 0) {
                setBooks((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Weekly Booklets API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            controller.abort()
            setLoader('')
        }
    }

    return (
        <>
            <HeadTag
                seoTitle={'Weekly Booklets'}
                seoImage={
                    env?.base_url &&
                    env.base_url +
                        books[0]?.book?.book_languages[0]?.cover_image_path
                }
                seoDescription={''}
                seoURL={'/weekly-booklet'}
            />
            <Nav env={env} />
            <div className="px-0 lg:px-16 lg:py-4 ">
                <div className="px-0 lg:px-16 mt-8 ">
                    <p className="text-2xl px-8 md:px-0 text-center">
                        Weekly Booklet
                    </p>
                    <div className="mt-2 md:mt-8 w-full flex justify-center ">
                        <CardBooklet
                            list={books}
                            isWeekly={true}
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

export default WeeklyBooklet
