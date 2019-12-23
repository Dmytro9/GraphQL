import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries'
import BookDetails from './BookDetails';

function BookList() {
  const [id, setBookId] = useState('');
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={() => setBookId(id)}>{name}</li>
        ))}
      </ul>
      {id && <BookDetails id={id} />}
    </div>
  );
}

export default BookList;
