const AlbumCard = ({ album }) => {
  const { artistName, collectionName, collectionPrice, artworkUrl100 } = album;

  return (
    <div
      onClick={() => {
        console.log(album);
      }}
    >
      <img src={artworkUrl100} alt={"Album"} />
      <p>{artistName}</p>
      <p>{collectionName}</p>
      <p>${collectionPrice}</p>
    </div>
  );
};

export default AlbumCard;
