import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Westerns",
    "Horor",
    "Science Fiction",
    "Programming",
    "Action and Adventure",
    "Drama",
    "Horror",
    "Guide",
    "Travel",
    "Children's",
    "Religion, Spirituality & New Age",
    "Science",
    "History",
    "Math",
    "Anthology",
    "Poetry",
    "Encyclopedias",
    "Dictionaries",
    "Comics",
    "Art",
    "Cookbooks",
    "Diaries",
    "Journals",
    "Prayer books",
    "Series",
    "Trilogy",
    "Biographies",
    "Autobiographies",
    "Fantasy",
    "Autobiography",
    "Self-help",
  ];
  const [selectedCategories, setSelectedCategories] = useState(
    bookCategories[0]
  );

  const handleCategoryChange = (e) => {
    setSelectedCategories(e.target.value);
  };

  //handle form submit
  const handleupdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookData = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    //Update the book data
    fetch(`import.meta.env.VITE_API_URL/update-book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Book Updated Successfully");
        }
      });
  };
  return (
    <>
      <div>
        <div className=" px-4 my-12 border p-6 bg-transparent rounded-[10px] backdrop-blur">
          <h2 className=" mb-8 text-3xl font-bold text-center">
            Upadte the book data
          </h2>
          <form
            onSubmit={handleupdate}
            className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
          >
            {/* First Row */}
            <div className="flex gap-8">
              {/* Book Title */}
              <div className="lg:w-1/2">
                <div className="mb-2 block b">
                  <Label htmlFor="bookTitle" value="Book Title" />
                </div>
                <TextInput
                  id="bookTitle"
                  name="bookTitle"
                  type="text"
                  placeholder="Name of book"
                  required
                  defaultValue={bookTitle}
                />
              </div>
              {/* Author name */}
              <div className="lg:w-1/2">
                <div className="mb-2 block b">
                  <Label htmlFor="authorName" value="Author Name" />
                </div>
                <TextInput
                  id="authorName"
                  name="authorName"
                  type="text"
                  placeholder="Name of author"
                  required
                  defaultValue={authorName}
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="flex gap-8">
              {/* Book img url */}
              <div className="lg:w-1/2">
                <div className="mb-2 block b">
                  <Label htmlFor="imageURL" value="Book Image" />
                </div>
                <TextInput
                  id="imageURL"
                  name="imageURL"
                  type="text"
                  placeholder="Book Image URL"
                  required
                  defaultValue={imageURL}
                />
              </div>
              {/* Category */}
              <div className="lg:w-1/2">
                <div className="mb-2 block b">
                  <Label htmlFor="inpurState" value="Book Category" />
                </div>
                <Select
                  id="inpurState"
                  name="categoryName"
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full  border border-gray-300 rounded-full"
                >
                  {bookCategories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            {/* bookDescription */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookDescription" value="Book Description" />
              </div>
              <Textarea
                id="bookDescription"
                name="bookDescription"
                placeholder="Write Your Book Description...."
                required
                rows={6}
                className="w-full"
                defaultValue={bookDescription}
              />
            </div>

            {/* Book Pdf Link */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="bookPDFURL" value="Book PDF" />
              </div>
              <TextInput
                id="bookPDFURL"
                name="bookPDFURL"
                type="text"
                placeholder="Book PDF URL"
                shadow
                defaultValue={bookPDFURL}
              />
            </div>
            <Button
              type="submit"
              className="mt-5 bg-blue-700 hover:bg-gray-800"
            >
              <p className="text-lg font-semibold text-center">Update</p>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBooks;
