const AlbumCard = ({ album }) => {
  const { artistName, collectionName, collectionPrice, artworkUrl100 } = album;
  console.log(album);
  return (
    <div>
      <img src={artworkUrl100} alt={"Album"} />
      <p>{artistName}</p>
      <p>{collectionName}</p>
    </div>
  );
};

export default AlbumCard;
