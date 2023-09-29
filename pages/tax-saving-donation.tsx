export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination:
                'https://axisbpayments.razorpay.com/pl_KTGGSPElQutH3b/view',
            permanent: false,
        },
    }
}
const TaxSaving = () => {
    return <></>
}
export default TaxSaving