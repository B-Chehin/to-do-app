import React from 'react'

const getTasks = () => {

    let task = JSON.parse(localStorage.getItem('task')) || [];

    return task;
}

export default getTasks
