import DepartmentCardList from '@/components/Department_Card'
import HeadTag from '@/components/Head'
import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { getDepartments } from '@/helpers/api/department'
import { getSingleSetting } from '@/helpers/api/settings'
import { Env } from '@/helpers/types'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next/types'
import { useEffect, useState } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

type Data = {
    id: number
    title: string
}
export const runtime = 'experimental-edge'

export const getServerSideProps: GetServerSideProps<{
    data?: Data[]
    env: Env
}> = async () => {
    let envData: Env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    try {
        const { data } = await getDepartments(envData)
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
const DepartmentListPage = ({
    data,
    env,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [department, setDepartment] = useState<Data[]>(data ? data : [])

    return (
        <>
            <HeadTag
                seoTitle={'Departments'}
                seoDescription={''}
                seoURL={'/departments'}
            />
            <Nav selectedPage="Departments" env={env} />
            <div className="py-10">
                <div className="px-3">
                    <div className="w-full ">
                        <div className="w-full flex flex-col ">
                            <h1 className="text-xl md:text-4xl font-semibold text-teal-900 text-center">
                                Department List
                            </h1>
                            <h2 className="text-center md:text-xl font-light mt-2">
                                Here is a list of all the departments
                            </h2>
                            <div className="mt-4 flex flex-wrap justify-center">
                                <DepartmentCardList
                                    list={department}
                                    base_url={env?.base_url}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection env={env} />
        </>
    )
}

export default DepartmentListPage
