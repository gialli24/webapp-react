import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";
import MainCard from "../components/MainCard";
import ReviewsForm from "../components/ReviewsForm";

export default function MovieDetails() {

    const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS

    const { movieId } = useParams();

    const [movie, setMovie] = useState({});
    const [reviews, setReviews] = useState([]);

    const [formData, setFormData] = useState({
        rating: 5,
        review: "",
        movie_id: movieId
    });


    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/" + movieId;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setReviews(data.reviews);
            })
            .catch(err => console.log(err))

    }, [movieId, reviews])

    return (
        <main>
            <section id="details" className="mb-4">

                <div className="p-5 mb-4 rounded-3">
                    <div className="container">
                        <div className="d-flex flex-column flex-md-row gap-4">

                            <img src={endpoint + "/img/" + movie.image} alt={movie.title} className="object-fit-cover" style={{ height: 350 }} />

                            <div>

                                <h1 className="display-5 fw-bold">
                                    {movie.title}
                                </h1>

                                <p className="fs-4">
                                    {movie.description}
                                </p>

                                <div className="row row-cols-3 g-4 mt-4">
                                    <div className="col">
                                        <MainCard title="Director" description={movie.director} />
                                    </div>

                                    <div className="col">
                                        <MainCard title="Release Year" description={movie.release_date ? new Date(movie.release_date).getFullYear() : ""} />
                                    </div>

                                    <div className="col">
                                        <MainCard title="Director" description={movie.director} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reviews" className="p-5">
                <div className="container">
                    <ReviewsList reviews={reviews} />

                    <hr className="m-4" />

                    <h2>Leave a review</h2>

                    <ReviewsForm formData={formData} setFormData={setFormData} reviews={reviews} setReviews={setReviews} />
                </div>
            </section>
        </main >
    )
}