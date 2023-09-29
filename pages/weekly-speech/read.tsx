import { useRouter } from 'next/router'

const ReadOnline = () =>{
    const router = useRouter()
    const { src }:any = router.query
    
    return <div className="bg-gray-200">
            <iframe src={src} className="w-screen h-screen" /> 
        </div>
}

export default ReadOnline;