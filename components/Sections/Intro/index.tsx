import { useContext, useEffect, useState } from 'react'
import { getAnnouncements } from '@/helpers/api/home'
import { Env } from '@/helpers/types'
import IntroPure from './pure'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const IntroSection = () => {
    const [announcement, setData] = useState<any>([])
    const { env } = useContext<any>(EnvContext)
    const [loader, setLoader] = useState<boolean>(false)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getAnnouncements(env, controller)
            .then((response: any) => setData([...response.data.data]))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Intro Section API with a message "${err.message}"`,
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

    return (
        <IntroPure
            announcement={announcement}
            loader={loader}
            base_url={env.base_url}
        />
    )
}

export default IntroSection
