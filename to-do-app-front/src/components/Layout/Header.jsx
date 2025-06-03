import React from 'react'

export const Header = () => {
  return (
    <header className="header-general">
      <div className="logo">
        <img src="./assets/images/icon.png" alt="Logo" className="logo" />
      </div>
      <h1 className="title">To Do App</h1>

      <nav className="header-links">
        <ul className="links">
          <li>
            <a
              href="https://www.linkedin.com/in/bautista-chehin-906bb9196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="link"
                src="../../assets/images/linkedin.png"
                alt="Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/B-Chehin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link" src="./assets/images/github.png" alt="Github" />
            </a>
          </li>
          <li>
            <a href="mailto:chehinbautista@gmail.com">
              <img className="link" src="./assets/images/mail.png" alt="Mail" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
