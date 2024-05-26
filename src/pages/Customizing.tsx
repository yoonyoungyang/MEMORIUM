import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Customizing: React.FC = () => {
  const [memoryText, setMemoryText] = useState('.')
  const [capColor, setCapColor] = useState('red')
  const possibleCapColors = ['red', 'yellow', 'green', 'blue', 'purple']
  const changeCapColor = (chooseCap: string) => {
    setCapColor(chooseCap)
  }
  return (
    <>
      <Header />
      <div className="pt-20 bg-black bg-opacity-60 items-center">
        {' '}
        {/* Add padding-top to avoid content overlap */}
        <div className="text-black text-5xl text-center font-bold">
          Customize your own Perfume!
        </div>
        <div className="flex">
          <img
            id="img1"
            src={`/assets/img/perfumeColor/${capColor}.png`}
            alt={`${capColor} 이미지`}
            className="size-1/4"
          />
          <div className="relative w-600 mx-auto mt-10 flex">
            <div className="pt-28">
              <div className=" text-white text-4xl flex">Color</div>
              <div className="flex space-x-4 pt-3">
                {possibleCapColors.map(function (colorEl) {
                  return (
                    <button
                      title={`${colorEl}버튼`}
                      type="button"
                      id={`btn_${colorEl}`}
                      onClick={() => changeCapColor(colorEl)}
                      className={`h-12 w-12 rounded-full bg-${colorEl}-500`}
                    ></button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="typoImg size-1/4">
            <img
              id="img2"
              src={`/assets/img/perfumeColor/${capColor}.png`}
              alt="빨강 이미지"
              className=""
            />
            <div className="absolute transform translate-x-36 -translate-y-72 text-3xl">
              {memoryText}
            </div>
          </div>

          <div className="relative w-600 mx-auto mt-10 flex">
            <div className="pt-28">
              <div className="text-white text-3xl">
                Please enter your story
                <br /> on the perfume
                <br />
              </div>
              <textarea
                id="Textarea"
                cols={30}
                rows={10}
                value={memoryText}
                onChange={(e) => setMemoryText(e.target.value)}
                placeholder="Enter Your Message"
                className="h-60 p-4 border border-gray-300 rounded-lg mt-3"
              ></textarea>
            </div>
          </div>
        </div>
        <button
          type="button"
          id="PrintButton"
          onClick={() => window.print()}
          className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-700 float-right"
        >
          Print
        </button>
      </div>
      <Footer />
    </>
  )
}

const changeColor = (colorId: number) => {
  // Implement your color change logic here
  console.log(`Change color to ${colorId}`)
}

export default Customizing
