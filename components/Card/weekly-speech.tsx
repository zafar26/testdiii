import { myLoader } from '@/helpers/utils'
import Image from 'next/image'
import Link from 'next/link'
import DownloadSVG from '../Icons/download'
import ReadSVG from '../Icons/read'

const WeeklySpeech = ({ id, image, title, readLink, downloadLink }: any) => {
    return (
        <>
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
                <Link href="/weekly-speech/1" className="mt-2 ">
                    {title.length > 18 ? title.slice(0, 16) + '...' : title}
                </Link>

                <div className="flex justify-around items-center w-full mt-4">
                    <Link
                        href={
                            '/weekly-speech/read?src=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                        }
                        className="flex items-center p-2  rounded text-teal-900"
                    >
                        <ReadSVG />
                    </Link>
                    <Link
                        href={
                            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
                        }
                        className="flex items-center p-2  rounded text-teal-900"
                    >
                        <DownloadSVG />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WeeklySpeech
