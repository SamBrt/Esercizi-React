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












/*export function Counter({ initialValue }){
    const [counter, setCounter] = useState(initialValue)

    
// Utilizzando il valore diretto dello stato (potrebbe portare a uno stato non corretto)
function handleCounterIncrement(){
    setCounter(counter + 1); // counter potrebbe non avere il valore più aggiornato
}

// Utilizzando la callback (garantisce lo stato più recente)
function handleCounterIncrement(){
    setCounter(prevCounter => prevCounter + 1); // prevCounter è sempre lo stato più recente
}


    return (
        <div>
            <CounterDisplay counter={counter}/>
            <Button onClick={handleCounterIncrement} label={"Aumenta"}/>
        </div>
    )
}*/