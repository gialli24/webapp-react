export default function MainCard({ title, description }) {
    return (
        <div className="card">
            <div className="card-header">
                <b>{title}</b>
            </div>
            <div className="card-body">
                {description}
            </div>
        </div>
    );
}