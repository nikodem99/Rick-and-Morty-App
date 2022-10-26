import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

export function Menu() {
  return (
    <div className="Menu">
      <i><NavLink className="Menu__item" to="/">Home</NavLink></i>
      <i><NavLink className="Menu__item" to="/quizforname">Quiz</NavLink></i>
      <i><NavLink className="Menu__item" to="/about">About</NavLink></i>
    </div>
  );
}