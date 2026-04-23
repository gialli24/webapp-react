export default function FormField({ label, placeholder, name, id, type, help }) {
    return (
        <div className="mb-3">
            <label for="" className="form-label">{label}</label>

            <input
                type={type}
                className="form-control"
                name={name}
                id={id}
                aria-describedby="helpId"
                placeholder={placeholder}
            />

            <small id="helpId" className="form-text text-body-secondary">
                {help}
            </small>
        </div>
    );
}