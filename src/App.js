import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import AlbumList from "./components/AlbumList";

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
      <Form getArtistName={getArtistName} setData={setData} data={data} />
      <AlbumList albums={data.albums} />
    </div>
  );
}

export default App;
