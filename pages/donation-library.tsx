export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://axisbpayments.razorpay.com/Librarybooks',
            permanent: false,
        },
    }
}
const DonationLibrary = () => {
    return <></>
}
export default DonationLibrary