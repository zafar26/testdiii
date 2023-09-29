const Pure = ({ data, step, index }: any) => {
    return (
        <div
            className="flex flex-col justify-center items-center w-72"
            key={index}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                    step >= index
                        ? 'bg-blue-800 rounded-full text-white'
                        : 'text-gray-300'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <p className="text-xs mt-2 ">{data.text}</p>
        </div>
    )
}
export default Pure
