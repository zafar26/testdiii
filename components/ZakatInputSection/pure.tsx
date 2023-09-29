import ZakatInputField from '../ZakatInputField'

const ZakatInputSection = ({
    sectionFields,
    sectionTitle,
    step,
    getValues,
    register,
}: any) => {
    return (
        <>
            <form className=" md:mx-4 w-full  py-0 px-4 md:px-8">
                <div
                    key={sectionTitle}
                    className="w-full flex flex-col items-center font-bold text-center text-xl text-teal-900 p-2 mt-8"
                >
                    <p>{sectionTitle}</p>
                </div>
                {sectionFields.map(({ label, value, options }: any) => (
                    <ZakatInputField
                        key={label}
                        label={label}
                        value={value}
                        options={options}
                        getValues={getValues}
                        step={step}
                        register={register}
                    />
                ))}
            </form>
        </>
    )
}
export default ZakatInputSection
