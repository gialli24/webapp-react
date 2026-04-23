import ReviewCard from "./ReviewCard";

export default function ReviewsList({ reviews }) {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {
                reviews?.map(review => (
                    <div key={review.id} className="col">
                        <ReviewCard review={review} />
                    </div>
                ))
            }
        </div>
    )
}