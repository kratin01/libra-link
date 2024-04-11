import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Manageyourbooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/get-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
  }, []);

  const handledelete = (id) => {
    fetch(`${import.meta.env.VITE_API_URL}/delete-book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Book Deleted Successfully");
        }
      });
  };

  return (
    <div>
      <h2 className=" mb-8 text-3xl font-bold text-center">Manage Books</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-gray-200 shadow-xl divide-y divide-gray-200 lg:w-[1180px]">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Book Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Author Name
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Edit or Manage
              </th>
            </tr>
          </thead>
          {books.map((book, index) => {
            return (
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {book.bookTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.authorName}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {book.category}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    <Link
                      className="text-indigo-600 hover:text-indigo-900 mr-5"
                      to={`/admin/dashboard/edit-books/${book._id}`}
                    >
                      <button className="text-blue-600 hover:text-indigo-900">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handledelete(book._id)}
                      className=" bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Manageyourbooks;
