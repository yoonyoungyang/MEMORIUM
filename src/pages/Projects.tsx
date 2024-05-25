import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Projects: React.FC = () => {
  const [chatText, setChatText] = useState('0')
  const [uploadText, setUploadText] = useState([''])
  const sendButton = () => {
    setUploadText([...uploadText, chatText])
    setChatText('')
  }
  return (
    <>
      <Header />
      <div className="pt-20">
        {' '}
        {/* Add padding-top to avoid content overlap */}
        <section
          id="services"
          className="w-full h-screen bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/img/hero-bg.jpeg')" }}
        >
          <div className="container mx-auto">
            <div className="chatbot-container bg-gray-800 bg-opacity-30 shadow-md overflow-hidden flex flex-col mx-auto w-full md:w-3/4 h-[750px]">
              <div className="chatbot-header text-black text-center py-4 text-xl font-bold">
                Chat with AI!
              </div>
              <div className="chatbox flex flex-col justify-between h-full">
                <div
                  className="chat-content flex-grow p-4 overflow-y-auto"
                  id="chat-content"
                >
                  {uploadText.map(function (uploadTextEl) {
                    return <div>{uploadTextEl}</div>
                  })}
                </div>
                <div className="typingbox flex p-4 bg-gray-100 border-t border-gray-300">
                  <input
                    className="typing-input flex-grow p-2 border border-gray-300 rounded-lg mr-2"
                    id="inputbox"
                    value={chatText}
                    onChange={(e) => setChatText(e.target.value)}
                    type="text"
                    placeholder="Enter your message"
                  />
                  <button
                    className="send-button bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                    id="addbutton"
                    onClick={sendButton}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div
              id="loading"
              className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 text-gray-800 text-2xl invisible"
            >
              loading...
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Projects
