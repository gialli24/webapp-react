export default function ReviewCard({ review }) {

    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < review.vote) {
            stars.push(<i className="bi bi-star-fill" key={i}></i>);
        } else {
            stars.push(<i className="bi bi-star" key={i}></i>);
        }
    }

    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="mb-3">{stars}</div>
                <p>
                    {review.review}
                </p>
            </div>
        </div>
    )
}