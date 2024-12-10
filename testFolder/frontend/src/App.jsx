import './App.css'
import NameSearch from "./Utils/NameSearch";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Box from "./Utils/Box";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/search')}>Search</button>
      <br />
      <br />
      <button onClick={() => navigate('/box')}>Box</button>

    </div>
  )
}
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/search" element={<NameSearch />} />
        <Route path="/box" element={<Box />} />
      </Routes>
    </Router>
  );
}

export default App;
