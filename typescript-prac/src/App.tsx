
import Button from "./components/Button"
function App() {

  return (
    <>
     <h1>Typescript Practice</h1>
      <Button text="I am new"  />
      <Button text="Click here" onClick={() => alert("Clicked ME")} className="btn-2" />

    </>
  )
}

export default App




// There are 2 methods in it 
