import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  return (
    <ul className="Menu">
      <li><NavLink className="Menu__item" to="/">Home</NavLink></li>
      <li><NavLink className="Menu__item" to="/quizforname">Quiz</NavLink></li>
      <li><NavLink className="Menu__item" to="/about">About</NavLink></li>
    </ul>
  );
}