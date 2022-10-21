import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  return (
    <ul className="Menu">
      <li><NavLink className="Menu__item" to="/">Strona główna</NavLink></li>
      <li><NavLink className="Menu__item" to="/quiz">Quiz</NavLink></li>
      <li><NavLink className="Menu__item" to="/about">About</NavLink></li>
    </ul>
  );
}

