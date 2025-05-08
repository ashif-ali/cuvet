import Card from "./Card";
import "../App.css";

function UserList({ userData }) {
    console.log(userData);
    return (
        <div>
            <div className="user-list">
                {userData.map((user) => {
                    return (
                        <Card key={user.name}>
                            <h2>{user.name}</h2>
                            <p>Age: {user.age}</p>
                            <p>Location: {user.location}</p>
                            <p>Status: {user.age < 18 ? "Minor" : "Adult"}</p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default UserList;
