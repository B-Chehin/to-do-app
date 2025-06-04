import React from 'react'

const getTasks = () => {

    let task = JSON.parse(localStorage.getItem('tasks')) || [];

    console.log(task);

    return task;
}

export default getTasks
