import Image from 'next/image'
import Link from 'next/link'
import PropagateLoader from 'react-spinners/PropagateLoader'

const DonationPure = ({
    donations,
    loader,
    base_url,
}: {
    donations: any[]
    loader: boolean
    base_url: string
}) => {
    return (
        <div className="md:p-16 px-3 py-8 w-full bg-teal-900">
            <p className="text-white text-3xl text-center font-semibold ">
                Donate for the Cause of Dawateislami India
            </p>
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
            <div className="mt-4 md:mt-12  w-full flex justify-normal xl:justify-center  overflow-x-auto">
                {donations?.map((d: any, index: number) => (
                    <div
                        key={index}
                        className="text-teal-900 mx-4 w-full flex flex-col justify-start items-center bg-teal-100 md:px-6 lg:px-4 xl:px-6 md:py-20 py-10 rounded-xl"
                    >
                        <div className="w-18 h-18">
                            <Image
                                loader={({ src }: any) =>
                                    base_url + 'storage/' + src
                                }
                                src={d.image_path}
                                alt={'Image'}
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className="mt-4 w-48 xl:w-56 h-full text-center  py-4 ">
                            <p className="text-lg leading-5 md:text-xl font-semibold">
                                {d.title}
                            </p>
                            <p className="md:mt-4 mt-2 text-xs md:text-lg font-light ">
                                {d.description}
                            </p>
                        </div>
                        <Link
                            href={d.link}
                            className="text-teal-900 border border-teal-900 rounded-lg p-2 shadow hover:bg-teal-900 hover:text-white transition ease-in-out delay-150  hover:-translate-x-1 hover:scale-110  duration-200"
                        >
                            Donate Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

DonationPure.propTypes = {}

export default DonationPure
