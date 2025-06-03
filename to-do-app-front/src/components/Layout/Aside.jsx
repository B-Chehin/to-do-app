import React from 'react'
import { Create } from '../Create'

export const Aside = () => {
  return (
    <aside className="aside">
        
        <Create />
        <h2 className="aside-title">Filter Tasks</h2>
        <form className="filter-form">
          <label htmlFor="filter">Filter by title:</label>
          <input type="text" id="filter" name="filtertitle" />
          <label htmlFor="filter">Filter by date:</label>
          <input type="date" id="filter-date" name="filterdate" />
          <button type="submit">Filter</button>
        </form>
      </aside>
  )
}
