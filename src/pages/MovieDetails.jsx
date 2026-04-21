import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/" + movieId;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
    }, [movieId])


    return (
        <>
            <h1>Movie Details {movieId}</h1>

            <ul>
                <li>Title: {movie.title}</li>
                <li>Description: {movie.description}</li>

                <li>
                    Reviews:
                    <ul>
                        {
                            movie.reviews?.map(review => (
                                <li key={review.id}>{review.review}</li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </>
    )
}