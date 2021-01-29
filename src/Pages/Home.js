import React from 'react';
import Header from '../Components/Header/Header';
import SearchTasks from '../Components/Header/SearchTasks';
import Tasks from '../Components/Tasks/Tasks';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <SearchTasks></SearchTasks>
            <Tasks> </Tasks>
        </div>
    );
};

export default Home;