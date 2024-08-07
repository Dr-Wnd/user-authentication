import React, { useState } from 'react';
import axios from 'axios';

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', { title, description, dueDate }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      // Optionally, refresh the task list or give feedback to the user
    } catch (error) {
      console.error('Error adding task', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded mb-4">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 border rounded"></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default AddTaskForm;