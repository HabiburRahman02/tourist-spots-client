import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ReviewsCard from "../ReviewsCard/ReviewsCard";


const Reviews = () => {
    const [reviews, setReviews] = useState();
    console.log(reviews)
    useEffect(() => {
        fetch('https://tourist-spots-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div>
            <div className="mb-6 text-3xl font-bold text-center">
                V
                <Typewriter
                    loop={false}
                    delaySpeed={2500}
                    words={
                        ['isitors Feedback Here_',
                        ]}>

                </Typewriter>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    reviews?.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    ></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;