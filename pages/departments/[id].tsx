import Nav from '@/components/Nav'
import FooterSection from '@/components/Sections/Footer'
import { Env } from '@/helpers/types'

const DepartmentSinglePage = ({ env }: any) => {
    return (
        <>
            {/* <Nav selectedPage="Departments" env={env} /> */}
            <div className="md:m-16">Not Yet Designed</div>
            <FooterSection env={env}/>
        </>
    )
}

// // This function gets called at build time
// export function getStaticPaths() {
//     try {
//         return { paths: [{ params: { id: '1' } }], fallback: 'blocking' }
//     } catch (err: any) {
//         return { paths: [{ params: { id: '1' } }], fallback: 'blocking' }
//     }
// }
// export const getStaticProps = ({ params }: any) => {
//     const base_url = process.env.BACKEND_URL
//     const token = process.env.TOKEN
//     return {
//         props: { env: { base_url, token } },
//         // revalidate: 500,
//     }
// }

export default DepartmentSinglePage
