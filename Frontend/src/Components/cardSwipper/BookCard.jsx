import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6'

const BookCard = ({ favBook, headling }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className=" text-6xl text-center font-bold text-black my-5">
        {headling}
      </h2>

      {/* Cards */}
      <div className=' mt-12 popular'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="w-full h-96"
      >
       
        {
          favBook.map(book =>  <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <div className=' relative'>
                <img src={book.imageURL} alt="" />
                <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div>
               <div>
               <h3>{book.bookTitle}</h3>
                <p>{book.authorName}</p>
               </div>
               <div>
                <p>$10.00</p>
               </div>
              </div>
            </Link>
          </SwiperSlide>)
        }
      </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
