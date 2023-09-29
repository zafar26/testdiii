export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://pages.razorpay.com/pl_JqUyOUGi3cWFPL/view',
            permanent: false,
        },
    }
}
const BooksDistribution = () => {
    return <></>
}
export default BooksDistribution