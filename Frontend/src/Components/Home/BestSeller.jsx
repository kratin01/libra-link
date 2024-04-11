import  { useEffect, useState } from 'react'
import BookCard from '../cardSwipper/BookCard'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js"


const FavBook = () => {
    const [favBook, setFavBook] = useState([])
    useEffect(() => {
      fetch("http://localhost:3000/get-books")
          .then((res) => res.json())
          .then((data) => {
              setFavBook(data).slice(0,7);
          })
          .catch((err) => console.log(err));
  }, []);
  
  return (
    <motion.div
    variants={fadeIn("down", 0.1)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.5 }}//amount is the percentage of the component that should be visible before it is triggered if 0.5 then 50% of the component should be visible before it is triggered
    ><BookCard favBook={favBook} headling="Our Best Seller"/></motion.div>
  )
}

export default FavBook