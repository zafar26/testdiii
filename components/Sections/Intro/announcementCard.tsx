import Image from 'next/image'

const AnnouncementCard = ({
    data,
    base_url,
}: {
    data: any
    base_url: string
}) => {
    return (
        <div
            key={data.id}
            className="flex w-full h-52 my-2 text-white bg-teal-600 rounded shadow md:w-full lg:w-full"
        >
            <div className="flex flex-row p-4">
                <div className="flex ">
                    <Image
                        loader={({ src }: any) => base_url + src}
                        src={data.image_path}
                        alt="Picture of the Announcement"
                        width={500}
                        height={500}
                        className="w-36 md:w-52"
                    />
                </div>
                <div className="flex flex-col w-full md:w-full ml-2">
                    <p className="ml-2 text-lg text-[10px] md:text-xl font-extrabold text-teal-100">
                        {data.title}
                    </p>
                    <p className="ml-2 text-sm md:text-base">
                        {data.short_description}
                    </p>
                    {/* 
                            Commented because there is no use of it currently 
                            <Link
                            href={'/announcement/' + data.id}
                            className="self-end ml-2 text-xs md:self-start md:text-lg"
                        >
                            Read more
                        </Link> */}
                </div>
            </div>
        </div>
    )
}

export default AnnouncementCard
