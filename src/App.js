import "./App.css";
import { totalPrice } from "./commonUtils/utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "./components/Form";
import AlbumList from "./components/AlbumList";
import Cart from "./components/Cart";
import Spinner from "./components/Spinner";
import Signup from "./components/Signup";
import Login from "./components/Login";

const options = { signup: Signup, login: Login };

const DEFAUL_VALUE = {
  searchTerm: "",
  albums: [],
  displayMore: 20,
  isSpinning: false,
};

function App() {
  const [data, setData] = useState(DEFAUL_VALUE);
  const [user, setUser] = useState({ profile: { name: "" }, myAlbums: [] });
  const [isShowCart, setIsShowCart] = useState(false);
  const [option, setOption] = useState({ currentPage: "login" });

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
    console.log(data.albums);
  }, [data.searchTerm]);

  const handleOptions = (page) => {
    setOption({ currentPage: page });
  };

  const getCurrentPage = () => {
    const CurrentPage = options[option.currentPage];
    return <CurrentPage />;
  };

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

  return (
    <div className='App'>
      {!localStorage.getItem("username") ? (
        <div>
          {Object.keys(options).map((page) => {
            return (
              <a key={page} href='##' onClick={() => handleOptions(page)}>
                {page}
              </a>
            );
          })}
          <div>{getCurrentPage()}</div>
        </div>
      ) : null}

      {localStorage.getItem("username") ? (
        <div>
          {isShowCart ? (
            <Cart user={user} setIsShowCart={setIsShowCart} setUser={setUser} />
          ) : (
            <div>
              <h1>Cart Total: ${totalPrice(user)}</h1>
              <button onClick={() => setIsShowCart(true)}>Go to My Cart</button>
              <Form
                getArtistName={getArtistName}
                setData={setData}
                data={data}
              />
              {data.resultCount > 0 ? (
                <h3>Album Count: {data.resultCount}</h3>
              ) : null}
              <button onClick={handleClick}>Load More</button>
              {data.albums.length > 0 &&
              data.searchTerm !== "" &&
              data.isSpinning ? (
                <Spinner />
              ) : null}
              <AlbumList
                albums={data.albums.slice(0, data.displayMore).reverse()}
                setUser={setUser}
                user={user}
              />
            </div>
          )}
        </div>
      ) : null}
      {/* {isShowCart ? (
        <Cart user={user} setIsShowCart={setIsShowCart} setUser={setUser} />
      ) : (
        <div>
          <h1>Cart Total: ${totalPrice(user)}</h1>
          <button onClick={() => setIsShowCart(true)}>Go to My Cart</button>
          <Form getArtistName={getArtistName} setData={setData} data={data} />
          {data.resultCount > 0 ? (
            <h3>Album Count: {data.resultCount}</h3>
          ) : null}
          <button onClick={handleClick}>Load More</button>
          {data.albums.length > 0 &&
          data.searchTerm !== "" &&
          data.isSpinning ? (
            <Spinner />
          ) : null}
          <AlbumList
            albums={data.albums.slice(0, data.displayMore).reverse()}
            setUser={setUser}
            user={user}
          />
        </div>
      )} */}
    </div>
  );
}

export default App;
