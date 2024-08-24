import AllTouristsSpots from "../../AllTouristsSpots/AllTouristsSpots";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AllTouristsSpots></AllTouristsSpots>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;