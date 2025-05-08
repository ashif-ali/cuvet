import Header from "./Header";
import Card from "./Card";

function App() {
    const items = [
        {
            title: "Learn JavaScript",
            desc: "A comprehensive guide to mastering JavaScript for web development.",
        },
        {
            title: "Introduction to Python",
            desc: "Basics of Python programming for beginners.",
        },
        {
            title: "Web Design Principles",
            desc: "Key concepts and practices for designing modern, user-friendly websites.",
        },
    ];

    return (
        <>
            <Header />
            {items.map((item) => (
                <Card title={item.title} description={item.desc} />
            ))}
        </>
    );
}

let arr = [1, 2, 3, 4, 5];
arr.map((item) => {
    console.log(item * 2);
});

export default App;
