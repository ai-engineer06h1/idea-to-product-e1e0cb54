import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([ // Sample initial data
    { id: 1, text: 'Sample Task 1', completed: false },
  ]);

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;