import React from 'react'
import githubIcon from "../../assets/images/github.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import mailIcon from "../../assets/images/mail.png";
import icon from "../../assets/images/icon.png";

export const Header = () => {
  return (
    <header className="header-general">
      <div className="logo">
        <img src={icon} alt="Logo" className="logo" />
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
                src= {linkedinIcon}
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
              <img className="link" src={githubIcon} alt="Github" />
            </a>
          </li>
          <li>
            <a href="mailto:chehinbautista@gmail.com">
              <img className="link" src={mailIcon} alt="Mail" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
