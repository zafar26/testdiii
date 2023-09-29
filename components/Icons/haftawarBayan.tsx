const HaftawarBayanSVG = (props:any) => {
    return (
        <svg
            width={props.size?props.size:"30"}
            height={props.size?props.size:"30"}
            
            viewBox="0 0 22 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.958 22.7653L21.0002 22.9201L21.1246 23.0214C21.277 23.1456 21.375 23.3376 21.375 23.5469V24.3281C21.375 24.7014 21.0764 25 20.7031 25H4.6875C2.37575 25 0.5 23.1242 0.5 20.8125V5.1875C0.5 2.87575 2.37575 1 4.6875 1H20.7031C21.0764 1 21.375 1.2986 21.375 1.67188V18.0781C21.375 18.2884 21.2764 18.4778 21.129 18.5952L21.0011 18.697L20.958 18.8548C20.8363 19.3011 20.7866 20.0842 20.7866 20.8101C20.7866 21.5359 20.8363 22.319 20.958 22.7653ZM18.623 22.875H19.1817L19.12 22.3198C19.0313 21.5215 19.0313 20.1035 19.12 19.3052L19.1817 18.75H18.623H4.6875C3.55198 18.75 2.625 19.677 2.625 20.8125C2.625 21.9529 3.5471 22.875 4.6875 22.875H18.623ZM6.54297 6.25C6.10569 6.25 5.75 6.60569 5.75 7.04297V8.01953C5.75 8.45681 6.10569 8.8125 6.54297 8.8125H16.8945C17.3318 8.8125 17.6875 8.45681 17.6875 8.01953V7.04297C17.6875 6.60569 17.3318 6.25 16.8945 6.25H6.54297ZM6.54297 9.375C6.10569 9.375 5.75 9.73069 5.75 10.168V11.1445C5.75 11.5818 6.10569 11.9375 6.54297 11.9375H16.8945C17.3318 11.9375 17.6875 11.5818 17.6875 11.1445V10.168C17.6875 9.73069 17.3318 9.375 16.8945 9.375H6.54297Z"
                stroke={props.color?props.color:"#134E4A"}
                fill={props.color?props.color:""}
            />
        </svg>
    )
}
export default HaftawarBayanSVG
