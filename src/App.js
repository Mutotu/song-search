import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import AlbumList from "./components/AlbumList";
import Cart from "./components/Cart";
import Signin from "./components/Signin";
import Login from "./components/Login";
import Spinner from "./components/Spinner";

const DEFAUL_VALUE = {
  searchTerm: "",
  albums: [],
  displayMore: 20,
  isSpinning: false,
};

function App() {
  const [data, setData] = useState(DEFAUL_VALUE);
  const [user, setUser] = useState({ profile: { name: "" }, myAlbums: [] });
  useEffect(() => {
    setData({ ...data, isSpinning: true });
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
    if (data.albums.length > 0) {
      setData({ ...data, isSpinning: false });
    }
  }, [data.searchTerm]);

  const getArtistName = (artist) => {
    setData({ ...data, searchTerm: artist });
  };

  const handleClick = () => {
    if (data.albums.length > 20) {
      setData((pre) => ({ ...pre, displayMore: data.displayMore + 20 }));
    } else {
      setData((pre) => ({ ...pre, displayMore: 20 }));
    }
  };
  // localStorage.setItem("test", true);
  return (
    <div className='App'>
      <Cart />
      <Form getArtistName={getArtistName} setData={setData} data={data} />
      {data.resultCount > 0 ? <h3>Album Count: {data.resultCount}</h3> : null}
      <button onClick={handleClick}>Load More</button>
      {data.albums.length > 0 && data.searchTerm !== "" && data.isSpinning ? (
        <Spinner />
      ) : null}
      <AlbumList albums={data.albums.slice(0, data.displayMore).reverse()} />
    </div>
  );
}

export default App;
