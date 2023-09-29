import { Env } from '@/helpers/types'
import Pure from './pure'
import { useContext, useEffect, useState } from 'react'
import { getDonations } from '@/helpers/api/home'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const DonationSection = () => {
    const [data, setData] = useState<any>([])
    const [loader, setLoader] = useState<boolean>(false)
    const { env } = useContext<any>(EnvContext)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getDonations(env, controller)
            .then((res: any) => setData([...res.data.data]))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Donation Section API with a message "${err.message}"`,
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

    let donations: any = [
        ...data.sort((a: any, b: any) => a.priority - b.priority),
    ]

    return (
        <Pure donations={donations} loader={loader} base_url={env.base_url} />
    )
}

export default DonationSection
