import Image from 'next/image'
import ShareSVG from '../Icons/share'
import Link from 'next/link'
import DownloadSVG from '../Icons/download'

const CardModal = ({ data, setData, base_url, shareit }: any) => {
    return (
        <>
            <div
                onClick={() => setData(undefined)}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
            >
                <div className="relative flex flex-col items-center">
                    <button
                        onClick={() => setData(undefined)}
                        type="button"
                        className="absolute top-3 right-2.5 bg-transparent bg-gray-900 text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="p-6 text-center">
                        <Image
                            loader={({ src }: any) => base_url + src}
                            src={data.image_path}
                            alt={'Image'}
                            width={600}
                            height={600}
                            className="max-w-m h-4/5 mt-4 max-"
                            priority={true}
                            loading={'eager'}
                        />
                        <div className="flex mt-1 justify-center">
                            {/* <button
                                onClick={() => shareit()}
                                className="flex justify-center items-center md:ml-2 p-2  rounded text-white bg-teal-900"
                            >
                                <ShareSVG />
                                <p>Share</p>
                            </button> */}
                            <Link
                                href={`${base_url + data?.image_path}`}
                                className="flex items-center md:ml-2 p-2 ml-2 bg-teal-900 rounded text-white"
                                target="_blank"
                                download
                            >
                                <DownloadSVG />
                                <p>Download</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardModal
