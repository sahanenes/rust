import React from "react";
import logo from "../assets/Group 164014.png";
import youtube from "../assets/Group 79.png";
import instagram from "../assets/Group 80.png";
import be from "../assets/be.png";
import linkedin from "../assets/linkedin.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" />
        <ul className="pages">
          <li>
            <a className="page" href="/">
              Hakkımızda
            </a>
          </li>
          <li>
            <a className="page" href="/">
              Jüri - Yarışma Yazılımı
            </a>
          </li>
          <li>
            <a className="page" href="/">
              Word Ninja
            </a>
          </li>
          <li>
            <a className="page" href="/">
              Word Pyramids
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={be} alt="be" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
