import React, { useState } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

function App() {
  const [videos, setVidoes] = useState([]);

  const onTermSubmit = async (term) => {
    let response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVidoes(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
