export const runtime = 'experimental-edge'
export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://rzp.io/l/All-telethon',
            permanent: false,
        },
    }
}
const Telethon = () => {
    return <></>
}
export default Telethon