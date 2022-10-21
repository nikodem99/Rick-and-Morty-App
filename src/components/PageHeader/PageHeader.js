import React from 'react';
import { Logo } from '../Logo';
import { Menu } from '../Menu';
import './PageHeader.scss';

export function PageHeader() {
  return (
    <header className="PageHeader">
      <Logo />
      <Menu />
    </header>
  );
}
