// src/components/Header.tsx
import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => (
  <header
    id="header"
    className="fixed top-0 w-full z-50 transition-all duration-500 p-5 bg-black bg-opacity-90"
  >
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="logo text-2xl font-bold uppercase">
        <Link to="/" className="text-white">
          <img
            src="/assets/img/logo.png"
            alt="Your Logo"
            className="h-10 filter invert"
          />
        </Link>
      </h1>
      <nav id="navbar" className="navbar">
        <ul className="flex space-x-6">
          <li>
            <Link className="text-white hover:text-gray-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-400" to="/projects">
              Make Scent
            </Link>
          </li>
        </ul>
        <i className="bi bi-list text-white text-3xl cursor-pointer lg:hidden"></i>
      </nav>
    </div>
  </header>
)

export default Header
