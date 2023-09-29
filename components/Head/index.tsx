import Pure from './pure'

interface HeadTagProps {
    tittle?: string
    seoTitle?: string
    seoImage?: string
    seoDescription?: string
    seoURL?: string
}

const HeadTag = (props: HeadTagProps) => {
    return <Pure {...props} />
}
export default HeadTag
