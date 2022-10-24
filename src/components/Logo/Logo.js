import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

export function Logo() {
  return (
    <div className="LogoImg">
    <i className="LogoImg"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="rick and morty logo" width="450" height="300"/></i>
    </div>
  )
}
