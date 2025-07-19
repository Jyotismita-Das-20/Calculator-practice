import Display from "./components/Display"
import NumberPad from "./components/NumberPad"
function App() {

  return (
    <>
      <h1>Calculator</h1>
      <Display textToShow="0" />
      <NumberPad />
    </>
  )
}

export default App;
