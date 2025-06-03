import React from 'react'
import { Header } from './components/Layout/Header'
import { Aside } from './components/Layout/Aside'
import { Footer } from './components/Layout/Footer'
import './styles/style.css'
import { List } from './components/Layout/List'

function App() {

  return (
    <div className="layout">
      {/* Header component is used to display the title of the application */}
      <Header />

      {/* Aside content form and search*/}
      <Aside />

      {/* Main content area where tasks will be displayed */}
      <List />
      
      {/* Footer content */}
      <Footer />
    </div>
  )
}

export default App
