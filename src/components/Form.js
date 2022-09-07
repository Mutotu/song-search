import { useState } from "react";

const Form = ({ setData, data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={data.searchTerm}
          onChange={(e) => {
            setData({ ...data, searchTerm: e.target.value });
          }}
        />
        <button>Search</button>
      </form>
    </>
  );
};

export default Form;
