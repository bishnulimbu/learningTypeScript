import { useState } from 'react';

const nameSearch = () => {
  const [uName, setName] = useState("");
  const [vision, setVision] = useState(false);
  const [names, setArrNames] = useState(["ram", "sam", "hari", "sita"]);
  const [res, setRes] = useState("");
  const [newName, setNewName] = useState("");
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

  function toggleText() {
    setVision(!vision);
  }
  function newAdd(e) {
    e.preventDefault();
    setArrNames([...names, newName]);
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
      <button onClick={toggleText}>Add new User.</button>
      <form onSubmit={(e) => newAdd(e)}>
        {vision && (
          <>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button type="submit">Add</button>
          </>
        )}

      </form>
    </>
  )

}

export default nameSearch;
