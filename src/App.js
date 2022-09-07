import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({ searchTerm: "", albums: [] });
  useEffect(() => {
    fetch(
      `https://itunes.apple.com/search?term=${data.searchTerm}&media=music&entity=album&attribute=artistTerm&limit=200`
    )
      .then((response) => response.json())
      .then((res) =>
        setData((pre) => ({
          ...pre,
          albums: res.results,
          resultCount: res.resultCount,
        }))
      );
    console.log(data);
  }, [data.searchTerm]);

  const getArtistName = (artist) => {
    setData({ ...data, searchTerm: artist });
  };

  return (
    <div className='App'>
      <h1>App</h1>
      <Form getArtistName={getArtistName} setData={setData} data={data} />
    </div>
  );
}

export default App;
