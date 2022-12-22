import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaPhoto from "./components/NasaPhoto";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("ERROR ERROR ERROR!!!", err);
      });
  }, []);

  return (
    <div className="App">
      <>
        <NasaPhoto data={data} />
      </>
    </div>
  );
}

export default App;
