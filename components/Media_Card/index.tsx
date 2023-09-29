import { Env } from '@/helpers/types'
import Pure from './pure'

type Data = {
    id: number
    slug: string
    name: string
    media_type: string
    media_path: string
    month: string
    thumbnail_image: string
    language: {
        id: number
        name: string
        code: string
    }
}
const MediaCardList = ({
    list,
    env,
    horizontalScroll,
}: {
    list?: Data[]
    env?: Env
    horizontalScroll?: boolean
}) => {
    return (
        <div
            // className={`${
            //     horizontalScroll ? 'flex-row ' : 'flex-col flex-wrap'
            // } w-full  md:flex-row overflow-x-auto flex  justify-center`}
            className={`${
                horizontalScroll
                    ? 'flex-row overflow-x-scroll md:overflow-hidden whitespace-nowrap md:whitespace-normal justify-start md:justify-center'
                    : 'justify-center flex-wrap'
            }  sm:flex-row  w-full flex  `}
        >
            {list?.map((d: Data, index: number) => (
                <Pure key={index} {...d} env={env} horizontalScroll={horizontalScroll} />
            ))}
        </div>
    )
}
export default MediaCardList
