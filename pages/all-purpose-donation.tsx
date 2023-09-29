export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination:
                'https://axisbpayments.razorpay.com/pl_IwZjnuiJyfxOXf/view',
            permanent: false,
        },
    }
}
const AllPurposeDonation = () => {
    return <></>
}
export default AllPurposeDonation