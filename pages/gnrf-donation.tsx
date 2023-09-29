export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://pages.razorpay.com/pl_KTXqg2QfdKKYuk/view',
            permanent: false,
        },
    }
}
const GnrfDonation = () => {
    return <></>
}
export default GnrfDonation