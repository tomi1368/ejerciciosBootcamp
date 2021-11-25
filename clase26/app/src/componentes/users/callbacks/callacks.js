const cbMap = (person,i) => {
    return (
        <li key={i}>{`${person.email}, ${person.name},${person.pass}`}</li>
    )
}

export default cbMap
