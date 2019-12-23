import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

function BookDetails({ id }) {
  const { loading, 
    // error, 
    data } = useQuery(getBookQuery, {
    variables: { id }
  });

  if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;

  const displayBookDetails = () => {
    if (data) {
      return (
        <div id="book-details">
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author:</p>
          <ul id="book-list">
            {data.book.author.books.map(b => {
              return <li key={b.id}>{b.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No book selected...</p>;
    }
  };

  return displayBookDetails();
}

export default BookDetails;
