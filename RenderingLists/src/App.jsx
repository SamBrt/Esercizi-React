import React from 'react'
import {Colors} from "./components/Colors"

function App() {

  return (
    <>
  
      <Colors colors={[
         { id: 1, name: 'Rosso' },
         { id: 2, name: 'Verde' },
         { id: 3, name: 'Blu' },
      ]}/>
 
    </>
  )
}

export default App
