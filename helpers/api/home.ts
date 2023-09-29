import { Env } from '../types'
import { fetchURl } from '../utils'

// Get Announcements
export async function getAnnouncements(env: Env, controller: AbortController) {
    return await fetchURl(env).get(
        'announcements?pagination[perPageItem]=10&pagination[currentPage]=1&limit=3&is_featured=0',
        {
            signal: controller.signal,
        },
    )
}

// Get DailyInsight
export function getDailyInsight(env: Env, controller: AbortController) {
    return fetchURl(env).get('daily-insights?', {
        signal: controller.signal,
    })
}

// Get Donation Data
export function getDonations(env: Env, controller: AbortController) {
    return fetchURl(env).get('donation-campaigns', {
        signal: controller.signal,
    })
}
// Newsletter
export function subscribeNewsletter(env: Env, email: string) {
    return fetchURl(env).post('newsletters', null, { params: { email } })
}

// Settings
export function getSingleSetting(
    env: Env,
    slug: string,
    controller: AbortController,
) {
    return fetchURl(env).get(`settings/${slug}`, {
        signal: controller.signal,
    })
}

// Hijri Date 
export function getHijriDate(
    env: Env,
    controller: AbortController,
) {
    return fetchURl(env).get(`/hijri-date`, {
        signal: controller.signal,
    })
}