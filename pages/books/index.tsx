import CardBooklet from '@/components/CardBooklet'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { getAllBooks, getMoreBooks } from '@/helpers/api/book'
import { getSingleSetting } from '@/helpers/api/settings'
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
        const { data } = await getAllBooks(1, 4, envData)
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

const BooksLibrary = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [books, setBooks] = useState<any[]>(data ? data : [])
    const [loader, setLoader] = useState<string>('')
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMore() {
        setLoader('loading')
        try {
            const { data } = await getMoreBooks(pageCount + 1, 8, env)
            if (data && data.data?.length > 0) {
                setBooks((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Books API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            setLoader('')
        }
    }

    return (
        <>
            <HeadTag
                seoTitle={'Books'}
                seoImage={
                    env?.base_url &&
                    env.base_url + books[0]?.book_languages[0]?.cover_image_path
                }
                seoDescription={''}
                // seoURL={wind?.location?.href}
                seoURL={'/books'}
            />
            <Nav selectedPage="Books" env={env} />
            <div className="py-10 px-4 lg:px-16">
                <div className="">
                    {/* <p className="text-2xl px-8 md:px-0 text-center">
                        Books Library
                    </p> */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-teal-900 text-center">
                        Books Library
                    </h1>
                    <div className="mt-4 w-full md:flex justify-center ">
                        <CardBooklet list={books} baseUrl={env?.base_url} />
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

export default BooksLibrary
