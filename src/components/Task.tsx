import React from 'react';

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

const Task: React.FC<TaskProps> = ({ title, description, dueDate, status }) => {
  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p>Due: {new Date(dueDate).toLocaleDateString()}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Task;