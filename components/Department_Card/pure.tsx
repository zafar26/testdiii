import Image from 'next/image'
import Link from 'next/link'

const DepartmentCard = ({
    title = 'Darul Madina School',
    content = ''
}: any) => {
    
    return (
        <div className="lg:w-1/5 md:w-3/4 bg-[#C9E1ED] border mx-2 my-4 shadow-lg flex flex-col rounded-xl justify-start items-center hover:bg-teal-900 hover:text-white transition ease-in-out delay-150  hover:-translate-y-0.5 hover:-translate-x-0.5 hover:scale-110  duration-200">
            <div className=" p-4 md:px-8 text-center ">
                <p className="md:text-xl font-bold">
                    {title}
                </p>
                <p className="font-light mt-2">
                    {content.length > 190
                        ? content.substring(0, 190) + '...'
                        : content}
                </p>
            </div>
        </div>
    )
}

export default DepartmentCard
