import Link from 'next/link'

const BreadcrumbPure = (props: any) => {
    let link = ''
    return (
        <div className="box-border flex w-full pb-4 mt-4 border-b border-teal-900 border-1">
            {props.list[0] &&
                props.list.map((d: any, index: number) => {
                    if (index != 0) {
                        if (index == props.list.length - 1) {
                            return (
                                <div
                                    className="md:px-2 text-xs font-light md:text-base"
                                    key={index}
                                >
                                    <span className="md:mr-3 mx-1  text-teal-900">
                                        {' > '}
                                    </span>
                                    <span className="hidden md:inline-block text-teal-900 ">
                                        {d.title.length > 50
                                            ? d.title.substring(0, 50) + '...'
                                            : d.title}
                                    </span>
                                    <span className=" md:hidden text-teal-900 ">
                                        {d.title.length > 30
                                            ? d.title.substring(0, 20) + '...'
                                            : d.title}
                                    </span>
                                </div>
                            )
                        } else {
                            link += '/' + d.link
                            return (
                                <Link
                                    href={link}
                                    key={index}
                                    className="md:px-2 text-xs font-light md:text-base"
                                >
                                    <span className="md:mr-3 mx-1 font-semibold text-teal-900">
                                        {' > '}
                                    </span>
                                    <span className="font-semibold text-teal-900">
                                        {d.title}
                                    </span>
                                </Link>
                            )
                        }
                    }
                    return (
                        <Link
                            href={'/'}
                            key={index}
                            className="md:px-2 text-xs font-light md:text-base"
                        >
                            {' '}
                            <span className="text-[#89847E]">{d.title}</span>
                        </Link>
                    )
                })}
        </div>
    )
}

BreadcrumbPure.propTypes = {}

export default BreadcrumbPure
