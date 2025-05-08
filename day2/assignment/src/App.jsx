import UserList from "./components/UserList";

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
    ];

    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "24px",
                    color: "#333",
                    margin: "20px 0",
                    padding: "10px",
                }}
            >
                User Data
            </h1>
            <UserList userData={userData} />
        </div>
    );
}

export default App;
