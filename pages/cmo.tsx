import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const CMO = () => {
  const location = useRouter();
  const [applications, setApplications] = useState([
    {
      name: "Digital Services",
      link: "https://dawateislamiindia.org/digital",
      image: "/cmo/di-logo-square.png",
    },
    {
      name: "ESS",
      link: "https://ess.dawateislamihind.net",
      image: "/cmo/ijara-logo.png",
    },
    {
      name: "Mobile Raseed",
      link: "https://mdm.dawateislamihind.net/donation-prod",
      image: "/cmo/mobile-raseed-logo.png",
    },
    {
      name: "Madani ERP",
      link: "https://apps.dawateislamiindia.org",
      image: "/cmo/madani-erp.png",
    },
    {
      name: "Jamiatul Madina",
      link: "https://webapp.jamiatulmadinahind.net/Mobile",
      image: "/cmo/jamiatul-madina-logo.png",
    },
    // {
    //   name: "Madani Basta",
    //   link: "https://mdm.dawateislamihind.net/madanibasta",
    //   image: "/cmo/madani-basta.png",
    // },
    {
      name: "Magazine CRM",
      link: "https://crm.faizanemadina.in/Im1vYmlsZSI_EQUALS_/0",
      image: "/cmo/magazine-crm-logo.png",
    },
    {
      name: "Madrasatul Madina",
      link: "https://webapp.madrasatulmadina.in/",
      image: "/cmo/madrasatul-madina-logo.png",
    },
    {
      name: "Neki Time Admin",
      link: "https://nekitime.dawateislamiindia.org",
      image: "/cmo/nekitime.png",
    },
    {
      name: "ERP",
      link: "https://erp.dawateislamiindia.org",
      image: "/cmo/erp.png",
    },
  ]);

//   useEffect(() => {
//     if (location.asPath.includes("?")) {
//       applications[2].link =
//         applications[2].link + location.asPath.match(/\?(.*)/)[0];
//     }
//   }, [-1]);

  return (
    <div>
      <Head>
        <title>CMO Dawateislami India</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="title" content="CMO Dawateislami India" />
        <meta
          name="description"
          content="A global islamic movement serving ummah and preaching the message of Quran and Sunnah in 79 departments"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dawateislamiindia.org" />
        <meta property="og:title" content="CMO Dawateislami India" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="font-sans antialiased text-gray-900">
        <div className="min-h-screen bg-gray-100">
          <nav
            x-data="{ open: false }"
            className="bg-white border-b border-gray-100 shadow"
          >
            {/* Primary Navigation Menu */}
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  {/* Logo */}
                  <div className="flex items-center flex-shrink-0">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    height="30pt" viewBox="0 0 395.000000 122.000000"
                    preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,122.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M2037 1060 c-6 -38 -15 -60 -30 -72 -21 -16 -20 -16 37 -16 l58 1
                        -26 21 c-20 17 -26 31 -28 71 l-3 50 -8 -55z"/>
                        <path d="M1978 953 c-74 -8 -37 -19 67 -19 58 0 101 3 97 7 -9 10 -117 18
                        -164 12z"/>
                        <path d="M1975 914 c-11 -3 -30 -7 -42 -10 -13 -2 -23 -9 -23 -14 0 -6 36 -7
                        93 -4 50 3 111 2 135 -4 33 -8 42 -7 42 3 0 7 -8 16 -17 19 -23 9 -163 16
                        -188 10z"/>
                        <path d="M1978 863 c-26 -4 -28 -8 -28 -54 l0 -49 95 0 96 0 -5 46 c-2 25 -6
                        48 -9 50 -8 8 -117 13 -149 7z"/>
                        <path d="M135 842 l-60 -3 2 -222 3 -222 97 3 c113 3 165 22 213 80 83 101 50
                        280 -62 338 -38 20 -114 30 -193 26z m145 -107 c39 -20 60 -63 60 -120 0 -37
                        -6 -52 -32 -81 -32 -34 -106 -62 -129 -49 -5 4 -9 64 -9 136 l0 129 40 0 c23
                        0 54 -7 70 -15z"/>
                        <path d="M1243 812 c-8 -19 -30 -77 -49 -130 -19 -53 -38 -100 -42 -104 -4 -4
                        -26 53 -47 127 l-40 135 -47 0 -47 0 -31 -102 c-50 -165 -52 -170 -58 -163 -3
                        3 -27 63 -53 133 l-46 127 -52 3 c-28 2 -51 2 -51 0 0 -2 36 -102 79 -223 l79
                        -220 47 0 48 0 40 138 c24 81 44 133 48 125 4 -7 24 -70 45 -140 l37 -128 43
                        0 c24 0 45 4 48 9 3 5 39 106 80 224 l75 215 -46 4 c-44 3 -47 2 -60 -30z"/>
                        <path d="M1593 843 l-82 -4 16 -44 15 -45 54 0 54 0 2 -177 3 -178 105 2 105
                        2 3 51 3 50 -60 0 -61 0 0 35 0 35 60 0 60 0 0 50 0 50 -60 0 -60 0 0 40 0 40
                        61 0 60 0 -3 46 -3 46 -95 2 c-52 1 -132 1 -177 -1z"/>
                        <path d="M3203 842 l-33 -3 0 -225 0 -224 45 0 45 0 0 140 c0 77 3 140 8 140
                        4 0 22 -22 39 -48 18 -26 43 -60 56 -76 l24 -29 59 78 59 78 3 -141 3 -142 49
                        0 50 0 -2 228 -3 227 -44 -2 c-24 -1 -47 -6 -50 -10 -24 -35 -122 -163 -124
                        -163 -2 0 -30 38 -63 84 -61 88 -68 93 -121 88z"/>
                        <path d="M3639 843 c0 -2 -1 -24 -1 -50 -1 -42 2 -48 23 -53 23 -6 24 -9 27
                        -122 l3 -117 -27 -3 c-25 -3 -27 -6 -27 -53 l0 -50 97 -3 96 -3 0 56 c0 52 -1
                        55 -25 55 l-25 0 0 120 0 120 25 0 c23 0 25 3 25 49 0 39 -4 51 -17 55 -18 5
                        -172 5 -174 -1z"/>
                        <path d="M480 629 c-41 -117 -76 -218 -78 -226 -3 -9 10 -13 46 -13 48 0 49 0
                        61 40 l12 41 81 -3 81 -3 12 -35 c11 -33 14 -35 63 -38 29 -2 52 -2 52 0 0 2
                        -36 102 -79 223 l-78 220 -49 3 -49 3 -75 -212z m163 -61 c-6 -11 -71 -10 -77
                        1 -5 8 8 54 30 111 4 9 15 -7 29 -45 13 -33 21 -63 18 -67z"/>
                        <path d="M1306 626 c-42 -118 -76 -219 -76 -225 0 -6 19 -11 46 -11 44 0 46 1
                        61 40 l16 41 80 -3 80 -3 12 -35 c11 -33 15 -35 58 -38 31 -2 47 1 47 9 0 9
                        -116 345 -145 422 -6 13 -19 17 -55 17 l-47 0 -77 -214z m163 -48 c1 -14 -7
                        -18 -40 -18 -40 0 -41 0 -34 31 4 18 14 48 23 68 l15 36 18 -50 c9 -27 18 -58
                        18 -67z"/>
                        <path d="M2294 830 c-41 -16 -74 -68 -74 -116 0 -60 35 -96 122 -124 80 -25
                        96 -40 80 -75 -16 -36 -79 -35 -121 1 l-31 26 -41 -33 -41 -32 29 -23 c48 -40
                        95 -57 154 -57 85 0 144 44 156 117 11 70 -40 126 -144 157 -24 6 -50 20 -59
                        30 -14 16 -14 19 5 38 26 26 47 26 89 1 l34 -21 35 27 c34 25 34 26 16 46 -10
                        12 -32 27 -50 34 -36 15 -126 18 -159 4z"/>
                        <path d="M2552 618 l3 -223 81 -3 81 -3 16 43 c10 24 17 47 17 51 0 4 -22 7
                        -50 7 l-50 0 0 175 0 175 -50 0 -50 0 2 -222z"/>
                        <path d="M2891 818 c-14 -37 -151 -421 -151 -423 0 -1 22 -2 49 -3 48 -1 50 0
                        65 39 l16 39 78 0 79 0 11 -39 c12 -38 13 -38 63 -40 36 0 50 3 47 12 -2 7
                        -37 108 -78 225 l-75 212 -48 0 c-40 0 -49 -3 -56 -22z m82 -192 c9 -27 14
                        -52 11 -57 -6 -10 -67 -12 -76 -3 -4 3 3 33 14 66 11 33 24 56 28 51 4 -4 15
                        -30 23 -57z"/>
                        <path d="M1950 635 l0 -105 96 0 95 0 -3 103 -4 102 -92 3 -92 3 0 -106z"/>
                        <path d="M1938 503 c-14 -3 -18 -15 -18 -49 0 -24 0 -47 0 -50 0 -3 55 -5 123
                        -5 l122 0 3 49 c3 48 2 49 -29 56 -35 7 -174 6 -201 -1z"/>
                        <path d="M2600 205 l0 -105 25 0 25 0 0 105 0 105 -25 0 -25 0 0 -105z"/>
                        <path d="M2720 205 c0 -105 0 -106 23 -103 19 3 22 9 23 56 1 29 3 55 6 57 2
                        3 23 -23 47 -56 33 -46 47 -59 64 -57 21 3 22 9 25 106 l3 102 -26 0 c-24 0
                        -25 -3 -25 -55 0 -30 -3 -55 -7 -55 -5 1 -24 24 -43 53 -26 38 -43 53 -63 55
                        l-27 3 0 -106z"/>
                        <path d="M2970 210 c0 -114 2 -117 76 -105 67 10 109 50 109 105 0 35 -6 47
                        -33 71 -28 25 -40 29 -92 29 l-60 0 0 -100z m120 40 c11 -11 20 -29 20 -40 0
                        -28 -35 -60 -65 -60 -24 0 -25 3 -25 60 0 57 1 60 25 60 14 0 34 -9 45 -20z"/>
                        <path d="M3220 204 c0 -104 0 -105 23 -102 21 3 22 8 25 106 l3 102 -26 0 -25
                        0 0 -106z"/>
                        <path d="M3367 218 c-20 -51 -37 -99 -37 -106 0 -20 38 -14 50 8 15 29 86 29
                        95 0 4 -13 15 -20 31 -20 13 0 24 3 23 8 0 4 -17 50 -37 102 -33 83 -41 95
                        -63 98 -23 3 -28 -4 -62 -90z m76 -9 c3 -12 0 -22 -9 -26 -20 -8 -27 2 -19 26
                        8 27 21 27 28 0z"/>
                        <path d="M70 213 l0 -38 1227 2 1228 2 3 35 3 36 -1230 0 -1231 0 0 -37z"/>
                        <path d="M3570 210 l0 -39 130 1 130 0 0 39 0 39 -130 0 -130 0 0 -40z"/>
                        </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex flex-row">
            {/* Page Heading  */}
            <div className="relative w-full">
              {/* Page Content */}
              <div className="py-8">
                <div className="mx-auto max-w-7xl sm:px-4 lg:px-8">
                  <div className="flex flex-row flex-wrap mx-5">
                    {applications.map((application, index) => (
                      <div
                        key={index}
                        className="w-1/3 mb-3 text-center sm:w-1/4 md:w-1/6 lg:w-1/12 "
                      >
                        <a href={application.link}>
                          <div className="h-full mr-1 bg-white rounded shadow-md md:ml-1 md:mr-1">
                            <img
                              src={application.image}
                              className="p-2 m-auto "
                            />
                            <p className="px-1 pb-1 mt-1 text-sm font-semibold text-teal-900 ">
                              {application.name}
                            </p>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMO;