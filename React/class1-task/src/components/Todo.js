import React, { useState } from "react";

const Todo = () => {
  // Todo component implementation will go here
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <h2>Todo List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Todo;
