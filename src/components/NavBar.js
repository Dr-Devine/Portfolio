import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project1">Project 1</Link>
            </li>
            <li>
                <Link to="/project2">Project 2</Link>
            </li>
            <li>
                <Link to="/project3">Project 3</Link>
            </li>
            <li>
                <Link to="/project4">Project 4</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;