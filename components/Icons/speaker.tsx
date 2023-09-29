const SpeakerSVG = ({ color }: any) => {
    return (
        <svg
            width="25"
            height="20"
            viewBox="0 0 12 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.69487 0.549561L2.73114 3.37841H1.16016V7.6217H2.73114L4.69487 10.4506V0.549561Z"
                stroke={color ? color : '#134E4A'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.0094 0.5C10.7457 1.82622 11.1593 3.62472 11.1593 5.5C11.1593 7.37528 10.7457 9.17378 10.0094 10.5M8.62305 2.99646C8.99119 3.65957 9.198 4.55883 9.198 5.49646C9.198 6.4341 8.99119 7.33335 8.62305 7.99646"
                stroke={color ? color : '#134E4A'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SpeakerSVG
