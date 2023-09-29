import React from 'react'
import Link from 'next/link'
import LogoSvg from './logo-svg'
import { breadcrumb } from '@/helpers/constants'
import BreadCrumbSection from '../Sections/Breadcrumb'
import { NextRouter } from 'next/router'
import CharitySVG from '../Icons/charity'
import RohaniilajSvg from '../Icons/rohaniilaj'
import ReadSVG from '../Icons/read'
import FGNChannelSvg from '../Icons/fgnChannel'
import ZakatCalculatorSVG from '../Icons/zakatCalculator'
import HaftawarBayanSVG from '../Icons/haftawarBayan'
import OnlineCourseSvg from '../Icons/onlineCourse'
import IslamicSisterSvg from '../Icons/islamicSister'
import KidSVG from '../Icons/kid'

interface NavProps {
    toggleMenuOpen?: () => void
    isMenuOpen?: boolean
    selectedPage?: string
    router?: NextRouter
    hijriDate?: string
    currentDate: () => string
    pageTitle?: string
}

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
        target: '_blank',
    },
    {
        name: 'Zakat Calculator',
        component: <ZakatCalculatorSVG />,
        link: '/zakat-calculator',
    },
    {
        name: 'Haftawar Bayanat',
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

const navigators = [
    {
        name: 'Home',
        path: '/',
        svg: (selected: Boolean) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
            </svg>
        ),
    },
    {
        name: 'Departments',
        path: '/departments',
        svg: (selected: Boolean) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        name: 'Books',
        path: '/books',
        subMenu: [
            {
                name: 'Library',
                path: '',
                svg: () => <></>,
            },
            {
                name: 'Weekly Booklet',
                path: '',
                svg: () => <></>,
            },
        ],
        svg: (selected: Boolean) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
            </svg>
        ),
    },
    {
        name: 'Media',
        path: '/media',
        svg: (selected: Boolean) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
            </svg>
        ),
    },
    {
        name: 'Volunteer',
        path: '/volunteer',
        svg: (selected: Boolean) => (
            <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    d="M10.6755 4.60003H7.35049V5.82503C7.35049 6.69347 6.64392 7.40003 5.77549 7.40003C4.90705 7.40003 4.20049 6.69347 4.20049 5.82503V3.16503L2.78081 4.01816C2.35862 4.26972 2.1005 4.72691 2.1005 5.21691V6.25159L0.350498 7.26221C0.0158114 7.45471 -0.100126 7.88346 0.0945612 8.21815L1.84456 11.25C2.03706 11.5847 2.46581 11.6985 2.80049 11.506L5.06236 10.2H8.05048C8.82267 10.2 9.45048 9.57221 9.45048 8.80002H9.80048C10.1877 8.80002 10.5005 8.48721 10.5005 8.10003V6.70003H10.6755C10.9664 6.70003 11.2005 6.46597 11.2005 6.17503V5.12503C11.2005 4.83409 10.9664 4.60003 10.6755 4.60003ZM13.9064 3.78191L12.1564 0.750039C11.9639 0.415352 11.5352 0.301602 11.2005 0.494102L8.93861 1.80004H6.70299C6.44049 1.80004 6.18455 1.87441 5.96143 2.01222L5.22861 2.46941C5.02299 2.59629 4.90049 2.8216 4.90049 3.06222V5.82503C4.90049 6.30847 5.29205 6.70003 5.77549 6.70003C6.25892 6.70003 6.65049 6.30847 6.65049 5.82503V3.90003H10.6755C11.3514 3.90003 11.9005 4.44909 11.9005 5.12503V5.74847L13.6505 4.73784C13.9852 4.54316 14.0989 4.1166 13.9064 3.78191Z"
                    fill="currentColor"
                />
            </svg>
        ),
    },
    {
        name: 'About us',
        path: '/about-us',
        svg: (selected: Boolean) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className={`w-4 h-4 ${
                    selected ? 'text-white' : 'text-teal-900'
                } `}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
            </svg>
        ),
    },
]
const NavPure = ({
    toggleMenuOpen,
    isMenuOpen,
    selectedPage,
    router,
    hijriDate,
    currentDate,
    pageTitle,
}: NavProps) => {
    return (
        <>
            <nav className="sticky top-0 z-50 flex flex-col w-full bg-teal-900 md:bg-white">
                <div
                    className={`w-full   ${
                        isMenuOpen ? '' : ' justify-between  '
                    } flex-col sm:flex-row xl:flex-wrap px-2 md:pb-2 flex md:bg-white bg-teal-900 xl:px-16  `}
                >
                    <div className="flex items-end w-full text-white md:w-56 sm:mr-6 md:h-24 ">
                        <Link
                            aria-label="Desktop-URL"
                            href="/"
                            className="hidden md:block "
                        >
                            <LogoSvg color={'#144E4A'} />
                        </Link>
                        <Link
                            aria-label="Mobile-URL"
                            href="/"
                            className="block md:hidden h-16  "
                        >
                            <LogoSvg color={'#ffffff'} />
                        </Link>
                        <div className="flex justify-end flex-grow md:hidden">
                            <button
                                id="Menu"
                                title="Mobile-Menu"
                                onClick={toggleMenuOpen}
                                className="px-1 py-3 text-teal-900 rounded sm:px-3"
                            >
                                <svg
                                    className="w-5 h-5 bg-white "
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* <title>Menu</title> */}
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        className={`border-b-2 border-teal-200 md:border-0 md:h-auto sm:border-0  sm:relative  mt-0 p-0 md:flex md:flex-col md:items-end md:bg-white bg-teal-900 sm:bg-teal-100 box-border	 ${
                            isMenuOpen
                                ? 'bg-white left-0 px-2 md:px-0 md:mt-0 mt-4 md:pb-0 pb-4'
                                : 'hidden'
                        }`}
                    >
                        <div
                            className={`px-2 md:p-2 flex lg:justify-end md:justify-center text-sm md:text-base `}
                        >
                            <div className="flex flex-grow justify-between">
                                <div className="py-2 md:py-0 md:px-2 flex items-center font-light ">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.293 12.4582C11.2547 12.4685 11.1143 12.5192 11.0538 12.5354C7.9834 13.3581 4.81632 11.5296 3.99361 8.45916C3.17089 5.38875 4.99941 2.22167 8.06982 1.39896C8.13109 1.38254 8.27645 1.35661 8.31554 1.34614C8.50385 1.29568 8.63201 1.11895 8.61969 0.922957C8.60695 0.721136 8.4498 0.558291 8.24862 0.538594C7.40076 0.456084 6.56417 0.523419 5.7615 0.738492C2.03317 1.7375 -0.187265 5.5834 0.81174 9.31174C1.81074 13.0401 5.65665 15.2605 9.38498 14.2615C10.1834 14.0476 10.9383 13.6899 11.6286 13.1983C11.7717 13.1028 11.8461 12.9238 11.7992 12.7489C11.742 12.5353 11.5239 12.3964 11.293 12.4582ZM13.811 4.63569L11.715 4.88306L10.323 3.29683C10.2485 3.21206 10.1416 3.18832 10.0479 3.21345C9.9541 3.23857 9.87343 3.31256 9.85128 3.42323L9.43885 5.49297L7.50005 6.32669C7.29261 6.41568 7.27756 6.70393 7.47449 6.8145L9.31553 7.84617L9.50921 9.9477C9.52547 10.1256 9.69764 10.2273 9.85083 10.1862C9.89124 10.1754 9.93043 10.1547 9.96511 10.1225L11.5157 8.69046L13.5741 9.15548C13.6201 9.16578 13.6645 9.16437 13.7049 9.15354C13.8581 9.1125 13.9563 8.93813 13.8815 8.77615L12.9984 6.85934L14.077 5.04536C14.1923 4.85114 14.0351 4.60903 13.811 4.63569Z"
                                            fill="#134E4A"
                                        />
                                    </svg>
                                    <p className="ml-1 w-max">{hijriDate}</p>
                                </div>
                                <div className="flex items-center py-2 ml-2 font-light md:py-0 md:px-2 ">
                                    <svg
                                        width="12"
                                        height="13"
                                        viewBox="0 0 12 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 11.375C0 11.9961 0.575893 12.5 1.28571 12.5H10.7143C11.4241 12.5 12 11.9961 12 11.375V5H0V11.375ZM1.71429 6.875C1.71429 6.66875 1.90714 6.5 2.14286 6.5H4.71429C4.95 6.5 5.14286 6.66875 5.14286 6.875V9.125C5.14286 9.33125 4.95 9.5 4.71429 9.5H2.14286C1.90714 9.5 1.71429 9.33125 1.71429 9.125V6.875ZM10.7143 2H9.42857V0.875C9.42857 0.66875 9.23571 0.5 9 0.5H8.14286C7.90714 0.5 7.71429 0.66875 7.71429 0.875V2H4.28571V0.875C4.28571 0.66875 4.09286 0.5 3.85714 0.5H3C2.76429 0.5 2.57143 0.66875 2.57143 0.875V2H1.28571C0.575893 2 0 2.50391 0 3.125V4.25H12V3.125C12 2.50391 11.4241 2 10.7143 2Z"
                                            fill="#134E4A"
                                        />
                                    </svg>
                                    <p className="ml-1 w-max">
                                        {currentDate()}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Nav Buttons */}
                        <div className="md:flex ">
                            <div
                                className={`flex md:flex-wrap mt-1 ${
                                    isMenuOpen ? 'md:flex-row flex-col' : ''
                                } `}
                            >
                                {navigators.map((nav: any, i: number) => (
                                    <Link
                                        key={i}
                                        href={nav.path}
                                        className={`ml-1 flex ${
                                            selectedPage == nav.name
                                                ? 'bg-teal-900 p-2'
                                                : 'bg-white border p-2'
                                        }  md:px-1 lg:px-1 xl:px-4 py-3 items-center md:rounded-t-xl`}
                                    >
                                        {nav.svg(selectedPage == nav.name)}
                                        <span
                                            className={`${
                                                selectedPage == nav.name
                                                    ? 'text-white'
                                                    : 'text-teal-900'
                                            } ml-1  cursor-pointer hover:text-teal-500`}
                                        >
                                            {nav.name}
                                        </span>
                                    </Link>
                                ))}
                                {selectedPage != 'Home' && (
                                    <div className="group/item hover:bg-slate-100 p-2 border ml-1 md:px-6 py-3 items-center md:rounded-t-xl hover:">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                className="w-6 h-6 text-teal-900"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                            <span className="ml-1 text-teal-900 hover:text-teal-500">
                                                More
                                            </span>
                                        </div>
                                        <div className="group/edit invisible  group-hover/item:visible absolute top-[5.1rem] md:right-[6.8rem] right-[0.5rem]  bg-teal-50 p-2 rounded shadow">
                                            {shortcuts.map(
                                                (d: any, i: number) => (
                                                    <Link
                                                        target={d.target}
                                                        href={d.link}
                                                        key={i}
                                                        className="relative flex items-center w-48 p-4 text-teal-900 group-hover/edit:text-teal-700 hover:bg-teal-100"
                                                    >
                                                        {d.component}
                                                        <span className="ml-2">
                                                            {d.name}
                                                        </span>
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* END Nav Buttons */}
                            <Link
                                href="/donations"
                                className="hidden md:flex bottom-0 items-center justify-center px-2 py-1 mx-2 mt-2 text-teal-900  border border-teal-900 md:w-auto xl:px-4 rounded-2xl shadow"
                            >
                                <CharitySVG />{' '}
                                <span className="ml-2 md:text-md lg:text-lg xl:text-xl">
                                    Donate Now
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                {router?.asPath && router.asPath.length > 1 && (
                    <div className="px-2 lg:px-16 bg-white">
                        <BreadCrumbSection
                            list={breadcrumb(router?.asPath, pageTitle)}
                        />
                    </div>
                )}
                <Link
                    href="/donations"
                    className="fixed md:static md:hidden bottom-1 right-0 flex items-center justify-center px-2 py-1 mx-2 mt-2 text-white  bg-red-900 md:w-auto xl:px-4 rounded-md shadow"
                >
                    <span className="md:text-md lg:text-lg xl:text-xl ">
                        Donate Now
                    </span>
                </Link>
            </nav>
        </>
    )
}

NavPure.propTypes = {}

export default NavPure
