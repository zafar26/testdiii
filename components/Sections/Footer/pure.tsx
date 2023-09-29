import { EnvContext } from '@/components/Context/ApiContext'
import { subscribeNewsletter } from '@/helpers/api/home'
import { Env } from '@/helpers/types'
import { myLoader } from '@/helpers/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'

let footerLinks = [
    {
        label: 'Terms & Conditions',
        link: 'terms-and-condition',
    },
    {
        label: 'Privacy Policy',
        link: '/privacy-policy',
    },
    {
        label: 'About Us',
        link: '/about-us',
    },
    {
        label: 'Departments',
        link: '/department',
    },
    {
        label: 'Volunteer',
        link: '/volunteer',
    },
]

let socialMediaLinks = [
    {
        name: 'facebook',
        icon: () => (
            <svg
                width="33"
                height="34"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_301_4)">
                    <path
                        d="M21.5065 0C27.441 0 32.8209 2.46865 36.7171 6.44224C40.6133 10.429 43.0129 15.9208 43.0129 22.0066C43.0129 28.0792 40.6004 33.5842 36.7171 37.571C32.8209 41.5578 27.4539 44.0132 21.5065 44.0132C15.5719 44.0132 10.192 41.5446 6.29583 37.571C2.39964 33.5842 0 28.0924 0 22.0066C0 15.934 2.41254 10.429 6.29583 6.44224C10.192 2.45545 15.559 0 21.5065 0ZM23.8416 15.0099H27.7249V10.2442H23.8416C20.8485 10.2442 18.4101 12.7393 18.4101 15.802V18.1914H15.3009V22.9571H18.4101V35.67H23.0675V22.9571H26.9508L27.7249 18.1914H23.0675V15.802C23.0675 15.3663 23.4287 15.0099 23.8416 15.0099ZM35.6205 7.57756C32.0081 3.88119 27.0282 1.59736 21.5194 1.59736C16.0105 1.59736 11.0177 3.88119 7.41824 7.57756C3.80588 11.2739 1.57396 16.3696 1.57396 22.0066C1.57396 27.6436 3.80588 32.7525 7.41824 36.4356C11.0306 40.132 16.0105 42.4158 21.5194 42.4158C27.0282 42.4158 32.021 40.132 35.6205 36.4356C39.2328 32.7393 41.4647 27.6436 41.4647 22.0066C41.4647 16.3696 39.2328 11.2607 35.6205 7.57756Z"
                        fill="#134E4A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_301_4">
                        <rect width="43" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        link: 'https://www.facebook.com/dawateislamiIndiaofficial',
    },
    {
        name: 'instagram',
        icon: () => (
            <svg
                width="33"
                height="34"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_301_10)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.4419 28.5017C25.1188 28.5017 28.099 25.4521 28.099 21.6898C28.099 17.9274 25.1188 14.8779 21.4419 14.8779C17.7651 14.8779 14.7849 17.9274 14.7849 21.6898C14.7849 25.4521 17.7651 28.5017 21.4419 28.5017ZM16.4749 34.0594H26.538C30.318 34.0594 33.4014 30.9307 33.4014 27.1287V16.8581C33.4014 13.0429 30.318 9.92739 26.538 9.92739H16.4749C12.6949 9.92739 9.61146 13.0429 9.61146 16.8581V27.1287C9.61146 30.9439 12.7078 34.0594 16.4749 34.0594ZM27.8797 29.4521C28.4731 29.4521 28.9634 28.9637 28.9634 28.3432C28.9634 27.736 28.486 27.2343 27.8797 27.2343C27.2862 27.2343 26.796 27.7228 26.796 28.3432C26.796 28.9505 27.2733 29.4521 27.8797 29.4521ZM17.3006 32.0924H25.7123C28.8731 32.0924 31.4533 29.4653 31.4533 26.2442V17.5842C31.4533 14.363 28.8731 11.736 25.7123 11.736H17.3006C14.1398 11.736 11.5596 14.363 11.5596 17.5842V26.2442C11.5596 29.4653 14.1398 32.0924 17.3006 32.0924ZM21.5065 44C27.441 44 32.8209 41.5314 36.7171 37.5578C40.6133 33.571 43.0129 28.0792 43.0129 21.9934C43.0129 15.9208 40.6004 10.4158 36.7171 6.42904C32.8209 2.44225 27.4539 -0.0131996 21.5065 -0.0131996C15.5719 -0.0131996 10.192 2.45545 6.29583 6.42904C2.39964 10.4158 0 15.9076 0 21.9934C0 28.066 2.41254 33.571 6.29583 37.5578C10.192 41.5446 15.559 44 21.5065 44ZM35.6076 36.4356C31.9952 40.132 27.0153 42.4158 21.5065 42.4158C15.9976 42.4158 11.0048 40.132 7.40534 36.4356C3.79298 32.7393 1.56106 27.6436 1.56106 22.0066C1.56106 16.3696 3.79298 11.2607 7.40534 7.57756C11.0177 3.88119 15.9976 1.59736 21.5065 1.59736C27.0153 1.59736 32.0081 3.88119 35.6076 7.57756C39.2199 11.2739 41.4518 16.3696 41.4518 22.0066C41.4518 27.6436 39.2199 32.7525 35.6076 36.4356ZM21.4419 26.2178C23.8674 26.2178 25.8413 24.198 25.8413 21.7162C25.8413 19.2343 23.8674 17.2145 21.4419 17.2145C19.0036 17.2145 17.0426 19.2343 17.0426 21.7162C17.0426 24.198 19.0165 26.2178 21.4419 26.2178Z"
                        fill="#134E4A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_301_10">
                        <rect
                            width="43"
                            height="44"
                            fill="white"
                            transform="matrix(1 0 0 -1 0 44)"
                        />
                    </clipPath>
                </defs>
            </svg>
        ),
        link: 'https://www.instagram.com/dawateislamiindiaofficial/',
    },
    {
        name: 'Linkedin',
        icon: () => (
            <svg
                width="33"
                height="34"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_301_14)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.9004 17.8746H23.0546V20.0528H23.1191C23.6997 18.9835 25.1188 17.8746 27.2217 17.8746C31.6082 17.8746 32.4209 20.6733 32.4209 24.3168V31.7228H28.0861V25.1485C28.0861 23.5776 28.0603 21.571 25.8284 21.571C23.5707 21.571 23.2223 23.2739 23.2223 25.0429V31.7228H18.8875V17.8746H18.9004ZM21.5065 0C27.441 0 32.8209 2.46865 36.7171 6.44224C40.6133 10.429 43.0129 15.9208 43.0129 22.0066C43.0129 28.0792 40.6004 33.5842 36.7171 37.571C32.8209 41.5578 27.4539 44.0132 21.5065 44.0132C15.5719 44.0132 10.192 41.5446 6.29583 37.571C2.39964 33.5842 0 28.0924 0 22.0066C0 15.934 2.41254 10.429 6.29583 6.44224C10.192 2.45545 15.559 0 21.5065 0ZM35.6076 7.56436C31.9952 3.86799 27.0153 1.58416 21.5065 1.58416C15.9976 1.58416 11.0048 3.86799 7.40534 7.56436C3.79298 11.2607 1.56106 16.3564 1.56106 21.9934C1.56106 27.6304 3.79298 32.7393 7.40534 36.4224C11.0177 40.1188 15.9976 42.4026 21.5065 42.4026C27.0153 42.4026 32.0081 40.1188 35.6076 36.4224C39.2199 32.7261 41.4518 27.6304 41.4518 21.9934C41.4518 16.3564 39.2199 11.2475 35.6076 7.56436ZM15.8944 14.033C15.8944 15.3135 14.8881 16.3432 13.6367 16.3432C12.3852 16.3432 11.3789 15.3135 11.3789 14.033C11.3789 12.7525 12.3852 11.7228 13.6367 11.7228C14.8881 11.7228 15.8944 12.7525 15.8944 14.033ZM11.3789 17.8746H15.8944V31.7228H11.3789V17.8746Z"
                        fill="#134E4A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_301_14">
                        <rect width="43" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        link: 'https://in.linkedin.com/company/dawateislamiindia',
    },
    {
        name: 'twitter',
        icon: () => (
            <svg
                width="33"
                height="34"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_301_8)">
                    <path
                        d="M21.5065 0C27.441 0 32.8209 2.46865 36.7171 6.44224C40.6133 10.429 43.0129 15.9208 43.0129 22.0066C43.0129 28.0792 40.6004 33.5842 36.7171 37.571C32.8209 41.5578 27.4539 44.0132 21.5065 44.0132C15.5719 44.0132 10.192 41.5446 6.29583 37.571C2.39964 33.5842 0 28.0924 0 22.0066C0 15.934 2.41254 10.429 6.29583 6.44224C10.192 2.45545 15.559 0 21.5065 0ZM32.6919 14.9043C31.8662 15.2871 30.9889 15.5248 30.06 15.6436C31.0147 15.0627 31.7372 14.1386 32.0855 13.0429C31.1953 13.5842 30.2148 13.967 29.1698 14.1782C28.3312 13.2673 27.1443 12.6997 25.8155 12.6997C23.2739 12.6997 21.2226 14.7987 21.2226 17.3993C21.2226 17.769 21.2613 18.1254 21.3387 18.4686C17.52 18.2706 14.1398 16.396 11.8821 13.5578C11.4821 14.2706 11.2628 15.0891 11.2628 15.9208C11.2628 17.5446 12.0756 18.9835 13.3012 19.8284C12.553 19.802 11.8434 19.5908 11.2241 19.2475V19.3003C11.2241 21.571 12.811 23.4719 14.9139 23.9076C14.5269 24.0132 14.1269 24.0792 13.7012 24.0792C13.4044 24.0792 13.1206 24.0528 12.8368 24C13.4302 25.8614 15.1203 27.2211 17.12 27.2607C15.5461 28.5281 13.5722 29.2673 11.4176 29.2673C11.0435 29.2673 10.6823 29.2409 10.321 29.2013C12.3594 30.5347 14.772 31.3135 17.3651 31.3135C25.8026 31.3135 30.4341 24.1584 30.4341 17.9406C30.4341 17.7294 30.4341 17.5314 30.4212 17.3333C31.3243 16.6733 32.0984 15.8548 32.7048 14.9043H32.6919ZM35.6076 7.57756C31.9952 3.88119 27.0153 1.59736 21.5065 1.59736C15.9976 1.59736 11.0048 3.88119 7.40534 7.57756C3.79298 11.2739 1.56106 16.3696 1.56106 22.0066C1.56106 27.6436 3.79298 32.7525 7.40534 36.4356C11.0177 40.132 15.9976 42.4158 21.5065 42.4158C27.0153 42.4158 32.0081 40.132 35.6076 36.4356C39.2199 32.7393 41.4518 27.6436 41.4518 22.0066C41.4518 16.3696 39.2199 11.2607 35.6076 7.57756Z"
                        fill="#134E4A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_301_8">
                        <rect width="43" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        link: 'https://twitter.com/idawateislami',
    },
    {
        name: 'youtube',
        icon: () => (
            <svg
                width="33"
                height="34"
                viewBox="0 0 43 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_301_6)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.8596 17.2541C32.8596 17.2541 32.6274 15.6172 31.9307 14.9043C31.0534 13.9538 30.06 13.9538 29.6085 13.901C26.3702 13.6634 21.4935 13.6634 21.4935 13.6634H21.4806C21.4806 13.6634 16.6169 13.6634 13.3657 13.901C12.9142 13.9538 11.9208 13.967 11.0435 14.9043C10.3468 15.6172 10.1275 17.2541 10.1275 17.2541C10.1275 17.2541 9.89529 19.1683 9.89529 21.0957V22.8911C9.89529 24.8053 10.1275 26.7327 10.1275 26.7327C10.1275 26.7327 10.3597 28.3696 11.0435 29.0825C11.9208 30.033 13.0819 29.9934 13.598 30.099C15.4557 30.2838 21.4806 30.3366 21.4806 30.3366C21.4806 30.3366 26.3573 30.3234 29.5956 30.0858C30.0471 30.033 31.0405 30.0198 31.9178 29.0825C32.6145 28.3696 32.8467 26.7327 32.8467 26.7327C32.8467 26.7327 33.0789 24.8185 33.0789 22.8911V21.0957C33.0789 19.1815 32.8467 17.2541 32.8467 17.2541H32.8596ZM21.5065 0C27.441 0 32.8209 2.46865 36.7171 6.44224C40.6133 10.429 43.0129 15.9208 43.0129 22.0066C43.0129 28.0792 40.6004 33.5842 36.7171 37.571C32.8209 41.5578 27.4539 44.0132 21.5065 44.0132C15.5719 44.0132 10.192 41.5446 6.29583 37.571C2.39964 33.5842 0 28.0924 0 22.0066C0 15.934 2.41254 10.429 6.29583 6.44224C10.192 2.45545 15.559 0 21.5065 0ZM35.6076 7.56436C31.9952 3.86799 27.0153 1.58416 21.5065 1.58416C15.9976 1.58416 11.0048 3.86799 7.40534 7.56436C3.79298 11.2607 1.56106 16.3564 1.56106 21.9934C1.56106 27.6304 3.79298 32.7393 7.40534 36.4224C11.0177 40.1188 15.9976 42.4026 21.5065 42.4026C27.0153 42.4026 32.0081 40.1188 35.6076 36.4224C39.2199 32.7261 41.4518 27.6304 41.4518 21.9934C41.4518 16.3564 39.2199 11.2475 35.6076 7.56436ZM19.0939 25.0825V18.4158L25.3639 21.7558L19.0939 25.0825Z"
                        fill="#134E4A"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_301_6">
                        <rect width="43" height="44" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        link: 'https://www.youtube.com/@DawateislamiIndiaofficial',
    },
]
const subscribe = () => {}
const FooterPure = ({ env }: { env: Env }) => {
    const [email, setEmail] = useState<string>('')
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-12 lg:px-16 bg-teal-100">
                <div className="flex items-center flex-col lg:flex-row justify-between ">
                    <div className="mt-2 md:flex flex-col md:items-start">
                        <Image
                            loader={myLoader}
                            src={'green-logo.png'}
                            alt={'Image'}
                            width={250}
                            height={250}
                        />
                        <div className="flex items-center md:justify-between md:w-1/4 md:mt-2">
                            {socialMediaLinks.map((d: any, index: number) => (
                                <div key={index} className="p-2 w-12 h-12">
                                    <Link href={d.link}>{d.icon()}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-row ml-1 items-center">
                        {/* <p className="font-bold md:font-light text-sm md:text-lg ">
                        Social Media
                    </p> */}
                        <div className="mt-4 md:mt-0 flex-row md:columns-1 columns-3">
                            {footerLinks.map((d: any, index: number) => (
                                // <div key={index} className="m-1">
                                <Link
                                    aria-label={d.label}
                                    key={index}
                                    href={d.link}
                                    className="py-1  font-light text-sm block w-[5.5rem] md:w-32"
                                >
                                    {d.label}
                                </Link>
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex justify-center sm:flex-row md:flex-row items-center">
                    <div className=" rounded md:rounded-none md:teal-200 w-full md:w-3/5 flex flex-col text-center md:items-center mt-2">
                        <p className="text-teal-900 text-l text-center px-6 mx-2">
                            Join Us: Get Updates & Get Involved
                        </p>
                        <div className="mt-2 justify-center w-full px-3 py-3 md:py-0 flex flex-col">
                            <input
                                className="w-[250] p-2 md:rounded-l-lg rounded-lg border-2 border-teal-900"
                                placeholder=" Email Address"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            <button
                                onClick={() =>
                                    subscribeNewsletter(env, email).then(
                                        (res: any) => {
                                            alert(
                                                res.status == 200
                                                    ? 'Subscribed'
                                                    : 'Not Subscribed',
                                            )
                                        },
                                    )
                                }
                                className="px-2  md:mt-1 mt-2 bg-red-900 md:bg-teal-900 text-white py-1 lg:py-1 md:px-2 rounded-lg md:rounded-r-lg md:text-l"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4 items-center justify-center  w-full px-4 lg:w-full">
                    <h2 className="my-2 text-lg font-bold text-center text-teal-900">
                        Our Addresses
                    </h2>
                    <p className="mx-auto text-lg font-light text-center text-teal-900">
                        <span className="font-bold">Mumbai :</span>{' '}
                        Faizan-E-Madina, 50, Tan Tan Pura Street, Khadak, Masjid
                        (W), Mumbai, Maharashtra-400009
                    </p>
                    <p className=" md:mx-auto lg:mx-auto text-lg mt-2 font-light text-center text-teal-900">
                        <span className="font-bold">Email Address: </span>
                        <a
                            className="flex justify-center"
                            href="mailto:support@dawateislamiindia.org"
                        >
                            support@dawateislamiindia.org
                        </a>
                    </p>
                    <p className="mx-auto text-lg font-light text-center text-teal-700">
                        <span className="font-bold">Contact :</span>
                        <span className="font-bold text-teal-700">
                            02223462526
                        </span>
                    </p>
                </div>
            </div>

            <p className="text-center bg-teal-900  text-gray-400 p-4">
                Copyright &#169; {`${new Date().getFullYear()}`} IT Department
                of Dawateislami India
            </p>
        </>
    )
}

FooterPure.propTypes = {}

export default FooterPure
