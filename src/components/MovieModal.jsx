import { Link } from "react-router-dom";

export default function MovieModal({ movie }) {

    const { id, title, description } = movie;

    return (
        <div className="modal fade" id="details-modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            {title}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{description}</p>
                    </div>
                    <div className="modal-footer">
                        <Link
                            to={`/movies/${id}`}
                            onClick={() => {
                                const modalElement = document.getElementById('details-modal');
                                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                                modalInstance?.hide();
                            }}
                            className="btn btn-primary"
                        >
                            Di più
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}