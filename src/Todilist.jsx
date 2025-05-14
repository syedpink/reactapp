import React from 'react'
import  { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    // stop from default action for submit
     e.preventDefault(); 
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };                  

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div class="doto">
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task"/>
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
           <input type="checkbox" checked={t.completed} onChange={() => toggleTask(index)}/>
            <span>
              {t.text}
            </span>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
