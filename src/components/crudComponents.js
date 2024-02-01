export function input(props) {
    return (
        <>
            <label>{props.nome}</label>
            <input type={props.tipo} name={props.nome}></input>
        </>
    )
}

export function checkBox(props) {
    return (
        <>
            <div>
                <label>{props.text}</label>
                <input type={props.tipo} name={props.nome} />
            </div>
        </>
    )
}

export function select(props) {
    return (
        <>
            <label>{props.name}</label>
            <select id={props.nome}>
                {
                    props.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))
                }
            </select>
        </>
    )
}
