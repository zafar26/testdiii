export const assetFields = [
    {
        label: 'Gold ',
        value: 'goldAmount',
    },
    {
        label: 'Silver ',
        value: 'silverAmount',
    },
    {
        label: 'Cash ',
        value: 'cashInHand',
    },
    {
        label: 'Money Deposited in Bank ',
        value: 'depositedAmount',
    },
    {
        label: 'Policy / Bond / FD  ',
        value: 'policyAmount',
    },
    {
        label: 'Given Loan',
        value: 'givenLoanAmount',
    },
    {
        label: 'Other Assets',
        value: 'otherAssets',
    },
]
export const merchandiseFields = [
    {
        label: 'Raw Materials in Factory ',
        value: 'rawMaterials',
    },
    {
        label: 'Manufactured goods in factory/shop etc. ',
        value: 'manufacturedGoods',
    },
    {
        label: 'Plots, houses or flats for trading.',
        value: 'tradingAssets',
    },
    {
        label: 'Business partnership assets on which Zakat is to be calculated.',
        value: 'businessAssets',
    },
]
export const deductionFields = [
    {
        label: 'Loan ',
        value: 'loanAmount',
    },
    {
        label: 'Dues or installments on house, shop, things. ',
        value: 'assetsDues',
    },
    {
        label: 'Remaining payable amount of committee (Chit Fund) (provided that one has already got the total amount of the committee).',
        value: 'chitFundAmount',
    },
    {
        label: 'Utility bills such as gas, electricity etc. provided that one has got the bills before the Zakat year is complete.',
        value: 'utilitiesAmount',
    },
    {
        label: ' Payable to Dealers ',
        value: 'payToDealers',
    },
    {
        label: 'Salaries of employees.',
        value: 'employeeSalaries',
    },
    {
        label: 'Unpaid Zakat of the previous year.',
        value: 'PreviousZakat',
    },
]

export function calculateZakat(data: any) {
    let totalUserAmount,
        deductions,
        totalZakatAmount,
        zakat: number = 0
    totalUserAmount =
        Number(data.goldAmount ? data.goldAmount : 0) +
        Number(data.silverAmount ? data.silverAmount : 0) +
        Number(data.depositedAmount ? data.depositedAmount : 0) +
        Number(data.cashInHand ? data.cashInHand : 0) +
        Number(data.policyAmount ? data.policyAmount : 0) +
        Number(data.givenLoanAmount ? data.givenLoanAmount : 0) +
        Number(data.otherAssets ? data.otherAssets : 0) +
        Number(data.rawMaterials ? data.rawMaterials : 0) +
        Number(data.manufacturedGoods ? data.manufacturedGoods : 0) +
        Number(data.tradingAssets ? data.tradingAssets : 0) +
        Number(data.businessAssets ? data.businessAssets : 0)
    deductions =
        Number(data.loanAmount ? data.loanAmount : 0) +
        Number(data.assetsDues ? data.assetsDues : 0) +
        Number(data.chitFundAmount ? data.chitFundAmount : 0) +
        Number(data.utilitiesAmount ? data.utilitiesAmount : 0) +
        Number(data.payToDealers ? data.payToDealers : 0) +
        Number(data.employeeSalaries ? data.employeeSalaries : 0) +
        Number(data.PreviousZakat ? data.PreviousZakat : 0)
    totalZakatAmount = parseFloat((totalUserAmount - deductions).toString())
    zakat = parseFloat((totalZakatAmount / 40).toString())
    return {
        totalAmount: totalUserAmount,
        deductionTotal: deductions,
        totalZakatAmount: totalZakatAmount,
        actualZakatAmount: Math.ceil(zakat),
    }
}
