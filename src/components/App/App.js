import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Quiz } from '../../pages/Quiz';
import { About } from '../../pages/About';
import { Layout } from '../Layout';
import "/variables.scss"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"        element={<Home />} />
          <Route path="/quiz"    element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
