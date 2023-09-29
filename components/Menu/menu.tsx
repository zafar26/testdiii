import Image from "next/image";

export default function Menus(props: any) { 
    return (
        <div>
            <div className="m-auto mb-6 text-gray-500 md:container md:relative md:px-12 xl:px-40">
                <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-8/12">
                    <div className="px-4 pt-6">
                        <div className="space-y-4">
                            <center>
                                <div className="bottom-12 flex h-[120px] w-[120px] items-center justify-center rounded-full border-white">
                                    <img className="w-full h-full border-2 border-solid rounded-full border-black-500 " src={props.profile} alt=""/>
                                </div>
                                <h4 className="mt-6 text-2xl font-bold text-center text-black sm:mt-0">
                                    {props.name}
                                </h4>
                                <p className="mt-5 text-sm font-bold text-black sm:text-md">
                                    {props.title}{' '}
                                </p>
                            </center>
                        </div>
                        <div className="grid mt-8 space-y-4">
                            {props.menus.map((menu: any, index: number) => (
                                <a key={index} href={menu.link}>
                                    <div className="px-6 py-3 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-cyan-900 focus:bg-blue-50 active:bg-blue-100">
                                        <div className="relative flex items-center justify-center space-x-4">
                                            <span className="block text-sm font-semibold tracking-wide text-black transition duration-300 w-max group-hover:text-black sm:text-base">
                                                {menu.name}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}