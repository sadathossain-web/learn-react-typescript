type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
        {
            props.names.map(names => {
                return (
                    <h2 key={names.first}>{names.first} {names.last}</h2>

                )
            })
        }
        </div>
    )
}