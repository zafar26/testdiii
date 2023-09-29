import Image from 'next/image'
import Link from 'next/link'

type BlogCard = {
    title: string
    slug: string
    image_path: string
    content?: string
    baseUrl?: string
    horizontalScroll?: boolean
}
const BlogCard = ({
    title,
    slug,
    image_path,
    content,
    baseUrl,
    horizontalScroll,
}: BlogCard) => {
    return (
        <div
            className={`${
                horizontalScroll ? 'w-full md:w-full' : 'w-48 box-border'
            } inline-block relative h-64 md:flex  md:w-40 lg:w-52 m-2 bg-teal-50 text-teal-900 flex-col items-center shadow rounded`}
        >
            <Link
                href={`/blogs/${slug}`}
                className="w-56 block md:w-full md:h-full "
            >
                <Image
                    loader={({ src }: any) => baseUrl + 'storage/' + src}
                    src={image_path}
                    alt={title}
                    // width={900}
                    // height={700}
                    fill
                    priority={true}
                    loading={'eager'}
                    className="w-full h-full rounded shadow "
                />
            </Link>
            <Link
                href={`/blogs/${slug}`}
                className="font-semibold w-full text-l md:text-xl absolute bottom-0 bg-gradient-to-t from-teal-900 to-transparent via-teal-800 text-teal-100 block py-4 box-border"
            >
                <span className="text-sm md:text-normal w-full font-jameel_noori tracking-wider flex justify-center">
                    {title.length > 26 && horizontalScroll
                        ? title.substring(0, 26) + '...'
                        : title}
                </span>
            </Link>
        </div>
    )
}

export default BlogCard
