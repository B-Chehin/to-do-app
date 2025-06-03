import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { saveStorage } from "../helpers/saveStorage";

export const Create = () => {
  const { form, changed } = useForm({});
  const [taskState, setTaskState] = React.useState({
    title: "",
    description: "",
    date: "",
  });
  const [stored, setStored] = useState("not_stored");

  const { title, description, date} = taskState;

  const saveTask = async (e) => {
    e.preventDefault();
    // Recoger datos del form
    let newTask = form;
    

    let listTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let newList = [...listTasks, newTask];
    saveStorage("tasks", newList);
    setStored("stored");
    document.querySelector("#task-form").reset();
  };

  return (
    <>
    <strong>
        {stored === "stored" ? (<h3 className="stored">Stored task:{title} at {date}</h3>) : ("") }
    </strong>

    <form id="task-form" className="task-form" onSubmit={saveTask}>
      <input type="text" name="title" placeholder="Title" onChange={changed}/>
      <input type="text" name="description" placeholder="Description" onChange={changed}/>
      <input type="date" name="date" onChange={changed}/>
      <button type="submit">Create</button>
    </form>
    </>
  );
};
