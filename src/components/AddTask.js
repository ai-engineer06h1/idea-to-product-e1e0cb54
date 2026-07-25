import React, { useState } from 'react';

const AddTask = ({ history }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    // Placeholder for adding task logic
    console.log('Task added:', taskText);
    setTaskText('');
    history.push('/tasks'); // Redirect to task list
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Add New Task</h2>
      <input
        className="border px-3 py-2 mb-4 w-full"
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save Task
      </button>
    </div>
  );
};

export default AddTask;