const AlbumCard = ({ album, setUser, user }) => {
  const { artistName, collectionName, collectionPrice, artworkUrl100 } = album;

  return (
    <div>
      <img src={artworkUrl100} alt={"Album"} />
      <p>{artistName}</p>
      <p>{collectionName}</p>
      <p>${collectionPrice}</p>
      <button
        onClick={() => {
          setUser({ ...user, myAlbums: [...user.myAlbums, album] });
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AlbumCard;
