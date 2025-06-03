import React from "react";
import githubIcon from "../../assets/images/github.png";
import linkedinIcon from "../../assets/images/linkedin.png";
import mailIcon from "../../assets/images/mail.png";

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
              <img className="link" src={linkedinIcon} alt="Linkedin" />
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
    </footer>
  );
};
