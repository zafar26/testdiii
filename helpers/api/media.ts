import { Env } from '../types'
import { fetchURl } from '../utils'

// Get All Media  (SSR)
export async function getAllMedia(currentPage = 1, perPageItem = 4, env: Env) {
    let response = await fetch(
        `${env.base_url}api/media?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + env.token,
                Accept: '*/*',
                'User-Agent': '*',
            },
        },
    )
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}

// Get Media
export function getMedia(
    currentPage: number = 1,
    perPageItem: number = 1,
    env: Env,
    controller?: AbortController,
) {
    return fetchURl(env).get('media', {
        params: { pagination: { perPageItem, currentPage } },
        signal: controller?.signal,
    })
}

// Get Single Page Media (SSR)
export async function getSingleMedia(slug: string, env?: Env) {
    let response = await fetch(`${env?.base_url}api/media/` + slug, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env?.token,
            Accept: 'application/json',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: {} }
    }
}

// Get Single Page Media (SSG)
export async function getMediaAll(env: Env) {
    let response = await fetch(`${env?.base_url}api/media`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env?.token,
            Accept: 'application/json',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: {} }
    }
}
