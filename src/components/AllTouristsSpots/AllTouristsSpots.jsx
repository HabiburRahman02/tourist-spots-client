import AllTouristsSpotsCard from "../AllTouristsSpotsCard/AllTouristsSpotsCard";
import { Typewriter } from 'react-simple-typewriter'
import { useEffect, useState } from "react";

const AllTouristsSpots = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('https://tourist-spots-server.vercel.app/spots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto mt-6 mb-16">
            <div className="mb-6 text-3xl font-bold text-center">
                O
                <Typewriter
                    loop={false}
                    delaySpeed={2500}
                    words={
                        ['ur All Tourists Spots Here_',
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