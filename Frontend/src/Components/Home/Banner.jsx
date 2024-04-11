
import BannerCard from '../Swiper/BannerCard'
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js"

const Banner = () => {
  return (
    <div className=' px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* Left Side */}
            <motion.div 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=' space-y-8 md:w-1/2 h-full'>
                <h2 className=' text-5xl font-bold leading-snug text-black '>Discover and Swap Books: Your Place for <span className='text-blue-700'>Buying and Selling</span></h2>\
                <p className=' md:w-4/5 '>Welcome to our vibrant Book Exchange Hub, where literary enthusiasts come together to trade books effortlessly. Discover hidden gems, share your favorites, and streamline your bookshelf by selling or buying pre-loved reads. Join our community and embark on a journey of literary exploration, connecting readers one book at a time</p>
                <div>
                    <input type="search"  name='search' id='search' placeholder='Search For A Book' className=' py-2 px-2 rounded-s-sm outline-none' />
                    <button className=' bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </motion.div>

            {/* Right Side */}
            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner