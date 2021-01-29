import React, { useEffect, useState } from 'react';
import TaskDetails from './TaskDetails';

const Tasks = () => {
    let [tasks, setTasks] = useState([]);
    useEffect(() => {
    fetch("https://dry-oasis-15376.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
    return (
      <>
        <div>
          
           <div>
      {tasks.map((task) => (
        <TaskDetails key={task._id} task={task}></TaskDetails>
      ))}
    </div>
        </div>
        </>
    );
    
};

export default Tasks;