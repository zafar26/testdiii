import { useContext, useEffect, useState } from 'react'
import Pure from './pure'
import { getBlogs } from '@/helpers/api/blog'
import { Env } from '@/helpers/types'
import { discordLog } from '@/helpers/utils'
import { EnvContext } from '@/components/Context/ApiContext'

const BlogSection = () => {
    const [blogs, setBlogs] = useState<any>([])
    const [loader, setLoader] = useState<boolean>(false)
    const { env } = useContext<any>(EnvContext)
    useEffect(() => {
        setLoader(true)
        const controller = new AbortController()
        getBlogs(env, 4, controller)
            .then((res: any) => setBlogs([...res.data.data]))
            .catch((err: any) => {
                if (err.code != 'ERR_CANCELED') {
                    discordLog(
                        `Error: Get Blog Section API with a message "${err.message}"`,
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
    return <Pure blogs={blogs} loader={loader} baseUrl={env.base_url} />
}

export default BlogSection
