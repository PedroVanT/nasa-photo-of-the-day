import React, { useState, useEffect } from "react";
import "./App.css";
import MediaTitle from "./components/MediaTitle/MediaTitle";
import MediaContainer from "./components/MediaContainer/MediaContainer";
import axios from "axios";

// https://api.nasa.gov/planetary/apod?api_key=GFyb6XCulUkOI5oTyFwmlf7lbZUyCHNVxwytU02y&date=2020-10-07

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=GFyb6XCulUkOI5oTyFwmlf7lbZUyCHNVxwytU02y&date=2020-10-07"
      )
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(error);
      });
  }, [data]);

  return (
    <div className="App">
      <MediaTitle />
      <MediaContainer />
    </div>
  );
}

export default App;
