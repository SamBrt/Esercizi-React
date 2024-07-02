import { Counter } from "./components/Counter.jsx";
import Hello from "./Hello.jsx";



function App(){
  return (
    <div>
      <Hello />
      <Counter initialValue={0}/>
    </div>
  )
}

export default App