import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }) {
    return (
        <div className="row">
            {
                reviews?.map(review => (
                    <ReviewCard key={review.id} review={review} />
                ))
            }
        </div>
    )
}