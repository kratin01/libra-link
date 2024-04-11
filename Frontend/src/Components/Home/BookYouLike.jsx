import React from "react";
import favBookImg from "../../assets/favoritebook.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { fadeIn } from "../../variants.js"

const BookYouLike = () => {
  return (
    <div className=" px-4 lg:px-24 my-20  flex flex-col justify-between md:flex-row items-center gap-12">
      <motion.div
       variants={fadeIn("left", 0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.4 }}
       transition={{ duration: 0.6 } }


       className="md:w-1/2 ">
        <img src={favBookImg} alt="" className=" rounded md:w-10/12" />
      </motion.div>
      <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.6 } }
       className=" md:w-1/2 space-y-6">
        <h2 className=" text-5xl leading-snug font-bold md:w-3/4">You Can Find You Favorite <span className=" text-blue-700">Book Here!</span></h2>
        <p className=" mb-10 text-lg md:w-5/6">Step into the world of "You Can Find Your Favorite Book Here!" - a haven for book enthusiasts. This charming sanctuary houses a diverse collection, from timeless classics to contemporary treasures. Whether you crave mystery, romance, or profound wisdom, every shelf holds the promise of discovering your next literary escape. Join fellow readers in this magical space where the love for books knows no bounds.</p>

        <div className=" flex flex-col justify-between sm:flex-row  gap-6 md:w-3/4 my-14">
            <div>
                <h3 className=" text-5xl font-bold">100+</h3>
                <p className="text-base">Book Listed</p>
            </div>
            <div>
                <h3 className=" text-5xl font-bold">50+</h3>
                <p className="text-base">Register Users</p>
            </div>
            <div>
                <h3 className=" text-5xl font-bold">250+</h3>
                <p className="text-base">Pdf Dowloaded</p>
            </div>
        </div>
        <Link to='/shop' className="mt-12 block"><button className=" bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">Click To Explore</button></Link>
      </motion.div>
    </div>
  );
};

export default BookYouLike;
