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
        <div className="col-md-6" key={review.id}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {stars}
                    </h5>
                    <p>{review.review}</p>
                </div>
            </div>
        </div>
    )
}