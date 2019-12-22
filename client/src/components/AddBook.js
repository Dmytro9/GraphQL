import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../queries/queries';

function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [formData, handleChange] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  // if (loading) return <p>Loading authors...</p>;
  if (error) return <p>Error :(</p>;

  const onChange = event => {
    handleChange({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: formData.name,
      genre: formData.genre,
      authorId: formData.authorId
    };
    console.log(data);
  };

  return (
    <div>
      <form id="add-book">
        <div className="filed">
          <label>Book name:</label>
          <input
            name="name"
            onChange={onChange}
            type="text"
            value={formData.name}
          />
        </div>

        <div className="filed">
          <label>Genre:</label>
          <input
            name="genre"
            onChange={onChange}
            type="text"
            value={formData.genre}
          />
        </div>

        <div className="filed">
          <label>Author:</label>
          <select name="authorId" onChange={onChange} value={formData.authorId}>
            <option defaultValue>Select author</option>
            {loading ? (
              <option>Loading authors</option>
            ) : (
              data.authors.map(({ name, id }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })
            )}
          </select>
        </div>

        <button type="submit" onClick={handleSubmit}>
          +
        </button>
      </form>
    </div>
  );
}

export default AddBook;
