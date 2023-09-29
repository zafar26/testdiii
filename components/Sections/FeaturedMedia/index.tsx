import Pure from './pure'
import { useContext, useEffect, useState } from 'react'
import { getMedia } from '@/helpers/api/media'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const FeaturedMediaSection = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoader] = useState<boolean>(false)
    const { env } = useContext<any>(EnvContext)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getMedia(1, 4, env, controller)
            .then((res: any) => setData([...res.data.data]))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Media Section API with a message "${err.message}"`,
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

    return <Pure base_url={env.base_url} media={data} />
}
export default FeaturedMediaSection
