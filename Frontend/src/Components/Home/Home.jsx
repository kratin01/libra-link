
import Banner from "./Banner";
import FavBook from "./BestSeller";
import BookYouLike from "./BookYouLike";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "../ReviewSwiper/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavBook />
      <BookYouLike/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>

    </div>
      
    
  );
};

export default Home;
