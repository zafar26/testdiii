import Pure from './pure'

const DepartmentCardList = (props: any) => {
    return (
        <div
            className={`${
                props.horizontalScroll ? 'flex-row w-full' : ' flex-wrap'
            } md:flex-row overflow-hidden flex  justify-center`}
        >
            {props.list.map((d: any, index: number) => (
                <Pure key={index} {...d} base_url={props.base_url} />
            ))}
        </div>
    )
}
export default DepartmentCardList
