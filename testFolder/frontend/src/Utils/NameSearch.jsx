import { useState, useEffect } from 'react';
import axios from 'axios';
//already imported onces.

const NameSearch = () => {
  const [uName, setName] = useState("");
  const [vision, setVision] = useState(false);
  const [names, setArrNames] = useState([]);
  //initilizing the state as an empty array for the inclues method.
  const [res, setRes] = useState("");
  const [newName, setNewName] = useState("");
  const [info, setInfo] = useState("Add New User.");
  const [feedB, setFeedB] = useState("");
  const [error, setError] = useState(null);

  function searchFn(e) {
    e.preventDefault();
    // names.includes(uName) ? alert("User Found") : alert("User Not Found")
    if (names.some((demoName) => demoName.names === uName)) {
      // return `${uName} found.`
      setRes(`${uName} found.`);
    } else {
      setRes(`${uName} not found`)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const nameData = await axios.get("http://localhost:8080/nameSearch");
        const result = nameData.data;
        //doesn't need json() as axios.get returns the response object.
        setArrNames(result);
      } catch (error) {
        console.log("error fetching data.", error);
        setError(true);
        // setArrNames("backend server not running.");
      }
    }
    // if (!fetchData()) {
    //   setArrNames("backend server not running.");
    // }
    fetchData();

  }, [])
  //run the render on mount and only once.

  function toggleText() {
    setVision(!vision);
    setInfo(vision ? "Add New User." : "Hide");
  }

  async function newAdd(e) {
    e.preventDefault();

    if (!newName.trim()) {
      setFeedB("empty box");
    } else if (names.some((demoName) => demoName.names === newName.trim())) {
      setFeedB("User Already Exists")
      return;
    }

    try {
      await axios.post("http://localhost:8080/nameSearch", { name: newName });
      // will send the name property parameter so is a must.
      setArrNames([...names, { name: newName }]);
      const nameData = await axios.get("http://localhost:8080/nameSearch");
      setFeedB(`${newName} added.`)
    } catch (error) {
      if (error.response.status === 409) {
        setFeedB("duplicate entry");
      } else {
        setFeedB("something went wrong");
        console.log("name could not be added", error);
      }
    }
    // if (names.includes(newName)) {
    //   setFeedB("User Already Exists")
    // }
    // else if
    //   (newName.trim() === "") {
    //   setFeedB("empty box")
    // } else {
    //   setArrNames((names) => [...names, newName.trim()]);
    //   setVision(false);
    //   setInfo("Add New User.");
    //   setNewName("");
    //   // alert(`${newName} added.`);
    //   setFeedB(`${newName} added.`)
    //   setTimeout(() => {
    //     setFeedB("");
    //   }, 300);
    // }
  }

  async function deleteFn(pName) {

    try {
      await axios.delete('http://localhost:8080/nameSearch', { data: { name: pName } })
      // setArrNames(names.some((item) => ));
      // setArrNames(names.filter((item) => item.name != pName));
      setFeedB("deleted successfully.")

    } catch (e) {
      setFeedB("deletion failed.");
      return console.error("coudn't delete", e);

    }
  }
  return (
    <>

      <ul className="list">
        {error ? <span><h3>Server not running.
          <p>run backend server to fetch name data.</p>
        </h3></span> : names.map((data, index) => <li key={index} style={{ cursor: 'pointer' }} onClick={() => deleteFn(data.names)}>{data.names}</li>)}
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
