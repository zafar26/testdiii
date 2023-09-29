import { getBlogs } from '@/helpers/api/blog'
import {
    getAnnouncements,
    getDailyInsight,
    getDonations,
    getHijriDate,
} from '@/helpers/api/home'
import { getMedia } from '@/helpers/api/media'
import { getWeeklyBooks } from '@/helpers/api/weekly_booklet'
import { Env } from '@/helpers/types'
import { useEffect, useState } from 'react'

const useFetch = (getAPI: string, env: Env) => {
    const [data, setData] = useState<any>([])
    const [loading, setLoader] = useState<boolean>(false)
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        if (getAPI == 'announcement') {
            getAnnouncements(env, controller)
                .then((response: any) => setData([...response.data.data]))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }

        if (getAPI == 'insight') {
            getDailyInsight(env, controller)
                .then((response: any) => setData(response.data.data))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }
        if (getAPI == 'weeklyBooks') {
            getWeeklyBooks(1, 4, env, controller)
                .then((res: any) => setData([...res.data.data]))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }

        if (getAPI == 'media') {
            getMedia(1, 4, env, controller)
                .then((res: any) => setData([...res.data.data]))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }
        if (getAPI == 'blogs') {
            getBlogs(env, 4, controller)
                .then((res: any) => setData([...res.data.data]))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }
        if (getAPI == 'donations') {
            getDonations(env, controller)
                .then((res: any) => setData([...res.data.data]))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }
        if (getAPI === 'hijriDate') {
           
            getHijriDate(env, controller)
                .then((data: any) => setData(data?.data.data[0]['value']))
                .catch((err: any) => setError(err))
                .finally(() => setLoader(false))
        }
        // Unmount it
        return () => {
            controller.abort()
        }
    }, [getAPI, env])
    return { data, loading, error }
}
export default useFetch
