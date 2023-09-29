import FeatureMediaSVG from '@/components/Icons/featureMedia'
import HaftawarBayanSVG from '@/components/Icons/haftawarBayan'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedMediaSectionPure = ({
    media,
    base_url,
}: {
    media: any[]
    base_url: string
}) => {
    return (
        <div className="w-full h-full md:p-14 p-3">
            <div className="flex items-center md:px-4 p-2 md:m-4 md:py-2 border-l-4 border-teal-900 md:mb-8">
                <FeatureMediaSVG />
                <span className="ml-2 text-2xl text-teal-900">
                    Featured Media
                </span>
            </div>
            <div className="mt-4 md:mt-0 md:p-4 md:flex justify-between">
                <div className="md:w-1/2 lg:w-1/2 w-full">
                    <Link
                        href={`/media/${media[0]?.slug}`}
                        className="mt-1 md:mt-4 text-sm md:text-2xl font-black text-white"
                    >
                        <div className="md:w-full w-full mb-2 md:mb-4 h-full">
                            {base_url && media[0] && (
                                <Image
                                    loader={({ src }: any) => base_url + src}
                                    src={media[0]?.thumbnail_image}
                                    alt={media[0]?.name}
                                    width={300}
                                    height={200}
                                    className="w-full h-full"
                                />
                            )}
                        </div>
                        <div className="md:ml-4 w-full  relative right-0 md:right-4 bottom-12 md:bottom-24 bg-gradient-to-tr from-teal-900 to-transparent md:px-4 md:py-2">
                            <div className="w-max bg-teal-900 px-2 py-1 md:p-2 rounded-xl text-white flex items-center">
                                <HaftawarBayanSVG color="#ffffff" size={15} />
                                <span className="text-xs md:text-sm ml-2">
                                    {media[0]?.category?.name}
                                </span>
                            </div>

                            {media[0]?.name}
                        </div>
                    </Link>
                </div>
                <div className="md:ml-2 w-full  flex justify-start flex-col sm:flex-col md:flex-col lg:flex-col md:w-1/2 lg:w-1/3">
                    {media?.map((d: any, index: number) => {
                        if (index !== 0) {
                            return (
                                <Link
                                    href={`/media/${d.slug}`}
                                    key={index}
                                >
                                    <div
                                        className="md:flex-row flex w-full flex-row  m-2 mb-2 md:ml-2 "
                                    >
                                        <div className="w-80 md:w-44 lg:w-48 2xl:w-72 h-44 mr-2">
                                            {base_url &&
                                                media[index]
                                                    .thumbnail_image && (
                                                    <Image
                                                        loader={({
                                                            src,
                                                        }: any) =>
                                                            base_url + src
                                                        }
                                                        src={d?.thumbnail_image}
                                                        alt={d.name}
                                                        width={400}
                                                        height={400}
                                                        // fill
                                                        className="w-full h-full"
                                                    />
                                                )}
                                        </div>
                                        <div className="w-full md:w-32 lg:w-48 2xl:w-52 h-36 md:h-36 lg:h-36 xl:h-36">
                                            <div className="w-max bg-teal-900 px-2 py-1 md:p-2 rounded-xl text-white flex stroke-white items-center">
                                                <HaftawarBayanSVG
                                                    color="#ffffff"
                                                    size={15}
                                                />
                                                <span className="text-xs font-light md:text-sm lg:text-base ml-2 ">
                                                    {d?.category?.name}
                                                </span>
                                            </div>
                                            
                                                <p className="mt-1 md:mt-2 text-sm md:text-lg lg:text-base lg:font-normal font-semibold text-teal-900">
                                                    {d?.name} 
                                                </p>
                                            
                                        
                                    </div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                    <div className="flex w-full justify-end">
                        <Link href="/media" className="mt-4 p-4 md:mt-8">
                            <p>View All</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMediaSectionPure
