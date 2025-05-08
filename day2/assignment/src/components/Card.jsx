import "./Card.css";

function Card({ user }) {
    return (
        <div className="card">
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
            <p>Status: {user.age < 18 ? "Minor" : "Adult"}</p>
        </div>
    );
}

export default Card;
