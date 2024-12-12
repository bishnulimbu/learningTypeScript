import { useState } from 'react';

const NameSearch = () => {
  const [uName, setName] = useState("");
  const [vision, setVision] = useState(false);
  const [names, setArrNames] = useState(["ram", "sam", "hari", "sita"]);
  const [res, setRes] = useState("");
  const [newName, setNewName] = useState("");
  const [info, setInfo] = useState("Add New User.");
  const [feedB, setFeedB] = useState("");
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
    setInfo(vision ? "Add New User." : "Hide");
  }
  function newAdd(e) {
    e.preventDefault();
    if (names.includes(newName)) {
      setFeedB("User Already Exists")
    }
    else if
      (newName.trim() === "") {
      setFeedB("empty box")
    } else {
      setArrNames((names) => [...names, newName.trim()]);
      setVision(false);
      setInfo("Add New User.");
      setNewName("");
      // alert(`${newName} added.`);
      setFeedB(`${newName} added.`)
      setTimeout(() => {
        setFeedB("");
      }, 300);
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
      <button onClick={toggleText}>{info}</button>
      <form onSubmit={(e) => newAdd(e)}>
        {vision && (
          <>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <button type="submit">Add</button>
          </>
        )}

      </form>
      <div>
        {feedB && <p>{feedB}</p>}
      </div>
    </>
  )

}

export default NameSearch;
