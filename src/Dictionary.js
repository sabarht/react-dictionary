import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./App.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${keyword} `;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000130cb7f0de6f1447aaa914c0fdf5e81db";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" autoFocus={true} onChange={updateKeyword} placeholder="rainbow" />
          <div><small>example: Love, Family, peace</small></div>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
