import { Env } from '../types'

// Get Single Setting Data (SSR)
export async function getSingleSetting(slug: string, env: Env) {
    let response = await fetch(`${env.base_url}api/settings/${slug}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env.token,
            Accept: '*/*',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}
