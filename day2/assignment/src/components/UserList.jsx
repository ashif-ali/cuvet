import Card from "./Card";
import "./UserList.css";

function UserList({ userData }) {
    //console.log(userData);
    return (
        <div>
            <div className="user-list">
                {userData.map((user) => {
                    return <Card key={user.name} user={user} />;
                })}
            </div>
        </div>
    );
}

export default UserList;
