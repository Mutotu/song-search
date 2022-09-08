import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums }) => {
  return (
    <div className='section-list'>
      {albums.map((album, i) => (
        <AlbumCard
          album={album}
          key={album.artistId + i}
          className='artist-card'
        />
      ))}
    </div>
  );
};

export default AlbumList;
