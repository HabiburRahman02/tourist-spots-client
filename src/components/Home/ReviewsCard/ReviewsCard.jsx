/* eslint-disable react/no-unescaped-entities */

import ReactStars from "react-stars";

const ReviewsCard = ({ review }) => {
    const { userName, title, description, date, ratings, location, photoUrl } = review;
    return (
        <div className="bg-white shadow-2xl p-12">

            <div className="space-y-6">
                <ReactStars
                    count={ratings}
                    size={24}
                    color1="green" />
                <h4 className="text-2xl font-bold">{title}</h4>
                <p>" {description} "</p>
                <div className="flex items-center gap-4">
                    <img className="rounded-full h-20 w-20 object-cover" src={photoUrl} alt="Img coming" />
                    <div>
                        <h5 className="font-bold text-lg">{userName}</h5>
                        <p>{date}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;