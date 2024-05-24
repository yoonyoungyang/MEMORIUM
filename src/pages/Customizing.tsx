import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Customizing: React.FC = () => (
  <>
    <Header />
    <div className="pt-20">
      {" "}
      {/* Add padding-top to avoid content overlap */}
      <div className="text-white text-5xl text-center font-bold">
        Customize your own Perfume!
      </div>
      <div className="relative w-500 mx-auto mt-10">
        <img
          id="img1"
          src="/assets/img/perfumeColor/1.png"
          alt="빨강 이미지"
          className="pl-40 relative w-500 -translate-x-1/3"
        />
        <div className="absolute text-white -translate-y-full left-1/2 transform -translate-x-1/2 text-2xl">
          Color
        </div>
        <div className="absolute flex space-x-4 -translate-y-80 transform translate-x-full">
          <button
            type="button"
            id="btn_color1"
            onClick={() => changeColor(1)}
            className="h-12 w-12 rounded-full bg-red-500"
          ></button>
          <button
            type="button"
            id="btn_color2"
            onClick={() => changeColor(2)}
            className="h-12 w-12 rounded-full bg-yellow-500"
          ></button>
          <button
            type="button"
            id="btn_color3"
            onClick={() => changeColor(3)}
            className="h-12 w-12 rounded-full bg-green-500"
          ></button>
          <button
            type="button"
            id="btn_color4"
            onClick={() => changeColor(4)}
            className="h-12 w-12 rounded-full bg-blue-400"
          ></button>
          <button
            type="button"
            id="btn_color5"
            onClick={() => changeColor(5)}
            className="h-12 w-12 rounded-full bg-purple-500"
          ></button>
        </div>
      </div>
      <div className="relative w-500 mx-auto mt-20">
        <img
          id="img2"
          src="/assets/img/perfumeColor/1.png"
          alt="빨강 이미지"
          className="absolute w-500 translate-x-1/2 -translate-y-1/4"
        />
        <div className="absolute text-white text-2xl transform translate-x-1/2 -translate-y-full">
          Please enter your story
          <br /> on the perfume
        </div>
        <textarea
          id="Textarea"
          cols={30}
          rows={10}
          placeholder="Enter Your Message"
          className="absolute transform translate-x-full -translate-y-1/2 h-60 p-4 border border-gray-300 rounded-lg"
        ></textarea>
      </div>
      <button
        type="button"
        id="PrintButton"
        onClick={() => window.print()}
        className="bg-blue-500 text-white py-2 px-8 rounded-full mt-10 hover:bg-blue-700 transition absolute transform translate-x-1/2 -translate-y-1/2"
      >
        Print
      </button>
    </div>
    <Footer />
  </>
)

const changeColor = (colorId: number) => {
  // Implement your color change logic here
  console.log(`Change color to ${colorId}`)
}

export default Customizing
