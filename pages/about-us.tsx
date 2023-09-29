import HeadTag from '@/components/Head'
import DepartmentSVG from '@/components/Icons/department'
import EmployeeSVG from '@/components/Icons/employees'
import InstitutionSVG from '@/components/Icons/institution'
import StudentSVG from '@/components/Icons/student'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { getAboutUsPage } from '@/helpers/api/pages'
import { Env } from '@/helpers/types'
import { useEffect, useState } from 'react'
import { getSingleSetting } from '@/helpers/api/settings'

export const runtime = 'experimental-edge'

let arr = [
    {
        title: 'Departments',
        icon: () => (
            <DepartmentSVG
                css={
                    'w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-24 xl:h-24'
                }
            />
        ),
        no: 50,
    },
    {
        title: 'Institutions',
        icon: () => (
            <InstitutionSVG
                css={
                    'w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-24 xl:h-24'
                }
            />
        ),
        no: 1300,
    },
    {
        title: 'Students',
        icon: () => (
            <StudentSVG
                css={
                    'w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-24 xl:h-24'
                }
            />
        ),
        no: 4000,
    },
    {
        title: 'Employees',
        icon: () => (
            <EmployeeSVG
                css={
                    'w-20 h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 xl:w-24 xl:h-24'
                }
            />
        ),
        no: 8000,
    },
]
type Data = {
    id: number
    title: string
    content: string
    meta_title: string
    meta_description: string
    media_type: string
    link: string
    base_url: string
}

export const getServerSideProps: GetServerSideProps<{
    data?: Data
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }

    try {
        const { data } = await getAboutUsPage(envData)
        let base_url: string = process.env.BACKEND_URL!
        let requiredData: Data = {
            id: data.id,
            title: data.title,
            content: data.content,
            meta_title: data.meta_title,
            meta_description: data.meta_description,
            media_type: data.media_type,
            link: data.link,
            base_url,
        }
        if (data.link) {
            requiredData.link = requiredData.link?.replace(
                '/watch?v=',
                '/embed/',
            )
        }
        // const { data: cache } = await getSingleSetting(
        //     'frontend_cache_time',
        //     envData,
        // )
        return {
            props: { data: requiredData, env: envData },
            // revalidate: !isNaN(cache.value) ? Number(cache.value) : 10,
        }
    } catch (err: any) {
        return { props: { env: envData } }
    }
}
const AboutUs = ({
    data,
    env,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <HeadTag
                seoTitle={data?.meta_title ? data?.meta_title : 'About Us'}
                seoDescription={data?.meta_description}
                seoURL={'/about-us'}
            />
            <Nav selectedPage="About us" env={env} />
            <div className=" w-full box-border py-10 md:px-16 md:flex flex flex-col items-center tracking-wider">
                <div className="flex flex-col md:flex-row  items-center md:px-0 px-6">
                    <div className="flex flex-col md:w-1/2 items-center">
                        <h1 className="text-xl md:text-4xl font-semibold text-teal-900">
                            {data?.title}
                        </h1>
                        <p className="mt-4 md:w-5/6 text-lg xl:text-xl font-light">
                            {data?.content}
                        </p>
                    </div>
                    <div className=" mt-0 w-full lg:w-2/3 xl:w-1/2 ">
                        <iframe
                            height="480"
                            className="w-full"
                            src={
                                data?.media_type == 'link'
                                    ? data.link
                                    : data?.base_url + 'storage/' + data?.link
                            }
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="About Dawateislami India"
                        />
                    </div>
                </div>
                <div className="md:mt-12 mt-11 md:flex justify-between rounded-3xl w-auto xl:w-8/12">
                    {/* ICONS */}
                    {arr.map((d: any, index: number) => (
                        <div key={index}>
                            <div className="flex flex-col items-center p-8 text-teal-900 ">
                                {d.icon()}
                                <p className="mt-4 text-2xl font-bold">
                                    {' '}
                                    {d.title}
                                </p>
                                <p className="mt-2 text-2xl text-center">
                                    {d.no}+
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterSection env={env} />
        </>
    )
}

export default AboutUs
