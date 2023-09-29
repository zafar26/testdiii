import React, { useState } from 'react'
import Nav from '@/components/Nav'
import { useForm } from 'react-hook-form'
import ZakatInputSection from '../components/ZakatInputSection'
import BackNextButton from '../components/BackNextButton/pure'
import Steppers from '@/components/Steppers'
import ZakatReview from '../components/ZakatReview'
import {
    assetFields,
    merchandiseFields,
    deductionFields,
    calculateZakat,
} from '@/helpers/zakat'
import HeadTag from '../components/Head'
import FooterSection from '@/components/Sections/Footer'
import { Env } from '@/helpers/types'

const ZakatCalculator = ({ env }: { env: Env }) => {
    const [step, setStep] = useState(0)
    const [deductionTotal, setDeductionTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalZakatAmount, setTotalZakatAmount] = useState(0)
    const [zakatAmount, setZakatAmount] = useState(0)

    const {
        handleSubmit,
        getValues,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        defaultValues: {
            goldAmount: 0,
            silverAmount: 0,
            goldQuantity: 0,
            silverQuantity: 0,
            cashInHand: 0,
            depositedAmount: 0,
            policyAmount: 0,
            givenLoanAmount: 0,
            otherAssets: 0,
            rawMaterials: 0,
            manufacturedGoods: 0,
            tradingAssets: 0,
            businessAssets: 0,
            loanAmount: 0,
            assetsDues: 0,
            chitFundAmount: 0,
            utilitiesAmount: 0,
            payToDealers: 0,
            employeeSalaries: 0,
            PreviousZakat: 0,
        },
    })

    const onSubmit = () => {
        let {
            totalAmount,
            deductionTotal,
            totalZakatAmount,
            actualZakatAmount,
        } = calculateZakat(getValues())
        setTotalAmount(totalAmount)
        setDeductionTotal(deductionTotal)
        setTotalZakatAmount(totalZakatAmount)
        setZakatAmount(actualZakatAmount)
    }

    let totalArray = [
        {
            sectionTitle: 'Value Of Assets On Which Zakat Has To Be Calculated',
            sectionFields: assetFields,
        },
        {
            sectionTitle: 'Merchandise',
            sectionFields: merchandiseFields,
        },
        {
            sectionTitle:
                'Amount to be deducted from Total Zakat-able Wealth (i.e.Liabilities)',
            sectionFields: deductionFields,
        },
    ]

    if (step === 0) {
        totalArray.pop()
    } else if (step == 1) {
        totalArray.splice(0, 2)
    }

    return (
        <div className="h-screen">
            <HeadTag
                tittle={'Zakat Calculator'}
                seoTitle={'Zakat Calculator'}
                seoImage={'zakat-calculator.png'}
                seoDescription={
                    'Calculate Your Zakat By Entering Assets Amount and Deductions Amount'
                }
                seoURL={'/zakat-calculator'}
            />
            <Nav env={env} />
            <h1 className="text-xl md:text-4xl font-bold text-center pt-10 text-teal-900">
                Zakat Calculator
            </h1>
            <div className="flex justify-center tracking-[.05em]">
                <div className="flex justify-between px-4 md:px-12 mt-12 w-full md:w-2/3">
                    <Steppers step={step} />
                </div>
            </div>
            <div className="w-full mt-4 flex justify-center tracking-[.05em] pb-10">
                <div className="mt-8 text-teal-900    py-4 w-full flex justify-center flex-col items-center">
                    <div className="bg-teal-100 w-full md:p-8 md:w-4/6">
                        {step == 2 ? (
                            <ZakatReview
                                step={step}
                                totalArray={totalArray}
                                setStep={setStep}
                                totalAmount={totalAmount}
                                deductionTotal={deductionTotal}
                                totalZakatAmount={totalZakatAmount}
                                zakatAmount={zakatAmount}
                                getValues={getValues}
                                register={register}
                            />
                        ) : (
                            <div className="flex flex-col bg-teal-100 w-full">
                                {totalArray.map((d, index) => (
                                    <ZakatInputSection
                                        key={index}
                                        sectionTitle={d.sectionTitle}
                                        sectionFields={d.sectionFields}
                                        step={step}
                                        getValues={getValues}
                                        register={register}
                                    />
                                ))}
                            </div>
                        )}
                        <BackNextButton
                            step={step}
                            setStep={setStep}
                            onSubmit={onSubmit}
                            handleSubmit={handleSubmit}
                            zakatAmount={zakatAmount}
                        />
                    </div>
                </div>
            </div>
            <FooterSection env={env} />
        </div>
    )
}
export const getStaticProps = () => {
    let env = {
        base_url: process.env.BACKEND_URL!,
        token: process.env.TOKEN!,
    }
    return {
        props: { env },
    }
}
export default ZakatCalculator
