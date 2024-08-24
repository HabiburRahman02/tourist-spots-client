import Swal from "sweetalert2";


const AddReview = () => {

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const ratings = form.ratings.value;
        const location = form.location.value;
        const photoUrl = form.photoUrl.value;

        const review = { userName, title, description, date, ratings, location, photoUrl };
        console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good Job Man!!",
                        text: "Added Review successfully",
                        icon: "success",
                        color: 'green',
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto p-12 m-4 shadow-2xl min-h-screen">
            <div className="max-w-2xl mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold">Add Tourists Spot</h2>
                <p>Tourist spots around the world offer a diverse range of experiences, from natural wonders to historic landmarks. The Eiffel Tower in Paris stands as a symbol of romance and engineering marvel, while the Great Wall of China showcases the grandeur of ancient civilization.</p>
            </div>
            <form onSubmit={handleAddReview}>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">User Name</span>
                        </label>
                        <input type="text" name="userName" placeholder="Enter user name" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Enter title" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Enter description" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Enter date" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="md:flex gap-9">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Ratings</span>
                        </label>
                        <input type="number" name="ratings" placeholder="Enter ratings" className="border-2 p-4" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Enter location" className="border-2 p-4" required />
                    </div>
                </div>

                <div className="gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg text-gray-500">User Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="photo url" className="border-2 p-4" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold w-full">Add Review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;