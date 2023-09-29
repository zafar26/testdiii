import { myLoader } from '@/helpers/utils'
import Image from 'next/image'
import Link from 'next/link'

const WeeklyBooklet = ({ id, title, image, date }: any) => {
    return (
        <div
            key={id}
            className="flex  md:w-40 lg:w-52 m-4 bg-teal-50 text-teal-900 flex-col items-center py-2 shadow rounded"
        >
            <Image
                loader={myLoader}
                src={image}
                alt={'Image'}
                width={200}
                height={200}
            />
            <p className="mt-2 font-light text-sm">{date}</p>
            <Link href="/weekly-booklet/1" className="mt-1">
                {title}
            </Link>
        </div>
    )
}

export default WeeklyBooklet
