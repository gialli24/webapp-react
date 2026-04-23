import { useState } from "react";
import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

export default function ReviewsForm({ setRefreshReviews, movieId }) {

    const [submissionResponse, setSubmissionResponse] = useState({});

    const [formData, setFormData] = useState({
        rating: 5,
        review: "",
        movie_id: movieId
    });

    function handleSubmit(e) {
        e.preventDefault();

        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/reviews";

        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                setSubmissionResponse(data);

                if (data.type === "success") {
                    setRefreshReviews(true);
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <form onSubmit={e => { handleSubmit(e) }}>

            {submissionResponse.type === "success" && <div className="alert alert-success" role="alert">{submissionResponse.message}</div>}
            {submissionResponse.type === 'error' && <div className="alert alert-danger" role="alert">{submissionResponse.message}</div>}

            <FormTextArea
                label="Review"
                placeholder="Write here"
                name="review"
                id="review"
                required={true}
                value={formData.review}
                setValue={(value) => setFormData({ ...formData, review: value })}
            />

            <FormSelect label="Rating" name="rating" id="rating" value={formData.rating} setValue={(value) => setFormData({ ...formData, rating: value })} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </FormSelect>

            <button className="btn btn-primary">Submit</button>
        </form>
    );
}