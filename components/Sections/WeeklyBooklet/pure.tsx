import WeeklyBookletSVG from '@/components/Icons/weeklyBook'
import Image from 'next/image'
import Link from 'next/link'

const WeeklyBookletPure = ({
    booklets,
    base_url,
}: {
    booklets: any[]
    base_url: string
}) => {
    return (
        <div className="p-3 bg-teal-900 md:p-16 w-full xl:h-full box-border">
            <div className="flex items-center md:px-4 p-2 border-l-4 border-white md:mb-8">
                <WeeklyBookletSVG />
                <p className="ml-2 text-2xl text-white">Weekly Booklet</p>
            </div>
            <div className="box-border block w-full h-full mt-2 md:bg-teal-900 md:flex lg:flex-row 2xl:flex-row">
                <div className="p-3 bg-teal-100 md:w-1/2 lg:w-2/3 w-full md:p-8 md:rounded-3xl">
                    <Link
                        href={`/weekly-booklet/${booklets[0]?.book.slug}?lang=${
                            booklets[0]?.book?.book_languages[0]
                                ? booklets[0]?.book?.book_languages[0]?.language
                                      .code
                                : 'hi'
                        }`}
                        className="font-bold text-teal-900 md:text-2xl "
                    >
                        <div className="m-2 ">
                            {booklets[0]?.book?.book_languages[0]
                                ?.cover_image_path && (
                                <Image
                                    loader={({ src }: any) => base_url + src}
                                    src={
                                        booklets[0]?.book?.book_languages[0]
                                            ?.cover_image_path
                                    }
                                    alt={'Image'}
                                    width={500}
                                    height={500}
                                    // fill
                                    loading={'lazy'}
                                    className="w-5/6  mx-auto md:w-3/4 lg:w-2/4 xl:w-96 xl:h-full"
                                />
                            )}
                        </div>
                        <div className="w-full p-2 text-center">
                            <p className="text-xs text-teal-900  md:text-base font-extralight">
                                {booklets[0]?.announcement_date}
                            </p>
                            {booklets[0]?.book.name}
                        </div>
                    </Link>
                </div>
                <div className="md:ml-2 w-full  flex justify-start flex-row sm:flex-col md:flex-col lg:flex-col md:w-1/2 lg:w-1/3">
                    <div className="w-full flex flex-row sm:flex-col md:justify-center">
                        {booklets.map(
                            (d: any, index: number) =>
                                index != 0 && (
                                    <Link
                                        key={index}
                                        href={`/weekly-booklet/${
                                            d.book.slug
                                        }?lang=${
                                            d.book?.book_languages[0]
                                                ? d.book?.book_languages[0]
                                                      ?.language.code
                                                : 'hi'
                                        }`}
                                        className={`inline-block md:flex ${index == 3 ? "" : "mb-2"} w-1/2 ml-2 sm:ml-0 mt-2 sm:mt-0 md:w-full items-center md:h-40 lg:h-60 xl:h-60 text-teal-900 bg-teal-100 shadow-xl md:flex-row md:items-start rounded-xl `}
                                    >
                                        {/* <div className=" "> */}
                                        <div className="w-full md:w-32 lg:w-48 2xl:w-52 md:h-full lg:h-full xl:h-60">
                                            <Image
                                                loader={({ src }: any) =>
                                                    base_url + src
                                                }
                                                src={
                                                    d.book.book_languages[0]
                                                        .cover_image_path
                                                }
                                                alt={'Image'}
                                                width={200}
                                                height={400}
                                                className="w-full md:w-40 lg:w-64 2xl:w-60 h-48 md:h-full lg:h-full xl:h-60  md:rounded-l-xl rounded-t-xl md:rounded-tr-none "
                                            />
                                        </div>
                                        <div className="flex flex-col md:w-1/2 items-center  p-1 mt-1 md:items-start flex-wrap">
                                            <p className="text-xs font-[50] md:font-extralight md:text-base ">
                                                {d.announcement_date}
                                            </p>
                                            <p className="p-1 text-xs text-center md:text-xl md:text-left ">
                                                {d.book.name}
                                            </p>
                                        </div>
                                        {/* </div> */}
                                    </Link>
                                ),
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-end">
                <Link
                        href="/weekly-booklet"
                        className="flex items-center justify-center p-4 text-white md:justify-end "
                    >
                        View All
                </Link>
            </div>
        </div>
    )
}

WeeklyBookletPure.propTypes = {}

export default WeeklyBookletPure
