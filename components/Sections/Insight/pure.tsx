import ClockSvg from '@/components/Icons/clock'
import Image from 'next/image'
import PropagateLoader from 'react-spinners/PropagateLoader'

let color = ['bg-teal-900', 'bg-teal-600', 'bg-[#C36F09]']

const InsightPure = ({
    loader,
    insight,
    base_url,
}: {
    loader: boolean
    insight: any[]
    base_url: string
}) => {
    return (
        <div className="md:p-16 p-4 w-full ">
            <div className="border-l-4 border-teal-900 md:px-4 flex items-center p-2">
                <ClockSvg />
                <p className="ml-2 text-2xl">Daily Insights</p>
            </div>
            {loader && (
                <div className="w-full h-full flex justify-center items-center">
                    <PropagateLoader
                        color={'#134E4A'}
                        loading={loader}
                        size={15}
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="md:flex-row flex flex-col items-center ">
                {insight.map((d: any, index: number) => (
                    <div
                        key={index}
                        className={`${color[index]} m-4 md:rounded-[50px] rounded-xl flex flex-col items-center w-full md:w-1/3`}
                    >
                        <Image
                            loader={({ src }: any) => base_url + src}
                            src={d.image_path}
                            alt={d.type}
                            width={300}
                            height={200}
                            className="w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

InsightPure.propTypes = {}

export default InsightPure
