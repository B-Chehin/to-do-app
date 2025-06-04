import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Article = ({id, title, description, date}) => {
  return (
    <article className="article" key={id}>
            <h3 className="title-task">{title}</h3>
            <date className="date">{date}</date>
            <p className="description">{description}</p>
            <div className="buttons-article">
              <button type="button" class="done">
                <i class="fas fa-check"></i> 
              </button>
              <button type="button" class="update">
                <i class="fas fa-edit"></i> 
              </button>
              <button type="button" class="remove">
                <i class="fas fa-trash"></i> 
              </button>
            </div>
          </article>
  )
}

export default Article