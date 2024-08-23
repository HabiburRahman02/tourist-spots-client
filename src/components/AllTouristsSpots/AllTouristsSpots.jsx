import { useLoaderData } from "react-router-dom";
import AllTouristsSpotsCard from "../AllTouristsSpotsCard/AllTouristsSpotsCard";
import { Typewriter } from 'react-simple-typewriter'

const AllTouristsSpots = () => {
    const spots = useLoaderData();
    console.log(spots)
    return (
        <div className="mt-6">
            <div className="mb-6 text-3xl font-bold text-center">
                O
                <Typewriter
                    loop={false}
                    delaySpeed={2500}
                    words={
                        ['ur All Tourists Spots Here',
                        ]}>

                </Typewriter>
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