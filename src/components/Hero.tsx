// src/components/Hero.tsx
import React from "react"
import { Link } from "react-router-dom"

const Hero: React.FC = () => (
  <section
    id="hero"
    className="w-full h-screen bg-cover bg-center relative"
    style={{ backgroundImage: "url('/assets/img/hero-bg.png')" }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="hero-container absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
      <h1 className="text-4xl font-bold uppercase">RECORD</h1>
      <h2 className="text-2xl mb-10">
        향기 속에 숨겨진 당신의 이야기 - AI가 듣고, 향수로 그려냅니다.
      </h2>
      <Link
        to="/projects"
        className="btn-get-started border-2 border-white text-white py-2 px-8 rounded-full hover:bg-pink-600 transition"
      >
        Get Started
      </Link>
    </div>
  </section>
)

export default Hero
