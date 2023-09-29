import Link from 'next/link'
import FGNChannelSvg from '../Icons/fgnChannel'
import HaftawarBayanSVG from '../Icons/haftawarBayan'
import IslamicSisterSvg from '../Icons/islamicSister'
import OnlineCourseSvg from '../Icons/onlineCourse'
import ReadSVG from '../Icons/read'
import RohaniilajSvg from '../Icons/rohaniilaj'
import ZakatCalculatorSVG from '../Icons/zakatCalculator'
import KidSVG from '../Icons/kid'

let shortcuts = [
    {
        name: 'Roohani Ilaj',
        component: <RohaniilajSvg />,
        link: '/roohaniilaj',
    },
    {
        name: 'Quraan',
        component: <ReadSVG />,
        link: '/quraan',
    },
    {
        name: 'FGN Channel',
        component: <FGNChannelSvg />,
        link: '/fgn-channel',
    },
    {
        name: 'Zakat Calculator',
        component: <ZakatCalculatorSVG />,
        link: '/zakat-calculator',
    },
    {
        name: 'Weekly Speeches',
        component: <HaftawarBayanSVG />,
        link: '/weekly-speech',
    },
    {
        name: 'Online Courses',
        component: <OnlineCourseSvg />,
        link: '/online-courses',
    },
    {
        name: 'Islamic Sisters',
        component: <IslamicSisterSvg />,
        link: '/islamic-sisters',
    },
    {
        name: 'Kids',
        component: <KidSVG />,
        link: '/kids',
    },
]
const ShortcutsPure = (props: any) => {
    return (
        <div className=" w-full px-2   lg:px-16">
            <div className="w-full flex overflow-x-auto md:p-0 md:rounded-full justify-normal xl:justify-center">
                {shortcuts.map((d: any, index: number) => {
                    if (d.link) {
                        return (
                            <Link
                                href={d.link}
                                key={index}
                                className="p-2 mx-2 text-center md:flex md:items-center md:flex-row flex-col justify-center rounded  hover:border"
                            >
                                <div className=" rounded-full md:rounded-none flex justify-center">
                                    {d.component}
                                </div>
                                <p className="ml-2 text-xs md:text-lg">
                                    {d.name}
                                </p>
                            </Link>
                        )
                    }
                    return (
                        <div
                            key={index}
                            className="p-2 mx-2 text-center md:flex md:items-center "
                        >
                            <div className="md:bg-teal-100 rounded-full md:rounded-none flex justify-center">
                                {d.component}
                            </div>
                            <p className="ml-2 text-xs md:text-lg">{d.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

ShortcutsPure.propTypes = {}

export default ShortcutsPure
