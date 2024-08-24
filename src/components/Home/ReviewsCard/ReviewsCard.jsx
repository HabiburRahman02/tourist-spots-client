/* eslint-disable react/no-unescaped-entities */


const ReviewsCard = ({ review }) => {
    const { userName, title, description, date, ratings, location, photoUrl } = review;
    return (
        <div className="bg-white shadow-2xl p-12">
            <div className="space-y-6">
                <h6 className="text-xl">Ratings: {ratings}</h6>
                <h4 className="text-xl font-bold">{title}</h4>
                <p>" {description} "</p>
                <div className="flex items-center gap-4">
                    <img className="rounded-full h-24 w-24 object-cover" src={photoUrl} alt="Img coming" />
                    <div>
                        <h5 className="font-bold">{userName}</h5>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;