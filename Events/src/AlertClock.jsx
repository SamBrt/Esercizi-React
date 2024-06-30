import { Button } from "./Button"

export function AlertClock(){
    function handleButtonClick(){
        const now = new Date()

        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    return (
        <div>
            <h2>Click this button below to show the current time</h2>
            <Button onClick={handleButtonClick} label="Click me!"/>
        </div>
    )
}