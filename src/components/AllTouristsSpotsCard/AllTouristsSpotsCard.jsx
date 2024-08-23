/* eslint-disable react/prop-types */



const AllTouristsSpotsCard = ({ spot }) => {
    const { spotName, countryName, location, description, averageCost, seasonality, totalVisitors, travelTime, photoUrl } = spot;
    return (
        <div className=" shadow-2xl">
            <div>
                <img
                    className="h-[300px] object-cover w-full"
                    src={photoUrl}
                    alt="Shoes" />
            </div>
            <div className="p-6">
                <h2 className="font-semibold text-2xl mb-4 text-center">Spots name __ {spotName}</h2>
                <div className="text-lg space-y-4">
                    <div className="flex justify-around">
                        <p>Cost: ${averageCost}</p>
                        <p>Total visitors: {totalVisitors}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Travel time: {travelTime}hours</p>
                        <p>Seasonality: {seasonality}</p>
                    </div>
                    <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllTouristsSpotsCard;