import { useState } from 'react';
import axios from 'axios';


const Box = () => {

  const [areaData, setData] = useState("");

  // function handleData(e) {
  //   setData(e.target.value);
  // }

  (async function gettingData() {
    try {
      const response = await axios.get("http://localhost:8080/box");
      console.log(response.data);
    } catch (error) {
      console.log("error fetching data.", error);
    }
  })

  return (
    <div>
      <h3>box</h3>
      <textarea rows="10" cols="30" value={areaData} onChange={(e) => setData(e.target.value)} />
    </div>
  )
}

export default Box;
