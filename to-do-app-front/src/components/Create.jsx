import React from "react";
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
    <form id="task-form" className="task-form" onSubmit={saveTask}>
      <h2 className="aside-title">Create a task</h2>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="description" placeholder="Description" />
      <input type="date" name="date" />
      <button type="submit">Create</button>
    </form>
  );
};
