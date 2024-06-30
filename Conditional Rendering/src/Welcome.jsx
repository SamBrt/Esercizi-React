import { Age } from "./Age.jsx"


export function Welcome({ name, age}) {
    return (
        
        <>
            <p>Welcome, <strong>{name}</strong></p>
            <Age age={age}/>
            {age > 18 &&  <Age age={age}/>}            
            {age &&  <Age age={age}/>}              
            {age > 18 && age < 65 &&  <Age age={age}/>}  
            {age > 18 && age < 65 && name === "John" &&  <Age age={age}/>}  
        </>
    )
}