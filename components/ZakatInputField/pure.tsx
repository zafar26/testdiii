const pure = ({ label, value, getValues, step, register }: any) => {
    return (
        <div
            className="md:flex items-center w-full mt-8 text-teal-900"
            key={label}
        >
            <div
                className={`w-full md:w-5/6 flex md:justify-between list-none md:list-disc ' ${
                    label.length >= 16 && 'md:w-5/6 flex-col '
                } ${step === 2 && 'list-none px-4 '} `}
            >
                <li className="ml-4 md:ml-0 md:text-left">{label}</li>
            </div>
            <div
                className={`flex md:ml-2 items-center ${
                    step === 2 && 'mx-12 md:mx-2 md:justify-end'
                }`}
            >
                <p>&#8377;</p>
                {step === 2 ? (
                    getValues(value) ? (
                        getValues(value).toLocaleString('en-IN')
                    ) : (
                        0
                    )
                ) : (
                    <input
                        type="number"
                        placeholder="0"
                        onFocus={(e: any) =>
                            (e.target.value =
                                e.target.value === '0'
                                    ? ''
                                    : parseFloat(e.target.value))
                        }
                        {...register(value, {
                            onBlur: (e: any) =>
                                (e.target.value =
                                    typeof e.target.value == 'string' &&
                                    e.target.value != '0' &&
                                    e.target.value != ''
                                        ? parseFloat(e.target.value)
                                        : 0),
                        })}
                        className="ml-1 md:ml-2  w-full p-2 border border-teal-100 rounded shadow"
                    />
                )}
            </div>
        </div>
    )
}
export default pure
