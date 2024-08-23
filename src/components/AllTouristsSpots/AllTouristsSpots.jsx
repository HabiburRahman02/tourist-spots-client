import { useLoaderData } from "react-router-dom";
import AllTouristsSpotsCard from "../AllTouristsSpotsCard/AllTouristsSpotsCard";

const AllTouristsSpots = () => {
    const spots = useLoaderData();
    console.log(spots)
    return (
        <div className="mt-6">
            <div className="mb-6">
                <h3 className="text-3xl font-bold text-center">Our All Tourists Spots Here</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    spots.map(spot => <AllTouristsSpotsCard
                        key={spot._id}
                        spot={spot}
                    ></AllTouristsSpotsCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpots;