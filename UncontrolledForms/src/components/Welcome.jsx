import { Age } from "./Age.jsx"


export function Welcome({ name, age}) {
    return (
        
        <>
            <p>Welcome, <strong>{name}</strong></p>
            <Age age={age}/>
        </>
    )
}