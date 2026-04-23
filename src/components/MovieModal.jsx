import { Link } from "react-router-dom";

export default function MovieModal({ movie }) {

    const { id, title, description, director, genre, duration, rating_avg } = movie;

    return (
        <div className="modal fade" id="modal_details" tabIndex="-1" aria-labelledby="modal_details_label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modal_details_label">
                            {title}
                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        {description}
                        <hr />

                        <div className="row row-cols-2">
                            <p>Regista: {director}</p>
                            <p>Genere: {genre}</p>
                            <p>Durata: {duration} min</p>
                            <p>Voto medio: {rating_avg}</p>
                        </div>
                    </div>

                    <div className="modal-footer">

                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <Link to={`/movies/${id}`} className="btn btn-primary">Dettagli</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}