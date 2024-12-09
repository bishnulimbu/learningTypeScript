import { useState } from 'react'
import './App.css'

function App() {
  const [uName, setName] = useState("");
  const names = ["ram", "sam", "hari", "sita"];
  const [res, setRes] = useState("");
  function searchFn(e) {
    e.preventDefault();
    // names.includes(uName) ? alert("User Found") : alert("User Not Found")
    if (names.includes(uName)) {
      // return `${uName} found.`
      setRes(`${uName} found.`);
    } else {
      setRes(`${uName} not found`)
    }

  }
  return (
    <>
      <ul className="list">
        {names.map((data, index) => <li key={index}>{data}</li>)}
      </ul>
      <h1>Hello! User.</h1>
      <form
        onSubmit={(e) => searchFn(e)}
      >
        <input type="text" name="" value={uName} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Search Here.</button>
        <h1>{res}</h1>

      </form>
    </>
  )
}

export default App
