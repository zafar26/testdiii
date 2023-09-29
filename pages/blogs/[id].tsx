import CardBooklet from '@/components/CardBooklet'
import Nav from '@/components/Nav'
import Image from 'next/image'
import FooterSection from '@/components/Sections/Footer'
import { InferGetStaticPropsType, GetStaticProps } from 'next/types'
import { getAllBlog, getAllBlogs, getBlog } from '@/helpers/api/blog'
import { Env } from '@/helpers/types'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import HeadTag from '@/components/Head'
import ShareSVG from '@/components/Icons/share'

type Data = {
    id: number
    title: string
    image_path: string
    slug: string
    meta_title: string
    meta_description: string
    content: string
    author: { name: string }
}
export const runtime = 'experimental-edge'

// This function gets called at build time
export async function getStaticPaths() {
    try {
        let envData: Env = {
            base_url: process.env.BACKEND_URL!,
            token: process.env.TOKEN!,
        }
        const res = await getAllBlog(envData)
        const paths = res.data.map((blog: Data) => ({
            params: { id: blog.slug },
        }))
        return { paths, fallback: true }
    } catch (err: any) {
        return { paths: [], fallback: true }
    }
}

export const getStaticProps: GetStaticProps<{
    data?: Data
    similarBlogs?: Data[]
    env: Env
}> = async ({ params }: any) => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        const { data } = await getBlog(params?.id, envData)
        const response = await getAllBlogs(1, 4, data.category, envData)
        let allBlogs: any = []
        if (response.data) {
            allBlogs = response.data
        }
        if (!data.slug) {
            return {
                notFound: true,
            }
        }
        return {
            props: { data, similarBlogs: allBlogs, env: envData },
        }
    } catch (err: any) {
        return { props: { env: envData } }
    }
}

const SingleBlog = ({
    data,
    similarBlogs,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [content, setcontent] = useState<any>('')
    const [wind, setWind] = useState<any>('')

    useEffect(() => {
        setcontent(data?.content)
        if (typeof window !== 'undefined') {
            setWind(window)
        }
    }, [data?.content])

    const shareThis = async () => {
        let shareData = {
            text: data?.title,
            url: wind?.location?.href,
            title: data?.title,
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
                    'Blog | ' + data?.meta_title
                        ? data?.meta_title
                        : data?.title
                }
                seoImage={env?.base_url && env.base_url + data?.image_path}
                seoDescription={
                    data?.meta_description
                        ? data?.meta_description
                        : data?.content
                }
                seoURL={wind?.location?.href}
            />
            <Nav env={env} />
            <div className="py-10 px-4 lg:px-16">
                <div className="">
                    <p className="flex justify-center text-3xl font-semibold text-center text-teal-900 font-jameel_noori">
                        {data?.title}
                    </p>
                    <div className="flex flex-col items-center justify-center w-full p-2 mt-4 md:mt-12 h-full">
                        <div className=" w-full flex justify-center h-96">
                            <Image
                                loader={({ src }: any) =>
                                    env?.base_url + 'storage/' + src
                                }
                                src={data ? data.image_path : ''}
                                alt={'Image'}
                                width={1000}
                                height={700}
                                priority={true}
                                loading={'eager'}
                            />
                        </div>
                        {wind && (
                            <button
                                onClick={() => shareThis()}
                                className="flex mt-4 w-full md:w-min items-center md:ml-2 p-2 h-14 border border-teal-900 rounded text-teal-900"
                            >
                                <ShareSVG />
                                <p>Share</p>
                            </button>
                        )}

                        <div className="mt-8 font-jameel_noori text-xl tracking-widest	text-urdu leading-9">
                            {/* <p className="text-xl font-light leading-loose tracking-wide text-justify"> */}
                            <ReactMarkdown>{content}</ReactMarkdown>
                            {/* </p> */}
                        </div>
                    </div>
                </div>
                <div className="w-full mt-8 md:mt-16">
                    <span className="text-xl font-medium">Blogs</span>
                    <CardBooklet
                        list={similarBlogs}
                        horizontalScroll={true}
                        isBlog={true}
                        baseUrl={env?.base_url}
                    />
                </div>
            </div>
            <FooterSection env={env} />
        </>
    )
}
export default SingleBlog
