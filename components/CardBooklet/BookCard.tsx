import Image from 'next/image'
import Link from 'next/link'

const BookCard = ({
    id,
    name,
    slug,
    image,
    book_languages,
    baseUrl,
    horizontalScroll,
}: any) => {
    return (
        <div
            key={id}
            className={`${
                horizontalScroll ? 'w-full md:w-full' : 'w-48 box-border'
            } inline-block relative h-64 md:flex  md:w-40 lg:w-52 m-2 bg-teal-50 text-teal-900 flex-col items-center shadow rounded`}
        >
            <div className="w-56  md:w-full md:h-full">
                <Image
                    loader={({ src }: any) => baseUrl + src}
                    src={
                        book_languages[0]
                            ? book_languages[0]?.cover_image_path
                            : ''
                    }
                    alt={'Image'}
                    className="w-full h-full rounded shadow "
                    fill
                    priority={true}
                    loading={'eager'}
                />
            </div>
            <div className=" w-full bg-gradient-to-t from-teal-900 to-transparent via-teal-800 rounded z-0 h-16 absolute bottom-0 flex items-end">
                <div className=" text-white flex items-end p-2 rounded">
                    {/* <p className="mt-2 font-light text-sm ">{date}</p> */}
                    <Link
                        href={`/books/${slug}?lang=${
                            book_languages[0]
                                ? book_languages[0]?.language.code
                                : 'hi'
                        }`}
                        className="self-end mt-1 text-bold"
                    >
                        {name}
                    </Link>
                </div>
                {/* <div className="absolute hidden group-hover:block ">
                    <div className="flex flex-col md:flex-col mt-4 items-center md:w-auto">
                        <button className="flex p-2 border border-white rounded text-white w-full  items-center ml-4 mt-2 md:mt-0 ">
                            <WeeklyBookletSVG color="#ffffff" />
                            <Link
                                href={`books/read?src=${
                                    process.env.BACKEND_URL +
                                    '/' +
                                    book_languages?.file_path
                                }`}
                                className="ml-2 "
                            >
                                Read
                            </Link>
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default BookCard
