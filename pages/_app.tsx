import { EnvContextProvider } from '@/components/Context/ApiContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [pageLoader, setPageLoader] = useState<boolean>(false)
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setPageLoader(true)
        })
        router.events.on('routeChangeComplete', () => {
            setPageLoader(false)
        })
    }, [router.events])
    return (
        <EnvContextProvider>
            {pageLoader ? (
                <div className="w-full h-screen flex justify-center items-center">
                    <Image
                        loader={({ src }) => src}
                        src={'/pageLoader.png'}
                        alt={'Image'}
                        width={200}
                        height={200}
                        className="heartbeat-animation"
                    />
                </div>
            ) : (
                <Component {...pageProps} />
            )}
        </EnvContextProvider>
    )
}
