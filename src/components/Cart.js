import { totalPrice } from "../commonUtils/utils";

const Cart = ({ user, setIsShowCart, setUser }) => {
  return (
    <div>
      <button onClick={() => setIsShowCart(false)}>Main Menu</button>
      <h2>My saved albums</h2>
      <h3>Total: ${totalPrice(user)}</h3>
      <br />
      {user.myAlbums.map((album, i) => (
        <div key={album.collectionId}>
          <button
            onClick={() => {
              let albumToRemove = album.collectionId;
              setUser({
                ...user,
                myAlbums: user.myAlbums.filter(
                  (album) => album.collectionId !== albumToRemove
                ),
              });
              console.log(user);
              console.log(albumToRemove);
            }}
          >
            Remove
          </button>
          <img src={album.artworkUrl100} alt={"Album"} />
          <p>{album.artistName}</p>
          <p>{album.collectionName}</p>
          <p>${album.collectionPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
