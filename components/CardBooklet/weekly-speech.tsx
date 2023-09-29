import Image from 'next/image'
import Link from 'next/link'
import DownloadSVG from '../Icons/download'
import ReadSVG from '../Icons/read'

const WeeklySpeech = ({
    id,
    name,
    book_languages,
    slug,
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
            <div className="w-56  md:w-full md:h-full ">
                <Image
                    loader={({ src }: any) => baseUrl + src}
                    src={book_languages[0]?.cover_image_path}
                    alt={'Image'}
                    fill
                    priority={true}
                    loading={'eager'}
                    className="w-full h-full rounded shadow "
                />
            </div>
            <div className=" w-full h-24 bg-gradient-to-t from-teal-900 to-transparent via-teal-800 rounded absolute bottom-0 flex items-end box-content">
                <div className=" text-teal-100 flex flex-col items-start justify-start p-2 rounded">
                    <p className="mt-2 font-light text-sm text-teal-100">
                        {book_languages[0]?.published_on}
                    </p>
                    <Link
                        href={`/weekly-speech/${slug}?lang=${
                            book_languages[0]
                                ? book_languages[0]?.language.code
                                : 'hi'
                        }`}
                        className="self-end mt-1 text-bold"
                    >
                        {name}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WeeklySpeech
