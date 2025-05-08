import React from "react";

function Card({ children }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                width: "300px",
                margin: "15px auto",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
            }}
        >
            {children}
        </div>
    );
}

export default Card;
