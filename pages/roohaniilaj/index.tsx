import CardModal from '@/components/CardModal'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import {
    getAllRohaniIlaj,
    getMoreRohaniilaj,
    getRohaniilaj,
} from '@/helpers/api/rohaniilaj'
import PulseLoader from 'react-spinners/PulseLoader'
import { Env } from '@/helpers/types'
import HeadTag from '@/components/Head'
import Link from 'next/link'
import { getSingleSetting } from '@/helpers/api/settings'
import { discordLog } from '@/helpers/utils'

type Data = {
    id?: number
    name?: string
    image_path?: string
    uuid?: string
    category?: string
    deleted_at?: string
    created_at?: string
    updated_at?: string
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

        let { data } = await getRohaniilaj(1, 8, envData)
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
            props: {
                env: {
                    base_url: process.env.BACKEND_URL!,
                    token: process.env.TOKEN!,
                },
                revalidate: 10,
            },
        }
    }
}
const RoohaniIlajPage = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [loader, setLoader] = useState<string>('')
    const [selectedCard, setSelectedCard] = useState<any>()
    const [rohaniilaj, setRohaniilaj] = useState<Data[]>(data ? data : [])
    const [pageCount, setPageCount] = useState<number>(1)

    async function getMoreCards() {
        setLoader('loading')
        try {
            const { data } = await getMoreRohaniilaj(pageCount + 1, 4, env)
            if (data && data.data?.length > 0) {
                setRohaniilaj((prev: Data[]) => [...prev, ...data.data])
                setPageCount((prev: number) => prev + 1)
                setLoader('')
            } else {
                setLoader('No Data')
            }
        } catch (error: any) {
            discordLog(
                `Error: Get More Rohaniilaj API with a message "${error.message}"`,
                env.discordUrl ? env.discordUrl : '',
            )
            setLoader('')
        }
    }
    return (
        <>
            <HeadTag
                seoTitle={'Rohaniilaj'}
                seoImage={`${
                    env?.base_url && env?.base_url + rohaniilaj[0]?.image_path
                }`}
                seoURL={'/roohaniilaj'}
            />
            <Nav env={env} />
            <div className="py-10">
                <h1 className="text-xl font-bold ml-4  lg:text-3xl text-center text-teal-900">
                    Roohani Ilaj
                </h1>
                <div className="mt-4  flex flex-wrap justify-center">
                    {rohaniilaj.map((d: any, index: number) => (
                        <div
                            className="w-full md:w-1/5 m-2  flex flex-col bg-teal-50 rounded shadow"
                            key={index}
                            onClick={() =>
                                setSelectedCard({
                                    id: d.id,
                                    image_path: d.image_path,
                                    title: d.name,
                                })
                            }
                        >
                            <div className="w-full h-full rounded  flex-col items-end">
                                <Image
                                    loader={({ src }: any) =>
                                        env?.base_url + src
                                    }
                                    src={d.image_path}
                                    alt={'Image'}
                                    width={700}
                                    height={700}
                                    priority={true}
                                    loading={'eager'}
                                    className="w-full h-44 md:h-52 lg:h-60 xl:h-80"
                                />
                                <p className="p-2 text-center md:text-xl font-semibold text-teal-900">
                                    {d.name}
                                </p>
                            </div>
                        </div>
                    ))}
                    {loader != 'No Data' && (
                        <div className="w-full mt-4 flex justify-center">
                            <button
                                onClick={() => getMoreCards()}
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
                    {selectedCard && (
                        <CardModal
                            data={selectedCard}
                            setData={setSelectedCard}
                            base_url={env?.base_url}
                            // shareit={shareThis}
                        />
                    )}
                </div>
            </div>
            <FooterSection env={env} />
        </>
    )
}
export default RoohaniIlajPage
