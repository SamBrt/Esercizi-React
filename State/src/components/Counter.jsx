import { useState } from "react";
import { Button } from "./Button";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({ initialValue }){
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement(){
        setCounter((count) => count + 1)
    }
    function handleCounterDecrease(){
        setCounter((count) => count - 1)
    }
    function handleCounterReset(){
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <Button onClick={handleCounterIncrement} label={"Aumenta"}/>
            <Button onClick={handleCounterDecrease} label={"Diminuisci"}/>
            <Button onClick={handleCounterReset} label={"Resetta"}/>
        </div>
    )
}