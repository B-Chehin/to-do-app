import React from "react";

export const Footer = () => {
  return (
    <footer className="footer-general">
      <p className="footer-text">
        © Bautista Chehin
        <strong className="developer">Full Stack</strong> Developer.
      </p>
      <nav className="footer-links">
        <ul className="links">
          <li>
            <a
              href="https://www.linkedin.com/in/bautista-chehin-906bb9196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="link"
                src="./assets/images/linkedin.png"
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
              <img
                className="link"
                src="./assets/images/github.png"
                alt="Github"
              />
            </a>
          </li>
          <li>
            <a href="mailto:chehinbautista@gmail.com">
              <img className="link" src="./assets/images/mail.png" alt="Mail" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
