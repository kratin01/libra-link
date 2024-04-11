import React from 'react'


export function CardThree({book}) {
  return (
    <div className="w-[300px] rounded-md border shadow-xl p-2 ">
      <img
        src={book.imageURL}
        alt="book"
        className="h-96 w-full rounded-t-md object-cover"
      />
      
      <div className="p-5 gap-1 flex flex-col justify-center items-center space">
        <h1 className="inline-flex items-center text-[20px] font-semibold">
          {book.bookTitle}
        </h1>
        <div className='flex flex-col justify-start items-center'>

        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
           {book.authorName}
          </span>
        </div>
        <p className="mt-3 text-sm text-gray-600">
          {book.bookDescription.slice(0, 100)}
        </p>
        <div className="mt-4 flex justify-center ">
         
          <span className="px-4 py-1 text-[15px] font-semibold text-gray-900">
            {book.category}
          </span>
          
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-[#1A56DB] px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
            Buy Now
        </button>
      </div>
    </div>
  )
}