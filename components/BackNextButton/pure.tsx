import Link from 'next/link'

const pure = ({ step, setStep, onSubmit, handleSubmit, zakatAmount }: any) => {
    return (
        <>
            <div
                className={`${
                    step == 2 ? 'mt-4' : 'mt-12'
                } w-full flex justify-center items-center  `}
            >
                {step >= 1 && (
                    <button
                        type="submit"
                        onClick={() => {
                            setStep(step - 1)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-teal-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
                {step <= 1 ? (
                    <button
                        type="submit"
                        onClick={() => {
                            if (step == 1) {
                                handleSubmit(onSubmit())
                            }
                            setStep(step + 1)
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-teal-900"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                ) : (
                    <div className="ml-8 ">
                        {step == 2 && zakatAmount > 0 && (
                            <Link
                                href={`https://axisbpayments.razorpay.com/pl_IwZjnuiJyfxOXf/view?amount=${zakatAmount}&donation_information=All%20Purpose-Zakat`}
                                className="border-green-600  border hover:bg-teal-900 justify-center   delay-300 hover:text-white text-green-800  px-3 py-2  rounded shadow flex items-center"
                            >
                                Donate To Dawateislami
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
export default pure
