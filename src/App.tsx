// src/App.tsx
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PerfumeProvider } from './contexts/perfume'
import './index.css' // Ensure Tailwind is imported
import About from './pages/About'
import Customizing from './pages/Customizing'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Result from './pages/Result'

const App: React.FC = () => (
  <PerfumeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/result" element={<Result />} />
        <Route path="/customizing" element={<Customizing />} />
      </Routes>
    </Router>
  </PerfumeProvider>
)

export default App
