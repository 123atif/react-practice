import Cards from "./components/Cards";

function App() {
  return (
    <>
      <div className=" text-center m-2">
        <h1>Card Props</h1>
      </div>
      <Cards name="Atif" desc="Student" button="Click Me" />
      <Cards />

      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </>
  );
}

export default App;
