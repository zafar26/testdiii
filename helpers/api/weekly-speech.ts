import { Env } from '../types'
import { fetchURl } from '../utils'

// Get All Weekly Speech (SSR)
export async function getAllWeeklySpeech(
    currentPage = 1,
    perPageItem = 4,
    env: Env,
) {
    let response = await fetch(
        `${env.base_url}api/books?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}&category=weekly-speeches`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + env.token,
                Accept: 'application/json',
            },
        },
    )
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}

// Get More Weekly Speech
export function getMoreWeeklySpeech(
    currentPage: number = 1,
    perPageItem: number = 1,
    env: Env,
) {
    return fetchURl(env).get('books', {
        params: {
            pagination: { perPageItem, currentPage },
            category: 'weekly-speeches',
        },
    })
}

// Get Single Page Weekly Speech (SSR)
export async function getWeeklySpeech(slug: string, env?: Env) {
    let response = await fetch(`${env?.base_url}api/books/` + slug, {
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

// Get All Weekly Speech (SSG)
export async function getWeeklySpeechAll(env: Env) {
    let response = await fetch(
        `${env.base_url}api/books?category=weekly-speeches`,
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + env.token,
                Accept: 'application/json',
            },
        },
    )
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}