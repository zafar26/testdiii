import axios from 'axios'
import { Env } from './types'

export const myLoader = ({ src }: any) => {
    return `/data/${src}`
}

// Customized URL scheme
export const fetchURl = ({ base_url, token }: Env) =>
    axios.create({
        baseURL: base_url + 'api/',
        // timeout: 5000,
        headers: { Authorization: 'Bearer ' + token },
    })

export const detectMob = ():any => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

// Discord Logger
export const discordLog = (message: string, url: string) =>
    axios
        .post(url, {
            username: 'Logger',
            avatar_url: '',
            content: message,
        })
        .then((r: any) => {})
        .catch((err: any) => {})