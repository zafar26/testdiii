import { Env } from '../types'
import { fetchURl } from '../utils'

// Get All Weekly Books (SSR)
export async function getAllWeeklyBooks(
    currentPage = 1,
    perPageItem = 4,
    env: Env,
) {
    let response = await fetch(
        `${env.base_url}api/weekly-booklets?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}`,
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

// Get Weekly Books
export function getWeeklyBooks(
    currentPage: number = 1,
    perPageItem: number = 1,
    env: Env,
    controller: AbortController,
) {
    return fetchURl(env).get('weekly-booklets', {
        signal: controller.signal,
        params: { pagination: { perPageItem, currentPage } },
    })
}

// Get Single Page Weekly Book (SSR)
export async function getWeeklyBook(slug: string, env?: Env) {
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

// Get All Weekly Books (SSG)
export async function getAllWeeklyBook(env: Env) {
    let response = await fetch(`${env.base_url}api/weekly-booklets`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env.token,
            Accept: 'application/json',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: [] }
    }
}