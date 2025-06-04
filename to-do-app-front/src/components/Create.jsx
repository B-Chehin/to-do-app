import React from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { saveStorage } from "../helpers/saveStorage";

export const Create = () => {
  const { form, changed } = useForm({});
  const [stored, setStored] = useState("not_stored");

  const saveTask = async (e) => {
    e.preventDefault();

    // Recoger datos del form
    let newTask = form;

    // Obtener la lista de tareas desde localStorage
    let listTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    console.log("listTasks before update:", listTasks);
    console.log("newTask:", newTask);

    // Asegurarse de que solo se agreguen objetos directamente a la lista
    let newList = Array.isArray(listTasks)
      ? [...listTasks, newTask]
      : [newTask];

    // Guardar la lista actualizada en localStorage
    saveStorage("tasks", newList);

    // Actualizar el estado
    setStored("stored");

    // Resetear el formulario
    document.querySelector("#task-form").reset();
  };

  return (
    <>
      <strong>
        {stored === "stored" ? (
          <h3 className="stored">Task stored successfully!</h3>
        ) : (
          ""
        )}
      </strong>

      <form id="task-form" className="task-form" onSubmit={saveTask}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={changed}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={changed}
        />
        <input
          type="date"
          name="date"
          onChange={changed}
          className="date"
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};
