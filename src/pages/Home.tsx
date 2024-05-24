import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

const Home: React.FC = () => (
  <>
    <Header />
    <div className="pt-20">
      {" "}
      {/* Add padding-top to avoid content overlap */}
      <Hero />
    </div>
    <Footer />
  </>
)

export default Home
