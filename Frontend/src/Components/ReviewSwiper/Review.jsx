import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import {Avatar} from "flowbite-react"
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      //To make this component tansition more smooth we can chane the duration to 0.5 if we increase the duration the transition will be more slow

      className="my-12 px-4 lg:px-24 "
    >
      <h2 className="text-5xl font-bold text-center leading-snug mb-10">
        Our Coustmer
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
          <SwiperSlide className=" shadow-2xl py-8 px-4 md:m-5 rounded-lg border  cursor-pointer">
            <div className=" bg-blue-100 p-6 ">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Avtar */}
              <div className="mt-7 ">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  nam ex, aperiam eius soluta ullam labore. Est tenetur nesciunt
                  possimus nostrum corporis sunt laudantium enim necessitatibus
                  hic tempore! Repellendus, quibusdam?
                </p>
              </div>
              <img
                class="w-10  rounded-full mb-4"
                src={profile}
                alt="Rounded avatar"
              />
              <h5 className="text-lg font-medium">King john</h5>
              <p className="text-base">Lorem, ipsum dolor.</p>
            </div>
          </SwiperSlide>
          {/* ================================================================ */}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Review;
