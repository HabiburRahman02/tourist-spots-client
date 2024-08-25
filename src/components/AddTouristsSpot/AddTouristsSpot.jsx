import Swal from "sweetalert2";

const AddTouristsSpot = () => {

    const handleAddTouristSpot = e => {
        e.preventDefault();
        const form = e.target;
        const spotName = form.spotName.value
        const countryName = form.countryName.value
        const location = form.location.value
        const description = form.description.value
        const averageCost = form.averageCost.value
        const seasonality = form.seasonality.value
        const totalVisitors = form.totalVisitors.value
        const travelTime = form.travelTime.value
        const photoUrl = form.photoUrl.value

        const spots = { spotName, countryName, location, description, averageCost, seasonality, totalVisitors, travelTime, photoUrl }
        console.log(spots)

        fetch('https://tourist-spots-server.vercel.app/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New spots added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto p-12 m-4 shadow-2xl min-h-screen">
            <div className="max-w-2xl mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold">Add Tourists Spot</h2>
                <p>Tourist spots around the world offer a diverse range of experiences, from natural wonders to historic landmarks. The Eiffel Tower in Paris stands as a symbol of romance and engineering marvel, while the Great Wall of China showcases the grandeur of ancient civilization.</p>
            </div>
            <form onSubmit={handleAddTouristSpot}>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Spot Name</span>
                        </label>
                        <input type="text" name="spotName" placeholder="spot name" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Country Name</span>
                        </label>
                        <input type="text" name="countryName" placeholder="country name" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="location" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="description" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Average Cost</span>
                        </label>
                        <input type="number" name="averageCost" placeholder="average cost" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="seasonality" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Total Visitor</span>
                        </label>
                        <input type="number" name="totalVisitors" placeholder="total visitors" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Travel Time</span>
                        </label>
                        <input type="number" name="travelTime" placeholder="travel time" className="border-2 p-4" required />
                    </div>
                </div>

                <div className="gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="photo url" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold w-full">Add Tourist Spot</button>
                </div>
            </form>
        </div>

    );
};

export default AddTouristsSpot;