import { useState } from 'react'
import './App.css'

function App() {
  const [uName, setName] = useState("");
  const names = ["ram", "sam", "hari", "sita"];
  function searchFn(uName) {
    names.includes(uName) ? alert("User Found") : alert("User Not Found")

  }



  return (
    <>
      <ul className="list">
        {names.map((data, index) => <li key={index}>{data}</li>)}
      </ul>
      <h1>Hello! User.</h1>
      <input type="text" name="" value={uName} onChange={(e) => setName(e.target.value)} />
      <button type=""
      // onClick={searchFn(uName)}
      >
        Search Here.
      </button>
    </>
  )
}

export default App
