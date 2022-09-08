const Form = ({ setData, data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={"searchArtist"}
          type='text'
          placeholder='Search...'
          value={data.searchTerm}
          onChange={(e) => {
            setData({ ...data, searchTerm: e.target.value });
          }}
        />
        {/* <button type='submit' >
          <i className='fa-search'></i>
        </button> */}
      </form>
    </>
  );
};

export default Form;
