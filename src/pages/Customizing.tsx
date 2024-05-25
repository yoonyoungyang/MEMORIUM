import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Customizing: React.FC = () => {
  const [memoryText, setMemoryText] = useState('.')

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
            src="/assets/img/perfumeColor/1.png"
            alt="빨강 이미지"
            className="size-1/4"
          />
          <div className="relative w-600 mx-auto mt-10 flex">
            <div className="pt-28">
              <div className=" text-white text-4xl flex">Color</div>
              <div className="flex space-x-4 pt-3">
                <button
                  title="빨간색 버튼"
                  type="button"
                  id="btn_color1"
                  onClick={() => changeColor(1)}
                  className="h-12 w-12 rounded-full bg-red-500"
                ></button>
                <button
                  title="노란색 버튼"
                  type="button"
                  id="btn_color2"
                  onClick={() => changeColor(2)}
                  className="h-12 w-12 rounded-full bg-yellow-500"
                ></button>
                <button
                  title="초록색 버튼"
                  type="button"
                  id="btn_color3"
                  onClick={() => changeColor(3)}
                  className="h-12 w-12 rounded-full bg-green-500"
                ></button>
                <button
                  title="파란색 버튼"
                  type="button"
                  id="btn_color4"
                  onClick={() => changeColor(4)}
                  className="h-12 w-12 rounded-full bg-blue-400"
                ></button>
                <button
                  title="보라색 버튼"
                  type="button"
                  id="btn_color5"
                  onClick={() => changeColor(5)}
                  className="h-12 w-12 rounded-full bg-purple-500"
                ></button>
              </div>
            </div>
          </div>
          <div className="typoImg size-1/4">
            <img
              id="img2"
              src="/assets/img/perfumeColor/1.png"
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
