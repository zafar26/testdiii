import { Env } from '../types'
import { fetchURl } from '../utils'

// Get Blogs Data for Home Page
export function getBlogs(env: Env, limit = 3, controller: AbortController) {
    return fetchURl(env).get('blogs', {
        params: { limit },
        signal: controller.signal,
    })
}

// Get Blogs Data (SSR)
export async function getAllBlogs(
    currentPage = 1,
    perPageItem = 6,
    category = '',
    env: Env,
) {
    let response = await fetch(
        `${env.base_url}api/blogs?pagination[perPageItem]=${perPageItem}&pagination[currentPage]=${currentPage}&category=${category}`,
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
// Get More Blogs
export function getMoreBlogs(
    currentPage: number = 1,
    perPageItem: number = 1,
    category: string = '',
    env: Env,
) {
    return fetchURl(env).get('blogs', {
        params: {
            pagination: {
                perPageItem,
                currentPage,
            },
            category: category,
        },
    })
}

// Get Single Page Blog (SSR)
export async function getBlog(slug: any, env: Env) {
    let response = await fetch(`${env.base_url}api/blogs/${slug}`, {
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

// Get All Blog (SSG)
export async function getAllBlog(env: Env) {
    let response = await fetch(`${env.base_url}api/blogs`, {
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
