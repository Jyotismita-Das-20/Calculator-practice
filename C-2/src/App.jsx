import { useState } from 'react'
import NumberPad from "./components/NumberPad"
import Display from "./components/Display"

function App() {

  const [displayVal, setDisplayVal] = useState('');

  return (
    <>
      <h1>Calculator</h1>
      <Display textToShow={displayVal} />
      <NumberPad displayVal={displayVal} setDisplayVal={setDisplayVal}/>
    </>
  )
}

export default App
