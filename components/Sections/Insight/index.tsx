import { useContext, useEffect, useState } from 'react'
import Pure from './pure'
import { getDailyInsight } from '@/helpers/api/home'
import useFetch from '@/components/Hooks/useFetch'
import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const InsightSection = () => {
    const [insight, setData] = useState<any>([])
    const [loader, setLoader] = useState<boolean>(false)
    const { env } = useContext<any>(EnvContext)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getDailyInsight(env, controller)
            .then((response: any) => setData(response.data.data))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Daily Insight Section API with a message "${err.message}"`,
                        env.discordUrl ? env.discordUrl : '',
                    )
                }
            })
            .finally(() => setLoader(false))
        // Unmount it
        return () => {
            controller.abort()
        }
    }, [env])

    return <Pure base_url={env.base_url} loader={loader} insight={insight} />
}

export default InsightSection
