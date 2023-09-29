import { Env } from '@/helpers/types'
import { myLoader } from '@/helpers/utils'
import Image from 'next/image'
import Link from 'next/link'

type Data = {
    id: number
    slug: string
    name: string
    media_type: string
    media_path: string
    month: string
    thumbnail_image?: string
    language: {
        id: number
        name: string
        code: string
    }
    env?: Env
    horizontalScroll?: boolean
}

const MediaCard = ({
    id,
    name,
    slug,
    media_type,
    media_path,
    language,
    thumbnail_image,
    env,
    horizontalScroll,
}: Data) => {
    return (
        <Link
            href={`/media/${slug}`}
            key={id}
        >
            <div
                className={`${
                    horizontalScroll ? 'w-full md:w-full' : 'w-60 box-border'
                } inline-block relative h-64 md:flex  md:w-40 lg:w-52 m-2 bg-teal-50 text-teal-900 flex-col items-center shadow rounded`}
                
            >
                <div className="w-60  md:w-full md:h-full">
                    <Image
                        loader={({ src }: any) => env?.base_url + src}
                        src={thumbnail_image ? thumbnail_image : ''}
                        alt={'Image'}
                        // width={500}
                        // height={500}
                        fill
                        // className="w-full h-48 border rounded-t-xl"
                        className="w-full h-full rounded shadow "
                    />
                </div>
                <div className="w-full bg-teal-50 p-4 md:p-4 text-center  text-teal-900 rounded-b absolute bottom-0">
                    <p className="md:text-md block truncate">{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default MediaCard
