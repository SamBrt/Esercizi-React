import Hello from "./Hello.jsx";
import Message from "./Message.jsx";
import { Welcome } from "./Welcome.jsx";


function App(){
  return (
    <div>
      <Welcome name="John" age="21"/>
      <Message/>
    </div>
  )
}

export default App