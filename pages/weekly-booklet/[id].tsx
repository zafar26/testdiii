import CardBooklet from '@/components/CardBooklet'
import Nav from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import WeeklyBookletSVG from '@/components/Icons/weeklyBook'
import PlayAudio from '@/components/Listen'
import FooterSection from '@/components/Sections/Footer'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { Env } from '@/helpers/types'
import {
    getAllWeeklyBook,
    getAllWeeklyBooks,
    getWeeklyBook,
} from '@/helpers/api/weekly_booklet'
import { useEffect, useState } from 'react'
import DownloadSVG from '@/components/Icons/download'
import HeadTag from '@/components/Head'
import ShareSVG from '@/components/Icons/share'
import { detectMob } from '@/helpers/utils'

type Data = {
    name: string
    slug: string
    publisher: string
    month: string
    book_languages: {
        id: number
        book_id: number
        language_id: number
        cover_image_path: string
        file_path: string
        audio_path: string
        total_pages: number
        book_summary: string
        published_on: string
        meta_title: string
        meta_description: string
    }[]
}
export const runtime = 'experimental-edge'

// This function gets called at build time
export async function getStaticPaths() {
    try {
        let envData: Env = {
            base_url: process.env.BACKEND_URL!,
            token: process.env.TOKEN!,
        }
        const res = await getAllWeeklyBook(envData)

        const paths = res.data.map((book: any) => ({
            params: { id: book.book.slug },
        }))
        return { paths, fallback: true }
    } catch (err: any) {
        return { paths: [], fallback: true }
    }
}
export const getStaticProps: GetStaticProps<{
    data?: Data
    similarBooks?: Data[]
    env: Env
}> = async ({ params }: any) => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        const { data } = await getWeeklyBook(params?.id, envData)
        const response = await getAllWeeklyBooks(1, 4, envData)
        let similarBooks: any = []
        if (response.data) {
            similarBooks = response.data
        }
        if (!data.name) {
            return {
                notFound: true,
            }
        }
        return {
            props: { data, similarBooks, env: envData },
        }
    } catch (err: any) {
        return { props: { env: envData } }
    }
}

const SingleBooklet = ({
    data,
    similarBooks,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [wind, setWind] = useState<any>('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWind(window)
        }
    }, [])

    const shareThis = async () => {
        let shareData = {
            text: data?.book_languages[selectedIndex]?.book_summary,
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
        <>
            <HeadTag
                seoTitle={
                    'Weekly Booklet | ' +
                    data?.book_languages[selectedIndex]?.meta_title
                        ? data?.book_languages[selectedIndex]?.meta_title
                        : data?.name
                }
                seoImage={
                    env?.base_url &&
                    env.base_url +
                        data?.book_languages[selectedIndex]?.cover_image_path
                }
                seoDescription={
                    data?.book_languages[selectedIndex]?.book_summary
                }
                seoURL={wind?.location?.href}
            />
            <Nav pageTitle={data?.name} env={env} />
            <div className="px-4 lg:px-16 lg:py-4 flex flex-col items-center">
                <div className="px-0 lg:px-16 mt-8 ">
                    <p className="flex justify-center text-3xl font-semibold text-teal-900 text-center">
                        {data?.name}
                    </p>
                    <div className="w-full mt-4 flex md:flex-row flex-col items-center">
                        <Image
                            loader={({ src }: any) => env?.base_url + src}
                            src={
                                data?.book_languages[selectedIndex]
                                    ?.cover_image_path
                                    ? data?.book_languages[selectedIndex]
                                          ?.cover_image_path
                                    : ''
                            }
                            alt={'Image'}
                            width={500}
                            height={500}
                            priority={true}
                            loading={'eager'}
                        />
                        <div className="mt-4 md:w-1/2">
                            <div className="flex p-2 justify-between">
                                <span className="font-semibold">
                                    Select Language :{' '}
                                </span>
                                <select
                                    className="px-2 border rounded p-1 border-black"
                                    onChange={(e: any) =>
                                        setSelectedIndex(e.target.value)
                                    }
                                    value={selectedIndex}
                                >
                                    {data?.book_languages?.map(
                                        (d: any, i: number) => (
                                            <option key={d?.id} value={i}>
                                                {d?.language?.name}
                                            </option>
                                        ),
                                    )}
                                </select>
                            </div>
                            <p className="w-full text-center">
                                {
                                    data?.book_languages[selectedIndex]
                                        ?.book_summary
                                }
                            </p>
                            <div className="flex p-2 justify-between">
                                <span>Publisher :</span>
                                <span>{data?.publisher}</span>
                            </div>
                            <div className="flex p-2 justify-between">
                                <span>Total Pages :</span>
                                <span>
                                    {
                                        data?.book_languages[selectedIndex]
                                            .total_pages
                                    }
                                </span>
                            </div>

                            <div className="flex">
                                <div className="md:flex justify-center items-center w-full mt-4">
                                    <Link
                                        href={`/weekly-booklet/read?src=${
                                            env?.base_url &&
                                            env.base_url +
                                                data?.book_languages[
                                                    selectedIndex
                                                ]?.file_path
                                        }`}
                                        className="flex items-center p-2 h-14 border border-teal-900 rounded text-teal-900"
                                    >
                                        <WeeklyBookletSVG color="#115E59" />
                                        <p className="ml-2 ">Read</p>
                                    </Link>
                                    <Link
                                        href={`${
                                            env?.base_url &&
                                            env.base_url +
                                                data?.book_languages[
                                                    selectedIndex
                                                ]?.file_path
                                        }`}
                                        className="flex items-center md:ml-2 p-2 h-14 border border-teal-900 rounded text-teal-900"
                                        target="_blank"
                                        download
                                    >
                                        <DownloadSVG />
                                        <p>Download</p>
                                    </Link>
                                    {data?.book_languages[selectedIndex]
                                        ?.audio_path && (
                                        <PlayAudio
                                            audio_file={
                                                env?.base_url +
                                                data?.book_languages[
                                                    selectedIndex
                                                ]?.audio_path
                                            }
                                        />
                                    )}
                                    {wind && detectMob() && (
                                        <button
                                            onClick={() => shareThis()}
                                            className="flex w-full md:w-min items-center md:ml-2 p-2 h-14 border border-teal-900 rounded text-teal-900"
                                        >
                                            <ShareSVG />
                                            <p>Share</p>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-16 w-full">
                    <p>Similar Books</p>
                    <CardBooklet
                        list={similarBooks}
                        horizontalScroll={true}
                        isWeekly={true}
                        baseUrl={env?.base_url}
                    />
                </div>
            </div>
            <FooterSection env={env} />
        </>
    )
}
export default SingleBooklet
