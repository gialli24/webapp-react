export default function FormTextArea({ label, id, name, placeholder, help, required, value, setValue }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>

            <textarea
                className="form-control"
                name={name}
                id={id}
                aria-describedby="helpId"
                placeholder={placeholder}
                style={{ height: 100 }}
                required={required}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></textarea>

            <small id="helpId" className={help.type === 'error' ? 'text-danger' : 'text-body-secondary'}>
                {help.message}
            </small>
        </div>
    );
}