import BookCard from "../cardSwipper/BookCard";
import React, { useEffect, useState } from "react";
const OtherBooks = () => {
  const [favBook, setFavBook] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get-books`)
      .then((res) => res.json())
      .then((data) => {
        setFavBook(data.slice(4, 8)); // Update state and then apply slice
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookCard favBook={favBook} headling="Other Books" />
    </div>
  );
};

export default OtherBooks;
