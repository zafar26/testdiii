import ZakatInputSection from '../ZakatInputSection/pure'

const ZakatReview = ({
    totalArray,
    totalAmount = 0,
    deductionTotal = 0,
    totalZakatAmount = 0,
    zakatAmount = 0,
    step,
    register,
    getValues,
}: any) => {
    return (
        <div className="w-full">
            {totalArray.map((d: any, index: number) => (
                <ZakatInputSection
                    key={index}
                    sectionTitle={d.sectionTitle}
                    sectionFields={d.sectionFields}
                    step={step}
                    register={register}
                    getValues={getValues}
                />
            ))}
            <div className="px-4 w-full">
                <p className="mt-12 font-bold  text-center text-xl  ">
                    Total Calculation
                </p>
                <div className=" mt-4 flex justify-between items-center w-full p-4  ">
                    <p className="w-24 text-sm md:text-base md:w-5/6 md:px-12   ">
                        Total Assets Amount
                    </p>
                    <p className="w-1/2 md:w-1/6">
                        {totalAmount.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR',
                        })}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full  p-4">
                    <p className="w-24 text-sm md:text-base md:w-5/6 md:px-12 ">
                        Total Deductions
                    </p>
                    <p className="w-1/2 md:w-1/6">
                        {deductionTotal.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR',
                        })}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full   p-4">
                    <p className="w-24 text-sm md:text-base md:w-5/6 md:px-12 ">
                        Amount on Which Zakat to be Calculated
                    </p>
                    <p className=" w-1/2 md:w-1/6">
                        {totalZakatAmount.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR',
                        })}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full  p-4">
                    <p className="w-30 text-sm md:text-base md:w-5/6 md:px-12">
                        Zakat Amount 2.5 % from Your Total Amount
                    </p>
                    <p className="min-w-24 md:max-w-3xl	w-1/2 md:w-1/6 ">
                        {totalZakatAmount.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR',
                        })}
                        {' x 2.5% = '}

                        {totalZakatAmount != 0 &&
                            parseFloat(
                                (totalZakatAmount / 40).toString(),
                            ).toLocaleString('en-IN', {
                                maximumFractionDigits: 2,
                                style: 'currency',
                                currency: 'INR',
                            })}
                    </p>
                </div>
                <div className="flex justify-between items-center w-full border-y-2 border-teal-900 p-4 ">
                    <p className="w-24 text-sm md:text-base md:w-5/6 md:px-12 ">
                        Total Zakat Amount
                    </p>
                    <p className="w-1/2 md:w-1/6 ">
                        {zakatAmount.toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            style: 'currency',
                            currency: 'INR',
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ZakatReview
