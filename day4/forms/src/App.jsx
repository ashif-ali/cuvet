import React, { useState } from "react";

function App() {
    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
        },
        form: {
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
        },
        input: {
            marginBottom: "12px",
            padding: "8px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
        },
        button: {
            padding: "10px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        },
    };

    const validate = () => {
        const { name, email, password } = formData;
        if (name === "") {
            alert("Name is required");
            return false;
        }
        if (email === "") {
            alert("Email is required");
            return false;
        }
        if (password === "") {
            alert("Password is required");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const error = validate();
        if (!error) {
            console.log("Error in form");
            return;
        }
        // const formData = new FormData(event.target);
        // for (const [key, value] of formData) {
        //     console.log(key, value);
        // }
        // const data = Object.fromEntries(formData.entries());
        // console.log(data.name);
        // console.log("Name:", name);
        // console.log("Email:", email);
        // console.log("Password", password);
        console.log("Form submitted", formData);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => {
            const updatedData = {
                ...prevData,
                [name]: value,
            };
            //console.log(updatedData);
            return updatedData;
        });
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    style={styles.input}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    name="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    style={styles.input}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button style={styles.button} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
