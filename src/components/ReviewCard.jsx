export default function ReviewCard({ review }) {
    return (
        <div className="col-md-6" key={review.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{review.vote}/5</h5>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    )
}