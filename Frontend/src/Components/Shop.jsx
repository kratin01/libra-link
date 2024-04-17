import React, { useEffect } from "react";
import { useState } from "react";
import { CardThree } from "./Card";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get-books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  console.log(import.meta.env.VITE_API_URL);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className=" text-5xl font-bold text-center">All Books Are Here</h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 my-12 lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {books.map((book) => (
          <CardThree book={book} key={book._id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
