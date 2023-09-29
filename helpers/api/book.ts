import { Env } from '../types'
import { fetchURl } from '../utils'

// Get All Books (SSR)
export async function getAllBooks(currentPage = 1, perPageItem = 8, env: Env) {
    let response = await fetch(
        `${env.base_url}api/books?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}`,
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

// Get More Books
export function getMoreBooks(
    currentPage: number = 1,
    perPageItem: number = 1,
    env: Env,
) {
    return fetchURl(env).get('books', {
        params: { pagination: { perPageItem, currentPage } },
    })
}

// Get Single Page Book (SSR)
export async function getBook(slug: string, env: Env) {
    let response = await fetch(`${env?.base_url}api/books/` + slug, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env.token,
            Accept: 'application/json',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: {} }
    }
}

// Get All Books (SSG)
export async function getAllBook(env: Env) {
    let response = await fetch(`${env.base_url}api/books`, {
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