import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import ShowTasks from '../ShowTasks/ShowTasks';

const totalTasks = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [activities, setActivities] = useState([]);
  console.log(activities);
  useEffect(() => {
    fetch(
      "https://dry-oasis-15376.herokuapp.com//activities?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://dry-oasis-15376.herokuapp.com//delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const activity = activities.filter((ac) => ac._id !== id);
        setActivities(activity);

        console.log("delete successfully");
      });
  };
    return (
        <div>
            <div className="container">
          <Header></Header>
      <div className="row">
        {activities.map((activity) => (
          <ShowTasks
            key={Math.random()}
            handleDelete={handleDelete}
            activity={activity}
          />
        ))}
      </div>
    </div>
        </div>
    );
};

export default totalTasks;