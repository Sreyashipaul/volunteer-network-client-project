import React from 'react';

const Tasks = () => {
    let [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://young-bayou-15947.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
    return (
        <div>
           <div>
      {tasks.map((task) => (
        <TaskDetails key={task._id} task={task}></TaskDetails>
      ))}
    </div>
        </div>
    );
};

export default Tasks;