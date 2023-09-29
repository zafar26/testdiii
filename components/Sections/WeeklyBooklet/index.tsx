import { useContext, useEffect, useState } from 'react'
import Pure from './pure'
import { getWeeklyBooks } from '@/helpers/api/weekly_booklet'
import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const WeeklyBooklet = () => {
    const [weekly_booklets, setData] = useState<any>([])
    const [loading, setLoader] = useState<boolean>(false)
    const { env } = useContext<any>(EnvContext)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getWeeklyBooks(1, 4, env, controller)
            .then((res: any) => setData([...res.data.data]))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Weekly Booklet Section API with a message "${err.message}"`,
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

    return <Pure base_url={env?.base_url} booklets={weekly_booklets} />
}

export default WeeklyBooklet
