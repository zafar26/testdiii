import BlogCard from './BlogCard'
import BookCard from './BookCard'
import WeeklyBooklet from './weekly_booklet'
import WeeklySpeech from './weekly-speech'

type CardProps = {
    isBayan?: boolean
    isWeekly?: boolean
    isBlog?: boolean
    list?: any[]
    baseUrl?: string
    horizontalScroll?: boolean
}
const CardBooklet = ({
    isBayan,
    isWeekly,
    isBlog,
    list,
    baseUrl,
    horizontalScroll,
}: CardProps) => {
    if (isBayan) {
        return (
            <div
                className={`${
                    horizontalScroll
                        ? 'flex-row overflow-x-scroll md:overflow-hidden whitespace-nowrap md:whitespace-normal justify-start md:justify-center'
                        : 'justify-center flex-wrap'
                }  sm:flex-row  w-full flex  `}
            >
                {list?.map((d: any, index: number) => (
                    <WeeklySpeech
                        key={index}
                        {...d}
                        baseUrl={baseUrl}
                        horizontalScroll={horizontalScroll}
                    />
                ))}
            </div>
        )
    }
    if (isWeekly) {
        return (
            <div
                className={`${
                    horizontalScroll
                        ? 'flex-row overflow-x-scroll md:overflow-hidden whitespace-nowrap md:whitespace-normal justify-start md:justify-center'
                        : 'justify-center flex-wrap'
                }  sm:flex-row  w-full flex  `}
            >
                {list?.map((d: any, index: number) => (
                    <WeeklyBooklet
                        key={index}
                        {...d}
                        baseUrl={baseUrl}
                        horizontalScroll={horizontalScroll}
                    />
                ))}
            </div>
        )
    }
    if (isBlog) {
        return (
            <div
                className={`${
                    horizontalScroll
                        ? 'flex-row overflow-x-scroll md:overflow-hidden whitespace-nowrap md:whitespace-normal justify-start md:justify-center'
                        : 'justify-center flex-wrap'
                }  sm:flex-row  w-full flex  `}
            >
                {list?.map((d: any, index: number) => (
                    <BlogCard
                        key={index}
                        {...d}
                        baseUrl={baseUrl}
                        horizontalScroll={horizontalScroll}
                    />
                ))}
            </div>
        )
    }
    return (
        <div
            className={`${
                horizontalScroll
                    ? 'flex-row overflow-x-scroll md:overflow-hidden whitespace-nowrap md:whitespace-normal justify-start md:justify-center'
                    : 'justify-center flex-wrap'
            }  sm:flex-row  w-full flex  `}
        >
            {list?.map((d: any, index: number) => (
                <BookCard
                    key={index}
                    {...d}
                    baseUrl={baseUrl}
                    horizontalScroll={horizontalScroll}
                />
            ))}
        </div>
    )
}
export default CardBooklet
