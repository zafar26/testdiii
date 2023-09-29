import AnnouncementCard from './announcementCard'
import ResponsiveEmbed from 'react-responsive-embed'
import SpeakerSVG from '@/components/Icons/speaker'
import PropagateLoader from 'react-spinners/PropagateLoader'

const IntroPure = ({
    announcement,
    loader,
    base_url,
}: {
    announcement: any[]
    loader: boolean
    base_url: string
}) => {
    return (
        <>
            <div className="box-border block w-full h-full mt-2 md:bg-teal-900 md:p-16 sm:p-6 md:flex md:flex-col lg:flex-row 2xl:flex-row">
                <div className="p-3 bg-white md:w-full md:p-8 md:rounded-3xl">
                    <div className="w-full ">
                        <div
                            style={{
                                position: 'relative',
                                height: 0,
                                overflow: 'hidden',
                                maxWidth: '100%',
                                paddingBottom: '56.25%',
                            }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/R4xVdtSdHuw"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl">
                        Introduction of DawateIslami India
                    </h2>
                    <p className="mt-1 text-lg font-light md:text-lg md:font-light">
                        New Documentary 2023
                    </p>
                </div>
                {/* Announcements */}
                <div className="box-border flex flex-col justify-start w-full h-full p-3 bg-teal-100 sm:p-4 md:w-full md:h-auto md:p-4 md:rounded-3xl lg:ml-2 md:mt-4 lg:mt-0 2xl:p-16 2xl:pt-6">
                    <div className="flex items-center self-center">
                        <SpeakerSVG />
                        <span className="ml-2 text-2xl font-semibold text-teal-900 underline">
                            Announcements
                        </span>
                    </div>
                    <div className="flex flex-col items-center w-full mt-4">
                        {/* <div className='overflow-y-auto h-3/4'> */}
                        {loader && (
                            <div className="flex items-center justify-center w-full h-full">
                                <PropagateLoader
                                    color={'#134E4A'}
                                    loading={loader}
                                    size={15}
                                    aria-label="Loading Spinner"
                                />
                            </div>
                        )}
                        {announcement.map((data: any, index: any) => (
                            <AnnouncementCard
                                key={data.id}
                                data={data}
                                base_url={base_url}
                            />
                        ))}
                        {/* </div> */}
                        {announcement.length > 4 && (
                            <a className="flex self-end mt-2 text-base">
                                View All
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
export default IntroPure
