import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState({
        task_name: "",
        task_description: "",
        task_due_date: "",
        task_priority: "",
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newTask.task_name.trim()) {
            alert("Task name cannot be empty!");
            return;
        }

        setTasks([...tasks, { ...newTask, id: Date.now() }]);
        setNewTask({
            task_name: "",
            task_description: "",
            task_due_date: "",
            task_priority: "",
        });
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Task Manager</h1>

                <h2>Task List</h2>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <h3>{task.task_name}</h3>
                            <p>Description: {task.task_description}</p>
                            <p>Due Date: {task.task_due_date}</p>
                            <p>Priority: {task.task_priority}</p>
                            <button onClick={() => handleDelete(task.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                <h2>Add New Task</h2>
                <input
                    name="task_name"
                    value={newTask.task_name}
                    type="text"
                    placeholder="Enter task name"
                    onChange={(e) =>
                        setNewTask({
                            ...newTask,
                            task_name: e.target.value,
                        })
                    }
                />
                <input
                    name="task_description"
                    type="text"
                    value={newTask.task_description}
                    placeholder="Enter task description"
                    onChange={(e) =>
                        setNewTask({
                            ...newTask,
                            task_description: e.target.value,
                        })
                    }
                />
                <input
                    name="task_due_date"
                    value={newTask.task_due_date}
                    onChange={(e) =>
                        setNewTask({
                            ...newTask,
                            task_due_date: e.target.value,
                        })
                    }
                    type="date"
                />
                <input
                    name="task_priority"
                    type="text"
                    value={newTask.task_priority}
                    onChange={(e) =>
                        setNewTask({
                            ...newTask,
                            task_priority: e.target.value,
                        })
                    }
                    placeholder="Enter task priority"
                />

                <input type="submit" value="Add Task" />

                <input
                    type="reset"
                    value="Reset"
                    onClick={() =>
                        setNewTask({
                            task_name: "",
                            task_description: "",
                            task_due_date: "",
                            task_priority: "",
                        })
                    }
                />

                <input
                    type="button"
                    value="Delete All Tasks"
                    onClick={() => setTasks([])}
                />
            </form>
        </div>
    );
}

export default App;
