import Image from 'next/image'
import Link from 'next/link'

const WeeklyBooklet = ({
    id,
    announcement_date,
    book,
    baseUrl,
    horizontalScroll,
}: any) => {
    return (
        <div
            className={`${
                horizontalScroll ? 'w-full md:w-full' : 'w-48 box-border'
            } inline-block relative h-64 md:flex  md:w-40 lg:w-52 m-2 bg-teal-50 text-teal-900 flex-col items-center shadow rounded`}
        >
            <div className="w-56  md:w-full md:h-full ">
                <Image
                    loader={({ src }: any) => baseUrl + src}
                    src={
                        book?.book_languages[0]
                            ? book?.book_languages[0]?.cover_image_path
                            : ''
                    }
                    alt={'Image'}
                    fill
                    className="w-full h-full rounded shadow "
                    priority={true}
                    loading={'eager'}
                />
            </div>
            <div className=" w-full bg-gradient-to-t from-teal-900 to-transparent via-teal-800 rounded z-0 h-16  absolute bottom-0 flex items-end">
                <div className=" text-white flex flex-col  items-end p-2 rounded">
                    <p className="mt-2 font-light text-sm ">
                        {announcement_date}
                    </p>
                    <Link
                        href={`/weekly-booklet/${book.slug}?lang=${
                            book?.book_languages[0]
                                ? book?.book_languages[0]?.language.code
                                : 'hi'
                        }`}
                        className="self-end mt-1 text-bold"
                    >
                        {book?.name}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WeeklyBooklet
