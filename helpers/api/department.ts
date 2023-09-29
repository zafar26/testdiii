import { Env } from '../types'
import { fetchURl } from '../utils'

// Get more Departments Data

// export function getMoreDepartments(
//     currentPage: number = 1,
//     perPageItem: number = 1,
//     env?: Env,
// ) {
//     return fetchURl(env).get('getPageByCategory/Department', {
//         params: { pagination: { perPageItem, currentPage } },
//     })
// }

// Get All Departments Data (SSR)
export async function getDepartments(env: Env) {
    let response = await fetch(
        `${env.base_url}api/getPageByCategory/Department`,
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
