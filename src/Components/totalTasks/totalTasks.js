import React from 'react';

const totalTasks = () => {
    return (
        <div>
            <div className="container">
      <Header />
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