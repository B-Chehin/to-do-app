import { useState, useEffect } from "react";
import getTasks from "../../helpers/getTasks";
import Article from "../Article";


export const List = () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTasks(getTasks());
        setLoading(false); // Cambia el estado de carga después de obtener las tareas
    }, [])

  return (
    <section className="task-section">
        <div id="modal" className="modal">
          <div className="modal-content">
            <h3>Task Details</h3>
            <p id="modal-description">
              Description of the task will appear here.
            </p>
            <button className="close-modal">Close</button>
          </div>
        </div>
        <h2 className="title">Tasks</h2>
          {loading ? (
            <div className="loading">
              <p>Loading tasks...</p>
            </div>
          ) : tasks.length > 0 ? (
            tasks.map((task) => (
          <Article
            id={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            />
        ))
      ) : (
        <h2 className="empty">No Articles</h2>
      )}
      </section>
  )
}
