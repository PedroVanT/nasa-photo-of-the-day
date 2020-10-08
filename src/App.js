import React, { useState, useEffect } from "react";
import "./App.css";
import MediaTitle from "./components/MediaTitle/MediaTitle";
import MediaContainer from "./components/MediaContainer/MediaContainer";
import axios from "axios";

// ! If API is ran too many times and is unavailable, open incognito and use a different email

function App() {
  const [data, setData] = useState({});
  const [currentDate] = useState("2020-10-07");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=vpdlUQErGlMQSJWrED5jbfAXarIhue0vDzrIadwk&date=${currentDate}`
        )
        .then((res) => {
          setData(res.data);
          console.log(res.data.date);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [currentDate]);

  return (
    <div className="App">
      <MediaTitle dataObj={data} />
      <MediaContainer dataObj={data} />
    </div>
  );
}

export default App;
