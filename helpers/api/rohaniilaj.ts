import { Env } from '../types'
import { fetchURl } from '../utils'

// Get more Rohaniilaj Data
export function getMoreRohaniilaj(
    currentPage: number = 1,
    perPageItem: number = 1,
    env: Env,
) {
    return fetchURl(env).get('getGalleryByCategory/Rohani Ilaj', {
        params: { pagination: { perPageItem, currentPage } },
    })
}

// Get All Rohaniilaj Data (SSR)
export async function getRohaniilaj(
    currentPage = 1,
    perPageItem = 10,
    env: Env,
) {
    let response = await fetch(
        `${env.base_url}api/getGalleryByCategory/Rohani Ilaj?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + env.token,
                Accept: '*/*',
            },
        },
    )
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}

// Get All Rohaniilaj Data (SSG Path)
export async function getAllRohaniIlaj(env: Env) {
    let response = await fetch(
        `${env.base_url}api/getGalleryByCategory/Rohani Ilaj`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + env.token,
                Accept: '*/*',
            },
        },
    )
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}
