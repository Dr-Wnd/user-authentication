import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-4">
      {tasks.map(task => (
        <Task key={task._id} {...task} />
      ))}
    </div>
  );
};

export default TaskList;