import "./App.css";
import { useState, useEffect } from "react";
import Table from "./components/Table";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?search=${query}`);
      setData(res.data);
    };
    fetchUsers();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <Table data={data} />
    </div>
  );
}

export default App;
