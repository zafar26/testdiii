import BlogSVG from '@/components/Icons/blog'
import Image from 'next/image'
import Link from 'next/link'
import PropagateLoader from 'react-spinners/PropagateLoader'

const BlogSectionPure = ({
    loader,
    blogs,
    baseUrl,
}: {
    loader: boolean
    blogs: any[]
    baseUrl: string
}) => {
    return (
        <div className="w-full h-full md:p-16 md:py-10 p-3 bg-teal-100">
            <div className="flex items-center px-2 md:px-4 p-2 border-l-4 border-teal-900 md:mb-8">
                <BlogSVG />
                <span className="ml-2 text-2xl text-teal-900">Blog</span>
            </div>
            {loader && (
                <div className="w-full h-full flex justify-center items-center">
                    <PropagateLoader
                        color={'#FFFFFF'}
                        loading={loader}
                        size={15}
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="mt-4 md:mt-0 md:flex grid-cols-2 place-content-between w-full h-full box-content">
                <div className="md:w-1/2 lg:w-1/2 flex flex-col w-full">
                    <Link
                        href={`/blogs/${blogs[0]?.slug}`}
                        className=" text-xl md:text-2xl font-semibold text-teal-900 "
                    >
                        <div className="flex w-full">
                            {blogs[0]?.image_path && (
                                <Image
                                    loader={({ src }: any) =>
                                        baseUrl + 'storage/' + src
                                    }
                                    src={blogs[0]?.image_path}
                                    alt={'Image'}
                                    width={950}
                                    height={700}
                                    className="w-full"
                                />
                            )}
                        </div>
                        <div className="flex flex-col md:mt-8 mt-2 mb-4 font-jameel_noori tracking-wider">
                            {blogs[0]?.title}
                        </div>
                    </Link>
                </div>
                <div className="md:ml-2 w-full  flex justify-start flex-col sm:flex-col md:flex-col lg:flex-col md:w-1/2 lg:w-1/3">
                    {blogs.map((d: any, index: number) => {
                        if (index !== 0) {
                            return (
                                <div
                                    className="flex md:flex-col mb-2"
                                    key={index}
                                >
                                    <div className="flex">
                                        <Link
                                            href={`/blogs/${d.slug}`}
                                            className="inline-block md:flex	w-1/2 ml-2 sm:ml-0 mt-2 sm:mt-0 md:w-full items-center h-full md:h-40 lg:h-60 xl:h-60 mb-2 text-teal-900 bg-teal-100 shadow-xl md:flex-row md:items-start rounded-xl"
                                        >
                                            <Image
                                                loader={({ src }: any) =>
                                                    baseUrl + 'storage/' + src
                                                }
                                                src={d.image_path}
                                                alt={'Image'}
                                                width={600}
                                                height={500}
                                                className="w-full h-full"
                                                // className="w-full h-full"
                                            />
                                        </Link>
                                        <div className="flex flex-col justify-between ml-4 md:w-72 w-60 xl:w-1/2 ">
                                            <div className="flex">
                                                <Link
                                                    href={`/blogs/${d.slug}`}
                                                    className="text-sm md:text-lg font-semibold text-teal-900 font-jameel_noori"
                                                >
                                                    {d.title}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {blogs.length > 1 && (
                        <Link
                            href="/blogs"
                            className="mt-4 p-4 md:mt-8 flex justify-end"
                        >
                            <p>View All</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogSectionPure
