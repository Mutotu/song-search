import AlbumCard from "./AlbumCard";

const AlbumList = ({ albums, setUser, user }) => {
  return (
    <div className='section-list'>
      {albums.map((album, i) => (
        <AlbumCard
          user={user}
          setUser={setUser}
          album={album}
          key={album.collectionId}
          className='artist-card'
        />
      ))}
    </div>
  );
};

export default AlbumList;
