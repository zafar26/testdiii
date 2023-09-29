import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { getTermsAndCondition } from '@/helpers/api/pages'
import { Env } from '@/helpers/types'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

type Data = {
    id: number
    title: string
    content: string
    meta_title: string
    meta_description: string
    slug: string
}

export const getStaticProps: GetStaticProps<{
    data?: Data
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        const { data } = await getTermsAndCondition(envData)

        if (!data.title) {
            return {
                notFound: true,
            }
        }
        return { props: { data, env: envData } }
    } catch (err: any) {
        return { props: { env: envData } }
    }
}
const TermsAndCondition = ({
    data,
    env,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [content, setcontent] = useState<any>('')

    useEffect(() => {
        setcontent(data?.content)
    }, [data?.content])
    return (
        <>
            <HeadTag
                seoTitle={'Terms & Conditions'}
                // seoImage={env?.base_url && env.base_url + blogs[0]?.image_path}
                seoDescription={''}
                seoURL={'/terms-and-conditions'}
            />
            <Nav selectedPage="Terms & Condition" env={env} />
            <div className=" w-full p-3 md:p-16 md:flex flex flex-col items-center ">
                <div className="flex flex-col text-justify">
                    <h2 className="text-2xl md:text-4xl p-3 text-center font-semibold">
                        {data?.title}
                    </h2>
                    {content && (
                        <div className="mt-4 text-left">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
            <FooterSection env={env}/>
        </>
    )
}
export default TermsAndCondition

