import FormSelect from "./FormSelect";
import FormTextArea from "./FormTextArea";

export default function ReviewsForm({ formData, setFormData, reviews, setReviews }) {

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
                setReviews([...reviews, data])
            })
            .catch(err => console.log(err))

    }

    return (
        <form onSubmit={e => { handleSubmit(e) }}>
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