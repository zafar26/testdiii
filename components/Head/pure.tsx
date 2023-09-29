import React from 'react'
import Head from 'next/head'

const HeadTagPure = ({
    tittle = 'Dawateislami India',
    seoTitle = 'Dawateislami India',
    seoImage = '/kamyabikasafar.jpg',
    seoDescription = 'A global islamic movement serving ummah and preaching the message of Quraan and Sunnah in 79 departments',
    seoURL = '/',
}: any) => {
    return (
        <Head>
            <title>{tittle}</title>
            {/* PWA Links */}

            <link rel="manifest" href="/manifest.webmanifest.json" />
            <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
            <meta name="theme-color" content="#d6f8d2" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <meta name="title" content={seoTitle} />
            <meta name="description" content={seoDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoURL} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seoURL} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            <meta property="twitter:image" content={seoImage} />
            <script async src="https://analytics.umami.is/script.js" data-website-id="ab77dbc9-93f3-4b48-9be4-870386efec88"></script>
        </Head>
    )
}

export default HeadTagPure
