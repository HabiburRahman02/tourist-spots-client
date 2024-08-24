import AllTouristsSpots from "../../AllTouristsSpots/AllTouristsSpots";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Faq from "./Faq/Faq";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AllTouristsSpots></AllTouristsSpots>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;