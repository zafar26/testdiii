import { Env } from '../types'
import { fetchURl } from '../utils'

// Get About Us Page Data (SSR)
export async function getAboutUsPage(env: Env) {
    let response = await fetch(`${env.base_url}api/pages/about-us`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env.token,
            Accept: '*/*',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: {} }
    }
}

// Get Terms & Condition Page Data (SSR)
export async function getTermsAndCondition(env: Env) {
    // return fetchURl(env).get('pages/terms-and-conditions')
    let response = await fetch(
        `${env.base_url}api/pages/terms-and-conditions`,
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
        return { data: {} }
    }
}

// Get privacy policy Page Data (SSR)
export async function getPrivacyPolicyPage(env: Env) {
    // return fetchURl(env).get('pages/privacy-policy')
    let response = await fetch(`${env.base_url}api/pages/privacy-policy`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + env.token,
            Accept: '*/*',
        },
    })
    if (response.ok) {
        return await response.json()
    } else {
        return { data: {} }
    }
}