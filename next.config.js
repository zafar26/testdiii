/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,  
    // pageExtensions: ['ts', 'tsx'],
})

module.exports = withPWA({
    reactStrictMode: true,
     images: {
        domains:[process.env.BACKEND_URL]
    }
})
