import AllTouristsSpots from "../../AllTouristsSpots/AllTouristsSpots";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <AllTouristsSpots></AllTouristsSpots>
        </div>
    );
};

export default Home;