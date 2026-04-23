export default function FormSelect({ label, name, id, value, setValue, children }) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <select
                className="form-select form-select-lg"
                name={name}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {children}
            </select>
        </div>
    );
}