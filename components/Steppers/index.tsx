import Pure from './pure'

const Steppers = (props: any) => {
    let steppers = [
        {
            text: 'Assets',
        },
        {
            text: 'Deductions',
        },
        {
            text: 'Calculation',
        },
    ]
    return (
        <>
            {steppers.map((d: any, index: number) => (
                <Pure key={index} index={index} data={d} step={props.step} />
            ))}
        </>
    )
}

export default Steppers
