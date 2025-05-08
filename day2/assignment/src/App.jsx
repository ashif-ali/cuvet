import UserList from "./components/UserList";
import "./App.css";

function App() {
    const userData = [
        {
            name: "Ashif Ali",
            age: 25,
            location: "Murshidabad, West Bengal",
        },
        {
            name: "John Doe",
            age: 17,
            location: "New York, USA",
        },
        {
            name: "Jane Smith",
            age: 28,
            location: "London, UK",
        },
        {
            name: "John Smith",
            age: 88,
            location: "London, UK",
        },
    ];

    return (
        <div>
            <h1 className="user-data-title">User Data</h1>
            <UserList userData={userData} />
        </div>
    );
}

export default App;
